// One-off: parse publications.bib + merge with curated metadata → publications.json
import fs from "node:fs";

const bib = fs.readFileSync("../publications.bib", "utf8");
const curated = JSON.parse(fs.readFileSync("src/data/publications.json", "utf8"));

function parse(s) {
  const out = [];
  let i = 0;
  while (true) {
    const at = s.indexOf("@", i);
    if (at < 0) break;
    const brace = s.indexOf("{", at);
    if (brace < 0) break;
    const type = s.slice(at + 1, brace).trim().toLowerCase();
    let depth = 0, j = brace, end = -1;
    for (; j < s.length; j++) {
      if (s[j] === "{") depth++;
      else if (s[j] === "}") { depth--; if (depth === 0) { end = j; break; } }
    }
    if (end < 0) break;
    const inner = s.slice(brace + 1, end);
    const comma = inner.indexOf(",");
    const key = inner.slice(0, comma).trim();
    out.push({ type, key, fields: fields(inner.slice(comma + 1)) });
    i = end + 1;
  }
  return out;
}
function fields(s) {
  const f = {};
  let i = 0;
  while (i < s.length) {
    const eq = s.indexOf("=", i);
    if (eq < 0) break;
    const key = s.slice(i, eq).replace(/[,\s]+/g, " ").trim().toLowerCase();
    let k = eq + 1;
    while (k < s.length && /\s/.test(s[k])) k++;
    let val = "", j = k;
    if (s[k] === "{") {
      let depth = 0;
      for (; j < s.length; j++) { if (s[j] === "{") depth++; else if (s[j] === "}") { depth--; if (depth === 0) break; } }
      val = s.slice(k + 1, j); i = j + 1;
    } else if (s[k] === '"') {
      j = k + 1; while (j < s.length && s[j] !== '"') j++;
      val = s.slice(k + 1, j); i = j + 1;
    } else {
      j = k; while (j < s.length && s[j] !== ",") j++;
      val = s.slice(k, j).trim(); i = j;
    }
    const c = s.indexOf(",", i); i = c < 0 ? s.length : c + 1;
    f[key] = val.replace(/[{}]/g, "").replace(/\s+/g, " ").trim();
  }
  return f;
}
const auth = (a) => a.split(/\s+and\s+/).map((x) => {
  x = x.trim();
  if (x.includes(",")) { const [l, f] = x.split(","); return `${f.trim()} ${l.trim()}`; }
  return x;
});
// fuzzy: drop punctuation/case and trailing plurals so "model"/"models" match
const norm = (t) =>
  t.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(/\s+/).map((w) => w.replace(/s$/, "")).join("");

const byTitle = new Map(curated.map((c) => [norm(c.title), c]));
const entries = parse(bib);
const seen = new Set();
const merged = [];

for (const e of entries) {
  const title = e.fields.title || "";
  const c = byTitle.get(norm(title));
  if (c) { if (!seen.has(c.id)) { merged.push(c); seen.add(c.id); } continue; }
  const isConf = e.type === "inproceedings";
  const venueRaw = isConf ? (e.fields.booktitle || "") : (e.fields.journal || "");
  const isPre = /arxiv/i.test(venueRaw);
  merged.push({
    id: e.key,
    title,
    authors: auth(e.fields.author || ""),
    year: parseInt(e.fields.year, 10) || 0,
    type: isPre ? "preprint" : isConf ? "conference" : "journal",
    venue: isPre ? "arXiv preprint" : venueRaw,
    featured: false,
    tags: [],
  });
}
// any curated not present in bib
for (const c of curated) if (!seen.has(c.id)) merged.push(c);

const order = { journal: 0, conference: 1, preprint: 2 };
merged.sort((a, b) => b.year - a.year || order[a.type] - order[b.type] || a.title.localeCompare(b.title));

fs.writeFileSync("src/data/publications.json", JSON.stringify(merged, null, 2) + "\n");
console.log(`total ${merged.length} | journal ${merged.filter(p=>p.type==="journal").length} | conference ${merged.filter(p=>p.type==="conference").length} | preprint ${merged.filter(p=>p.type==="preprint").length} | featured ${merged.filter(p=>p.featured).length}`);
console.log(merged.slice(0, 4).map((p) => `${p.year} [${p.type}] ${p.title.slice(0,50)} — ${p.authors.length} authors`).join("\n"));

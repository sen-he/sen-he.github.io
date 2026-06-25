---
title: "Multi-Agent LLM Orchestration for Software Engineering"
summary: "Designing collaborative multi-agent architectures that leverage frontier LLMs for automated code generation, debugging, and performance-aware refinement."
date: 2024-01-01
tags:
  - LLM
  - Multi-Agent Systems
  - Software Engineering
  - Code Generation
image:
  caption: ''
---

## Overview

Large language models have demonstrated remarkable capabilities in code generation, but individual models often produce code with functional errors or performance inefficiencies. This project investigates **multi-agent orchestration frameworks** that coordinate multiple LLMs through structured collaboration pipelines — combining specialized agents for categorization, code generation, debugging, and refinement.

## Key Contributions

Our flagship system, **PerfOrch**, introduces a memory-augmented multi-agent architecture where:

- A **Categorizing Agent** classifies programming tasks using a fixed category vocabulary to enable retrieval of relevant historical solutions.
- **Generator** and **Debugger Agents** collaborate through iterative cycles to produce functionally correct code.
- A **Refinement Agent** optimizes code performance using aggregated insights from the orchestration's memory module.
- The architecture leverages asymmetric aggregation strategies (product vs. sum) across different pipeline stages.

We evaluate across 5 frontier LLMs and demonstrate significant improvements over single-model baselines on both correctness and runtime performance metrics.

## Status

Manuscript submitted to ACM Transactions on Software Engineering and Methodology (TOSEM).

---
title: ''
summary: ''
date: 2024-01-01
type: landing

design:
  spacing: '5rem'

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ''
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: lg
      avatar:
        size: medium
        shape: circle

  - block: markdown
    content:
      title: '🔬 Research Overview'
      subtitle: ''
      text: |-
        My research lies at the intersection of **software engineering**, **cloud computing**, and **artificial intelligence**. I am particularly interested in how large language models can be orchestrated as multi-agent systems to solve complex software engineering tasks — from automated code generation and debugging to performance optimization.

        My current research thrusts include:

        - **Multi-Agent LLM Orchestration**: Designing and evaluating collaborative multi-agent architectures that leverage frontier LLMs for software engineering tasks such as code generation, debugging, and refinement (see [PerfOrch](/projects/perforchestra/)).
        - **Software Performance Engineering**: Developing methodologies for performance testing in cloud environments, including serverless platforms and edge/fog computing systems.
        - **AI-Driven Software Testing**: Harnessing LLMs and AI techniques for automated testing of complex software systems, including VR applications and cloud-native architectures.
        - **Computer Vision**: Applied work in medical image segmentation, brain connectivity analysis, and 3D vision.

        **I am actively looking for motivated PhD and MS students** interested in these research areas. If you are passionate about LLMs, cloud systems, or software engineering research, please [reach out](mailto:senhe@arizona.edu).
    design:
      columns: '1'

  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2

  - block: collection
    content:
      title: Recent Publications
      text: |
        For a complete list, see [Google Scholar](https://scholar.google.com/citations?user=ySPHD4cAAAAJ&hl=en) or [DBLP](https://dblp.org/pid/166/4467-2.html).
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation

  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      page_type: blog
      count: 5
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      offset: 0
      order: desc
    design:
      view: card
      spacing:
        padding: [0, 0, 0, 0]
---

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
      headings:
        about: ''
        education: ''
        interests: 'Research Interests'
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
        My research lies at the intersection of **AI for Software Engineering**, **Computer Vision**, and **Human-Computer Interaction**. I am particularly interested in how large language models can be orchestrated as multi-agent systems to solve complex software engineering tasks — from automated code generation and debugging to performance optimization.

        My current research thrusts include:

        - **Multi-Agent LLM Orchestration**: Designing and evaluating collaborative multi-agent architectures that leverage frontier LLMs for software engineering tasks such as code generation, debugging, and refinement (see [PerfOrch](/projects/perforchestra/)).
        - **Software Performance Engineering**: Developing methodologies for performance testing in cloud environments, including serverless platforms and edge/fog computing systems.
        - **AI-Driven Software Testing**: Harnessing LLMs and AI techniques for automated testing of complex software systems, including VR applications and cloud-native architectures.
        - **Computer Vision**: Applied work in medical image segmentation, brain connectivity analysis, and 3D vision.

   
    design:
      columns: '1'

  - block: collection
    id: journals
    content:
      title: Journal Papers
      count: 5
      filters:
        folders:
          - publications
        publication_type: article-journal
    design:
      view: citation

  - block: collection
    id: conferences
    content:
      title: Conference Papers
      count: 5
      filters:
        folders:
          - publications
        publication_type: paper-conference
      archive:
        enable: true
        link: https://scholar.google.com/citations?user=ySPHD4cAAAAJ&hl=en
        text: See all
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

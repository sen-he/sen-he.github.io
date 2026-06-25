---
title: "Performance Testing for Cloud and Serverless Computing"
summary: "Developing testing methodologies for serverless clouds, including Monte Carlo simulation-based approaches and auto-scaling stage characterization."
date: 2023-01-01
tags:
  - Cloud Computing
  - Performance Testing
  - Serverless
  - DevOps
image:
  caption: ''
---

## Overview

Cloud computing introduces fundamental challenges for performance testing due to resource contention, hidden scheduling policies, and passive auto-scaling. These challenges are amplified in **serverless computing** environments where the resource abstraction level is higher and auto-scaling behaviors are not well-characterized.

## Research Thrusts

**Serverless Auto-Scaling Characterization**: We define and characterize auto-scaling stages for serverless platforms, decomposing performance uncertainty into resource contention during execution and cold start-up latencies during environment initiation.

**Monte Carlo Simulation-Based Testing**: We develop simulation-based methodologies that can predict performance distributions of serverless applications, accounting for the stochastic nature of cloud performance fluctuations.

**AI-Based Cloud Emulation**: Building systems that emulate cloud environments on local machines to help users obtain accurate performance results at reduced testing costs, particularly when multiple applications need to be evaluated.

**Performance Assurance in DevOps**: Using development and operational data to detect performance regressions early in the software delivery cycle, with attention to end-user impact.

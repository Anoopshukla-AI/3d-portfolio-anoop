import { PortfolioData } from '../types/portfolio.types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Anoop Shukla",
    title: "AI Automation Engineer",
    tagline: "LangChain · LangGraph · n8n · RAG · MCP Protocol",
    location: "Gurugram, Haryana, India",
    locationShort: "Gurugram · Delhi NCR",
    email: "an.oops@hotmail.com",
    github: "https://github.com/Anoopshukla-AI",
    linkedin: "https://www.linkedin.com/in/an-oops",
    podcast: "ClawOperator — Hindi AI Automation Podcast on Spotify",
    availability: "Open to on-roll roles · Immediate availability",
    yearsAI: "2",
    yearsTotal: "10"
  },
  heroContent: {
    headline: "I build AI automation systems that replace manual work.",
    subheadline: "Agentic workflows. RAG pipelines. Multi-agent orchestration. MCP Protocol. Production-ready AI across finance, operations, support, and HR — with monitoring, resilience, and governance built in.",
    badgeLeft: "2 yrs Production AI",
    badgeRight: "10 yrs Enterprise IT",
    ctaPrimary: {
      label: "View Projects",
      href: "#projects"
    },
    ctaSecondary: {
      label: "Contact Me",
      href: "#contact"
    },
    ctaTertiary: {
      label: "GitHub",
      href: "https://github.com/Anoopshukla-AI",
      external: true
    },
    scrollCueLabel: "scroll to explore"
  },
  about: {
    paragraphs: [
      "I've been the first dedicated AI engineer at two organizations. No existing infrastructure, no playbook, no team. Just a mandate to build AI automation capability from scratch — and ship systems that actually run in production.",
      "Before AI, 7 years in enterprise IT across Yum! Brands, Devyani International, and Feedback Infra. That background is not incidental. It's why every system I build has monitoring, circuit-breaker patterns, Docker deployment, and Responsible AI governance from day one — not bolted on after the fact.",
      "Current focus: agentic systems, multi-agent orchestration with MCP and A2A Protocol, RAG pipelines, and n8n workflow automation that delivers 30–50% reductions in manual effort across real business functions."
    ],
    stats: [
      { value: "2+", label: "Years Production AI" },
      { value: "10+", label: "Years Enterprise IT" },
      { value: "5", label: "Client Deployments" },
      { value: "30–50%", label: "Manual Effort Reduced" }
    ],
    certifications: [
      "AWS Certified Cloud Practitioner",
      "MLOps with Vertex AI: Model Evaluation",
      "AI Skills Fest 2026"
    ]
  },
  services: [
    {
      id: "agent-workflows",
      title: "AI Agent Workflows",
      tagline: "Autonomous systems that handle multi-step operations without human-in-the-loop.",
      description: "Multi-agent architectures built with LangChain, LangGraph, and CrewAI. Researcher, Analyst, and Writer agents coordinated via MCP server and A2A Protocol. Datadog observability and circuit-breaker resilience included as standard.",
      icon: "workflow"
    },
    {
      id: "rag-pipelines",
      title: "RAG Pipelines",
      tagline: "Give your AI access to the right knowledge at query time.",
      description: "Document ingestion, chunking strategy, vector storage, and retrieval tuning across ChromaDB, Qdrant, FAISS, and pgvector. GuardRails AI and Responsible AI principles applied throughout. Built for accuracy under real query load.",
      icon: "database"
    },
    {
      id: "n8n-automation",
      title: "n8n Automation Systems",
      tagline: "End-to-end process automation, self-hosted and production-hardened.",
      description: "From CRM sync to intelligent incident management. Self-hosted, version-controlled, and documented. Proven at reducing recurring manual operational tasks by 40–50% across infrastructure and business ops environments.",
      icon: "nodes"
    },
    {
      id: "llm-integrations",
      title: "LLM Integration and Routing",
      tagline: "Connect GPT-4o, Claude, or Gemini to workflows that actually do something.",
      description: "Intent classification, auto-routing, NLP-based triage, and LLM-powered decision chains integrated into your existing support, finance, or operations stack. Works across Power Automate, n8n, Make.com, and FastAPI backends.",
      icon: "plug"
    },
    {
      id: "finance-ops-automation",
      title: "Finance and Ops Automation",
      tagline: "AI pipelines that turn raw data into decisions and reports — automatically.",
      description: "GPT-4 data extraction pipelines feeding Power BI dashboards, automated reporting workflows, and ML classification systems for structured business data. Proven 5+ hours/week saved per pipeline in production.",
      icon: "chart"
    },
    {
      id: "content-automation",
      title: "Content Automation Pipelines",
      tagline: "Scalable content production without scaling headcount.",
      description: "GPT-4 + Stable Diffusion creative pipelines in Make.com eliminating manual design and copy work. Research-to-publish automation connected to Notion, WordPress, and LinkedIn APIs.",
      icon: "layers"
    }
  ],
  projects: [
    {
      id: "mcp-copilot",
      title: "Multi-Agent MCP Copilot",
      summary: "Production multi-agent system with Researcher, Analyst, and Writer agents coordinated via MCP server and A2A Protocol. Built at Ummeed Housing Finance as the organization's most advanced AI deployment.",
      role: "Sole AI Engineer",
      outcome: "Replaced manual research-to-report workflow. Datadog observability and circuit-breaker resilience in production from day one.",
      stack: [
        "LangChain", "LangGraph", "MCP Protocol", "A2A Protocol",
        "Python", "FastAPI", "Docker", "Datadog"
      ],
      githubUrl: "#",
      demoUrl: null,
      featured: true
    },
    {
      id: "rag-knowledge-bot",
      title: "RAG Knowledge Bot — 100+ Employee Deployment",
      summary: "Production Retrieval-Augmented Generation system serving the entire employee base at Ummeed Housing Finance. Handles IT self-service queries with Responsible AI and GuardRails AI principles applied.",
      role: "Sole AI Engineer",
      outcome: "Cut repetitive IT support queries by 30–40%. First AI self-service system at the organization.",
      stack: [
        "LangChain", "ChromaDB", "GPT-4o", "FastAPI",
        "Python", "GuardRails AI", "Docker"
      ],
      githubUrl: "#",
      demoUrl: null,
      featured: true
    },
    {
      id: "agent-workflow-suite",
      title: "Autonomous Agent Workflow Suite",
      summary: "n8n + LangChain + GPT-4o/Gemini agent workflows deployed across Customer Support, Finance, and Operations at Ummeed Housing Finance. Handles ticket classification, routing, and resolution without human intervention on qualifying cases.",
      role: "Sole AI Engineer",
      outcome: "Reduced manual ticket handling by ~35%. Measurably improved SLA compliance.",
      stack: [
        "n8n", "LangChain", "GPT-4o", "Gemini",
        "Python", "FastAPI", "PostgreSQL"
      ],
      githubUrl: "#",
      demoUrl: null,
      featured: true
    },
    {
      id: "finance-reporting-pipeline",
      title: "GPT-4 Finance Reporting Pipeline",
      summary: "Automated finance data extraction using GPT-4 feeding structured outputs directly into Power BI dashboards. Eliminated manual data preparation and report compilation steps entirely.",
      role: "AI Engineer",
      outcome: "Saved ~5 hours/week per reporting cycle in production.",
      stack: [
        "GPT-4", "Python", "Power BI", "n8n", "PostgreSQL"
      ],
      githubUrl: "#",
      demoUrl: null,
      featured: false
    },
    {
      id: "vendor-ml-classifier",
      title: "Vendor Management ML Classifier",
      summary: "First ML system deployed at Feedback Infra. Production classification model for vendor data management, replacing manual data sorting across the procurement function. Built and shipped as the client's first machine learning deployment.",
      role: "Technical Lead + ML Engineer",
      outcome: "Eliminated manual vendor data sorting at scale. First ML system in the organization's history.",
      stack: [
        "Python", "Scikit-learn", "PostgreSQL", "n8n"
      ],
      githubUrl: "#",
      demoUrl: null,
      featured: false
    },
    {
      id: "it-chatbot-travel-house",
      title: "First LLM Integration — International Travel House",
      summary: "Deployed the client's first LLM integration: AI chatbots for FAQ handling and NLP-based intent classification with intelligent ticket auto-routing across customer support operations.",
      role: "IT and AI Support Engineer",
      outcome: "Reduced manual support triage by ~40% within the 4-month deployment.",
      stack: [
        "Power Automate", "NLP", "LLM Integration",
        "Intent Classification", "Python"
      ],
      githubUrl: "#",
      demoUrl: null,
      featured: false
    }
  ],
  stackItems: {
    "LLMs": [
      { name: "GPT-4o", icon: "openai" },
      { name: "Claude", icon: "anthropic" },
      { name: "Gemini", icon: "google" },
      { name: "AWS Bedrock", icon: "aws" },
      { name: "Azure OpenAI", icon: "azure" },
      { name: "Groq", icon: "groq" }
    ],
    "Agents and Orchestration": [
      { name: "LangChain", icon: "langchain" },
      { name: "LangGraph", icon: "langgraph" },
      { name: "CrewAI", icon: "crewai" },
      { name: "AutoGen", icon: "autogen" },
      { name: "MCP Protocol", icon: "mcp" },
      { name: "A2A Protocol", icon: "a2a" }
    ],
    "RAG and Vector Search": [
      { name: "ChromaDB", icon: "chroma" },
      { name: "Qdrant", icon: "qdrant" },
      { name: "FAISS", icon: "faiss" },
      { name: "LlamaIndex", icon: "llama" },
      { name: "pgvector", icon: "postgres" }
    ],
    "Workflow Automation": [
      { name: "n8n", icon: "n8n" },
      { name: "Make.com", icon: "make" },
      { name: "Power Automate", icon: "microsoft" },
      { name: "Zapier", icon: "zapier" }
    ],
    "Backend and MLOps": [
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "github" },
      { name: "Datadog", icon: "datadog" },
      { name: "GuardRails AI", icon: "guardrails" },
      { name: "Kubernetes", icon: "kubernetes" }
    ],
    "Cloud": [
      { name: "AWS SageMaker", icon: "aws" },
      { name: "Azure OpenAI", icon: "azure" },
      { name: "GCP", icon: "gcp" },
      { name: "Cloudflare", icon: "cloudflare" }
    ],
    "Data": [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Supabase", icon: "supabase" },
      { name: "Redis", icon: "redis" },
      { name: "Power BI", icon: "powerbi" }
    ]
  },
  timelineItems: [
    {
      id: "noc-yum",
      period: "May 2016 – Sep 2020",
      title: "NOC Engineer → L2 Infrastructure Support",
      company: "Yum! Brands",
      companyNote: "via TeamLease Services (2016–17), then Team Computers (2017–20)",
      location: "New Delhi, India",
      type: "foundation",
      highlights: [
        "Enterprise infrastructure support across POS systems, networking, and server management.",
        "Built automation scripts reducing manual incident resolution time.",
        "Managed L2 tickets, escalations, and SLA compliance in high-volume environments."
      ]
    },
    {
      id: "devyani",
      period: "Sep 2020 – Mar 2021",
      title: "IT Project Manager",
      company: "Devyani International Limited",
      companyNote: "via Team Computers",
      location: "Gurugram, India",
      type: "progression",
      highlights: [
        "Designed AI-assisted performance dashboards for restaurant operations and supply chain.",
        "Managed full IT project lifecycle — infrastructure rollouts, vendor coordination, stakeholder management."
      ]
    },
    {
      id: "feedback-infra",
      period: "Mar 2021 – Jan 2024",
      title: "Technical Lead — IT Infrastructure and AI Automation",
      company: "Feedback Infra Pvt. Ltd.",
      companyNote: "via Team Computers",
      location: "Gurugram, India",
      type: "milestone",
      highlights: [
        "Built the client's first ML system: production vendor classification model eliminating manual data sorting at scale.",
        "Introduced n8n automation workflows reducing recurring manual tasks by 40–50%.",
        "Led engineering team, established automation KPIs, mentored team on AI and automation tooling."
      ]
    },
    {
      id: "travel-house",
      period: "Jan 2024 – Apr 2024",
      title: "IT and AI Support Engineer",
      company: "International Travel House Limited",
      companyNote: "via Team Computers",
      location: "New Delhi, India",
      type: "milestone",
      highlights: [
        "Deployed client's first LLM integration — AI chatbots with NLP intent classification and auto-routing.",
        "Reduced manual support triage by ~40% within 4-month deployment."
      ]
    },
    {
      id: "ummeed",
      period: "Apr 2024 – Present",
      title: "AI Automation Engineer",
      company: "Ummeed Housing Finance Pvt. Ltd.",
      companyNote: "via Team Computers · First dedicated AI engineer",
      location: "Gurugram, India",
      type: "current",
      highlights: [
        "Autonomous agent workflows (n8n + LangChain + GPT-4o/Gemini) across Support, Finance, and Operations — ~35% reduction in manual ticket handling.",
        "Production RAG knowledge bot (LangChain + ChromaDB) serving 100+ employees — 30–40% reduction in repetitive IT queries.",
        "Multi-agent MCP Copilot with Researcher, Analyst, and Writer agents — MCP server, A2A Protocol, Datadog, Docker.",
        "Finance reporting pipeline (GPT-4 → Power BI) saving ~5 hours/week. Creative automation pipeline eliminating ~8 hours/week of manual design work."
      ]
    }
  ],
  contactLinks: {
    headline: "Ready to automate something that matters?",
    subtext: "Based in Gurugram. Open to on-roll AI Engineering roles across Delhi NCR — Gurugram, Noida, Delhi, Ghaziabad. Available for remote AI automation contracts. Immediate availability.",
    availabilityBadge: "Available Now",
    locationLine: "Gurugram, India · Delhi NCR · Remote",
    email: "an.oops@hotmail.com",
    linkedin: "https://www.linkedin.com/in/an-oops",
    github: "https://github.com/Anoopshukla-AI",
    closingLine: "No pitch decks. Just a conversation about what you need built."
  }
};

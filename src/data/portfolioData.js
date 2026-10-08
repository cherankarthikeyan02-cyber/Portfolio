export const portfolioData = {
  personal: {
    name: "CHERAN G K",
    title: "AI & Data Science Specialist | Business & Data Analyst",
    subtitle: "Bridging the gap between cutting-edge AI technologies and actionable corporate business strategy.",
    email: "cherankarthikeyan02@gmail.com",
    phone: "+91 6380731719",
    location: "Erode, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/k-cheran",
    linkedinHandle: "k-cheran",
    github: "https://www.github.com/cherankarthikeyan02-cyber",
    githubHandle: "cherankarthikeyan02-cyber",
    careerObjective: "Motivated MBA graduate specialising in AI & Data Science, seeking to leverage analytical expertise and business acumen to drive data-driven decision-making and digital transformation.",
    stats: [
      { label: "MBA CGPA", value: "9.00 / 10", subtext: "SRM University" },
      { label: "B.E. CGPA", value: "8.98 / 10", subtext: "Bannari Amman Inst." },
      { label: "Data Records Analyzed", value: "3,000+", subtext: "Multi-table Data Profiling" },
      { label: "Data Modeling", value: "12 Tables", subtext: "Star Schema Architecture" },
    ]
  },

  education: [
    {
      degree: "MBA – Artificial Intelligence & Data Science",
      institution: "SRM University",
      period: "Jun 2024 – Jun 2026 (Expected)",
      grade: "CGPA: 9.00 / 10.00",
      type: "Postgraduate",
      description: "Advanced curriculum covering business analytics, predictive AI modeling, digital strategy frameworks, database administration, and corporate digital transformation.",
      highlights: [
        "Specialization in applied AI frameworks for business optimization",
        "Author of dissertation: 'A Study on AI and Data Science in Digital Transformation Strategies'",
        "Consistent academic excellence with top percentile ranking (9.00 CGPA)"
      ]
    },
    {
      degree: "Bachelor of Engineering (B.E.)",
      institution: "Bannari Amman Institute of Technology",
      period: "Jun 2020 – Jun 2024",
      grade: "CGPA: 8.98 / 10.00",
      type: "Undergraduate",
      description: "Strong engineering foundation focusing on quantitative problem solving, systems logic, quality control processes, and analytical methodologies.",
      highlights: [
        "Distinction CGPA of 8.98 / 10.00",
        "Applied statistical modeling and analytical research",
        "Foundational technical training in programming, automation & process engineering"
      ]
    }
  ],

  experience: [
    {
      role: "Calibration & Metrology Trainee",
      company: "Roots Industries India Pvt. Ltd.",
      location: "Coimbatore, Tamil Nadu",
      period: "2024 – 2025",
      type: "Industry Experience",
      department: "Quality Assurance & Metrology Lab",
      description: "Specialized in micro-precision metrology standards, calibration traceability, and data integrity for automotive component manufacturing.",
      responsibilities: [
        "Calibrated and maintained precision measuring instruments per stringent quality and metrology standards (micrometers, vernier calipers, dial gauges, CMM).",
        "Maintained rigorous calibration records, ensuring 100% audit compliance and traceability with international quality standards.",
        "Supported the Quality Assurance (QA) team in manufacturing quality control processes, standard deviation analysis, and data documentation to prevent defect propagation."
      ],
      skillsGained: ["Precision Metrology", "Quality Assurance", "Audit Traceability", "Data Documentation", "Statistical Process Control"]
    }
  ],

  projects: [
    {
      id: "trendkart",
      title: "TrendKart Fashion Sales Analysis Dashboard",
      subtitle: "30.6% MoM Sales Decline Diagnostic & Profit Optimization",
      category: "Sales Analytics & Business Intelligence",
      tools: ["Microsoft Excel", "Power Query", "PivotTables", "PivotCharts", "KPI Slicers"],
      metrics: {
        records: "3,000+",
        tables: "6 Linked Tables",
        declineDiagnosed: "30.6% MoM",
        impact: "Clear recovery strategy"
      },
      summary: "Cleaned and profiled 3,000 transaction records across 6 linked tables to diagnose a critical 30.6% month-over-month sales decline, presenting actionable recovery strategies to stakeholders.",
      details: [
        "Cleaned and profiled 3,000 transaction records across 6 linked relational tables using advanced formulas (VLOOKUP, IF, COUNTIF) to flag duplicate invoices, missing IDs, and mixed data types.",
        "Engineered an interactive Excel dashboard with dynamic PivotTables, PivotCharts, interactive slicers, and KPI cards to visualize monthly revenue, profit margins, and channel performance.",
        "Applied rigorous diagnostic thinking to isolate a 30.6% month-over-month sales downturn to specific underperforming inventory categories and logistics bottlenecks, communicating strategic mitigation roadmaps to business executives."
      ],
      interactiveDemo: {
        type: "sales_kpi",
        channels: [
          { name: "Online Marketplace", revenue: "$142,500", growth: "+14.2%", share: "45%" },
          { name: "Direct Retail", revenue: "$98,200", growth: "-30.6%", flag: "Anomaly Detected", share: "31%" },
          { name: "Wholesale B2B", revenue: "$75,800", growth: "+6.1%", share: "24%" }
        ],
        kpiSummary: {
          totalRevenue: "$316,500",
          recoveryTarget: "+18.5%",
          duplicateInvoicesCleared: "142 records flagged & resolved"
        }
      }
    },
    {
      id: "healthplus",
      title: "HealthPlus Healthcare Database Analysis",
      subtitle: "Relational Query Architecture & Specialist Performance Ranking",
      category: "Relational Databases & SQL Optimization",
      tools: ["MySQL", "SQL Window Functions", "Aggregation Queries", "Schema Design"],
      metrics: {
        tables: "5 Relational Tables",
        functions: "RANK, LAG, LEAD",
        focus: "Top 5 Clinics Analysis",
        analysis: "Revenue Breakdown"
      },
      summary: "Designed and queried a 5-table healthcare relational database using advanced SQL window functions to analyze patient demand, rank medical specialists, and optimize clinic capacity.",
      details: [
        "Queried and structured a 5-table relational healthcare database utilizing complex SELECT, WHERE, JOIN, GROUP BY, ORDER BY, HAVING, and multi-level aggregate queries.",
        "Implemented SQL window functions and statistical metrics (RANK(), DENSE_RANK(), LAG(), LEAD(), rolling averages) to benchmark specialist consultation fees across medical departments.",
        "Identified top 5 revenue-generating clinics by patient volume and synthesized cross-departmental revenue streams across outpatient consultations, diagnostics laboratory, and pharmacy dispensing."
      ],
      interactiveDemo: {
        type: "sql_runner",
        sampleQuery: `SELECT \n  c.clinic_name,\n  COUNT(a.appointment_id) AS total_visits,\n  SUM(b.consultation_fee + b.lab_fee + b.med_fee) AS total_revenue,\n  RANK() OVER (ORDER BY SUM(b.consultation_fee + b.lab_fee + b.med_fee) DESC) AS revenue_rank\nFROM clinics c\nJOIN appointments a ON c.clinic_id = a.clinic_id\nJOIN billings b ON a.appointment_id = b.appointment_id\nGROUP BY c.clinic_id\nORDER BY revenue_rank ASC\nLIMIT 5;`,
        results: [
          { rank: 1, clinic: "HealthPlus Central Metro", visits: "1,420", rev: "$284,000", topDept: "Cardiology" },
          { rank: 2, clinic: "HealthPlus North Pavilion", visits: "1,180", rev: "$215,600", topDept: "Orthopedics" },
          { rank: 3, clinic: "HealthPlus West Care Center", visits: "980", rev: "$178,200", topDept: "Pediatrics" },
          { rank: 4, clinic: "HealthPlus East Outpatient", visits: "840", rev: "$142,500", topDept: "Neurology" },
          { rank: 5, clinic: "HealthPlus South Community", visits: "720", rev: "$119,800", topDept: "General Medicine" }
        ]
      }
    },
    {
      id: "aerohome",
      title: "AeroHome Manufacturing Analytics Dashboard",
      subtitle: "12-Table Star Schema Architecture & Downtime Root-Cause Tracking",
      category: "Enterprise BI & Data Modeling",
      tools: ["Power BI", "Power Query", "Star Schema Modeling", "DAX Measures"],
      metrics: {
        tables: "12-Table Star Schema",
        domains: "Quality, Downtime, POs",
        output: "Production & Supplier KPIs",
        readiness: "Production Deployed"
      },
      summary: "Cleaned and modeled an enterprise 12-table manufacturing dataset into an optimized star schema in Power BI, tracking defect rates, downtime causes, and supplier lead times.",
      details: [
        "Architected an end-to-end data model transforming a raw 12-table manufacturing dataset (spanning production lines, quality assurance, mechanical downtime, and purchase orders) into a performant Star Schema.",
        "Engineered executive Power BI dashboards monitoring daily production throughput, parts-per-million defect rates, unplanned downtime root causes, and supplier lead-time variances.",
        "Demonstrated strong initiative and steep learning velocity by mastering advanced Power BI modeling techniques and DAX aggregations to deploy production-ready dashboards independently."
      ],
      interactiveDemo: {
        type: "manufacturing_telemetry",
        schemaNodes: ["Fact_Production", "Dim_DowntimeCauses", "Dim_QualityDefects", "Dim_Suppliers", "Dim_AssemblyLines", "Dim_PurchaseOrders"],
        liveMetrics: [
          { name: "OEE (Overall Equipment Efficiency)", val: "88.4%", status: "Optimal" },
          { name: "Defect Rate (PPM)", val: "142 PPM", status: "-18% MoM" },
          { name: "Supplier On-Time Lead Time", val: "94.2%", status: "On Target" }
        ]
      }
    },
    {
      id: "dissertation",
      title: "AI & Data Science in Digital Transformation Strategies",
      subtitle: "MBA Research Dissertation & Enterprise AI Maturity Framework",
      category: "Strategic Research & AI Transformation",
      tools: ["Primary Research", "AI Maturity Modeling", "Case Study Methodology", "Statistical Analysis"],
      metrics: {
        scope: "Global Case Studies",
        framework: "4-Level Maturity Model",
        focus: "Operational Efficiency",
        institution: "SRM University"
      },
      summary: "Authored an in-depth MBA dissertation examining how leading enterprises leverage AI and data analytics to accelerate digital transformation, proposing a novel AI maturity framework.",
      details: [
        "Investigated empirical methodologies through which multinational corporations leverage machine learning, big data pipelines, and predictive algorithms to drive digital reinvention.",
        "Conducted in-depth case study synthesis examining AI implementations that optimized operational efficiency, minimized friction, and elevated end-user customer experiences.",
        "Formulated a comprehensive framework linking organizational AI maturity levels with quantifiable digital transformation business outcomes using primary research data."
      ],
      interactiveDemo: {
        type: "maturity_framework",
        levels: [
          { stage: "Level 1: Ad-hoc", focus: "Isolated spreadsheets, reactive decision making, manual reporting" },
          { stage: "Level 2: Opportunistic", focus: "Basic BI dashboards, pilot machine learning trials, centralized SQL" },
          { stage: "Level 3: Systematic", focus: "Enterprise Star Schema, automated ETL pipelines, predictive diagnostics" },
          { stage: "Level 4: Transformational", focus: "Real-time AI decision engines, autonomous forecasting, continuous digital ROI" }
        ]
      }
    }
  ],

  skills: {
    programming: [
      { name: "SQL", level: 90, note: "Complex Joins, Aggregates, Window Functions (RANK, LAG, LEAD)" },
      { name: "Python", level: 75, note: "Data Analysis, Pandas, NumPy, Basic Scripting" }
    ],
    dataTools: [
      { name: "Power BI", level: 92, note: "Star Schema Modeling, DAX, Interactive Dashboards" },
      { name: "Tableau", level: 85, note: "Visual Analytics, Heatmaps, Parameterized Reports" },
      { name: "Power Query", level: 90, note: "Data Cleaning, ETL Transformation, Multi-source merging" }
    ],
    databases: [
      { name: "MySQL", level: 88, note: "Relational Schema Design, Foreign Keys, Performance Tuning" }
    ],
    spreadsheetTools: [
      { name: "Microsoft Excel", level: 95, note: "VLOOKUP, XLOOKUP, IF, SUMIF, COUNTIF, PivotTables, Slicers, KPI Cards" }
    ],
    businessStrategy: [
      { name: "Data-Driven Strategy", level: 92, note: "Translating data findings into executive business roadmaps" },
      { name: "Digital Transformation", level: 90, note: "AI maturity assessment, workflow modernization" },
      { name: "Business Analytics", level: 92, note: "Root-cause diagnostics, MoM anomaly detection" },
      { name: "Quality Assurance & Metrology", level: 88, note: "Precision calibration, ISO compliance, audit traceability" }
    ],
    softSkills: [
      "Problem Solving & Critical Thinking",
      "Executive Communication & Storytelling",
      "Cross-Functional Team Collaboration",
      "Rigorous Attention to Detail",
      "Quick Adaptability to New Technologies"
    ]
  },

  certificationsAndAchievements: [
    {
      title: "MBA in Artificial Intelligence & Data Science",
      org: "SRM University (Expected Jun 2026)",
      detail: "Achieved top academic standing with 9.00 / 10.00 CGPA."
    },
    {
      title: "Exemplary Academic Distinction",
      org: "SRM University & Bannari Amman Institute of Technology",
      detail: "Maintained stellar academic consistency: CGPA 9.00 (MBA) and 8.98 (B.E.)."
    },
    {
      title: "Automotive Precision Metrology & QA Exposure",
      org: "Roots Industries India Pvt. Ltd.",
      detail: "Hands-on experience calibrating micro-tolerance industrial equipment & verifying traceability records."
    }
  ]
};

export const pricingData = {
  website: {
    title: "Website Development",
    description:
      "Professional business websites designed for startups, SMEs, and enterprises with responsive UI, SEO optimization, and scalable architecture.",

    packages: [
      {
        id: 1,
        slug: "starter",
        title: "Starter Website",
        tagline: "Perfect for startups & small businesses",

        originalPrice: 19999,
        offerPrice: 14999,

        offer: {
          enabled: true,
          title: "🚀 Launch Offer",
          badge: "Save ₹5,000",
          save: 5000,
        },

        delivery: "5 - 7 Days",
        support: "1 Month",

        popular: false,
        custom: false,

        idealFor: "Portfolio, Local Business, Startup",

        technologies: ["React", "HTML5", "CSS3", "Bootstrap/Tailwind"],

        features: [
          "Up to 5 Pages",
          "Responsive Design",
          "Premium UI",
          "Contact Form",
          "WhatsApp Chat",
          "Google Maps",
          "Social Media Integration",
          "Basic SEO",
          "SSL Installation",
          "Performance Optimization",
        ],

        bonus: ["Free Deployment", "1 Month Support", "Training Session"],

        paymentPlan: ["40% Advance", "40% Development", "20% Delivery"],

        buttonText: "Get Started",
      },

      {
        id: 2,
        slug: "business",
        title: "Business Website",
        tagline: "Best for growing businesses",

        originalPrice: 44999,
        offerPrice: 34999,

        offer: {
          enabled: true,
          title: "🔥 Best Seller",
          badge: "Save ₹10,000",
          save: 10000,
        },

        delivery: "10 - 15 Days",
        support: "3 Months",

        popular: true,
        custom: false,

        idealFor: "Healthcare, Travel, Manufacturing, Education, Corporate",

        technologies: ["React", "Node.js", "MongoDB", "Express"],

        features: [
          "Everything in Starter",
          "Up to 15 Pages",
          "Dynamic Website",
          "Admin Dashboard",
          "Blog Module",
          "Gallery",
          "Testimonials",
          "Career Module",
          "Inquiry Management",
          "Google Analytics",
          "Advanced SEO",
          "Performance Optimization",
        ],

        bonus: [
          "Free Deployment",
          "Domain Setup",
          "Hosting Setup",
          "Business Email Setup",
          "Website Training",
        ],

        paymentPlan: ["40% Advance", "40% Development", "20% Delivery"],

        buttonText: "Get Started",
      },

      {
        id: 3,
        slug: "premium",
        title: "Premium Website",
        tagline: "Enterprise ready business website",

        originalPrice: 99999,
        offerPrice: 79999,

        offer: {
          enabled: true,
          title: "⭐ Premium Offer",
          badge: "Save ₹20,000",
          save: 20000,
        },

        delivery: "20 - 30 Days",
        support: "6 Months",

        popular: false,
        custom: false,

        idealFor: "Medium & Large Enterprises",

        technologies: ["React", "Node.js", "MongoDB", "REST API"],

        features: [
          "Unlimited Dynamic Pages",
          "Admin Dashboard",
          "Role Management",
          "User Login",
          "Payment Gateway",
          "API Integration",
          "Advanced Reports",
          "Analytics Dashboard",
          "Database Backup",
          "Advanced Security",
          "Technical SEO",
          "Priority Support",
        ],

        bonus: [
          "Free SSL",
          "Business Email",
          "Deployment",
          "Training",
          "Documentation",
        ],

        paymentPlan: ["40% Advance", "40% Development", "20% Delivery"],

        buttonText: "Get Started",
      },

      {
        id: 4,
        slug: "enterprise",
        title: "Enterprise Solution",
        tagline: "Fully customized software solution",

        originalPrice: 299999,
        offerPrice: 199999,

        offer: {
          enabled: true,
          title: "📞 Free Consultation",
          badge: "Starting From",
          save: 100000,
        },

        delivery: "Depends on Scope",
        support: "12 Months",

        popular: false,
        custom: true,

        idealFor: "Large Enterprises, Government, Multi-location Businesses",

        technologies: ["React", "Node", "Cloud", "Microservices"],

        features: [
          "Unlimited Modules",
          "Custom Development",
          "ERP Integration",
          "CRM Integration",
          "AI Integration",
          "Cloud Deployment",
          "REST APIs",
          "Dedicated Project Manager",
          "Architecture Planning",
          "High Security",
          "Priority Support",
        ],

        bonus: [
          "Free Consultation",
          "Architecture Planning",
          "Deployment",
          "Training",
          "Documentation",
        ],

        paymentPlan: ["30% Advance", "40% Development", "30% Deployment"],

        buttonText: "Request Proposal",
      },
    ],
  },

  ecommerce: {
    title: "E-Commerce Development",

    description:
      "Launch powerful online stores with secure payments, inventory management, and scalable commerce solutions.",

    packages: [
      {
        id: 1,
        slug: "starter-store",
        title: "Starter Store",
        tagline: "Start selling online",

        originalPrice: 44999,
        offerPrice: 34999,

        offer: {
          enabled: true,
          title: "🛒 Launch Offer",
          badge: "Save ₹10,000",
          save: 10000,
        },

        delivery: "10 - 15 Days",
        support: "2 Months",

        popular: false,

        idealFor: "Small Businesses",

        features: [
          "Up to 100 Products",
          "Categories",
          "Shopping Cart",
          "Checkout",
          "Payment Gateway",
          "Coupon System",
          "Order Management",
          "Responsive Design",
          "Basic SEO",
        ],

        bonus: ["Free Deployment", "Training"],

        paymentPlan: ["40%", "40%", "20%"],

        buttonText: "Get Started",
      },

      {
        id: 2,
        slug: "growth-store",
        title: "Growth Store",
        tagline: "Best for scaling businesses",

        originalPrice: 74999,
        offerPrice: 59999,

        popular: true,

        delivery: "20 Days",

        support: "6 Months",

        features: [
          "Unlimited Products",
          "Customer Login",
          "Wishlist",
          "Reviews",
          "Inventory",
          "GST Invoice",
          "Analytics",
          "SEO",
          "Admin Dashboard",
        ],

        bonus: ["Business Email", "Training"],

        paymentPlan: ["40%", "40%", "20%"],

        buttonText: "Get Started",
      },

      {
        id: 3,
        slug: "professional-store",
        title: "Professional Store",

        tagline: "Advanced ecommerce platform",

        originalPrice: 129999,
        offerPrice: 99999,

        delivery: "30 Days",

        support: "6 Months",

        features: [
          "Everything in Growth",
          "Warehouse Management",
          "CRM Integration",
          "Marketing Tools",
          "Reports",
          "Advanced Analytics",
          "Delivery API",
          "Push Notifications",
        ],

        bonus: ["Deployment", "Training"],

        paymentPlan: ["40%", "40%", "20%"],

        buttonText: "Get Started",
      },

      {
        id: 4,
        slug: "marketplace",
        title: "Marketplace",

        tagline: "Multi-vendor ecommerce platform",

        custom: true,

        originalPrice: 299999,
        offerPrice: 199999,

        delivery: "Depends on Scope",

        support: "12 Months",

        features: [
          "Multi Vendor",
          "Vendor Dashboard",
          "Commission Management",
          "Wallet",
          "Delivery Integration",
          "Admin Panel",
          "Mobile APIs",
          "Cloud Deployment",
        ],

        bonus: ["Dedicated Manager", "Training"],

        paymentPlan: ["30%", "40%", "30%"],

        buttonText: "Request Proposal",
      },
    ],
  },

  mobile: {
    title: "Mobile App Development",

    description:
      "Build modern Android & iOS applications with secure backend, APIs, and enterprise-grade performance.",

    packages: [
      {
        id: 1,
        slug: "basic-app",
        title: "Basic App",

        tagline: "Launch your first mobile app",

        originalPrice: 99999,
        offerPrice: 79999,

        delivery: "20 Days",

        support: "2 Months",

        features: [
          "Android App",
          "Responsive UI",
          "User Login",
          "API Integration",
          "Push Notifications",
          "Play Store Deployment",
        ],

        bonus: ["Deployment", "Training"],

        buttonText: "Get Started",
      },

      {
        id: 2,
        slug: "startup-app",
        title: "Startup App",

        tagline: "Most Popular",

        originalPrice: 229999,
        offerPrice: 179999,

        popular: true,

        delivery: "30 - 45 Days",

        support: "6 Months",

        features: [
          "Android + iOS",
          "Admin Panel",
          "Payment Gateway",
          "Firebase",
          "Analytics",
          "Notifications",
          "REST APIs",
        ],

        bonus: ["Deployment", "Training", "Documentation"],

        buttonText: "Get Started",
      },

      {
        id: 3,
        slug: "business-app",
        title: "Business App",

        tagline: "Enterprise ready application",

        originalPrice: 349999,
        offerPrice: 299999,

        delivery: "45 - 60 Days",

        support: "6 Months",

        features: [
          "Everything in Startup",
          "Role Management",
          "Reports",
          "Dashboard",
          "Offline Sync",
          "Advanced Analytics",
          "Cloud APIs",
          "Performance Optimization",
        ],

        bonus: ["Priority Support", "Training"],

        buttonText: "Get Started",
      },

      {
        id: 4,
        slug: "enterprise-app",
        title: "Enterprise Mobile Solution",

        tagline: "Custom enterprise mobility",

        custom: true,

        originalPrice: 699999,
        offerPrice: 499999,

        delivery: "Depends on Scope",

        support: "12 Months",

        features: [
          "Custom Development",
          "AI Integration",
          "Live Tracking",
          "Cloud Infrastructure",
          "Enterprise APIs",
          "Scalable Architecture",
          "Dedicated Team",
        ],

        bonus: ["Dedicated Manager", "Architecture Planning", "Documentation"],

        buttonText: "Request Proposal",
      },
    ],
  },
  saas: {
    title: "SaaS Development",

    description:
      "Build scalable Software-as-a-Service platforms with secure architecture, subscription billing, automation, and cloud deployment.",

    packages: [
      {
        id: 1,
        slug: "mvp",

        title: "MVP SaaS",
        tagline: "Validate your startup idea",

        originalPrice: 199999,
        offerPrice: 149999,

        offer: {
          enabled: true,
          title: "🚀 Startup Offer",
          badge: "Save ₹50,000",
          save: 50000,
        },

        delivery: "30 - 45 Days",
        support: "3 Months",

        popular: false,
        custom: false,

        idealFor: "Startups & Founders",

        technologies: ["React", "Node.js", "MongoDB", "AWS"],

        features: [
          "Authentication",
          "Admin Dashboard",
          "User Dashboard",
          "Subscription Billing",
          "Payment Gateway",
          "Email Notifications",
          "Responsive UI",
          "Cloud Deployment",
          "Analytics",
          "Basic Reports",
        ],

        bonus: ["Deployment", "Technical Documentation", "Training Session"],

        paymentPlan: ["40% Advance", "40% Development", "20% Delivery"],

        buttonText: "Get Started",
      },

      {
        id: 2,
        slug: "startup",

        title: "Startup SaaS",
        tagline: "Best for growing SaaS companies",

        originalPrice: 449999,
        offerPrice: 349999,

        offer: {
          enabled: true,
          title: "🔥 Most Popular",
          badge: "Save ₹1,00,000",
          save: 100000,
        },

        delivery: "45 - 60 Days",
        support: "6 Months",

        popular: true,

        idealFor: "Growing SaaS Businesses",

        technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],

        features: [
          "Everything in MVP",
          "Role Management",
          "Team Workspace",
          "Subscription Plans",
          "REST APIs",
          "Email Automation",
          "Reports & Analytics",
          "Notification System",
          "API Documentation",
          "Performance Optimization",
        ],

        bonus: [
          "Priority Deployment",
          "Developer Training",
          "API Documentation",
        ],

        paymentPlan: ["40% Advance", "40% Development", "20% Delivery"],

        buttonText: "Get Started",
      },

      {
        id: 3,
        slug: "business",

        title: "Business SaaS",
        tagline: "Enterprise-ready SaaS Platform",

        originalPrice: 799999,
        offerPrice: 599999,

        delivery: "60 - 90 Days",
        support: "9 Months",

        features: [
          "Everything in Startup",
          "Multi Tenant Architecture",
          "Advanced Analytics",
          "Workflow Automation",
          "CRM Integration",
          "API Integrations",
          "SSO Login",
          "Audit Logs",
          "Advanced Security",
          "Backup & Recovery",
        ],

        bonus: ["Architecture Consultation", "Deployment", "Training"],

        paymentPlan: ["40% Advance", "40% Development", "20% Delivery"],

        buttonText: "Get Started",
      },

      {
        id: 4,
        slug: "enterprise",

        title: "Enterprise SaaS",

        tagline: "Custom Cloud Platform",

        custom: true,

        originalPrice: 1299999,
        offerPrice: 999999,

        delivery: "Depends on Scope",
        support: "12 Months",

        features: [
          "Custom Architecture",
          "Microservices",
          "AI Integration",
          "DevOps",
          "Docker & Kubernetes",
          "CI/CD",
          "Enterprise APIs",
          "Dedicated Team",
          "Project Manager",
          "Priority Support",
        ],

        bonus: ["Architecture Planning", "Dedicated Manager", "Training"],

        paymentPlan: ["30% Advance", "40% Development", "30% Delivery"],

        buttonText: "Request Proposal",
      },
    ],
  },

  crm: {
    title: "CRM Development",

    description:
      "Custom CRM software to streamline customer management, sales, support, and business automation.",

    packages: [
      {
        id: 1,
        slug: "basic-crm",

        title: "Basic CRM",

        tagline: "Customer & Lead Management",

        originalPrice: 199999,
        offerPrice: 149999,

        delivery: "25 - 35 Days",
        support: "3 Months",

        features: [
          "Lead Management",
          "Customer Management",
          "Task Management",
          "Sales Dashboard",
          "Reports",
          "Role Management",
          "Email Notifications",
        ],

        bonus: ["Deployment", "Training"],

        buttonText: "Get Started",
      },

      {
        id: 2,
        slug: "professional-crm",

        title: "Professional CRM",

        tagline: "Most Popular",

        originalPrice: 399999,
        offerPrice: 299999,

        popular: true,

        delivery: "45 Days",
        support: "6 Months",

        features: [
          "Everything in Basic",
          "Sales Pipeline",
          "Quotation Management",
          "Invoice Management",
          "WhatsApp Integration",
          "Email Automation",
          "Analytics Dashboard",
          "REST APIs",
        ],

        bonus: ["Documentation", "Training", "Deployment"],

        buttonText: "Get Started",
      },

      {
        id: 3,
        slug: "enterprise-crm",

        title: "Enterprise CRM",

        tagline: "Fully Customized CRM",

        custom: true,

        originalPrice: 799999,
        offerPrice: 599999,

        delivery: "Depends on Scope",
        support: "12 Months",

        features: [
          "Everything in Professional",
          "ERP Integration",
          "AI Assistant",
          "Workflow Automation",
          "Multi Branch",
          "Custom Modules",
          "Mobile APIs",
          "Priority Support",
        ],

        bonus: ["Dedicated Project Manager", "Training"],

        paymentPlan: ["30%", "40%", "30%"],

        buttonText: "Request Proposal",
      },
    ],
  },

  erp: {
    title: "ERP Development",

    description:
      "Enterprise Resource Planning software to manage HR, Finance, Sales, Inventory, Manufacturing, and Operations.",

    packages: [
      {
        id: 1,
        slug: "lite",

        title: "ERP Lite",

        tagline: "Small Business ERP",

        originalPrice: 349999,
        offerPrice: 249999,

        delivery: "45 Days",
        support: "6 Months",

        features: [
          "HR",
          "Employee Management",
          "Inventory",
          "Sales",
          "Purchase",
          "Reports",
          "Dashboard",
        ],

        bonus: ["Deployment", "Training"],

        buttonText: "Get Started",
      },

      {
        id: 2,
        slug: "standard",

        title: "ERP Standard",

        tagline: "Best for Medium Businesses",

        originalPrice: 649999,
        offerPrice: 499999,

        popular: true,

        delivery: "60 - 90 Days",
        support: "9 Months",

        features: [
          "Everything in Lite",
          "Payroll",
          "CRM",
          "Accounting",
          "Production",
          "Asset Management",
          "GST Reports",
          "Analytics",
        ],

        bonus: ["Deployment", "Documentation", "Training"],

        buttonText: "Get Started",
      },

      {
        id: 3,
        slug: "enterprise",

        title: "Enterprise ERP",

        tagline: "Complete Enterprise Suite",

        custom: true,

        originalPrice: 1299999,
        offerPrice: 999999,

        delivery: "Depends on Scope",
        support: "12 Months",

        features: [
          "Everything in Standard",
          "Manufacturing",
          "Supply Chain",
          "Multi Branch",
          "Business Intelligence",
          "Cloud Deployment",
          "AI Analytics",
          "Custom Modules",
          "Dedicated Team",
        ],

        bonus: ["Project Manager", "Architecture Planning", "Training"],

        paymentPlan: ["30%", "40%", "30%"],

        buttonText: "Request Proposal",
      },
    ],
  },
  ai: {
    title: "AI Solutions",

    description:
      "Leverage Artificial Intelligence to automate business processes, improve customer experience, and increase productivity with custom AI-powered solutions.",

    packages: [
      {
        id: 1,
        slug: "ai-chatbot",

        title: "AI Chatbot",
        tagline: "Smart AI Assistant for your business",

        originalPrice: 69999,
        offerPrice: 49999,

        offer: {
          enabled: true,
          title: "🤖 AI Launch Offer",
          badge: "Save ₹20,000",
          save: 20000,
        },

        delivery: "10 - 15 Days",
        support: "2 Months",

        popular: false,

        idealFor: "Business Websites, Healthcare, Ecommerce",

        technologies: ["OpenAI", "Gemini", "React", "Node.js"],

        features: [
          "Custom AI Chatbot",
          "Knowledge Base Training",
          "Website Integration",
          "Lead Collection",
          "Multi-language Support",
          "WhatsApp Integration",
          "Analytics Dashboard",
        ],

        bonus: ["Deployment", "Training Session"],

        paymentPlan: ["40% Advance", "40% Development", "20% Delivery"],

        buttonText: "Get Started",
      },

      {
        id: 2,
        slug: "ai-automation",

        title: "AI Automation",

        tagline: "Automate your workflow",

        originalPrice: 199999,
        offerPrice: 149999,

        popular: true,

        delivery: "20 - 30 Days",

        support: "6 Months",

        idealFor: "SMEs, Enterprises",

        technologies: ["OpenAI", "Python", "Node.js", "Automation APIs"],

        features: [
          "Workflow Automation",
          "AI Content Generation",
          "Email Automation",
          "Document Processing",
          "OCR Integration",
          "AI Reports",
          "Custom APIs",
          "Admin Dashboard",
        ],

        bonus: ["Documentation", "Deployment"],

        paymentPlan: ["40% Advance", "40% Development", "20% Delivery"],

        buttonText: "Get Started",
      },

      {
        id: 3,
        slug: "enterprise-ai",

        title: "Enterprise AI",

        tagline: "Custom AI Platform",

        custom: true,

        originalPrice: 599999,
        offerPrice: 399999,

        delivery: "Depends on Scope",

        support: "12 Months",

        technologies: [
          "OpenAI",
          "Gemini",
          "LangChain",
          "Vector Database",
          "Python",
        ],

        features: [
          "AI Assistant",
          "LLM Integration",
          "RAG Pipeline",
          "Voice AI",
          "OCR",
          "Recommendation Engine",
          "Predictive Analytics",
          "Dedicated Team",
        ],

        bonus: ["Architecture Planning", "Training", "Deployment"],

        paymentPlan: ["30%", "40%", "30%"],

        buttonText: "Request Proposal",
      },
    ],
  },

  uiux: {
    title: "UI / UX Design",

    description:
      "Create beautiful, modern, and user-friendly interfaces that improve user experience and increase conversions.",

    packages: [
      {
        id: 1,

        slug: "landing",

        title: "Landing Page Design",

        tagline: "Modern single-page UI",

        originalPrice: 9999,
        offerPrice: 7999,

        delivery: "2 - 3 Days",

        support: "7 Days",

        features: [
          "Responsive Design",
          "Figma Design",
          "1 Landing Page",
          "Interactive Sections",
          "Source File",
        ],

        bonus: ["Free Revisions"],

        buttonText: "Get Started",
      },

      {
        id: 2,

        slug: "website",

        title: "Website UI Design",

        tagline: "Professional website design",

        originalPrice: 34999,
        offerPrice: 24999,

        popular: true,

        delivery: "7 - 10 Days",

        support: "15 Days",

        features: [
          "Up to 10 Screens",
          "Desktop + Mobile Design",
          "Design System",
          "Prototype",
          "Figma Source",
        ],

        bonus: ["Style Guide", "Icons"],

        buttonText: "Get Started",
      },

      {
        id: 3,

        slug: "dashboard",

        title: "Dashboard UI",

        tagline: "Admin Panel & SaaS UI",

        originalPrice: 59999,
        offerPrice: 39999,

        delivery: "10 - 15 Days",

        support: "30 Days",

        features: [
          "20+ Screens",
          "Dark & Light Mode",
          "Design System",
          "Charts",
          "Responsive Layout",
          "Prototype",
        ],

        bonus: ["Developer Handoff"],

        buttonText: "Get Started",
      },

      {
        id: 4,

        slug: "enterprise",

        title: "Enterprise UX",

        tagline: "Complete Product Design",

        custom: true,

        originalPrice: 149999,
        offerPrice: 99999,

        delivery: "Depends on Scope",

        support: "60 Days",

        features: [
          "Unlimited Screens",
          "User Research",
          "Wireframes",
          "Design System",
          "Prototype",
          "Usability Testing",
        ],

        bonus: ["Dedicated Designer"],

        buttonText: "Request Proposal",
      },
    ],
  },

  api: {
    title: "API Development",

    description:
      "Develop secure, scalable REST APIs and third-party integrations for modern applications.",

    packages: [
      {
        id: 1,

        slug: "basic-api",

        title: "Basic API",

        tagline: "REST API Development",

        originalPrice: 19999,
        offerPrice: 14999,

        delivery: "5 Days",

        support: "15 Days",

        features: [
          "REST API",
          "JWT Authentication",
          "CRUD Operations",
          "Postman Collection",
          "Basic Documentation",
        ],

        bonus: ["Deployment"],

        buttonText: "Get Started",
      },

      {
        id: 2,

        slug: "business-api",

        title: "Business API",

        tagline: "Advanced API Solution",

        originalPrice: 49999,
        offerPrice: 39999,

        popular: true,

        delivery: "10 - 15 Days",

        support: "1 Month",

        features: [
          "Everything in Basic",
          "OAuth",
          "Swagger Documentation",
          "Webhook",
          "Third-party Integration",
          "Role Management",
          "Rate Limiting",
        ],

        bonus: ["Deployment", "Testing"],

        buttonText: "Get Started",
      },

      {
        id: 3,

        slug: "enterprise-api",

        title: "Enterprise API",

        tagline: "Microservices & Enterprise Integration",

        custom: true,

        originalPrice: 149999,
        offerPrice: 99999,

        delivery: "Depends on Scope",

        support: "3 Months",

        features: [
          "Microservices",
          "API Gateway",
          "Enterprise Security",
          "Cloud Deployment",
          "Queue System",
          "Monitoring",
          "Scalable Architecture",
          "CI/CD",
        ],

        bonus: ["Architecture Planning", "Documentation"],

        buttonText: "Request Proposal",
      },
    ],
  },
  seo: {
    title: "SEO Services",

    description:
      "Improve your website's search engine rankings, increase organic traffic, and generate quality leads with our result-driven SEO strategies.",

    packages: [
      {
        id: 1,
        slug: "basic-seo",

        title: "Basic SEO",
        tagline: "Perfect for Local Businesses",

        originalPrice: 9999,
        offerPrice: 7999,

        delivery: "Monthly",
        support: "30 Days",

        popular: false,

        features: [
          "Keyword Research",
          "On-Page SEO",
          "Meta Tags Optimization",
          "Image Optimization",
          "XML Sitemap",
          "Google Search Console",
          "Monthly SEO Report",
        ],

        bonus: ["Website Audit", "Competitor Analysis"],

        paymentPlan: ["100% Monthly Advance"],

        buttonText: "Get Started",
      },

      {
        id: 2,
        slug: "growth-seo",

        title: "Growth SEO",
        tagline: "Most Popular",

        originalPrice: 19999,
        offerPrice: 14999,

        delivery: "Monthly",
        support: "30 Days",

        popular: true,

        features: [
          "Everything in Basic",
          "Technical SEO",
          "Speed Optimization",
          "Content Optimization",
          "Local SEO",
          "Backlink Building",
          "Google Business Profile Optimization",
          "Bi-Weekly Reports",
        ],

        bonus: ["SEO Strategy Session", "Priority Support"],

        paymentPlan: ["100% Monthly Advance"],

        buttonText: "Get Started",
      },

      {
        id: 3,
        slug: "enterprise-seo",

        title: "Enterprise SEO",
        tagline: "For Large Businesses",

        custom: true,

        originalPrice: 39999,
        offerPrice: 29999,

        delivery: "Monthly",
        support: "30 Days",

        features: [
          "Everything in Growth",
          "National SEO",
          "International SEO",
          "Content Marketing Strategy",
          "Advanced Link Building",
          "Conversion Optimization",
          "Dedicated SEO Manager",
        ],

        bonus: ["Quarterly SEO Roadmap", "Growth Consultation"],

        paymentPlan: ["100% Monthly Advance"],

        buttonText: "Request Proposal",
      },
    ],
  },

  marketing: {
    title: "Digital Marketing",

    description:
      "Grow your brand with strategic digital marketing campaigns across Google, Meta, LinkedIn, and other platforms.",

    packages: [
      {
        id: 1,
        slug: "starter-marketing",

        title: "Starter Marketing",
        tagline: "Launch Your Brand",

        originalPrice: 14999,
        offerPrice: 9999,

        delivery: "Monthly",
        support: "30 Days",

        features: [
          "Social Media Management",
          "10 Creative Posts",
          "Basic Ad Campaign Setup",
          "Monthly Report",
          "Email Support",
        ],

        bonus: ["Marketing Consultation"],

        paymentPlan: ["100% Monthly Advance"],

        buttonText: "Get Started",
      },

      {
        id: 2,
        slug: "business-marketing",

        title: "Business Marketing",
        tagline: "Best for Growing Businesses",

        originalPrice: 24999,
        offerPrice: 19999,

        delivery: "Monthly",
        support: "30 Days",

        popular: true,

        features: [
          "Everything in Starter",
          "Google Ads Management",
          "Meta Ads Management",
          "Lead Generation",
          "20 Social Media Posts",
          "Content Calendar",
          "Weekly Reports",
        ],

        bonus: ["Landing Page Review", "Campaign Optimization"],

        paymentPlan: ["100% Monthly Advance"],

        buttonText: "Get Started",
      },

      {
        id: 3,
        slug: "premium-marketing",

        title: "Premium Marketing",
        tagline: "Complete Digital Growth",

        custom: true,

        originalPrice: 49999,
        offerPrice: 39999,

        delivery: "Monthly",
        support: "30 Days",

        features: [
          "Everything in Business",
          "Google + Meta + LinkedIn Ads",
          "SEO Integration",
          "Conversion Optimization",
          "Marketing Automation",
          "Performance Dashboard",
          "Dedicated Marketing Manager",
        ],

        bonus: ["Growth Strategy", "Monthly Review Meeting"],

        paymentPlan: ["100% Monthly Advance"],

        buttonText: "Request Proposal",
      },
    ],
  },

  maintenance: {
    title: "Website Maintenance",

    description:
      "Keep your website secure, updated, and performing at its best with proactive maintenance and technical support.",

    packages: [
      {
        id: 1,
        slug: "basic-maintenance",

        title: "Basic Care",
        tagline: "Essential Website Support",

        originalPrice: 3999,
        offerPrice: 2999,

        delivery: "Monthly",
        support: "30 Days",

        features: [
          "Website Backup",
          "Security Updates",
          "Bug Fixes",
          "Performance Monitoring",
          "Email Support",
        ],

        bonus: ["Monthly Health Report"],

        paymentPlan: ["100% Monthly Advance"],

        buttonText: "Subscribe",
      },

      {
        id: 2,
        slug: "standard-maintenance",

        title: "Standard Care",
        tagline: "Most Popular",

        originalPrice: 7999,
        offerPrice: 5999,

        delivery: "Monthly",
        support: "30 Days",

        popular: true,

        features: [
          "Everything in Basic",
          "Content Updates",
          "Plugin & Framework Updates",
          "Database Optimization",
          "Priority Support",
          "Emergency Bug Fixes",
        ],

        bonus: ["Monthly Consultation"],

        paymentPlan: ["100% Monthly Advance"],

        buttonText: "Subscribe",
      },

      {
        id: 3,
        slug: "premium-maintenance",

        title: "Premium Care",
        tagline: "Enterprise Support",

        custom: true,

        originalPrice: 14999,
        offerPrice: 9999,

        delivery: "Monthly",
        support: "30 Days",

        features: [
          "Everything in Standard",
          "24/7 Monitoring",
          "Server Management",
          "Cloud Infrastructure Support",
          "Performance Optimization",
          "Dedicated Technical Manager",
          "Priority Response",
        ],

        bonus: ["Quarterly Website Audit", "Dedicated Account Manager"],

        paymentPlan: ["100% Monthly Advance"],

        buttonText: "Request Proposal",
      },
    ],
  },
};

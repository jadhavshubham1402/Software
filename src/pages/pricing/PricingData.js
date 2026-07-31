export const pricingData = {
  website: {
    title: "Business Website",
    description:
      "Professional website solutions for startups, small businesses, and enterprises.",

    packages: [
      {
        id: 1,
        slug: "starter",
        title: "Starter Website",
        tagline: "Perfect for startups and personal brands",

        originalPrice: 19999,
        offerPrice: 12999,

        offer: {
          enabled: true,
          title: "🚀 Launch Offer",
          badge: "35% OFF",
          save: 7000,
        },

        pages: "Up to 5 Pages",
        delivery: "5 - 7 Days",
        support: "1 Month",

        popular: false,

        features: [
          "Responsive Website Design",
          "Premium UI Design",
          "Up to 5 Pages",
          "Contact Form",
          "WhatsApp Integration",
          "Google Map Integration",
          "Basic SEO Setup",
          "Social Media Integration",
          "SSL Configuration",
        ],

        bonus: [
          "Free Logo Design",
          "Free Deployment",
          "Free Business Email Setup",
        ],
      },

      {
        id: 2,
        slug: "business",
        title: "Business Website",
        tagline: "Best choice for growing businesses",

        originalPrice: 49999,
        offerPrice: 29999,

        offer: {
          enabled: true,
          title: "🔥 Most Popular",
          badge: "Save ₹20,000",
          save: 20000,
        },

        pages: "Up to 15 Pages",
        delivery: "10 - 15 Days",
        support: "3 Months",

        popular: true,

        features: [
          "Everything in Starter",
          "Custom Website Design",
          "Dynamic Content Management",
          "Admin Dashboard",
          "Blog Management",
          "Advanced SEO",
          "Google Analytics Setup",
          "Performance Optimization",
          "Lead Management",
        ],

        bonus: ["Free Domain Setup", "Free Hosting Setup", "Website Training"],
      },

      {
        id: 3,
        slug: "premium",
        title: "Premium Website",
        tagline: "For established companies",

        originalPrice: 99999,
        offerPrice: 69999,

        offer: {
          enabled: true,
          title: "⭐ Premium Deal",
          badge: "Save ₹30,000",
          save: 30000,
        },

        pages: "25+ Pages",
        delivery: "20 - 30 Days",
        support: "6 Months",

        popular: false,

        features: [
          "Unlimited Dynamic Pages",
          "Advanced Admin Panel",
          "User Authentication",
          "Payment Gateway",
          "API Integration",
          "Advanced SEO",
          "Analytics Dashboard",
          "Security Optimization",
          "Priority Support",
        ],

        bonus: ["Free SSL", "Free Email Setup", "Developer Support"],
      },

      {
        id: 4,
        slug: "enterprise",
        title: "Enterprise Solution",
        tagline: "Complete custom business solution",

        originalPrice: 249999,
        offerPrice: 149999,

        offer: {
          enabled: true,
          title: "📞 Custom Consultation",
          badge: "Starting From",
          save: 100000,
        },

        custom: true,

        pages: "Unlimited",
        delivery: "Based on Requirement",
        support: "12 Months",

        popular: false,

        features: [
          "Custom Web Application",
          "ERP Integration",
          "CRM Integration",
          "AI Features",
          "Cloud Deployment",
          "Dedicated Development Team",
          "Custom API Development",
          "Enterprise Security",
        ],

        bonus: [
          "Dedicated Project Manager",
          "Architecture Planning",
          "Free Consultation",
        ],
      },
    ],
  },

  ecommerce: {
    title: "E-Commerce Development",
    description:
      "Build powerful online stores with secure payments, inventory management, and scalable features.",

    packages: [
      {
        id: 1,
        slug: "starter-store",
        title: "Starter Store",
        tagline: "For small businesses starting online",

        originalPrice: 39999,
        offerPrice: 24999,

        offer: {
          enabled: true,
          title: "🛒 Store Launch Offer",
          badge: "Save ₹15,000",
          save: 15000,
        },

        delivery: "10 - 15 Days",
        support: "2 Months",

        features: [
          "Product Management",
          "Category Management",
          "Shopping Cart",
          "Payment Gateway",
          "Order Management",
          "Responsive Design",
        ],

        bonus: ["Free Deployment", "Free SSL Setup"],
      },

      {
        id: 2,
        slug: "growth-store",
        title: "Growth Store",
        tagline: "For growing online businesses",

        originalPrice: 79999,
        offerPrice: 49999,

        popular: true,

        offer: {
          enabled: true,
          title: "🔥 Best Seller",
          badge: "Save ₹30,000",
          save: 30000,
        },

        delivery: "20 - 30 Days",
        support: "6 Months",

        features: [
          "Everything in Starter",
          "Admin Dashboard",
          "Coupon System",
          "Inventory Management",
          "Customer Accounts",
          "Analytics Dashboard",
          "SEO Optimization",
        ],

        bonus: ["Free Marketing Consultation", "Free Training"],
      },

      {
        id: 3,
        slug: "enterprise-commerce",
        title: "Enterprise Commerce",

        tagline: "Large scale ecommerce platform",

        originalPrice: 199999,
        offerPrice: 149999,

        custom: true,

        delivery: "Based on Scope",
        support: "12 Months",

        features: [
          "Multi Vendor Marketplace",
          "ERP Integration",
          "Warehouse Management",
          "Advanced Analytics",
          "Mobile App Integration",
          "Custom APIs",
        ],

        bonus: ["Dedicated Team", "Business Strategy Support"],
      },
    ],
  },

  saas: {
    title: "SaaS Application Development",
    description:
      "Build scalable SaaS products with subscription, automation, and cloud infrastructure.",

    packages: [
      {
        id: 1,
        slug: "mvp",
        title: "MVP SaaS",
        tagline: "Validate your product idea",

        offerPrice: 99999,

        delivery: "30 - 45 Days",
        support: "3 Months",

        features: [
          "User Management",
          "Admin Dashboard",
          "Subscription Module",
          "Cloud Deployment",
          "Basic Analytics",
        ],

        bonus: ["Product Consultation", "Technical Planning"],
      },

      {
        id: 2,
        slug: "startup-saas",
        title: "Startup SaaS",
        tagline: "For growing SaaS businesses",

        offerPrice: 249999,

        popular: true,

        features: [
          "Advanced Dashboard",
          "Payment Subscription",
          "Role Management",
          "API Integration",
          "Database Architecture",
          "Cloud Scaling",
        ],

        bonus: ["Free Deployment", "3 Months Support"],
      },

      {
        id: 3,
        slug: "enterprise-saas",
        title: "Enterprise SaaS",

        custom: true,

        offerPrice: 999999,

        features: [
          "Complete SaaS Platform",
          "AI Integration",
          "Microservice Architecture",
          "Enterprise Security",
          "Dedicated Team",
        ],

        bonus: ["Project Manager", "Architecture Planning"],
      },
    ],
  },

  crm: {
    title: "CRM Development",
    description:
      "Custom CRM solutions to manage customers, sales pipeline, and business automation.",

    packages: [
      {
        id: 1,
        title: "Basic CRM",
        offerPrice: 149999,

        features: [
          "Customer Management",
          "Lead Management",
          "Task Management",
          "Reports",
        ],
      },

      {
        id: 2,
        title: "Professional CRM",
        offerPrice: 299999,
        popular: true,

        features: [
          "Sales Automation",
          "Role Management",
          "Analytics Dashboard",
          "API Integration",
          "Email Automation",
        ],
      },

      {
        id: 3,
        title: "Enterprise CRM",
        custom: true,
        offerPrice: 599999,

        features: [
          "Custom CRM Workflow",
          "AI Automation",
          "ERP Integration",
          "Mobile Application",
        ],
      },
    ],
  },

  erp: {
    title: "ERP Development",
    description:
      "Complete ERP software solutions to automate business operations.",

    packages: [
      {
        id: 1,
        title: "ERP Lite",
        offerPrice: 249999,

        features: [
          "Inventory Module",
          "Employee Management",
          "Reports",
          "Basic Dashboard",
        ],
      },

      {
        id: 2,
        title: "ERP Standard",
        offerPrice: 499999,

        popular: true,

        features: [
          "Finance Module",
          "HR Management",
          "Inventory",
          "Sales Management",
          "Analytics",
        ],
      },

      {
        id: 3,
        title: "ERP Enterprise",
        custom: true,
        offerPrice: 999999,

        features: [
          "Complete ERP Suite",
          "AI Integration",
          "Cloud Deployment",
          "Custom Modules",
        ],
      },
    ],
  },

  mobile: {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for Android and iOS.",

    packages: [
      {
        id: 1,
        title: "Basic App",
        offerPrice: 49999,

        features: [
          "UI Design",
          "Android App",
          "Basic Features",
          "Play Store Deployment",
        ],
      },

      {
        id: 2,
        title: "Business App",
        offerPrice: 199999,

        popular: true,

        features: [
          "Android + iOS",
          "API Integration",
          "User Login",
          "Push Notifications",
          "Admin Panel",
        ],
      },

      {
        id: 3,
        title: "Enterprise App",
        custom: true,
        offerPrice: 499999,

        features: [
          "Advanced Mobile Solution",
          "Custom Features",
          "Backend Development",
          "Cloud Integration",
        ],
      },
    ],
  },
};

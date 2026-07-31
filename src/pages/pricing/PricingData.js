export const pricingPlans = [
  {
    id: 1,
    slug: "starter",
    title: "Starter",
    tagline: "Perfect for individuals & startups",

    originalPrice: 14999,
    offerPrice: 8999,
    discount: "40% OFF",

    pages: "3 Pages",
    delivery: "5-7 Days",
    support: "30 Days",
    popular: false,

    description:
      "A modern business website to establish your online presence quickly.",

    features: [
      "3 Premium Pages",
      "Responsive Design",
      "Contact Form",
      "WhatsApp Chat",
      "Google Map",
      "Basic SEO",
      "Free SSL Setup",
      "Social Media Links",
    ],

    bonus: [
      "Free Logo Design",
      "Free Business Email Setup",
      "Free Website Deployment",
    ],

    addons: [
      { name: "Extra Page", price: 500 },
      { name: "Logo Design", price: 999 },
      { name: "Business Email", price: 499 },
      { name: "Payment Gateway", price: 2999 },
      { name: "Blog Module", price: 2499 },
    ],
  },

  {
    id: 2,
    slug: "business",
    title: "Business",
    tagline: "Best for growing businesses",

    originalPrice: 34999,
    offerPrice: 19999,
    discount: "43% OFF",

    pages: "8 Pages",
    delivery: "10-12 Days",
    support: "3 Months",
    popular: true,

    description:
      "A complete business website with admin management and advanced features.",

    features: [
      "8 Responsive Pages",
      "Admin Dashboard",
      "Blog Module",
      "Dynamic Website",
      "Inquiry Management",
      "Google Analytics",
      "Basic SEO",
      "Speed Optimization",
    ],

    bonus: [
      "Free Logo Design",
      "Free Business Email",
      "Free Domain Setup",
      "Free Deployment",
    ],

    addons: [
      { name: "Payment Gateway", price: 2999 },
      { name: "Premium SEO", price: 4999 },
      { name: "Live Chat", price: 999 },
      { name: "CRM Module", price: 8999 },
    ],
  },

  {
    id: 3,
    slug: "professional",
    title: "Professional",
    tagline: "Ideal for established companies",

    originalPrice: 74999,
    offerPrice: 49999,
    discount: "33% OFF",

    pages: "20 Pages",
    delivery: "15-20 Days",
    support: "6 Months",
    popular: false,

    description:
      "Premium website solution with advanced integrations and user management.",

    features: [
      "20+ Pages",
      "Premium UI/UX",
      "Admin Dashboard",
      "Payment Gateway",
      "User Login System",
      "Advanced SEO",
      "Google Analytics",
      "WhatsApp Integration",
    ],

    bonus: [
      "Free Logo",
      "Free SSL",
      "Free Business Email",
      "Free Deployment",
      "Free Website Training",
    ],

    addons: [
      { name: "Mobile App", price: 29999 },
      { name: "CRM", price: 9999 },
      { name: "ERP", price: 49999 },
    ],
  },

  {
    id: 4,
    slug: "enterprise",
    title: "Enterprise",
    tagline: "Custom software for enterprises",

    originalPrice: null,
    offerPrice: null,
    discount: null,

    pages: "Unlimited",
    delivery: "Custom",
    support: "1 Year",

    popular: false,

    description:
      "Enterprise-grade software tailored to your business requirements.",

    features: [
      "Unlimited Pages",
      "ERP",
      "CRM",
      "AI Integration",
      "Cloud Deployment",
      "Dedicated Team",
      "Priority Support",
      "Custom Integrations",
    ],

    bonus: ["Free Consultation", "Dedicated Project Manager"],

    addons: [],
  },
];

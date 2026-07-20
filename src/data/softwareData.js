// solutionData.js
import {
  FaUsers,
  FaHospital,
  FaShoppingCart,
  FaFileInvoiceDollar,
  FaBoxes,
  FaSchool,
  FaClinicMedical,
  FaUserMd,
  FaTruck,
  FaMobileAlt,
  FaBuilding,
  FaChartLine,
} from "react-icons/fa";

export const softwareSolutions = [
  {
    title: "CRM Software Development",
    slug: "crm-software",
    icon: FaUsers,
    description: "Manage leads, customers and sales pipeline efficiently.",
  },
  {
    title: "ERP Software",
    slug: "erp-software",
    icon: FaBuilding,
    description: "Complete enterprise resource planning solution.",
  },
  {
    title: "Hospital Management",
    slug: "hospital-management",
    icon: FaHospital,
    description: "Digital hospital and clinic management platform.",
  },
  {
    title: "Clinic Management",
    slug: "clinic-management",
    icon: FaClinicMedical,
    description: "Manage appointments, doctors and patients.",
  },
  {
    title: "Doctor Appointment",
    slug: "doctor-appointment",
    icon: FaUserMd,
    description: "Online appointment booking solution.",
  },
  {
    title: "Inventory Management",
    slug: "inventory-management",
    icon: FaBoxes,
    description: "Track stock, warehouses and inventory.",
  },
  {
    title: "Billing & GST Software",
    slug: "billing-gst-software",
    icon: FaFileInvoiceDollar,
    description: "GST billing and accounting software.",
  },
  {
    title: "School Management ERP",
    slug: "school-management",
    icon: FaSchool,
    description: "Manage students, staff and academics.",
  },
  {
    title: "Ecommerce Development",
    slug: "ecommerce-development",
    icon: FaShoppingCart,
    description: "Custom ecommerce website development.",
  },
  {
    title: "Logistics Management",
    slug: "logistics-management",
    icon: FaTruck,
    description: "Transport and fleet management solution.",
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    icon: FaMobileAlt,
    description: "Android & iOS mobile application development.",
  },
  {
    title: "Business Analytics",
    slug: "business-analytics",
    icon: FaChartLine,
    description: "Business intelligence and analytics dashboard.",
  },
];

export const solutionDetails = [
  {
    slug: "crm-software",

    hero: {
      title: "CRM Software Development",
      description:
        "Streamline customer relationships, automate sales processes, and boost productivity with our custom CRM software development services. We build scalable CRM solutions tailored to your business needs.",
      image: "/images/solutions/crm-banner.png",
      primaryButton: "Get Free Consultation",
      secondaryButton: "Request Demo",
    },

    about: {
      title: "Custom CRM Software Development",
      description:
        "Our CRM software helps businesses manage leads, automate follow-ups, improve customer communication, and track sales performance from a single dashboard. Whether you're a startup or an enterprise, we create secure and scalable CRM solutions that improve customer engagement and operational efficiency.",
    },

    features: {
      title: "Key CRM Features",
      items: [
        {
          title: "Lead Management",
          description:
            "Capture, organize, and track leads from multiple sources in one place.",
        },
        {
          title: "Sales Pipeline",
          description:
            "Visualize every sales stage and monitor deal progress effortlessly.",
        },
        {
          title: "Workflow Automation",
          description:
            "Automate repetitive tasks like follow-ups, reminders, and notifications.",
        },
        {
          title: "Customer Management",
          description:
            "Maintain complete customer profiles with communication history.",
        },
        {
          title: "Reports & Analytics",
          description:
            "Generate insightful reports to measure team performance and sales growth.",
        },
        {
          title: "Role-Based Access",
          description:
            "Assign permissions and provide secure access based on employee roles.",
        },
      ],
    },

    industries: {
      title: "Industries We Serve",
      items: [
        {
          name: "Healthcare CRM",
          icon: "https://picsum.photos/id/107/120/120", // Hospital / Healthcare
        },
        {
          name: "Real Estate CRM",
          icon: "https://picsum.photos/id/1015/120/120", // Real Estate
        },
        {
          name: "Education CRM",
          icon: "https://picsum.photos/id/201/120/120", // Education
        },
        {
          name: "Finance CRM",
          icon: "https://picsum.photos/id/251/120/120", // Finance / Banking
        },
        {
          name: "Retail CRM",
          icon: "https://picsum.photos/id/180/120/120", // Retail / Shopping
        },
        {
          name: "Manufacturing CRM",
          icon: "https://picsum.photos/id/106/120/120", // Manufacturing / Factory
        },
      ],
    },

    process: {
      title: "Our Development Process",
      steps: [
        {
          step: 1,
          title: "Requirement Analysis",
          description:
            "Understand your business goals, workflow, and CRM requirements.",
        },
        {
          step: 2,
          title: "Planning & Strategy",
          description:
            "Prepare project roadmap, UI wireframes, and development strategy.",
        },
        {
          step: 3,
          title: "UI/UX Design",
          description:
            "Design modern, intuitive, and responsive CRM interfaces.",
        },
        {
          step: 4,
          title: "Development",
          description:
            "Develop secure, scalable, and feature-rich CRM software.",
        },
        {
          step: 5,
          title: "Testing",
          description:
            "Perform quality assurance, security testing, and bug fixing.",
        },
        {
          step: 6,
          title: "Deployment & Support",
          description:
            "Deploy the application and provide ongoing maintenance and support.",
        },
      ],
    },

    benefits: {
      title: "Why Choose Our CRM Solution?",
      items: [
        "Increase sales productivity",
        "Improve customer satisfaction",
        "Centralized customer database",
        "Automate repetitive business tasks",
        "Real-time reports and dashboards",
        "Secure cloud-based infrastructure",
      ],
    },

    technologies: {
      title: "Technologies We Use",
      items: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "AWS",
        "Firebase",
        "Docker",
      ],
    },

    cta: {
      title: "Ready to Build Your CRM?",
      description:
        "Let's discuss your business requirements and build a powerful CRM solution tailored to your organization.",
      button: "Talk to Our Experts",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is CRM software?",
          answer:
            "CRM (Customer Relationship Management) software helps businesses manage customer interactions, leads, sales pipelines, and support activities from one centralized platform.",
        },
        {
          question: "Can you build a custom CRM for my business?",
          answer:
            "Yes. We develop fully customized CRM solutions tailored to your business workflow, industry, and operational requirements.",
        },
        {
          question: "Is the CRM mobile-friendly?",
          answer:
            "Yes. Our CRM solutions are fully responsive and can also be developed as Android and iOS applications.",
        },
        {
          question: "Can existing data be migrated?",
          answer:
            "Absolutely. We can securely migrate your existing customer data from spreadsheets or other CRM platforms.",
        },
        {
          question: "Do you provide support after deployment?",
          answer:
            "Yes. We offer maintenance, upgrades, security updates, and technical support after project deployment.",
        },
      ],
    },

    seo: {
      title: "CRM Software Development Company",
      description:
        "Custom CRM Software Development Company providing scalable CRM solutions with lead management, workflow automation, customer management, and analytics.",
      keywords:
        "CRM Development, CRM Software, Custom CRM, Sales CRM, CRM Company",
    },
  },
  {
    slug: "erp-software",

    hero: {
      title: "ERP Software Development",
      description:
        "Digitize and streamline your business operations with our custom ERP software development services. We build scalable ERP solutions that integrate all your core business processes into one centralized platform.",
      image: "/images/solutions/erp-banner.png",
      primaryButton: "Get Free Consultation",
      secondaryButton: "Request Demo",
    },

    about: {
      title: "Custom ERP Software Development",
      description:
        "Our ERP solutions help businesses manage finance, inventory, sales, purchasing, HR, production, and customer relationships from a single platform. We develop secure, scalable, and user-friendly ERP software tailored to your business processes.",
    },

    features: {
      title: "Key ERP Features",
      items: [
        {
          title: "Inventory Management",
          description:
            "Track stock, warehouses, and inventory movement in real-time.",
        },
        {
          title: "Finance & Accounting",
          description:
            "Manage invoices, expenses, taxes, payments, and financial reports.",
        },
        {
          title: "Sales & CRM",
          description:
            "Manage leads, quotations, customers, and sales orders efficiently.",
        },
        {
          title: "Purchase Management",
          description:
            "Automate purchase orders, vendor management, and procurement.",
        },
        {
          title: "Human Resource Management",
          description:
            "Handle employee records, payroll, attendance, and leave management.",
        },
        {
          title: "Business Reports",
          description:
            "Generate real-time dashboards and business performance reports.",
        },
      ],
    },

    industries: {
      title: "Industries We Serve",
      items: [
        {
          name: "Manufacturing",
          icon: "/images/icons/manufacturing.png",
        },
        {
          name: "Retail",
          icon: "/images/icons/retail.png",
        },
        {
          name: "Healthcare",
          icon: "/images/icons/healthcare.png",
        },
        {
          name: "Education",
          icon: "/images/icons/education.png",
        },
        {
          name: "Construction",
          icon: "/images/icons/construction.png",
        },
        {
          name: "Logistics",
          icon: "/images/icons/logistics.png",
        },
      ],
    },

    process: {
      title: "Our ERP Development Process",
      steps: [
        {
          step: 1,
          title: "Requirement Analysis",
          description:
            "Understand your business workflow and ERP requirements.",
        },
        {
          step: 2,
          title: "Planning",
          description:
            "Create architecture, module planning, and implementation strategy.",
        },
        {
          step: 3,
          title: "Design",
          description: "Design intuitive and responsive ERP interfaces.",
        },
        {
          step: 4,
          title: "Development",
          description: "Develop scalable ERP modules with secure architecture.",
        },
        {
          step: 5,
          title: "Testing",
          description: "Perform functional, security, and performance testing.",
        },
        {
          step: 6,
          title: "Deployment & Support",
          description: "Deploy the ERP system and provide ongoing maintenance.",
        },
      ],
    },

    benefits: {
      title: "Why Choose Our ERP Solution?",
      items: [
        "Centralized business management",
        "Real-time business insights",
        "Improved productivity",
        "Reduced operational costs",
        "Scalable architecture",
        "Secure cloud-based deployment",
      ],
    },

    technologies: {
      title: "Technologies We Use",
      items: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "AWS",
        "Docker",
        "Redis",
      ],
    },

    cta: {
      title: "Ready to Build Your ERP Solution?",
      description:
        "Let's develop a powerful ERP system tailored to your organization's workflow and business goals.",
      button: "Talk to Our Experts",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is ERP software?",
          answer:
            "ERP software integrates multiple business functions like finance, HR, inventory, sales, and procurement into one centralized platform.",
        },
        {
          question: "Can you develop a custom ERP?",
          answer:
            "Yes. We build ERP solutions tailored to your business processes and industry requirements.",
        },
        {
          question: "Is ERP suitable for small businesses?",
          answer:
            "Yes. Our ERP solutions are scalable and suitable for startups, SMEs, and enterprises.",
        },
        {
          question: "Can ERP integrate with existing software?",
          answer:
            "Absolutely. We can integrate ERP with CRMs, accounting software, payment gateways, and third-party APIs.",
        },
        {
          question: "Do you provide post-launch support?",
          answer:
            "Yes. We provide maintenance, upgrades, security updates, and technical support after deployment.",
        },
      ],
    },

    seo: {
      title: "ERP Software Development Company",
      description:
        "Custom ERP software development services for finance, HR, inventory, sales, procurement, and business management.",
      keywords:
        "ERP Software, ERP Development, Enterprise Resource Planning, Custom ERP, ERP Company",
    },
  },
  {
    slug: "hospital-management",

    hero: {
      title: "Hospital Management System",
      description:
        "Modernize healthcare operations with our Hospital Management System. We develop secure and scalable software to manage patients, appointments, billing, pharmacy, laboratory, and hospital administration from a single platform.",
      image: "/images/solutions/hospital-banner.png",
      primaryButton: "Get Free Consultation",
      secondaryButton: "Request Demo",
    },

    about: {
      title: "Custom Hospital Management Software Development",
      description:
        "Our Hospital Management System simplifies hospital operations by automating patient records, appointments, billing, pharmacy, laboratory, staff management, and reporting. Designed for hospitals, clinics, and healthcare organizations, our solution improves efficiency while delivering better patient care.",
    },

    features: {
      title: "Key Hospital Management Features",
      items: [
        {
          title: "Patient Management",
          description:
            "Maintain complete patient records, treatment history, and medical documents securely.",
        },
        {
          title: "Appointment Scheduling",
          description:
            "Allow patients to book appointments and manage doctor schedules efficiently.",
        },
        {
          title: "Doctor Management",
          description:
            "Manage doctor profiles, availability, consultation timings, and specialties.",
        },
        {
          title: "Billing & Insurance",
          description:
            "Generate invoices, process insurance claims, and manage payment records.",
        },
        {
          title: "Pharmacy Management",
          description:
            "Track medicines, inventory, prescriptions, and pharmacy sales.",
        },
        {
          title: "Laboratory Management",
          description:
            "Manage lab tests, reports, diagnostics, and result sharing digitally.",
        },
      ],
    },

    industries: {
      title: "Healthcare Solutions We Serve",
      items: [
        {
          name: "Multi-Specialty Hospitals",
          icon: "/images/icons/hospital.png",
        },
        {
          name: "Clinics",
          icon: "/images/icons/clinic.png",
        },
        {
          name: "Diagnostic Centers",
          icon: "/images/icons/laboratory.png",
        },
        {
          name: "Medical Colleges",
          icon: "/images/icons/medical-college.png",
        },
        {
          name: "Pharmacies",
          icon: "/images/icons/pharmacy.png",
        },
        {
          name: "Healthcare Chains",
          icon: "/images/icons/healthcare.png",
        },
      ],
    },

    process: {
      title: "Our Development Process",
      steps: [
        {
          step: 1,
          title: "Requirement Analysis",
          description:
            "Understand hospital workflows, departments, and operational requirements.",
        },
        {
          step: 2,
          title: "Planning",
          description:
            "Design software architecture and healthcare-specific modules.",
        },
        {
          step: 3,
          title: "UI/UX Design",
          description:
            "Create intuitive dashboards for doctors, staff, and administrators.",
        },
        {
          step: 4,
          title: "Development",
          description:
            "Develop secure and scalable hospital management software.",
        },
        {
          step: 5,
          title: "Testing",
          description:
            "Perform functional, security, and performance testing before deployment.",
        },
        {
          step: 6,
          title: "Deployment & Support",
          description:
            "Deploy the solution with training, maintenance, and technical support.",
        },
      ],
    },

    benefits: {
      title: "Why Choose Our Hospital Management System?",
      items: [
        "Centralized patient records",
        "Faster appointment management",
        "Accurate billing and insurance processing",
        "Improved doctor and staff productivity",
        "Real-time reports and analytics",
        "Secure and HIPAA-ready architecture",
      ],
    },

    technologies: {
      title: "Technologies We Use",
      items: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "AWS",
        "Firebase",
        "Docker",
      ],
    },

    cta: {
      title: "Ready to Digitize Your Hospital?",
      description:
        "Build a secure and intelligent Hospital Management System that improves operational efficiency and patient experience.",
      button: "Talk to Our Experts",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is a Hospital Management System?",
          answer:
            "A Hospital Management System is software that automates patient management, appointments, billing, pharmacy, laboratory, and administrative operations in hospitals and clinics.",
        },
        {
          question: "Can the system support multiple hospitals?",
          answer:
            "Yes. We develop multi-branch hospital management systems with centralized administration.",
        },
        {
          question: "Does it support online appointment booking?",
          answer:
            "Yes. Patients can book appointments online and receive notifications and reminders.",
        },
        {
          question: "Can it integrate with laboratory and pharmacy modules?",
          answer:
            "Absolutely. Our solution integrates laboratory, pharmacy, billing, and inventory management seamlessly.",
        },
        {
          question: "Do you provide maintenance after deployment?",
          answer:
            "Yes. We offer ongoing maintenance, upgrades, security updates, and technical support.",
        },
      ],
    },

    seo: {
      title: "Hospital Management System Development Company",
      description:
        "Custom Hospital Management System development with patient management, appointments, billing, pharmacy, laboratory, and healthcare administration.",
      keywords:
        "Hospital Management System, HMS Software, Healthcare Software Development, Hospital ERP, Clinic Management System",
    },
  },
  {
    slug: "clinic-management",

    hero: {
      title: "Clinic Management Software",
      description:
        "Simplify clinic operations with our custom Clinic Management Software. Manage appointments, patient records, prescriptions, billing, pharmacy, and staff from one centralized platform.",
      image: "/images/solutions/clinic-banner.png",
      primaryButton: "Get Free Consultation",
      secondaryButton: "Request Demo",
    },

    about: {
      title: "Custom Clinic Management Software Development",
      description:
        "Our Clinic Management Software is designed for single and multi-specialty clinics to automate daily operations. From appointment scheduling and patient records to billing and prescriptions, our solution helps healthcare professionals deliver better patient care while improving operational efficiency.",
    },

    features: {
      title: "Key Clinic Management Features",
      items: [
        {
          title: "Patient Registration",
          description:
            "Maintain complete patient profiles, medical history, and treatment records.",
        },
        {
          title: "Appointment Scheduling",
          description:
            "Manage doctor availability and online appointment bookings effortlessly.",
        },
        {
          title: "Prescription Management",
          description:
            "Generate digital prescriptions with medicine history and dosage tracking.",
        },
        {
          title: "Billing & Payments",
          description:
            "Create invoices, collect payments, and generate financial reports.",
        },
        {
          title: "Staff Management",
          description:
            "Manage doctors, nurses, receptionists, and clinic staff efficiently.",
        },
        {
          title: "Reports & Analytics",
          description:
            "Track appointments, revenue, patient visits, and clinic performance.",
        },
      ],
    },

    industries: {
      title: "Who Can Use This Software?",
      items: [
        {
          name: "General Clinics",
          icon: "/images/icons/clinic.png",
        },
        {
          name: "Dental Clinics",
          icon: "/images/icons/dental.png",
        },
        {
          name: "Eye Clinics",
          icon: "/images/icons/eye.png",
        },
        {
          name: "Skin Clinics",
          icon: "/images/icons/skin.png",
        },
        {
          name: "Physiotherapy Centers",
          icon: "/images/icons/physio.png",
        },
        {
          name: "Diagnostic Clinics",
          icon: "/images/icons/laboratory.png",
        },
      ],
    },

    process: {
      title: "Our Development Process",
      steps: [
        {
          step: 1,
          title: "Requirement Analysis",
          description:
            "Understand clinic workflow and operational requirements.",
        },
        {
          step: 2,
          title: "Planning",
          description:
            "Plan software modules, architecture, and implementation strategy.",
        },
        {
          step: 3,
          title: "UI/UX Design",
          description:
            "Design a modern and easy-to-use interface for doctors and staff.",
        },
        {
          step: 4,
          title: "Development",
          description:
            "Develop secure, scalable, and feature-rich clinic management software.",
        },
        {
          step: 5,
          title: "Testing",
          description:
            "Perform complete quality assurance and security testing.",
        },
        {
          step: 6,
          title: "Deployment & Support",
          description:
            "Deploy the software with training, maintenance, and technical support.",
        },
      ],
    },

    benefits: {
      title: "Why Choose Our Clinic Management Software?",
      items: [
        "Easy appointment scheduling",
        "Centralized patient records",
        "Digital prescriptions",
        "Quick billing and payment management",
        "Improved patient experience",
        "Secure cloud-based solution",
      ],
    },

    technologies: {
      title: "Technologies We Use",
      items: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "AWS",
        "Firebase",
        "Docker",
      ],
    },

    cta: {
      title: "Ready to Digitize Your Clinic?",
      description:
        "Let's build a modern Clinic Management System that enhances patient care and streamlines daily clinic operations.",
      button: "Talk to Our Experts",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is Clinic Management Software?",
          answer:
            "Clinic Management Software is a digital solution that automates appointments, patient records, billing, prescriptions, and clinic administration.",
        },
        {
          question: "Can patients book appointments online?",
          answer:
            "Yes. Patients can book appointments online, receive reminders, and manage their visits easily.",
        },
        {
          question: "Can multiple doctors use the system?",
          answer:
            "Yes. The software supports multiple doctors with individual schedules and patient management.",
        },
        {
          question: "Is the software suitable for small clinics?",
          answer:
            "Absolutely. Our solution is scalable and suitable for both single-doctor clinics and multi-specialty healthcare centers.",
        },
        {
          question: "Do you provide ongoing support?",
          answer:
            "Yes. We provide maintenance, software updates, technical support, and feature enhancements after deployment.",
        },
      ],
    },

    seo: {
      title: "Clinic Management Software Development Company",
      description:
        "Custom Clinic Management Software with patient management, appointment scheduling, billing, prescriptions, and clinic administration.",
      keywords:
        "Clinic Management Software, Clinic ERP, Clinic Software Development, Patient Management System, Medical Clinic Software",
    },
  },
  {
    slug: "doctor-appointment",

    hero: {
      title: "Doctor Appointment System",
      description:
        "Simplify healthcare appointments with our Doctor Appointment System. Enable patients to book appointments online, manage schedules, receive reminders, and connect with healthcare professionals seamlessly.",
      image: "/images/solutions/doctor-appointment-banner.png",
      primaryButton: "Get Free Consultation",
      secondaryButton: "Request Demo",
    },

    about: {
      title: "Custom Doctor Appointment Software Development",
      description:
        "Our Doctor Appointment System is designed for hospitals, clinics, and independent healthcare professionals. It streamlines appointment booking, patient management, doctor scheduling, online consultations, and notifications, ensuring a smooth healthcare experience for both patients and medical staff.",
    },

    features: {
      title: "Key Features",
      items: [
        {
          title: "Online Appointment Booking",
          description:
            "Allow patients to book appointments anytime through web or mobile applications.",
        },
        {
          title: "Doctor Schedule Management",
          description:
            "Manage doctor availability, consultation timings, and leave schedules efficiently.",
        },
        {
          title: "Patient Records",
          description:
            "Maintain complete patient profiles, medical history, and consultation records securely.",
        },
        {
          title: "Video Consultation",
          description:
            "Provide secure online consultations through integrated video calling.",
        },
        {
          title: "Automated Notifications",
          description:
            "Send appointment reminders and updates via SMS, email, and push notifications.",
        },
        {
          title: "Online Payments",
          description:
            "Accept appointment fees securely through integrated payment gateways.",
        },
      ],
    },

    industries: {
      title: "Who Can Use This Solution?",
      items: [
        {
          name: "Hospitals",
          icon: "/images/icons/hospital.png",
        },
        {
          name: "Clinics",
          icon: "/images/icons/clinic.png",
        },
        {
          name: "Diagnostic Centers",
          icon: "/images/icons/laboratory.png",
        },
        {
          name: "Healthcare Startups",
          icon: "/images/icons/healthcare.png",
        },
        {
          name: "Telemedicine Platforms",
          icon: "/images/icons/telemedicine.png",
        },
        {
          name: "Private Doctors",
          icon: "/images/icons/doctor.png",
        },
      ],
    },

    process: {
      title: "Our Development Process",
      steps: [
        {
          step: 1,
          title: "Requirement Analysis",
          description:
            "Understand your healthcare workflow and appointment management requirements.",
        },
        {
          step: 2,
          title: "Planning",
          description:
            "Design the application architecture and user flow for doctors and patients.",
        },
        {
          step: 3,
          title: "UI/UX Design",
          description:
            "Create a modern, responsive, and user-friendly appointment booking experience.",
        },
        {
          step: 4,
          title: "Development",
          description:
            "Build secure appointment scheduling, patient management, and notification modules.",
        },
        {
          step: 5,
          title: "Testing",
          description:
            "Perform complete testing to ensure reliability, security, and performance.",
        },
        {
          step: 6,
          title: "Deployment & Support",
          description:
            "Deploy the solution with continuous monitoring, maintenance, and technical support.",
        },
      ],
    },

    benefits: {
      title: "Why Choose Our Doctor Appointment System?",
      items: [
        "24/7 online appointment booking",
        "Reduced patient waiting time",
        "Efficient doctor schedule management",
        "Improved patient experience",
        "Secure online consultation support",
        "Scalable cloud-based architecture",
      ],
    },

    technologies: {
      title: "Technologies We Use",
      items: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Firebase",
        "AWS",
        "Docker",
      ],
    },

    cta: {
      title: "Ready to Launch Your Healthcare Platform?",
      description:
        "Let's build a secure and intelligent Doctor Appointment System that simplifies healthcare services and improves patient satisfaction.",
      button: "Talk to Our Experts",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is a Doctor Appointment System?",
          answer:
            "A Doctor Appointment System enables patients to schedule appointments online while helping healthcare providers manage schedules, patient records, and consultations efficiently.",
        },
        {
          question: "Can patients book appointments online?",
          answer:
            "Yes. Patients can search doctors, select available slots, and book appointments through web or mobile applications.",
        },
        {
          question: "Does the system support online consultation?",
          answer:
            "Yes. We can integrate secure video consultation features for virtual appointments.",
        },
        {
          question: "Can payment gateways be integrated?",
          answer:
            "Absolutely. We integrate secure payment gateways for appointment booking and consultation fees.",
        },
        {
          question: "Do you provide maintenance after deployment?",
          answer:
            "Yes. We provide software maintenance, feature upgrades, security updates, and ongoing technical support.",
        },
      ],
    },

    seo: {
      title: "Doctor Appointment System Development Company",
      description:
        "Custom Doctor Appointment System with online booking, patient management, doctor scheduling, telemedicine, and secure healthcare solutions.",
      keywords:
        "Doctor Appointment Software, Appointment Booking System, Telemedicine Software, Healthcare App Development, Online Doctor Consultation",
    },
  },
  {
    slug: "inventory-management",

    hero: {
      title: "Inventory Management Software",
      description:
        "Optimize your inventory operations with our Inventory Management Software. Track stock levels, manage warehouses, automate purchase orders, and gain real-time inventory insights from a centralized platform.",
      image: "/images/solutions/inventory-banner.png",
      primaryButton: "Get Free Consultation",
      secondaryButton: "Request Demo",
    },

    about: {
      title: "Custom Inventory Management Software Development",
      description:
        "Our Inventory Management Software helps businesses monitor inventory, reduce stock shortages, improve warehouse efficiency, and automate inventory-related processes. Whether you operate a retail store, warehouse, manufacturing unit, or distribution business, our solution ensures accurate inventory control and seamless operations.",
    },

    features: {
      title: "Key Inventory Features",
      items: [
        {
          title: "Stock Management",
          description:
            "Track inventory levels, stock movements, and product availability in real-time.",
        },
        {
          title: "Warehouse Management",
          description:
            "Manage multiple warehouses, storage locations, and inventory transfers efficiently.",
        },
        {
          title: "Purchase Orders",
          description:
            "Create and manage purchase orders with automated supplier notifications.",
        },
        {
          title: "Barcode & QR Code",
          description:
            "Speed up inventory tracking using barcode and QR code scanning.",
        },
        {
          title: "Inventory Reports",
          description:
            "Generate detailed stock reports, inventory valuation, and movement analysis.",
        },
        {
          title: "Low Stock Alerts",
          description:
            "Receive automatic alerts when inventory reaches minimum stock levels.",
        },
      ],
    },

    industries: {
      title: "Industries We Serve",
      items: [
        {
          name: "Retail Stores",
          icon: "/images/icons/retail.png",
        },
        {
          name: "Warehouses",
          icon: "/images/icons/warehouse.png",
        },
        {
          name: "Manufacturing",
          icon: "/images/icons/manufacturing.png",
        },
        {
          name: "Pharmaceutical",
          icon: "/images/icons/pharmacy.png",
        },
        {
          name: "E-Commerce",
          icon: "/images/icons/ecommerce.png",
        },
        {
          name: "Wholesale Distribution",
          icon: "/images/icons/distribution.png",
        },
      ],
    },

    process: {
      title: "Our Development Process",
      steps: [
        {
          step: 1,
          title: "Requirement Analysis",
          description:
            "Understand your inventory workflow and warehouse management requirements.",
        },
        {
          step: 2,
          title: "Planning",
          description:
            "Prepare inventory modules, system architecture, and implementation roadmap.",
        },
        {
          step: 3,
          title: "UI/UX Design",
          description:
            "Design intuitive dashboards for inventory managers and administrators.",
        },
        {
          step: 4,
          title: "Development",
          description:
            "Develop secure, scalable, and feature-rich inventory management software.",
        },
        {
          step: 5,
          title: "Testing",
          description:
            "Perform functional, performance, and security testing before deployment.",
        },
        {
          step: 6,
          title: "Deployment & Support",
          description:
            "Deploy the solution with continuous maintenance and technical support.",
        },
      ],
    },

    benefits: {
      title: "Why Choose Our Inventory Management Software?",
      items: [
        "Real-time inventory tracking",
        "Reduced stock shortages and overstocking",
        "Automated inventory processes",
        "Improved warehouse efficiency",
        "Accurate inventory reports",
        "Scalable cloud-based solution",
      ],
    },

    technologies: {
      title: "Technologies We Use",
      items: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "AWS",
        "Docker",
        "Firebase",
      ],
    },

    cta: {
      title: "Ready to Simplify Your Inventory Management?",
      description:
        "Let's build a powerful inventory management solution that improves stock accuracy, warehouse efficiency, and business productivity.",
      button: "Talk to Our Experts",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is Inventory Management Software?",
          answer:
            "Inventory Management Software helps businesses track stock levels, manage warehouses, automate inventory processes, and generate inventory reports.",
        },
        {
          question: "Can the software manage multiple warehouses?",
          answer:
            "Yes. Our solution supports multiple warehouses, inventory transfers, and centralized stock management.",
        },
        {
          question: "Does it support barcode scanning?",
          answer:
            "Yes. Barcode and QR code scanning can be integrated for faster inventory operations.",
        },
        {
          question: "Can inventory reports be generated?",
          answer:
            "Absolutely. The software provides real-time inventory reports, stock valuation, and analytics dashboards.",
        },
        {
          question: "Do you provide post-launch support?",
          answer:
            "Yes. We provide ongoing maintenance, security updates, and technical support after deployment.",
        },
      ],
    },

    seo: {
      title: "Inventory Management Software Development Company",
      description:
        "Custom Inventory Management Software with stock tracking, warehouse management, barcode scanning, purchase orders, and inventory reporting.",
      keywords:
        "Inventory Management Software, Warehouse Management System, Stock Management, Inventory Tracking, Inventory Software Development",
    },
  },
  {
    slug: "school-management",

    hero: {
      title: "School Management Software",
      description:
        "Digitize and simplify educational operations with our School Management Software. Manage admissions, students, teachers, attendance, examinations, fees, and communication through a centralized platform.",
      image: "/images/solutions/school-banner.png",
      primaryButton: "Get Free Consultation",
      secondaryButton: "Request Demo",
    },

    about: {
      title: "Custom School Management Software Development",
      description:
        "Our School Management Software is designed for schools, colleges, universities, and educational institutions to automate daily administrative tasks. From student admissions and attendance to fee collection and examination management, our solution improves efficiency and enhances the learning experience.",
    },

    features: {
      title: "Key School Management Features",
      items: [
        {
          title: "Student Information System",
          description:
            "Maintain complete student records, admissions, academic history, and personal information.",
        },
        {
          title: "Attendance Management",
          description:
            "Track student and staff attendance with automated reporting and notifications.",
        },
        {
          title: "Fee Management",
          description:
            "Manage fee collection, online payments, receipts, and outstanding balances.",
        },
        {
          title: "Examination & Results",
          description:
            "Schedule exams, generate report cards, and publish results online.",
        },
        {
          title: "Teacher & Staff Management",
          description:
            "Manage employee records, payroll, schedules, and classroom assignments.",
        },
        {
          title: "Parent Communication",
          description:
            "Send announcements, homework, attendance alerts, and academic updates to parents.",
        },
      ],
    },

    industries: {
      title: "Educational Institutions We Serve",
      items: [
        {
          name: "Schools",
          icon: "/images/icons/school.png",
        },
        {
          name: "Colleges",
          icon: "/images/icons/college.png",
        },
        {
          name: "Universities",
          icon: "/images/icons/university.png",
        },
        {
          name: "Coaching Institutes",
          icon: "/images/icons/coaching.png",
        },
        {
          name: "Training Centers",
          icon: "/images/icons/training.png",
        },
        {
          name: "Online Academies",
          icon: "/images/icons/online-learning.png",
        },
      ],
    },

    process: {
      title: "Our Development Process",
      steps: [
        {
          step: 1,
          title: "Requirement Analysis",
          description:
            "Understand your institution's academic and administrative workflows.",
        },
        {
          step: 2,
          title: "Planning",
          description:
            "Prepare software architecture, modules, and implementation strategy.",
        },
        {
          step: 3,
          title: "UI/UX Design",
          description:
            "Design an intuitive and user-friendly interface for students, teachers, and administrators.",
        },
        {
          step: 4,
          title: "Development",
          description:
            "Develop secure and scalable school management software with customized features.",
        },
        {
          step: 5,
          title: "Testing",
          description:
            "Conduct comprehensive quality assurance and security testing.",
        },
        {
          step: 6,
          title: "Deployment & Support",
          description:
            "Deploy the software and provide training, maintenance, and technical support.",
        },
      ],
    },

    benefits: {
      title: "Why Choose Our School Management Software?",
      items: [
        "Complete academic management",
        "Automated attendance tracking",
        "Online fee collection",
        "Easy communication with parents",
        "Real-time reports and analytics",
        "Secure cloud-based platform",
      ],
    },

    technologies: {
      title: "Technologies We Use",
      items: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "AWS",
        "Firebase",
        "Docker",
      ],
    },

    cta: {
      title: "Ready to Digitize Your Institution?",
      description:
        "Let's build a modern School Management System that simplifies administration, improves communication, and enhances learning outcomes.",
      button: "Talk to Our Experts",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is School Management Software?",
          answer:
            "School Management Software is an all-in-one platform that manages admissions, students, attendance, fees, examinations, staff, and communication efficiently.",
        },
        {
          question: "Can parents access student information?",
          answer:
            "Yes. Parents can securely view attendance, homework, examination results, fee status, and announcements through a dedicated portal.",
        },
        {
          question: "Does the software support online fee payments?",
          answer:
            "Yes. We integrate secure payment gateways for online fee collection and receipt generation.",
        },
        {
          question: "Can the system manage multiple campuses?",
          answer:
            "Absolutely. Our solution supports multi-campus educational institutions with centralized management.",
        },
        {
          question: "Do you provide maintenance after deployment?",
          answer:
            "Yes. We offer software maintenance, updates, security patches, and technical support after deployment.",
        },
      ],
    },

    seo: {
      title: "School Management Software Development Company",
      description:
        "Custom School Management Software with student management, attendance, fee collection, examinations, teacher management, and parent communication.",
      keywords:
        "School Management Software, School ERP, Student Management System, Education Software Development, School ERP Solution",
    },
  },
  {
    slug: "ecommerce-development",

    hero: {
      title: "E-Commerce Website Development",
      description:
        "Launch a powerful online store with our custom e-commerce development services. We build secure, scalable, and feature-rich e-commerce platforms that help businesses increase sales and deliver exceptional shopping experiences.",
      image: "/images/solutions/ecommerce-banner.png",
      primaryButton: "Get Free Consultation",
      secondaryButton: "Request Demo",
    },

    about: {
      title: "Custom E-Commerce Development Services",
      description:
        "We develop modern e-commerce solutions for startups, retailers, wholesalers, and enterprise businesses. Our platforms include advanced product management, secure payment integration, inventory control, order tracking, customer management, and marketing tools to help you grow your online business.",
    },

    features: {
      title: "Key E-Commerce Features",
      items: [
        {
          title: "Product Management",
          description:
            "Easily manage products, categories, pricing, inventory, and product variations from one dashboard.",
        },
        {
          title: "Shopping Cart & Checkout",
          description:
            "Provide a smooth shopping experience with secure and user-friendly checkout.",
        },
        {
          title: "Payment Gateway Integration",
          description:
            "Accept online payments securely using multiple payment gateways and digital wallets.",
        },
        {
          title: "Order Management",
          description:
            "Track, process, and manage customer orders from placement to delivery.",
        },
        {
          title: "Inventory Management",
          description:
            "Monitor stock availability with automated inventory updates and low-stock alerts.",
        },
        {
          title: "Customer Dashboard",
          description:
            "Allow customers to manage profiles, orders, wishlists, addresses, and order history.",
        },
      ],
    },

    industries: {
      title: "Industries We Serve",
      items: [
        {
          name: "Retail Stores",
          icon: "/images/icons/retail.png",
        },
        {
          name: "Fashion & Apparel",
          icon: "/images/icons/fashion.png",
        },
        {
          name: "Healthcare",
          icon: "/images/icons/healthcare.png",
        },
        {
          name: "Electronics",
          icon: "/images/icons/electronics.png",
        },
        {
          name: "Grocery & FMCG",
          icon: "/images/icons/grocery.png",
        },
        {
          name: "Wholesale Business",
          icon: "/images/icons/wholesale.png",
        },
      ],
    },

    process: {
      title: "Our Development Process",
      steps: [
        {
          step: 1,
          title: "Business Analysis",
          description:
            "Understand your products, target audience, and business requirements.",
        },
        {
          step: 2,
          title: "Planning",
          description:
            "Prepare project architecture, user flow, and development roadmap.",
        },
        {
          step: 3,
          title: "UI/UX Design",
          description:
            "Design an attractive, responsive, and conversion-focused online store.",
        },
        {
          step: 4,
          title: "Development",
          description:
            "Build a secure, scalable, and high-performance e-commerce platform.",
        },
        {
          step: 5,
          title: "Testing",
          description:
            "Perform functionality, security, performance, and compatibility testing.",
        },
        {
          step: 6,
          title: "Deployment & Support",
          description:
            "Deploy your online store and provide ongoing maintenance and technical support.",
        },
      ],
    },

    benefits: {
      title: "Why Choose Our E-Commerce Solutions?",
      items: [
        "Responsive mobile-friendly design",
        "Secure payment gateway integration",
        "Easy product and inventory management",
        "SEO-friendly architecture",
        "Scalable for future business growth",
        "Ongoing maintenance and support",
      ],
    },

    technologies: {
      title: "Technologies We Use",
      items: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "AWS",
        "Docker",
      ],
    },

    cta: {
      title: "Ready to Launch Your Online Store?",
      description:
        "Let's build a powerful e-commerce platform that delivers exceptional customer experiences and drives business growth.",
      button: "Talk to Our Experts",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do you develop custom e-commerce websites?",
          answer:
            "Yes. We build fully customized e-commerce websites tailored to your business needs, products, and target audience.",
        },
        {
          question: "Can you integrate online payment gateways?",
          answer:
            "Absolutely. We integrate secure payment gateways like Stripe, Razorpay, PayPal, Cashfree, and others.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer:
            "Yes. Every e-commerce website we develop is fully responsive and optimized for mobile, tablet, and desktop devices.",
        },
        {
          question: "Can I manage products myself?",
          answer:
            "Yes. You'll receive an easy-to-use admin panel to manage products, inventory, orders, customers, and promotions.",
        },
        {
          question: "Do you provide maintenance after launch?",
          answer:
            "Yes. We provide regular updates, security patches, performance optimization, and ongoing technical support.",
        },
      ],
    },

    seo: {
      title: "E-Commerce Website Development Company",
      description:
        "Professional e-commerce website development services with secure payments, inventory management, order tracking, and scalable online store solutions.",
      keywords:
        "E-Commerce Development, Online Store Development, Shopping Website, Ecommerce Company, Custom Ecommerce Solutions",
    },
  },
  {
    slug: "business-analytics",

    hero: {
      title: "Business Analytics Solutions",
      description:
        "Turn your business data into actionable insights with custom Business Analytics solutions. Monitor KPIs, generate reports, and make data-driven decisions through interactive dashboards.",
      image: "/images/solutions/business-analytics-banner.jpg",
      primaryButton: "Get Free Consultation",
      secondaryButton: "Request Demo",
    },

    about: {
      title: "Custom Business Intelligence & Analytics",
      description:
        "Our Business Analytics solutions help organizations visualize data, monitor performance, analyze customer behavior, forecast trends, and improve strategic decision-making using real-time dashboards and reports.",
    },

    features: {
      title: "Key Analytics Features",
      items: [
        {
          title: "Interactive Dashboards",
          description: "Monitor business KPIs with visually rich dashboards.",
        },
        {
          title: "Real-Time Reporting",
          description:
            "Generate live reports for sales, finance, inventory, and operations.",
        },
        {
          title: "Data Visualization",
          description:
            "Convert complex business data into easy-to-understand charts and graphs.",
        },
        {
          title: "Performance Tracking",
          description: "Measure employee, sales, and operational performance.",
        },
        {
          title: "Forecasting",
          description:
            "Predict business trends using historical data and analytics.",
        },
        {
          title: "Custom Reports",
          description:
            "Generate customized reports based on your business needs.",
        },
      ],
    },

    industries: {
      title: "Industries We Serve",
      items: [
        { name: "Healthcare", icon: "/images/icons/healthcare.png" },
        { name: "Retail", icon: "/images/icons/retail.png" },
        { name: "Finance", icon: "/images/icons/finance.png" },
        { name: "Manufacturing", icon: "/images/icons/manufacturing.png" },
        { name: "Education", icon: "/images/icons/education.png" },
        { name: "Logistics", icon: "/images/icons/logistics.png" },
      ],
    },

    process: {
      title: "Our Development Process",
      steps: [
        {
          step: 1,
          title: "Business Analysis",
          description: "Understand your reporting and analytics requirements.",
        },
        {
          step: 2,
          title: "Data Collection",
          description: "Integrate data from multiple business systems.",
        },
        {
          step: 3,
          title: "Dashboard Design",
          description: "Create intuitive and interactive dashboards.",
        },
        {
          step: 4,
          title: "Development",
          description: "Build custom analytics and reporting modules.",
        },
        {
          step: 5,
          title: "Testing",
          description: "Validate reports and ensure data accuracy.",
        },
        {
          step: 6,
          title: "Deployment",
          description:
            "Deploy dashboards with ongoing optimization and support.",
        },
      ],
    },

    benefits: {
      title: "Why Choose Our Business Analytics?",
      items: [
        "Real-time business insights",
        "Interactive dashboards",
        "Data-driven decision making",
        "Custom reporting",
        "Performance monitoring",
        "Scalable analytics platform",
      ],
    },

    technologies: {
      title: "Technologies We Use",
      items: [
        "React.js",
        "Node.js",
        "MongoDB",
        "MySQL",
        "Power BI",
        "Chart.js",
        "AWS",
        "Docker",
      ],
    },

    cta: {
      title: "Ready to Unlock Business Insights?",
      description:
        "Let's build intelligent analytics dashboards that help you make smarter business decisions.",
      button: "Talk to Our Experts",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is Business Analytics?",
          answer:
            "Business Analytics helps organizations analyze data, monitor KPIs, and make informed business decisions using dashboards and reports.",
        },
        {
          question: "Can dashboards be customized?",
          answer:
            "Yes. We build fully customized dashboards based on your business goals.",
        },
        {
          question: "Can data be integrated from multiple systems?",
          answer:
            "Absolutely. We integrate ERP, CRM, accounting software, APIs, and databases.",
        },
        {
          question: "Do you provide real-time reporting?",
          answer:
            "Yes. Our dashboards display live business metrics and reports.",
        },
        {
          question: "Do you provide ongoing support?",
          answer:
            "Yes. We provide maintenance, enhancements, and technical support.",
        },
      ],
    },

    seo: {
      title: "Business Analytics Software Development Company",
      description:
        "Custom Business Analytics solutions with dashboards, reporting, KPI tracking, and business intelligence.",
      keywords:
        "Business Analytics, Business Intelligence, Dashboard Development, KPI Reporting, Analytics Software",
    },
  },
  {
    slug: "mobile-app-development",

    hero: {
      title: "Mobile App Development Services",
      description:
        "Transform your business ideas into powerful mobile applications with our custom Android and iOS app development services. We build scalable, secure, and user-friendly mobile apps that deliver exceptional digital experiences.",
      image: "/images/solutions/mobile-app-banner.png",
      primaryButton: "Get Free Consultation",
      secondaryButton: "Request Demo",
    },

    about: {
      title: "Custom Mobile App Development",
      description:
        "We develop high-performance mobile applications for startups, enterprises, healthcare, education, retail, logistics, and other industries. Our solutions focus on intuitive design, seamless performance, robust security, and future-ready scalability to help businesses engage customers effectively.",
    },

    features: {
      title: "Key Mobile App Features",
      items: [
        {
          title: "Cross-Platform Development",
          description:
            "Build Android and iOS applications from a single codebase for faster deployment.",
        },
        {
          title: "User Authentication",
          description:
            "Secure login using email, mobile OTP, social login, and biometric authentication.",
        },
        {
          title: "Push Notifications",
          description:
            "Keep users engaged with instant notifications, offers, reminders, and updates.",
        },
        {
          title: "Payment Integration",
          description:
            "Integrate secure payment gateways for subscriptions, purchases, and online transactions.",
        },
        {
          title: "Offline Support",
          description:
            "Allow users to access important data even without an internet connection.",
        },
        {
          title: "Analytics Dashboard",
          description:
            "Monitor user activity, app performance, and business insights in real-time.",
        },
      ],
    },

    industries: {
      title: "Industries We Serve",
      items: [
        {
          name: "Healthcare",
          icon: "/images/icons/healthcare.png",
        },
        {
          name: "E-Commerce",
          icon: "/images/icons/ecommerce.png",
        },
        {
          name: "Education",
          icon: "/images/icons/education.png",
        },
        {
          name: "Finance",
          icon: "/images/icons/finance.png",
        },
        {
          name: "Logistics",
          icon: "/images/icons/logistics.png",
        },
        {
          name: "Travel & Tourism",
          icon: "/images/icons/travel.png",
        },
      ],
    },

    process: {
      title: "Our Mobile App Development Process",
      steps: [
        {
          step: 1,
          title: "Requirement Analysis",
          description:
            "Understand your business goals, target audience, and app requirements.",
        },
        {
          step: 2,
          title: "Planning",
          description:
            "Prepare project architecture, technology stack, and development roadmap.",
        },
        {
          step: 3,
          title: "UI/UX Design",
          description:
            "Design intuitive, attractive, and user-friendly mobile app interfaces.",
        },
        {
          step: 4,
          title: "Development",
          description:
            "Build secure, scalable, and high-performance Android and iOS applications.",
        },
        {
          step: 5,
          title: "Testing",
          description:
            "Perform functional, usability, security, and performance testing.",
        },
        {
          step: 6,
          title: "Deployment & Support",
          description:
            "Publish the app on Google Play Store and Apple App Store with continuous support.",
        },
      ],
    },

    benefits: {
      title: "Why Choose Our Mobile App Development?",
      items: [
        "Native & Cross-platform development",
        "Fast and secure applications",
        "Modern UI/UX design",
        "Cloud integration",
        "Scalable architecture",
        "Ongoing maintenance and support",
      ],
    },

    technologies: {
      title: "Technologies We Use",
      items: [
        "React Native",
        "Flutter",
        "Android (Java/Kotlin)",
        "iOS (Swift)",
        "Node.js",
        "MongoDB",
        "Firebase",
        "AWS",
      ],
    },

    cta: {
      title: "Ready to Build Your Mobile App?",
      description:
        "Let's create a feature-rich mobile application that helps your business reach more customers and drive growth.",
      button: "Talk to Our Experts",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do you develop Android and iOS apps?",
          answer:
            "Yes. We develop native Android, native iOS, and cross-platform mobile applications based on your business requirements.",
        },
        {
          question: "Can you publish the app on Play Store and App Store?",
          answer:
            "Yes. We handle complete deployment, including Google Play Store and Apple App Store submission.",
        },
        {
          question: "Will my app be scalable?",
          answer:
            "Absolutely. We build scalable architectures that support future feature enhancements and business growth.",
        },
        {
          question: "Can you integrate payment gateways and APIs?",
          answer:
            "Yes. We integrate payment gateways, maps, chat systems, notifications, analytics, and third-party APIs.",
        },
        {
          question: "Do you provide post-launch support?",
          answer:
            "Yes. We offer maintenance, bug fixes, feature upgrades, performance optimization, and technical support after launch.",
        },
      ],
    },

    seo: {
      title: "Mobile App Development Company",
      description:
        "Professional Mobile App Development services for Android, iOS, and cross-platform applications with secure, scalable, and feature-rich solutions.",
      keywords:
        "Mobile App Development, Android App Development, iOS App Development, React Native, Flutter App Development",
    },
  },
  {
    slug: "custom-software-development",

    hero: {
      title: "Custom Software Development",
      description:
        "Build innovative, scalable, and secure software solutions tailored to your unique business requirements. We develop custom software that improves productivity, automates workflows, and accelerates digital transformation.",
      image: "/images/solutions/custom-software-banner.png",
      primaryButton: "Get Free Consultation",
      secondaryButton: "Request Demo",
    },

    about: {
      title: "Tailor-Made Software Solutions",
      description:
        "Every business has unique challenges that off-the-shelf software cannot fully address. Our custom software development services focus on building scalable, secure, and high-performance applications that match your business processes, helping you improve efficiency, reduce operational costs, and achieve long-term growth.",
    },

    features: {
      title: "Key Features",
      items: [
        {
          title: "Business Process Automation",
          description:
            "Automate repetitive business tasks and streamline daily operations with intelligent workflows.",
        },
        {
          title: "Custom Dashboard",
          description:
            "Monitor business performance through interactive dashboards and real-time reports.",
        },
        {
          title: "Role-Based Access",
          description:
            "Control user permissions with secure role-based authentication and authorization.",
        },
        {
          title: "Third-Party Integrations",
          description:
            "Integrate payment gateways, CRMs, ERPs, APIs, SMS, email, and other external services.",
        },
        {
          title: "Cloud Deployment",
          description:
            "Deploy your application securely on cloud infrastructure with high availability.",
        },
        {
          title: "Scalable Architecture",
          description:
            "Develop software that grows with your business without compromising performance.",
        },
      ],
    },

    industries: {
      title: "Industries We Serve",
      items: [
        {
          name: "Healthcare",
          icon: "/images/icons/healthcare.png",
        },
        {
          name: "Education",
          icon: "/images/icons/education.png",
        },
        {
          name: "Retail",
          icon: "/images/icons/retail.png",
        },
        {
          name: "Finance",
          icon: "/images/icons/finance.png",
        },
        {
          name: "Manufacturing",
          icon: "/images/icons/manufacturing.png",
        },
        {
          name: "Logistics",
          icon: "/images/icons/logistics.png",
        },
      ],
    },

    process: {
      title: "Our Development Process",
      steps: [
        {
          step: 1,
          title: "Requirement Analysis",
          description:
            "Understand your business goals, workflows, and software requirements.",
        },
        {
          step: 2,
          title: "Project Planning",
          description:
            "Define project scope, architecture, timelines, and technology stack.",
        },
        {
          step: 3,
          title: "UI/UX Design",
          description:
            "Design modern, responsive, and user-friendly software interfaces.",
        },
        {
          step: 4,
          title: "Development",
          description:
            "Develop secure, scalable, and high-performance custom software solutions.",
        },
        {
          step: 5,
          title: "Testing",
          description:
            "Perform comprehensive functional, security, and performance testing.",
        },
        {
          step: 6,
          title: "Deployment & Support",
          description:
            "Deploy the application and provide continuous maintenance, monitoring, and support.",
        },
      ],
    },

    benefits: {
      title: "Why Choose Our Custom Software Development?",
      items: [
        "Tailored to your business needs",
        "Scalable and future-ready architecture",
        "Secure and reliable solutions",
        "Seamless third-party integrations",
        "Improved business efficiency",
        "Dedicated post-launch support",
      ],
    },

    technologies: {
      title: "Technologies We Use",
      items: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "AWS",
        "Docker",
      ],
    },

    cta: {
      title: "Ready to Build Custom Software?",
      description:
        "Partner with our experienced development team to create software that is designed specifically for your business objectives and future growth.",
      button: "Talk to Our Experts",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is custom software development?",
          answer:
            "Custom software development is the process of building software specifically designed to meet the unique requirements of a business instead of using ready-made solutions.",
        },
        {
          question: "Can you modernize existing software?",
          answer:
            "Yes. We can upgrade, redesign, and modernize legacy applications with the latest technologies and improved performance.",
        },
        {
          question: "Can the software integrate with existing systems?",
          answer:
            "Absolutely. We integrate CRMs, ERPs, payment gateways, APIs, accounting software, and third-party services.",
        },
        {
          question: "How secure is the software?",
          answer:
            "We follow industry best practices including encryption, authentication, role-based access, secure APIs, and regular security testing.",
        },
        {
          question: "Do you provide maintenance after deployment?",
          answer:
            "Yes. We provide ongoing maintenance, feature enhancements, bug fixes, monitoring, and technical support.",
        },
      ],
    },

    seo: {
      title: "Custom Software Development Company",
      description:
        "Professional custom software development services for web, mobile, and enterprise applications tailored to your business needs.",
      keywords:
        "Custom Software Development, Software Development Company, Enterprise Software, Business Software, Custom Application Development",
    },
  },
  {
    slug: "logistics-management",

    hero: {
      title: "Logistics Management Software",
      description:
        "Optimize transportation, fleet operations, warehouse management, and delivery tracking with our custom Logistics Management Software.",
      image: "/images/solutions/logistics-banner.png",
      primaryButton: "Get Free Consultation",
      secondaryButton: "Request Demo",
    },

    about: {
      title: "Custom Logistics Software Development",
      description:
        "Our Logistics Management Software helps logistics companies, transport businesses, distributors, and fleet operators streamline operations, reduce costs, improve delivery efficiency, and monitor shipments in real-time.",
    },

    features: {
      title: "Key Logistics Features",
      items: [
        {
          title: "Fleet Management",
          description:
            "Monitor vehicles, maintenance schedules, and driver performance from one dashboard.",
        },
        {
          title: "Shipment Tracking",
          description:
            "Track shipments and deliveries in real-time with live status updates.",
        },
        {
          title: "Warehouse Management",
          description:
            "Manage warehouse inventory, stock movement, and dispatch operations.",
        },
        {
          title: "Route Optimization",
          description:
            "Reduce fuel costs by selecting the most efficient delivery routes.",
        },
        {
          title: "Order Management",
          description:
            "Manage customer orders from dispatch to successful delivery.",
        },
        {
          title: "Reports & Analytics",
          description:
            "Analyze transportation costs, delivery performance, and business growth.",
        },
      ],
    },

    industries: {
      title: "Industries We Serve",
      items: [
        { name: "Transport Companies", icon: "/images/icons/truck.png" },
        { name: "Courier Services", icon: "/images/icons/courier.png" },
        { name: "Warehouses", icon: "/images/icons/warehouse.png" },
        { name: "E-Commerce", icon: "/images/icons/ecommerce.png" },
        { name: "Manufacturing", icon: "/images/icons/manufacturing.png" },
        { name: "Distribution", icon: "/images/icons/distribution.png" },
      ],
    },

    process: {
      title: "Our Development Process",
      steps: [
        {
          step: 1,
          title: "Requirement Analysis",
          description:
            "Understand your logistics workflow and operational requirements.",
        },
        {
          step: 2,
          title: "Planning",
          description: "Prepare system architecture and logistics modules.",
        },
        {
          step: 3,
          title: "UI/UX Design",
          description: "Design intuitive dashboards for logistics managers.",
        },
        {
          step: 4,
          title: "Development",
          description: "Develop secure and scalable logistics software.",
        },
        {
          step: 5,
          title: "Testing",
          description:
            "Perform complete quality assurance and security testing.",
        },
        {
          step: 6,
          title: "Deployment & Support",
          description: "Deploy the software and provide ongoing maintenance.",
        },
      ],
    },

    benefits: {
      title: "Why Choose Our Logistics Software?",
      items: [
        "Real-time shipment tracking",
        "Fleet monitoring",
        "Warehouse optimization",
        "Reduced operational costs",
        "Improved delivery efficiency",
        "Scalable cloud-based platform",
      ],
    },

    technologies: {
      title: "Technologies We Use",
      items: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "AWS",
        "Docker",
        "Firebase",
      ],
    },

    cta: {
      title: "Ready to Digitize Your Logistics Business?",
      description:
        "Let's build a smart logistics management solution that improves efficiency and customer satisfaction.",
      button: "Talk to Our Experts",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Who can use this software?",
          answer:
            "Transport companies, courier services, warehouses, distributors, and logistics businesses.",
        },
        {
          question: "Can I track deliveries in real time?",
          answer:
            "Yes. Our software provides live shipment and delivery tracking.",
        },
        {
          question: "Does it support multiple warehouses?",
          answer:
            "Yes. You can manage multiple warehouses and inventory locations.",
        },
        {
          question: "Can drivers update delivery status?",
          answer:
            "Yes. Drivers can update delivery status through the mobile application.",
        },
        {
          question: "Do you provide maintenance?",
          answer: "Yes. We provide complete maintenance and technical support.",
        },
      ],
    },

    seo: {
      title: "Logistics Management Software Development Company",
      description:
        "Custom Logistics Management Software with fleet management, shipment tracking, warehouse management, and delivery optimization.",
      keywords:
        "Logistics Software, Fleet Management, Warehouse Management, Shipment Tracking, Logistics ERP",
    },
  },
  {
    slug: "billing-gst-software",

    hero: {
      title: "Billing & Invoice Software Development",
      description:
        "Simplify your billing operations with our custom Billing Software. Generate invoices, manage GST, track payments, monitor sales, and automate financial transactions with a secure and user-friendly solution.",
      image: "/images/solutions/billing-banner.png",
      primaryButton: "Get Free Consultation",
      secondaryButton: "Request Demo",
    },

    about: {
      title: "Custom Billing Software Development",
      description:
        "Our Billing Software is designed for retailers, wholesalers, distributors, pharmacies, restaurants, and service businesses. It automates invoicing, payment tracking, GST calculations, inventory synchronization, and financial reporting, helping businesses improve accuracy and efficiency.",
    },

    features: {
      title: "Key Billing Software Features",
      items: [
        {
          title: "Invoice Generation",
          description:
            "Create professional invoices with GST calculations, discounts, and multiple tax formats.",
        },
        {
          title: "GST & Tax Management",
          description:
            "Automatically calculate GST, generate tax reports, and simplify compliance.",
        },
        {
          title: "Payment Tracking",
          description:
            "Track paid, unpaid, partial, and overdue invoices in real-time.",
        },
        {
          title: "Inventory Integration",
          description:
            "Automatically update stock whenever sales or purchases are completed.",
        },
        {
          title: "Customer & Vendor Management",
          description:
            "Maintain complete customer and supplier records with transaction history.",
        },
        {
          title: "Reports & Analytics",
          description:
            "Generate sales reports, profit analysis, tax reports, and business insights.",
        },
      ],
    },

    industries: {
      title: "Businesses We Serve",
      items: [
        {
          name: "Retail Stores",
          icon: "/images/icons/retail.png",
        },
        {
          name: "Wholesale Business",
          icon: "/images/icons/wholesale.png",
        },
        {
          name: "Medical Stores",
          icon: "/images/icons/pharmacy.png",
        },
        {
          name: "Restaurants",
          icon: "/images/icons/restaurant.png",
        },
        {
          name: "Supermarkets",
          icon: "/images/icons/supermarket.png",
        },
        {
          name: "Service Providers",
          icon: "/images/icons/service.png",
        },
      ],
    },

    process: {
      title: "Our Development Process",
      steps: [
        {
          step: 1,
          title: "Requirement Analysis",
          description:
            "Understand your billing process, taxation requirements, and business workflow.",
        },
        {
          step: 2,
          title: "Planning",
          description:
            "Prepare the system architecture, billing modules, and implementation roadmap.",
        },
        {
          step: 3,
          title: "UI/UX Design",
          description:
            "Design an easy-to-use interface for faster billing and invoice management.",
        },
        {
          step: 4,
          title: "Development",
          description:
            "Develop a secure, scalable, and customized billing software solution.",
        },
        {
          step: 5,
          title: "Testing",
          description:
            "Perform functional, security, and performance testing before deployment.",
        },
        {
          step: 6,
          title: "Deployment & Support",
          description:
            "Deploy the software and provide ongoing maintenance and technical support.",
        },
      ],
    },

    benefits: {
      title: "Why Choose Our Billing Software?",
      items: [
        "Fast and accurate invoice generation",
        "Automated GST and tax calculations",
        "Integrated inventory management",
        "Real-time payment tracking",
        "Detailed financial reports",
        "Secure cloud-based platform",
      ],
    },

    technologies: {
      title: "Technologies We Use",
      items: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "AWS",
        "Firebase",
        "Docker",
      ],
    },

    cta: {
      title: "Ready to Automate Your Billing Process?",
      description:
        "Let's build a secure and intelligent billing software solution that simplifies invoicing, taxation, and business management.",
      button: "Talk to Our Experts",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is Billing Software?",
          answer:
            "Billing Software helps businesses generate invoices, manage taxes, track payments, and maintain financial records efficiently.",
        },
        {
          question: "Does the software support GST billing?",
          answer:
            "Yes. Our billing software supports GST calculations, tax invoices, and GST reporting for compliance.",
        },
        {
          question: "Can it manage inventory along with billing?",
          answer:
            "Absolutely. Inventory is automatically updated whenever products are sold or purchased.",
        },
        {
          question: "Can I generate sales and tax reports?",
          answer:
            "Yes. The software provides detailed reports for sales, purchases, GST, profit, and business performance.",
        },
        {
          question: "Do you provide support after deployment?",
          answer:
            "Yes. We provide maintenance, software updates, technical assistance, and ongoing support after deployment.",
        },
      ],
    },

    seo: {
      title: "Billing Software Development Company",
      description:
        "Custom Billing Software with GST billing, invoice generation, payment tracking, inventory management, and financial reporting for businesses.",
      keywords:
        "Billing Software, GST Billing Software, Invoice Software, Billing System Development, POS Billing Software",
    },
  },
];

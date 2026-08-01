import { useParams } from "react-router-dom";
import { retailList } from "../../data/softwareData";

export default function RetailDetails() {
  const { slug } = useParams();

  const service = retailList.find((item) => String(item.slug) === slug);

  if (!service) {
    return <div className="p-10">Service not found</div>;
  }

  return (
    <>
      {service.slug === "sales-force-automation" && (
        <>
        <div className="pt-24 md:pt-0 bg-slate-900">
          <img
            src={"/images/sales-force-automation-bg.png"} // update path if needed
            className="w-full object-contain pt-20 md:pt-0 bg-slate-900"
            alt="sales-force-automation-for-retail"
          />
          </div>
          <div className="container mx-auto px-8 md:px-10 lg:px-20 py-10">
            {/* INTRO */}
            <div className="mb-12 max-w-4xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Move retail business to the next level .
              </h2>
              <p className="text-gray-700 leading-relaxed">
                One thing that makes sales teams more agile is implementation of
                Sales force automation, that’s always shown in terms of sales
                growth in trade markets. It becomes and always is necessary to
                invest in customized solutions to enable your business sell
                more.
              </p>
            </div>

            {/* WHY + FLEET MANAGEMENT */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Why Salesforce Automation?
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Reduce cost and timeof the sales process</li>
                  <li>
                    Presents comprehensive graphics based analytics of the sales
                    growth and market demands
                  </li>
                  <li>Enhancing customer experience</li>
                  <li>
                    Enables Centralization of essential customer pr market
                    information.
                  </li>
                  <li>Generation of detailed sales reports periodically .</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Efficient fleet management
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Real time vehicle visibility</li>
                  <li>LIVE data</li>
                  <li>Product maintenance</li>
                  <li>Lower insurance risks</li>
                </ul>
              </div>
            </div>

            {/* INTELLIGENT PLATFORM */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Intelligent platform linking every elements of your business
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Unified commerce
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Reinvention of selling by shifting to digital commerce.
                    Offer seamless, cross platform shopping experience to your
                    customers, with Omni channel order management capabilities.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Omni channel services
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Drive the real conversation. Facilitates to have a special
                    bond and have real conversations with shoppers and that
                    promotes Personalization with every single meeting of
                    shoppers and pushes the sales team to respond faster with
                    the information.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Customized customer shopping experience
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enable your business to provide customized shopping
                    experience or journeys in order to deliver right offers at
                    right time seamlessly across varied platforms
                  </p>
                </div>
              </div>
            </div>

            {/* EMPOWERMENT FOR YOUR TEAM */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Sales force automation - a true empowerment for your team
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Quick Order Management
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Shortening the order to cash time is one of the key elements
                    of ecommerce and our order management system enables you to
                    process orders quickly after they captured.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Inventory on your finger tips
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Update yourselves with latest stock updates at all our
                    retail centers and avoid stock out situations.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Straight Feed Back from Market
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Direct comprehensive feedback from the market with the help
                    of structured surveys.
                  </p>
                </div>
              </div>
            </div>

            {/* SFA SOLUTIONS WITH FLEXIBILITY */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                SFA solutions with the flexibility
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-4">
                    01
                  </div>
                  <p className="text-gray-700 text-sm">
                    Easily configurable solutions matching custom requirements
                    of each customer
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-4">
                    02
                  </div>
                  <p className="text-gray-700 text-sm">
                    Aligns with your store processes and goes in tandem with
                    your operations management, which ultimately makes your
                    solution easily adaptable.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-4">
                    03
                  </div>
                  <p className="text-gray-700 text-sm">
                    Proven scalability - Our solutions can easily be deployed to
                    small teams in local office to global teams distributed
                    across the world and manage numerous user interactions and
                    transactions every single day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {service.slug === "retail-lead-management" && (
        <>
         <div className="pt-24 md:pt-0 bg-slate-900">
          <img
            src={"/images/retail-lead-management-bg.png"} // update path if needed
            className="w-full object-contain pt-20 md:pt-0 bg-slate-900"
            alt="retail-lead-management-system"
          />
          </div>
          <div className="container mx-auto px-4 md:px-10 lg:px-20 py-10">
            {/* INTRO */}
            <div className="mb-12 max-w-4xl mx-auto text-center text-gray-700 leading-relaxed">
              <p>
                Proficient Lead Management System to Manage, track and most
                importantly convert retail business.
              </p>
            </div>

            {/* EFFECTIVE LMS + BRIEF */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Effective Lead Management System to enhance sales growth
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Leads form the sole of the enterprise be it a start up or
                  large corporation. We must agree that converting possible
                  leads for a business requires a smart Lead Management System
                  to track, measure and analyze to ensure amount of money and
                  time spent on leads is not wasted.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Retail Lead Management System in brief and its use !
                </h3>
                <ul className="space-y-3 text-gray-700 list-disc pl-5">
                  <li>
                    In order to manage leads and engage with prospective
                    customers a business needs Lead Management Software, to
                    develop the
                  </li>
                  <li>
                    Leads and nurture them to get converted. With The software
                    one can keep a track of converted and non-converted leads
                    and further formulate responses to enable conversion.
                  </li>
                </ul>
              </div>
            </div>

            {/* OUR LMS – A COMPREHENSIVE SYSTEM */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Our LMS – A comprehensive system
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Lead Capture
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Capture and Continuous development of leads with constant
                    interaction and tag them based on their priority to make
                    effective use of lead buckets.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Lead Distribution
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Implementation of tailor made work flow to automate lead
                    distribution among sales teams based on locations and
                    products category.
                  </p>
                </div>
              </div>
            </div>

            {/* HIGHLIGHTS OF OUR LMS */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Highlights of our LMS
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Sales Tracking
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Helps you track revenue generated by your team at regular
                    intervals.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Email Integration
                  </h3>
                  <p className="text-gray-600 text-sm">
                    It’s all about communication! – you can sync your present
                    email system with our LMS and track regular conversations
                    with your prospective leads.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Pipeline Management
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Boost lead conversion rates by effective management of the
                    sales pipeline.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Territory Management
                  </h3>
                  <p className="text-gray-600 text-sm">
                    It’s about who’s who – re route the leads to right territory
                    at the right time to ensure desired sales conversions.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Accurate Forecasting
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our LMS brings in AI based accuracy of forecasts which forms
                    the most vital part of your decision making process.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Reports and Dashboards
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our LMS provides most intuitive and interactive dashboards
                    which supply timely metrics and reports required for quick
                    decision making or knowing the statuses.
                  </p>
                </div>
              </div>
            </div>

            {/* WHAT MAKES OUR LMS TICK */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                What makes our Retail Lead Management System tick ?
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-5 max-w-3xl">
                <li>
                  Comprehensive information display of lead and task history
                </li>
                <li>Efficient integration with the sales team process</li>
                <li>Real-time reports of every lead</li>
                <li>Large and extensive database of sales funnel</li>
                <li>Regular notifications and alerts.</li>
              </ul>
            </div>
          </div>
        </>
      )}
      {service.slug === "ecommerce-b2b" && (
        <>
        <div className="pt-24 md:pt-0 bg-slate-900">
          <img
            src={"/images/ecommerce-b2b-bg.png"} // update path if needed
            className="w-full object-contain pt-20 md:pt-0 bg-slate-900"
            alt="e-commerce-for-b2b"
          />
          </div>
          <div className="container mx-auto px-4 md:px-10 lg:px-20 py-10">
            {/* INTRO */}
            <div className="mb-12 max-w-4xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Seamless experiences For your B2B customers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Digital sales and partner networks enables B2B companies to stay
                ahead of competition and to think beyond the conventional sales
                to reach out to their customers. Our B2B software solutions are
                designed and developed to enable companies to reach out to B2B
                clients enhance sales.
              </p>
            </div>

            {/* FOUR FEATURE CARDS */}
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              <div className="bg-white rounded-xl shadow border p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Customer-centric Services
                </h3>
                <p className="text-gray-600 text-sm">
                  B2B e-commerce platform is client centric and is focused on
                  Enhancing client experience through a real-time seamless model
                  .
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Facilitate orders
                </h3>
                <p className="text-gray-600 text-sm">
                  Facilitating customization in B2B experiences. Validate
                  product availability, create and manage B2B orders from a
                  catalog and payment in multiple currencies and more.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Automating sales
                </h3>
                <p className="text-gray-600 text-sm">
                  Sales representatives are provided with modules like contact
                  and accounts management, sales order entry and order status
                  updates. Further sales automation also includes on the field
                  mobile application.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Sales Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Extract sales data and its analysis it to get next steps or
                  actionable insights to know latest B2B trends that can help
                  sales representatives to handle their territories more
                  effectively.
                </p>
              </div>
            </div>

            {/* B2B RETAIL E-COMMERCE MODULES */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                B2B Retail E-commerce Modules
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-3">1</div>
                  <p className="text-gray-700 font-medium">
                    Customized product suggestions
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-3">2</div>
                  <p className="text-gray-700 font-medium">B2B ecosystem</p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-3">3</div>
                  <p className="text-gray-700 font-medium">
                    Cross-platform compatibility
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-3">4</div>
                  <p className="text-gray-700 font-medium">
                    Customer / market segmentation
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-3">5</div>
                  <p className="text-gray-700 font-medium">
                    Customer Loyalty programs
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-3">6</div>
                  <p className="text-gray-700 font-medium">
                    Role-based custom dashboards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {service.slug === "unified-b2c-retail" && (
        <>
        <div className="pt-24 md:pt-0 bg-slate-900">
          <img
            src={"/images/unified-b2c-retail-bg.png"} // update path if needed
            className="w-full object-contain pt-20 md:pt-0 bg-slate-900"
            alt="unified-b2c-retail-solution"
          />
          </div>
          <div className="container mx-auto px-4 md:px-10 lg:px-20 py-10">
            {/* INTRO */}
            <div className="mb-12 max-w-4xl mx-auto text-center text-gray-700 leading-relaxed">
              <p>
                Competition is at every corner in the current B2C marketplace
                and only the suitable technology can give you the benefit
                required to stay ahead of the competition. The solution
                facilitates cross-channel operations, which mandates the IT
                infrastructure to be responsive and service round-the-clock.
              </p>
            </div>

            {/* FOUR FEATURE CARDS */}
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              <div className="bg-white rounded-xl shadow border p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Marketplace solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Along with managing products, inventory and orders on one hand
                  Connection with potential customers on marketplaces should
                  happen on the other . One can easily look for extensive sales
                  growth simply by exploring the opportunities of marketplace
                  sites.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Mobile based E-commerce Development
                </h3>
                <p className="text-gray-600 text-sm">
                  We present rich e-commerce apps compatible both on native
                  Android and iOS platforms to provide enhanced mobile shopping
                  experiences to target customer with lot of add-on
                  functionalities.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Omni channel experience
                </h3>
                <p className="text-gray-600 text-sm">
                  An ecommerce platform driven by omni channel retailing and
                  marketing strategies, empowers your company to provide omni
                  channel customer experience.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Solution to manage stores
                </h3>
                <p className="text-gray-600 text-sm">
                  Store maintenance features like accounts, orders, customer
                  data, refunds and even email templates play vital role in
                  helping you manage your ecommerce platform with at-most care.
                </p>
              </div>
            </div>

            {/* OUR B2C SOLUTIONS */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Our B2C Solutions
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow border p-6">
                  <ul className="space-y-2 text-gray-700 list-disc pl-5">
                    <li>Features that facilitate click and connect</li>
                    <li>Marketing in market place</li>
                    <li>Social commerce</li>
                    <li>Personalized mobile applications</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <ul className="space-y-2 text-gray-700 list-disc pl-5">
                    <li>Retail store applications</li>
                    <li>Paid ads and searches</li>
                    <li>Shipping modules</li>
                    <li>Support features for multiple sales routes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* WHY COLLABORATE WITH US */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Why collaborate with us ?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-3">1</div>
                  <p className="text-gray-700">
                    Website with Innovative design that can enhance your
                    customers online browsing or buying experience.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-3">2</div>
                  <p className="text-gray-700">
                    Exceed on customer expectations with personalized shopping
                    experiences and much more.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-3">3</div>
                  <p className="text-gray-700">
                    Fully integrated B2C solution.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-3">4</div>
                  <p className="text-gray-700">
                    Ensure your online store is growing and always on the top.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {service.slug === "dealer-management-system" && (
        <>
       <div className="pt-24 md:pt-0 bg-slate-900">
          <img
            src={"/images/dealer-management-system-bg.png"} // update path if needed
            className="w-full object-contain pt-20 md:pt-0 bg-slate-900"
            alt="dealer-management-system"
          />
          </div>
          <div className="container mx-auto px-4 md:px-10 lg:px-20 py-10">
            {/* INTRO */}
            <div className="mb-12 max-w-4xl mx-auto text-center text-gray-700 leading-relaxed">
              <p>
                Dealer or the dealership acts as one of the major components of
                the retail sales system. Our experienced developers are capable
                of providing customized dealership management solutions that
                showcase new functionalities along with meticulous integration
                with present systems
              </p>
            </div>

            {/* FOUR FEATURE CARDS */}
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              <div className="bg-white rounded-xl shadow border p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Solutions for Dealership Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Custom Dealer Management Systems for collections management
                  and facilitating real time computation of profit and loss and
                  more.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  CRM Services
                </h3>
                <p className="text-gray-600 text-sm">
                  Our Dealer CRM solutions like content management systems
                  clubbed with marketing automation tools always play vital role
                  in empowering dealership with omni-channel market optimization
                  and much more
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Showroom Management
                </h3>
                <p className="text-gray-600 text-sm">
                  We have great expertise in building reliable customer counting
                  and tracking and inventory management software for integrated
                  multi location showroom management.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Showroom Inventory Management Software
                </h3>
                <p className="text-gray-600 text-sm">
                  We provide Excellent inventory management software which cover
                  inventory management for new and existing products plus
                  decoders, list creation and database creation.
                </p>
              </div>
            </div>

            {/* OUR KEY MODULES */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Our Key Modules
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Logistics planning system
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Dealer locator
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Sub dealer voice
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Ticket management system
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">Easy feedback</h3>
                </div>
              </div>
            </div>

            {/* WHY INVEST IN DMS */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Why Invest in DMS ?
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <p className="text-gray-700 text-sm">
                    A DMS investment provides you with improved level of sales
                    forecasting based on LIVE sales inputs.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <p className="text-gray-700 text-sm">
                    Stock inventory at your finger tips, especially when you are
                    spread across multiple dealer areas.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <p className="text-gray-700 text-sm">
                    Facilitates Effective monitoring which results in higher
                    level speedy decision making and enhanced level of
                    operational management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {service.slug === "pim-software-solutions" && (
        <>
         <div className="pt-24 md:pt-0 bg-slate-900">
          <img
            src={"/images/pim-software-solutions-bg.png"} // update path if needed
            className="w-full object-contain pt-20 md:pt-0 bg-slate-900"
            alt="pim-software-solutions"
          />
          </div>
          <div className="container mx-auto px-4 md:px-10 lg:px-20 py-10">
            {/* PAIN POINTS */}
            <div className="mb-16 max-w-3xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Are these pain points challenging your organization?
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>
                  Plenty of time and effort to manage the product information
                </li>
                <li>disorganized product catalogs</li>
                <li>
                  Presence of massive data across multiple spreadsheets and
                  documents causing errors and wrong information
                </li>
                <li>
                  Mass amounts of content changes to your suppliers becoming
                  difficult especially when they are in time zones.
                </li>
              </ul>
            </div>

            {/* WHY PIM SOFTWARE SOLUTION */}
            <div className="mb-20">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                Why PIM Software Solution?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Quick Turnaround time
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Increases the speed of product reach on various sales and
                    marketing channels.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Enhanced product experience
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Cross channel product experience is guaranteed for your
                    customers as PIM is highly stream lined with product
                    content. Fosters impulsive buying and enhanced customer’s
                    buying experience.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Successful omni channel commerce
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enables you to sell across varied sales channels and
                    enriches your customer’s omni channel shopping experience.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Cost effective
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Assure greater productivity and reduced costs
                  </p>
                </div>
              </div>
            </div>

            {/* OUR PIM SOFTWARE FEATURES */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                Our PIM Software Features
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Personalized solution
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Intuitive and user friendly
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Automation and Agility
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Data Analytics
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">Localization</h3>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
    </>
  );
}

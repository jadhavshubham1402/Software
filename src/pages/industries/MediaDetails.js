import { useParams } from "react-router-dom";
import { mediaList } from "../../data/softwareData";

export default function MediaDetails() {
  const { slug } = useParams();
  const service = mediaList.find((item) => String(item.slug) === slug);

  if (!service) {
    return <div className="p-10">Service not found</div>;
  }

  return (
    <>
      {service.slug === "ott-software" && (
        <>
        <div className="bg-[#111827] p-24">
          <img
            src={"/images/ott-services-bg.png"} // update path if needed
            className="w-full object-contain"
            alt="ott-services"
          />
          </div>
          <div className="container mx-auto px-6 md:px-10 lg:px-20 py-10">
            {/* WE PROVIDE OTT SOFTWARE SOLUTIONS */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src={"/images/ott1.jpg"} // update path
                  alt="OTT software solutions"
                  className="rounded-xl shadow-md w-[80%] object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  We provide OTT software solutions
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We design and develop OTT app solutions that offer seamless
                  video streaming experience for users. Our solutions scalable
                  enough to help you target a wider range of audience and also
                  retain them.
                </p>
              </div>
            </div>

            {/* HOW WE DELIVER THE OTT CONTENT */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                How we deliver the OTT Content ?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Mobile devices
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Smart phones and other mobile devices can access the service
                    through mobile based apps.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Desktops
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Customers who are used to desktops can access the content
                    through web browsers
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Smart Television
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We have built designated apps for smart TVs to access the
                    content
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Digital Media players
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Refers to external or 3rd party apps like apple TV which
                    support multiple OTT solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* HIGH-PERFORMANCE OTT STREAMING */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src={"/images/ott2.jpg"} // update path
                  alt="High-performance OTT Streaming Solutions"
                  className="rounded-xl shadow-md w-[80%] object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                  High-performance OTT Streaming Solutions
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  With a decade of experience in the media industry, we develop
                  OTT apps for Smart TVs, Android and iOS devices too and use
                  the web to deliver a premium OTT content and great experience
                  to your users. We are supported by smart data rights
                  management and recommended algorithms, which facilitate
                  favorites and watch history on multi devices.
                </p>
              </div>
            </div>

            {/* WHAT YOU CAN DELIVER */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                What you can deliver with our OTT Platforms
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Live streaming
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our OTT platform delivers your real time content LIVE to
                    audience by tracking and distributing seamlessly.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Video streaming
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our OTT platforms are highly secure and scalable and
                    facilitate multi channel delivery through reliable content
                    delivery networks (CDN).
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Audio streaming
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Equipped with fast transcoding capability our OTT platform
                    can help you broadcast LIVE audio events seamlessly to your
                    target audience.
                  </p>
                </div>
              </div>
            </div>

            {/* KEY FEATURES */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Key Features?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Cloud Transcoding
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our OTT platforms provides enough flexibility to stream your
                    videos on any digital media player in formats such as
                    MPEG-2, AVI, H.264.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    CMS for Videos
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our OTT platforms have intuitively built in features that
                    helps you to upload and manage content seamlessly.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Customizable to your requirements
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our OTT solutions are built with great backend like a swift
                    or other similar powerful players which can be easily
                    tweaked according to the content.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Content partner portal
                  </h3>
                  <p className="text-gray-600 text-sm">
                    With our OTT solutions one can collaborate with external
                    partners to host multiple copyrighted content on their
                    platforms.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Web application of progressive nature
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Maximize the user experience with app like feature which in
                    simple terms is called PWA Progressive Web App
                  </p>
                </div>
              </div>
            </div>

            {/* NEW PROJECTS CONSULTATION */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src={"/images/ott3.jpg"} // update path
                  alt="OTT software solutions"
                  className="rounded-xl shadow-md w-[80%] object-cover"
                />
              </div>
              <div className="mb-12 max-w-3xl">
                <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                  New Projects Consultation
                </h2>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>
                    Requirement gathering, Business case followed by strategy
                    development
                  </li>
                  <li>
                    Operational and business strategy plan bid and PMO
                    documentation
                  </li>
                  <li>
                    Meticulous planning of hardware and technology stack
                    implementation
                  </li>
                  <li>SW selection and customizing the overall approach.</li>
                </ul>
              </div>
            </div>

            {/* EXISTING PROJECTS */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div className="mb-20 max-w-3xl">
                <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                  Existing projects management and consultation
                </h2>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>
                    Getting updated after auditing of legacy OTT platform
                    followed by E2E studies of source code and over all
                    application architecture.
                  </li>
                  <li>
                    Optimizing of existing business and ensuring strict
                    adherence to enterprise standards.
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src={"/images/ott4.jpg"} // update path
                  alt="OTT software solutions"
                  className="rounded-xl shadow-md w-[80%] object-cover"
                />
              </div>
            </div>

            {/* HOW OUR SERVICE WORKS */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                How Our Service works
              </h2>
              <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
                We ensure our content is delivered from highly reliable content
                service providers and it can be availed by any end user with
                suitable internet connection and hardware setup.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Content Ingest Sources
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Track and acquire video from any source
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Middleware Panel
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Useful for content delivery and is based on subscription
                    model
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    CDN (Content Delivery Networks )
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ensuring non stop super-fast content delivery
                  </p>
                </div>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Benefits ?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Live TV Streaming
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Multi-device Support
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Video-On-Demand Library
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Fast and Easy Setup
                  </h3>
                </div>
              </div>
            </div>

            {/* OUR TECHNOLOGY STACK */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Our Technology Stack
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 flex items-center justify-center h-28">
                  <img
                    src={"/images/ott5.jpg"} // update path
                    alt="Tech 1"
                    className="max-h-24 object-contain"
                  />
                </div>
                <div className="bg-white rounded-xl shadow border p-6 flex items-center justify-center h-28">
                  <img
                    src={"/images/ott6.jpg"} // update path
                    alt="Tech 2"
                    className="max-h-24 object-contain"
                  />
                </div>
                <div className="bg-white rounded-xl shadow border p-6 flex items-center justify-center h-28">
                  <img
                    src={"/images/ott7.jpg"} // update path
                    alt="Tech 3"
                    className="max-h-24 object-contain"
                  />
                </div>
                <div className="bg-white rounded-xl shadow border p-6 flex items-center justify-center h-28">
                  <img
                    src={"/images/ott8.jpg"} // update path
                    alt="Tech 4"
                    className="max-h-24 object-contain"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                Why Work with Paxycop ?
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>
                  robust and scalable IT infrastructure handling erratic
                  broadband network
                </li>
                <li>sustainable Content Delivery Network (CDN)</li>
                <li>
                  Tracking content consumption patterns over multiple devices
                </li>
                <li>
                  Boost revenues and formulate new monetization patterns with no
                  addon cost.
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      {service.slug === "digital-asset-management" && (
        <>
        <div className="bg-[#111827] p-24"></div>
          <img
            src={"/images/digital-asset-management-bg.png"} // update path if needed
            className="w-full object-contain"
            alt="software-for-digital-asset-management"
          />
          <div className="container mx-auto px-6 md:px-10 lg:px-20 py-10">
            {/* INTRO */}
            <div className="mb-16 max-w-4xl mx-auto text-center text-gray-700 leading-relaxed">
              <p>
                Driven by comprehensive expertise our Digital Asset manager has
                proven to be one of start products in the market .
              </p>
            </div>

            {/* WHAT WE NEED */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                What we need in digital asset management system
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Data management
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Resource Management
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Digital content management
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Workflow management
                  </h3>
                </div>
              </div>
            </div>

            {/* WHY DIGITAL ASSET MANAGEMENT */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src={"/images/digital-asset1.png"} // update path
                  alt="Why Digital Asset Management"
                  className="rounded-xl shadow-md w-[80%] object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                  Why Digital Asset Management?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  With adoption of digital infrastructure and remote working is
                  high in the market, digital asset management has become more
                  vital and has direct impact on organizations productivity. It
                  facilitates better administration and organizing of files
                  which forms an important part of SOPS in the company.
                </p>
              </div>
            </div>

            {/* PLATFORMS WE WORK ON */}
            {/* PLATFORMS WE WORK ON */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                We work on following Digital Asset management platforms
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <img
                      src={"/images/digital-asset2.jpg"} // update path
                      alt="Pimcore"
                      className="h-12 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-cyan-600 mb-2">
                    Pimcore
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Focused on data management. It’s an open-source platform
                    focused on data management and One of the most widely used
                    digital asset management software.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <img
                      src={"/images/digital-asset3.jpg"} // update path
                      alt="Phrasenet"
                      className="h-12 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-cyan-600 mb-2">
                    Phrasenet
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Open-source platform for managing and sharing digital
                    content.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <img
                      src={"/images/digital-asset4.jpg"} // update path
                      alt="Razuna"
                      className="h-12 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-cyan-600 mb-2">
                    Razuna
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enables to publish and control of digital assets, PDFs,
                    images, videos, audio files, etc.
                  </p>
                </div>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Benefits ?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Eradicates bottlenecks, creates and promotes accessibility
                  </h3>
                  <p className="text-gray-600 text-sm">
                    DAM facilitates teams to self search and use digital assets.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Seamless content publishing
                  </h3>
                  <p className="text-gray-600 text-sm">
                    DAM enables you to create once and publish multiple times
                    seamlessly
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Focus
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Plays a vital role in helping minimize management efforts
                    and allows the management to focus on other important areas
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Acceleration marketing
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Lead generation at its best
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Cost effective
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enhances production and operational efficiency by reducing
                    cost and time
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Maximum ROI
                  </h3>
                  <p className="text-gray-600 text-sm">
                    The insights-driven approach by DAM, maximizes the ROI from
                    marketing and sales campaigns
                  </p>
                </div>
              </div>
            </div>

            {/* KEY MODULES */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Key Modules
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Ever expanding connectivity
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Quick access files, data and content
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Secured storage of critical digital assets
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Scalable infrastructure according to ever changing business
                    scenario
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Timely Insights and metric -drive smart and quick decisions
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {service.slug === "cms-development" && (
        <>
        <div className="bg-[#111827] p-24">
          <img
            src={"/images/cms-development-bg.png"} // update path if needed
            className="w-full object-contain"
            alt="cms-development"
          />
          </div>
          <div className="container mx-auto px-6 md:px-10 lg:px-20 py-10">
            {/* INTRO */}
            <div className="mb-16 max-w-4xl">
              <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                High end and Customized CMS Development Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                (CMS) more or less is a time-saving solution that allows users
                to add, edit and delete the content at their will irrespective
                of time and location. Backend database will store all the
                content presents it in the front end for readers. Its a fool
                proof system and use WYSIWYG editors to empower even
                non-technical personnel to create their own content.CMS also
                comes with responsive designs that can perfectly fit into
                multiple screen sizes.
              </p>
            </div>

            {/* KEY BENEFITS */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Key Benefits ?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Access to Ready-made Plugins
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Saves development time and promotes quick installation and
                    content generation
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Full control over the content
                  </h3>
                  <p className="text-gray-600 text-sm">
                    No third party dependency, anyone can upload and manage the
                    content from anywhere and at any time
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Reduced cost
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Low cost and hazel free
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    SEO management
                  </h3>
                  <p className="text-gray-600 text-sm">
                    CMS carry automated SEO management , creates custom URLs
                    compatible for the optimization and various search engines
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    No Additional man power required
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Being a fool proof system , you don’t have to hire separate
                    team to load the content.
                  </p>
                </div>
              </div>
            </div>

            {/* OUR EXPERTISE */}
            <div className="mb-20 max-w-3xl">
              <h2 className="text-2xl font-semibold text-cyan-600 mb-6">
                Our Expertise
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>
                  Customized CMS Development – Our team of CMS experts are
                  proficient in designing , developing and customizing CMS
                  solutions as per your requirements and we have more than a
                  decade of experience in working for various industries
                </li>
                <li>Tailor made CMS Workflow Development</li>
                <li>Personalized Web Application Development</li>
                <li>Architecture Design</li>
                <li>Customized Microsoft SharePoint Development skills</li>
                <li>Kentico Modules Development</li>
                <li>DotNetNuke Services</li>
              </ul>
            </div>

            {/* OUR CMS DEVELOPMENT SERVICES */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Our CMS Development Services
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Mobile-responsive design
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our CMSs are multi device and multi screen compatible.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    CMS Integration Service
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We develop and integrate add-on plug-in and extensions with
                    your current CMS
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Custom CMS Development Services
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our CMS apps are customized to client requirements and our
                    tailor made solutions always suite the clients working
                    environment and derive the results accordingly
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Plug-in Development
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our expert development team is proficient in developing
                    add-on plug-ins and ensures your CMS is as per the trend.
                  </p>
                </div>
              </div>
            </div>

            {/* OUR TECHNICAL EXPERTISE */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Our Technical Expertise
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 flex items-center justify-center h-28">
                  <img
                    src={"/images/cms1.jpg"} // update path
                    alt="Apache Spark"
                    className="max-h-24 object-contain"
                  />
                </div>

                <div className="bg-white rounded-xl shadow border p-6 flex items-center justify-center h-28">
                  <img
                    src={"/images/cms2.jpg"} // update path
                    alt="Kafka"
                    className="max-h-24 object-contain"
                  />
                </div>

                <div className="bg-white rounded-xl shadow border p-6 flex items-center justify-center h-28">
                  <img
                    src={"/images/cms3.jpg"} // update path
                    alt="Cassandra"
                    className="max-h-24 object-contain"
                  />
                </div>

                <div className="bg-white rounded-xl shadow border p-6 flex items-center justify-center h-28">
                  <img
                    src={"/images/cms4.jpg"} // update path
                    alt="HBase"
                    className="max-h-24 object-contain"
                  />
                </div>

                <div className="bg-white rounded-xl shadow border p-6 flex items-center justify-center h-28">
                  <img
                    src={"/images/cms5.jpg"} // update path
                    alt="Hive"
                    className="max-h-24 object-contain"
                  />
                </div>

                <div className="bg-white rounded-xl shadow border p-6 flex items-center justify-center h-28">
                  <img
                    src={"/images/cms6.jpg"} // update path
                    alt="Avro"
                    className="max-h-24 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* WE SERVE FOLLOWING SEGMENTS */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                We serve following Segments
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">Health care</h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">Retail</h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Food and Beverage
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">Manufacturing</h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">Real estate</h3>
                </div>
              </div>
            </div>

            {/* WHY US */}
            <div className="mb-10 max-w-3xl">
              <h2 className="text-2xl font-semibold text-cyan-600 mb-6">
                Why us ?
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>10+ Years in the Industry</li>
                <li>Proficient in Healthcare sector</li>
                <li>E-commerce experts with more than 10 years experience</li>
                <li>
                  Delivery of Source Code to Clients and customizing the CMS
                </li>
                <li>Certified Developers and well exposed team</li>
                <li>Dedicated team headed by experienced Project Managers</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

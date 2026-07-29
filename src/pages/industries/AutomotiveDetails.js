import {
  FaBolt,
  FaCar,
  FaChargingStation,
  FaChartLine,
  FaClipboardCheck,
  FaCloud,
  FaCogs,
  FaMapMarkedAlt,
  FaRobot,
  FaUsers,
  FaInfoCircle,
  FaBroadcastTower,
  FaMobileAlt,
  FaPhoneAlt,
  FaSearch,
  FaPhoneVolume,
  FaTags,
  FaMotorcycle,
  FaTruckMoving,
  FaTools,
  FaChartBar,
  FaTachometerAlt,
  FaMapMarkerAlt,
  FaCarSide,
  FaDatabase,
  FaClock,
  FaMicrochip,
  FaEye,
  FaNetworkWired,
  FaRoute,
  FaBrain,
  FaHandshake,
  FaMap,
  FaMapSigns,
  FaSatelliteDish,
  FaTrafficLight,
  FaMicrophone,
  FaCube,
  FaLayerGroup,
} from "react-icons/fa";
import { FaCarBattery } from "react-icons/fa6";
import { GiCircuitry } from "react-icons/gi";
import { MdSensors, MdSettingsApplications } from "react-icons/md";
import { useParams } from "react-router-dom";
import { automotiveList } from "../../data/softwareData";
// Add this function for static export

export default function AutomotiveDetails() {
  const { slug } = useParams();
  const service = automotiveList.find((item) => String(item.slug) === slug);

  if (!service) {
    return <div className="p-10">Service not found</div>;
  }

  return (
    <div>
      {service.slug === "connected-internet-cars" && (
        <>
          <img
            src={"/images/cic-bg.png"}
            className="object-contain"
            alt="connected-internet-cars"
          />
          <div className="container mx-auto py-10">
            {/* OUR SERVICES */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Our Services
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <FaUsers className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Consulting</h3>
                  <p className="text-gray-600 text-sm">
                    Strategic consulting for connected automotive ecosystems.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <FaCar className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    Fleet Management
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Manage vehicles, drivers, maintenance and operational data.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <FaCloud className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    Connected Car Cloud
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Cloud-based vehicle communication and data management.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <FaChartLine className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    Data Analytics & Telematics
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Real-time analytics for smarter driving decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* ADVANCED ELECTRONICS */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Advanced Electronics in Automobiles
              </h2>

              <div className="grid lg:grid-cols-2 gap-10">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                    Connected Motorcycles
                  </h3>

                  <ul className="space-y-3 text-gray-700 list-disc pl-5">
                    <li>Smart turn-by-turn navigation.</li>
                    <li>Ride behaviour analytics.</li>
                    <li>Bike health reports.</li>
                    <li>Online & Offline mode support.</li>
                    <li>Multi-language support.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                    Connected Cars
                  </h3>

                  <ul className="space-y-3 text-gray-700 list-disc pl-5">
                    <li>Geo-fencing and live vehicle tracking.</li>
                    <li>AI-powered driver behaviour monitoring.</li>
                    <li>Fleet dashboards and analytics.</li>
                    <li>Maintenance alerts.</li>
                    <li>Real-time cloud connectivity.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                    Connected Individual Vehicles
                  </h3>

                  <ul className="space-y-3 text-gray-700 list-disc pl-5">
                    <li>Remote vehicle control.</li>
                    <li>Driver behaviour reports.</li>
                    <li>SOS emergency management.</li>
                    <li>Route optimisation.</li>
                    <li>Vehicle tracking.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                    Empowering Auto Ecosystem
                  </h3>

                  <ul className="space-y-3 text-gray-700 list-disc pl-5">
                    <li>Navigation recording.</li>
                    <li>Vehicle location management.</li>
                    <li>Speed alerts.</li>
                    <li>Predictive maintenance.</li>
                    <li>Fleet performance monitoring.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* TECHNOLOGY */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Our Technology Expertise
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  {
                    title: "IoT",
                    icon: <GiCircuitry className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "Cloud",
                    icon: <FaCloud className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "AI",
                    icon: <FaRobot className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "Machine Learning",
                    icon: <FaRobot className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "GPS",
                    icon: <FaMapMarkedAlt className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "Telematics",
                    icon: <MdSensors className="text-5xl text-gray-800" />,
                  },
                ].map((tech) => (
                  <div
                    key={tech.title}
                    className="bg-white rounded-xl shadow border p-8 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4">{tech.icon}</div>

                    <h3 className="font-semibold text-gray-800 ">
                      {tech.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* HIGHLIGHTS */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Highlights of Our Connected Car Applications
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow border p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Connected Car Applications
                  </h3>

                  <p className="text-gray-700">
                    Deliver seamless user experiences with cloud-connected
                    vehicles, mobile applications, and real-time monitoring.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Automotive Cloud Engineering
                  </h3>

                  <p className="text-gray-700">
                    Hybrid cloud infrastructure for scalable and secure
                    connected vehicle solutions.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Cloud Connectivity
                  </h3>

                  <p className="text-gray-700">
                    Reliable 3G/4G/5G and Wi-Fi connectivity for connected
                    automotive platforms.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Location-Based Services
                  </h3>

                  <p className="text-gray-700">
                    GPS tracking, route optimisation, map services, and
                    intelligent navigation for connected vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {service.slug === "ev-charging-software" && (
        <>
          <img
            src="/images/ev.png"
            className="w-full object-cover"
            alt="ev-charging-software"
          />

          <div className="container mx-auto py-10">
            <div className="text-center max-w-5xl mx-auto mb-20">
              <p className="text-lg text-gray-700">
                We offer EV charging software applications and charge point
                operator solutions for automotive companies along with roaming
                infrastructure.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-6">
                Want to move your business up 1 level? Then call us!
              </h2>
            </div>
            <div className="mb-20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaChargingStation className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Charge Point Operators
                  </h3>
                  <p className="text-gray-600">
                    Develop software solutions for charging network operators
                    with operational excellence and reduced costs.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaCarBattery className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Service for Electrical Vehicles
                  </h3>
                  <p className="text-gray-600">
                    Connect EV charging solutions into robust interconnected
                    vehicle networks with streamlined operations.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaBolt className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Service in Electric Mobility
                  </h3>
                  <p className="text-gray-600">
                    Enable connectivity between charging networks and mobile
                    applications, including billing and white-labelled
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Features and Benefits of EV Charging Software Applications
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Web-based Control Panel",
                  "Exceptional Mobile Version",
                  "CRM",
                  "Easy Payments & Billing",
                  "End-user Loyalty & Satisfaction",
                  "White-Labelling of Applications",
                  "Future Scale Up",
                  "Location-based Services",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-xl shadow border h-44 flex items-center justify-center text-center p-6"
                  >
                    <h3 className="font-semibold text-gray-800">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                What Differs Us From The Rest?
              </h2>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaUsers className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Customer Centric
                  </h3>
                  <p className="text-gray-600">
                    Feature-rich mobile applications delivering seamless
                    customer experiences both online and offline.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaClipboardCheck className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Complete Control
                  </h3>
                  <p className="text-gray-600">
                    Secure cloud-based CRM providing end-to-end management and
                    complete operational visibility.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaCogs className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Versatility</h3>
                  <p className="text-gray-600">
                    Flexible platform supporting a wide variety of EV chargers
                    from multiple vendors.
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
        </>
      )}
      {service.slug === "smart-bikes" && (
        <>
          <img
            src="/images/smart-bikes.png"
            className="w-full object-cover"
            alt="Smart Bikes"
          />

          <div className="container mx-auto py-10">
            {/* INTRO */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Integrated Connectivity Cluster - Empowering Brands
              </h2>

              <p className="text-gray-700 leading-8">
                The integrated connectivity cluster has proven to be one of the
                major breakthroughs for the automotive sector, making
                motorcycles smarter. The single platform information system
                enables riders with navigation, connectivity and valuable ride
                information.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaInfoCircle className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Highly Informative
                  </h3>
                  <p className="text-gray-600">
                    Dashboard information provides riders with all the important
                    data required for a safer and more convenient riding
                    experience.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaBroadcastTower className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
                  <p className="text-gray-600">
                    Smart mobile applications keep riders connected to their
                    motorcycles, even while on the move.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaMobileAlt className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Clear Display</h3>
                  <p className="text-gray-600">
                    Clear digital display provides easy visibility during both
                    day and night riding.
                  </p>
                </div>
              </div>
            </div>

            {/* MORE SERVICES */}

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                More Services
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaMobileAlt className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Mobile Based Applications
                  </h3>
                  <p className="text-gray-600">
                    Rich mobile applications designed to enhance motorcycle
                    connectivity and rider engagement.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaPhoneAlt className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Data</h3>
                  <p className="text-gray-600">
                    Collect valuable rider behaviour and motorcycle usage data
                    to improve overall riding experiences.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaMapMarkedAlt className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Safety & Maintenance
                  </h3>
                  <p className="text-gray-600">
                    Preventive maintenance, safety monitoring and remote
                    tracking for motorcycles.
                  </p>
                </div>
              </div>
            </div>

            {/* LEVERAGING CONNECTIVITY */}

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Leveraging Connectivity
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaSearch className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Analysis with Telematics
                  </h3>
                  <p className="text-gray-600">
                    Collect and analyse telematics data securely through
                    cloud-based services.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaPhoneVolume className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Facilitate Emergency Calls
                  </h3>
                  <p className="text-gray-600">
                    Emergency assistance with automatic call support and
                    location sharing during critical situations.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaMapMarkerAlt className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Track Bike Theft
                  </h3>
                  <p className="text-gray-600">
                    GPS-enabled tracking helps owners quickly locate stolen
                    motorcycles.
                  </p>
                </div>
              </div>
            </div>

            {/* MORE SMART SOLUTIONS */}

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                More Smart Solutions
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaTags className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Brands & Labels for Tech-Savvy Audience
                  </h3>
                  <p className="text-gray-600">
                    White-labelled smart bike platforms tailored to
                    manufacturers and technology-focused customers.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaMotorcycle className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Share & Rent</h3>
                  <p className="text-gray-600">
                    Fleet management solutions supporting bike sharing, rentals
                    and remote monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {service.slug === "telematics" && (
        <>
          <img
            src="/images/telematics.png"
            className="w-full object-cover"
            alt="Telematics"
          />

          <div className="container mx-auto py-10">
            {/* INTRO */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                A New Business Model
              </h2>

              <p className="text-gray-700 leading-8">
                Telematics connects vehicles and enhances driver and owner
                experiences. Our solutions improve mobility, safety, security
                and navigation by collecting, analysing and transferring
                real-time vehicle data. From car tracking to fuel consumption
                analysis, telematics is transforming the automotive industry.
              </p>
            </div>

            {/* APPLICATIONS */}

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Telematics Applications We Deliver
              </h2>

              <div className="grid lg:grid-cols-2 gap-10">
                <div className="bg-white rounded-xl shadow border p-8">
                  <FaCar className="text-5xl text-gray-800 mb-5" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Connected Cars
                  </h3>

                  <p className="text-gray-700">
                    Monitor vehicle health, maintenance schedules, driving
                    behaviour and route information to improve safety, reduce
                    fuel consumption and optimise operational costs.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8">
                  <FaTruckMoving className="text-5xl text-gray-800 mb-5" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Efficient Fleet Management
                  </h3>

                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Real-time vehicle visibility</li>
                    <li>Live operational data</li>
                    <li>Vehicle maintenance monitoring</li>
                    <li>Lower insurance risks</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow border p-8">
                  <FaTools className="text-5xl text-gray-800 mb-5" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Diagnose Remote Vehicles
                  </h3>

                  <p className="text-gray-700">
                    Remote diagnostics allow fleet operators to identify
                    critical vehicle issues early, minimise downtime and reduce
                    maintenance costs.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8">
                  <FaClipboardCheck className="text-5xl text-gray-800 mb-5" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Merits of Telematics
                  </h3>

                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Improve traffic management</li>
                    <li>Driver behaviour tracking</li>
                    <li>Enhanced road safety</li>
                    <li>Remote vehicle control</li>
                    <li>Tailor-made automotive solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CORE FEATURES */}

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Core Features of Our Telematics Solutions
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    title: "Data Analytics",
                    icon: <FaChartBar className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "Connectivity",
                    icon: (
                      <FaBroadcastTower className="text-5xl text-gray-800" />
                    ),
                  },
                  {
                    title: "Real-Time Speed Tracking",
                    icon: (
                      <FaTachometerAlt className="text-5xl text-gray-800" />
                    ),
                  },
                  {
                    title: "GPRS Vehicle Tracking",
                    icon: <FaMapMarkedAlt className="text-5xl text-gray-800" />,
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white rounded-xl shadow border p-8 text-center hover:shadow-lg transition"
                  >
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>

                    <h3 className="font-semibold text-gray-800 ">
                      {feature.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      {service.slug === "autonomous-adas" && (
        <>
          {/* HERO */}
          <img
            src="/images/adas-bg.png"
            alt="Autonomous Driving & ADAS"
            className="w-full object-cover"
          />

          <div className="container mx-auto py-12">
            {/* INTRO */}
            <div className="text-center max-w-5xl mx-auto mb-20">
              <p className="text-gray-600 leading-8">
                Advanced Driver Assistance Systems (ADAS) are transforming the
                automotive industry by improving safety, driving comfort and
                vehicle intelligence. Our ADAS solutions integrate intelligent
                sensors, cameras, AI and cloud technologies to enable collision
                avoidance, driver assistance, autonomous capabilities and
                connected mobility.
              </p>
            </div>

            {/* OUR SERVICES */}

            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Our Services
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaCarSide className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">
                    V2X Connectivity
                  </h3>

                  <p className="text-gray-600">
                    Cloud solutions connecting vehicles with roads, traffic
                    signals and surrounding infrastructure.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <MdSettingsApplications className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">
                    ADAS Control Panels
                  </h3>

                  <p className="text-gray-600">
                    Intelligent software modules for lane assist, cruise control
                    and driver assistance.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaNetworkWired className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">
                    Car-as-a-Service
                  </h3>

                  <p className="text-gray-600">
                    Connected mobility ecosystem enabling smart vehicle sharing
                    and digital services.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaDatabase className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">
                    Data Layer Components
                  </h3>

                  <p className="text-gray-600">
                    Secure automotive data processing, storage and analytics
                    infrastructure.
                  </p>
                </div>
              </div>
            </section>

            {/* WHY US */}

            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Why Us?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaClock className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg">
                    Real-time Road Prediction
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaCar className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg">
                    Enhanced ADAS Deployment
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaMicrochip className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg">
                    Efficient OTA Data Management
                  </h3>
                </div>
              </div>
            </section>

            {/* TECHNOLOGY */}

            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Technologies We Work On
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    title: "Computer Vision",
                    icon: <FaEye className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "Artificial Intelligence",
                    icon: <FaRobot className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "IoT & Sensors",
                    icon: <MdSensors className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "Cloud Analytics",
                    icon: <FaCloud className="text-5xl text-gray-800" />,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl shadow border p-8 text-center hover:shadow-lg transition"
                  >
                    <div className="flex justify-center mb-4">{item.icon}</div>

                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* BUSINESS BENEFITS */}

            <section>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                How ADAS Differentiates Your Automotive Business
              </h2>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Safety Matters
                  </h3>

                  <p className="text-gray-700 leading-8">
                    ADAS technologies significantly reduce accidents by
                    assisting drivers with lane departure warnings, collision
                    detection, emergency braking, adaptive cruise control and
                    blind spot monitoring. These intelligent systems improve
                    road safety, enhance customer confidence and reduce
                    operational risks.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    ADAS Promotes Road Safety
                  </h3>

                  <p className="text-gray-700 leading-8">
                    Automotive manufacturers increasingly rely on ADAS to create
                    smarter and safer vehicles. Our solutions integrate AI,
                    connectivity and real-time analytics to deliver enhanced
                    driving experiences, predictive assistance and
                    next-generation autonomous mobility.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
      {service.slug === "ai-machine-learning" && (
        <>
          {/* HERO */}
          <img
            src="/images/ai-ml-bg.png"
            alt="Artificial Intelligence & Machine Learning"
            className="w-full object-cover"
          />

          <div className="container mx-auto py-12">
            {/* INTRO */}
            <div className="text-center max-w-5xl mx-auto mb-20">
              <p className="text-gray-600 leading-8">
                Artificial Intelligence and Machine Learning are transforming
                the automotive industry by enabling smarter, safer, and more
                connected mobility. Our AI-powered solutions leverage predictive
                analytics, intelligent automation, and real-time data processing
                to optimize vehicle performance, enhance driver safety, and
                deliver exceptional user experiences.
              </p>
            </div>

            {/* OUR SERVICES */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Our Services
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaBrain className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    In-Vehicle Intelligence
                  </h3>
                  <p className="text-gray-600">
                    AI-powered systems that connect navigation, mapping, and
                    vehicle intelligence to provide real-time driving
                    assistance.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaChartLine className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Predictive Decisions
                  </h3>
                  <p className="text-gray-600">
                    Advanced analytics and machine learning models for
                    intelligent, data-driven decisions and route optimization.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaTools className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Predictive Maintenance
                  </h3>
                  <p className="text-gray-600">
                    Vehicle health monitoring and predictive diagnostics to
                    reduce downtime and maintenance costs.
                  </p>
                </div>
              </div>
            </section>

            {/* WHY US */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Why Us As Your Technology Partner
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaMapMarkedAlt className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Location Data Platforms
                  </h3>

                  <p className="text-gray-600">
                    Extensive expertise in location platforms, navigation SDKs,
                    map integration, and real-time geospatial analytics.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaRoute className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Intelligent Route Decisions
                  </h3>

                  <p className="text-gray-600">
                    AI algorithms continuously analyse traffic conditions to
                    recommend the safest and fastest routes for drivers.
                  </p>
                </div>
              </div>
            </section>

            {/* TECHNOLOGIES */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Technologies We Leverage
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    title: "Artificial Intelligence",
                    icon: <FaRobot className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "Machine Learning",
                    icon: <FaBrain className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "Big Data",
                    icon: <FaDatabase className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "Cloud Analytics",
                    icon: <FaCloud className="text-5xl text-gray-800" />,
                  },
                ].map((tech) => (
                  <div
                    key={tech.title}
                    className="bg-white rounded-xl shadow border p-8 text-center hover:shadow-lg transition-all"
                  >
                    <div className="flex justify-center mb-4">{tech.icon}</div>

                    <h3 className="font-semibold">{tech.title}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* BENEFITS */}
            <section>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                AI & Machine Learning Based Vehicles Are Smarter Than Ever
              </h2>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Hands-Free Intelligence
                  </h3>

                  <p className="text-gray-700 leading-8">
                    Deep learning and neural networks enable intelligent driving
                    assistance by recognising road conditions, traffic signs,
                    pedestrians, and surrounding vehicles. These capabilities
                    improve safety while making driving more comfortable and
                    efficient.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Ever Improving Safety Levels
                  </h3>

                  <p className="text-gray-700 leading-8">
                    AI continuously learns from real-world driving data, helping
                    vehicles detect obstacles, predict hazards, avoid
                    collisions, and support autonomous driving features that
                    improve overall road safety.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
      {service.slug === "navigation-mapping" && (
        <>
          {/* HERO */}
          <img
            src="/images/navigation-mapping-bg.png"
            alt="Navigation & Mapping"
            className="w-full object-cover"
          />

          <div className="container mx-auto py-12">
            {/* INTRO */}
            <div className="text-center max-w-5xl mx-auto mb-20">
              <p className="text-gray-600 leading-8">
                Modern navigation and mapping technologies are transforming the
                automotive industry by enabling real-time positioning,
                intelligent routing, and seamless driving experiences. Our
                solutions combine GPS, cloud mapping, live traffic intelligence,
                and advanced visualization to deliver highly accurate and
                connected navigation systems.
              </p>
            </div>

            {/* OUR SERVICES */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Our Services
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaMapMarkerAlt className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">GPS Locations</h3>

                  <p className="text-gray-600">
                    Accurate GPS positioning and reliable location tracking for
                    connected vehicles and navigation systems.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaTrafficLight className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Live Traffic Information
                  </h3>

                  <p className="text-gray-600">
                    Cloud-powered traffic updates that provide optimized routing
                    and reduce travel time.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaMicrophone className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Voice Guidance</h3>

                  <p className="text-gray-600">
                    Turn-by-turn voice navigation with intelligent voice
                    recognition for safer driving.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaCube className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    2D & 3D Rendering
                  </h3>

                  <p className="text-gray-600">
                    Interactive map visualization with immersive 2D and 3D
                    rendering for enhanced driver experiences.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaLayerGroup className="text-5xl text-gray-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Map Compilation
                  </h3>

                  <p className="text-gray-600">
                    Fast and standards-compliant map compilation for reliable
                    navigation and ADAS integration.
                  </p>
                </div>
              </div>
            </section>

            {/* WHY US */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                What Makes Us Stay Ahead in the Market?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaHandshake className="text-5xl text-gray-800 mx-auto mb-4" />

                  <h3 className="text-xl font-semibold mb-3">
                    Leading Automotive Partnerships
                  </h3>

                  <p className="text-gray-600">
                    Trusted by automotive brands for delivering advanced mapping
                    and navigation solutions.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaRoute className="text-5xl text-gray-800 mx-auto mb-4" />

                  <h3 className="text-xl font-semibold mb-3">
                    Navigation Expertise
                  </h3>

                  <p className="text-gray-600">
                    Years of experience in intelligent routing, location
                    services and digital mapping technologies.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <FaMapSigns className="text-5xl text-gray-800 mx-auto mb-4" />

                  <h3 className="text-xl font-semibold mb-3">
                    Optimized User Experience
                  </h3>

                  <p className="text-gray-600">
                    User-centric navigation interfaces designed for intuitive,
                    accurate and seamless driving experiences.
                  </p>
                </div>
              </div>
            </section>

            {/* TECHNOLOGIES */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Technologies We Leverage
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    title: "GPS",
                    icon: (
                      <FaSatelliteDish className="text-5xl text-gray-800" />
                    ),
                  },
                  {
                    title: "GIS Mapping",
                    icon: <FaMap className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "Cloud Navigation",
                    icon: <FaCloud className="text-5xl text-gray-800" />,
                  },
                  {
                    title: "Location Analytics",
                    icon: <FaChartLine className="text-5xl text-gray-800" />,
                  },
                ].map((tech) => (
                  <div
                    key={tech.title}
                    className="bg-white rounded-xl shadow border p-8 text-center hover:shadow-lg transition-all"
                  >
                    <div className="flex justify-center mb-4">{tech.icon}</div>

                    <h3 className="font-semibold">{tech.title}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* BENEFITS */}
            <section>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Transforming the Automotive Industry with Connected Navigation
              </h2>

              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Driving Experiences at Its Best
                  </h3>

                  <p className="text-gray-700 leading-8">
                    Our advanced mapping solutions deliver precise navigation,
                    intelligent routing, immersive 2D/3D visualization and
                    real-time traffic insights that significantly improve the
                    driving experience.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Better Map Accuracy
                  </h3>

                  <p className="text-gray-700 leading-8">
                    Continuously updated maps provide accurate road information,
                    traffic conditions and navigation guidance, enabling
                    autonomous and connected vehicles to make reliable driving
                    decisions.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 max-w-2xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Compliance with Regulatory Bodies
                </h3>

                <p className="text-gray-700 leading-8">
                  Our navigation platforms comply with national and
                  international map standards, ensuring dependable and
                  regulation-compliant mapping solutions for modern connected
                  vehicles.
                </p>
              </div>
            </section>
          </div>
        </>
      )}
      {service.slug === "iot-embedded-solutions" && (
        <>
          <img
            src={"/images/iot-embedded-bg.png"} // update path if needed
            className="object-contain"
            alt="iot-embedded-solutions"
          />
          <div className="container mx-auto py-10">
            {/* INTRO */}
            <div className="mb-20 max-w-4xl mx-auto text-center text-gray-700 leading-relaxed">
              <p className="mb-4">
                Ever growing demand for connected vehicles has led to new era of
                IoT in the auto sector. Hence all top auto players are depending
                on this technology like never before to acquire data to improve
                the in-vehicle experience for connected vehicles.
              </p>
              <p>
                IoT technologies have turned out to be never-to-miss business
                opportunities and look for applications that enable them to
                capitalize on these opportunities. paxykop experts carry immense
                experience in this powerful technology and knows how to deploy
                it to empower companies in automotive ecosystem.
              </p>
            </div>

            {/* THREE SERVICE CARDS */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Internet of Everything (IoE)
                </h3>
                <p className="text-gray-600 text-sm">
                  Our advanced software solutions ensures connectivity beyond
                  infrastructure and surroundings.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Embedded Software
                </h3>
                <p className="text-gray-600 text-sm">
                  Our embedded software apps brings mobile phones and traffic
                  elements under one platform to enhance driving.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  In-cloud Software
                </h3>
                <p className="text-gray-600 text-sm">
                  With a centralized cloud management software application we
                  Seamlessly integrate diverse systems
                </p>
              </div>
            </div>

            {/* WHAT MAKES US STAY AHEAD */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800  mb-10">
                What makes us stay ahead of competition
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow border p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Integration of diverse data points
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our years of experience in cloud development has equipped us
                    with necessary skills to connect the all the needed data
                    touch points within all sorts of high-performance
                    environments.
                  </p>
                  {/* Note: screenshot has duplicate text – kept one clean version */}
                </div>

                <div className="bg-white rounded-xl shadow border p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Save energy to lower costs
                  </h3>
                  <p className="text-gray-700">
                    Our experience in OTA updates, makes us capable of quick
                    collection and analyzing data with minimal time and cost.
                  </p>
                </div>
              </div>
            </div>

            {/* DESIGNING SMARTER VEHICLES */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800  mb-12">
                Designing Smarter Vehicles For Automotive Brands
              </h2>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Enhanced level of Driving Safety With IoT
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The concept of safety for autonomous vehicles has been
                    reinvented by Automotive IoT, by offering robust solutions
                    that can reduce risks on the road to a great extent. It
                    plays with major combination of cloud solutions with n
                    number of sensors to run driverless cars. All this is
                    possible by IoT-powered softwares which acts as a bridge
                    between seamless communication among connected vehicles.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Empower Your Brand with IoT Value
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    There has always been consumers great demand for increased
                    network and connectivity, this has led the automotive
                    industry to raise its bar and keep up with IoT revolution.
                    IoT helps auto companies to expand their offerings and
                    enhance the experiences of drivers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {service.slug === "hmi" && (
        <>
          <img
            src={"/images/hmi-bg.png"} // update path if needed
            className="object-contain"
            alt="human-machine-interface"
          />
          <div className="container mx-auto py-10">
            {/* INTRO */}
            <div className="mb-20 max-w-4xl mx-auto text-center text-gray-700 leading-relaxed">
              <p>
                Vehicles need to work with varied software products to take full
                advantage of Smartphone-centric infotainment systems which are
                today essential for enhancing customers or drivers driving
                experiences. Along with this, creating driver-focused designs
                for vehicles is the need of the hour. These interfaces aim to
                keeping the driver’s attention on driving and increase vehicle
                safety and comfort. Our experts at paxykop are highly
                experienced in developing innovative HMI solutions that improve
                the human-vehicle interactions.
              </p>
            </div>

            {/* SERVICE CARDS */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Instrument clusterUI
                </h3>
                <p className="text-gray-600 text-sm">
                  Our navigation software is adapted for instrument clusters of
                  the vehicles
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Integration of web and mobile navigation
                </h3>
                <p className="text-gray-600 text-sm">
                  We build apps which promote seamless integration between
                  navigation systems of both web and mobile
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  (HUDs)Head-up displays
                </h3>
                <p className="text-gray-600 text-sm">
                  We Design rich applications for HUDs in order to bring in
                  better the driving experience on road.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Voice recognition
                </h3>
                <p className="text-gray-600 text-sm">
                  Drivers will be provided with apps that are equipped with
                  cloud-based voice recognition and guidance.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  3D rendering
                </h3>
                <p className="text-gray-600 text-sm">
                  Making the full use of innovation and industry-specific tools
                  for developing realistic 3D graphics.
                </p>
              </div>
            </div>

            {/* WHAT MAKES US STAY AHEAD */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800  mb-10">
                What makes us stay ahead of competition?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Great in automotive design
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Prioritize safety in navigation and every other aspect of
                    solutions
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Provide real-time traffic updates
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Developing high end HMI applications
                  </h3>
                </div>
              </div>
            </div>

            {/* DELIVERING BETTER DRIVING EXPERIENCES */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800  mb-12">
                Delivering Better Driving Experiences
              </h2>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Enhanced In-Vehicle Experience
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Automotive HMI solutions have always proven to enhance the
                    driving experiences by providing seamless interactions with
                    multi-touch dashboards, control panels and more. All the
                    interconnected parts that work together to make driving more
                    personalized turn the whole vehicle into an ecosystem bu
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Autonomous Vehicles is now Real
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Auto companies who include autonomous vehicles as one of
                    their offerings need to exploit the true potential of HMI
                    solutions. Our futuristic HMI designs aim enables drivers to
                    pass the control to their vehicles. In simpler terms, an HMI
                    functions more or less like a driver’s navigator.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {service.slug === "security" && (
        <>
          <img
            src={"/images/security-bg.png"} // update path if needed
            className="object-contain"
            alt="automotive-security"
          />
          <div className="container mx-auto py-10">
            {/* INTRO */}
            <div className="mb-20 max-w-4xl mx-auto text-center text-gray-700 leading-relaxed">
              <p>
                Though vehicle connectivity and automation in driving throw new
                opportunities for companies in automotive industry, they also
                bring in issues pertaining to cyber security. In simpler terms
                Vehicles that imbibe mobile or cloud solutions are at risk. This
                calls for Automotive cyber security which is vital to detect the
                vulnerability of systems and protect vehicles from unauthorized
                access. paxykop’s team of experts get to the crux of the
                significance in predicting the scenarios of cyber threats and
                take proactive approach to solve them.
              </p>
            </div>

            {/* SERVICE CARDS */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  In-car data
                </h3>
                <p className="text-gray-600 text-sm">
                  Find the data leaks during transmission among the channels and
                  securing them as well
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  TCP/IP and Ethernet
                </h3>
                <p className="text-gray-600 text-sm">
                  Analyzing the network connections with in the vehicle and
                  ensuring its security is not compromised
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  TCP over USB
                </h3>
                <p className="text-gray-600 text-sm">
                  Prevent remote attacks via network services and Strengthen the
                  vehicles security .
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Infotainment systems
                </h3>
                <p className="text-gray-600 text-sm">
                  Find out DoS based attacks that might be possible via the
                  infotainmentment or in-vehicle media systems.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Third-party services
                </h3>
                <p className="text-gray-600 text-sm">
                  Regular updation and testing of third-party data services such
                  as Bluetooth, Android Auto.etc
                </p>
              </div>
            </div>

            {/* HOW ARE WE DIFFERENT */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800  mb-10">
                How are we different ?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Substantial testing experience
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Focus on secure SDLC
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Stringent penetration testing
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    A holistic approach
                  </h3>
                </div>
              </div>
            </div>

            {/* EMPOWERING THE NEX-GEN VEHICLES */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800  mb-12">
                Empowering The Nex-Gen Vehicles With Security & Privacy
              </h2>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Car Hacking Prevention
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Locking the vehicle is no more a security measure anymore
                    especially in this era of self-driven cars. The system and
                    architecture of vehicles is always in some sort of risk
                    because they connect to the internet and cloud . Here comes
                    the secure automotive software to protect from cybercrime
                    and malicious activity.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Infotainment Systems Protection
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Due to high demand for better service there is expansion of
                    connected services and that gives more room for cyber
                    attacks. Auto companies need to formulate enough cyber
                    security measures that focus on access control permissions,
                    and virus scans to protect the sensitive vehicle data leaks
                    and on-board IVI systems. Unauthorized changes to autonomous
                    systems become the pillars of the vehicle security strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

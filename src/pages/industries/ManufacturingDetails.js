import { useParams } from "react-router-dom";
import { manufacturingList } from "../../data/softwareData";

export default function ManufacturingDetails() {
  const { slug } = useParams();
  const service = manufacturingList.find((item) => String(item.slug) === slug);

  if (!service) {
    return <div className="p-10">Service not found</div>;
  }

  return (
    <>
      {service.slug === "warehouse-management" && (
        <>
          <img
            src={"/images/warehouse-management-bg.png"} // update path if needed
            className="object-contain"
            alt="warehouse-management"
          />
          <div className="container mx-auto py-10">
            {/* INTRO */}
            <div className="mb-16 max-w-4xl">
              <p className="text-gray-700 leading-relaxed">
                Warehouses play a vital role in the completion of supply chain
                cycle. Lot many Futuristic -thinking organizations are embracing
                Software based warehousing for automated control on the
                warehousing operations and enhancing them in everyday business.
                Paxycop’s Warehouse solution enables real-time monitoring of
                warehouse assets and inventory management through transparency
                across various locations.
              </p>
            </div>

            {/* WHAT WE CAN DO */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                What we can do ?
              </h2>

              {/* Managing warehouse Smartly */}
              <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-600 mb-4">
                    Managing warehouse Smartly
                  </h3>
                  <ul className="space-y-2 text-gray-700 list-disc pl-5">
                    <li>Tracking of the inventory items</li>
                    <li>
                      Efficient management of day-to-day operations in
                      warehousing.
                    </li>
                    <li>Gathering error free data related to inventory</li>
                    <li>
                      Increasing order fulfillment rate and re stock of items.
                    </li>
                  </ul>
                </div>
                <div>
                  <img
                    src={"/images/warehouse2.jpg"} // update path
                    alt="Managing warehouse Smartly"
                    className="rounded-xl shadow-md w-[75%] object-contain"
                  />
                </div>
              </div>

              {/* Storage Area Monitoring */}
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src={"/images/warehouse3.jpg"} // update path
                    alt="Storage Area Monitoring"
                    className="rounded-xl shadow-md w-[75%] object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-xl font-semibold text-cyan-600 mb-4">
                    Storage Area Monitoring
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Pertains to perishable goodsand process chemicals while
                    maintaining a safe environment.
                  </p>
                  <ul className="space-y-2 text-gray-700 list-disc pl-5">
                    <li>
                      To prevent damage of items by Monitoring the physical
                      condition of the inventory on regular basis
                    </li>
                    <li>Automating environment control</li>
                    <li>
                      Ensure product storage is carried out with high-quality
                      standards.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* WAREHOUSING TECHNOLOGIES */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Warehousing Technologies we Implement
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    RFID Readers
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Facilitates auto registering of stock movements
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Robots
                  </h3>
                  <p className="text-gray-600 text-sm">
                    An alternative to human intervention. They will be capable
                    of automating regular tasks and can be controlled from
                    remote loctions.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Autonomous Vehicles
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Self managed or self driven vehicles reduce human
                    involvement and increase operational efficiency through
                    automation.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Voice Picking
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tiny wearable’s integrated with speech application will
                    guide the user during regular operations.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Sensors & Internet of Things
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Entire storage face will be integrated with sensors that
                    provides beneficial insights and metrics of items stored.
                  </p>
                </div>
              </div>
            </div>

            {/* WHY A SMART WAREHOUSE SOLUTION */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Why a Smart Warehouse Solution?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow border p-8">
                  <div className="text-4xl font-bold text-cyan-600 mb-3">1</div>
                  <h3 className="font-semibold text-lg text-cyan-600 mb-2">
                    Drastic reduction of human errors
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Increased level of accuracy with minimum errors.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8">
                  <div className="text-4xl font-bold text-cyan-600 mb-3">2</div>
                  <h3 className="font-semibold text-lg text-cyan-600 mb-2">
                    Enhanced customer satisfaction and retention
                  </h3>
                  <p className="text-gray-600 text-sm">
                    With smart ware house one can assure safe and on-time
                    delivery of goods to customers thereby assuring great
                    service , thus helps you win customer loyalty .
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8">
                  <div className="text-4xl font-bold text-cyan-600 mb-3">3</div>
                  <h3 className="font-semibold text-lg text-cyan-600 mb-2">
                    Extensive cost reduction
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ware house application always results in minimal errors
                    which leads to reduced cost, better customer satisfaction.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-8">
                  <div className="text-4xl font-bold text-cyan-600 mb-3">4</div>
                  <h3 className="font-semibold text-lg text-cyan-600 mb-2">
                    Last but not the least boosts productivity
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Smart solution by default empowers your staff with an
                    extended automation facility which not only reduces
                    operational errors but also boosts their productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {service.slug === "supply-chain-management" && (
        <>
          <img
            src={"/images/supply-chain-management-bg.png"} // update path if needed
            className="object-contain"
            alt="supply-chain-management-software"
          />
          <div className="container mx-auto py-10">
            {/* INTRO */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src={"/images/supply-chain-illustration.jpg"} // update path
                  alt="Smart Solutions For Supply Chain Management"
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                  Smart Solutions For Supply Chain Management
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In today’s business world most of the industries are involved
                  in implementing smart IT solutions to stay ahead of the
                  competition. The manufacturing industry depends heavily on
                  interconnected supply chain model, and its is one of the main
                  pillars of the manufacturing model mandating optimum
                  regulation through software.
                </p>
              </div>
            </div>

            {/* OUR SERVICES */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Our Supply Chain Management Services
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Supply Chain Planning
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Using robust and user-friendly software, one can
                    systematically conduct the supply chain management operation
                    with almost zero error
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Procurement
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our Tech-savvy application helps companies to deal
                    transparently with vendors and partners through different
                    modes of communication.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Logistics
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A technically-sound logistics software helps the companies
                    to keep a close watch over the transportation and total
                    warehouse management
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                    Stakeholder Collaboration
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our high end solution helps you maintain a good rapport with
                    all the stake holders by providing real time assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* KEY BENEFITS */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Key Benefits ?
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-lg text-cyan-600">
                    Continuous reduction of Operational Cost
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-lg text-cyan-600">
                    Increased Revenue
                  </h3>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-lg text-cyan-600">
                    Better Forecasting & Analytics
                  </h3>
                </div>
              </div>
            </div>

            {/* WHY CHOOSE US */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Why Choose Us?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow border p-6">
                  <p className="text-gray-700">
                    Strong understanding of the trends in latest supply chain
                    management.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <p className="text-gray-700">
                    Primary focus is to identify the operational glitches and
                    fix them in timely manner
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <p className="text-gray-700">
                    Cost-effective supply chain management system
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6">
                  <p className="text-gray-700">
                    Expert team with all skills to accelerate product
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {service.slug === "transportation-management" && (
        <>
          <img
            src={"/images/transportation-management-bg.png"} // update path if needed
            className="object-contain"
            alt="solutions-for-transportation-management"
          />
          <div className="container mx-auto py-10">
            {/* INTRO */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src={"/images/transportation-illustration.jpg"} // update path
                  alt="Smart Transportation Management System"
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                  Smart Transportation Management System
                </h2>
                <p className="text-gray-700 font-medium mb-3">
                  Enhancing the Workflow of Transportation Management at
                  insanely Reduced Costs
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A transportation management system has an impact on supply
                  chains at every stage of the lifecycle. The system enables
                  deeper view of transportation planning which has direct impact
                  on customer satisfaction, which in-turn helps businesses
                  generate more sales.
                </p>
              </div>
            </div>

            {/* WHO WE SERVE */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Who we serve ?
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">Distributors</h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">Retailers</h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Manufacturing concern
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Ecommerce businesses
                  </h3>
                </div>
              </div>
            </div>

            {/* OUR RANGE OF SOLUTIONS */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Our Range of Transportation Management Solutions
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Highly effective Fleet Management System
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Enhanced version of Retail Distribution
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Efficient Warehouse Management System
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Hub Management
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Data Analytics
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Billing and Ratings
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Parcel Shipping
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-cyan-600">
                    Dock Door Scheduling and Yard Management
                  </h3>
                </div>
              </div>
            </div>

            {/* WHY CHOOSE US */}
            <div className="mb-10 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                With a multi-dimensional approach our solution is an
                all-inclusive system.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We provide valuable insights needed to optimize functions and
                resources on campus and ensure error free operations smart
                software application which acts as complete business solution
                for freight forwarders, 3PLs and many more
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

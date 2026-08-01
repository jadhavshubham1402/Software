import { useParams } from "react-router-dom";
import { travelList } from "../../data/softwareData";

export default function TravelDetails() {
  const { slug } = useParams();
  const service = travelList.find((item) => String(item.slug) === slug);

  if (!service) {
    return <div className="p-10">Service not found</div>;
  }

  return (
    <>
      {service.slug === "gds-integration-services" && (
        <>
        <div className="pt-24 md:pt-0 bg-slate-900">
          <img
            src={"/images/gds-integrations-bg.png"} // update path if needed
            className="object-contain"
            alt="gds-integrations"
          />
          </div>
          <div className="container mx-auto px-6 md:px-10 lg:px-20 py-10">
            {/* INTRO */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src={"/images/gds1.jpg"} // update path
                  alt="GDS Integration Service Providers"
                  className="rounded-xl shadow-md w-[80%] object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  We are experienced GDS Integration Service Providers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Global Distribution System Integration - facilitates highly
                  interactive and effective online booking tools. Travel Agents
                  or (OTAs) can now extend their online booking offerings
                  through fresh content with a better world wide reach. This
                  offers wide array of option to travelers and the over sales
                  process becomes very efficient and fast.
                </p>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Benefits?
                </h2>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Greater Audience Reach world wide</li>
                  <li>Ease of Connection</li>
                  <li>Better Administration</li>
                  <li>Ever improved ROI</li>
                  <li>
                    Comprehensive metric and insights leading to better
                    Analytics
                  </li>
                  <li>
                    LIVE Content and Updates facilitating improved user
                    experience
                  </li>
                  <li>Increasing Online and Direct Sales</li>
                </ul>
              </div>
              <div>
                <img
                  src={"/images/gds2.jpg"} // update path
                  alt="GDS Benefits"
                  className="rounded-xl shadow-md w-[80%] object-cover"
                />
              </div>
            </div>

            {/* OUR EXPERTISE IN GDS */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Our Expertise in GDS ?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Tour Management
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Car and Cab Bookings
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Airport Transfers
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Airline & Hotel Reservation
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Railway Ticketing
                  </h3>
                </div>
              </div>
            </div>

            {/* GDS INTEGRATION SERVICES */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                GDS Integration Services at Paxycop
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    GDS API Integration
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Amadeus GDS Integration
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    White-label GDS
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    XML/API Integration
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {service.slug === "smart-flight-booking" && (
        <>
         <div className="pt-24 md:pt-0 bg-slate-900">
          <img
            src={"/images/smart-flight-booking-bg.png"} // update path if needed
            className="object-contain"
            alt="smart-solutions-for-flight-booking"
          />
          </div>
          <div className="container mx-auto px-6 md:px-10 lg:px-20 py-10">
            {/* INTRO */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <img
                  src={"/images/gds1.jpg"} // update path
                  alt="Feature-Rich Flight Booking Software solution"
                  className="rounded-xl shadow-md w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Feature-Rich Flight Booking Software solution
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Travel services companies are always on the lookout for
                  efficient tech solutions to engage their clients from across
                  the world. With lot of innovation around the world business,
                  people are compelled travel and travel companies are banking
                  on this with suitable tech options to woo travelers and make
                  the most of it.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Ours is a fully coordinated flight booking software that can
                  handle the whole flight business and guarantee you that, all
                  the capacities are easily accessible.
                </p>
              </div>
            </div>

            {/* OUR SERVICES */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Services
                </h2>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Online Airline Reservation</li>
                  <li>Aircraft Reservation Management System</li>
                  <li>Custom Framework for Flight Reservation</li>
                  <li>Airline Ticketing Services</li>
                  <li>PSS Migration</li>
                </ul>
              </div>
              <div>
                <img
                  src={"/images/gds2.jpg"} // update path
                  alt="Our Services"
                  className="rounded-xl shadow-md w-full object-cover"
                />
              </div>
            </div>

            {/* BENEFITS */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Benefits ?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Traveler -friendly interface
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Fully Personalized approach
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Ease of cancellation
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Real time update
                  </h3>
                </div>
              </div>
            </div>

            {/* OUR MAIN MODULES */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Our Main modules in the booking solution
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Online Ticket booking system
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Visual appealing Calendar module for planning
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Various payment options
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    More Language and Currencies compatibility
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">LIVE Booking</h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Email integration and Auto mailing service
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Round the clock support
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <h3 className="font-semibold text-gray-800">
                    Online Support
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

import { useParams } from "react-router-dom";
import {
  FaBrain,
  FaEye,
  FaCogs,
  FaBoxes,
  FaFileMedical,
  FaMoneyBillWave,
  FaHeartbeat,
  FaNotesMedical,
  FaComments,
  FaDatabase,
  FaProjectDiagram,
} from "react-icons/fa";
import { healthCareList } from "../../data/softwareData";

const SolutionDetails = () => {
  const { slug } = useParams();

  const service = healthCareList.find((item) => String(item.slug) === slug);

  if (!service) {
    return <div className="p-10">Service not found</div>;
  }

  return (
    <>
      {service.slug === "hospital-management-system" && (
        <>
          <img
            src={"/images/hms-bg.png"} // update path if needed
            className="object-contain"
            alt="hospital-management-system"
          />
          <div className="container mx-auto py-10">
            {/* INTRO */}
            <div className="mb-16 max-w-4xl">
              <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                By now you might have already experienced the highs and lows of
                running hospitals despite the size of the facility
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Traditionally, Paper Based Work, Data Management Of Any
                  Department Be It Patients, Workforce Or Even Assets Can Be
                  Tiresome.
                </p>
                <p>
                  Best Coordination Yields Best Results And Setting Up Best
                  Practices Is Yet Another Aspect To Be Addressed.
                </p>
                <p>
                  This Business Of Running Hospital Scales Up Every Single Month
                  With Ever Increasing Patients Data, Which Calls For Efficient
                  Systems In Place.
                </p>
                <p>
                  Consolidation Of Patients Data, Scheduling Doctors, Asset
                  Management, Payments Are Tasks That Are Humongous In Nature
                  And Command Meticulous Planning.
                </p>
              </div>
            </div>

            {/* SUPREME SOLUTION */}
            <div className="mb-16 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                A Supreme Hospital Management Solution Is Something That You
                Need To Boost Your Efficiency
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Looking For Entire Aspects Of Hospital Management And Healthcare
                Operations Performing At Its Best? Then, Get Yourselves A
                Supremely Efficient Hospital Management Solution That Not Only
                Benefits You With Enhanced Level Of Operations But Also Reduced
                Costs.
              </p>
            </div>

            {/* 6 FEATURE CARDS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaBrain className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  OPD
                </h3>
                <p className="text-gray-600 text-sm">
                  Amidst the hectic schedules and managing patients, the task of
                  manual patient registration and physical file management will
                  simply burn your time out and hinders your operations. This
                  where our solution comes to your rescue by providing end to
                  end OPD management service.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaEye className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  IPD
                </h3>
                <p className="text-gray-600 text-sm">
                  IPD is one of the most key aspects of running hospital, tasks
                  such as admission of patients, Discharge, transfer .etc need
                  to backed with right tech solution so that patients will have
                  enhanced in-hospital experience.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaCogs className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Asset Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Managing hospital is not only about patients or doctors but
                  alongside managing assets is also equally important. Our HMS
                  includes Asset Management module which eases your movement and
                  tracking of various assets in the campus.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaBoxes className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Inventory Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Efficient management of medical supplies and inventory within
                  the campus yields higher operational efficiency and also is
                  one of the key challenges to be addressed in the ever
                  increasing workload. Our solution backs you up with real time
                  update on in-hand and out of stock materials so that you are
                  shielded from inventory problems
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaFileMedical className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Health Record
                </h3>
                <p className="text-gray-600 text-sm">
                  Efficient health record system determines the quality of
                  services. Our HMS powers your hospital with robust Health
                  record module which shoots out real time patient information
                  as and when needed.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaMoneyBillWave className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Finance & Accounts
                </h3>
                <p className="text-gray-600 text-sm">
                  End of the day bottom line matters! Our HMS is a robust
                  solution to manage daily sales numbers, purchases, internal
                  finance management and certainly fosters creative way to
                  handle financial matters.
                </p>
              </div>
            </div>

            {/* MORE TO GO */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                More to go !
              </h2>
              <p className="text-gray-700 mb-4 max-w-3xl">
                Managing Hospitals Today Goes Beyond Patients And Doctors,
                Emphasis Is More On Personalized Care To Patients While
                Following Regulatory Norms. The Other Modules Which Brings In
                More Flexibility Are As Below.
              </p>
              <ul className="space-y-2 text-gray-700 list-disc pl-5 max-w-xl">
                <li>Housekeeping management</li>
                <li>Canteen management</li>
                <li>Dietary management</li>
                <li>Waste management</li>
                <li>Laboratory management</li>
              </ul>
            </div>

            {/* WHY / AUTOMATE / Q&A */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaBrain className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Why our HMS ?
                </h3>
                <p className="text-gray-600 text-sm">
                  Accurate data, highly secured and available at Real-time on
                  your finger tips, plus wide array of features enhancing your
                  hospitals efficiency all at reasonable cost .
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaEye className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Automate
                </h3>
                <p className="text-gray-600 text-sm">
                  Automation drives excellence in patients care and management
                  of hospital venture. Our HMS facilitates automation which
                  helps you deliver bug free services and better your employees
                  performance at every level.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaCogs className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Q & A
                </h3>
                <p className="text-gray-600 text-sm">
                  Abiding regulatory norms for life saving and contagious
                  condition is a mandate for every hospital venture. Our HMS
                  plays a vital role in helping you comply.
                </p>
              </div>
            </div>

            {/* IMPROVING CLINICAL DECISIONS */}
            <div className="mb-12 max-w-4xl">
              <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                Improving clinical decisions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Managing Hospitals Today Goes Beyond Patients And Doctors,
                Emphasis Is More On Personalized Care To Patients While
                Following Regulatory Norms. The Other Modules Which Brings In
                More Flexibility Are As Below.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Medical Facility Large Or Small Revenue Management Plays A Vital
                Role In Managing Finances To Its Best. Our HMS Carries Excellent
                Features To Manage Salaries, Taxes, Insurance And Brings In
                Overall Financial Controls To Your Finger Tips Along With Future
                Predictions Of Revenue Flow.
              </p>
            </div>

            {/* MODERN CARE CENTRES */}
            <div className="mb-12 max-w-4xl">
              <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                Modern Care centres
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our HMS Enhances The Task Of Fixing Appointments, Connecting
                Patients To Doctors And Paramedics, Lab Reporting .Etc On One
                Common Platform
              </p>
            </div>

            {/* DATA SECURITY */}
            <div className="mb-10 max-w-4xl">
              <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                Data Security at its best
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We At paxykop Emphasize Heavily On Data Security. We Ensure All
                Medical And Financial Information Is Stored On Cloud Sever With
                Modern Security Standards In Place And Access To This
                Information Lies With Highly Experienced Administrators
              </p>
            </div>
          </div>
        </>
      )}
      {service.slug === "mobile-healthcare" && (
        <>
          <img
            src={"/images/mobile-healthcare-bg.png"} // update path if needed
            className="object-contain"
            alt="mobile-health-care"
          />
          <div className="container mx-auto py-10">
            {/* INTRO */}
            <div className="mb-12 max-w-4xl">
              <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                Enabling Healthcare Mobility
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Lately, Health Care Mobility Solution Is Playing A Vital Role In
                Empowering Hospitals / Healthcare Units And Patients To
                Successfully Indulge In So Called One Point Collaboration. Along
                With Facilitating Collaboration, Fast And Secure Exchange Of
                Medical Data Is Also In Place Which Is Within The Compliance
                Parameters Of Regulatory Bodies Like HIPAA. Quality Of Patient
                Care Through Mobile Based Applications Has Been A Major
                Breakthrough In The Medical World Offering Seamless
                Opportunities To Ensure Connectivity Between Doctors And
                Patients Which Certainly Promotes “Anywhere Care “Like Never
                Before And paxykop Mobile Apps Does Just That.
              </p>
            </div>

            {/* TWO SIDE SECTIONS */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div>
                <h3 className="text-xl font-semibold text-cyan-600 mb-3">
                  Mobile based health care
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dissemination Of Information Real Time Offering Treatment
                  Options And Diagnoses And Engage The Patient With App Based
                  Appointment Booking Is Something Our Apps Excel On And We
                  Continue To Upgrade Our Systems At Regular Intervals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-600 mb-3">
                  Clinical Productivity
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Equipping The Medical Team With Right Apps , Devices At The
                  Right Time To Execute The Task In Whatever Situation And
                  Ensure The Communication Is Streamlined As To Who Will Do
                  What, Thereby Enhancing The Clinicians Performance in Patient
                  Care.
                </p>
              </div>
            </div>

            {/* 9 FEATURE CARDS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaBrain className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Apps to schedule appointments
                </h3>
                <p className="text-gray-600 text-sm">
                  Irrespective of time and place our apps makes it possible for
                  patients to book , schedule and cancel appointments and this
                  helps you retain your patients by providing world class
                  experience
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaEye className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Virtual consultation (VC)
                </h3>
                <p className="text-gray-600 text-sm">
                  Our VC app facilitates connecting with patients and medical
                  practitioners across the globe seamlessly and offer treatments
                  irrespective of time and location. This proves treatment of
                  patients remotely is no more a barrier.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaCogs className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Auto Reminder Feature
                </h3>
                <p className="text-gray-600 text-sm">
                  Regular reminders and alerts to adhere to medication helps
                  patients to upkeep their medical status up and also periodic
                  prescription refill remainders sets them ensure they never run
                  out of medicine
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaHeartbeat className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  App to track fitness
                </h3>
                <p className="text-gray-600 text-sm">
                  There’s no fun if no goals are set in your fitness routine.
                  Our Fitness tracker and wearable systems empowers patients and
                  health enthusiasts to keep a tab on their fitness metrics and
                  also empower them to follow healthy diet and fitness routines
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaNotesMedical className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Clinical Assist
                </h3>
                <p className="text-gray-600 text-sm">
                  Our apps facilitate Real-time viewing of MRI and X-ray scans,
                  plus viewing medical results which has proven to be an
                  efficient way kick-start any treatment or enhance the ongoing
                  treatments
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaBoxes className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  App to Manage Medical Inventory
                </h3>
                <p className="text-gray-600 text-sm">
                  Our app has proven to be an excellent mobile tool to ensure
                  medical supplies are always stocked up and regular reminders
                  on soon-to-be-over has helped many inventory managers to plan
                  the supply in advance.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaComments className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Apps facilitate collaboration
                </h3>
                <p className="text-gray-600 text-sm">
                  Secured texting and message dissemination with in hospital
                  staff network is one of the key features of clinical Data
                  Mobilization and linking the same with management of company
                  owned and leased assets has always taken operations of the
                  unit a level high
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaDatabase className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Data Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Our app is well built to deliver key information about
                  patients health, vitals on the go through out the network
                  securely at a click of a button and is flexible enough to
                  customize as per the hospital needs.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaProjectDiagram className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-cyan-600 mb-3">
                  Efficient work flow
                </h3>
                <p className="text-gray-600 text-sm">
                  Our advanced mobile based applications promote enhanced
                  productivity amongst the staff and those at the managerial
                  level. Our databases architecture eliminates data redundancy
                  and ensures only the required information to be shared.
                </p>
              </div>
            </div>

            {/* HEALTHCARE TECHNOLOGY */}
            <div className="mb-10 max-w-4xl">
              <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                Healthcare Technology at its best
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our Team Scores High In Understanding The Ins And Outs Of Health
                Care Technologies Along With Industries Best Practises.
                Compliance With Regulatory Bodies Like HITECH And HIPPA Is
                Assured. We Imbibe Innovation At Every Level Of The Development
                And Ensure Our Solutions Meet The Expectations Of Both Internal
                And External Stake Holders
              </p>
            </div>
          </div>
        </>
      )}
{service.slug === "smart-hospitals" && (
<>

  <div className="container mx-auto py-10">

    <div className="mb-12 max-w-4xl">
      <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
        Smart Hospitals Safe Hospitals
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Effective Optimization Of Personnel, Materiel And Assets Within The
        Hospital Or Medical Establishments To Enhance The Operational
        Efficiency Has Always Been The Driving Force For paxykop’s HMS.
        Patients Management, Asset Tracking, Employee Tracking And Other Apps
        Like Supplier Management Have Proven To Be Beneficial For Patients And
        Employees At The Highest Level.
      </p>
    </div>


    {/* IMAGE AFTER INTRO */}
    <img
      src={"/images/smart-hospitals.jpg"}
      className="w-full object-contain mb-12"
      alt="smart hospitals"
    />


    {/* CARDS START */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="bg-white rounded-xl shadow border p-6 text-center">
        <FaHeartbeat className="text-4xl text-cyan-600 mx-auto mb-4"/>

        <h3 className="font-semibold text-lg text-cyan-600 mb-3">
          Employee Monitor or Tracking
        </h3>

        <p className="text-gray-600 text-sm">
          It becomes imperative to ensure every staff member is within reach
          and also monitor patient’s movement when on campus. Our app helps
          management track personnel activity.
        </p>
      </div>


      <div className="bg-white rounded-xl shadow border p-6 text-center">
        <FaBoxes className="text-4xl text-cyan-600 mx-auto mb-4"/>

        <h3 className="font-semibold text-lg text-cyan-600 mb-3">
          Staff Safety
        </h3>

        <p className="text-gray-600 text-sm">
          Our app enables management to track locations of people who might be
          in danger situations and offer required support.
        </p>
      </div>


      <div className="bg-white rounded-xl shadow border p-6 text-center">
        <FaDatabase className="text-4xl text-cyan-600 mx-auto mb-4"/>

        <h3 className="font-semibold text-lg text-cyan-600 mb-3">
          Safety of High Valued Assets
        </h3>

        <p className="text-gray-600 text-sm">
          Remote Asset Tracking helps hospitals protect expensive medical
          equipment and valuable assets.
        </p>
      </div>

    </div>
    {/* SMARTNESS WITH SECURITY & SAFETY */}

<div className="mb-12 max-w-4xl mt-16">

  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
    Smartness with Security & Safety
  </h2>

  <p className="text-gray-700 leading-relaxed">
    Irrespective Of Time And Place Our Apps Makes It Possible For Patients To
    Book, Schedule And Cancel Appointments And This Helps You Retain Your
    Patients By Providing World Class Experience.
  </p>

</div>
{/* A SOLUTION FOR EVERY ROOM */}

<div className="mb-12 max-w-4xl">

  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
    A solution for every room
  </h2>

  <p className="text-gray-700 leading-relaxed">
    Every Room In The Hospital Or Medical Establishment Carries Its Own
    Attributes Or Facilities. Our HMS Customises Solutions For Each Room And
    Ensures The Medical Staff Carry Out Their Day To Date Work Efficiently.
  </p>

</div>
{/* WHY PAXYKOP */}

<div className="mb-10 max-w-4xl">

  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
    Why paxykop ?
  </h2>

  <p className="text-gray-700 leading-relaxed">
    Keeping Things Under Control Is The Most Vital In Any Hospital And Our HMS
    Does Just That. Our Apps And Solutions Facilitate Excellent Control On
    Overall Management Of The Hospital. Our HMS Enhances The Patients Hospital
    Experience By Removing All The Hassles And Barriers Effectively. Our
    Solutions Help The Hospital Streamline The Operations To Their Highest
    Levels Which In Turn Help The Patients Sail Through Their Treatment
    Journey Peacefully.
  </p>

</div>
  </div>
</>
)}

    </>
  );
};

export default SolutionDetails;

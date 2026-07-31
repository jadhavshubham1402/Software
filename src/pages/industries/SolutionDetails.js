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
  FaUsers,
  FaUserInjured,
  FaChartLine,
  FaChartBar,
  FaUserMd,
  FaTasks,
  FaPills,
  FaUserClock,
  FaUserCheck,
  FaAmbulance,
  FaShieldAlt,
  FaHospital,
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
          <div className="container mx-auto px-8 lg:px-12 py-10">
            {/* INTRO */}
            <div className="mb-16 max-w-4xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
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
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Improving clinical decisions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Managing Hospitals Today Goes Beyond Patients And Doctors,
                Emphasis Is More On Personalized Care To Patients While
                Following Regulatory Norms. The Other Modules Which Brings In
                More Flexibility Are As Below.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Medical Facility Large Or Small Revenue Management Plays A Vital
                Role In Managing Finances To Its Best. Our HMS Carries Excellent
                Features To Manage Salaries, Taxes, Insurance And Brings In
                Overall Financial Controls To Your Finger Tips Along With Future
                Predictions Of Revenue Flow.
              </p>
            </div>

            {/* MODERN CARE CENTRES */}
            <div className="mb-12 max-w-4xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Modern Care centres
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Our HMS Enhances The Task Of Fixing Appointments, Connecting
                Patients To Doctors And Paramedics, Lab Reporting .Etc On One
                Common Platform
              </p>
            </div>

            {/* DATA SECURITY */}
            <div className="mb-10 max-w-4xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Data Security at its best
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
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
          <div className="container mx-auto px-6 lg:px-10 pt-16 pb-10">
            {/* INTRO */}
            <div className="mb-12 max-w-4xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Enabling Healthcare Mobility
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
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
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Mobile based health care
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Dissemination Of Information Real Time Offering Treatment
                  Options And Diagnoses And Engage The Patient With App Based
                  Appointment Booking Is Something Our Apps Excel On And We
                  Continue To Upgrade Our Systems At Regular Intervals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Clinical Productivity
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
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
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Healthcare Technology at its best
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
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
          <img
            src={"/images/smart-hospitals-bg.png"} // update path if needed
            className="object-contain"
            alt="smart-hospital"
          />
          <div className="container mx-auto px-6 lg:px-10 pt-16 pb-10">
            {/* INTRO */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Smart hospitals safe hospitals
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Effective Optimization Of Personnel, Materiel And Assets
                  Within The Hospital Or Medical Establishments To Enhance The
                  Operational Efficiency Has Always Been The Driving Force For
                  paxykop’s HMS Patients Management, Asset Tracking, Employee
                  Tracking And Other Apps Like Supplier Management Have Proven
                  To Be Beneficial For Patients And Employees At The Highest
                  Level Our HMS Promotes Real Time Finding Of People In Need Of
                  Medical Assistance And There By Facilitating Remote Treatment
                  Easy On The Go Navigation Tool Within Our HMS Has Made Many
                  Establishments Simplify Navigation For Their Patients And
                  Employees
                </p>
              </div>
              <div>
                <img
                  src={"/images/smart1.jpg"} // update path
                  alt="Smart hospitals safe hospitals"
                  className="rounded-xl shadow-md w-full object-cover"
                />
              </div>
            </div>

            {/* THREE FEATURE CARDS */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaEye className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Smartness with Security & Safety
                </h3>
                <p className="text-gray-600 text-sm">
                  Irrespective of time and place our apps makes it possible for
                  patients to book , schedule and cancel appointments and this
                  helps you retain your patients by providing world class
                  experience
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaUserCheck className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Employee Monitor or tracking
                </h3>
                <p className="text-gray-600 text-sm">
                  It becomes imperative to ensure every staff member is within
                  reach and also monitor patient’s movement when on campus. Our
                  app helps the management track personnel activity regardless
                  of the floor or any location within medical campus, thereby
                  ensuring patient treatment and operations are handled in
                  timely manner
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaShieldAlt className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Staff Safety
                </h3>
                <p className="text-gray-600 text-sm">
                  As an add-on to employee or patient tracking our app also
                  enables management to track locations of people who might be
                  in some sort of danger or life risking situations and offer
                  required support
                </p>
              </div>
            </div>

            {/* SAFETY OF HIGH VALUED ASSETS */}
            <div className="mb-16 max-w-4xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Safety of High valued Assets
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Protection Of Expensive Medical Equipments And Other Pricey Or
                Rare Assets Is Of Vital Importance To Any Hospital. Our Remote
                Asset Tracking Feature Or The App Helps To Have Regular Checks
                On Sites Which Host High Valued Assets.
              </p>
            </div>

            {/* A SOLUTION FOR EVERY ROOM */}
            <div className="mb-16 max-w-4xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                A solution for every room
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Every Room In The Hospital Or Medical Establishment Carries Its
                Own Attributes Or Facilities. Our HMS Customises Solutions For
                Each Room And Ensures The Medical Staff Carry Out Their Day To
                Date Work Efficiently.
              </p>
            </div>

            {/* WHY PAXYKOP */}
            <div className="mb-10 max-w-4xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Why paxykop ?
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Keeping Things Under Control Is The Most Vital In Any Hospital
                And Our HMS Does Just That. Our Apps And Solutions Facilitate
                Excellent Control On Overall Management Of The Hospital Our HMS
                Enhances The Patients Hospital Experience By Removing All The
                Hazels And Barriers Effectively Our Solutions Help The Hospital
                Streamline The Operations To Their Highest Levels Which In Turn
                Help The Patients Sail Through Their Treatment Journey
                Peacefully.
              </p>
            </div>
          </div>
        </>
      )}
      {service.slug === "patient-engagement" && (
        <>
          <img
            src={"/images/patient-engagement-bg.png"} // update path if needed
            className="object-contain"
            alt="mobile-health-care"
          />
          <div className="container mx-auto px-6 lg:px-10 pt-16 pb-10">
            {/* INTRO */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="mb-12 max-w-4xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Challenges of patient engagement
                </h2>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Providing The Best Medical Care Experience To Patients Is
                  Something That Every Hospital Looks For, Despite The Ongoing
                  Challenges. Insufficient And Manual Process Often Hinders
                  Hospitals To Provide Best Of The Medical Care Experiences To
                  Patients Lack Of Effective And Seamless Communication Tools
                  Which Can Connect And Patients And Doctors Will Always Be A
                  Lackluster Affair Inefficient Way Of Medical Data
                  Dissemination Which Often Cause Delays In Medical Treatment
                  And Other Operationalactivities .
                </p>
              </div>


              {/* IMAGE SPACE */}
              <div className="flex items-center justify-center">
                <img
                  src={"/images/patient1.jpg"}
                  className="w-[80%] object-contain mb-12"
                  alt="smart hospitals"
                />
              </div>
            </div>
            {/* CARDS */}
            <div className="bg-white p-6 text-center">
              <h3 className="font-semibold text-2xl text-gray-800 mb-1">
                Patient engagement apps and solutions
              </h3>
              <p className="text-gray-600 text-sm">
                Our HMS ensure enhanced patient experience from the time of
                admission to successful discharge post treatment.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Patient portal
                </h3>
                <p className="text-gray-600 text-sm">
                  Providing Customized Portal Access To Each Patient With Their
                  Own Access Credentials Promotes Efficient Integrated
                  Communication. Patients can access reports, diagnosis,
                  treatment options, book appointments and seek online
                  consultation.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Solutions for Digital engagement
                </h3>
                <p className="text-gray-600 text-sm">
                  A Robust And Seamless Online Presence Is A Must For Any
                  Medical Establishment Looking To Stay Ahead In The
                  Competition.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Wearable technology and Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Our Wearable Tech Systems Can Be Customized Based On The Need
                  And Help In Efficient Data Collection For Better Patient
                  Treatment.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Cohort Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Our Apps Group Patients Based On Health Risk And Other
                  Conditional Factors To Ensure Quality Outcomes In Patient
                  Care.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Mobilebased engagement solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Our Mobile Based Applications Engage Patients And Doctors
                  Providing Value Based Timely Care.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Support tools
                </h3>
                <p className="text-gray-600 text-sm">
                  Our Mobile Solutions Help Doctors Gain Access To Patient
                  Health Data And Monitor Patients Irrespective Of Location.
                </p>
              </div>
            </div>

            {/* BOTTOM CONTENT */}
            <div className="mt-16 max-w-4xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Enhanced Patient Care And Satisfaction
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                Our Apps And Solutions Help You Stay Networked With Your
                Patients Thereby You Can Offer Personalized Care And Enhance The
                Overall Patients Treatment Experience.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Seamless Communication
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                Our apps efficiently handle Dissemination of secured messages,
                automating scheduling of appointments and conducting surveys.
              </p>


              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Growth
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Connecting with target group of patients by strengthening your
                brand online yields great results and we facilitate and moderate
                your online existence.
              </p>
            </div>
          </div>
        </>
      )}
      {service.slug === "wearables" && (
        <>
          <img
            src={"/images/wearables-bg.png"} // update path if needed
            className="object-contain"
            alt="wearables"
          />
          <div className="container mx-auto px-6 lg:px-10 pt-16 pb-10">
            {/* INTRO */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Wearable health tech and Redefined care
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Innovation In The Medical World Is At Its Peak And Wearable
                  Health Devices Have Created A Major Difference In Empowering
                  Medical Establishments To Offer Highly Effective Care To Their
                  Patients. This Further Enhances Patient Doctor Connect
                  Facilitating Better Communication And Care.
                </p>
              </div>
              <div>
                <img
                  src={"/images/wearable1.jpg"} // update path
                  alt="Wearable health tech"
                  className="rounded-xl shadow-md w-[80%] object-cover"
                />
              </div>
            </div>


    {/* IMAGE SPACE */}
    <div className="w-full h-2 mb-12"></div>


    {/* CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">


      <div className="bg-white rounded-xl shadow border p-6 text-center">
        <h3 className="font-semibold text-lg text-cyan-600 mb-3">
          Wearables And Improved Health Outcomes
        </h3>

        <p className="text-gray-600 text-sm">
          Vital Information Provided By Wearable Devices Can Help Providers
          With Great Hold On Treatment And Its Outcomes.
        </p>
      </div>


      <div className="bg-white rounded-xl shadow border p-6 text-center">
        <h3 className="font-semibold text-lg text-cyan-600 mb-3">
          Monitoring fitness
        </h3>

        <p className="text-gray-600 text-sm">
          Find your way towards holistic fitness by using our wearable devices
          which helps you monitor your fitness metrics and enhance your health goals.
        </p>
      </div>


                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <FaEye className="text-4xl text-cyan-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Track your health
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Track your key health indicators by wearing our wearables.
                    And this is especially for serious patients who require
                    constant monitoring.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <FaHeartbeat className="text-4xl text-cyan-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Better Connectivity
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Health care providers can get easy access to patients health
                    data through wearables worn by the patients
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <FaUsers className="text-4xl text-cyan-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Community
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our wearables are integrated with all major social media
                    networks and this facilitates patients to create their own
                    groups to help each other towards healthier living.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow border p-6 text-center">
                  <FaUserInjured className="text-4xl text-cyan-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Patients
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Wearables more or less act as a personal nurse or caretaker
                    that has constant watch on the patient. This can help the
                    patient avoid prolonged stay in the hospital as his or her
                    health metrics are monitored by the wearable device.
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM SECTIONS */}
     {/* BOTTOM SECTIONS */}
<div className="grid md:grid-cols-2 gap-6 md:gap-10 mt-10 mb-10">
  <div>
    <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
      Clinicians
    </h3>
    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      Our Wearables Are So Well Equipped That One Can Easily Keep A
      Track Of Patient’s Health Without Being Ushered In To ICU
      Especially The Vulnerable Ones. Overall Human Error Is Fully
      Eliminated Thus Makes Way For Improved Care Fostering Great
      Health. Further, Access To Health Information Of Patients
      Helps Providers To Make Quick Decisions Accurately
    </p>
  </div>

  <div>
    <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
      Insurance
    </h3>
    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      Wearables Can Help The Patients To Reduce Costs If Getting
      Admitted Is Mandatory In Some Cases And Can Actually Reduce
      The Number Of Visits. Further, Access To Patients’ Data
      Through Wearables Also Helps Insurance Companies With Better
      Metrics And Insights To Manage Claims.
    </p>
  </div>

  <div>
    <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
      Benefits to Hospitals
    </h3>
    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      Equipped With Wearables, Helps Nurses And Other Medical
      Attendants Free From The Job Of Logging Vitals At Regular
      Intervals And They Can Divert All Their Attention On Better
      Patient Care. It Also Help The Management Track Individual
      Employee Or Staffs Performance, There By Improved Level Of
      Overall Service To Patients
    </p>
  </div>

  <div>
    <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
      Why paxykop ?
    </h3>
    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      Our Experts Carry More Than 25 Years Of Experience In Health
      Care Tech And This Huge Knowledge Base And Experience Has Lead
      Us To Be The Best In The Industry. Enhancing The Patients Care
      Is Of Prime Importance To Us And Hence Our Collaborative
      Efforts Are Driven By Holistic Approach That Emphasizes
      Effective Collaboration.
    </p>
  </div>
</div>
        </>
      )}
      {service.slug === "healthcare-dashboard" && (
        <>
          <img
            src={"/images/healthcare-dashboard-bg.png"} // update path if needed
            className="object-contain"
            alt="healthcare-dashboard"
          />
          <div className="container mx-auto px-6 lg:px-10 pt-16 pb-10">
            {/* INTRO */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Healthcare Dashboards
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Our Efficient Dashboards Helps Providers To Stay On Top Of The
                Game By Deriving Great Insights From The Accumulated Healthcare
                Data And Provide Improved Health Care Services To Patients,
                Bettering Service Quality Along With Reduced Cost Of Operations.
                Our Dashboards Offer Real-Time Information With Which Valuable
                Metrics And Insights Can Be Obtained And Shared.
              </p>
            </div>

            {/* FEATURE CARDS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaBrain className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Statistics
                </h3>
                <p className="text-gray-600 text-sm">
                  We help providers keep close track of patient surveys and
                  generate meaningful statistics which can help the management
                  understand trends and make decisions that facilitates higher
                  productivity and enhanced operation management.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaEye className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Quality patient care
                </h3>
                <p className="text-gray-600 text-sm">
                  Data driven insights helps you understand patients better and
                  our information rich dashboards achieve that for you. Its
                  intuitive, rich with quality metrics and offers clear insight
                  on your response to patients.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaChartLine className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  ROI
                </h3>
                <p className="text-gray-600 text-sm">
                  Let your workforce deliver your expectations by sharing
                  critical information that our dashboards generate for you.
                  When everyone is clear of what to deliver, better the ROI.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaChartBar className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Business intelligence solutions helps providers make the best
                  use of massive amount of data. Our dashboards empower the
                  management to get both small and big metrics such as the bed
                  occupancy levels and help view the big picture for improved
                  decision making.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaUserMd className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Dash board for private practice
                </h3>
                <p className="text-gray-600 text-sm">
                  Our dashboards help optimize the art of resource allocation
                  and deliver better standards of quality care. It comes
                  inclusive of KPIs and ways to enhance profitability and
                  patient engagement.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaHeartbeat className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Health Dashboard
                </h3>
                <p className="text-gray-600 text-sm">
                  Our patient health dashboard offers clear metrics on patients
                  health individually and enables the hospital to plan and
                  provide more custom treatments which again has direct impact
                  on patients over all treatment experience at the hospital.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaTasks className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Productivity Tracker
                </h3>
                <p className="text-gray-600 text-sm">
                  It’s the employees or workers performance that drives the
                  quality service to patients in any hospital or medical
                  establishment. With productivity tracker dashboard one can
                  have a systematic view of data from various other sources
                  which becomes vital to measure workforce performance against
                  the set targets. This helps identify areas of improvements and
                  also eliminate redundant activities.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaPills className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Dashboards for Pharma sales
                </h3>
                <p className="text-gray-600 text-sm">
                  Sales dashboard helps assess month on month sales performance
                  of your team. To be more specific the number of sales calls,
                  rep visits etc all can be managed effortlessly deriving
                  financial performance periodically.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaUserClock className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Physician Allocation
                </h3>
                <p className="text-gray-600 text-sm">
                  This is one of the important modules of our dashboards which
                  enable you to deploy or allocate physicians for treatments or
                  consultation. Our dashboard helps you analyze data to schedule
                  appointments, avoid delayed treatments and other adhoc
                  appointment setups which don’t go in tandem with hospital
                  management plans.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Reports and charts made simple
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                paxykop’s Intuitive And Visually Great Healthcare Dashboards
                Ensure Every Aspect Of Your Hospital Data Is Updated With All
                Key Insight In Place. Dashboard Is Equipped With All
                Functionalities Required To Gain Insights And Generate Reports
                Which Can Be Understood Be Everyone Responsible To Deliver
                Quality Work.
              </p>
            </div>
          </div>
        </>
      )}
      {service.slug === "internet-of-things" && (
        <>
          <img
            src={"/images/internet-of-things-bg.png"} // update path if needed
            className="object-contain"
            alt="internet-of-things"
          />
          <div className="container mx-auto px-6 lg:px-10 pt-16 pb-10">
            {/* INTRO */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Internet of things
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Internet Plays A Vital Role In Enhancing Operations And
                  Quality Patient Service In Health Care Industry. Software
                  Connects Healthcare And Medical Equipments Delivering Service
                  To Patients Like Never Before And This Continues To Improve
                  Every Day With New Ideas. At paxykop We Make The Best Use Of
                  Internet To Provide Best Of Services To Our Patients.
                </p>
              </div>
              <div>
                <img
                  src={"/images/iot1.jpg"} // update path
                  alt="Internet of things"
                  className="rounded-xl shadow-md w-[80%] object-cover"
                />
              </div>
            </div>

            {/* FEATURE CARDS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaBrain className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Patient Care
                </h3>
                <p className="text-gray-600 text-sm">
                  Realtime monitoring of patients and their condition using
                  internet solutions. Our solutions help you track body
                  temperature, BP, heart rate etc which contributes to high
                  quality medical care.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaEye className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Monitoring health remotely
                </h3>
                <p className="text-gray-600 text-sm">
                  Our internet solutions are well equipped to track and monitor
                  patients health regardless of area and time. Error free data
                  collection and updates about patient health metrics helps
                  doctor provide better care and consultation.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaHospital className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Healthcare infrastructure
                </h3>
                <p className="text-gray-600 text-sm">
                  Our internet applications are built to collect and store
                  entire hospital data on highly secured cloud servers, with
                  easy access to extract right information as and when situation
                  demands.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaDatabase className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Data collection and metrics
                </h3>
                <p className="text-gray-600 text-sm">
                  Data collection has been automated to generate valuable
                  insights and metrics to increase efficiency in diagnosis,
                  patient monitoring and more.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaUserCheck className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Staff monitoring
                </h3>
                <p className="text-gray-600 text-sm">
                  Our internet solutions boost security at the hospital and
                  monitor staff movement by integrating process in to software
                  applications thereby enhancing overall operations.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow border p-6 text-center">
                <FaAmbulance className="text-4xl text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Emergency response
                </h3>
                <p className="text-gray-600 text-sm">
                  All emergencies demand quick response and our HMS does just
                  that. With connected infrastructure Hospital management can
                  pro-actively respond to emergency situations and cases
                </p>
              </div>
            </div>

            {/* MAIN HIGHLIGHTS */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Main highlights of Our Internet Solutions
                </h2>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>LIVE location tracking</li>
                  <li>Patient Information</li>
                  <li>Seamless Communication</li>
                  <li>Asset Tracking and Monitoring the Movements</li>
                  <li>Record Management</li>
                </ul>
              </div>
              <div>
                <img
                  src={"/images/iot2.jpg"} // update path
                  alt="Main highlights of Our Internet Solutions"
                  className="rounded-xl shadow-md w-[80%] object-cover"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SolutionDetails;

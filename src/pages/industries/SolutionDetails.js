import { useParams } from "react-router-dom";
import hmsVideo from "../../assets/hmsVideo.mp4";
import hmsImage2 from "../../assets/hmsImage2.png";
import mobileImage1 from "../../assets/mobileImage1.jpg";
import mobileImage2 from "../../assets/mobileImage2.jpg";
import mobileTechImage from "../../assets/mobileTechImage.jpg";

const SolutionDetails = () => {
  const { solution } = useParams();
  console.log(solution);
  const content = {
  hms: {
    title: "Hospital Management System (HMS)",
    
  introHeading:
    "By now you might have already experienced the highs and lows of running hospitals despite the size of the facility",

  description: "Traditionally, Paper Based Work, Data Management Of Any Department Be It Patients, Workforce Or Even Assets Can Be Tiresome.Best Coordination Yields Best Results And Setting Up Best Practices Is Yet Another Aspect To Be Addressed.This Business Of Running Hospital Scales Up Every Single Month With Ever Increasing Patients Data, Which Calls For Efficient Systems In Place.Consolidation Of Patients Data, Scheduling Doctors, Asset Management, Payments Are Tasks That Are Humongous In Nature And Command Meticulous Planning.",

    sections: [
  {
  heading: "A Supreme Hospital Management Solution Is Something That You Need To Boost Your Efficiency",
  text: "Looking For Entire Aspects Of Hospital Management And Healthcare Operations Performing At Its Best? Then, Get Yourselves A Supremely Efficient Hospital Management Solution That Not Only Benefits You With Enhanced Level Of Operations But Also Reduced Costs."
  },
      {
        heading: "OPD",
        text: "Amidst the hectic schedules and managing patients, the task of manual patient registration and physical file management will simply burn your time out and hinders your operations. This where our solution comes to your rescue by providing end to end OPD management service",
      },
      {
        heading: "IPD",
        text: "IPD is one of the most key aspects of running hospital, tasks such as admission of patients, Discharge, transfer ..etc need to backed with right tech solution so that patients will have enhanced in-hospital experience.",
      },
      {
        heading: "Asset Management",
        text: "Managing hospital is not only about patients or doctors but alongside managing assets is also equally important. Our HMS includes Asset Management module which eases your movement and tracking of various assets in the campus.",
      },
      {
        heading: "Inventory Management",
        text: "Efficient management of medical supplies and inventory within the campus yields higher operational efficiency and also is one of the key challenges to be addressed in the ever increasing workload. Our solution backs you up with real time update on in-hand and out of stock materials so that you are shielded from inventory problems",
      },
      {
        heading: "Health Records",
        text: "Efficient health record system determines the quality of services. Our HMS powers your hospital with robust Health record module which shoots out real time patient information as and when needed.",
      },
      {
        heading: "Finance & Accounts",
        text: "End of the day bottom line matters! Our HMS is a robust solution to manage daily sales numbers, purchases, internal finance management and certainly fosters creative way to handle financial matters.",
      },
    {
      heading: "More to go !",
      text: `Managing Hospitals Today Goes Beyond Patients And Doctors, Emphasis Is More On Personalized Care To Patients While Following Regulatory Norms. The Other Modules Which Brings In More Flexibility Are As Below.
        Housekeeping management
        Canteen management
        Dietary management
        Waste management
        Laboratory management`
    },
{
  heading: "Why our HMS ?",
  text: "Accurate data, highly secured and available at Real-time on your finger tips, plus wide array of features enhancing your hospitals efficiency all at reasonable cost.",
},
{
  heading: "Automate",
  text: "Automation drives excellence in patients care and management of hospital venture. Our HMS facilitates automation which helps you deliver bug free services and better your employees performance at every level.",
},
{
  heading: "Q & A",
  text: "Abiding regulatory norms for life saving and contagious condition is a mandate for every hospital venture. Our HMS plays a vital role in helping you comply.",
},
{
  heading: "Improving Clinical Decisions",
  text: "Managing Hospitals Today Goes Beyond Patients And Doctors, Emphasis Is More On Personalized Care To Patients While Following Regulatory Norms. The Other Modules Which Brings In More Flexibility Are As Below. Medical Facility Large Or Small Revenue Management Plays A Vital Role In Managing Finances To Its Best. Our HMS Carries Excellent Features To Manage Salaries, Taxes, Insurance And Brings In Overall Financial Controls To Your Finger Tips Along With Future Predictions Of Revenue Flow."
},
{
  heading: "Modern Care centres",
  text: "Our HMS Enhances The Task Of Fixing Appointments, Connecting Patients To Doctors And Paramedics, Lab Reporting Etc On One Common Platform."
},
{
  heading: "Data Security at its best",
  text: "We At Paxykop Emphasize Heavily On Data Security. We Ensure All Medical And Financial Information Is Stored On Cloud Server With Modern Security Standards In Place And Access To This Information Lies With Highly Experienced Administrators."
},

    ],
  },

  "mobile-healthcare": {
    title: "Mobile Health Care",

    introHeading: "Enabling Healthcare Mobility",

    description:
      "Lately, Health Care Mobility Solution Is Playing A Vital Role In Empowering Hospitals / Healthcare Units And Patients To Successfully Indulge In So Called One Point Collaboration. Along With Facilitating Collaboration, Fast And Secure Exchange Of Medical Data Is Also In Place Which Is Within The Compliance Parameters Of Regulatory Bodies Like HIPAA. Quality Of Patient Care Through Mobile Based Applications Has Been A Major Breakthrough In The Medical World Offering Seamless Opportunities To Ensure Connectivity Between Doctors And Patients Which Certainly Promotes “Anywhere Care” Like Never Before And Paxykop Mobile Apps Does Just That.",

    sections: [
{
  heading: "Mobile based health care",
  text: "Dissemination Of Information Real Time Offering Treatment Options And Diagnoses And Engage The Patient With App Based Appointment Booking Is Something Our Apps Excel On And We Continue To Upgrade Our Systems At Regular Intervals.",
},
{
  heading: "Clinical Productivity",
  text: "Equipping The Medical Team With Right Apps, Devices At The Right Time To Execute The Task In Whatever Situation And Ensure The Communication Is Streamlined As To Who Will Do What, Thereby Enhancing The Clinicians Performance In Patient Care.",
},
{
  heading: "Apps to schedule appointments",
  text: "Irrespective Of Time And Place Our Apps Makes It Possible For Patients To Book, Schedule And Cancel Appointments And This Helps You Retain Your Patients By Providing World Class Experience.",
},
{
  heading: "Virtual consultation (VC)",
  text: "Our VC App Facilitates Connecting With Patients And Medical Practitioners Across The Globe Seamlessly And Offer Treatments Irrespective Of Time And Location. This Proves Treatment Of Patients Remotely Is No More A Barrier.",
},
{
  heading: "Auto Reminder Feature",
  text: "Regular Reminders And Alerts To Adhere To Medication Helps Patients To Upkeep Their Medical Status And Also Periodic Prescription Refill Reminders Ensure They Never Run Out Of Medicine.",
},
{
  heading: "App to track fitness",
  text: "There’s No Fun If No Goals Are Set In Your Fitness Routine. Our Fitness Tracker And Wearable Systems Empower Patients And Health Enthusiasts To Keep A Tab On Their Fitness Metrics And Follow Healthy Diet And Fitness Routines.",
},
{
  heading: "Clinical Assist",
  text: "Our Apps Facilitate Real-Time Viewing Of MRI And X-Ray Scans, Plus Viewing Medical Results Which Has Proven To Be An Efficient Way To Kick-Start Any Treatment Or Enhance Ongoing Treatments.",
},
{
  heading: "App to Manage Medical Inventory",
  text: "Our App Has Proven To Be An Excellent Mobile Tool To Ensure Medical Supplies Are Always Stocked Up And Regular Reminders On Soon-To-Be-Over Supplies Help Inventory Managers Plan In Advance.",
},
{
  heading: "Apps facilitate collaboration",
  text: "Secured Texting And Message Dissemination Within Hospital Staff Network Is One Of The Key Features Of Clinical Data Mobilization. Linking The Same With Management Of Company Owned And Leased Assets Has Always Taken Operations To The Next Level.",
},
{
  heading: "Data Management",
  text: "Our App Is Well Built To Deliver Key Information About Patients' Health And Vitals Securely Across The Network At The Click Of A Button. It Is Flexible Enough To Be Customized As Per Hospital Needs.",
},
{
  heading: "Efficient work flow",
  text: "Our Advanced Mobile Based Applications Promote Enhanced Productivity Among Staff And Management. Our Database Architecture Eliminates Data Redundancy And Ensures Only The Required Information Is Shared.",
},
{
  heading: "Healthcare Technology at its best",
  text: "Our Team Scores High In Understanding The Ins And Outs Of Health Care Technologies Along With Industry Best Practices. Compliance With Regulatory Bodies Like HITECH And HIPAA Is Assured. We Imbibe Innovation At Every Level Of Development And Ensure Our Solutions Meet The Expectations Of Both Internal And External Stakeholders.",
},
    ],
  },
};

const data = content[solution];
if (!data) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1428] text-white">
      <h1 className="text-4xl font-bold">Solution Not Found</h1>
    </div>
  );
}

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="container mx-auto px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-center text-cyan-600 mb-6">
  {data.title}
</h1>

<h2 className="text-2xl md:text-3xl font-bold text-center text-cyan-600 max-w-4xl mx-auto leading-snug mb-6">
  {data?.introHeading}
</h2>

<p className="text-lg text-gray-700 leading-8 text-justify max-w-5xl mx-auto mb-12">
  {data?.description}
</p>
{solution === "mobile-healthcare" && (
  <div className="grid md:grid-cols-2 gap-6 my-10">
    <img
      src={mobileImage1}
      alt="Mobile Healthcare"
      className="w-full rounded-xl"
    />
    <img
      src={mobileImage2}
      alt="Healthcare Mobility"
      className="w-full rounded-xl"
    />
  </div>
)}

{solution === "hms" && (
  <video controls className="w-full rounded-xl my-10">
    <source src={hmsVideo} type="video/mp4" />
  </video>
)}

<div className="space-y-8">
  {data?.sections.map((item, index) => (
    
    <div
      key={index}
      className="bg-white rounded-xl shadow border p-8 mb-8"
    >
      <h2 className="text-2xl font-semibold text-cyan-600 text-center mb-4">
        {item.heading}
      </h2>

    <p className="text-gray-700 leading-8 text-justify">
  {item.text}
</p>

{item.heading === "More to go !" && (
  <img
    src={hmsImage2}
    alt="More to go"
    className="w-full rounded-xl my-10"
  />
)}

{item.heading === "Healthcare Technology at its best" && (
  <img
    src={mobileTechImage}
    alt="Healthcare Technology"
    className="w-full rounded-xl my-8"
  />
)}
    </div>
  ))}
</div>

  

  
  
</div>

      </div>
  
  );
};

export default SolutionDetails;
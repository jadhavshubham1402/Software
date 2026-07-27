import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const SolutionDetails = () => {
  const { solution } = useParams();
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
};
const data = content[solution];

  return (
    <div className="bg-[#0A1428] min-h-screen text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
    <h1 className="text-5xl font-bold mb-8">
  {data?.title}
</h1>

<h2 className="text-3xl font-bold text-white mb-6">
  {data?.introHeading}
</h2>

<p className="text-xl text-white/80 mb-10">
  {data?.description}
</p>
<div className="w-full h-[350px] my-10"></div>

<div className="space-y-8">
  {data?.sections.map((item, index) => (
    
    <div
      key={index}
      className="bg-white/5 border border-white/10 rounded-2xl p-6"
    >
      <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
        {item.heading}
      </h2>

      <p className="text-white/80">
        {item.text}
      </p>
      {item.heading === "More to go !" && (
        <div className="w-full h-[350px] my-10"></div>
      )}
    </div>
  ))}
</div>

  

  
  
</div>

      </div>
  
  );
};

export default SolutionDetails;
import React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

  company: Yup.string(),

  state: Yup.string()
    .min(2, "State must be at least 2 characters")
    .required("State is required"),

  district: Yup.string()
    .min(2, "District must be at least 2 characters")
    .required("District is required"),

  city: Yup.string()
    .min(2, "City must be at least 2 characters")
    .required("City is required"),

  pincode: Yup.string()
    .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
    .required("Pincode is required"),

  subject: Yup.string()
    .min(2, "Subject must be at least 2 characters")
    .required("Subject is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Please tell us how we can help you"),
});

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("Contact form submitted:", values);
    try {
      // Backend schema does not contain district,
      // so only required backend fields are sent.
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
        city: values.city,
        state: values.state,
        pincode: values.pincode,
        subject: values.subject,
        message: values.message,
      };

      const response = await axios.post(
        "http://localhost:5000/api/contact-us",
        payload
      );
      console.log("API Response:", response.data);

      if (response.data?.success) {
        toast.success(
          "Thank you! Your message has been received. We'll get back to you soon.",
          {
            position: "top-right",
            autoClose: 4000,
          }
        );

        resetForm();
      }
    } catch (error) {
      console.error("Form submission error:", error);

      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
        {
          position: "top-right",
          autoClose: 4000,
        }
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A1428] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/contact1.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1428]/90 via-[#0A1428]/80 to-[#0A1428]" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-bold mb-6 leading-tight"
          >
            Let's Build a{" "}
            <span className="text-cyan-400">Healthier Future</span> Together
          </motion.h1>

          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions or a project in mind? Our team is ready to help you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Send Us a Message
              </h2>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-4">
                    {/* Name + Email */}
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-white/70 mb-2">
                          Full Name
                        </label>

                        <Field
                          type="text"
                          name="name"
                          className="w-full bg-white/10 border border-white/20 focus:border-cyan-400 rounded-2xl px-6 py-2 outline-none transition"
                          placeholder="Enter your full name"
                        />

                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-white/70 mb-2">
                          Email Address
                        </label>

                        <Field
                          type="email"
                          name="email"
                          className="w-full bg-white/10 border border-white/20 focus:border-cyan-400 rounded-2xl px-6 py-2 outline-none transition"
                          placeholder="your@email.com"
                        />

                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-white/70 mb-2">
                          Phone
                        </label>

                        <Field
                          type="tel"
                          name="phone"
                          className="w-full bg-white/10 border border-white/20 focus:border-cyan-400 rounded-2xl px-6 py-2 outline-none transition"
                          placeholder="9986800000"
                        />

                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-white/70 mb-2">
                          Company
                        </label>

                        <Field
                          type="text"
                          name="company"
                          className="w-full bg-white/10 border border-white/20 focus:border-cyan-400 rounded-2xl px-6 py-2 outline-none transition"
                          placeholder="Enter your company"
                        />

                        <ErrorMessage
                          name="company"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>
                    </div>

                    {/* State + City */}
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-white/70 mb-2">
                          State
                        </label>

                        <Field
                          type="text"
                          name="state"
                          className="w-full bg-white/10 border border-white/20 focus:border-cyan-400 rounded-2xl px-6 py-2 outline-none transition"
                          placeholder="Karnataka"
                        />

                        <ErrorMessage
                          name="state"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-white/70 mb-2">
                          City
                        </label>

                        <Field
                          type="text"
                          name="city"
                          className="w-full bg-white/10 border border-white/20 focus:border-cyan-400 rounded-2xl px-6 py-2 outline-none transition"
                          placeholder="Belagavi"
                        />

                        <ErrorMessage
                          name="city"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>
                    </div>

                    {/* District + Pincode */}
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-white/70 mb-2">
                          District
                        </label>

                        <Field
                          type="text"
                          name="district"
                          className="w-full bg-white/10 border border-white/20 focus:border-cyan-400 rounded-2xl px-6 py-2 outline-none transition"
                          placeholder="Belagavi"
                        />

                        <ErrorMessage
                          name="district"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-white/70 mb-2">
                          Pincode
                        </label>

                        <Field
                          type="text"
                          name="pincode"
                          maxLength={6}
                          className="w-full bg-white/10 border border-white/20 focus:border-cyan-400 rounded-2xl px-6 py-2 outline-none transition"
                          placeholder="590001"
                        />

                        <ErrorMessage
                          name="pincode"
                          component="div"
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm text-white/70 mb-2">
                        Subject
                      </label>

                      <Field
                        type="text"
                        name="subject"
                        className="w-full bg-white/10 border border-white/20 focus:border-cyan-400 rounded-2xl px-6 py-2 outline-none transition"
                        placeholder="Enter your subject"
                      />

                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm text-white/70 mb-2">
                        Message / Interest
                      </label>

                      <Field
                        as="textarea"
                        name="message"
                        rows={3}
                        className="w-full bg-white/10 border border-white/20 focus:border-cyan-400 rounded-3xl px-6 py-5 outline-none resize-y transition"
                        placeholder="Tell us about your project, inquiry, or how we can help..."
                      />

                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:brightness-110 py-3 rounded-2xl font-semibold text-lg transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? "Submitting..." : "Send Message"}
                    </motion.button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-12 pt-8">
            <div>
              <h3 className="text-3xl font-semibold mb-10">Get in Touch</h3>

              <div className="space-y-10">
                <div className="flex gap-5">
                  <div className="text-cyan-400 mt-1">
                    <FaWhatsapp size={28} />
                  </div>

                  <div>
                    <p className="text-white/60 text-sm">WhatsApp / Call</p>

                    <a
                      href="https://wa.me/6589182836"
                      className="text-xl hover:text-cyan-400 transition"
                    >
                      +65 89182836
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="text-cyan-400 mt-1">
                    <FaEnvelope size={28} />
                  </div>

                  <div>
                    <p className="text-white/60 text-sm">Email Us</p>

                    <a
                      href="mailto:hello@lifeonplus.com"
                      className="text-xl hover:text-cyan-400 transition"
                    >
                      support@paxykop.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="text-cyan-400 mt-1">
                    <FaPhoneAlt size={28} />
                  </div>

                  <div>
                    <p className="text-white/60 text-sm">Phone</p>

                    <a
                      href="tel:+919988680000"
                      className="text-xl hover:text-cyan-400 transition"
                    >
                      +65 89182836
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-3xl font-semibold mb-8">Our Office</h3>

              <div className="space-y-10">
                {[
                  {
                    city: "Singapore (Head Office)",
                    address:
                      "L-39, MBFC, 10 Marina Blvd, Singapore - 018 983",
                  },
                ].map((office, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="text-cyan-400 mt-1">
                      <FaMapMarkerAlt size={28} />
                    </div>

                    <div>
                      <p className="font-semibold text-white mb-1">
                        {office.city}
                      </p>

                      <p className="text-white/70 text-[15px] whitespace-pre-line">
                        {office.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

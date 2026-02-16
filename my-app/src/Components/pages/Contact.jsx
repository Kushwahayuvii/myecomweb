import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#ffba00]">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-400">
          We'd love to hear from you. Send us a message!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 pb-20">

        {/* Contact Info */}
        <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-[#ffba00]">
            Get In Touch
          </h2>

          <div className="space-y-6 text-gray-400">
            <p>
              📍 <span className="text-white">Address:</span><br />
              123 Main Street, New Delhi, India
            </p>

            <p>
              📞 <span className="text-white">Phone:</span><br />
              +91 98765 43210
            </p>

            <p>
              📧 <span className="text-white">Email:</span><br />
              support@myshop.com
            </p>

            <p>
              🕒 <span className="text-white">Working Hours:</span><br />
              Mon - Sat : 9:00 AM - 8:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1e293b] p-8 rounded-xl shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-semibold text-[#ffba00]">
            Send Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:border-[#ffba00] outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:border-[#ffba00] outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:border-[#ffba00] outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#ffba00] text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}

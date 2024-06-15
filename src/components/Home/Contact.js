import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_3xj26gp",  // Replace with your actual service ID
        "template_ewmw8dv", // Replace with your actual template ID
        {
          from_name: form.name,
          to_name: "Abhishek Verma",
          from_email: form.email,
          to_email: "abhishek.2125cs1113@kiet.edu",
          message: form.message,
        },
        "04VfsTbzNjrcfMI8x" // Replace with your actual user ID
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-2xl mb-6 mx-auto p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white text-center mb-4">Contact Us</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <label className="block">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <label className="block">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email Id"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <label className="block">
          <textarea
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-900 focus:outline-none focus:bg-pink-600"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;

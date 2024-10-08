import React, { useState } from "react";
import MultiSelectDropdown from "./Dropdown";
import { Dropdown } from 'semantic-ui-react';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [requiredFields, setRequiredFields] = useState([]);

  function encode(data) {
    return Object.keys(data).map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key]).join("&")
    );
  }

  function handleBlur(field) {
    if (field === "name" && name === "") {
      setRequiredFields(["name"]);
    } else if (field === "email" && email === "") {
      setRequiredFields(["email"]);
    } else if (field === "message" && message === "") {
      setRequiredFields(["message"]);
    } else {
      setRequiredFields([]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setRequiredFields(["name", "email", "message"]);
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative ring-gray-400 ring-2">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Richmond,+VA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/3 px-8">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Location
              </h2>
              <p className="mt-1">
                Richmond, VA <br />
              </p>
            </div>
            <div className="lg:w-1/2 px-10 pr-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Email
              </h2>
              <a href="mailto:emk2473@gmail.com" className="text-lime-400 leading-relaxed">
                emk2473@gmail.com
              </a>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            <div className="relative mb-4">
              <label htmlFor="skills" className="leading-7 text-sm text-gray-400">
                About
              </label>
              <MultiSelectDropdown />
            </div>
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ring-gray-400 ring-2 ${requiredFields.includes("name") ? 'border-red-500' : ''}`}
              onBlur={() => handleBlur("name")}
            />
            {requiredFields.includes("name") && (
              <span className="text-red-500 text-sm mt-1">Name is required</span>
            )}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ring-gray-400 ring-2 ${requiredFields.includes("email") ? 'border-red-500' : ''}`}
              onBlur={() => handleBlur("email")}
            />
            {requiredFields.includes("email") && (
              <span className="text-red-500 text-sm mt-1">Email is required</span>
            )}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ring-gray-400 ring-2 ${requiredFields.includes("message") ? 'border-red-500' : ''}`}
              onBlur={() => handleBlur("message")}
            />
            {requiredFields.includes("message") && (
              <span className="text-red-500 text-sm mt-1">Message is required</span>
            )}
          </div>
          <button
            type="submit"
            className="text-lime-500 bg-gray-800 border-0 py-2 px-6 ring-gray-400 ring-2 focus:outline-none hover:bg-lime-500 hover:text-white rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

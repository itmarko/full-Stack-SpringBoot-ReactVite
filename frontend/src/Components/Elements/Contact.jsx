import { useState } from "react";
import aboutBgImage from "../../assets/bg-image.jpg";
import Card from "../../Widget/Card/Card";
const ContactUsPage = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  // Toggle the feedback form visibility
  const toggleFeedback = () => {
    setShowFeedback((prev) => !prev);
  };

  return (
    <>
      <div
        className="bg-gradient-to-r 
    from-blue-600 to-purple-600"
      >
        <div
          className="bg-cover
         bg-center
         h-96 flex 
         items-center 
         justify-center"
          style={{
            backgroundImage: `url(${aboutBgImage})`,
          }}
        >
          <h1
            className="text-5xl 
        font-bold 
        text-white 
        bg-black 
        bg-opacity-50 
        p-6 
        rounded-lg"
          >
            Contact Us
          </h1>
        </div>
        <Card />
      </div>
      <div
        className="bg-gradient-to-r 
    from-blue-600 to-purple-600 min-h-screen py-16 px-8 lg:px-24"
      >
        {/* <h1 className="text-5xl font-bold text-center text-gray-100 mb-12">
          Contact Us
        </h1> */}

        {/* Contact Form and Map Section */}
        <div className="lg:flex lg:space-x-8 ">
          {/* Contact Form Section */}
          <div className="lg:w-1/2 h-f">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
              Get in Touch
            </h2>
            <form className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r
                   from-blue-600 to-purple-600 
                   text-white font-bold py-3 px-8 rounded-full hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Map Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 ">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
              Our Location
            </h2>
            <div className="h-64 lg:h-full rounded-2xl  overflow-hidden">
              <iframe
                title="Library Location"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450939!2d144.95373631592127!3d-37.81720974202162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d3b5c0a7c41!2sLibrary!5e0!3m2!1sen!2sus!4v1633136536434!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-16 text-center">
          <button
            onClick={toggleFeedback}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-600 transition duration-300"
          >
            {showFeedback ? "Hide Feedback Form" : "Show Feedback Form"}
          </button>
        </div>

        {showFeedback && (
          <div className="mt-8 bg-white p-8 rounded-lg shadow-md lg:w-2/3 mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Feedback</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name-feedback"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name-feedback"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email-feedback"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email-feedback"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message-feedback"
                >
                  Message
                </label>
                <textarea
                  id="message-feedback"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Feedback"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-600 transition duration-300"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactUsPage;

import React from "react";
import useTextReveal from "../hooks/useTextReveal";
import useFadeIn from "../hooks/useFadeIn";

const Contact = () => {
  const textRef = useTextReveal();
  const fadeRef = useFadeIn();

  return (
    <div ref={fadeRef} className="w-full min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT - FORM */}
        <div>
          <h1 ref={textRef} className="text-5xl mt-13 font-[font2]  mb-4">
            GET IN TOUCH
          </h1>

          <p className="fade-item text-gray-500 mb-10 font-[font3] font-bold">
            Our friendly team would love to hear from you.
          </p>

          {/* FORM */}
          <form className="fade-item font-[font3] font-bold space-y-6">

            {/* NAME ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm  text-gray-600">Name</label>
                <input
                  type="text"
                  placeholder="Type first name"
                  className="w-full mt-2 p-4 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Last Name</label>
                <input
                  type="text"
                  placeholder="Type last name"
                  className="w-full mt-2 p-4 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Type email"
                  className="w-full mt-2 p-4 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <input
                  type="text"
                  placeholder="Type phone number"
                  className="w-full mt-2 p-4 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-gray-600">
                Any other message?
              </label>
              <textarea
                rows="5"
                placeholder="Type your message"
                className="w-full mt-2 p-4 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              ></textarea>
            </div>

            {/* CHECKBOX */}
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              <p className="text-sm text-gray-600">
                You agree to our{" "}
                <span className="underline cursor-pointer">
                  privacy policy
                </span>
              </p>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition"
            >
              SUBMIT FORM
            </button>
          </form>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="fade-item w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
          <img
            src="https://framerusercontent.com/images/nY4aFrgKJsreO7asCF4KKKLcfA.png?scale-down-to=1024&width=1250&height=1478"
            alt="office"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
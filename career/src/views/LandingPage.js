import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-50 to-green-100 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://online.vu.edu.au/sites/default/files/styles/blogfeature_large/public/field/image/Easiest_countries_to_start_a_business_main_image.jpeg?itok=n1muu1rC')",
          zIndex: -1,
          opacity: 0.3
        }}
      ></div>

      {/* Centered content */}
      <section className="flex items-center justify-center min-h-screen text-center relative z-10 px-4 py-10 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
            FIND THE JOB YOU DESERVE
          </h1>
          <div className="mt-10">
            <button
              type="button"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;

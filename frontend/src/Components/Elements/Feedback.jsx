import { useState } from "react";


const FeedbackSlider = () => {
  const feedbacks = [
    {
      text: "The library's digital resources have been a game-changer for my research. I can access everything I need from home! ",
      author: 'Alex Johnson',
      role: 'Research Scholar',
    },
    {
      text: 'I love the community events! They offer a great way to connect with fellow book lovers and learn new things.',
      author: 'Emily Davis',
      role: 'Community Member',
    },
    {
      text: "The children's section is fantastic! My kids are always excited to visit and pick out new books to read.",
      author: 'Sarah Lee',
      role: 'Parent',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-16 px-8 lg:px-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">
        What Our Members Say
      </h2>
      <div className="relative lg:w-2/3 mx-auto">
        {/* Feedback Slide */}
        <div className="p-8 rounded-lg shadow-2xl text-center transition-transform transform-gpu duration-500">
          <p className="text-lg mb-4">{feedbacks[currentIndex].text}</p>
          <h3 className="text-2xl font-bold">{feedbacks[currentIndex].author}</h3>
          <p className="text-sm font-light">{feedbacks[currentIndex].role}</p>
        </div>
        {/* Navigation */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between">
          <button
            className="p-2 bg-gray-700 text-blue-100 rounded-full hover:bg-gray-500 transition-colors duration-200"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="p-2 bg-gray-700 text-blue-100 rounded-full hover:bg-gray-500 transition-colors duration-200"
            onClick={nextSlide}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSlider;

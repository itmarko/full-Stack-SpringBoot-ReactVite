
import aboutBgImage from "../../assets/bg-image.jpg";
const AboutUs = () => {
  return (
    <div
      className="min-h-screen 
    bg-gradient-to-r 
    from-blue-600 to-purple-600"
    >
      {/* Hero Section */}
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
          About Us
        </h1>
      </div>

      {/* Company Description */}
      <div
        className="py-16 px-8 
      lg:px-24 
      bg-gradient-to-r 
      from-blue-600 to-purple-600 
      text-gray-100"
      >
        <h2
          className="text-4xl 
        font-bold 
        text-center 
        mb-8"
        >
          Who We Are
        </h2>
        <p
          className="text-lg 
        leading-relaxed 
        text-center 
        mb-8"
        >
          We are a community-focused library dedicated to fostering a love of
          reading and lifelong learning. Our mission is to provide access to a
          wide range of resources, including books, digital media, and community
          programs, to enrich the lives of our members. Whether you’re a student
          seeking research materials or a parent looking for educational
          activities for your children, our library is here to support you.
        </p>
      </div>

      {/* Our Mission Section */}
      <div
        className="py-16 px-8 
      lg:px-24 
      bg-gradient-to-r 
      from-blue-500 to-purple-500 
      text-gray-100"
      >
        <h2
          className="text-4xl 
        font-bold 
        text-center 
        mb-8"
        >
          Our Mission
        </h2>
        <p
          className="text-lg
         leading-relaxed 
         text-center"
        >
          Our mission is to create a welcoming environment where everyone can
          explore, learn, and grow. We strive to provide resources and programs
          that empower our community to discover new ideas, develop new skills,
          and engage with the world around them. We believe in the power of
          knowledge and the importance of accessibility for all.
        </p>
      </div>

      {/* Our Vision Section */}
      <div
        className="py-16 
      px-8
       lg:px-24
        bg-gradient-to-r
         from-blue-600 to-purple-600
          text-gray-100"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Our Vision</h2>
        <p className="text-lg leading-relaxed text-center">
          Our vision is to be a cornerstone of the community, fostering a love
          of reading and learning in people of all ages. We aim to be a place
          where ideas are shared, cultures are celebrated, and connections are
          made. By expanding our services and embracing new technologies, we
          hope to reach even more members of our community and make a lasting
          impact on their lives.
        </p>
      </div>

      {/* Our History Section */}
      <div className="py-16 px-8 lg:px-24 bg-gradient-to-r from-blue-600 to-purple-600 text-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Our History</h2>
        <p className="text-lg leading-relaxed text-center mb-8">
          Established in 1990, our library has grown from a small community
          space with a few shelves of books to a vibrant hub of knowledge and
          learning. Over the years, we have expanded our collection, embraced
          digital resources, and launched numerous programs that benefit our
          diverse community. Our history is a testament to the dedication of our
          staff and the support of our members.
        </p>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Our Library History"
            className="mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Community Impact Section */}
      <div className="py-16 px-8 lg:px-24 bg-gradient-to-r from-blue-600 to-purple-600 text-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">
          Community Impact
        </h2>
        <p className="text-lg leading-relaxed text-center mb-8">
          Our library plays a crucial role in the community, providing essential
          services and resources that improve the quality of life for our
          members. From literacy programs and job training workshops to cultural
          events and youth outreach, we are committed to making a positive
          difference. We are proud to be a place where everyone is welcome and
          where everyone can find something to inspire them.
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className=" text-2xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600">Community Events</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-blue-600">10,000+</h3>
            <p className="text-gray-600">Books Donated</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-blue-600">15,000+</h3>
            <p className="text-gray-600">Active Members</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-8 lg:px-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">
          What Our Members Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center text-gray-800">
            <p className="text-lg mb-4">
              "The library has been a lifeline for me during my studies. The
              resources are vast, and the staff is always willing to help."
            </p>
            <h3 className="text-xl font-bold">Alex Johnson</h3>
            <p className="text-gray-600">Research Scholar</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center text-gray-800">
            <p className="text-lg mb-4">
              "I love bringing my kids to the library. The children's programs
              are fantastic, and they always leave with a stack of books."
            </p>
            <h3 className="text-xl font-bold">Sarah Lee</h3>
            <p className="text-gray-600">Parent</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center text-gray-800">
            <p className="text-lg mb-4">
              "The library's digital collection has been a game-changer for me.
              I can access books and resources from anywhere, anytime."
            </p>
            <h3 className="text-xl font-bold">Emily White</h3>
            <p className="text-gray-600">Digital Resources Manager</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div
        id="team"
        className="py-16 px-8 lg:px-24 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Chief Librarian</p>
            <p className="text-gray-500 mt-4">
              John has over 20 years of experience in library management and is
              passionate about promoting literacy in the community.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Community Outreach Coordinator</p>
            <p className="text-gray-500 mt-4">
              Jane works closely with local schools and organizations to develop
              programs that bring the library’s resources to bring the library’s
              resources to underserved communities. Her work has significantly
              expanded our outreach efforts and helped us connect with a broader
              audience.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800">Michael Brown</h3>
            <p className="text-gray-600">Digital Resources Manager</p>
            <p className="text-gray-500 mt-4">
              Michael is responsible for maintaining and expanding our digital
              collections, ensuring that our members have access to the latest
              e-books, audiobooks, and online resources.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 px-8 lg:px-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
        <p className="text-lg leading-relaxed mb-8">
          Become a member today and enjoy access to our vast collection of
          books, digital resources, and community programs. Whether you're
          looking to explore new topics, meet new people, or simply find a quiet
          place to read, our library has something for everyone.
        </p>
        <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default AboutUs;

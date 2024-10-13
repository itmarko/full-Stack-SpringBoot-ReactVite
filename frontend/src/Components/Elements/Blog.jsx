
const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600">
     

      {/* Blog Section */}
      <div className="py-16 px-8 lg:px-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <h2 className="text-4xl font-bold text-center text-gray-50 mb-8">
          Latest From Our Blog
        </h2>
        <div className="space-y-8 lg:space-y-0 lg:space-x-8 lg:flex lg:justify-center">
          {/* Blog Post 1 */}
          <div className="bg-gradient-to-r from-blue-800 to-purple-800 p-8 rounded-lg shadow-md lg:w-1/3">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blog post 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-50 mb-2">
              The Importance of Reading in the Digital Age
            </h3>
            <p className="text-gray-50">
              In a world where information is just a click away, reading remains a crucial skill for critical thinking and creativity...
            </p>
          </div>
          {/* Blog Post 2 */}
          <div className="bg-gradient-to-r from-blue-800 to-purple-800 p-8 rounded-lg shadow-md lg:w-1/3">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blog post 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-50 mb-2">
              Top 10 Books for Lifelong Learners
            </h3>
            <p className="text-gray-50">
              These ten books offer valuable insights and knowledge for anyone looking to continue their education outside of the classroom...
            </p>
          </div>
          {/* Blog Post 3 */}
          <div className="bg-gradient-to-r from-blue-800 to-purple-800 p-8 rounded-lg shadow-md lg:w-1/3">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blog post 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-50 mb-2">
              How  are Adapting to Modern Technology
            </h3>
            <p className="text-gray-50">
              From e-books to digital archives,  are evolving to meet the needs of a tech-savvy generation...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

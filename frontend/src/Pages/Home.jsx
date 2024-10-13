import heroimg from "../assets/hero.jpg";
import homesecr from "../assets/bg-bak.jpg";
import aboutimg from "../assets/about-1.jpg";
import Feedback from "../Components/Elements/Feedback";
import Blog from "../Components/Elements/Blog";
export default function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-auto bg-gradient-to-r from-blue-600 to-purple-600">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
          <div className="bg-gradient-to-r from-blue-600 via-teal-400 to-purple-600 min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-16">
            {/* Left Side Content */}
            <div className="text-center lg:text-left lg:w-1/2 space-y-8">
              <h1 className="text-white text-5xl lg:text-6xl font-extrabold leading-tight">
                Unlock a World of Knowledge
              </h1>
              <p className="text-gray-200 text-lg lg:text-xl">
                Dive into our extensive collection of books, digital resources,
                and community programs. Explore, learn, and grow with us.
              </p>
              <button className="bg-gradient-to-br from-pink-600 to-orange-600 text-slate-100   hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                Start Exploring
              </button>
            </div>
            {/* Right Side Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
              <div className="relative">
                <div
                  className=" absolute
           inset-0 
           bg-gradient-to-r from-pink-500 to-rose-500
            rounded blur-3xl"
                ></div>
                <img
                  src={heroimg}
                  alt="Library illustration"
                  className="relative w-full max-w-lg rounded-lg shadow-4xl"
                />
              </div>
            </div>
          </div>
        </aside>

        <div className=" sm:mt-20 sm:px-36 ">
          <div className="relative">
            <div
              className="absolute
           inset-0 
           bg-gradient-to-r from-pink-500 to-rose-500
            rounded-2xl blur-2xl"
            ></div>
            <img
              className="relative sm:w-full w-full h-[300px] sm:h-[700px] rounded-2xl shadow-2xl"
              src={homesecr}
              alt="image2"
            />
          </div>
        </div>

        <h1 className="text-center text-gray-50 text-2xl sm:text-5xl mt-16 font-medium">
          Discover Your Path
        </h1>
        <p className="text-center py-10">Explore, Learn, Grow with</p>
        {/* <div className="items-center text grid sm:grid-col-2 md:grid-cols-[30%_auto] gap-4 border-2 border-red-100">
        <div className="border border-gray-600">
          <div className=" items-center h-96 w-96 text-center">
            <img src={aboutimg} alt="" />
          </div>
        </div>
        <div className="border border-gray-600">
          <div className="text-center">
            For the introduction section, here's a sample content:
          </div>
        </div>
      </div> */}
        <section className=" py-20">
          <div className="container mx-auto p-4 flex flex-wrap">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div className="h-full relative">
                <div
                  className="absolute 
              inset-0 
              rounded
              bg-gradient-to-r from-pink-500 to-fuchsia-600
              blur-2xl
              "
                ></div>
                <img
                  src={aboutimg}
                  alt="img"
                  className="relative w-full h-full rounded-xl object-cover object-center shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4 text-gray-50">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-lg mb-8">
                The [name] is a vibrant and inclusive learning hub that provides
                access to a vast collection of resources, services, and
                opportunities for personal and academic growth.
              </p>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-lg mb-4">
                    To empower minds, enrich lives, and foster a culture of
                    curiosity, creativity, and collaboration.
                  </p>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                  <h3 className="text-2xl font-bold mb-2">Our Values</h3>
                  <ul className="list-none mb-4">
                    <li className="mb-2">Inclusivity and diversity</li>
                    <li className="mb-2">Lifelong learning and growth</li>
                    <li className="mb-2">Collaboration and community</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                  <h3 className="text-2xl font-bold mb-2">Our History</h3>
                  <p className="text-lg mb-4">
                    The [name] was established in [Year] with a vision to
                    provide access to knowledge and education for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* feedback section */}
        <Feedback />
        {/* Blog section */}
        <Blog />
      </div>
    </>
  );
}

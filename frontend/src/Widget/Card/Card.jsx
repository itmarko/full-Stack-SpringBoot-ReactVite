export default function Card() {
    return (
      <div className="flex justify-center bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="h-52 sm:ml-36 float-left -mt-16 w-full md:w-96 flex-row sm:flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl">
          <div className="p-6">
            <h5 className="text-center mr-4 mb-2 block font-sans text-xl font-semibold text-blue-gray-900 antialiased">
              Reach Us At
            </h5>
            <ul>
              <li className="mt-2">
                <span>
                  <i className="fa fa-phone mr-2"></i>
                </span>
                +91-999999999
              </li>
              <li className="mt-2">
                <span>
                  <i className="fa fa-envelope mr-2"></i>
                </span>
                <span>feedback@itmarko.com</span>
              </li>
              <li className="mt-2">
                <span>
                  <i className="fa-solid fa-map-pin mr-2"></i>
                </span>
                A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Raipur, Chhattisgarh
              </li>
            </ul>
          </div>
        </div>
        <div className="h-52 ml-48 float-left -mt-16 w-full md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold text-blue-gray-900 antialiased">
              Branding & Collaboration
            </h5>
            <i className="fa fa-handshake fa-2xl"></i>
            <div className="text-left mt-4">
              <span>
                <i className="fa fa-envelope mr-2"></i>
              </span>
              <span>branding@itmarko.com</span>
            </div>
            <div className="mt-2 text-left">
              <span>
                <i className="fa-solid fa-map-pin mr-2"></i>
              </span>
              A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Raipur, Chhattisgarh
            </div>
          </div>
        </div>
      </div>
    );
  }
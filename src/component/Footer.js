import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex flex-col items-center py-16 bg-green-800 gap-6 text-pink-50">
        <div>Stay informed and healthy</div>
        <div>
          If you want to receive monthly updates from us just pop your email in
          the box.
        </div>
        <div>
          <form className="flex items-center gap-3 ">
            <input
              type="email"
              placeholder="Enter your Email"
              className="placeholder-green-800 focus:ring-green-800 focus:border-transparent"
            />
            <div className="border-2 bg-menu p-3 text-pink-50">Subscribe</div>
          </form>
        </div>
        <div className="flex align-middle gap-4 flex-wrap">
          {" "}
          <div className="other_details flex items-center gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <div className="info">
              <p className="font-bold text-base">Our Address</p>
              <p className="text-xs">Atlanta, GA, United States</p>
            </div>
          </div>
          <div className="other_details flex items-center gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                />
              </svg>
            </div>
            <div className="info">
              <p className="font-bold text-base">+1 800 787 7000</p>
              <p className="text-xs">doctor@medicalclinic.com</p>
            </div>
          </div>
          <div className="other_details flex items-center gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="info">
              <p className="font-bold text-base">Office Hours</p>
              <p className="text-xs">Monday to Friday 8:00am - 17:00pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

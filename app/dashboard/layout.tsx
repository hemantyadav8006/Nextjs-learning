import React from "react";

interface DashboardLayoutPageProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<DashboardLayoutPageProps> = (props) => {
  return (
    <>
      <nav className="w-full bg-gray-800 text-white p-4 justify-between flex items-center pl-10">
        <h3 className="logo text-3xl font-bold font-mono">LOGO</h3>
        <ul className="flex items-center justify-evenly w-1/2">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <button className="border-2 p-2 border-gray-600 rounded-lg text-[14px] hover:bg-gray-700 hover:border-white">
              Login/Signin
            </button>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <div className="min-h-[100vh] w-[15vw] bg-gray-700">
          <ul className="flex flex-col p-10 h-full">
            <li className="pt-5 font-bold text-xl font-sans drop-shadow-lg">
              Dashboard
            </li>
            <li className="pt-5 font-bold text-xl font-sans drop-shadow-lg">
              Credits
            </li>
            <li className="pt-5 font-bold text-xl font-sans drop-shadow-lg">
              Profile
            </li>
            <li className="pt-5 font-bold text-xl font-sans drop-shadow-lg">
              Settings
            </li>
          </ul>
        </div>
        <div className="min-h-[100vh] text-white p-4">{props.children}</div>
      </div>
    </>
  );
};

export default LayoutPage;

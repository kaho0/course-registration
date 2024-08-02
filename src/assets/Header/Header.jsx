import React from "react";
import Profile from "../../propile.jpg";

const Header = () => {
  return (
    <div className="flex justify-between m-2 p-2 border-b-2">
      <h1 className="text-3xl font-bold text-center">Course Registration</h1>
      <img className="w-12 h-12 rounded-full" src={Profile} alt="" />
    </div>
  );
};

export default Header;

import React from "react";

const Link = ({ route }) => {
  return (
    <li className="flex px-4 lg:mr-10 hover:text-black hover:bg-amber-400 hover:font-semibold">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;

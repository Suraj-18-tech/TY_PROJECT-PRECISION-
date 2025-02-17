import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "/" },
    { 
      name: "About", 
      icon: <FaInfoCircle />, 
      link: "/about",
      dropdownItems: [
        { title: "Our Story", image: "data:image/jpeg;base64,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" },
        { title: "Team", image: "/images/team.jpg" },
      ],
    },
    { 
      name: "Services", 
      icon: <FaServicestack />, 
      link: "/services",
      dropdownItems: [
        { title: "Consulting", image: "data:image/jpeg;base64,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" },
        { title: "Support", image: "/images/support.jpg" },
      ],
    },
    { name: "Contact", icon: <FaEnvelope />, link: "/contact" },
  ];

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full bg-black text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-extrabold tracking-wide">CarHub</h1>
        <nav>
          <ul className="flex space-x-8 text-lg">
            {menuItems.map((item, index) => (
              <li 
                key={index} 
                className="relative group cursor-pointer hover:text-red-500 transition"
                onMouseEnter={() => setDropdown(item.dropdownItems ? item.name : null)}
                onMouseLeave={() => setDropdown(null)}
              >
                <div className="flex items-center gap-2">
                  {item.icon} {item.name}
                </div>
                {item.dropdownItems && dropdown === item.name && (
                  <div className="absolute left-0 top-full w-screen bg-black text-white p-6 shadow-xl flex">
                    {item.dropdownItems.map((subItem, subIndex) => (
                      <div key={subIndex} className="w-1/4 p-2">
                        <img src={subItem.image} alt={subItem.title} className="w-full h-40 object-cover rounded-lg" />
                        <p className="text-center mt-2">{subItem.title}</p>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavLinkMe } from "../Libes/Constans";
import { ProductContext } from "../Libes/Context";
function NavBar() {
  const { data } = useContext(ProductContext);
  // console.log('navbar',data)
  // console.log(NavLink)
  return (
    <div className="flex justify-between bg-amber-100 h-22">
      <button
        className="btn m-4"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        سبد خرید ({Object.keys(data?.cardList)?.length})
      </button>
      <div className="flex justify-start items-center mr-7 ">
        {NavLinkMe.map((item, index) => {
          // console.log(item)
          return (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "mx-2 text-2xl font-bold text-black"
                  : "mx-2 text-2xl text-gray-700"
              }
              key={index}
            >
              {item.title}
            </NavLink>
          );
          //    <div className="mx-2 my-2 text-black font-bold" key={index}>{item.title}</div>
        })}
      </div>
    </div>
  );
}

export default NavBar;

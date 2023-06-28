import React, { useState } from "react";
import "../App.css";
import { categories } from "../Utils/Constant";
import { AiFillHome, AiFillLike } from "react-icons/ai";
import { MdOutlineAppRegistration, MdOutlineLogin, MdPlaylistAdd, MdSubscriptions } from "react-icons/md";
import { BsFillStopwatchFill } from "react-icons/bs";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";





function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="d-flex align-items-center gap-2 mb-2 p-2 rounded sidebar-item">
          <AiFillHome className="fs-5" />
          <p className="mb-0">Home Page</p>
        </div>
        <Link className="text-dark" to={"/subscriptions"}>
          <div className="d-flex align-items-center gap-2 mb-2 p-2 rounded sidebar-item">
            <MdSubscriptions className="fs-5" />
            <p className="mb-0">Subscriptions</p>
          </div>
        </Link>
        <hr />

        <Link className="text-dark" to={"/playlist"}>
          <div className="d-flex align-items-center gap-2 mb-2 p-2 rounded sidebar-item">
            <MdPlaylistAdd className="fs-5" />
            <p className="mb-0">PlayList</p>
          </div>
        </Link>

        <Link className="text-dark" to={"/watch later"}>
        <div className="d-flex align-items-center gap-2 mb-2 p-2 rounded sidebar-item">
          <BsFillStopwatchFill className="fs-5" />
          <p className="mb-0">Watch later</p>
        </div>
        </Link>

        <Link className="text-dark" to={"/videos i liked"}> 
        <div className="d-flex align-items-center gap-2 mb-2 p-2 rounded sidebar-item">
          <AiFillLike className="fs-5" />
          <p className="mb-0">Videos I liked</p>
        </div>
        </Link>
        <hr />

        
        <Link className="text-dark" to={"/login"}>
          <div className="d-flex align-items-center gap-2 mb-2 p-2 rounded sidebar-item">
            <MdOutlineLogin className="fs-5" />
            <p className="mb-0">Login</p>
          </div>
        </Link>
        
        <hr />
        
        <Link className="text-dark" to={"/register"}>
          <div className="d-flex align-items-center gap-2 mb-2 p-2 rounded sidebar-item">
            <MdOutlineAppRegistration className="fs-5" />
            <p className="mb-0">Register</p>
          </div>
        </Link>
        <hr />
        

        <ul>
          <h6>Channels</h6>
          {categories?.map((category) => {
            return (
              <>
                <div className="d-flex align-items-center gap-2 mb-3 p-2 rounded sidebar-item">
                  <Avatar
                    sx={{ width: 24, height: 24 }}
                    alt="Remy Sharp"
                    src="https://images.pexels.com/photos/130880/pexels-photo-130880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <li>{category.name}</li>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

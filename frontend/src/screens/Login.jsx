import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function Index() {
  return (
    <>
      <div className="main__warper">
        <div className="main__warper__container">
          <div className="main__container__left">
            <NavLink
              to="/login"
              className="main__container__left__signin__button"
            >
              login
            </NavLink>
            <NavLink
              to="/login/signup"
              className="main__container__left__signin__button"
            >
              Sign Up
            </NavLink>
          </div>
          <div className="main__container__right">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

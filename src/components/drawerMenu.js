import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const DrawerMenu = () => {
  const authState = useSelector((state) => state?.auth);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button className="bg-transparent border-0" onClick={toggleDrawer}>
        <div className="">
          <span className="tllogo fs-3">Mo</span>
          <span className="trlogo fs-3">joy</span>
        </div>
      </Button>
      <Drawer
        className="drawer"
        placement="right"
        closable={false}
        onClose={toggleDrawer}
        open={isOpen}
        width="60%" // Set the width to 50% of the screen
      >
        <div className="menu-links-2 pt-5">
          <div className="d-flex flex-column align-items-left gap-15 px-3 border-bottom pb-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="product">Our Store</NavLink>
            <NavLink to="hp">HP</NavLink>
            <NavLink to="asus">Asus</NavLink>
            <NavLink to="lenovo">Lenovo</NavLink>
            <NavLink to="dell">Dell</NavLink>
            <NavLink to="apple">Apple</NavLink>
            <NavLink to="blog">Blogs</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
            <NavLink to="about">About Us</NavLink>
          </div>

          {authState?.user === null ? (
            <div className="d-flex flex-column align-items-left  gap-15 px-3">
              <NavLink to={authState?.user === null ? "/login" : ""}>
                Log In
              </NavLink>
            </div>
          ) : (
            <div className="d-flex flex-column align-items-left gap-15 px-3">
              <div className="">
                <span className=" d-inline-block">
                  {authState?.user?.firstname +
                    "  " +
                    authState?.user?.lastname}
                </span>
              </div>
              <NavLink to="/orders">My Orders</NavLink>
              <NavLink to="/profile">My Profile</NavLink>
              <NavLink onClick={handleLogout}>Log Out</NavLink>
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;

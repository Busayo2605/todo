import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ setshow, show }) => {
  return (
    <div className={show ? "side-bar active" : "side-bar"}>
      <AiOutlineClose
        onClick={() => setshow(false)}
        style={{
          padding: "20px",
          fontSize: "20px",
          fontWeight: "bolder",
          cursor: "pointer",
        }}
      />
      <div className="side-bar-links">
        <Link onClick={() => setshow(false)} to="/">
          Home
        </Link>
        <Link onClick={() => setshow(false)} to="completed">
          Completed
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

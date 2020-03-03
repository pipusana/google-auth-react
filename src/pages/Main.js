import { Link } from "react-router-dom";
import React from "react";

function Admin(props) {
  return (
    <div>
      Admin Page
      <Link to="/info"> go to Info page </Link>
    </div>
  );
}

export default Admin;
import { Link } from "react-router-dom";
import React from "react";

function Info(props) {
  return (
    <div>
      Info Page
       <Link to="/main"> go to main page </Link>
    </div>
  );
}

export default Info;
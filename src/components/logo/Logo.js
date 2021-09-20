import React from "react";
import { Link } from "react-router-dom";

const Logo = ({mod=""}) => {
  return (
    <Link to="/" className={"logo " + mod}>
      podolskijspace
    </Link>
  )
}

export default Logo;
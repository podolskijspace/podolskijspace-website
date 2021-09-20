import React from "react";

const Logo = ({mod=""}) => {
  return (
    <a className={"logo active " + mod}>
      podolskijspace
    </a>
  )
}

export default Logo;
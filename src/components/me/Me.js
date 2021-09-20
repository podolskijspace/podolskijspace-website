import React from "react";
import avatar from "../../images/me.jpg"

const Me = ({mod = ""}) => {
  return (
    <div className={"me " + mod}>
      <div>
        <p className="me__name">
          Гончаров Никита
        </p>
        <div className="me__text">
          Frontend developer
        </div>
      </div>
      <div className="me__img">
        <img src={avatar} alt="me" />
      </div>
    </div>
  )
}

export default Me;
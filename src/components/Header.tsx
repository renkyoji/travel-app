import React from "react";
import logo from "../assets/img/logo.png";
import userImg from "../assets/img/log.png";

interface IHeader {
  inputVisible: boolean
}

const Header = ({ inputVisible }: IHeader) => {


  return (
    <div className="container header">
      <header className={"header"}>
        <div className="logo-block">
          <img className={"logo"} src={logo} alt="logo"/>
        </div>
        <div className="side-block">
          {
            inputVisible && <input className={"search-input"} placeholder={"поиск"} type="text"/>
          }
          <select className={"select-lang"} value={"ru"} name="" id="">
            <option value="ru">ru</option>
            <option value="en">en</option>
            <option value="de">de</option>
          </select>
          <img className={"user-img"} src={userImg} alt="user"/>

        </div>
      </header>
    </div>
  );
};

export default Header;
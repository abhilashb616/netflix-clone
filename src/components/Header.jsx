import React from "react";
import styled from "styled-components";
import logo from "../assets/images/Netflix_Logo_PMS.png";
import bannerimg from "../assets/images/banner.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <NetflixLogo src={logo} alt="Netflix_Logo" />
      </Link>
      <BgimgContainer></BgimgContainer>
      <form action="" method="post">
        <Link to="/signin">
          <SigninBtn>Sign In</SigninBtn>
        </Link>
      </form>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: 100%;
  z-index: 10;
  @media screen and (max-width:600px){
    height: 88.75px;
    
  }
`;
const NetflixLogo = styled.img`
  width: 200px;
  margin-left: 25px;

  //position: relative;
  //left: 30px;
  @media screen and (max-width:600px){
    width: 190px;
  }

`;
const BgimgContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8128501400560224) 0%,
      rgba(0, 0, 0, 0.7904411764705882) 16%,
      rgba(0, 0, 0, 0.42629551820728295) 100%
    ),
    url(${bannerimg});
  z-index: -5;
`;
const SigninBtn = styled.button`
  background-color: red;
  //position: absolute;
  //right: 40px;
  //top: 25.175px;

  margin-right: 45px;

  font-size: 0.9rem;
  padding: 8px 15px;
  border-radius: 8px;
  font-weight: 500;
  border-style: none;
  cursor: pointer;
  @media screen and (max-width:600px){
    font-size: 14px;
    padding: 4px 15px;
    border-radius: 4px;
  }
`;

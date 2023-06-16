import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <MainBannerContainer>
      <BannerContainer>
        <PrimaryHeading>
          Unlimited movies, TV shows and <br /> more
        </PrimaryHeading>
        <SecondaryHeading>Watch anywhere. Cancel anytime.</SecondaryHeading>
        <FormHeading>
          Ready to watch? Enter your email to create or restart your membership.
        </FormHeading>
        <form>
          <EmailInput placeholder="Email Address" type="email" />
          <EmailSubmitBtn>Get Started &gt;</EmailSubmitBtn>
        </form>
      </BannerContainer>
    </MainBannerContainer>
  );
};

export default Banner;

const MainBannerContainer = styled.div`
  height: calc(100vh - 88.75px);
  width: 100%;
  //background-color: blue;
  position: relative;
  z-index: 11;
`;
const BannerContainer = styled.div`
  position: absolute;
  left: 75px;
  top: 100px;
  @media screen and (max-width:600px){
    left: 45px;
    top: 70px;
  }
`;
const PrimaryHeading = styled.h1`
  font-size: 4.2rem;
  letter-spacing: 1px;
  font-weight: 800;
  @media screen and (max-width: 1280px) {
    font-size: 3.6rem;
  }
  @media screen and (max-width: 1080px) {
    font-size: 2.9rem;
  }
  @media screen and (max-width: 980px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 480px) {
    font-size: .9rem;
  }
  @media screen and (max-width: 360px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.6rem;
  }
`;
const SecondaryHeading = styled.h2`
  margin-top: 25px;
  margin-bottom: 35px;

  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;
const FormHeading = styled.h3`
  margin-bottom: 20px;

  @media screen and (max-width: 640px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
  @media screen and (max-width: 360px) {
    font-size: 8px;
  }
  @media screen and (max-width: 320px) {
    font-size: 6px;
  }
`;
const EmailInput = styled.input`
  width: 40%;
  height: 45px;
  padding-left: 25px;
  margin-right: 15px;
  border-radius: 4px;
  border: 0.5px solid white;
  background: transparent;

  @media screen and (max-width: 600px) {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
`;
const EmailSubmitBtn = styled.button`
  height: 45px;
  width: 150px;
  font-size: .8rem;
  border-radius: 4px;
  background-color: red;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    height: 35px;
    width: 130px;
    font-size: 16px;
  }
 
`;

import React from "react";
import styled from "styled-components";

const SignIn = () => {
  return (
    <MainSignInContainer>
      <SignInContainer>
        <FormHeading>SignIn</FormHeading>
        <form>
          <FormInput type="email" placeholder="Email" />
          <FormInput type="password" placeholder="Password" />
          <SigninBtn>SignIn</SigninBtn>
        </form>
        <LoginformHelp>
          <CheckboxContainer>
            <CheckBox type="checkbox" />
            <span>Remember Me</span>
          </CheckboxContainer>
          <div>
            <a> Need help?</a>
          </div>
        </LoginformHelp>
        <SignupWrapper>
          <Signup>New to Netflix?</Signup> <span>Signup Now.</span>
        </SignupWrapper>
        <Recapcha>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <LearnMore> Learn more.</LearnMore>
        </Recapcha>
      </SignInContainer>
    </MainSignInContainer>
  );
};

export default SignIn;

const MainSignInContainer = styled.div`
  height: calc(100vh - 88.75px);
  width: 100%;
  position: relative;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignInContainer = styled.div`
  width: 450px;
  height: 660px;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.7092086834733893) 0%,
    rgba(0, 0, 0, 0.7036064425770308) 100%
  );
  padding: 60px 68px 40px 68px;
  @media screen and (max-width:600px){
    width: 98%;
    height: 98%;
    padding: 20px;
  }
`;
const FormHeading = styled.h1`
  margin-bottom: 28px;
`;
const FormInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  background-color: #333333;
  outline: none;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 15px;
`;
const SigninBtn = styled.button`
  background-color: red;
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  border-style: none;
  cursor: pointer;
  width: 100%;
  height: 50px;
  margin-top: 20px;
`;
const SignupWrapper = styled.div`
  margin-top: 75px;
  margin-bottom: 15px;
`;
const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const CheckBox = styled.input`
  accent-color: #737373;
  margin-right: 3px;
`;
const LoginformHelp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 12px;
`;
const Signup = styled.div`
  display: inline-block;
  color: #737373;
  font-size: 16px;
`;
const Recapcha = styled.p`
  font-size: 12px;
`;
const LearnMore = styled.span`
  color: blue;
`;

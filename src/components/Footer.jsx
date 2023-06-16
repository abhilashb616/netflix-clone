import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>Questions? Call 000-800-919-1694</ContactInfo>

      <FooterList>
        <FooterData>
          <a href="/"> FAQ</a>
        </FooterData>
        <FooterData>
          <a href="/">Help Centre</a>
        </FooterData>
        <FooterData>
          <a href="/">Account</a>
        </FooterData>
        <FooterData>
          <a href="/">Media Centre</a>
        </FooterData>
        <FooterData>
          <a href="/">Investor Relations</a>
        </FooterData>
        <FooterData>
          <a href="/">Jobs</a>
        </FooterData>
        <FooterData>
          <a href="/">Ways to Watch</a>
        </FooterData>
        <FooterData>
          <a href="/">Terms of Use</a>
        </FooterData>
        <FooterData>
          <a href="/">Privacy</a>
        </FooterData>
        <FooterData>
          <a href="/">Cookie Preferences</a>
        </FooterData>
        <FooterData>
          <a href="/">Corporate Information</a>
        </FooterData>
        <FooterData>
          <a href="/">Contact Us</a>
        </FooterData>
        <FooterData>
          <a href="/">Speed Test</a>
        </FooterData>
        <FooterData>
          <a href="/">Legal Notices</a>
        </FooterData>
        <FooterData>
          <a href="/">Only on Netflix</a>
        </FooterData>
      </FooterList>
      <Netflix>Netflix India</Netflix>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background: #00081d;
  padding-top: 100px;
  padding-left: 70px;
  padding-bottom: 90px;
  @media screen and (max-width:600px){
    padding: 50px 20px 50px 30px;
  }
`;
const ContactInfo = styled.p`
  text-align: left;
  margin-bottom: 55px;
`;
const FooterList = styled.ul`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  list-style-type: none;
  @media screen and (max-width:600px){
    width: 100%;
    flex-direction: column;
  }
`;
const FooterData = styled.li`
  width: 300px;
  height: 21px;
  font-size: small;
  margin-bottom: 21px;
`;
const Netflix = styled.p`
  text-align: left;
  margin-top: 20px;
`;

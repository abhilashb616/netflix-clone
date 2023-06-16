import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";

const Questions = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);
  const [isExpanded2, setExpanded2] = useState(false);
  const [isExpanded3, setExpanded3] = useState(false);
  const [isExpanded4, setExpanded4] = useState(false);
  const [isExpanded5, setExpanded5] = useState(false);
  return (
    <QstnContainer>
      <MainHeading>Frequently Asked Questions</MainHeading>
      <QstnBtn
        onClick={() => {
          setExpanded(!isExpanded);
          setExpanded1(false);
          setExpanded2(false);
          setExpanded3(false);
          setExpanded4(false);
          setExpanded5(false);
        }}
      >
        <BtnContent> What is Netflix</BtnContent>
        <BtnIcon>
          {isExpanded ? (
            <ClearIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </BtnIcon>
      </QstnBtn>
      {isExpanded ? (
        <QstnData>
          <DataSplitter>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices.
          </DataSplitter>
          <br />
          <br />
          <DataSplitter>
            You can watch as much as you want, whenever you want, without a
            single ad – all for one low monthly price. There's always something
            new to discover, and new TV shows and movies are added every week!
          </DataSplitter>
        </QstnData>
      ) : null}
      <QstnBtn
        onClick={() => {
          setExpanded1(!isExpanded1);
          setExpanded(false);
          setExpanded2(false);
          setExpanded3(false);
          setExpanded4(false);
          setExpanded5(false);
        }}
      >
        <BtnContent> How much does Netflix cost? </BtnContent>
        <BtnIcon>
          {isExpanded1 ? (
            <ClearIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </BtnIcon>
      </QstnBtn>
      {isExpanded1 ? (
        <QstnData>
          <DataSplitter>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from ₹
            149 to ₹ 649 a month. No extra costs, no contracts.
          </DataSplitter>
        </QstnData>
      ) : null}
      <QstnBtn
        onClick={() => {
          setExpanded2(!isExpanded2);
          setExpanded1(false);
          setExpanded(false);
          setExpanded3(false);
          setExpanded4(false);
          setExpanded5(false);
        }}
      >
        <BtnContent> Where can i watch</BtnContent>
        <BtnIcon>
          {isExpanded2 ? (
            <ClearIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </BtnIcon>
      </QstnBtn>
      {isExpanded2 ? (
        <QstnData>
          <DataSplitter>
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles.
          </DataSplitter>
          <br />
          <br />
          <DataSplitter>
            You can also download your favourite shows with the iOS, Android, or
            Windows 10 app. Use downloads to watch while you're on the go and
            without an internet connection. Take Netflix with you anywhere.
          </DataSplitter>
        </QstnData>
      ) : null}
      <QstnBtn
        onClick={() => {
          setExpanded3(!isExpanded3);
          setExpanded1(false);
          setExpanded2(false);
          setExpanded(false);
          setExpanded4(false);
          setExpanded5(false);
        }}
      >
        <BtnContent> how do I cancel? </BtnContent>
        <BtnIcon>
          {isExpanded3 ? (
            <ClearIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </BtnIcon>
      </QstnBtn>
      {isExpanded3 ? (
        <QstnData>
          <DataSplitter>
            Netflix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </DataSplitter>
        </QstnData>
      ) : null}
      <QstnBtn
        onClick={() => {
          setExpanded4(!isExpanded4);
          setExpanded1(false);
          setExpanded2(false);
          setExpanded3(false);
          setExpanded(false);
          setExpanded5(false);
        }}
      >
        <BtnContent> What can I watch on Netflix? </BtnContent>
        <BtnIcon>
          {isExpanded4 ? (
            <ClearIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </BtnIcon>
      </QstnBtn>
      {isExpanded4 ? (
        <QstnData>
          <DataSplitter>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </DataSplitter>
        </QstnData>
      ) : null}
      <QstnBtn
        onClick={() => {
          setExpanded5(!isExpanded5);
          setExpanded1(false);
          setExpanded2(false);
          setExpanded3(false);
          setExpanded4(false);
          setExpanded(false);
        }}
      >
        <BtnContent> Is Netflix good for kids? </BtnContent>
        <BtnIcon>
          {isExpanded5 ? (
            <ClearIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </BtnIcon>
      </QstnBtn>
      {isExpanded5 ? (
        <QstnData>
          <DataSplitter>
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and films
            in their own space.
          </DataSplitter>
          <br />
          <br />
          <DataSplitter>
            Kids profiles come with PIN-protected parental controls that let you
            restrict the maturity rating of content kids can watch and block
            specific titles you don’t want kids to see.
          </DataSplitter>
        </QstnData>
      ) : null}
      <SignupForm>
        <FormHeading>
          Ready to watch? Enter your email to create or restart your membership.
        </FormHeading>
        <form method="post">
          <EmailInput placeholder="Email Address" type="email" />
          <EmailSubmitBtn>Get Started &gt;</EmailSubmitBtn>
        </form>
      </SignupForm>
    </QstnContainer>
  );
};

export default Questions;

const QstnContainer = styled.div`
  position: relative;
  width: 100%;
  background: #00081d;
  text-align: left;
  padding-left: 70px;
  padding-top: 100px;
  @media screen and (max-width: 600px) {
    padding: 50px 20px; 
  }
`;
const MainHeading = styled.h1`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
`;
const QstnBtn = styled.button`
  width: 80%;
  height: 82px;
  font-size: 24px;
  padding-left: 20px;
  padding-right: 20px;
  background: linear-gradient(
    267deg,
    rgba(7, 23, 64, 1) 0%,
    rgba(7, 23, 64, 1) 100%
  );
  margin-top: 10px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background: #0b286d;
  }
  @media screen and (max-width: 600px) {
    font-size: 18px;
    width: 100%;
  }
`;
const BtnContent = styled.span``;
const BtnIcon = styled.span``;
const QstnData = styled.div`
  width: 80%;
  height: auto;
  padding: 25px 25px 25px 20px;
  background: linear-gradient(
    267deg,
    rgba(7, 23, 64, 1) 0%,
    rgba(7, 23, 64, 1) 100%
  );
  @media screen and (max-width:600px){
    width: 100%;
  }
`;
const DataSplitter = styled.span`
  font-size: 24px;
  @media screen and (max-width:600px){
    font-size: 18px;
  }
`;
const SignupForm = styled.div`
  padding-top: 20px;
`;
const FormHeading = styled.h3`
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-size: 18px;
    font-weight: 400;
  }
`;
const EmailInput = styled.input`
  width: 30%;
  height: 45px;
  padding-left: 25px;
  margin-right: 15px;
  border-radius: 4px;
  border: 0.5px solid white;
  background: transparent;
  @media screen and (max-width: 600px) {
    width: 80%;
    margin-bottom: 10px;
  }
`;
const EmailSubmitBtn = styled.button`
  height: 45px;
  width: 150px;
  font-size: 1.3rem;
  border-radius: 4px;
  background-color: red;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

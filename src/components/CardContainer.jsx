import React from "react";
import styled from "styled-components";
import tvicon from "../assets/images/tv.svg";
import popcornicon from "../assets/images/popcorn.svg";
import crystalballicon from "../assets/images/crystalball.svg";
import downloadicon from "../assets/images/download.svg";

const Cardcontainer = () => {
  return (
    <CardHolder>
      <Card>
        <CardImage>
          <Img src={tvicon} alt="tv_icon" />
        </CardImage>
        <CardContent>
          <CardHeading>Enjoy on your TV</CardHeading>
          <P>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </P>
        </CardContent>
      </Card>
      <Card>
        <CardImage>
          <Img src={popcornicon} alt="popcorn_icon" />
        </CardImage>
        <CardContent>
          <CardHeading>Watch everywhere</CardHeading>
          <P>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </P>
        </CardContent>
      </Card>
      <Card>
        <CardImage>
          <Img src={crystalballicon} alt="crystalball_icon" />
        </CardImage>
        <CardContent>
          <CardHeading>Create profiles for kids</CardHeading>
          <P>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </P>
        </CardContent>
      </Card>
      <Card>
        <CardImage>
          <Img src={downloadicon} alt="download_icon" />
        </CardImage>
        <CardContent>
          <CardHeading>Download your shows to watch offline</CardHeading>
          <P>Save your favourites easily and always have something to watch.</P>
        </CardContent>
      </Card>
    </CardHolder>
  );
};

export default Cardcontainer;

const CardHolder = styled.div`
  position: relative;
  height: 406px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(3, 8, 25, 1) 0%,
    rgba(2, 9, 32, 1) 12%,
    rgba(2, 9, 32, 1) 100%
  );
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
  }
`;

const Card = styled.div`
  width: 23%;
  height: 100%;
  padding-left: 25px;
  padding-top: 40px;
  border-radius: 10px;
  margin-left: 10px;
  background: linear-gradient(
    167deg,
    rgba(82, 13, 57, 1) 0%,
    rgba(57, 14, 63, 1) 29%,
    rgba(40, 14, 67, 1) 54%,
    rgba(23, 15, 72, 1) 100%
  );
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
    height: 300px;
    padding-top: 20px;
    padding-left: 15px;
    margin-left: 0;
  }
`;

const CardImage = styled.div`
  height: auto;
  width: auto;
`;

const Img = styled.img`
  height: 100px;
  width: 100px;
  @media screen and (max-width: 600px) {
    height: 60px;
    width: 60px;
  }
`;

const CardContent = styled.div`
  text-align: left;
`;
const CardHeading = styled.h2`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 600;
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;
const P = styled.p`
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

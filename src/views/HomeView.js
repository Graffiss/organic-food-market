import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GridTemplate from "../template/GridTemplate";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonContent = styled.button`
  justify-content: center;
  align-self: center;
  font-size: 2.6rem;
  border: 0.2rem solid white;
  padding: 1rem 4rem;
  background: transparent;
  margin: 0.5rem 0.5rem;
  cursor: pointer;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GreenContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 1/3;
  grid-row: 4/6;
  background: #cdd661;
  overflow: hidden;
  position: relative;
`;

const YellowContent = styled.div`
  grid-column: 4/7;
  grid-row: 1/3;
  background: #ffc547;
  overflow: hidden;
`;

const RedContent = styled.div`
  grid-column: 3/4;
  grid-row: 1/6;
  background: #ff7352;
  overflow: hidden;
`;

const BlueContent = styled.div`
  grid-column: 5/7;
  grid-row: 6/9;
  background: #01abce;
  overflow: auto;
`;

const Footer = styled.div`
  grid-column: 1/5;
  grid-row: 6/9;
  background: #3f3d40;
  overflow: hidden;
`;

const GreenPics = styled.div`
  grid-column: 1/3;
  grid-row: 1/4;
`;

const YellowPics = styled.div`
  grid-column: 5/7;
  grid-row: 3/6;
  position: relative;
  text-align: center;
`;

const RedPics = styled.div`
  grid-column: 4/5;
  grid-row: 3/6;
`;

const Span = styled.span`
  font-size: 4rem;
  font-family: "Montserrat", sans-serif;
`;

const Paragraph = styled.p`
  font-size: 3.6rem;
  justify-content: center;
  align-self: center;
  margin: 0.5rem 0.5rem;
`;

const HomeView = () => {
  return (
    <GridTemplate>
      <GreenPics>
        <Image
          src={require("../assets/images/green-apples.jpg")}
          alt="Green apples"
        />
      </GreenPics>
      <YellowPics>
        <Image src={require("../assets/images/bananas.jpeg")} alt="Bananas" />
        <Link to="/blog">
          <ButtonContent>BLOG</ButtonContent>
        </Link>
      </YellowPics>
      <RedPics>
        <Image src={require("../assets/images/carrots.jpg")} alt="Carrots" />
      </RedPics>
      <GreenContent>
        <Paragraph>
          Go to <Span>STORE</Span>
        </Paragraph>
        <Link to="/store">
          <ButtonContent>BUY</ButtonContent>
        </Link>
      </GreenContent>
      <YellowContent>
        <p>
          We know that eating organic means high standards of animal welfare,
          fewer pesticides, no artificial additives, preservatives or routine
          use of antibiotics. We're inviting people to add happiness to the
          world and their lives by feeding their happy with organic - and to
          experience the unadulterated joy of organic food.
        </p>
      </YellowContent>
      <RedContent>
        <Paragraph>
          When we eat <Span>ORGANIC</Span>, we feel <Span>HAPPY</Span>.
        </Paragraph>
      </RedContent>
      <BlueContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta
        quos sint ratione maxime labore tenetur nemo quod iure tempore adipisci
        unde perferendis, ipsa obcaecati voluptas aspernatur rerum ipsam
        perspiciatis!
      </BlueContent>
      <Footer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta
          quos sint ratione maxime labore tenetur nemo quod iure tempore
          adipisci unde perferendis, ipsa obcaecati voluptas aspernatur rerum
          ipsam perspiciatis!
        </p>
      </Footer>
    </GridTemplate>
  );
};

export default HomeView;

import React from "react";
import styled from "styled-components";
import { Paragraph } from "../components/atoms/Paragraph/Paragraph";
import { HeaderTwo } from "../components/atoms/HeaderTwo/HeaderTwo";
import { HeaderThree } from "../components/atoms/HeaderThree/HeaderThree";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 10rem;
  justify-content: center;
  min-height: 70vh;
  max-height: 70vh;
  overflow: auto;
`;

const AboutView = () => {
  return (
    <Wrapper>
      <HeaderTwo>About Us</HeaderTwo>
      <Paragraph>
        A one-stop shop full of all the right choices, Planet Organic is a
        health food haven with organic fruit & vegetables, organic bread from
        artisan London bakeries, only organic meat and sustainable fish from
        British waters. Our over-flowing groceries range is full of gluten-free,
        dairy-free, raw food and healthy options, while our Health & Bodycare
        department stocks the best natural beauty brands and a wide range of
        high quality health supplements.{" "}
      </Paragraph>

      <Paragraph>
        When we opened our doors in 1995, it was Renée Elliott's dream to offer
        the best and widest range of organic foods available, and her mission to
        promote health in the community and to bring a sense of discovery and
        adventure into food shopping. As most food production becomes
        increasingly industrialised, we want to bring back a sense of food that
        you can trust.
      </Paragraph>

      <HeaderThree>What We Believe</HeaderThree>
      <Paragraph>
        Our simple truth is that foods should be natural and wholesome. We
        advocate that food be authentic and ethical, freshly prepared and tasty
        – not a mere convenience. We believe in ethical and sustainable farming
        and place great emphasis on the provenance of all our products.
      </Paragraph>

      <Paragraph>
        We know that people who are discerning about what they eat want to make
        informed and responsible choices. Like us you believe that food wasn’t
        meant to be meddled with or tainted with chemicals. So we say no to
        artificial additives, hydrogenated fats, highly processed foods, and of
        course GM. Instead at Planet Organic you’ll find nutritious, seasonal
        and organic food with the goodness intact. You’ll find wide ranges of
        natural health foods suitable for all speciality diets, as well as a
        ground-breaking raw foods range.
      </Paragraph>

      <Paragraph>
        We hope that you find inspiration, excitement and good health from the
        food you eat and learn, like us, that to eat well is to live better.
      </Paragraph>
    </Wrapper>
  );
};

export default AboutView;

import { motion } from "framer-motion";
import {
  BackgroundText,
  Container,
  LandingContainer,
  LeftSide,
  LeftSideContainer,
  MiddleFloating,
  MiddleFloatingText,
  RightSide,
  SubTitle,
  Title,
} from "./styles/landing";

export default function Landing({ children }) {
  return (
    <LandingContainer>
      <Container className="container-fluid">
        {children}
        <MiddleFloating>
          <MiddleFloatingText className="inner-middle">
            Discover
          </MiddleFloatingText>
        </MiddleFloating>
      </Container>
    </LandingContainer>
  );
}

Landing.LeftSide = function LandingLeftSide({ children }) {
  return (
    <LeftSide>
      <LeftSideContainer>
        {children}
        <BackgroundText>東京</BackgroundText>
      </LeftSideContainer>
    </LeftSide>
  );
};

Landing.RightSide = function LandingRightSide({}) {
  const image = {
    initial: { scale: 1.5, x: 100 },
    animate: { scale: 1, x: 0 },
  };
  return (
    <RightSide>
      <motion.img
        alt=""
        src={`${process.env.PUBLIC_URL}/images/landing-01.png`}
      />
    </RightSide>
  );
};

Landing.Title = function LandingTitle({ children }) {
  return <Title>{children}</Title>;
};

Landing.SubTitle = function LandingSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};

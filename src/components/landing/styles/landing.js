import styled from "styled-components";
import { colors, fontSizes, fontWeights } from "../../../constants/theme";

export const LandingContainer = styled.div`
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${colors.offwhiteColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSideContainer = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
`;

export const BackgroundText = styled.h1`
  font-size: ${fontSizes.XXL};
  font-weight: ${fontWeights.EB};
  color: ${colors.blackColor};
  text-transform: uppercase;
  text-orientation: upright;
  writing-mode: vertical-rl;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%) scale(2);
  opacity: 0.1;
`;

export const Title = styled.h1`
  font-size: ${fontSizes.Xl};
  font-weight: ${fontWeights.EB};
  color: ${colors.blackColor};
  text-transform: uppercase;
`;

export const SubTitle = styled.h3`
  font-size: ${fontSizes.SM};
  font-weight: ${fontWeights.NML};
  color: ${colors.blackColor};
  text-transform: uppercase;
`;

export const RightSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: black;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
`;

export const MiddleFloating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightRedcolor};
  position: absolute;
  top: 50%;
  right: 50%;
  border-radius: 100%;
  height: 100px;
  width: 100px;
  transition: 0.2s ease-in-out;
  transform: translate(50%, -50%);
  cursor: pointer;

  &:hover {
    height: 200px;
    width: 200px;

    .inner-middle {
      display: inline;
      top: 0;
    }
  }
`;

export const MiddleFloatingText = styled.div`
  font-size: ${fontSizes.SM};
  color: ${colors.offwhiteColor};
  font-weight: ${fontWeights.NML};
  text-transform: uppercase;
  display: none;
`;

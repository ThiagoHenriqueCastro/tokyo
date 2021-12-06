import styled from "styled-components";
import { colors, fontSizes, fontWeights } from "../../../constants/theme";

export const HistoryContainer = styled.div`
  background-color: ${colors.blackColor};
  height: 100vh;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Title = styled.h1`
  font-size: ${fontSizes.Xl};
  font-weight: ${fontWeights.EB};
  color: ${colors.offwhiteColor};
  text-transform: uppercase;
`;

export const SubTitle = styled.h1`
  font-size: ${fontSizes.SM};
  font-weight: ${fontWeights.NML};
  color: ${colors.offwhiteColor};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 100px;
`;

export const Waves = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: ${colors.darkRedColor};
  position: absolute;
  right: 0;
  top: 0;
`;

export const BackgroundText = styled.h1`
  font-size: ${fontSizes.XXL};
  font-weight: ${fontWeights.EB};
  color: ${colors.darkRedColor};
  text-transform: uppercase;
  position: absolute;
  top: 40%;
  right: 50%;
  transform: translateY(-40%) translateX(50%) scale(2);
  opacity: 0.1;
`;

export const Sun = styled.div`
  position: absolute;
  background-color: ${colors.darkRedColor};
  bottom: -150px;
  right: 50%;
  transform: translateX(50%);
  height: 400px;
  width: 400px;
  border-radius: 100%;
`;

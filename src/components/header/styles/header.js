import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fontSizes, fontWeights } from "../../../constants/theme";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 72px;
  position: absolute;
  top: 32px;
  left: 0;
  z-index: 10;
`;

export const Container = styled.div``;

export const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 0px 32px;
  box-sizing: border-box;
`;

export const Logo = styled(Link)`
  font-size: ${fontSizes.MED};
  font-weight: ${fontWeights.EB};
  color: ${colors.blackColor};
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 40px;
`;

export const MenuNav = styled.div``;

export const MenuItem = styled(Link)`
  font-size: ${fontSizes.SM};
  font-weight: ${fontWeights.SB};
  color: ${colors.blackColor};
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 25px;
  position: relative;

  &:hover {
    text-decoration: ${colors.lightRedcolor} wavy underline;
    text-decoration-skip-ink: none;
  }
`;

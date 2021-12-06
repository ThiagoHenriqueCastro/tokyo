import {
  HeaderContainer,
  Container,
  MenuItem,
  Logo,
  Left,
  MenuNav,
} from "./styles/header";

export default function Header({ children }) {
  return (
    <HeaderContainer>
      <Container className="container-fluid row v-center">
        <Left>{children}</Left>
      </Container>
    </HeaderContainer>
  );
}
Header.MenuNav = function HeaderMenuNav({ children, ...restProps }) {
  return <MenuNav {...restProps}>{children}</MenuNav>;
};
Header.MenuItem = function HeaderMenuItem({ children, ...restProps }) {
  return <MenuItem {...restProps}>{children}</MenuItem>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

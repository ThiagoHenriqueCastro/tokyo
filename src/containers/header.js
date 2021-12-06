import { Header } from "../components";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Logo to="/">東京</Header.Logo>
      <Header.MenuNav>
        <Header.MenuItem to="/">Home</Header.MenuItem>
        <Header.MenuItem to="/">Trip</Header.MenuItem>
        <Header.MenuItem to="/">Gallery</Header.MenuItem>
      </Header.MenuNav>
    </Header>
  );
}

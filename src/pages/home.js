import { Breakpoint } from "react-socks";

import {
  HeaderContainer,
  LandingContainer,
  HistoryContainer,
} from "../containers";

export default function Home() {
  return (
    <>
      {/* Desktops */}
      <Breakpoint small down>
        <div>Mobile</div>
      </Breakpoint>
      {/* Desktops */}
      <Breakpoint large up>
        <HeaderContainer />
        <LandingContainer />
        <HistoryContainer />
      </Breakpoint>
    </>
  );
}

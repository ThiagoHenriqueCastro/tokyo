import { Breakpoint } from "react-socks";
import { LandingContainer } from "../containers";

export default function Home() {
  return (
    <>
      {/* Desktops */}
      <Breakpoint small down>
        <div>Mobile</div>
      </Breakpoint>
      {/* Desktops */}
      <Breakpoint large up>
        <LandingContainer />
      </Breakpoint>
    </>
  );
}

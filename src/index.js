import { render } from "react-dom";
import { BreakpointProvider } from "react-socks";
import App from "./App";
import { GlobalStyles } from "./global-styles";

render(
  <>
    <BreakpointProvider>
      <GlobalStyles />
      <App />
    </BreakpointProvider>
  </>,
  document.getElementById("root")
);

import { Landing } from "../components";

export default function LandingContainer({ children }) {
  return (
    <Landing>
      <Landing.LeftSide>
        <Landing.Title>welcome to tokyo</Landing.Title>
        <Landing.SubTitle>discover a new world</Landing.SubTitle>
      </Landing.LeftSide>
      <Landing.RightSide />
    </Landing>
  );
}

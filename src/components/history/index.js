import {
  BackgroundText,
  Box,
  Container,
  HistoryContainer,
  Image,
  SubTitle,
  Sun,
  Title,
  Waves,
} from "./styles/history";

export default function History({ children }) {
  return (
    <HistoryContainer>
      <Container className="container-fluid">{children}</Container>
    </HistoryContainer>
  );
}

History.Box = function HistoryBox({ children }) {
  return <Box className="container">{children}</Box>;
};

History.BackgroundText = function HistoryBackGroundText({ children }) {
  return <BackgroundText>{children}</BackgroundText>;
};

History.Sun = function HistorySun({ children }) {
  return <Sun>{children}</Sun>;
};

History.Title = function HistoryTitle({ children }) {
  return <Title>{children}</Title>;
};

History.SubTitle = function HistorySubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};

History.Waves = function HistoryWaves({}) {
  return <Waves />;
};

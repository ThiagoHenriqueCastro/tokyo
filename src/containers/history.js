import { History } from "../components";

export default function HistoryContainer({ children }) {
  return (
    <History>
      <History.Box>
        <History.Title>History</History.Title>
        <History.SubTitle>
          Tokyo was originally known as Edo (江戸), a kanji compound of 江 (e,
          "cove, inlet") and 戸 (to, "entrance, gate, door"). The name, which
          can be translated as "estuary", is a reference to the original
          settlement's location at the meeting of the Sumida River and Tokyo
          Bay. During the Meiji Restoration in 1868, the name of the city was
          changed to Tokyo (東京, from 東 tō "east", and 京 kyō "capital"), when
          it became the new imperial capital,[14] in line with the East Asian
          tradition of including the word capital (京) in the name of the
          capital city (for example, Kyoto (京都), Keijō (京城), Beijing (北京),
          Nanjing (南京), and Xijing (西京)). During the early Meiji period, the
          city was sometimes called "Tōkei", an alternative pronunciation for
          the same characters representing "Tokyo", making it a kanji homograph.
          Some surviving official English documents use the spelling "Tokei";
          however, this pronunciation is now obsolete.
        </History.SubTitle>
        <History.BackgroundText>歴史</History.BackgroundText>
        <History.Sun />
        <History.Waves />
      </History.Box>
    </History>
  );
}

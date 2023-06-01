import Gallery, { GalleryImagesProps } from "components/Gallery";
import GameInfo, { GameInfoProps } from "components/GameInfo";
import Base from "templates/Base";
import { GameCardProps } from "components/GameCard";
import GameDetails, { GameDetailsProps } from "components/GameDetails";
import { Divider } from "components/Divider";
import { HighlightProps } from "components/Highlight";
import Showcase from "components/Showcase";
import TextContent from "components/TextContent";

import * as S from "./styles";

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImagesProps[];
  description: string;
  details: GameDetailsProps;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedGames: GameCardProps[];
};

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
}: GameTemplateProps) => {
  return (
    <Base>
      <S.Cover role="img" src={cover} aria-label="cover" />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        <S.SectionGallery>
          {!!gallery && <Gallery items={gallery} />}
        </S.SectionGallery>

        <S.SectionDescription>
          <TextContent title="Description" content={description} />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />
          <Divider/>
        </S.SectionGameDetails>


        <Showcase
          title="Upcoming"
          games={upcomingGames}
          highlight={upcomingHighlight}
        />
        <Showcase title="You may like these games" games={recommendedGames} />
      </S.Main>
    </Base>
  );
};

export default Game;

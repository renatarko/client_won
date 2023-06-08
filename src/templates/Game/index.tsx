import { Divider } from "components/Divider";
import Gallery, { GalleryImagesProps } from "components/Gallery";
import { GameCardProps } from "components/GameCard";
import GameDetails, { GameDetailsProps } from "components/GameDetails";
import GameInfo, { GameInfoProps } from "components/GameInfo";
import { HighlightProps } from "components/Highlight";
import Showcase from "components/Showcase";
import TextContent from "components/TextContent";
import Base from "templates/Base";

import * as S from "./styles";

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImagesProps[];
  description: string;
  details: GameDetailsProps;
  upcomingTitle: string;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedGames: GameCardProps[];
  recommendedTitle: string;
};

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingTitle,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
  recommendedTitle,
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
          <Divider />
        </S.SectionGameDetails>

        <Showcase
          title={upcomingTitle}
          games={upcomingGames}
          highlight={upcomingHighlight}
        />
        <Showcase title={recommendedTitle} games={recommendedGames} />
      </S.Main>
    </Base>
  );
};

export default Game;

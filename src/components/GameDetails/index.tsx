import Heading from "components/Heading";
import MediaMatch from "components/MediaMatch";
import { Apple, Linux, Windows } from "styled-icons/fa-brands";
import * as S from "./styles";

type Platform = "windows" | "linux" | "mac";

type Rating = "BR0" | "BR10" | "BR12" | "BR14" | "BR16" | "BR18";

export type GameDetailsProps = {
  developer: string;
  publisher: string;
  platforms: Platform[];
  releaseDate: string;
  rating: Rating;
  genres: string[];
};

const GameDetails = ({
  platforms,
  publisher,
  developer,
  releaseDate,
  rating,
  genres,
}: GameDetailsProps) => {
  const platformsIcons = {
    linux: <Linux color="white" size={18} data-testid="icon linux" />,
    windows: <Windows color="white" size={18} data-testid="icon windows" />,
    mac: <Apple color="white" size={18} data-testid="icon mac" />,
  };

  return (
    <S.Wrapper>
      <MediaMatch>
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Title>Developers</S.Title>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Data de lançamento</S.Title>
          <S.Description>
            {new Intl.DateTimeFormat("un-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Plataformas</S.Title>
          <S.IconWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformsIcons[icon]}</S.Icon>
            ))}
          </S.IconWrapper>
        </S.Block>

        <S.Block>
          <S.Title>Editoras</S.Title>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Classificação</S.Title>
          <S.Description>
            {rating === "BR0" ? "Free" : `${rating.replace("BR", "")}+`}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Categoria</S.Title>
          <S.Description>{genres.join(" / ")}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameDetails;

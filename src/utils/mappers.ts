import { QueryGames_games } from "graphql/queries/generated/QueryGames";
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight,
} from "graphql/queries/generated/QueryHome";

export const bannerMapper = (banner: QueryHome_banners[]) => {
  return banner.map((banner) => ({
    img: banner.image?.url,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size,
    }),
  }));
};

export const gamesMapper = (games: QueryGames_games[] | null | undefined) => {
  return (
    games &&
    games.map((game) => ({
      title: game.name,
      slug: game.slug,
      developers: game.developers[0],
      img: game.cover?.url,
      price: game.price,
    }))
  );
};

export const highlightMapper = (
  highlight: QueryHome_sections_freeGames_highlight | null | undefined
) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: highlight.background?.url,
      floatImage: `http://localhost:1337${highlight?.floatImage}`,
      buttonLabel: highlight?.buttonLabel,
      buttonLink: highlight?.buttonLink,
      alignment: highlight?.alignment,
    }
  );
};

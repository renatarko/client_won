import { QueryGames_games } from "graphql/queries/generated/QueryGames";
import {
  QueryHome_banners,
  QueryHome_sections_newGames_highlight,
} from "graphql/queries/generated/QueryHome";
import { bannerMapper, cartMapper, gamesMapper, highlightMapper } from ".";

describe("bannerMapper()", () => {
  it("should render the correct format when mapped", () => {
    const banner = {
      image: {
        url: "/image.jpg",
      },
      title: "game title",
      subtitle: "game subtitle",
      button: {
        label: "button label",
        link: "button link",
      },
      ribbon: {
        text: "ribbon text",
        color: "primary",
        size: "small",
      },
    } as QueryHome_banners;
    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: "/image.jpg",
        title: "game title",
        subtitle: "game subtitle",
        buttonLabel: "button label",
        buttonLink: "button link",
        ribbon: "ribbon text",
        ribbonColor: "primary",
        ribbonSize: "small",
      },
    ]);
  });
});

describe("gamesMapper()", () => {
  it("should render as empty array if there are no games", () => {
    expect(gamesMapper(null)).toStrictEqual([]);
  });

  it("should render the correct format when mapped", () => {
    const game = {
      id: "1",
      name: "game title",
      developers: [{ name: "developer" }],
      slug: "game",
      cover: {
        url: "image.jpg",
      },
      price: 120,
    } as QueryGames_games;

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: "1",
        title: "game title",
        slug: "game",
        developers: "developer",
        img: "image.jpg",
        price: 120,
      },
    ]);
  });
});

describe("highlightMapper()", () => {
  it("should return empty object if no highlight", () => {
    expect(highlightMapper(null)).toStrictEqual({});
  });

  it("should render the correct format when mapped", () => {
    const highlight = {
      title: "title",
      subtitle: "subtitle",
      background: {
        url: "image.jpg",
      },
      floatImage: {
        url: "image.jpg",
      },
      buttonLabel: "button label",
      buttonLink: "button link",
      alignment: "right",
    } as QueryHome_sections_newGames_highlight;

    expect(highlightMapper(highlight)).toStrictEqual({
      title: "title",
      subtitle: "subtitle",
      backgroundImage: "image.jpg",
      floatImage: `http://localhost:1337/image.jpg`,
      buttonLabel: "button label",
      buttonLink: "button link",
      alignment: "right",
    });
  });
});

describe("cartMapper()", () => {
  it("should return empty array if no games", () => {
    expect(cartMapper(undefined)).toStrictEqual([]);
  });

  it("should return mapped items", () => {
    const game = {
      id: "1",
      cover: {
        url: "/image.jpg",
      },
      name: "game",
      price: 10,
    } as QueryGames_games;

    expect(cartMapper([game])).toStrictEqual([
      {
        id: "1",
        img: "http://localhost:1337/image.jpg",
        title: "game",
        price: "$10.00",
      },
    ]);
  });
});

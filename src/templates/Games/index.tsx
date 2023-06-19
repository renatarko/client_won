import { Container } from "components/Container";
import ExploreSidebar, { ItemProps } from "components/ExploreSidebar";
import GameCard from "components/GameCard";
import Base from "templates/Base";

import Empty from "components/Empty";
import { Grid } from "components/Grid";
import { useQueryGames } from "graphql/queries/games";
import { useRouter } from "next/router";
import { ParsedUrlQueryInput } from "querystring";
import { KeyboardArrowDown } from "styled-icons/material-outlined";
import {
  parseQueryStringToFilter,
  parseQueryStringToWhere,
} from "utils/filter";
import * as S from "./style";

export type GamesTemplateProps = {
  filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter();
  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string,
    },
  });

  if (!data) return <p>loading...</p>;

  const { games, gamesConnection } = data;

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0);

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: "/games",
      query: items,
    });
    return;
  };

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } });
  };

  return (
    <Base>
      <Container>
        <S.Main>
          <ExploreSidebar
            initialValues={parseQueryStringToFilter({
              queryString: query,
              filterItems,
            })}
            items={filterItems}
            onFilter={handleFilter}
          />

          <section>
            {data?.games.length ? (
              <>
                <Grid>
                  {data?.games.map((game) => (
                    <GameCard
                      key={game.slug}
                      slug={game.slug}
                      title={game.name}
                      developer={game.developers[0].name}
                      img={game.cover!.url}
                      price={game.price}
                    />
                  ))}
                </Grid>

                {hasMoreGames && (
                  <S.ShowMore>
                    {loading ? (
                      <S.ShowMoreLoading
                        src="img/dots.svg"
                        alt="Loading more games..."
                      />
                    ) : (
                      <S.ShowMoreButton role="button" onClick={handleShowMore}>
                        <p>Show more</p>
                        <KeyboardArrowDown size={35} />
                      </S.ShowMoreButton>
                    )}
                  </S.ShowMore>
                )}
              </>
            ) : (
              <Empty
                title=":("
                description="We didn't find any games with this filter"
              />
            )}
          </section>
        </S.Main>
      </Container>
    </Base>
  );
};

export default GamesTemplate;

import { Container } from "components/Container";
import ExploreSidebar, { ItemProps } from "components/ExploreSidebar";
import GameCard, { GameCardProps } from "components/GameCard";
import Base from "templates/Base";

import { Grid } from "components/Grid";
import { KeyboardArrowDown } from "styled-icons/material-outlined";
import * as S from "./style";

export type GamesTemplateProps = {
  games?: GameCardProps[];
  filterItems: ItemProps[];
};

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.Main>
          <ExploreSidebar items={filterItems} onFilter={() => ({})} />

          <section>
            <Grid>
              {games.map((game) => (
                <GameCard key={game.title} {...game} />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={() => ({})}>
              <p>Show more</p>
              <KeyboardArrowDown size={35} />
            </S.ShowMore>
          </section>
        </S.Main>
      </Container>
    </Base>
  );
};

export default GamesTemplate;

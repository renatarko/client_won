import Heading from "components/Heading";
import Logo from "components/Logo";
import Link from "next/link";
import * as S from "./style";

export type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Link href={"/"}>
            <a>
              <Logo id="banner" />
            </a>
          </Link>
          <div>
            <Heading size="huge">Seus jogos favoritos em um só lugar</Heading>
            <S.SubTitle>
              A <strong>WON</strong> é a melhor e mais completa plataforma de
              games.
            </S.SubTitle>
          </div>
          <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Link href={"/"}>
            <a>
              <Logo color="black" size="large" id="form" />
            </a>
          </Link>
          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>
          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default Auth;

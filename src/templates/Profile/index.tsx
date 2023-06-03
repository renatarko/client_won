import { useRouter } from "next/router";

import { Container } from "components/Container";
import Heading from "components/Heading";
import Base from "templates/Base";

import ProfileMenu from "components/ProfileMenu";
import * as S from "./style";

export type TampleteProfileProps = {
  children: React.ReactNode;
};

const Profile = ({ children }: TampleteProfileProps) => {
  const { asPath } = useRouter();

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  );
};

export default Profile;

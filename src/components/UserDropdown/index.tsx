import Dropdown from "components/Dropdown";
import Link from "next/link";
import { ChevronDown } from "styled-icons/boxicons-regular";
import {
  AccountCircle,
  ExitToApp,
  FavoriteBorder,
} from "styled-icons/material-outlined";

import * as S from "./styles";

export type UserDropdownProps = {
  username: string;
};

const UserDropdown = ({ username }: UserDropdownProps) => {
  return (
    <Dropdown
      title={
        <>
          <AccountCircle size={24} />
          <S.Username>{username}</S.Username>
          <ChevronDown size={24} />
        </>
      }
    >
      <S.Nav>
        <Link href="/profile/me" passHref>
          <S.Link>
            <AccountCircle size={24} />
            <span>My profile</span>
          </S.Link>
        </Link>

        <Link href="/profile/wishlist" passHref>
          <S.Link>
            <FavoriteBorder size={24} />
            <span>Wishlist</span>
          </S.Link>
        </Link>

        <Link href="/profile/sign-out" passHref>
          <S.Link>
            <ExitToApp size={24} />
            <span>Sign out</span>
          </S.Link>
        </Link>
      </S.Nav>
    </Dropdown>
  );
};

export default UserDropdown;

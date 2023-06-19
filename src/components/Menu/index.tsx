import { Search as SearchIcon } from "@styled-icons/material-outlined/Search";
import { Close as CloseIcon } from "@styled-icons/material/Close";
import { Menu2 as MenuIcon } from "@styled-icons/remix-line/Menu2";
import { useState } from "react";

import Button from "components/Button";
import CartDropdown from "components/CartDropdown";
import CartIcon from "components/CartIcon";
import Logo from "components/Logo";
import MediaMatch from "components/MediaMatch";
import UserDropdown from "components/UserDropdown";
import Link from "next/link";
import * as S from "./styles";

export type MenuProps = {
  username?: string;
};

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label="Open Menu" onClick={() => setIsOpen(true)} />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink href="#">Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink href="#">Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Link href="/cart" passHref>
              <a>
                <CartIcon />
              </a>
            </Link>
          </MediaMatch>
        </S.IconWrapper>
        <MediaMatch greaterThan="medium">
          {!username ? (
            <Link href="/sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.menuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink href="#">Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink href="#">Explore</S.MenuLink>
          </Link>

          {!!username && (
            <>
              <Link href="/profile/me" passHref>
                <S.MenuLink>My profile</S.MenuLink>
              </Link>
              <Link href="/wishlist" passHref>
                <S.MenuLink>Wishlist</S.MenuLink>
              </Link>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <a>
                <Button fullWidth size="large">
                  Sign In
                </Button>
              </a>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount href="#" title="Sign Up">
                Sign Up
              </S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.menuFull>
    </S.Wrapper>
  );
};

export default Menu;

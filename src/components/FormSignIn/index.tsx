import { Email, Lock } from "styled-icons/material-outlined";

import Button from "components/Button";
import TextField from "components/TextField";
import Link from "next/link";

import * as S from "./styles";

const FormSignIn = () => {
  return (
    <S.Wrapper>
      <form>
        <TextField
          name="email"
          type="email"
          placeholder="Email"
          icon={<Email />}
        />
        <TextField
          name="password"
          type="password"
          placeholder="Senha"
          icon={<Lock />}
        />
        <S.ForgorPassword href="#">Esqueceu sua senha?</S.ForgorPassword>
        <Button size="large" fullWidth>
          Entrar
        </Button>
        <S.LinkForm>
          Ainda não tem uma conta?
          <Link href="/sign-up">
            <a>Cadastre-se</a>
          </Link>
        </S.LinkForm>
      </form>
    </S.Wrapper>
  );
};

export default FormSignIn;

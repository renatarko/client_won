import { Email, Lock } from "styled-icons/material-outlined";

import Button from "components/Button";
import { FormWrapper, LinkForm } from "components/Form";
import TextField from "components/TextField";
import Link from "next/link";

import * as S from "./styles";

const FormSignIn = () => {
  return (
    <FormWrapper>
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
        <LinkForm>
          Ainda não tem uma conta?
          <Link href="/sign-up">
            <a>Cadastre-se</a>
          </Link>
        </LinkForm>
      </form>
    </FormWrapper>
  );
};

export default FormSignIn;

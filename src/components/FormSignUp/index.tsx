import TextField from "components/TextField";

import { AccountCircle, Email, Lock } from "@styled-icons/material-outlined";
import Button from "components/Button";
import Link from "next/link";
import * as S from "./styles";

const FormSignUp = () => {
  return (
    <S.Wrapper>
      <form>
        <TextField
          type="name"
          name="name"
          placeholder="Nome completo"
          icon={<AccountCircle />}
        />
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          icon={<Email />}
        />
        <TextField
          type="password"
          name="password"
          placeholder="senha"
          icon={<Lock />}
        />
        <TextField
          type="password"
          name="confirm-password"
          placeholder="Confirmar senha"
          icon={<Lock />}
        />
        <Button size="large" fullWidth>
          Criar conta
        </Button>

        <S.LinkForm>
          Já tem uma conta?
          <Link href={"/sign-in"}>
            <a>Entrar</a>
          </Link>
        </S.LinkForm>
      </form>
    </S.Wrapper>
  );
};

export default FormSignUp;

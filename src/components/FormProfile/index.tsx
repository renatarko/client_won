import Button from "components/Button";
import Heading from "components/Heading";
import TextField from "components/TextField";
import * as S from "./style";

const FormProfile = () => {
  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="primary" color="black">
        My profile
      </Heading>

      <S.Form>
        <TextField
          name="name"
          placeholder="Name"
          label="Name"
          valueInicial="John Cage"
        />
        <TextField
          name="email"
          placeholder="E-mail"
          label="E-mail"
          type="email"
          valueInicial="JohnCage@email.com"
          disabled
        />

        <TextField
          name="password"
          placeholder="Type your passaword"
          label="Password"
          type="password"
        />

        <TextField
          name="new_password"
          placeholder="New password"
          label="NewPassword"
          type="password"
        />

        <Button size="large">Save</Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default FormProfile;

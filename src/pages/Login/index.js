import { ContainerForm, TextFildStyle } from "./style";
import { ContainerPage } from "../../Components/ContainerPage";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import { ButtonStyled } from "../../Components/Button";
import { darkTheme } from "../../Style/Theme";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import { NavBar } from "../../Components/NavBar";
import { useState } from "react";

const Login = ({ setUser, setIsAuthorized, user }) => {
  const history = useHistory();
  const [showErrorCadastred, setShowErrorCadastred] = useState(false);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .matches("^[a-zA-Z \u00C0-\u00FF]+$", "nome deve ter somente letras")
      .required("Nome de usuário obrigatório"),
    email: yup.string().email("Email invalido").required("Email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches("^.{8,}$", "Senha deve ter ao menos 8 digitos")
      .matches("[A-Z]", "Senha deve ter ao menos uma letra maiúscula")
      .matches("[a-z]", "Senha deve ter ao menos uma letra minúscula")
      .matches("[0-9]", "Senha deve ter ao menos um número")
      .matches("[#?!@$%^&*-]", "Senha deve ter ao menos um caracter espcial"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senha não é igual"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const mockUser = {
    name: "lourivan luz",
    email: "Jaja@111.com",
    password: "Jaja@111.com",
  };

  const onSubmited = (data) => {
    if (
      data.name === mockUser.name &&
      data.email === mockUser.email &&
      data.password === mockUser.password
    ) {
      data.theme = "defult";
      setUser(data);
      setIsAuthorized(true);
      history.push(`/user/${data.name}`);
    } else {
      setShowErrorCadastred(true);
    }
  };

  return (
    <ContainerPage
      color="1A1A1A"
      display="flex"
      alignItems="flex-start"
      paddingTop="150px"
    >
      <NavBar>
        <ThemeProvider theme={darkTheme}>
          <ButtonStyled onClick={() => history.push("/")}>Home</ButtonStyled>
          <ButtonStyled onClick={() => history.push(`user/${user.name}`)}>
            Minha página
          </ButtonStyled>
        </ThemeProvider>
      </NavBar>
      <ContainerForm elevation={6}>
        <Box height="80%" width="100%">
          <form className="FormContainer" onSubmit={handleSubmit(onSubmited)}>
            <ThemeProvider theme={darkTheme}>
              <TextFildStyle
                label="Name"
                variant="outlined"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextFildStyle
                label="Email"
                variant="outlined"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextFildStyle
                label="Senha"
                variant="outlined"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <TextFildStyle
                label="Confirmar senha"
                variant="outlined"
                {...register("passwordConfirm")}
                error={!!errors.passwordConfirm}
                helperText={errors.passwordConfirm?.message}
              />
              <ButtonStyled type="submit">login</ButtonStyled>
            </ThemeProvider>
          </form>
          {showErrorCadastred && (
            <p className="errorCadastred">Usuário não cadastrado*</p>
          )}
        </Box>
      </ContainerForm>
    </ContainerPage>
  );
};

export default Login;

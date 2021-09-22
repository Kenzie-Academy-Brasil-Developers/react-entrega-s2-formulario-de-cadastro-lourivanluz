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

const Login = ({ setUser, setIsAuthorized }) => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .matches("^[a-zA-Z \u00C0-\u00FF]+$", "nome deve ter somente letras")
      .required("Nome de usuário obrigatório"),
    email: yup.string().email("Email invalido").required("Email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "Senha deve ter ao menos 8 digitos, 1 letra maiúscula, 1 letra minúscula, 1 número e um caracter espcial"
      ),
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
    name: "lourvan luz",
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
      history.push("/user");
      console.log(data);
    } else {
      console.log(data, "nao cadastrado");
    }
  };

  return (
    <ContainerPage color="1A1A1A" display="flex">
      <NavBar>
        <ThemeProvider theme={darkTheme}>
          <ButtonStyled onClick={() => history.push("/")}>Home</ButtonStyled>
          <ButtonStyled onClick={() => history.push("/user")}>
            Minha página
          </ButtonStyled>
        </ThemeProvider>
      </NavBar>
      <ContainerForm elevation={6}>
        <Box height="80%">
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
        </Box>
      </ContainerForm>
    </ContainerPage>
  );
};

export default Login;

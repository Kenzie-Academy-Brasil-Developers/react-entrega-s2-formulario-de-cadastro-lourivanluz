import { ContainerForm, TextFildStyle } from "./style";
import { ContainerPage } from "../../Components/ContainerPage";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import { ButtonStyled } from "../../Components/Button";
import { darkTheme } from "../../Style/Theme";

const Login = () => {
  return (
    <ContainerPage color="1A1A1A">
      <ContainerForm elevation={6}>
        <Box
          display="flex"
          flexDirection="column"
          height="80%"
          justifyContent="space-evenly"
          position="relative"
        >
          <ThemeProvider theme={darkTheme}>
            <TextFildStyle label="Nome" variant="outlined" />
            <TextFildStyle label="Email" variant="outlined" />
            <TextFildStyle label="Senha" variant="outlined" />
            <TextFildStyle label="Confirmar senha" variant="outlined" />
            <ButtonStyled>login</ButtonStyled>
          </ThemeProvider>
        </Box>
      </ContainerForm>
    </ContainerPage>
  );
};

export default Login;

import { ButtonStyled } from "../../Components/Button";
import { ContainerPage } from "../../Components/ContainerPage";
import { NavBar } from "../../Components/NavBar";
import { darkTheme } from "../../Style/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { useHistory, useParams } from "react-router";
import { Box } from "@mui/system";

export const UserPage = ({ user, isAuthorized, setIsAuthorized }) => {
  const history = useHistory();
  if (!isAuthorized) {
    history.push("/login");
  }
  const { name } = useParams();

  return (
    <ContainerPage color="1A1A1A" diplay="block">
      <NavBar>
        <ThemeProvider theme={darkTheme}>
          <ButtonStyled onClick={() => history.push("/")}>Home</ButtonStyled>
          <ButtonStyled onClick={() => setIsAuthorized(false)}>
            Logout
          </ButtonStyled>
        </ThemeProvider>
      </NavBar>
      <Box padding="80px 20px" fontSize="32px" color="white">
        <h1>Bem vindo {`${name}`}</h1>
        <div>
          <p>Nome de usuário:{user.name}</p>
          <p>Email cadastrado:{user.email}</p>
        </div>
      </Box>
    </ContainerPage>
  );
};

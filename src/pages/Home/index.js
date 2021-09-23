import { ContainerPage } from "../../Components/ContainerPage";
import { NavBar } from "../../Components/NavBar";
import { ButtonStyled } from "../../Components/Button";
import { darkTheme } from "../../Style/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router";

export const Home = ({ user, isAuthorized }) => {
  const history = useHistory();

  const goTo = (path) => {
    history.push(path);
  };

  return (
    <ContainerPage color="1A1A1A" display="block">
      <NavBar>
        <ThemeProvider theme={darkTheme}>
          <ButtonStyled onClick={() => goTo("/login")}>
            {isAuthorized ? "Logar com outra conta" : "logar"}
          </ButtonStyled>
          <ButtonStyled onClick={() => goTo(`/user/${user.name}`)}>
            Minha página
          </ButtonStyled>
        </ThemeProvider>
      </NavBar>
    </ContainerPage>
  );
};

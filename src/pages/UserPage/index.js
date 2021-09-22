import { ButtonStyled } from "../../Components/Button";
import { ContainerPage } from "../../Components/ContainerPage";
import { NavBar } from "../../Components/NavBar";
import { darkTheme } from "../../Style/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { useHistory, useParams } from "react-router";
import { useState } from "react";
import { Box } from "@mui/system";

export const UserPage = ({ user, isAuthorized, setIsAuthorized }) => {
  const history = useHistory();
  const [colorTheme, seCtolorTheme] = useState("");
  const [theme, setTheme] = useState("");

  if (!isAuthorized) {
    history.push("/login");
  }

  return (
    <ContainerPage color="1A1A1A" diplay="block">
      <NavBar>
        <ThemeProvider theme={darkTheme}>
          <ButtonStyled onClick={() => history.push("/")}>Home</ButtonStyled>
          <ButtonStyled onClick={() => setIsAuthorized(false)}>
            Logout
          </ButtonStyled>
          <ButtonStyled>Mudar Tema</ButtonStyled>
          <input
            type="text"
            placeholder="color in Hex"
            value={colorTheme}
            onChange={(event) => seCtolorTheme(event.target.value)}
          />
        </ThemeProvider>
      </NavBar>
      <Box paddingTop="80px" fontSize="32px" color="white">
        Bem vindo {`${user.name}`}
      </Box>
    </ContainerPage>
  );
};

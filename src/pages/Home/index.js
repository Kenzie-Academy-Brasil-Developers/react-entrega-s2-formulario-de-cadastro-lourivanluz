import { ButtonStyled } from "../../Components/Button";
import { ContainerPage } from "../../Components/ContainerPage";
import { darkTheme } from "../../Style/Theme";
import { ThemeProvider } from "@mui/material/styles";

export const Home = () => {
  return (
    <ContainerPage color="1A1A1A">
      <div>
        Home
        <ThemeProvider theme={darkTheme}>
          <ButtonStyled>Logar</ButtonStyled>
        </ThemeProvider>
      </div>
    </ContainerPage>
  );
};

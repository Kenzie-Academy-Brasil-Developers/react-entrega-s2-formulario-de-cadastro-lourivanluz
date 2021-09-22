import { createTheme } from "@mui/material/styles";
export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#DDDDDD",
    },
  },
});

export const createThemeStyle = (color, createTheme) => {
  const newColor = createTheme({
    palette: {
      primary: {
        main: `#${color}`,
      },
    },
  });
  return newColor;
};

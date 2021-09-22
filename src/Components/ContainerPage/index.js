import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
export const ContainerPage = styled(Box)`
  display: ${(prop) => prop.display};
  min-height: 100vh;
  background-color: #${(prop) => prop.color};
  justify-content: center;
  align-items: center;
`;

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
export const ButtonStyled = styled(Button)`
  padding: 10px 25px;
  background-color: #1a1a1a;
  border-radius: 15px;
  width: ${({ width = 150 }) => width};
  margin-left: auto;
`;

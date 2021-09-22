import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const ContainerForm = styled(Paper)`
  height: 600px;
  max-width: 800px;
  width: 90%;
  line-height: 60px;
  background: "rgb(26,26,26)";
  background: linear-gradient(
    190deg,
    rgba(26, 26, 26, 1) 0%,
    rgba(50, 54, 50, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px;

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const TextFildStyle = styled(TextField)`
  .MuiOutlinedInput-root {
    box-sizing: border-box;
    border-radius: 15px;
    background: #1a1a1a;
    color: white;
    width: 500px;
  }
  .Mui-focused {
    border: none;
  }
  label {
    color: #dddddd;
  }
`;

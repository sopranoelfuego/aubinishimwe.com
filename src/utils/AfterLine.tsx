import { styled} from "@mui/material/styles";
export const afterLine=({ width,height})=>( styled('div')(({ theme }) => ({
    width: width,
    height: height,
    display: "inline-flex",
    backgroundColor: `${theme?.palette.text?.secondary}`,
    opacity:'0.5'
   })))
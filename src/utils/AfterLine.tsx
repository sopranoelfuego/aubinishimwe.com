import { styled } from "@mui/material";

export const afterLine=({ width,height})=>( styled('div')(({ theme }) => ({
    width: width,
    height: height,
    display: 'block',
    backgroundColor: `${theme?.palette.text?.secondary}`,
    opacity:'0.5'
   })))
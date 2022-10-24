import { styled } from '@mui/material'
import { AppProps } from 'next/app'

export const LinkAnchor = styled('a')(({ theme }) => ({
 transition: 'all 300ms ease-in',
 display: 'flex',
 '&:hover': {
  color: `${theme?.palette?.primary?.contrastText}`,
  cursor: 'pointer',
 },
}))

export const AfterLine = ({ width, height }) => {
 const Line = styled('div')(({ theme }) => ({
  width: width,
  height: height,
  display: 'block',
  backgroundColor: `${theme?.palette.text?.secondary}`,
 }))
 return Line
}

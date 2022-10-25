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

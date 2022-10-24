import { styled } from '@mui/material'

export const GLobalButton = styled('button')(({ theme }) => ({
 padding: '10px 25px',
 border: `1px solid ${theme?.palette?.primary?.contrastText}`,
 borderRadius: '4px',
 transition: 'all 300ms ease-in',
 color: `${theme?.palette?.primary?.contrastText}`,
 backgroundColor: 'transparent',
 marginLeft: '10px',
 '&:hover': { backgroundColor: 'rgba(10, 212, 43,0.2)' },
}))

import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { footerLinks } from '../Menu/config';

const StyledUl = styled.ul`
  list-style: none;
  padding: 5px 0px 0px 0px;
`

const StyledLi = styled.li`
  font-family: 'Kanit',sans-serif;
  padding: 5px 0px;
`;

const YellowLink = styled.a`
  font-family: 'Kanit',sans-serif;
  padding: 5px 0px;
`

const FooterDivider = styled.div`
  height: 1px;
  background-color: #fff;
  width: 20px;
  margin-bottom: 15px;
`

const FooterSpacing = styled.div`
  height: 150px;
  @media (max-width: 848px) {
    height: 500px;
  }
`

export default function Footer() {
    return (
        <>
        <FooterSpacing />
        <div style={{ position: 'absolute', bottom: '0px', width: '100%', color: '#fff', backgroundColor: '#27262d', padding: '30px 0px', margin: '50px 0px 0px 0px' }}>
            <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
                <Box sx={{ p: '10px 40px' }}>
                <Typography variant="h3" sx={{ fontFamily: "'Kanit',sans-serif", color: '#9a6aff', fontSize: '17px', fontWeight: 'bold' }}>
                    ABOUT
                </Typography>
                <StyledUl>
                    {footerLinks.column1.map((link) => <StyledLi key={link.label}><a href={link.href} target="_blank" rel="noop noreferrer">{link.label}</a></StyledLi>)}
                </StyledUl>
                </Box>
            </Grid>
            <Grid item md={3} xs={12}>
                <Box sx={{ p: '10px 40px' }}>
                <Typography variant="h3" sx={{ fontFamily: "'Kanit',sans-serif", color: '#9a6aff', fontSize: '17px', fontWeight: 'bold' }}>
                    HELP
                </Typography>
                <StyledUl>
                    {footerLinks.column2.map((link) => <StyledLi key={link.label}><a href={link.href} target="_blank" rel="noop noreferrer">{link.label}</a></StyledLi>)}
                </StyledUl>
                </Box>
            </Grid>
            <Grid item md={3} xs={12}>
                <Box sx={{ p: '10px 40px' }}>
                <Typography variant="h3" sx={{ fontFamily: "'Kanit',sans-serif", color: '#9a6aff', fontSize: '17px', fontWeight: 'bold' }}>
                    DEVELOPERS
                </Typography>
                <StyledUl>
                    {footerLinks.column3.map((link) => <StyledLi key={link.label}><a href={link.href} target="_blank" rel="noop noreferrer">{link.label}</a></StyledLi>)}
                </StyledUl>
                </Box>
            </Grid>
            <Grid item md={3} xs={12}>
                <Box sx={{ p: '10px 40px' }}>
                <a href="https://www.universalfloki.com/" aria-label="Pancake home page" className="sc-khQegj eSQmdh">
                    <svg viewBox="0 0 105 26" className="mobile-icon" color="text" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <image width="100%" height="26" href="/images/156x25.svg" />
                    </svg>
                    <svg viewBox="0 0 105 26" className="desktop-icon" color="text" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <image width="100%" height="26" href="/images/156x25.svg" />
                    </svg>
                </a>
                </Box>
            </Grid>
            </Grid>

            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{ p: '10px 40px' }}>
                <FooterDivider />
                <YellowLink href='https://pancakeswap.info' target="_blank" rel="noop noreferrer" style={{ color: '#ffb237' }}>Online Store</YellowLink>
                </Box>
            </Grid>
            </Grid>
        </div>
        </>
    )
}
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import NavBarLink from './NavBarLink';
import Link from 'next/link';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{
          backgroundColor: "black"
        }}>
          <Link href="/" style={{textDecoration: 'none', color: 'white'}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
              sx={{ mr: 2, textDecoration: 'none' }}
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <NavBarLink href={"/about"} text={"About"} />
          <NavBarLink href={"/resume"} text={"Resume"} />
          <NavBarLink href={"/blog"} text={"Blog"} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

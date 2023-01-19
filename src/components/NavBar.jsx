import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1} }>
          <AppBar position="static">
            <Toolbar sx={{backgroundColor: "black"}}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="home"
                sx={{ mr: 2 }}
                href="/"
              >
                <HomeIcon />
              </IconButton>
              <Button variant="text" href="/about" sx={{ flexGrow: 1 }}>
                About
              </Button>
              <Button variant="text" href="/resume" sx={{ flexGrow: 1 }}>
                Resume
              </Button>
              <Button variant="text" href="/projects" sx={{ flexGrow: 1 }}>
                Projects
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default NavBar;
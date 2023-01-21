"use client"
import { Typography } from '@mui/material';
import colours from '../../components/Colours';
import CentreButton from '@/components/common/CentreButton';

const Landing = () => {
    const splashBackgroundStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '-100',
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url("/landing/2021-09-18.3.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        opacity: '0.4'
    }

    const splashWordStyle = {
        position: 'relative',
        display: 'block',
        top: '30vh',
        color: colours.lightText,
        textAlign: 'center',
        fontFamily: `Playfair Display SC, serif`
    }
    
    return (<>
        <div style={splashBackgroundStyle}></div>
        <Typography variant="h4" style={splashWordStyle}>Dylan Barkowsky</Typography>
        <CentreButton text={"DIVE IN"}/>
    </>);
};

export default Landing;
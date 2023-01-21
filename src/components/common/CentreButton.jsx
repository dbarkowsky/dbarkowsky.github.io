import { Typography, Button } from "@mui/material";
import colours from '../Colours';

const CentreButton = ({text}) => {
    const ButtonStyle = {
        position: 'relative',
        display: 'block',
        top: '40vh',
        width: 'fit-content',
        margin: 'auto',
        padding: '8px',  
    }

    return (
        <Button 
            variant="outlined" 
            style={ButtonStyle} 
            href="/about"
            sx={{
                color: colours.lightText,
                border: `3px solid ${colours.lightText}`,
                '&:hover': {
                    color: colours.darkText,
                    border: `3px solid ${colours.darkText}`,
                    backgroundColor: colours.lightBackground
                }
            }}> 
            <Typography 
                variant='button'
                align='center'
                sx={{
                    fontFamily: 'Passion One, sans-serif',
                    fontSize: '1.5em',
                    fontWeight: '500',
                    lineHeight: '0.75',
                }}>
                {text}
            </Typography>
        </Button>
    );
}

export default CentreButton;
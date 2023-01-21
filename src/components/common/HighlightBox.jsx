import { Box } from '@mui/material';
import colours from '../Colours';


const HighlightBox = ({title, text, imgSrc}) => {
    return (
        <Box sx={{
            backgroundColor: colours.highlight,
            padding: '5px 1em',
            borderRadius: '3px'
        }}>
            <h3>{title}</h3>
            <img src={imgSrc} style={{
                width: '100%',
                borderRadius: '5px'
            }}></img>
            <p>{text}</p>
        </Box>
    );
}

export default HighlightBox;
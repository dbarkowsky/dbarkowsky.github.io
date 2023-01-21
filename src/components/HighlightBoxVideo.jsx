import { Box } from '@mui/material';
import colours from './Colours';


const HighlightBoxVideo = ({title, text, videoSrc}) => {
    return (
        <Box sx={{
            backgroundColor: colours.highlight,
            padding: '5px 1em',
            borderRadius: '3px'
        }}>
            <h3>{title}</h3>
            <video src={videoSrc} muted autoPlay loop style={{
                width: '100%',
                borderRadius: '5px'
            }}/>
            <p>{text}</p>
        </Box>
    );
}

export default HighlightBoxVideo;
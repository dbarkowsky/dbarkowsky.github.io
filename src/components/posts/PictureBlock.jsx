import Grid from "@mui/material/Unstable_Grid2";
import colours from "../Colours";

const PictureBlock = ({path, subtitle}) => {
    const noPaddingStyle = { padding: '0', marginBottom: '1em' };
    const subtitleStyle = {
        position: 'relative',
        bottom: '32px',
        backgroundColor: colours.darkBackground,
        color: colours.lightBackground,
        borderRadius: '0 0 0 10px',
        padding: '5px',
        fontSize: '12pt'
    }
    return (
        <Grid container spacing={1} xs={12} sx={noPaddingStyle}>
            <img src={path} style={{
                width: '100%',
                borderRadius: '10px'
            }}/>
            {subtitle ? <div style={subtitleStyle}>{subtitle}</div> : <></>}
        </Grid>
    );
}

export default PictureBlock;
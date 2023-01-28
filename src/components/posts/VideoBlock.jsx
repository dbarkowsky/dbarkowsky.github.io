import Grid from "@mui/material/Unstable_Grid2";

const VideoBlock = ({ path }) => {
    const noPaddingStyle = { padding: '0' };

    return (
        <Grid container spacing={1} xs={12} sx={noPaddingStyle}>
            <iframe 
                src={path} 
                style={{
                    width: "100%",
                    height: "320px"
                }} 
                title="YouTube video player" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
        </Grid>
    );
}

export default VideoBlock;
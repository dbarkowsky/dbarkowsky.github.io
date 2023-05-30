import Grid from '@mui/material/Unstable_Grid2';

const SubtitleBlock = ({ children }) => {
    const noPaddingStyle = { padding: '0' };
    return (
        <Grid xs={12} sx={noPaddingStyle}>
            <h3 style={{ marginBottom: '14px' }}>{children}</h3>
        </Grid>
    );
}

export default SubtitleBlock;

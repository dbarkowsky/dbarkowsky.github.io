import Grid from '@mui/material/Unstable_Grid2';

const TitleBlock = ({children}) => {
    const noPaddingStyle = { padding: '0' };
    return (
        <Grid xs={12} sx={noPaddingStyle}>
            <h2 style={{ marginBottom: '0' }}>{children}</h2>
        </Grid>
    );
}

export default TitleBlock;
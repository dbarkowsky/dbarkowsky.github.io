import Grid from '@mui/material/Unstable_Grid2';


const DateBlock = ({children}) => {
    const noPaddingStyle = { padding: '0' };
    return (
        <Grid xs={12} sx={noPaddingStyle}>
            <h4 style={{ marginTop: '0', fontStyle: 'italic' }}>{children}</h4>
        </Grid>
    );
}

export default DateBlock;
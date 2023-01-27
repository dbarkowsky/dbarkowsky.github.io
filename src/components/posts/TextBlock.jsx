import Grid from "@mui/material/Unstable_Grid2";

const TextBlock = ({children}) => {

    return (
        <Grid container spacing={1} xs={12} 
            sx={{ margin: '0.75em 0', padding: '0', textAlign: 'justify' }}>
            <p style={{ margin: '0' }}>{children}</p>
        </Grid>
    );
}

export default TextBlock;
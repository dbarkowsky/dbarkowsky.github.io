import Grid from '@mui/material/Unstable_Grid2';

const EducationBlock = ({certificate, issuer, date, blurb}) => {
    return (
        <Grid container spacing={1} sx={{
            margin: 0
        }}>
            <Grid xs={12}>
                <h4 style={{ fontWeight: '600', margin: '0 auto' }}>{certificate}</h4>
            </Grid>
            <Grid xs={12} md={6} sx={{ fontStyle: 'italic' }}>
              {issuer}
              <br/>
              {date}
            </Grid>
            <Grid xs={12} md={6} style={{ fontSize: '12pt' }}>
                {blurb}
            </Grid>
        </Grid>
    );
}

export default EducationBlock;
import Grid from '@mui/material/Unstable_Grid2';

const JobBlock = ({title, employer, location, startDate, endDate, points}) => {
    return (
        <Grid container spacing={1} sx={{
            margin: 0
        }}>
            <Grid xs={12}>
                <h4 style={{ fontWeight: '600', margin: '0 auto' }}>{title}</h4>
            </Grid>
            <Grid xs={12} sm={6} sx={{ fontStyle: 'italic' }}>
              {employer}
              <br/>
              {location}
              <br/>
              {`${startDate.getFullYear()}/${startDate.getMonth()} : ${endDate.getFullYear()}/${endDate.getMonth()}`}
            </Grid>
            <Grid xs={12} sm={6}>
                <ul style={{ margin: '0 auto', fontSize: '12pt', paddingLeft: '1em' }}>
                {
                    points.map((point, index) => <li key={index}>{point}</li>)
                }
                </ul>
            </Grid>
        </Grid>
    );
}

export default JobBlock;
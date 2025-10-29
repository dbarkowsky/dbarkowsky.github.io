import Grid from '@mui/material/Unstable_Grid2';

const JobBlock = ({ title, employer, location, startDate, endDate, points }) => {
  return (
    <Grid container spacing={1} sx={{
      margin: '15px 0px',
      border: '1px solid ',
      borderColor: '#00000042',
      borderRadius: '5px',
      transition: '0.2s',
      '&:hover': {
        backgroundColor: '#0821141a',
      }
    }}>
      <Grid xs={12}>
        <h4 style={{ fontWeight: '600', margin: '0 auto' }}>{title}</h4>
      </Grid>
      <Grid xs={12} sm={6} sx={{ fontStyle: 'italic' }}>
        {employer}
        <br />
        {location}
        <br />
        {
          endDate
            ? `${startDate.getFullYear()}/${startDate.getMonth() + 1} : ${endDate.getFullYear()}/${endDate.getMonth() + 1}`
            : `${startDate.getFullYear()}/${startDate.getMonth() + 1} : Ongoing`
        }
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
};

export default JobBlock;

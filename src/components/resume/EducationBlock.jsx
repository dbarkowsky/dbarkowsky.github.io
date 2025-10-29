import Grid from '@mui/material/Unstable_Grid2';

const EducationBlock = ({ certificate, issuer, date, blurb }) => {
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
        <h4 style={{ fontWeight: '600', margin: '0 auto' }}>{certificate}</h4>
      </Grid>
      <Grid xs={12} sm={6} sx={{ fontStyle: 'italic' }}>
        {issuer}
        <br />
        {date}
      </Grid>
      <Grid xs={12} sm={6} style={{ fontSize: '12pt' }}>
        {blurb}
      </Grid>
    </Grid>
  );
};

export default EducationBlock;

"use client"

import Grid from '@mui/material/Unstable_Grid2';
import colours from '../../components/Colours';

const About = () => {
    return (
        <Grid container spacing={2} padding="2em" sx={{
            backgroundColor: colours.containerBackground,
            margin: 0
        }}>
            <Grid xs={12}>
                Testing
            </Grid>
            <Grid xs={8}>
                Left
            </Grid>
            <Grid xs={4}>
                Right
            </Grid>
        </Grid>
    );
}

export default About;
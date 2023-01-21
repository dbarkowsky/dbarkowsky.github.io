"use client"

import Grid from '@mui/material/Unstable_Grid2';
import colours from '../../components/Colours';
import EducationBlock from '@/components/resume/EducationBlock';

const Resume = () => {
    return (
        <Grid container spacing={2} padding="2em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
        <Grid xs={12} sx={{
            borderBottom: `1px solid ${colours.darkBackground}`
        }}>
            <EducationBlock 
                certificate={"Information & Computer Systems Diploma"}
                issuer={"Camosun College"}
                date={"2023"}
                blurb={"This is a blurb"}
            />
        </Grid>
            
        </Grid>
    );
}

export default Resume;
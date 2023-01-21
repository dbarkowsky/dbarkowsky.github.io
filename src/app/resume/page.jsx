"use client"

import Grid from '@mui/material/Unstable_Grid2';
import colours from '../../components/Colours';
import EducationBlock from '@/components/resume/EducationBlock';
import JobBlock from '@/components/resume/JobBlock';

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
            <Grid xs={12} sx={{
                borderBottom: `1px solid ${colours.darkBackground}`
            }}>
                <JobBlock 
                    title={"Parking Ambassador"}
                    employer={"City of Victoria"}
                    location={"Victoria, BC"}
                    startDate={"2017/08"}
                    endDate={"2020/02"}
                    points={[
                        "Identifying and enforcing parking-related infractions",
                        "Educating the public and responding to inquiring",
                        "De-escalating high-conflict scenarios"
                    ]}
                />
            </Grid>
        </Grid>
    );
}

export default Resume;
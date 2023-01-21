"use client"

import Grid from '@mui/material/Unstable_Grid2';
import colours from '../../components/Colours';
import EducationBlock from '@/components/resume/EducationBlock';
import JobBlock from '@/components/resume/JobBlock';
import jobs from '@/data/jobs';
import education from '@/data/education';

const Resume = () => {
    return (
        <Grid container spacing={2} padding="2em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <Grid xs={12} sx={{
                borderBottom: `1px solid ${colours.darkBackground}`
            }}>
                {
                    education
                    .sort((a, b) => {
                        // Sort by importance first, then descending date
                        if (a.importance === b.importance){
                            return b.date - a.date;
                        }
                        return b.importance - a.importance;
                    }).map(item => (
                        <EducationBlock
                            key={item.certificate}
                            certificate={item.certificate}
                            issuer={item.issuer}
                            date={item.date}
                            blurb={item.blurb}
                        />
                    ))
                }
            </Grid>
            <Grid xs={12} sx={{
                borderBottom: `1px solid ${colours.darkBackground}`
            }}>
                {
                    jobs
                    .sort((a, b) => b.startDate - a.startDate)
                    .map(job => (
                        <JobBlock
                            key={job.title}
                            title={job.title}
                            employer={job.employer}
                            location={job.location}
                            startDate={job.startDate}
                            endDate={job.endDate}
                            points={job.points}
                        />
                    ))
                }
            </Grid>
        </Grid>
    );
}

export default Resume;
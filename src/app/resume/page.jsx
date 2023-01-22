"use client"

import Grid from '@mui/material/Unstable_Grid2';
import colours from '../../components/Colours';
import EducationBlock from '@/components/resume/EducationBlock';
import JobBlock from '@/components/resume/JobBlock';
import jobs from '@/data/jobs';
import education from '@/data/education';
import { soft, software, technical } from '@/data/skills';
import SkillBlock from '@/components/resume/SkillBlock';

const Resume = () => {
    const verticalSectionStyle = {
        borderBottom: `1px solid ${colours.darkBackground}`
    }

    const headingMarginKiller = { marginTop: '0', marginBottom: '0' }

    const sortByRating = (a, b) => b.rating - a.rating;

    return (
        <Grid container spacing={2} padding="2em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <Grid xs={12}>
                <h1 style={headingMarginKiller}>Dylan Barkowsky</h1>
                <p>Looking for a PDF? Download a copy <a href={'/resume/Resume.pdf'}>here</a>.</p>
            </Grid>
            <Grid xs={12} md={6}>
                {/* Contact Info */}
            </Grid>
            <Grid xs={12} md={6}>
                {/* Links to github, linkedIn */}
            </Grid>
            <Grid xs={12} md={4}>
                <h3>Technical Skills</h3>
                {
                    technical
                        .sort(sortByRating)
                        .map((skill, index) => <SkillBlock key={index} {...{skill}}/>)
                }
            </Grid>
            <Grid xs={12} md={4}>
                <h3>Software Skills</h3>
                {
                    software
                        .sort(sortByRating)
                        .map((skill, index) => <SkillBlock key={index} {...{skill}}/>)
                }
            </Grid>
            <Grid xs={12} md={4}>
                <h3>Soft Skills</h3>
                {
                    soft
                        .sort(sortByRating)
                        .map((skill, index) => <SkillBlock key={index} {...{skill}}/>)
                }
            </Grid>
            <Grid xs={12} sx={verticalSectionStyle}></Grid>
            <Grid xs={12} sx={verticalSectionStyle}>
                <h2 style={headingMarginKiller}>Education</h2>
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
            <Grid xs={12} sx={verticalSectionStyle}>
                <h2 style={headingMarginKiller}>Employment</h2>
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
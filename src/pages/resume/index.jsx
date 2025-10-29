"use client";

import Grid from '@mui/material/Unstable_Grid2';
import colours from '../../components/Colours';
import EducationBlock from '@/components/resume/EducationBlock';
import JobBlock from '@/components/resume/JobBlock';
import jobs from '@/data/jobs';
import education from '@/data/education';
import awards from '@/data/awards';
import * as skills from '@/data/skills';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import Colours from '../../components/Colours';
import NewSkillBlock from '@/components/resume/NewSkillBlock';

const Resume = () => {
  const verticalSectionStyle = {
    borderBottom: `1px solid ${colours.darkBackground}`
  };

  const headingMarginKiller = { marginTop: '0', marginBottom: '0.5em' };

  const sortByRating = (a, b) => b.rating - a.rating;

  const smallIconStyle = {
    verticalAlign: 'middle',
    paddingRight: '5px'
  };

  return (
    <Grid container spacing={2} padding="1em" sx={{
      backgroundColor: colours.lightBackground,
      margin: 0,
    }}>
      <Grid xs={12} >
        <h1 style={headingMarginKiller}>Dylan Barkowsky</h1>
      </Grid>
      <Grid container spacing={2} xs={12} padding="0 1em" sx={{
        fontSize: '12pt'
      }}>
        {/* <Grid xs={12} >
                    <span>Looking for a PDF? Download a copy <a href={'/resume/Resume.pdf'}>here</a>.</span>
                </Grid> */}
        <Grid xs={12} md={5} sx={{ lineHeight: '10px', alignItems: 'center' }}>
          <EmailIcon sx={smallIconStyle} />
          <span style={{ marginBottom: '10px' }}>dylanbarkowsky@gmail.com</span>
        </Grid>
        <Grid xs={12} md={3}>
          <PhoneIcon sx={smallIconStyle} />
          780.237.5172
        </Grid>
      </Grid>
      <Grid xs={12}>
        <Link href='https://github.com/dbarkowsky'>
          <IconButton size='large'>
            <GitHubIcon fontSize='large' style={{ color: Colours.darkBackground }} />
          </IconButton>
        </Link>
        <Link href='https://www.linkedin.com/in/dylan-barkowsky-93469370/'>
          <IconButton size='large'>
            <LinkedInIcon fontSize='large' style={{ color: Colours.darkBackground }} />
          </IconButton>
        </Link>

      </Grid>
      <Grid xs={12} sx={verticalSectionStyle} display={'flex'} flexDirection={'column'}>
        <h2 style={headingMarginKiller}>Skills</h2>
        <h3 style={headingMarginKiller}>Languages & Libraries</h3>
        <Grid container xs={12} gap={1} marginBottom={3}>
          {skills.langsAndLibraries
            .filter(a => !a.hidden)
            .sort((a, b) => b.rating - a.rating)
            .map((a) => <NewSkillBlock key={a.text} text={a.text} logo={a.logo} logoColour={a.logoColour} rating={a.rating} link={a.link} />)}
        </Grid>
        <h3 style={headingMarginKiller}>Platforms & Infrastructure</h3>
        <Grid container xs={12} gap={1} marginBottom={3}>
          {skills.platformsAndInfrastructure
            .filter(a => !a.hidden)
            .sort((a, b) => b.rating - a.rating)
            .map((a) => <NewSkillBlock key={a.text} text={a.text} logo={a.logo} logoColour={a.logoColour} rating={a.rating} link={a.link} />)}
        </Grid>
        <h3 style={headingMarginKiller}>Databases</h3>
        <Grid container xs={12} gap={1} marginBottom={3}>
          {skills.databases
            .filter(a => !a.hidden)
            .sort((a, b) => b.rating - a.rating)
            .map((a) => <NewSkillBlock key={a.text} text={a.text} logo={a.logo} logoColour={a.logoColour} rating={a.rating} link={a.link} />)}
        </Grid>
        <h3 style={headingMarginKiller}>Tools</h3>
        <Grid container xs={12} gap={1} marginBottom={3}>
          {skills.tools
            .filter(a => !a.hidden)
            .sort((a, b) => b.rating - a.rating)
            .map((a) => <NewSkillBlock key={a.text} text={a.text} logo={a.logo} logoColour={a.logoColour} rating={a.rating} link={a.link} />)}
        </Grid>
      </Grid>

      <Grid xs={12} sx={verticalSectionStyle}>
        <h2 style={headingMarginKiller}>Employment</h2>
        {
          jobs
            .filter((a) => !a.hidden)
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
      <Grid xs={12} sx={verticalSectionStyle}>
        <h2 style={headingMarginKiller}>Education</h2>
        {
          education
            .filter((a) => !a.hidden)
            .sort((a, b) => {
              // Sort by importance first, then descending date
              if (a.importance === b.importance) {
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
        <h2 style={headingMarginKiller}>Awards</h2>
        {
          awards
            .sort((a, b) => {
              return b.date - a.date;
            }).map(item => (
              <EducationBlock
                key={item.award}
                certificate={item.award}
                issuer={item.issuer}
                date={item.date}
                blurb={item.blurb}
              />
            ))
        }
      </Grid>
    </Grid>
  );
};

export default Resume;

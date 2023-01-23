"use client"

import PostBlock from "@/components/posts/PostBlock";
import Grid from '@mui/material/Unstable_Grid2';
import colours from '../../components/Colours';
import posts from "@/data/posts";
import { Divider } from "@mui/material";

const Projects = () => {
    let post = posts[0];

    const noPaddingStyle = { padding: '0' };
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <Grid xs={12} sx={noPaddingStyle}>
            <Divider textAlign="left" sx={{ fontSize: '16pt', margin: '1em 0' }}>2023</Divider>
                <Grid container spacing={2} sx={noPaddingStyle}>
                    <Grid xs={12} sm={6} md={4}><PostBlock {...post}/></Grid>
                    <Grid xs={12} sm={6} md={4}><PostBlock {...post}/></Grid>
                    <Grid xs={12} sm={6} md={4}><PostBlock {...post}/></Grid>
                    <Grid xs={12} sm={6} md={4}><PostBlock {...post}/></Grid>
                    <Grid xs={12} sm={6} md={4}><PostBlock {...post}/></Grid>
                </Grid>
                
            </Grid>
        </Grid>
    );
}

export default Projects;
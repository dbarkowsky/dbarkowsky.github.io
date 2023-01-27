"use client"

import PostBlock from "@/components/posts/PostBlock";
import Grid from '@mui/material/Unstable_Grid2';
import colours from '../../components/Colours';
import posts from "@/data/posts";
import { Divider } from "@mui/material";

const Projects = () => {
    const yearList = new Set(posts.map(post => post.date.getFullYear()).sort((a, b) => b - a));
    const noPaddingStyle = { padding: '0' };

    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
        {
            Array.from(yearList).map(year => {
                const yearsPosts = posts
                    .filter(post => post.date.getFullYear() == year)
                    .sort((a, b) => b.date - a.date);
                return (
                    <Grid key={year} xs={12} sx={noPaddingStyle}>
                    <Divider textAlign="left" sx={{ fontSize: '16pt', margin: '1em 0' }}>{year}</Divider>
                        <Grid container spacing={2} sx={noPaddingStyle}>
                        {
                            yearsPosts.map(post => <Grid key={post.title} xs={12} sm={6} md={4}><PostBlock {...post}/></Grid>)
                        }
                        </Grid>
                    </Grid>
                );
            })
        }
        </Grid>
    );
}

export default Projects;
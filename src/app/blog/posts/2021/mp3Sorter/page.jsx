"use client"

import Grid from '@mui/material/Unstable_Grid2';
import colours from '@/components/Colours';
import PictureBlock from '@/components/posts/PictureBlock';
import TextBlock from '@/components/posts/TextBlock';
import TitleBlock from '@/components/posts/TitleBlock';
import DateBlock from '@/components/posts/DateBlock';
import posts from '@/data/posts';
import SubtitleBlock from '@/components/posts/SubtitleBlock';

const MP3Sorter = () => {
    const currentPost = posts.find(post => post.title == "mp3 Sorter");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString()}</DateBlock>

            <SubtitleBlock>The Dilemma</SubtitleBlock>
            <TextBlock>As always, follow this link to see the <a href={currentPost.paths.code}>GitHub repository.</a></TextBlock>
            <TextBlock>Perhaps you’ve found yourself in a similar position: your media library is constantly growing, but somehow the result has been a heap of loose files in your music folder — no artist or album folders at all.</TextBlock>
            <PictureBlock path={'/posts/2021/mp3Sorter/before.png'} subtitle={'Before'}/>
            <TextBlock>I recently had this dilemma, and the thought of manually creating folders and sorting them all into their proper locations seemed like a painful task.</TextBlock>
            <TextBlock>Instead, I opted to take what I had recently been learning in Python to create a less intensive — and more fun — solution to this problem.</TextBlock>
            <PictureBlock path={'/posts/2021/mp3Sorter/after.png'} subtitle={'After'}/>

            <SubtitleBlock>What does it do?</SubtitleBlock>
            <TextBlock>At its core, the script checks each file for an artist, creates a matching folder, then plops that files where it belongs. The real key to accessing the artist information was with the eye3D package. With this, it was easy to grab metadata from music files and put it to use.</TextBlock>
            <TextBlock>For my immediate use, this worked like a charm, and I was satisfied—at first. Now I have a to-do list of features that I’m hoping to add.</TextBlock>

            <SubtitleBlock>To-Do</SubtitleBlock>
            <ul>
                <li>
                    <b>A decent GUI</b>
                    <ul>
                        <li>I&apos;m thinking of using &apos;tkinter&apos; for this.</li>
                    </ul>
                </li>
                <li>
                    <b>An option to select file paths</b>
                    <ul>
                        <li>Right now, you place it in the desired folder and run from there.</li>
                    </ul>
                </li>
                <li>
                    <b>Album folders</b>
                    <ul>
                        <li>Why not? eye3D should continue to be useful here.</li>
                    </ul>
                </li>
                <li>
                    <b>Interjections</b>
                    <ul>
                        <li>If there&apos;s no metadata, let&apos;s allow the user to add some.</li>
                    </ul>
                </li>
                <li>
                    <b>Other filetypes</b>
                    <ul>
                        <li>I targeted only mp3 files to keep it simple, but why not expand the scope?</li>
                    </ul>
                </li>
            </ul>
            
            <SubtitleBlock>Update:</SubtitleBlock>
            <TextBlock>I worked on this more over Christmas 2021. You can see the updated post <a href={'/blog/posts/2022/mp3Sorter2'}>at this link.</a></TextBlock>
        </Grid>
    );
}

export default MP3Sorter;
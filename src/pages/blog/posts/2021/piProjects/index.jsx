"use client"

import Grid from '@mui/material/Unstable_Grid2';
import colours from '@/components/Colours';
import TextBlock from '@/components/posts/TextBlock';
import TitleBlock from '@/components/posts/TitleBlock';
import DateBlock from '@/components/posts/DateBlock';
import posts from '@/data/posts';
import SubtitleBlock from '@/components/posts/SubtitleBlock';
import VideoBlock from '@/components/posts/VideoBlock';
import PictureCombo from '@/components/posts/PictureCombo';

const MP3Sorter2 = () => {
    const currentPost = posts.find(post => post.title == "Raspberry Pi Projects");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString()}</DateBlock>

            <TextBlock>This year, I took a course at Camosun called OS and Architecture (ICS-113). The course focused on a lot of interesting concepts including memory management, error correction, and virtual machines, but the most satisfaction came from our work with Python and the Raspberry Pi.</TextBlock>
            <SubtitleBlock>Button Counter</SubtitleBlock>
            <TextBlock>The first experience with the Pi tasked us with programming some simple button presses. This was a big step into learning how to manipulate the Pi-Hat that contained all of our IO elements, but it was a good introduction on how we define elements such as physical buttons, lights, and how to interact physically with the code.</TextBlock>
            <TextBlock>The desired output was pretty simple. One button counted upwards and another reset the counter. Corresponding to the current counter value, there were three LED lights</TextBlock>
            <ul>
                <li>Even number = green light</li>
                <li>Odd number = red light</li>
                <li>Power of 2 = yellow light</li>
            </ul>
            <TextBlock>This was a rewarding start and good experience for the next project.</TextBlock>
            <VideoBlock path={"https://www.youtube.com/embed/4HOLjqZTVoc"}/>            

            <SubtitleBlock>Temperature Sensor & Web Server</SubtitleBlock>
            <TextBlock>Soon after, we had another Pi task. This time it involved incorporating another piece of the Pi-Hat: the temperature sensor. Better yet, we had to be able to reach the output via the browser on another computer.</TextBlock>
            <PictureCombo imgPath={currentPost.paths.img} side={"left"}>
                <TextBlock>The nice part was that, with the right modules installed, the Pi produced a file with the most recent temperature. We used one Python file to receive and encode the output from the Pi and another file to analyze that output and perform our desired operations.</TextBlock>
                <TextBlock>The output here needed lights as well:</TextBlock>
                <ul>
                    <li>Rising temperature = red light</li>
                    <li>Falling temperature = green light</li>
                    <li>Stable temperature = yellow light</li>
                </ul>
                <TextBlock>This meant that I had to store the temperature in another file each refresh and pull that number back to check against the current temperature. This part actually wasn&apos;t too bad.</TextBlock>
            </PictureCombo>
            <TextBlock>The hardest part came from the web server implementation. I used the mod_wsgi express module to run the main Python file, and after opening a few necessary ports, it was seemingly good to go.</TextBlock>
            <TextBlock>One last challenge: I was unaware the webpage was expecting an array of UTF-8 Strings. It took a lot of experimenting, researching, and reviewing the server logs, but eventually I got it to work. There&apos;s nothing like the feeling of success after a tough challenge.</TextBlock>

            <SubtitleBlock>Next Ideas</SubtitleBlock>
            <TextBlock>Every New Year&apos;s, my wife and I carry on my wife&apos;s family tradition of putting on a Japanese dinner. It&apos;s a lot of work, but after so many years, we make a mean gyoza. She&apos;s often thought there was more we could do for delivery of the food, and then we discovered <a href='https://projects.raspberrypi.org/en/projects/rpi-python-line-following'>this link to a line following robot</a>.</TextBlock>
            <TextBlock>It&apos;s a hurdle, and I don&apos;t know if it&apos;s an achievable goal this season (especially considering holiday shipping times), but can you imagine this robot towing a small train of sushi? Sounds like a good time.</TextBlock>
        </Grid>
    );
}

export default MP3Sorter2;
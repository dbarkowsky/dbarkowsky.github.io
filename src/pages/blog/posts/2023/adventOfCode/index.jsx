"use client"

import Grid from '@mui/material/Unstable_Grid2';
import colours from '@/components/Colours';
import PictureBlock from '@/components/posts/PictureBlock';
import TextBlock from '@/components/posts/TextBlock';
import TitleBlock from '@/components/posts/TitleBlock';
import DateBlock from '@/components/posts/DateBlock';
import posts from '@/data/posts';
import SubtitleBlock from '@/components/posts/SubtitleBlock';
import PictureCombo from '@/components/posts/PictureCombo';

const AdventOfCode = () => {
    const currentPost = posts.find(post => post.title == "Advent of Code 2022");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString()}</DateBlock>

            <TextBlock>As always, follow this link to see the <a href={currentPost.paths.code}>GitHub repository.</a></TextBlock>

            <TextBlock>This December I took part in a fun challenge known as Advent of Code. If you&apos;re not familiar with it, it is a free event where a different coding challenge is released each day from December 1st to 25th, just like an advent calendar. Each challenge has two parts, and each part rewards you with a star. Collect all 50 stars to complete the challenge for the year. There is also a little storyline that goes along with it to keep it all lighthearted. Forgive me if this post is a little wordy. There&apos;s not much of a visual aspect to these challenges.</TextBlock>
            <PictureCombo imgPath={'/posts/2023/adventOfCode/input.png'}>
                <TextBlock>The interesting part is that any of these challenges is doable in a multitude of different ways. They often require you to think outside the box, and you&apos;ll often have to employ some various algorithms to make things work. Your input is uniquely generated for you, so there&apos;s no sharing answers, although code is discussed online quite frequently. To the right (or down on mobile) is an example of the sample input they gave for one day. It is much smaller than your generated input, but it usually serves as a good test to see if your code is working as expected.</TextBlock>
            </PictureCombo>
            <TextBlock>This was my first year doing this, and I&apos;m glad I did. I chose to use JavaScript because I wasn&apos;t sure how tough the challenges were going to be and it&apos;s my most proficient language. I also wanted to have access to Node packages if needed, although that didn&apos;t really come up. </TextBlock>
            <TextBlock>At first they started as easy challenges that could be completed each night in no more than an hour or two. By day 11, I finally hit my first roadblock with part 2. The challenge involved a group of monkeys passing your stuff around, which was fine to calculate the outcome of when there were only a few rounds, but part 2 asked for something which would cause most integers to overflow. This is where I wish my math skills were a little stronger, but it has been a long time since grade school. Eventually I had to look and see how other people online were addressing this. I&apos;m not sure I would have ever gotten the solution without this research, but I&apos;m not too distressed. I would have liked to have done this on my own, but looking at some of the genius solutions others had to each day&apos;s challenge was a learning experience that I didn&apos;t consider at first. </TextBlock>
            

            <SubtitleBlock>Algorithms</SubtitleBlock>
            <TextBlock>I&apos;ve taken courses centred on algorithms in school before, but it seems like they were more concerned with data structures. Many of these challenges required algorithms like depth-first, breadth-first, Dijkstra&apos;s, and others that were mostly new to me. The concepts weren&apos;t crazy, but I didn&apos;t have much practice implementing them in real problems. </TextBlock>
            <TextBlock>That&apos;s what I think Advent of Code really helped me with. There&apos;s a lot of algorithm learning that I could be doing, and I think it would make me a better problem solver to be able to recognise when to use them. When my courses are over, I&apos;ll be picking up a book and exploring more of this.</TextBlock>

            <SubtitleBlock>Outcome</SubtitleBlock>
            <PictureCombo side='left' imgPath={'/posts/2023/adventOfCode/stats.png'}>
                <TextBlock>After a wedding trip and a vacation to Seattle, I didn&apos;t manage to stay on track for one problem per day. Some challenges, like the dice puzzle, were not one-day challenges anyway. In early January, I did manage to finish the last puzzle. Some of these puzzles, like the pattern recognition in the falling rocks, were extremely rewarding upon completion. Still, you can see in this picture how quickly the number of people who completed each challenge dropped off. Gold is for people who completed both parts of each challenge, while silver is for only one part.</TextBlock>
            </PictureCombo>
            <TextBlock>Please feel free to check out the GitHub repository. I&apos;ve included my inputs so you can try them out as well. I also made an effort to break each day into its own class with detailed comments, so if you&apos;re having difficulty, I hope you can use these to get you through the puzzles as well. I will definitely be giving this a go next year, perhaps in a different language. </TextBlock>

            <TextBlock>As a result of solving every challenge, this is my final image:</TextBlock>
            <PictureBlock path={'/posts/2023/adventOfCode/finished.png'}/>
        </Grid>
    );
}

export default AdventOfCode;
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

const BombAssistant = () => {
    const currentPost = posts.find(post => post.title == "Bomb Assistant");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString()}</DateBlock>

            <TextBlock>It&apos;s finally finished! At the beginning of the year, I told myself that I would finish two personal projects. One of those ended up being SushiBot, which you can read about in older posts. The second one was BombAssistant, a companion application to assist with the game Keep Talking and Nobody Explodes. </TextBlock>
            <TextBlock>As always, follow this link to see the <a href={currentPost.paths.code}>GitHub repository.</a></TextBlock>

            <TextBlock>To repeat a bit of the project&apos;s README file: </TextBlock>
            <PictureCombo side='left' imgPath={'/posts/2022/bombAssistant/bomb.webp'} subtitle='The real game'>
                <TextBlock>Years ago, I played a lot of the game Keep Talking and Nobody Explodes with my wife. It&apos;s a cooperative video game where one person has a bomb and the other person has the manual that includes instructions on how to defuse that bomb. The players cannot see what the other player sees, so gameplay is all about good communication. Each bomb is made up of a series of modules, which are essentially little puzzles. Solve them all, and the bomb is defused.</TextBlock>
            </PictureCombo>
            <TextBlock>I generally fell in the manual position, but, despite the systems my partner and I had developed, decoding the manual was often the aspect that slowed us down the most. The goal of this app is to replace that manual, letting the app do the hard thinking instead.</TextBlock>
            <TextBlock>I originally planned to do this in Java. I had just finished a course that used Java GUIs, and I wanted to practice that. The problem with Java is that is wouldn&apos;t be easily accessible for others. Instead, I chose to make a site that is essentially static but with functions that would redraw portions of the page to give it that React feel. The biggest benefit of this is that I could host it for free using GitHub&apos;s environments, allowing access from anywhere.</TextBlock>

            <SubtitleBlock>Back to the Post</SubtitleBlock>
            <PictureCombo imgPath={'/posts/2022/bombAssistant/symbols.png'} subtitle='The Symbols module'>
                <TextBlock>I was super excited to start this one. That was back in January. What I found was that it wasn&apos;t easy to schedule in time to work on hobby projects when I also had school work, then a co-op, then more school work. Slowly, it felt like this project wasn&apos;t going to meet its end-of-year deadline that I self-imposed. </TextBlock>
            </PictureCombo>
            <TextBlock>My main concerns were making this page in a way that anyone could use it. I used a bit of Bootstrap to help keep it mobile friendly, and I tried to organize the logic of each module in a way that would guide the user forward without confusion. It should also take any opportunity to streamline the defusal manual. For example, the memory module takes the burden of remembering past inputs away from the user and just provides non-cryptic instructions.</TextBlock>
            <TextBlock>If you&apos;d like to see more detailed thoughts on each module, please check out the repository. To keep this post shorter, I&apos;ve included a little write up on every module there. I just want to talk about my favourite module, Mazes.</TextBlock>
            <PictureCombo imgPath={'/posts/2022/bombAssistant/mazes.png'}>
                <TextBlock>The Mazes module is pretty simple. You identify which maze layout you&apos;re using by selecting certain squares, you indicate a start point and an end point, then it fills in the path. Obviously this was something I couldn&apos;t just store all the possible outcomes for. I wanted a way to calculate the route. This was made a little easier by the fact there&apos;s only ever one route from point A to point B. My solution to this was to recursively probe down paths. If that one route failed, it would unwind back to a point where there were unexplored routes still to follow and try those instead. Eventually, it will find the target square and return a path that can be converted to directions for the user. I love recursive options. There&apos;s just something so satisfying about actually getting them to work.</TextBlock>
            </PictureCombo>

            <SubtitleBlock>Conclusion</SubtitleBlock>
            <TextBlock>As of writing, I still haven&apos;t used this with the actual game in order to win. There are still two achievements that my wife and I are missing. Until we get those legitimately, I think this app will stay on the shelf, but I am looking forward to smashing high scores with it after.</TextBlock>
            <PictureBlock path={'/posts/2022/bombAssistant/modules.png'} subtitle='All modules'/>
        </Grid>
    );
}

export default BombAssistant;
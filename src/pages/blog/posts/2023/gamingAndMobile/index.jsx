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

const Portfolio = () => {
    const currentPost = posts.find(post => post.title == "Game & Mobile Dev");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString('fr-CA')}</DateBlock>

            <TextBlock>Well, time has really flown by. I&apos;ve been busy with school, now I&apos;m also busy with work, but today I&apos;m writing to talk about two classes that are a little outside of my regular interests: Game Development and Mobile Apps.</TextBlock>

            <SubtitleBlock>Game Development</SubtitleBlock>
            <TextBlock>I actually enjoyed this class a lot more than I expected. Of course, I enjoy playing games, but even though I feel like I have a lot of game ideas, I don&apos;t see myself getting into this as a career. It doesn&apos;t help that the game design industry is notoriously volatile. This course focused entirely on development with Unity. Having done a Tetris build last year, this made things a lot easier. Rather than spout on about the course in general, I&apos;d like to highlight a few projects I made along the way.</TextBlock>

            <PictureCombo imgPath={'/posts/2023/gamingAndMobile/pong.png'}>
                <SubtitleBlock>Pong</SubtitleBlock>
                <TextBlock>The obvious place to start, Pong is a pretty simple affair of learning how to move objects in game based on player input, apply movement to non-controlled objects, and have objects interact with each other. Surprisingly, this is not a 2D version, but it does have that illusion. Only the 3D ball gives it away. </TextBlock>
            </PictureCombo>

            <PictureCombo imgPath={'/posts/2023/gamingAndMobile/platformer.png'}>
                <SubtitleBlock>3D Platformer</SubtitleBlock>
                <TextBlock>The obvious place to start, Pong is a pretty simple affair of learning how to move objects in game based on player input, apply movement to non-controlled objects, and have objects interact with each other. Surprisingly, this is not a 2D version, but it does have that illusion. Only the 3D ball gives it away. </TextBlock>
            </PictureCombo>

            <PictureCombo imgPath={'/posts/2023/gamingAndMobile/fps.png'}>
                <SubtitleBlock>First-person Shooter</SubtitleBlock>
                <TextBlock>This one was worked on in little bits over the course of the semester. Aspects such as a messenger system, enemy controllers, raycasting, and particle effects were all included. I went for a dark and spooky feel for the textures and lighting. </TextBlock>
            </PictureCombo>

            <PictureCombo imgPath={'/posts/2023/gamingAndMobile/platformer2.png'}>
                <SubtitleBlock>2D Platformer</SubtitleBlock>
                <TextBlock>I really enjoy the aesthetic of this one. The pixel art brings me back to the games of my childhood, and it was really simple to place tiles to make a level. Too bad making that pixel art is the hard part. </TextBlock>
            </PictureCombo>

            <PictureCombo imgPath={'/posts/2023/gamingAndMobile/ai.png'}>
                <SubtitleBlock>EnemyAI</SubtitleBlock>
                <TextBlock>This one isn&apos;t just one lab, but I thought it was too interesting to leave out. Using the NavMesh and NavMesh Agent components, it&apos;s surprisingly easy to make pathfinding for your enemy characters. The second part to this was creating states for the enemy, so they would transition from idle, patrol, chase, and attack states each with their own animations. </TextBlock>
            </PictureCombo>

            <SubtitleBlock>Mobile Apps</SubtitleBlock>
            <TextBlock>Admittedly, I don&apos;t think I warmed up to this topic as much. The idea of mobile app development is fine, but I&apos;m not a fan of Apple&apos;s practices in general, so the fact the class focused on iOS development was a bit of a drag. Even so, it had some good learning points. </TextBlock>
            <TextBlock>I actually enjoyed Swift as a language. It takes a bit of time to get used to, but the nil operators and type specification are nice to have. Plus, XCode does a lot of error checking that makes dealing with problems a breeze. What I still haven&apos;t warmed up to is SwiftUI. I did not find the documentation very intuitive, and every view component seems to want some poorly described parameters. To top it off, it doesn&apos;t look that great. </TextBlock>
            <TextBlock>Anyway, here&apos;s a few things I made for class:</TextBlock>

            <PictureCombo imgPath={'/posts/2023/gamingAndMobile/ladybug.png'}>
                <SubtitleBlock>Photo App</SubtitleBlock>
                <TextBlock>The entry app that was used for learning the SwiftUI basics. It takes photos and puts them in a list where you can add text and mark your favourite pictures. No picture here because this picture is from the simulator, so have a ladybug instead! </TextBlock>
            </PictureCombo>

            <PictureCombo imgPath={'/posts/2023/gamingAndMobile/memory.png'}>
                <SubtitleBlock>Memory</SubtitleBlock>
                <TextBlock>This was the first on-your-own assignment. It&apos;s your normal game of memory, except the tiles can be set based on the user&apos;s preferences. Data has to be passed from view to view using State and Observed Objects. Here is the view of gameplay. The blank circles are empty or solved tiles.</TextBlock>
            </PictureCombo>


            <SubtitleBlock>Security Camera</SubtitleBlock>
            <TextBlock>No picture yet as it is still underway, but here is a description: One part of this bonus lab was an app that listens for incoming connections, receives photos, and displays them for the user. The second part was an app that would take photos on a user-defined timer and send them to a listening app of your choice on the same network. It was a tougher project, but working in teams made it manageable.  </TextBlock>


            <SubtitleBlock>Round Up</SubtitleBlock>
            <TextBlock>Although these areas of expertise aren&apos;t for me, it didn&apos;t hurt that they were taught by some of my favourite instructors at the college. I still have some big ideas that I would like to try out, including a handful of little games I&apos;ve thought up over the years and an interactive mapping app. First, I have one more big gaming project for school that I&apos;ll be happy to share soon.</TextBlock>

            <TextBlock>If you enjoyed these and would like to take a closer look, find their repositories on <a href='https://github.com/dbarkowsky?tab=repositories'>my GitHub</a>.</TextBlock>
        </Grid>
    );
}

export default Portfolio;

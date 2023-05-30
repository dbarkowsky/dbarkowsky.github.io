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
import VideoBlock from '@/components/posts/VideoBlock';

const GamingFinal = () => {
    const currentPost = posts.find(post => post.title == "Robo-Fish Attack");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString('fr-CA')}</DateBlock>

            <TextBlock>
                This last semester, I took a course that focused on game development in Unity. I mentioned a bit in my previous post, but it consisted mostly of a series of smaller assignments that showed how to use features like animation, scripting, and other game engine offerings.
            </TextBlock>

            <TextBlock>
                This course also required a final project, something that demonstrated our ability to put together a game from the ground up, including the planning and design. My goal for this project was to emulate a genre that I loved as a kid, so I decided to create a 2D bullet hell inspired by games like Raiden Trad.
            </TextBlock>

            <PictureCombo imgPath={'/posts/2023/gamingFinal/raiden.png'} subtitle={'Raiden Trad'}>
                Raiden Trad was a game that I had for the Sega Genesis. If you ever travelled on BC Ferries in the early 2000s or prior, you&apos;ve likely seen more modern versions of this game in the form of an arcade cabinet. The game loop is simple: avoid oncoming fire and shoot the enemies back in return. The original had a series of levels for players to fight their way through, but the class project is simply a vertical slice of a game. In a vertical slice, the aim is to present a proof of concept for a larger game, like a pilot episode for a TV series.
            </PictureCombo>

            <SubtitleBlock>The Basics</SubtitleBlock>

            <PictureCombo imgPath={'/posts/2023/gamingFinal/example.png'} subtitle={'Initial Mockup'}>
                The first steps were to establish player movement. There&apos;s a built-in character controller that handles movement and collisions, so for a quick start I let that component do the heavy lifting. To give the impression of movement, the background was set to scroll past the camera. This first stage involved a lot of placeholders for art assets. It gave it a cartoony look, but that wasn&apos;t really what I was going for. Still, I needed to get the mechanics functional, which meant setting up the shooting mechanics and enemy movement.
            </PictureCombo>

            <PictureCombo imgPath={'/posts/2023/gamingFinal/spread.png'} subtitle={'Double spiral pattern'} side={'left'}>
                To make things easier down the road, I tried to keep everything in very small, modular units. So the bullets are each their own instance, and they know their own direction. They also know when to destroy themselves, such as upon impact, leaving the screen, or after too many seconds of existing. A firing point object controls the spawning of these bullets and sets their initial direction. My design for each firing point was that there would be an enum of firing patterns. In Unity, I could then select from a drop down of these enums to easily change the firing pattern whenever I wanted without changing code. This style of packing in a number of firing patterns meant that for each new enemy, I just attached a firing point and chose the pattern. Quick and simple to do over and over again.
            </PictureCombo>

            <TextBlock>
                The hardest part of these patterns was determining a directional vector from a 360 degree function input. I ended up falling back on trigonometry to calculate relative x and y values for each vector. A lot of time was spent getting this right, and it wasn&apos;t originally apparent that the Math library functions expected radians.
            </TextBlock>

            <PictureBlock path={'/posts/2023/gamingFinal/math.png'} /> {/* For screenshot of trig code. */}

            <TextBlock>
                The same design pattern applied to the enemy movement. I had programmed many different movement patterns, such as slow and steady movement to quick, angled directional changes. These smooth movements were accomplished using the Vector.Lerp function, but I didn&apos;t quite get the original feel I wanted. At first, it seemed the enemies were just moving too uniformly. It didn&apos;t feel like they were flying. After playing with the Lerp function in a bit of an unorthodox way, I eventually found a happy setup where the enemies had a bit of acceleration.
            </TextBlock>

            <SubtitleBlock>Art Assets</SubtitleBlock>

            <PictureCombo imgPath={'/posts/2023/gamingFinal/pixelCompare.png'} subtitle={'SVG vs Pixel It'} side='left'>
                The era of games that I was hoping to reproduce didn&apos;t have nice smooth lines. It was the era of pixel graphics. Unfortunately, I&apos;m not much of an artist, but I had some experience with Inkscape, a vectorgraph editor. By drawing the player, bullets, and enemies in Inkscape, I had the opportunity to bend and shape my lines until I was happy with them. When everything was looking good, I would throw the exported PNG through a pixel art filter. The result was hit or miss at times, but it gave a decent pixelated look. All the enemies follow an aquatic theme, from whales to goldfish.
            </PictureCombo>

            <PictureCombo imgPath={'/posts/2023/gamingFinal/city.png'}>
                <TextBlock>
                    For the background, I used the game Cities: Skylines. By building a city that roughly resembled the background I wanted, I could just stitch together multiple screenshots and edit the result to add some additional features.
                </TextBlock>
                Finally, there was some use of AI-generated art to produce the title screen and the cat sidekick on the side of the screen. AI art is coming a long way. The free options aren&apos;t the most convincing, but they were good enough for this project.
            </PictureCombo>

            <SubtitleBlock>The Crab</SubtitleBlock>

            <TextBlock>
                For the boss, I wanted a finale that showed off a little bit of everything. Each of his four attacks were designed with some form of telegraphing in mind, so the player knew when they were coming. If the boss&apos;s sound effect sounds familiar, you might be a Pokemon fan.
            </TextBlock>

            <PictureCombo imgPath={'/posts/2023/gamingFinal/crab.png'} side='left'>
                His arm movement is composed of similar math as the bullet direction scripts. By specifying a direction in degrees, the arm smoothly moves to that position. All the attacks are essentially a series of events that execute in order with timers. It is a little finicky at times to make sure that attacks execute as expected, but it was worth it to hear the laser attack charge up before obliterating the player.
            </PictureCombo>

            <TextBlock>
                He has a large health pool, but the explosions that go off upon his defeat provide a great sendoff to the player. There was something very satisfying about seeing all the pieces come together for this enemy, and I think it was just the ending that the level needed.
            </TextBlock>

            <SubtitleBlock>The Finishing Touches</SubtitleBlock>

            <PictureCombo imgPath={'/posts/2023/gamingFinal/finishedCat.png'} subtitle={'My co-pilot'}>
                <TextBlock>
                    To make this feel like an actual console game, I included a splash screen at the beginning. There are no options, but it was an experiment with game scene changes that we didn&apos;t touch much in class. There is also now some score information that challenges the player to do a little better each time.
                </TextBlock>
                <TextBlock>
                    To change up the player&apos;s experience, I added some power ups that change the player&apos;s firing pattern. Just like Raiden Trad, one power up gives the ability to shoot a spread, while the other focuses their shots into a powerful beam. Without these power ups, the game gets much harder.
                </TextBlock>
                The talking cat was a late addition, but it might just be my favourite one. There are a number of triggers that cause him to pull from lists of possible voice lines. By playing a short noise and slowly increasing the amount of characters displayed, it gives the effect the he&apos;s talking out the phrases. It also gave me the ability to add a little comic relief to the game.
            </PictureCombo>

            <SubtitleBlock>The Details</SubtitleBlock>

            <TextBlock>
                This took a lot of work. I definitely put in way more time than the instructor expected of me, but I wanted this project to be polished. Here&apos;s where I get to brag about how some parts work.
            </TextBlock>

            <TextBlock>
                I already talked about the systems for aiming, but there are some enemies that aim directly at the player. Most items in the game are loosely-coupled, so enemies, for example, don&apos;t actually have any knowledge of the player. In order to aim at them, the game manager broadcasts the player&apos;s location at frequent intervals. Using this player coordinate, I can then calculate the difference in the x and y positions between an enemy and the player to get a relative angle. I was super proud of this solution. It has been a while since I actually needed this kind of math, and it was nice to see I haven&apos;t forgotten it all.
            </TextBlock>

            <PictureCombo imgPath={'/posts/2023/gamingFinal/spawner.png'} subtitle={''}>
                Speaking of the enemies, what controls them? If you could zoom out in Unity, you would see a number of spawn points that surround the camera. These are simply references in the world that provide a location for enemies to spawn. From there, the enemies handle their own behaviour, but they are tracked by the enemy manager, which caused them to spawn in the first place. There&apos;s a trigger that sits at the top of the screen, and when it runs into specially-made enemy triggers, those triggers send out broadcasts that signal the enemy manager to spawn more enemies.
            </PictureCombo>

            <TextBlock>
                How are these broadcasts taking place? This was a messenger system component that I reused from class. By adding listeners for specific events, any game object can then pick up on that event. This is great for keeping components on a need-to-know basis about other components. I used this everywhere I could. The audio manager listens for many events to know when to play sound effects or new music. The game manager listens for events like the player&apos;s death. The cat makes heavy use of the messenger system by using heard messages to select which phases it plays. It was a really great concept that I hope to use in other projects going forwards.
            </TextBlock>

            <SubtitleBlock>Demo</SubtitleBlock>

            <TextBlock>As always, follow this link to see the <a href={currentPost.paths.code}>GitHub repository.</a> The Unity version is 2022.1.13f if you want to load up the project.</TextBlock>

            <TextBlock>
                If you want to try the game, please see <a href={'https://drive.google.com/file/d/1hrv6Zlr88f04zjuafHxOPlf5Xo8LUlcA/view?usp=sharing'}>this link here</a> for a compiled version. It is a little large, around 128MB when unzipped, but it should be runnable on any 32 or 64-bit system. Just unzip the file and find the executable named FinalProject.exe.
            </TextBlock>

            <TextBlock>
                I have also recorded this video if you would just like to see the game in action. A single playthrough is about 4-5 minutes depending on how long it takes to kill the boss.
            </TextBlock>

            <VideoBlock path={'https://www.youtube.com/embed/b52_8Whv3x4'} />

            <TextBlock>
                I hope you enjoyed this extra-long post. The next big project is already underway.
            </TextBlock>

        </Grid>
    );
}

export default GamingFinal;

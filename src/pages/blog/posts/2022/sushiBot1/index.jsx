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

const SushiBot1 = () => {
    const currentPost = posts.find(post => post.title == "SushiBot - Part 1");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString()}</DateBlock>
            <TextBlock>As always, follow this link to see the <a href={currentPost.paths.code}>GitHub repository.</a></TextBlock>

            <SubtitleBlock>Preamble</SubtitleBlock>
            <TextBlock>When my wife and I lived in Taiwan, eating out triumphed over homemade meals. The price of food there was insanely cheap, with each dinner being $2 to $3 CAD. So, like most Taiwanese, when dinner rolled around, we would head out and find somewhere to eat. </TextBlock>
            <PictureCombo side={'right'} imgPath={'/posts/2022/sushiBot1/carousel.jpg'} subtitle={'A sushi carousel'}>
                Sushi restaurants were some of my wife&apos;s favourites, especially if they had some sort of sushi delivery system. I&apos;m talking about a little conveyor belt, a channel of flowing water with little boats, or anything of the sort. It was a fun little addition to the meal, but outside of Asia, we&apos;ve yet to see anything similar. Perhaps there&apos;s just a difference in opinion with FoodSafe in BC.
            </PictureCombo>
            <TextBlock>Back in Canada, we continued my wife&apos;s family tradition of holding a Japanese New Year&apos;s dinner. For us, it meant two days of cooking before having people over to enjoy the meal. Late last year, she had the idea for some sort of sushi delivery system of our own. At first, a model train was the most likely candidate, but then what would we do with the train and its tracks the rest of the year? Eventually, we came to the obvious conclusion: we&apos;ll build a robot instead.</TextBlock>

            <SubtitleBlock>Design & Acquisition</SubtitleBlock>
            <TextBlock>I didn&apos;t know much about the integration between software and hardware. I had done some work with a Raspberry Pi at school, but this project was a step above. Breaking it down to the basic components, we knew we needed a brain for the robot, a body, and some way of keeping it on track. Despite all the tutorials out there for line-following robots, none of them were quite right. The biggest issue was often with the components they required, many of which were no longer in production. In the end, I did my own research and came up with the following parts list:</TextBlock>
            <ul>
                <li>Raspberry Pi (the brain)</li>
                <li>A motor controller</li>
                <li>A bunch of jumper cables</li>
                <li>Vehicle chassis</li>
                <li>Wheels</li>
                <li>DC motors x4</li>
                <li>Line sensors (IR) x2</li>
                <li>Power supply</li>
            </ul>
            <PictureCombo side={'right'} imgPath={'/posts/2022/sushiBot1/backofscreen.jpg'}>
                Despite Victoria having a bustling tech sector, there didn&apos;t seem to be any local source for these things. If you&apos;ve tried to purchase a Raspberry Pi in the last year, you&apos;d know that it&apos;s almost impossible to get one from a distributor. They are all sold out, and the back-in-stock time is “when we get it.” Fortunately, the used market exists. My wife, master of VarageSale, located a used 3B+ that came with a screen as well. We didn&apos;t need the screen, but our options were few and far between. After a fresh install of Raspberry Pi OS, it was good to go.
            </PictureCombo>
            <TextBlock>In Nanaimo, I located a business called <a href='https://bc-robotics.com/'>BC Robotics</a>. Not only did they carry a chassis that came with four motors, wheels, and a power supply, but they stocked the <a href='https://learn.adafruit.com/adafruit-dc-and-stepper-motor-hat-for-raspberry-pi/overview'>Adafruit Motor Controller</a>. It was truly meant to be. This motor controller could operate all four motors independently, and it came with its own basic package for controlling them through Python. We ordered the batch for pickup and made a day trip to Nanaimo to pick everything up. </TextBlock>

            <SubtitleBlock>Construction & Testing</SubtitleBlock>
            <TextBlock>Somewhat to my surprise, the headers were not soldered onto the motor controller. I had never done any electronics soldering, although I did own a soldering kit. There was another issue: the header had very short pins, so there was no way to attach the sensors if I wanted to stack it directly on the Pi. I decided to just solder the pins it needed for now, with the plan to attach a long-pinned header later. With a tip that was definitely a little too big, I soldered everything together. </TextBlock>
            <PictureCombo side={'right'} imgPath={'/posts/2022/sushiBot1/loosewires.jpg'}>
                My wife constructed the chassis and gave it a slick paint job. She also put together three little trailers that would carry sushi. While she did this, I started working on some Python code to drive the wheels. The provided Adafruit library was simple to use. You simply created an instance of the class they provided and then called the motors and set throttle speed. It advertises any speed between 1.0 and -1.0 (reverse), but we found anything less than 0.5 or -0.5 was not enough power to drive the wheels and only produced a squeal from the motors. I made a test file to see if we had hooked everything up correctly, and the results were promising.
            </PictureCombo>     
            <TextBlock>To practice some driving, I wrote a Manual class which outlined all the basic movements: forward, back, right, left, stop, and coast. Most of these required parameters for time and speed, but they allowed me to call them directly from the Python shell and test drive our robot. After that I strung some together in another script for further testing. The results were pretty good. In this video, I was using the stop() functions between each command, so it was a little jerky. I swapped those out for a coast() function that let the wheels move freely between commands, and it smoothed things out tremendously. </TextBlock>
            <VideoBlock path={'https://www.youtube.com/embed/fzh3J-OT3Eg'}/>
            <TextBlock>Unfortunately, this is where part 1 ends. There was a bit of a setback that I&apos;ll post about next time, hopefully with some good news as well. </TextBlock>
        </Grid>
    );
}

export default SushiBot1;
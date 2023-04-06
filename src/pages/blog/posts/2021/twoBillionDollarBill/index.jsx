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

const Bill = () => {
    const currentPost = posts.find(post => post.title == "$2 Billion Dollar Bill");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString('fr-CA')}</DateBlock>

            <SubtitleBlock>Way back in 2013...</SubtitleBlock>
            <TextBlock>My wife and I started a habit long ago where we would bet on little things:</TextBlock>
            <ul>
                <li>Does our battery charger take AAA batteries?</li>
                <li>Did Thorin die in the Hobbit?</li>
                <li>Are eggs considered dairy?</li>
            </ul>
            <TextBlock>These examples are all true bets we made, and I lost every one.</TextBlock>
            <TextBlock>Fortunately, we don&apos;t bet with real money. A made up number is thrown out at the bet. Throw out a higher number to try and bluff your way out, but know that any wins and losses are recorded. This adds up, and at a time when I was more willing to bet no-mater-what, I found myself in large amount of imaginary debt.</TextBlock>
            <TextBlock>$2 billion dollars to be exact.</TextBlock>
            <TextBlock>I set out to make the non-existent: a $2 billion dollar bill to pay off my imaginary debt. I&apos;m a sucker for free, open-source software, so I booted up Inkscape and found a high-res version of our recent plastic CAD bills for reference. The goal was to recreate everything as a vectorgraph image. If I could avoid rasterization, I would.</TextBlock>

            <SubtitleBlock>The Process</SubtitleBlock>
            <TextBlock>The process was pretty straightforward: control my layers carefully and continue to draw out the shapes with the bezier curve tool. In some ways, this was also going to be a surprise for my wife, so I settled on a shade of purple for the colour (her favourite), choose a Nobel-prize-winning Canadian neurobiologist (her field) for the front, and picked Justin Trudeau for the back. In a way, I guessed his election win two years beforehand, which is pretty neat.</TextBlock>
            <TextBlock>The images of people is where I wasn&apos;t very happy with the vectorgraph approach. Instead, I used GIMP to adjust the images and apply filters until they looked sufficiently stylized. The biggest challenges came from accurately placing texted on curved paths —Inkscape isn&apos;t great at this— and getting a detailed looking background that hopefully resembled the security features we actually find on our plastic bills.</TextBlock>
            <TextBlock>The only thing that I couldn&apos;t accomplish was to actually print them with the plastic transparency and shine that the maple leaves produced. Maybe this was a good thing, as a local printing company actually printed off the final result for me. I was a little concerned about his, and so was the business staff. If I had tried to make a $100 bill instead, probably they would have said no.</TextBlock>

            <SubtitleBlock>Reflection</SubtitleBlock>
            <TextBlock>While Inkscape isn&apos;t always the most user-friendly program. It did the job here. The most frustration came from Inkscape&apos;s inability to process the insane number of paths that I had created. Every movement or addition resulted in substantial lag. I still jump to use it whenever I need to make posters or icons, however, as it&apos;s easy to keep on a flash drive when you need it in a pinch and the scalability of SVG files is unmatched.</TextBlock>
            <TextBlock>See my final result below:</TextBlock>
            <PictureBlock path={'/posts/2021/twoBillionDollarBill/dollar_front.jpg'} />
            <TextBlock></TextBlock>
            <PictureBlock path={'/posts/2021/twoBillionDollarBill/dollar_back.jpg'} />
        </Grid>
    );
}

export default Bill;

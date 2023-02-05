"use client"

import Grid from '@mui/material/Unstable_Grid2';
import colours from '@/components/Colours';
import PictureBlock from '@/components/posts/PictureBlock';
import TextBlock from '@/components/posts/TextBlock';
import TitleBlock from '@/components/posts/TitleBlock';
import DateBlock from '@/components/posts/DateBlock';
import posts from '@/data/posts';
import SubtitleBlock from '@/components/posts/SubtitleBlock';

const CardPrinter = () => {
    const currentPost = posts.find(post => post.title == "Hotel Card Printer");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString()}</DateBlock>

            <TextBlock>As always, follow this link to see the <a href={currentPost.paths.code}>GitHub repository.</a></TextBlock>

            <SubtitleBlock>Back in 2014...</SubtitleBlock>
            <TextBlock>For a period after university, I held a Night Auditor position with Accent Inns at their second property in town, Blue Ridge Inn (later Hotel Zed). The shift times weren&apos;t the greatest, running from 12-8a.m., but there was one benefit: I had hours every night to work on projects of my own creation that I thought would better the hotel experience for guests and employees. </TextBlock>
            <TextBlock>Sometimes these projects were quick designs for maps or brochures. Sometimes they were IT tasks like syncing the computers with our Exchange server. One night, as I was wrapping up my nightly tasks, I started thinking about how much the room cards we gave guests <b>simply sucked</b>. </TextBlock>
            <TextBlock>It wasn&apos;t really the cards that were the issue. It was the envelope we placed each one in to prepare it for check-in time. They were small yellow envelopes the size of the card, and every morning staff had to write —by hand— the name of the guest, their room number, and the Wi-Fi login details. Usually this task fell to me. The hotel had roughly 80 rooms, and on a Friday night in summer, it wasn&apos;t a far-fetched prospect to have to write out 80 cards. It wasn&apos;t fun for staff, and it didn&apos;t look professional for guests. Fortunately, I was looking for an opportunity to practice my Java. </TextBlock>

            <SubtitleBlock>The Process</SubtitleBlock>
            <TextBlock>I started writing a program that I had envisioned with three parts: </TextBlock>
                <ol>
                    <li>a user interface that even the staff could use</li>
                    <li>a way to comb the guest information from the management system we used</li>
                    <li>a way to interact with the printer</li>
                </ol>
            <TextBlock>Making a GUI was new to me. I had toyed with it before, but usually I worked off of a previously made solution and made it my own. It didn&apos;t look fantastic in the end, but it wasn&apos;t horrible, and it was reasonably clear. I slapped the company logo in there, and included two other options: a way for staff to print blanks (just Wi-Fi info) throughout the day was new walk-in guests came in and a way to print a single name.</TextBlock>
            <TextBlock>The printer interaction wasn&apos;t as bad as I expected. I had some familiarity with printing formats already, and it was simple enough to create an array of guest information, combine that with the generic Wi-Fi info, and send that to the printer as a PDF. The hardest part was finding the correct positioning for the text so it would land properly on the tiny card envelopes.</TextBlock>
            <TextBlock>Getting the guest information was the impossible hurdle, at least through Java. None of the data was in plain-text. The only way of getting that was using the management system to export a text file, which —although not beautifully formatted for reading— was at least somewhat parse-able. In the end, I settled on leaving the two or three clicks needed to generate this file to the end user, with instructions on how to do so in the GUI.</TextBlock>
            <TextBlock>The result was something I was pretty happy with. I was able to pack it as a .jar file, and the computers already had a JRE, so I didn&apos;t have to convince anyone to install this for me (none of our staff had admin privileges for certain). It wasn&apos;t the prettiest solution, but it looked way better than the handwritten envelopes. This was the first real Java coding that I had done since finishing the elective courses at UVIC, and it felt like a real achievement at the time.</TextBlock>
            <PictureBlock path={'/posts/2021/cardPrinter/card-printer.PNG'} subtitle={'The single-page layout.'}/>

            <SubtitleBlock>The Constraints</SubtitleBlock>
            <TextBlock>Of course, not everything is perfect.</TextBlock>
            <TextBlock>There were a few things I didn&apos;t consider at the time. You have to convince people that using your application (learning how to use the computer) is better than doing things the way they&apos;ve always done it. I think I might have been the only person to adopt it fully, which is fair, considering I had reason to use it the most.</TextBlock>
            <TextBlock>The printer was not amazing. It certainly wasn&apos;t industrial grade. As a result, there was a hardware limit on how many envelopes you could stuff it with before it jammed up. Some babysitting was required.</TextBlock>
            <TextBlock>I seriously regret my choice to use Comic Sans as the font. I don&apos;t know what I was thinking, but I&apos;m going to chalk that up to youthful folly.</TextBlock>
        </Grid>
    );
}

export default CardPrinter;
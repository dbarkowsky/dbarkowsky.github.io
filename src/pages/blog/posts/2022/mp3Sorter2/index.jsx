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

const MP3Sorter2 = () => {
    const currentPost = posts.find(post => post.title == "mp3 Sorter (Update)");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString('fr-CA')}</DateBlock>
            <TextBlock>As always, follow this link to see the <a href={currentPost.paths.code}>GitHub repository.</a></TextBlock>

            <TextBlock>As I mentioned <a href={'/blog/posts/2021/mp3Sorter'}>in my previous post</a>, I needed a way to sort my loose mp3 files into folders based on their artist tags. I had already added a lot of that metadata manually, but the idea of creating hundreds of folders to file these loose songs sounded arduous, so I automated the process with a Python script. Using the eyeD3 module to access the tags made it a lot simpler than I expected.</TextBlock>
            <TextBlock>What it did do was leave me with a to-do list for a number of wish-list items I wanted to add.</TextBlock>

            <SubtitleBlock>GUI and Browse Function</SubtitleBlock>
            <TextBlock>I had never made a GUI in Python. I had barely touched on GUIs in Java, and I didn&apos;t consider myself very good at that either. After some research the tkinter module seemed like the most accessible option. It came with the Python installation by default, and it worked with the limited scope I was imagining. </TextBlock>
            <PictureCombo imgPath={'/posts/2022/mp3Sorter2/mp32.1.png'}>
                <TextBlock>After a few tutorials on their website, I felt ready to go. I learned how to make a few different types of containers: Frames, Labels, Text Fields, and Buttons. That was all I really needed for this first page. </TextBlock>
                <TextBlock>I realized during this stage that I was going to need to re-imagine my music_sorter.py file as a class. Currently, it was just inline code, but now I needed to call it from the gui.py file. Classes in Java I knew, but I had to learn some basics of classes in Python. Like many things in Python, it felt like it played fast-and-loose with the rules I thought I knew, but I got there.</TextBlock>
            </PictureCombo>
            <TextBlock>The end result was a decent page that let the user select a folder and see what the program was doing in the output window. Now I had to address the songs that failed to sort, almost always due to missing tags. I was already recording these in a list from my original script, so I was at least thinking ahead. Now I had to give users some way to fix this issue.</TextBlock>

            <SubtitleBlock>Adding Tags & Incorporating Albums</SubtitleBlock>
            <TextBlock>“Why stop at artists?” I thought. It was easy enough to add an extra layer of sorting, but it also created another point where missing tags would cause songs to fail to sort. Users needed a way to add this missing data, because as I had experienced prior to making this, adding tags through Window&apos;s interface was a gruelling task.</TextBlock>
            <TextBlock>By storing each failed song&apos;s information in a 2D list, I could then loop through the list to generate fields that would populate with that info. When the user was ready to proceed, I could loop through those fields again and update the 2D list. Then it was just a matter of writing the tags to each file and sending them to the sorting function once more. This is what I ended up with:</TextBlock>
            <PictureBlock path={'/posts/2022/mp3Sorter2/mp32.2.png'}></PictureBlock>
            <TextBlock>What you see here are the existing tags. Notice that the last one didn&apos;t have the correct Song Name to start. For some reason, it had been tagged with a combination of artist – song name. At least the user can fix it now.</TextBlock>
            <TextBlock>I also added a field for the year. Getting this to work was the worst part. It turns out that, while eyeD3 keeps properties for artist, album, title, etc. in its Tag class, it does not keep one for the year. There is a Date option, but it returns a Date object that I could not find info on how to parse. After substantial googling, I found a .getBestDate() method that returns only the year. Based on that name, you might expect a .setBestDate() method. Well that doesn&apos;t exist. Instead there is a property called original_release_date, but it only works for setting the date, not getting it. It was a confusing issue that almost caused me to abandon eyeD3 in favour of another module.</TextBlock>

            <SubtitleBlock>Conclusion</SubtitleBlock>
            <PictureCombo imgPath={'/posts/2022/mp3Sorter2/mp32.3.png'}>
                <TextBlock>I&apos;m happy with the way this turned out. After some testing to make sure it wasn&apos;t too easily breakable, I made a little executable so that others can run it. Feel free to give it a try if you need this sort of tool.</TextBlock>
                <TextBlock>There are definitely areas for improvement. It could look nicer, of course, but it&apos;s definitely better than a command line program now. </TextBlock>
            </PictureCombo>
            <TextBlock>I don&apos;t think I&apos;ll be expanding the functionality to include other file types. eyeD3 only addresses .mp3 files, so there would have to be a lot of changes to swap it out for another module. </TextBlock>
            <TextBlock>Overall, it was a good project to keep my fingers moving over the Christmas break, and an interesting way to expand my Python abilities. The next project I&apos;m eyeing up is a program that will help analyze a hypothesis on a particular Reddit board, so stay tuned for that in the future.</TextBlock>
        </Grid>
    );
}

export default MP3Sorter2;

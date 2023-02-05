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
    const currentPost = posts.find(post => post.title == "My New Portfolio");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString()}</DateBlock>

            <TextBlock>As always, follow this link to see the <a href={currentPost.paths.code}>GitHub repository.</a></TextBlock>

            <TextBlock>Back in 2021, I had to make a Wordpress site for a class that functioned as a personal portfolio. I actually liked the way it turned out, but I don&apos;t really like Wordpress. I find it troublesome to keep up to date and make changes to, plus the school, who was hosting the page, only would keep the site live for two years. This year, I decided to make its replacement.</TextBlock>
            <PictureBlock path={'/posts/2023/portfolio/old.png'} subtitle={'The old portfolio'}/>

            <SubtitleBlock>Pages</SubtitleBlock>
            <TextBlock>GitHub has a great feature called GitHub Pages. It takes your web application and essentially hosts it for free. You can do this with individual repositories, but you can also get a domain name that&apos;s specific to your account. That&apos;s what I use to host this portfolio. They have a selection of workflows to get your application deployed, and those workflows are tweakable if you&apos;d rather make some adjustments. </TextBlock>

            <SubtitleBlock>Process</SubtitleBlock>
            <TextBlock>I decided that I wanted to either make my page in Vue or React. Just because I was on a time crunch, I went with what I knew and chose React. As a supporting framework, I chose NextJS. I was fairly green to NextJS, but after seeing how easily it handled routing and how quickly the statically generated pages would load, I was sold. </TextBlock>
            <TextBlock>I made a lot of components that allow me to churn out pages very quickly. If I want text, I use a TextBlock component. If I want a picture/text combination, I use a PictureCombo. Making these components is what I like about React. It&apos;s easy to have everything be extremely modular. I used a lot of MUI components as well. I&apos;m not a designer. I know things could look better, but MUI does help ease that pain a bit. Now when I want a new page, I just add a folder and a new page that exports a few components. </TextBlock>
            <TextBlock>Even better is the result of the resume and blog pages. They don&apos;t have much hardcoded content. Most of it is read in from a series of objects in other files. If I want to add a new job to my resume, a new skill, or a new blog post card, I just add a new object with the relevant data. It&apos;s super easy to update.</TextBlock>

            <SubtitleBlock>Issues</SubtitleBlock>
            <TextBlock>I include this section as a word of warning for anyone hoping to make a similar type of site. Don&apos;t use the experimental /app folder. I used it previously on another project and loved that organization more than the old NextJS structure, but when it came time to deploy my site, it turned out to be the wrong choice. </TextBlock>
            <PictureCombo subtitle={'Status of export option'} imgPath={'/posts/2023/portfolio/nextjs.png'}>
                <TextBlock>The newest version of NextJS does not support the export function when using the /app folder. I don&apos;t know why they wouldn&apos;t be more forthcoming with this, but it&apos;s a major reason not to use it yet. Without the export option, you cannot prepare your site for GitHub Pages deployment. It took some real deep searching to find that bit of information. </TextBlock>
            </PictureCombo>
        
            <SubtitleBlock>Future</SubtitleBlock>
            <PictureCombo subtitle={'Colour abstraction'} imgPath={'/posts/2023/portfolio/colours.png'}>
                <TextBlock>I&apos;m still tweaking some things here and there. I know there are some issues that need addressing, one of which is getting the head component to function correctly. I&apos;m also not sold on the colour scheme yet. I like the brown, green, and beige look, but it needs some adjustment. Fortunately, I abstracted the colour options in a way that&apos;s easy to change. </TextBlock>
            </PictureCombo>
            <TextBlock>If you&apos;re here reading, I&apos;m glad you found the site. Thanks for reading this far. I&apos;ll try to post whenever something interesting happens, so check back once in a while for more content. </TextBlock>
        </Grid>
    );
}

export default Portfolio;
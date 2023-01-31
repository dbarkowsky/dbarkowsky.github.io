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

const ICS128Final = () => {
    const currentPost = posts.find(post => post.title == "Mock Storefront Webpage");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString()}</DateBlock>
            <TextBlock>As always, follow this link to see the <a href={currentPost.paths.code}>GitHub repository.</a></TextBlock>

            <TextBlock>With my first year at Camosun coming to a close, I just wanted to share this final project that I made for ICS-128, the web scripting course. To see a live demo of the site, <a href='https://dbarkowsky.github.io/ICS128_Final_Project/'>click here.</a></TextBlock>
            <TextBlock>The final assignment for this class was to make a storefront webpage. It had to populate the page with an assortment of products, all of which were pulled from an API call. Users could add items to their cart and then proceed through a checkout process. Finally, that checkout data was sent to a server to verify its contents.</TextBlock>
            <PictureBlock path={'/posts/2022/ics128final/fullpage.png'}/>
            <TextBlock>It was a fun little project. It’s the first time we really have to worry about how our application is built. I wanted a seamless experience that didn’t require additional loading, so I stored the data and the cart as part of class objects. This made for some easy filtering. </TextBlock>
            
            <PictureCombo imgPath={'/posts/2022/ics128final/modal.png'}>
                <TextBlock>A lot of the page is populated by JavaScript methods, so there’s no refreshing when things are added. I tried to employ a strategy of redrawing parts of the page only when that part needed updating. That’s what allows the currencies to update and the cart to refresh itself. </TextBlock>
                <TextBlock>This was also the first time I made a page using some of the premade tools like Bootstrap’s sidemenu and modal. That made things a lot easier, and I really appreciated that. Last semester, we made another single-page site, but without JavaScript. You can see that <a href='https://dbarkowsky.github.io/ICS-118-Midterm/'>here</a>. I like to see the progression from those more simple projects. Here’s hoping the next one is a big step forward.</TextBlock>
            </PictureCombo>
        </Grid>
    );
}

export default ICS128Final;
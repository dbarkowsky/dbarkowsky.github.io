"use client";

import Grid from '@mui/material/Unstable_Grid2';
import colours from '@/components/Colours';
import PictureBlock from '@/components/posts/PictureBlock';
import TextBlock from '@/components/posts/TextBlock';
import TitleBlock from '@/components/posts/TitleBlock';
import DateBlock from '@/components/posts/DateBlock';
import posts from '@/data/posts';
import SubtitleBlock from '@/components/posts/SubtitleBlock';
import PictureCombo from '@/components/posts/PictureCombo';

const AITA = () => {
    const currentPost = posts.find(post => post.title == "Takeaways from Work");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString('fr-CA')}</DateBlock>

            <TextBlock>It&apos;s been a long time since my last post. I have a personal project I&apos;ve slowly been chipping away at, but there has simply been so much work that it&apos;s hard to get motivated for side-projects.</TextBlock>
            <TextBlock>Last year, I was assigned to a project called the Property Inventory Management System (PIMS). It was a stack of React, ASP.NET, and MS SQL Server. I really didn&apos;t know anything about .NET or SQL Server, so it was a bit of a learning curve. Right away, it was pretty clear that there were a lot of issues plaguing the application. The number of endpoints that were in use but unfinished by the original team (contractors, now long gone), the horrifying frontend states that seemed to be altered from anywhere. It was a lot to take in, but there was already talk of a rebuild, so by the time we got to December, we were starting from the ground up.</TextBlock>
            <TextBlock>I don&apos;t want to dwell on the specifics of what it took to put together this incredible rebuild, but I can&apos;t bring myself to continue without paying acknowledgements to the amazing team that worked on it. Our development team was only five people at the most, and everyone has left their mark on the project. </TextBlock>
            <TextBlock>We built an entirely new API using Express, a redesigned frontend from the ground up, and moved everything away from MS SQL Server and into Postgres/Crunchy. It was a lot of work, but the results are so clearly an improvement that it would be hard to argue that it wasn&apos;t worth the time. No longer does it look like it was made in the early 2000s instead of 2020 when it was built. Developers can actually tell what&apos;s going on now in the backend without being surprised by To-Do notes from four years ago. I can&apos;t share the actual site, because you would need permissions to access it anyway, but I&apos;ll share this screenshot of the map, which I&apos;ll talk about more later.</TextBlock>
            <PictureBlock path={'/posts/2024/pims/map.png'} />
            <TextBlock>I would say that it&apos;s worth checking it out on GitHub if you&apos;re into the tech-side of things. You&apos;ll find a link at the end of this post. There&apos;s a lot of documentation there that explains it in better detail than I would here. Instead, I would rather talk about what I learned from this giant undertaking.</TextBlock>

            <SubtitleBlock>Estimating is a Skill</SubtitleBlock>
            <TextBlock>There were a lot of occasions where we needed a timeline for leadership, other groups, or even just our own planning. I&apos;m apparently an optimistic estimator because, early on, we tended to overshoot my estimates easily. I suspect one reason for this was that I was only thinking about the best-case scenario. <em>Surely this task will only take a day</em>, but then we didn&apos;t see progress on it for a week. At this point, I think I&apos;m a lot more cautious, but my manager also made me realise something when he pushed back against these deadline questions. We run an Agile shop. It&apos;s an iterative process, and we&apos;re done when it&apos;s ready. This works because we already had a working application in place, and it&apos;s especially easy to think this way when there&apos;s no reason to rush the project.
            </TextBlock>

            <SubtitleBlock>Get Requirements</SubtitleBlock>
            <TextBlock>We had a reference in the old system, but there were so many pieces that seemed to have been made with features in mind that never came to fruition. Because of this, we leaned hard on the product owners to understand the features that the application really needed to have. For the most part this was good, but there were a few cases where a feature would be done for several weeks and even in use when we would hear that it also needs to handle some additional cases. Usually, this would have been easier to tackle if we had known about it from the beginning. I&apos;m going to make sure these requirements are clear cut in the future to hopefully avoid this.</TextBlock>

            <SubtitleBlock>Outside Sources</SubtitleBlock>
            <TextBlock>PIMS uses a lot of external data sources. There are multiple map layers, data from properties coming from sources like BC Assessment and the Land Title and Survey Authority, and brokered login options such as the BC Services Card. In theory, this is great. We can use their services and it&apos;s all risk that&apos;s outsourced to these groups instead. In practice, I found that it added a lot of risk in terms of timelines and reliability. Weeks turn to months as we wait for responses from outside groups. Often we are not connected with the personnel to answer our technical questions. At times, it makes me want to shirk any outside connections and just handle these cases on our own. While I know this is pretty much impossible for a lot of these data sources, it can be tempting. How to work with the people to get these services running is something I feel like I have practice with now. Getting through the bureaucracy that comes with that is still an ongoing battle.</TextBlock>

            <SubtitleBlock>Leaflet</SubtitleBlock>
            <TextBlock>Moving on to more tech-focused topics, Leaflet was probably my favourite experience of the project. I love geography and maps, so this was a handy tool that allowed for easy spatial representation of our data. It&apos;s not the most feature-complete option for working with spatial data, but it is clean and quick. I managed to build a number of features on top of our property map, including different kinds of popups, filters, and clustering behaviours. I&apos;m really looking forward to trying this out in a personal project one day with a custom tile set. </TextBlock>

            <SubtitleBlock>TypeORM & PostgreSQL</SubtitleBlock>
            <TextBlock>We knew that we wanted an ORM to help manage our database access, but I hadn&apos;t really worked with any of them before this. It definitely made a lot of database tasks easier. If you&apos;re not doing anything complicated, it makes creating your entities and migrations very painless, and performing CRUD operations is exactly what you want it to be most of the time. Sometimes, however, I found our needs for the project resulted in us abandoning the repository manager system in favour of their query builder, which feels a lot more like just writing SQL again. There were some cases where TypeORM would do something strange in the background, making queries much less optimal than they should have been. It&apos;s not the perfect tool, but I&apos;d probably use it again. PostgreSQL felt like a big step up from SQL Server. Being able to avoid .NET and Entity Framework made working with migrations and database changes so much easier.</TextBlock>

            <SubtitleBlock>Express & Middleware</SubtitleBlock>
            <TextBlock>Express is not new to me. It is definitely my most comfortable API framework, but recently I found myself working to redo the entire authorization system we had set up. It wasn&apos;t by choice, but was instead a requirement of including a new form of authentication. Tackling this task really opened up my understanding of how middleware can be used in Express to blow open the doors. My current example was with how we checked for user roles. When a user sent a request, we would have to get the user&apos;s username, make the call to the database for their role, then see if it matched a required role. This might be done in a controller, but there was no guarantee that something similar wouldn&apos;t be needed in a later piece of code. This could result in multiple database trips all for the same info. Writing a new piece of middleware allowed this all to be done once. We could get the user, check if they have the roles needed to access this particular route, and then tack on that user&apos;s information to the request for other checks later on. No repeating the same requests. I&apos;m really proud of this change. It seems like the obvious thing, but it allowed us to cut down on so many queries. </TextBlock>

            <SubtitleBlock>What&apos;s Next</SubtitleBlock>
            <TextBlock>PIMS is still evolving, but we&apos;re at the point where things are slowing down. Team members are slowly being dispatched to other projects, and it seems like I&apos;ll have new work as well in the coming months. Still, PIMS was my first team project. It really took me from the mindset of <em>solo developer</em> to <em>team member</em>. I have a few little surprise features I&apos;d still like to get in before the page turns on this chapter, and we&apos;re currently undertaking authentication using the BC Services Card.</TextBlock>

            <TextBlock>Again, I&apos;d love it if you&apos;d <a href={currentPost.paths.code}>check it out</a>. It&apos;s not the most complex application, but it represents a significant chunk of my time with government so far.
            </TextBlock>

        </Grid>
    );
};

export default AITA;

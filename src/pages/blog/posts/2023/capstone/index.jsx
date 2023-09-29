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

const Capstone = () => {
    const currentPost = posts.find(post => post.title == "Capstone Project");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString('fr-CA')}</DateBlock>

            <TextBlock>Well, it&apos;s been a long time since I had something to post about, but not because I haven&apos;t been busy. Let&apos;s talk about why this summer has been such a whirlwind.
            </TextBlock>

            <SubtitleBlock>How It Started</SubtitleBlock>

            <TextBlock>First off, I lucked out way more than I expected. Back in February, the same group within the Ministry of Citizens&apos; Services (CITZ) that I did my co-op term with contacted me about a temporary assignment position as a Full Stack Developer. This was super unexpected, but I guess I did something right last time, because they wanted me back. It ended up being a job that I could do part time alongside my schooling, which was truly the perfect blend.
            </TextBlock>

            <TextBlock>
                Coincidentally, I&apos;m required to do a capstone project during the final semester of my program. Usually, this involves being placed on a small team with other students and then being assigned to one of the capstone sponsors to complete a project of their choosing. Sometimes this is a custom-built application, sometimes it&apos;s improving upon something they already have. In some miracle of timing, my employer and my program decided that I could do my capstone project solo with CITZ. Considering this is usually an unpaid work position for most students, I feel like I hit the jackpot.
            </TextBlock>

            <SubtitleBlock>The Idea</SubtitleBlock>

            <PictureCombo imgPath={'/posts/2023/capstone/howIFeel.png'}>The branch I worked for had a problem. When an employee purchases something for work but has to purchase it out of their own pocket, they usually get reimbursed for that purchase. Seems straightforward, but without an organised system for submitting these reimbursement requests, they could come in the form of email, Teams messages, or even just paperwork left on the desk of our admin staff. Needless to say, that can be frustrating in a number of ways.
            </PictureCombo>

            <TextBlock>This didn&apos;t leave admin staff with a reliable way to track these reimbursement requests. Information might be missing, and requests might be lost in the shuffle of day-to-day work. The admin staff already have a lot on their plate, so this was an opportunity to make it easier for them.
            </TextBlock>

            <TextBlock>
                The asks were pretty simple:
            </TextBlock>
            <ol>
                <li>Give staff a standard way to submit their requests.</li>
                <li>Allow admin staff a single portal to view and manage these requests.</li>
                <li>Notify the involved parties when steps were completed or needed their attention.</li>
            </ol>
            <TextBlock>
                Additionally, I was also asked to meet these criteria:
            </TextBlock>

            <PictureBlock path={'/posts/2023/capstone/asks.png'} />

            <SubtitleBlock>Development</SubtitleBlock>

            <TextBlock>I decided to go with something familiar: a tech stack made up of MongoDB, Express, React, and Node.js (MERN). Together, this makes a simple web application that users could access from anywhere. Bonus points in that it aligns with the direction for software development that this group within CITZ is already trying to move towards.
            </TextBlock>

            <TextBlock>My first days were all about planning how things would work together, but I also needed to learn about the Common Hosted Form Service (CHEFS). Don&apos;t ask where the E in that acronym comes from. No one seems to know. It&apos;s essentially a web application owned by another group within government that allows users to build simple forms by dragging and dropping components. It wasn&apos;t super complex to get started, and it saves some time in building my own form components from scratch.
            </TextBlock>

            <PictureBlock path={'/posts/2023/capstone/chefs.png'} subtitle={'A sample CHEFS form'} />

            <TextBlock>My supervisor, Adam Kroon, was also super helpful in this phase. I didn&apos;t have much, if any, experience getting something like this off the ground, but he walked me through the start of it. We had an early requirements gathering session with the administrative staff, where they pitched their idea for the application and what it should achieve.
            </TextBlock>

            <TextBlock>Soon, the shell of the application was up, and it was time to test myself again. Two components of any application in this branch, and in many other branches, are Keycloak and OpenShift. Keycloak is the service used for single sign-on authentication within much of government. Every employee has an ID known as an IDIR. They can use these credentials to access Keycloak-protected applications while also letting applications get basic information about who that user is, such as their email address. OpenShift is a cloud-hosting environment from RedHat that is built upon Kubernetes. If the application is containerized with something like Docker, you can host that application in the OpenShift environment for all to see.
            </TextBlock>

            <TextBlock>The Keycloak (for authentication) aspect was actually very smooth, if only due to the work of my predecessors. Last year&apos;s capstone students, who I worked with at my co-op and who are still employed here, put in a ton of work to make Keycloak integration a breeze.
            </TextBlock>

            <TextBlock>The OpenShift aspect was trickier. The goal was to use GitHub Actions to run deployments every time new code was merged to the main branch. This had actually been done before in other projects, so I didn&apos;t have to break new ground, but I did have to decipher how they did it. The documentation here was sparse, but I really enjoyed this work and found it to be a satisfying challenge.
            </TextBlock>

            <PictureBlock path={'/posts/2023/capstone/deploy.png'} subtitle={'Deployment Workflow'} />

            <TextBlock>The final deployment pipeline would run the workflow in GitHub Actions, which would build all necessary containers and then store them in an instance of JFrog&apos;s Artifactory. From there, it would run steps that instructed OpenShift to reach out to Artifactory and pull these new images then deploy them according to some deployment configuration files. The whole thing has a very Rube-Goldberg machine vibe, but it is very exciting to see it work. Plus, it takes a lot of overhead off the developer (me) when I can trust that my changes will be live soon after I merge.
            </TextBlock>

            <TextBlock>The most challenging tasks were anything involving file uploads and downloads. I was lucky to only have to manage small file sizes. This allowed me to take a few shortcuts that otherwise wouldn&apos;t have been good practice. Users can only upload PDF files, and those are immediately encoded into base64. There&apos;s overhead with this, but it allowed me to use them simply as strings, which MongoDB will happily store. It got trickier when I had to start tracking whether they had been downloaded by admins previously, new files had been uploaded as replacements, or files were removed entirely, but it felt like a real victory when I had everything working just right.
            </TextBlock>

            <TextBlock> It did go through a few iterations, so below you can see the original implementation and my improved one.</TextBlock>

            <PictureBlock path={'/posts/2023/capstone/files.png'} />

            <SubtitleBlock>Result</SubtitleBlock>

            <PictureCombo imgPath={'/posts/2023/capstone/mindmap.png'}>The final product was the Staff Purchase Reimbursement application (SPR). With it, users could submit their reimbursements using a form in CHEFS. This would redirect them to the application where they could upload their necessary files. At this point, the admin staff would be notified by an email service to let them know that a new request was submitted. They then could use the link in that email to navigate to the submission, download the files, and update the status of the request. When that request was eventually marked as completed, the requestor would be notified of its success.
            </PictureCombo>

            <TextBlock>It is not an incredibly complicated application, but it didn&apos;t need to be. It satisfies the asks of my users and does so in a clean and usable fashion. I wish I could get the same out of some of my commonly-used apps.
            </TextBlock>

            <SubtitleBlock>Symposium</SubtitleBlock>

            <PictureCombo imgPath={'/posts/2023/capstone/symposium.jpg'}>At the end of my classes and my project, I was able to demonstrate my hard work at the Technology Symposium held by Camosun College. Every capstone team from Computer Science and Mechanical Engineering had their own table to showcase their projects, and we gave presentations throughout the day.
            </PictureCombo>

            <PictureCombo imgPath={'/posts/2023/capstone/presentation.jpg'} side='left'>All things concerned, the event ran very smoothly. We had three guest speakers, including my own project&apos;s sponsor, and the attendance was higher than I expected. I was the last person to give my presentation for the day, and it was nice to finally be able to say that I&apos;m done. This marked the absolute end of my college program.
            </PictureCombo>

            <SubtitleBlock>Outcome</SubtitleBlock>

            <TextBlock>During this semester, I was also encouraged to apply for another posting within the Information Management Branch. It was the exact same position, but it was the full-time, permanent version. I was hesitant at first, feeling like there was no way I could land a position against the pool of developers that would surely be applying, but with the encouragement of my sponsor, I applied anyway. To get to the point, I was successful in the hiring competition and now have a position there that I&apos;ve been working at since, helping to develop applications already in use.
            </TextBlock>

            <TextBlock>I don&apos;t think I could have asked for a better semester or final outcome, and I&apos;m looking forward to the continuous improvement in my own abilities that I think I can reach in the coming year.
            </TextBlock>

            <TextBlock>If you&apos;d like to see more on this project, please visit <a href={currentPost.paths.code}>the GitHub repository</a>.
            </TextBlock>

            <TextBlock>I also have two videos you could watch instead. The first one is a brief walkthrough of the application&apos;s features (without sound). </TextBlock>

            <VideoBlock path={'https://www.youtube.com/embed/orhaXGq_8so?si=Rfw3VlFbhKx8GOIs'} />
            <TextBlock>The second is a mock of an infomercial you might see on TV.</TextBlock>
            <VideoBlock path={'https://www.youtube.com/embed/jOzL-ZXMCXs?si=e8_K63ouCWatcCNo'} />

        </Grid>
    );
}

export default Capstone;

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

const Coop = () => {
    const currentPost = posts.find(post => post.title == "Co-op Experience");
    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <TitleBlock>{currentPost.title}</TitleBlock>
            <DateBlock>{currentPost.date.toLocaleDateString('fr-CA')}</DateBlock>

            <TextBlock>That&apos;s it! Summer is almost over. I was fortunate enough to spend the majority of it in a co-op position with the Ministry of Citizens&apos; Services. </TextBlock>
            <TextBlock>The title I had was Full Stack Project Analyst. When I told that to my friends, they asked, “What does that even mean?” To be honest, I had no idea before I started. It wasn&apos;t until the first day that I had some inkling of what I would be doing. Now that it&apos;s over, I have no complaints.</TextBlock>

            <SubtitleBlock>Hybrid Workplace</SubtitleBlock>
            <TextBlock>Most of the time, another co-op student and I worked alongside the Hybrid Workplace project, a communication board that was intended for staff to share insights with each other on the new experience of blending remote and in-person work. It was an undertaking by a group of Camosun capstone students, completing their final project for their diploma. While the capstone students tackled the development, I worked on testing and other optimizations.</TextBlock>
            <TextBlock>It was a big hurdle. The application used a MERN stack (Mongo, Express, React, Node), so I did my best to get up to speed with that first. After that, the goal was to explore and implement a testing framework. These student projects often act like a trial to see how something could be implemented and if it could work with other government projects, so I felt a little like a trailblazer.</TextBlock>
            <PictureCombo imgPath={'/posts/2022/coop/workflow.png'} subtitle={'GitHub Workflow'}>
                <TextBlock>Backend testing was the easier task, and after much testing, I settled on using Jest as the primary testing framework. Combined with the SuperTest library, it allowed me to write tests quickly and easily, especially when I started abstracting my own testing functions in ways I could just import them into multiple tests. Overall, I think I wrote over 600 tests for the API. It was a lot of work, and it was a lot to maintain if anything substantial changed.</TextBlock>
                <TextBlock>I needed a way to deploy these tests when code was updated, so I went about creating a workflow using GitHub Actions. Every time a pull request against the main branch is updated or opened, it triggers the test run. It would fail outright if the Docker container failed to build or if the container was unhealthy. Test failures were simply tracked and recorded in JSON files. The capstone team had limited time, so I didn&apos;t want to slow their progress. </TextBlock>
            </PictureCombo>
            <TextBlock>For frontend testing, I experimented with Puppeteer, which is a tool that lets you program actions as if a user was actually controlling the browser. The approach was a little convoluted and finicky, especially since there were no accessibility tags to use in object selection, but it was the most flexible tool. It was only the only tool that seemed to get past the user authentication used by the provincial government: Keycloak. More on Keycloak later.</TextBlock>
            <TextBlock>This project also gave me the opportunity to research and test a lot of security tools. CodeQL was an easy Static Application Security Testing (SAST) tool to use, and it could integrate with GitHub directly. OWASP ZAP was an interesting experiment I wish I had more time to utilize.</TextBlock>
            <TextBlock>The biggest feeling of accomplishment from this project came from a challenge with the developers&apos; preferences and maintaining a clean production image of the application. In order to make development easier, the developers had altered the Docker build so that their API container would hotload changes from the local system. If they saved new code, the container updated and restarted Node. This was a big issue in a few ways. One, it meant that it was using a volume tied directly to the source files on the developer&apos;s system. If they deleted things in the container, the system files were gone too. Two, it meant that nodemon, a service checking if files had been updated, was now running on every image, even the production ones. Through a lot of trial and error, I managed to make a two-fold approach. Using docker-compose and multiple dockerfiles, I created two options when building the containers: a front and back end that was optimized for production and one that contained the hotloading. By including some npm commands for shortcuts, it offered the developers a better version of their hotloading environment that was faster and easier to get started while maintaining clean, minimal images for use in testing and production. </TextBlock>
            <TextBlock>Interestingly, the provincial government keeps a lot of their projects as public code on GitHub, so you can see the repository right <a href='https://github.com/bcgov/CITZ-HybridWorkplace'>here</a>.</TextBlock>

            <SubtitleBlock>SLAM</SubtitleBlock>
            <TextBlock>The other project I worked on was the Software License and Application Management (SLAM) application. There wasn&apos;t much work for me here at first. It also had a Reach frontend, which I was still learning, but it also used NestJS as a premade backend option. That took some real time to decipher. It didn&apos;t help that it was in TypeScript, which was new to me.</TextBlock>
            <TextBlock>Eventually, I started taking tickets. Mostly they were frontend improvements, but it provided a nice introduction to React, MUI, Formik, and other packages. For almost a month at the end of the co-op, the main developers were on vacation, and the other co-op student and I had time to power through a ton of tickets. The UI received the updates it needed to make for a smoother user experience, the backend required adjustments to accommodate new users, and the authorization system was still using GitHub. </TextBlock>
            <PictureBlock path={'/posts/2022/coop/software.png'} />
            <TextBlock>This was the biggest challenge of SLAM. Keycloak is the authorization service that had to be integrated. When users logged in, they would be redirected to Keycloak, they would provide their credentials, then they had to be sent back and given a local authorization token for SLAM. For co-op students, this was a big ask. </TextBlock>
            <TextBlock>It didn&apos;t help that all the documentation for Keycloak didn&apos;t address our project&apos;s setup. It took meetings with the Keycloak team to even find out that there was a special route to call just to have a user logged out. The previous GitHub authentication used NextAuth, which appeared like it should work with Keycloak flawlessly. The other co-op student and I worked for over a week on this challenge, until one day we found the answer. Even though this was a public Keycloak instance, we had to provide a private key value to NextAuth. It doesn&apos;t use it, but it won&apos;t function without something there. I believe we chose “averysecretkey.”</TextBlock>
            <TextBlock>This project was separated into two repositories: an <a href={'https://github.com/bcgov/citz-imb-slam-app'}>APP</a> and an <a href={'https://github.com/bcgov/citz-imb-slam-api'}>API</a>. It is all public information, so check them out.</TextBlock>
            <TextBlock>I am so glad that I was able to be part of this team for the summer. Truly, it feels like I learned more in these few months than the whole eight months in classes before this. It also opened my eyes to areas of IT that I had never considered before: DevOps and Quality Assurance. I&apos;ll have to consider these paths in the future.</TextBlock>
        </Grid>
    );
}

export default Coop;

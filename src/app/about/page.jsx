"use client"

import Grid from '@mui/material/Unstable_Grid2';
import colours from '../../components/Colours';
import HighlightBox from '@/components/HighlightBox';
import HighlightBoxVideo from '@/components/HighlightBoxVideo';

const About = () => {
    return (
        <Grid container spacing={2} padding="2em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0
        }}>
            <Grid xs={12}>
                <h2>Where is he now?</h2>
                <p>Dylan currently lives in (sometimes) sunny Esquimalt, BC along with his wife and two cats.</p>
                <p>Since finishing his Bachelor’s Degree in 2013, he has continued to gather a growing number of certifications under his belt and has found himself working in several locations. </p>
            </Grid>
            <Grid xs={12} md={4}>
                <HighlightBox 
                    title={'Taiwan'} 
                    text={`He jumped into the education field, living and teaching in Qidu, Taiwan. It was a great adventure, and there were ample opportunities to explore the beautiful country. He misses the amazing food most of all.`} 
                    imgSrc={'/about/grzkaq72.bmp'}/>
            </Grid>
            <Grid xs={12} md={4}>
                <HighlightBox 
                    title={'Edmonton'} 
                    text={`Returning to Canada, he ended up tutoring adults who had been injured in workplace accidents. He covered subjects such as ESL, computers, and GED preparation.`} 
                    imgSrc={'/about/3q1ngsu0.bmp'}/>
            </Grid>
            <Grid xs={12} md={4}>
                <HighlightBox 
                    title={'Victoria'} 
                    text={`Once back in Victoria, he worked with the City of Victoria in several different positions, learning more about budgets, project workflows, and dipping his toes in SharePoint and Power Automate. `} 
                    imgSrc={'/about/kdosa2ml.bmp'}/>
            </Grid>
            <Grid xs={12}>
                <p>Now he is continuing his education at Camosun College. He is currently enrolled in an Information and Computer Systems program. Find more info about his past on his resume. </p>
                <h2>Hobbies</h2>
                <p>In his space time, Dylan keeps a to-do list of project ideas, some of which you can view on his projects page. When he’s not coding, he enjoys a number of other hobbies. </p>
            </Grid>
            <Grid xs={12} md={4}>
                <HighlightBoxVideo
                    title={'He drums.'} 
                    text={`Starting from a young age, Dylan has always been tapping rhythms on any surface he can find. He previously played with the Greater Victoria Concert Band, but now he mostly pops in at open mics for a jam session.`} 
                    videoSrc={'/about/openmic.mp4'}/>
            </Grid>
            <Grid xs={12} md={4}>
                <HighlightBoxVideo
                    title={'He skates.'} 
                    text={`More at home on the ice than dry land, Dylan tries to stop by the arena on a regular basis. When younger, he played hockey as a defensemen. His lap record —with gear— is 13.4 seconds. `} 
                    videoSrc={'/about/skatingcropped.mp4'}/>
            </Grid>
            <Grid xs={12} md={4}>
                <HighlightBoxVideo
                    title={'He shoots.'} 
                    text={`Dylan took up archery in 2020, and he sticks to primitive bows and horse bows while using a thumb draw technique. He keeps his practice to quiet forest clearings, so keep your eyes open on your next walk and you might find him!`} 
                    videoSrc={'/about/archery.mp4'}/>
            </Grid>
            <Grid xs={12}>
                <p>And when he’s not doing these things, you might also find him writing, riding his motorcycle, gaming or working on his other skills. </p>
                <h2>What's next?</h2>
                <p>When he finishes his courses at Camosun in 2023, Dylan hopes to find work in the fields of DevOps or Software Development. He has a drive to solve problems with no clear solutions, and he thrives in settings where the creativity and optimization of those solutions are encouraged. </p>
            </Grid>
        </Grid>
    );
}

export default About;
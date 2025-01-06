"use client"

import Grid from '@mui/material/Unstable_Grid2';
import colours from '../../components/Colours';
import HighlightBox from '@/components/common/HighlightBox';
import HighlightBoxVideo from '@/components/common/HighlightBoxVideo';
import PictureCombo from '@/components/posts/PictureCombo';
import TextBlock from '@/components/posts/TextBlock';
import Colours from '../../components/Colours';
import Link from 'next/link';

const About = () => {
    return (
        <Grid container spacing={2} padding="2em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0
        }}>
            <h3>Hi! I&apos;m <span style={{ color: Colours.accent }}>Dylan Barkowsky</span>.</h3>
            <PictureCombo imgPath={'/about/butchard.png'} side='left' imgColWidth={5}>
                <p>Over the past decade, I&apos;ve had a broad range of careers where I worked teaching English as a Second Language, tutoring adults who have had to change careers due to injury, and manoeuvring my way through technical projects with the City of Victoria.
                </p>

                <p>More recently, I completed an Information & Computer Systems program, and now I work as a Full Stack Developer for the Province of British Columbia, where I help make applications that support staff in providing much-needed services to residents.</p>

                <p>Outside of work, I&apos;ve managed to collect a wide variety of hobbies that include drumming, archery, and scuba diving. I&apos;m also an avid gamer, motorcycle rider, and ball hockey enthusiast.
                </p>
            </PictureCombo>

            <TextBlock>When I create applications for my personal projects, you can read about them in detail on the <Link href={'/blog'}>Blog page</Link>, otherwise I encourage you to check out the <Link href={'/resume'}>Resume page</Link>.
            </TextBlock>

            <TextBlock>I&apos;d love it if you want to chat in more detail about any projects, past or future, or even about hobby-related things. Find my contact info on the Resume page.
            </TextBlock>
        </Grid>
    );
}

export default About;

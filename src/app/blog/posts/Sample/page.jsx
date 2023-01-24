"use client"

import Grid from '@mui/material/Unstable_Grid2';
import colours from '@/components/Colours';
import PictureBlock from '@/components/posts/PictureBlock';
import TextBlock from '@/components/posts/TextBlock';
import PostTitle from '@/components/posts/PostTitle';
import PictureCombo from '@/components/posts/PictureCombo';

const Sample = () => {
    const noPaddingStyle = { padding: '0' };

    return (
        <Grid container spacing={2} padding="1em" sx={{
            backgroundColor: colours.lightBackground,
            margin: 0,
        }}>
            <PostTitle>My Title</PostTitle>
            <PictureBlock 
                path={'/landing/2021-09-18.3.jpg'}
                subtitle={'Well hello!'}
            />
            <PictureBlock 
                path={'/landing/2021-09-18.3.jpg'}
            />
            <TextBlock>
                Phasellus consequat, nibh a fames. Facilisis nulla, varius convallis suscipit primis. Hac donec convallis vivamus, mauris nec a, morbi senectus himenaeos integer nibh bibendum odio. Senectus porta convallis vitae, tortor leo auctor, vehicula ligula aenean rutrum nec laoreet proin maecenas. Quis pellentesque velit per, aliquet netus fringilla, vel condimentum odio convallis habitant eleifend nec euismod.
            </TextBlock>
            <TextBlock>
                Elementum pellentesque odio, tempor auctor, est pulvinar nostra dapibus elit. Nibh phasellus, scelerisque convallis class habitant. Erat mattis quisque, amet duis, praesent blandit arcu posuere cras. Dolor commodo, hendrerit metus aliquet cursus. Potenti tristique nisl nunc, quisque integer adipiscing, egestas urna curabitur primis commodo faucibus viverra.
            </TextBlock>

            <PictureCombo imgPath={'/landing/2021-09-18.3.jpg'}>
                Elementum pellentesque odio, tempor auctor, est pulvinar nostra dapibus elit. Nibh phasellus, scelerisque convallis class habitant. Erat mattis quisque, amet duis, praesent blandit arcu posuere cras. Dolor commodo, hendrerit metus aliquet cursus. Potenti tristique nisl nunc, quisque integer adipiscing, egestas urna curabitur primis commodo faucibus viverra.
            </PictureCombo>

            <PictureCombo imgPath={'/landing/2021-09-18.3.jpg'} subtitle={'Wow this is great!'} side="left">
                Elementum pellentesque odio, tempor auctor, est pulvinar nostra dapibus elit. Nibh phasellus, scelerisque convallis class habitant. Erat mattis quisque, amet duis, praesent blandit arcu posuere cras. Dolor commodo, hendrerit metus aliquet cursus. Potenti tristique nisl nunc, quisque integer adipiscing, egestas urna curabitur primis commodo faucibus viverra.
            </PictureCombo>
        </Grid>
    );
}

export default Sample;
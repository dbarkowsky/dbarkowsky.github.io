import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ProgressBar from "@ramonak/react-progress-bar";
import colours from "../Colours";

const SkillBlock = ({skill}) => {
    const noTopPaddingStyle ={
        paddingTop: '0'
    }

    const {name, rating} = skill;

    return (
        <Grid container spacing={0.5}>
            <Grid xs={12} >
                {name}
            </Grid>
            <Grid xs={12}>
                <ProgressBar 
                    completed={rating} 
                    maxCompleted={5} 
                    width={'70%'}
                    bgColor={colours.highlight}
                    baseBgColor={colours.darkBackground}
                    borderRadius={'5px'}
                    isLabelVisible={false}
                />
            </Grid>
        </Grid>
    );
}

export default SkillBlock;
import Grid from "@mui/material/Unstable_Grid2";
import ProgressBar from "@ramonak/react-progress-bar";
import colours from "../Colours";

const SkillBlock = ({ skill }) => {
    const { name, rating } = skill;
    const maxRating = 5;
    const noPaddingStyle = { padding: '0', paddingBottom: '10px' }
    return (
        <Grid container spacing={0.5} sx={noPaddingStyle}>
            <Grid xs={12}>
                {name}
            </Grid>
            <Grid xs={12}>
                <ProgressBar
                    completed={rating}
                    maxCompleted={maxRating}
                    width={'165px'}
                    bgColor={colours.progressBarForeground}
                    baseBgColor={colours.progressBarBackground}
                    borderRadius={'5px'}
                    isLabelVisible={true}
                    customLabel={`${rating}/${maxRating}`}
                    labelAlignment={'left'}
                    labelColor={colours.lightText}
                />
            </Grid>
        </Grid>
    );
}

export default SkillBlock;

import Grid from "@mui/material/Unstable_Grid2";
import PictureBlock from "./PictureBlock";

const PictureCombo = ({ children, imgPath, subtitle = undefined, side = 'right', imgColWidth = 6 }) => {
    const noMarginStyle = {
        margin: '0',
        padding: '0',
        paddingRight: '0.25em',
        minHeight: '1em'
    };
    const marginGridWidth = 0.4;
    const textColWidth = 12 - marginGridWidth - imgColWidth;
    switch (side) {
        case 'right':
            return (
                <Grid container spacing={3} xs={12}
                    sx={{ margin: '0.75em 0', padding: '0', textAlign: 'justify' }}>
                    <Grid xs={12} sm={textColWidth} sx={noMarginStyle}>
                        <div style={{ marginTop: '-1em' }}>{children}</div>
                    </Grid>
                    <Grid xs={0} sm={0.4} sx={noMarginStyle}></Grid>
                    <Grid xs={12} sm={imgColWidth} sx={noMarginStyle}>
                        <PictureBlock path={imgPath} subtitle={subtitle} />
                    </Grid>
                </Grid>
            );

        case 'left':
            return (
                <Grid container spacing={3} xs={12}
                    sx={{ margin: '0.75em 0', padding: '0', textAlign: 'justify' }}>
                    <Grid xs={12} sm={imgColWidth} sx={noMarginStyle}>
                        <PictureBlock path={imgPath} subtitle={subtitle} />
                    </Grid>
                    <Grid xs={0} sm={0.4} sx={noMarginStyle}></Grid>
                    <Grid xs={12} sm={textColWidth} sx={noMarginStyle}>
                        <div style={{ marginTop: '-1em' }}>{children}</div>
                    </Grid>
                </Grid>
            );
    }

}

export default PictureCombo;

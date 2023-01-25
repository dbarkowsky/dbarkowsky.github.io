import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PictureBlock from "./PictureBlock";

const PictureCombo = ({children, imgPath, subtitle = undefined, side = 'right'}) => {
    const noMarginStyle = {
        margin: '0',
        padding: '0'
    };
    switch (side) {
        case 'right':
            return (
                <Grid container spacing={3} xs={12} 
                    sx={{ margin: '0.75em 0', padding: '0', textAlign: 'justify' }}>
                    <Grid xs={12} sm={4} sx={noMarginStyle}>
                        <div style={{ marginTop: '-1em' }}>{children}</div>
                    </Grid>
                    <Grid sm={0.5}></Grid>
                    <Grid xs={12} sm={7.5} sx={noMarginStyle}>
                        <PictureBlock path={imgPath} subtitle={subtitle}/>
                    </Grid>
                </Grid>
            );
    
        case 'left':
            return (
                <Grid container spacing={3} xs={12} 
                    sx={{ margin: '0.75em 0', padding: '0', textAlign: 'justify' }}>
                    <Grid xs={12} sm={7.5} sx={noMarginStyle}>
                        <PictureBlock path={imgPath} subtitle={subtitle} />
                    </Grid>
                    <Grid sm={0.5}></Grid>
                    <Grid xs={12} sm={4} sx={noMarginStyle}>
                        <div style={{ marginTop: '-1em'}}>{children}</div>
                    </Grid>
                </Grid>
            );
    }
    
}

export default PictureCombo;
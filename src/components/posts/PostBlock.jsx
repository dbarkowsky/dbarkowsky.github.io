import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import colours from '../Colours';

const PostBlock = ({title, date, blurb, paths}) => {
    const cardButtonStyle = {
        color: colours.lightText,
        margin: '0 0.5em',      
        '&:hover': {
            color: colours.darkText,
            backgroundColor: colours.lightBackground
        }
    };

    return (
    <Card sx={{ maxWidth: 345, backgroundColor: colours.darkBackground, color: colours.lightText }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={paths.img}
        />
        <CardContent>
            <h3 style={{ margin: '0'}}>{title}</h3>
            <h5 style={{ marginTop: '0'}}>{date.toLocaleDateString()}</h5>
            <p style={{ fontSize: '12pt' }}>{blurb}</p>
        </CardContent>
        <CardActions>
            <Button size="small" href={paths.post} sx={cardButtonStyle}>More</Button>
            <Button size="small" href={paths.code} sx={cardButtonStyle}>Code</Button>
            <Button size="small" href={paths.demo} sx={cardButtonStyle}>Demo</Button>
        </CardActions>
    </Card>
    );
}

export default PostBlock;
import Button from '@mui/material/Button';

const NavBarLink = ({href, text}) => {
    return (
    <Button 
        variant="text" 
        href={href} 
        sx={{ 
            flexGrow: 0,
            color: "white" }
            }>
        <b>{text}</b>
    </Button>);
}

export default NavBarLink;
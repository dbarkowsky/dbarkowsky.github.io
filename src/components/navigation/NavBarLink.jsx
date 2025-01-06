import Button from '@mui/material/Button';
import Link from 'next/link';

const NavBarLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <Button
        variant="text"
        sx={{
          flexGrow: 0,
          color: "white",
        }}>
        <b>{text}</b>
      </Button>
    </Link>
  );
};

export default NavBarLink;

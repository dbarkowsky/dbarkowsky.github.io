"use client"
import { Button, Typography } from '@mui/material';
import styles from './landing.module.css'
const Landing = () => (<>
    <div className={styles.splashBackground}></div>
    <Typography variant="h4" className={styles.splashWord}>Dylan Barkowsky</Typography>
    <Button variant="outlined" className={styles.diveButton} href="/about"> 
        <Typography 
            variant='button'
            align='center'
            sx={{
                fontSize: "1.5em",
                fontFamily: 'Passion One, sans-serif'
            }}
        >DIVE IN</Typography>
    </Button>
</>
    
);

export default Landing;
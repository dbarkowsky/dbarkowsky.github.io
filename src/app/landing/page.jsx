"use client"

import { Button } from '@mui/material';
import styles from './landing.module.css'
const Landing = () => (<>
    <div className={styles.splashBackground}></div>
    <Button variant="outlined" className={styles.diveButton} href="/about"> DIVE IN </Button>
</>
    
);

export default Landing;
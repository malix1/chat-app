import { Grid} from '@mui/material';
import React from 'react';
import Chatbox from '../Components/Chatbox/Charbox';
import Contacts from '../Components/Contacts/Contacts';
import styles from './App.module.css';

function App() {
  return (
    <Grid container maxWidth="80%" className={styles.App} >
      <Grid item xs={4}>
        <Contacts />
      </Grid>
      <Grid item xs={8}>
        <Chatbox />
      </Grid>
    </Grid>
  );
}

export default App;

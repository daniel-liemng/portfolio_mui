import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import { Send } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },
  button: {
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tomato',
  },
  title: {
    margin: '1rem 0',
    textTransform: 'uppercase',
    color: 'tomato',
  },
}));

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'tomato',
    },
    '& label': {
      color: 'tan',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan',
      },
      '&:hover fieldset': {
        borderColor: 'tomato',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'tan',
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component='div'>
      <Grid container justify='center'>
        <Box component='form' className={classes.form}>
          <Typography variant='h5' align='center' className={classes.title}>
            hire or contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label='Name'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style: { color: 'white' } }}
          />
          <InputField
            fullWidth={true}
            label='Email'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style: { color: 'white' } }}
          />
          <InputField
            fullWidth={true}
            label='Company Name'
            variant='outlined'
            margin='dense'
            size='medium'
            inputProps={{ style: { color: 'white' } }}
          />

          <Button
            className={classes.button}
            variant='outlined'
            fullWidth={true}
            endIcon={<Send />}
          >
            Contact me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;

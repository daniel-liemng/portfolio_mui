import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Avatar, Box } from '@material-ui/core';
import Typed from 'react-typed';

import avatar from '../avatar.png';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: '1rem auto',
  },
  title: {
    color: 'tomato',
  },
  subtitle: {
    color: 'tan',
    marginBottom: '3rem',
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: '1',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Avatar src={avatar} className={classes.avatar} alt='hero' />
      <Typography variant='h4' className={classes.title}>
        <Typed strings={['Liem Nguyen']} typeSpeed={30} backSpeed={50} loop />
      </Typography>
      <br />
      <Typography variant='h5' className={classes.subtitle}>
        <Typed
          strings={['Web Design', 'Dev Ops', 'Web Development']}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;

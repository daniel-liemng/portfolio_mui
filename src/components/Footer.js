import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';

const useStyles = makeStyles({
  footer: {
    background: '#222',
  },
  root: {
    '& .MuiBottomNavigationAction-root': {
      minWidth: 0,
      maxWidth: 250,
    },
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.footer}>
      <BottomNavigationAction
        icon={<Facebook />}
        className={classes.root}
      ></BottomNavigationAction>
      <BottomNavigationAction
        icon={<Twitter />}
        className={classes.root}
      ></BottomNavigationAction>
      <BottomNavigationAction
        icon={<Instagram />}
        className={classes.root}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
};

export default Footer;

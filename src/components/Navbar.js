import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

import Footer from './Footer';
import avatar from '../avatar.png';

const useStyles = makeStyles((theme) => ({
  appbarBg: {
    background: '#222',
  },
  iconColor: {
    color: 'tomato',
  },
  appbarTitle: {
    color: 'tan',
  },
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'tan',
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listLink: '/',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
    listLink: '/resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
    listLink: '/portfolio',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
    listLink: '/contact',
  },
];

const Navbar = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => (e) => {
    setState({ ...state, [slider]: open });
  };

  const sideList = (slider) => (
    <Box
      onClick={toggleSlider(slider, false)}
      className={classes.menuSliderContainer}
      component='div'
    >
      <Avatar src={avatar} className={classes.avatar} alt='person' />
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} button component={Link} to={item.listLink}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={item.listText}
              className={classes.listItem}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component='nav'>
        <AppBar position='static' className={classes.appbarBg}>
          <Toolbar>
            <IconButton onClick={toggleSlider('right', true)}>
              <ArrowBack className={classes.iconColor} />
            </IconButton>
            <Typography variant='h5' className={classes.appbarTitle}>
              Portfolio
            </Typography>
            <SwipeableDrawer
              anchor='right'
              open={state.right}
              onOpen={toggleSlider('right', true)}
              onClose={toggleSlider('right', false)}
            >
              {sideList('right')}
              <Footer />
            </SwipeableDrawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;

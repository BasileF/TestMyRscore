import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Button } from '@material-ui/core';
import { HeaderProps } from '../interfaces/CommonInterfaces';
import './Header.css'

import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FunctionsIcon from '@material-ui/icons/Functions';
import SchoolIcon from '@material-ui/icons/School';
import PhoneIcon from '@material-ui/icons/Phone';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
export default function Header(props: HeaderProps) {
  return (
    <AppBar
      position='absolute'
      className='header'
    >
      <Toolbar variant='dense'>
        <Tabs
          value={props.activeTab}
          onChange={(e, val) => props.setActiveTab(val)}
          TabIndicatorProps={{ style: { backgroundColor: 'white', width: '110px' } }}
        >
          <Tab label='Home' style={{ minWidth: '110px' }} />
          <Tab label='Overall' style={{ minWidth: '110px' }} />
          <Tab label='University' style={{ minWidth: '110px' }} />
          <Tab label='Contact' style={{ minWidth: '110px' }} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      position: 'absolute',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
      width: '100%',
      justifyContent: 'center',
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);

export function PrimarySearchAppBar(props: HeaderProps) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <HomeIcon />
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
          <FunctionsIcon />
        <p>Overall</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          color="inherit"
        >
          <SchoolIcon />
        </IconButton>
        <p>Universities</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          color="inherit"
        >
          <PhoneIcon />
        </IconButton>
        <p>Contact</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position='absolute'
        className='header'
      >
        <Toolbar variant='dense'>
          <Typography className={classes.title} variant="h6" noWrap>
            TMRS
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Tabs
              value={props.activeTab}
              onChange={(e, val) => props.setActiveTab(val)}
              TabIndicatorProps={{ style: { backgroundColor: 'white', width: '110px' } }}
            >
              <Tab label='Home' style={{ minWidth: '110px' }} />
              <Tab label='Overall' style={{ minWidth: '110px' }} />
              <Tab label='University' style={{ minWidth: '110px' }} />
              <Tab label='Contact' style={{ minWidth: '110px' }} />
            </Tabs>
          </div>
          <div className={classes.sectionMobile}>
            <Button
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreHorizIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
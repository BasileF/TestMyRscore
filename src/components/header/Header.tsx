import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Button } from '@material-ui/core';
import { HeaderProps } from '../../interfaces/CommonInterfaces';
import './Header.css'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FunctionsIcon from '@material-ui/icons/Functions';
import SchoolIcon from '@material-ui/icons/School';
import PhoneIcon from '@material-ui/icons/Phone';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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
      [theme.breakpoints.up('xs')]: {
        display: 'block',
      },
      position: 'absolute',
      cursor: 'pointer'
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

export default function Header(props: HeaderProps) {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
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
      <MenuItem onClick={(e) => props.setActiveTab(0)}>
        <HomeIcon />
        <p className='header-mobile-menu-text'>Home</p>
      </MenuItem>
      <MenuItem onClick={(e) => props.setActiveTab(1)}>
        <FunctionsIcon />
        <p className='header-mobile-menu-text'>Overall</p>
      </MenuItem>
      <MenuItem onClick={(e) => props.setActiveTab(2)}>
        <SchoolIcon />
        <p className='header-mobile-menu-text'>University</p>
      </MenuItem>
      <MenuItem onClick={(e) => props.setActiveTab(3)}>
        <PhoneIcon />
        <p className='header-mobile-menu-text'>Contact</p>
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
          <Typography className={classes.title} variant="h6" noWrap onClick={(e) => props.setActiveTab(0)}>
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
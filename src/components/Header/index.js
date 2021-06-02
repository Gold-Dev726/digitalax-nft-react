import React from 'react';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ThemeSwitchButton from "../ThemeSwitchButton";
import clsx from "clsx"
// import Logo from "../images/logo1.png"
// import { logout } from '../../actions/authActions';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  grow: {
    flexGrow: 1,
  },
  title: {
    paddingRight: 20,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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
    padding: theme.spacing(0, 2),
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: "center"
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function Header(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const { isAuthenticated, user } = useSelector(state => state.auth)
  const isAuthenticated = false

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLogoutClick = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    // dispatch(logout())
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogoutClick}>Log out</MenuItem>
    </Menu>
  );

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
      <MenuItem className="py-0 min-h-0 h-7">Blog</MenuItem>
      <MenuItem className="py-0 min-h-0 h-7">Faq</MenuItem>
      <MenuItem className="py-0 min-h-0 h-7">Example</MenuItem>
      <Divider className="bg-gray-900" />

      {!isAuthenticated ? (
        <>
          <MenuItem to="/login" component={Link} className="py-0 min-h-0 h-7">Login</MenuItem>
          <MenuItem to="/register" component={Link} className="py-0 min-h-0 h-7">Sign up</MenuItem>
        </>) : (
        <MenuItem className="py-0 min-h-0 h-7" onClick={handleLogoutClick}>Log out</MenuItem>
      )}
    </Menu>
  );

  const unAuthMenu = (
    <>
      <Button color="inherit" to="/login" component={Link} className={classes.menuButton}>Login</Button>
      <Button color="inherit" to='/register' component={Link} className={classes.menuButton}>Sign up</Button>
    </>
  );
  const isAuthMenu = (
    <Button
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
      startIcon={<AccountCircle />}
    >
      {/* {user.name} */}
      TIm
    </Button>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className="bg-black pl-13">
        <Toolbar className="flex flex-row w-full justify-between">
          <div className="flex items-center">
            <Link to="/">
              <p className="font-rainbow text-white text-xl font-normal">Digitalax</p>
              <p className="font-inter text-white text-xxs font-semibold">The Digital Fashion Engine</p>
            </Link>
          </div>
          <div className={classes.sectionDesktop}>
            <a
              href="/"
              className="text-third font-normal font-inter text-base underline mx-1"
            >
              Global Designer Network
            </a>
            <a
              href="/"
              className="text-third font-normal font-inter text-base underline mx-1"
            >
              DigiFizzy
            </a>
            <a
              href="/"
              className="text-third font-normal font-inter text-base underline mx-1"
            >
              Blog Updates
            </a>
            <a
              href="/"
              className="text-third font-normal font-inter text-base underline mx-1"
            >
              Marketplace
            </a>
            <a
              href="/"
              className="text-third font-normal font-inter text-base underline mx-1"
            >
              Staking
            </a>
            <a
              href="/"
              className="text-third font-normal font-inter text-base underline mx-1"
            >
              Esports Platform
            </a>
            <Button variant="outlined" className="font-inter text-third border-2 rounded-none border-third text-base font-normal">Sign In</Button>
          </div>


        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}

export default Header;
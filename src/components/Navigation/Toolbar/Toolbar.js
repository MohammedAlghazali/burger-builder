import classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

console.log('classes from Toolbar', classes);
const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Logo style={{ height: '80%' }} />
    <NavigationItems className={classes.DesktopOnly} />
  </header>
);

export default toolbar;

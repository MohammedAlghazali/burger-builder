import classes from './NavigationItems.module.css';
import NavigationItem from './navigationItem/navigationItem';

const navigationItems = (props) => (
  <nav className={props.className}>
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
  </nav>
);

export default navigationItems;

import classes from './Toolbar.module.css';

console.log('classes from Toolbar', classes);
const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div>LOGO</div>
    <nav>...</nav>
  </header>
);

export default toolbar;

import classes from './Backdrop.module.css';

console.log('classes', classes);
const backdrop = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupDetails(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <desc>{props.description}</desc>
        </div>
        
      </Card>
    </li>
  );
}

export default MeetupDetails;

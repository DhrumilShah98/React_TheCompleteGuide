import Card from '../ui/Card';
import classes from './MeetupItem.module.css';


function MeetupItem(props) {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.img}>
                    <img src={props.img} alt={props.title} className={classes.image} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                    <div className={classes.actions}>
                        <button className={classes.button}>To Favorites</button>
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
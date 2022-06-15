import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory();

    function addMeedUpHandler(meetUpData) {
        fetch('<firebase_realtime_database>/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetUpData),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => history.replace('/'));

    }

    return (
        <section>
            <h1>Add new Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeedUpHandler} />
        </section>
    );
}

export default NewMeetupPage;
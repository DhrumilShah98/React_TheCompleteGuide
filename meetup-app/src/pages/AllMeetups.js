import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [meetUpData, setMeetUpData] = useState([]);

    useEffect(() => {
        fetch('<firebase_realtime_database>/meetups.json')
            .then(response => response.json())
            .then(data => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                }
                setIsLoading(false);
                console.log(data);
                setMeetUpData(meetups);
            });
    }, []);

    return (
        (isLoading) ?
            <section>
                <p>Loading...</p>
            </section> :
            <section>
                <h1>All Meetups</h1>
                <MeetupList meetups={meetUpData} />
            </section>

    );
}

export default AllMeetupsPage;

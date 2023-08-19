import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/09/26105755/fish-1.jpg",
    address: "XYZ address",
    description: "First Description",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/09/26105755/fish-1.jpg",
    address: "ABC address",
    description: "Second Description",
  },
];
const HomePage = () => {
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    async function getMeetupsFromDatabase() {
      const res = await fetch("/api/new-meetup");
      const data = await res.json();
      console.log(data.meetups);  
      setMeetups(data.meetups);
    }
   getMeetupsFromDatabase();
  }, []);
  return <MeetupList meetups={meetups} />;
};
export async function getStaticProps() {
  return {
    props: {
      meetups: [],
    },
  };
}
export default HomePage;

// import { useEffect, useState } from "react";

import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/09/26105755/fish-1.jpg",
//     address: "XYZ address",
//     description: "First Description",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/09/26105755/fish-1.jpg",
//     address: "ABC address",
//     description: "Second Description",
//   },
// ];
const HomePage = (props) => {
  // const [meetups, setMeetups] = useState([]);
  // useEffect(() => {
  //   async function getMeetupsFromDatabase() {
  //     const res = await fetch("/api/new-meetup");
  //     const data = await res.json();
  //     console.log(data.meetups);
  //     setMeetups(data.meetups);
  //   }
  //  getMeetupsFromDatabase();
  // }, []);
  // above code is how i used get api call
  // instead directly calling mongo client in getstaticprops is better approach
  return <MeetupList meetups={props.meetups} />;
};
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://abhayhasrani:LpOAuUeKnpCSDnKR@cluster0.b34ijnd.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const database = client.db();
  const meetupCollection = database.collection("meetups");
  const meetups = await meetupCollection.find().toArray();
  // console.log("revalidating");
  client.close();
  return {
    props: {
      meetups: meetups.map((item) => ({
        id: item._id.toString(),
        title: item.title,
        image: item.image,
        address: item.address,
        description: item.description ,
      })),
    },
    revalidate : 2
  };
}
export default HomePage;

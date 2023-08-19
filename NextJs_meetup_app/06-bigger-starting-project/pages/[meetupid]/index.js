import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";
// import { useRouter } from "next/router";
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
//   {
//     id: "m3",
//     title: "A Second Meetup",
//     image:
//       "https://media.kasperskycontenthub.com/wp-content/uploads/sites/103/2019/09/26105755/fish-1.jpg",
//     address: "ABC address",
//     description: "Second Description",
//   },
// ];
const MeetupDetailsPage = (props) => {
  // const router = useRouter();
  // const meetupid = router.query.meetupid;
  // const meetupObj = DUMMY_MEETUPS.find((item) => item.id === meetupid);
  return <MeetupDetails {...props.meetupData} />;
};
export async function getStaticPaths(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://abhayhasrani:LpOAuUeKnpCSDnKR@cluster0.b34ijnd.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const database = client.db();
  const meetupCollection = database.collection("meetups");
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupid: meetup._id.toString(),
      },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;
  const client = await MongoClient.connect(
    "mongodb+srv://abhayhasrani:LpOAuUeKnpCSDnKR@cluster0.b34ijnd.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const database = client.db();
  const meetupCollection = database.collection("meetups");
  const meetup = await meetupCollection.findOne({ _id:new ObjectId(meetupid) });
  client.close();
  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
}
export default MeetupDetailsPage;

import MeetupDetails from "../../components/meetups/MeetupDetails";
import { useRouter } from "next/router";
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
const MeetupDetailsPage = () => {
  const router = useRouter();
  const meetupid = router.query.meetupid;
  const meetupObj = DUMMY_MEETUPS.find((item) => item.id === meetupid);
  return <MeetupDetails {...meetupObj} />;
};
export default MeetupDetailsPage;

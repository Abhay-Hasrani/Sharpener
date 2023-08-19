import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Head } from "next/head";
const NewMeetupPage = () => {
  const router = useRouter();
  async function onAddMeetupHanlder(meetupData) {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    router.push("/");
  }
  return (
    <>
      <Head>
        <title>Add new Meetup</title>
        <meta name="description" content="Add new meetups and socialize" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHanlder} />
    </>
  );
};
export default NewMeetupPage;

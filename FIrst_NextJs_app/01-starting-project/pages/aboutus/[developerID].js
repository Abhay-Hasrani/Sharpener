import { useRouter } from "next/router";
const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
const Developer = () => {
  const router = useRouter();
  const id = router.query.developerID;
  let developerDetails = "Developer doesn't exist";
  if (0 < id && id < 4) {
    developerDetails = details[id-1].name + " " + details[id-1].role;
  }

  return <div>{developerDetails}</div>;
};
export default Developer;

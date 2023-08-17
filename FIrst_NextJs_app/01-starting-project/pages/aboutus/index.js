import Link from "next/link";
const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
const AboutUs = () => {
  const developerList = details.map((item) => (
    <li key={item.id}>
      <Link href={`/aboutus/${item.id}`}>{item.name}</Link>
    </li>
  ));
  // console.log(developerList);
  return <ul>{developerList}</ul>;
};
export default AboutUs;

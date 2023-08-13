import classes from "./Notification.module.css";

const Notification = (props) => {
  let specialClasses = "";
  let title = "";
  let message = "";
  if (props.status === "error") {
    specialClasses = classes.error;
    title = "Error!";
    message = "Sending cart data failed!";
  }
  if (props.status === "success") {
    specialClasses = classes.success;
    title = "Success!";
    message = "Sent cart data successfully!";
  }
  if (props.status === "loading") {
    specialClasses = classes.loading;
    title = "Loading...";
    message = "Sending cart data...";
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;

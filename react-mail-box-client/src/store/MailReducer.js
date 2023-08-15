import { createSlice } from "@reduxjs/toolkit";
import { formatEmailForPath } from "../components/auth/SignIn";
const initialState = { userMails: [], unreadMailCount: 0 };
const MailSlice = createSlice({
  name: "mailReducer",
  initialState,
  reducers: {
    setMails(state, action) {
      state.userMails = [...action.payload];
    },
    addMail(state, action) {
      const emailObj = action.payload;
      state.userMails.push(emailObj);
      state.unreadMailCount++;
    },
    updateMail(state, action) {
      const emailObj = action.payload;
      const index = state.userMails.findIndex(
        (item) => item.id === emailObj.id
      );
      state.userMails[index] = emailObj;
    },
    deleteMail(state, action) {
      const id = action.payload;
      state.userMails = state.userMails.filter((item) => item.id !== id);
    },
    updateUnreadCount(state, action) {
      state.unreadMailCount = action.payload;
    },
  },
});

export const updateUnreadCountInFirebase = (
  email,
  addCount = 0,
  areYouSending = false
) => {
  const formattedEmail = formatEmailForPath(email);
  const baseUrl = `https://react-blog-deploy-4f574-default-rtdb.firebaseio.com/${formattedEmail}/unreadCount.json`;
  return async (dispatch) => {
    try {
      const unreadRes = await fetch(baseUrl);
      const unreadData = await unreadRes.json();
      let prevCount = 0;
      if (unreadRes.ok) {
        if (unreadData != null) prevCount += unreadData.unreadCount;
      } else throw new Error(unreadData.error);

      const newCount = prevCount + addCount;
      if (newCount < 0) return;
      const res = await fetch(baseUrl, {
        method: "PUT",
        body: JSON.stringify({ unreadCount: newCount }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        console.log("updated", data);
        if (!areYouSending)
          dispatch(mailActions.updateUnreadCount(data.unreadCount));
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      alert("While updating unread count in firebase: " + error.message);
    }
  };
};

export const getMailsFromFirebase = () => {
  return async (dispatch) => {
    const newMails = [];
    const email = localStorage.getItem("email");
    const formattedEmail = formatEmailForPath(email);
    try {
      const res = await fetch(
        `https://react-blog-deploy-4f574-default-rtdb.firebaseio.com/${formattedEmail}.json`
      );

      const data = await res.json();
      if (res.ok) {
        for (const id in data) {
          if (id === "unreadCount")
            dispatch(mailActions.updateUnreadCount(data[id].unreadCount));
          else newMails.push({ id: id, ...data[id] });
        }
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      alert("While getting Mails From Firebase : " + error.message);
    }
    // console.log(newMails);
    dispatch(mailActions.setMails(newMails));
  };
};

export const sendMailToFirebase = (emailObj) => {
  return async (dispatch) => {
    try {
      const formattedToEmail = formatEmailForPath(emailObj.emailTO);
      const baseUrl = `https://react-blog-deploy-4f574-default-rtdb.firebaseio.com/${formattedToEmail}.json`;
      const res = await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(emailObj),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        console.log(data);
        emailObj.id = data.name;
        dispatch(updateUnreadCountInFirebase(emailObj.emailTO, 1, true));
        //dispatch(mailActions.addMail(emailObj));
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      alert("While adding mail to firebase: " + error.message);
    }
  };
};

export const updateReadStatusInFirebase = (emailObj, status) => {
  emailObj.read = status;
  return async (dispatch) => {
    try {
      const email = localStorage.getItem("email");
      const formattedEmail = formatEmailForPath(email);
      const baseUrl = `https://react-blog-deploy-4f574-default-rtdb.firebaseio.com/${formattedEmail}/${emailObj.id}.json`;
      const res = await fetch(baseUrl, {
        method: "PUT",
        body: JSON.stringify(emailObj),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        console.log(data);
        dispatch(updateUnreadCountInFirebase(email, -1));
        dispatch(mailActions.updateMail(emailObj));
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      alert("While updating mail to firebase: " + error.message);
    }
  };
};

export const deleteMailFromFirebase = (emailObj) => {
  return async (dispatch) => {
    try {
      const email = localStorage.getItem("email");
      const formattedEmail = formatEmailForPath(email);
      const baseUrl = `https://react-blog-deploy-4f574-default-rtdb.firebaseio.com/${formattedEmail}/${emailObj.id}.json`;
      const res = await fetch(baseUrl, {
        method: "DELETE",
      });

      const data = await res.json();
      if (res.ok) {
        console.log(data);
        if (!emailObj.read) dispatch(updateUnreadCountInFirebase(email, -1));
        dispatch(mailActions.deleteMail(emailObj));
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      alert("While deleting mail to firebase: " + error.message);
    }
  };
};

export const mailActions = MailSlice.actions;
export default MailSlice.reducer;

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./MailComposer.css";
import { Button, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { formatEmailForPath } from "../auth/SignIn";
const MailComposer = () => {
  const [showToolbar, setShowToolbar] = useState();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const emailRef = useRef();
  const subjectRef = useRef();
  function handleEditorStateChange(newEditorState) {
    setEditorState(newEditorState);
    //below console log is for showing plain text
    // console.log(
    //   convertToRaw(newEditorState.getCurrentContent())
    //     .blocks.map((block) => block.text)
    //     .join("\n")
    // );
  }

  function mailFormSubmitHandler(e) {
    e.preventDefault();
    const body = convertToRaw(editorState.getCurrentContent())
      .blocks.map((block) => block.text)
      .join("\n");
    const emailObj = {
      emailTO: emailRef.current.value,
      emailFrom: localStorage.getItem("email"),
      subject: subjectRef.current.value,
      body,
    };
    console.log(emailObj);
    addEmailToFirebase(emailObj);
  }

  async function addEmailToFirebase(emailObj) {
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
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      alert("While adding mail to firebase: " + error.message);
    }
  }

  return (
    <div className="mailBody">
      <Form onSubmit={mailFormSubmitHandler}>
        <Form.Group controlId="userMailEmail">
          <Form.Label>Receivers Email :</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter receivers email"
            ref={emailRef}
            required
          />
        </Form.Group>
        <Form.Group controlId="userMailSubject">
          <Form.Label>Subject :</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder="Enter subject/title"
            ref={subjectRef}
            required
          />
        </Form.Group>
        <Form.Group controlId="userMailBody">
          <Form.Label>Body :</Form.Label>
          <Form.Control as="div" name="body" required>
            <Editor
              editorState={editorState}
              toolbarClassName="toolbar"
              editorClassName="editor"
              placeholder="Enter Mail Body here...."
              toolbarOnFocus={showToolbar}
              //   toolbarHidden={!showToolbar}
              onEditorStateChange={handleEditorStateChange}
              onFocus={() => {
                setShowToolbar(true);
              }}
              onBlur={() => {
                setShowToolbar(false);
              }}
            />
          </Form.Control>
        </Form.Group>
        <Button type="submit">Send</Button>
      </Form>
    </div>
  );
};
export default MailComposer;

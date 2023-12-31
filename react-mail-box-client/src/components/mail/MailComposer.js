import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./MailComposer.css";
import { Button, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { useDispatch } from "react-redux";
import { sendMailToFirebase } from "../../store/MailReducer";
const MailComposer = () => {
  const dispatch = useDispatch();
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
      read: false,
    };
    // console.log(emailObj);
    dispatch(sendMailToFirebase(emailObj));
  }

  return (
    <div className="mailBody">
      <Form className="myform" onSubmit={mailFormSubmitHandler}>
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
        <Button className="btn-form" type="submit">Send</Button>
      </Form>
    </div>
  );
};
export default MailComposer;

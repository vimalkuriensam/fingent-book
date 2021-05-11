import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Button from "../../components/atoms/Button";
import history from "../../utils/history";
import Input from "../../components/atoms/Input";
import Title from "../../components/atoms/Title";
import { addBooks } from "../../actions/books.action";
import { connect } from "react-redux";

const Edit = ({ dispatch }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const onInputChange = (type, e) => {
    const { value } = e.target;
    switch (type) {
      case "title":
        return setTitle(value);
      case "author":
        return setAuthor(value);
    }
  };

  const onSaveBook = () => {
    dispatch(
      addBooks({
        ebno: uuidv4(),
        author,
        date: moment.now(),
        pageContent: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      })
    );
    history.push("/");
  };

  const onEditorStateChange = (editorState) => setEditorState(editorState);
  return (
    <div className="editor">
      <div className="editor__edit">
        <div className="editor__input">
          <Title variant="primary" content="Title" />
          <Input
            onInputChange={onInputChange.bind(this, "title")}
            value={title}
            className="editor__input--editor"
            placeholder="Title"
          />
        </div>
        <div className="editor__input">
          <Title variant="primary" content="Author" />
          <Input
            onInputChange={onInputChange.bind(this, "author")}
            value={author}
            className="editor__input--editor"
            placeholder="Author"
          />
        </div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editor__panel"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <div className="editor__cta">
        <Button
          variant="secondary"
          color="#fff"
          content="Cancel"
          onHandleButtonClick={() => history.push("/")}
        />
        <Button
          variant="primary"
          content="Save"
          onHandleButtonClick={onSaveBook}
        />
      </div>
    </div>
  );
};

export default connect()(Edit);

import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from "../../components/atoms/Button";

const Edit = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => setEditorState(editorState);
  console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  return (
    <div className="editor">
      <div className="editor__edit">
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <div className="editor__cta">
        <Button variant="primary" content="Cancel" />
        <Button variant="primary" content="Save" />
      </div>
    </div>
  );
};

export default Edit;

import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";
import draftToHtml from "draftjs-to-html";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Button from "../../components/atoms/Button";
import history from "../../utils/history";
import Input from "../../components/atoms/Input";
import Title from "../../components/atoms/Title";
import { addBooks, updateBook } from "../../actions/books.action";
import { connect } from "react-redux";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.history?.location?.state?.selected
        ? this.getContent()[0].title
        : "",
      author: this.props.history?.location?.state?.selected
        ? this.getContent()[0].author
        : "",
      editorState: this.props.history?.location?.state?.selected
        ? EditorState.createWithContent(
            stateFromHTML(this.getContent()[0].pages[1])
          )
        : EditorState.createEmpty(),
    };
  }

  getContent = () => {
    const val = this.props.books.filter(
      (val) => val.ebno === this.props.history.location.state.selected
    );
    console.log(val);
    return val;
  };

  onInputChange = (type, e) => {
    const { value } = e.target;
    switch (type) {
      case "title":
        return this.setState(() => ({ title: value }));
      case "author":
        return this.setState(() => ({ author: value }));
    }
  };

  onSaveBook = () => {
    if (this.props.history?.location?.state?.selected) {
      this.props.dispatch(
        updateBook({
          ebno: uuidv4(),
          title: this.state.title,
          author: this.state.author,
          date: moment().format(),
          pageContent: draftToHtml(
            convertToRaw(this.state.editorState.getCurrentContent())
          ),
          selected: this.props.history?.location?.state?.selected,
        })
      );
    } else {
      this.props.dispatch(
        addBooks({
          ebno: uuidv4(),
          title: this.state.title,
          author: this.state.author,
          date: moment().format(),
          pageContent: draftToHtml(
            convertToRaw(this.state.editorState.getCurrentContent())
          ),
        })
      );
    }
    history.push("/");
  };

  onEditorStateChange = (editorState) => this.setState(() => ({ editorState }));
  render() {
    return (
      <div className="editor">
        <div className="editor__edit">
          <div className="editor__input">
            <Title variant="primary" content="Title" />
            <Input
              onInputChange={this.onInputChange.bind(this, "title")}
              value={this.state.title}
              className="editor__input--editor"
              placeholder="Title"
            />
          </div>
          <div className="editor__input">
            <Title variant="primary" content="Author" />
            <Input
              onInputChange={this.onInputChange.bind(this, "author")}
              value={this.state.author}
              className="editor__input--editor"
              placeholder="Author"
            />
          </div>
          <Editor
            editorState={this.state.editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editor__panel"
            onEditorStateChange={this.onEditorStateChange}
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
            content={
              this.props.history?.location?.state?.selected ? "Update" : "Save"
            }
            onHandleButtonClick={this.onSaveBook}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books.book,
});

export default connect(mapStateToProps)(Edit);

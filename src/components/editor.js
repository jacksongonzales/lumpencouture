import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
import { Schema, DOMParser } from "prosemirror-model"
import { schema } from "prosemirror-schema-basic"
import { addListNodes } from "prosemirror-schema-list"
import { exampleSetup } from "prosemirror-example-setup"

import React from "react"
import { Link } from "gatsby"

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.editorContainer = React.createRef()
    this.editorView = React.createRef()
  }

  componentDidMount() {
    // Mix the nodes from prosemirror-schema-list into the basic schema to
    // create a schema with list support.
    const mySchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks,
    })

    window.view = new EditorView(this.editorContainer.current, {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(this.editorView.current),
        plugins: exampleSetup({ schema: mySchema }),
      }),
    })
  }

  render() {
    return (
      <div ref={this.editorContainer}>
        <div ref={this.editorView} />
      </div>
    )
  }
}

export default Editor

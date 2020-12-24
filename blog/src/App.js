import React, { useState } from 'react';
import { Typography, Button, Form, message } from 'antd';
import QuillEditor from './editor';
import ReactHtmlParser from 'react-html-parser';

const { Title } = Typography

function App(props) {

  const [content, setContent] = useState("")
  const [files, setFiles] = useState([]);

  const onEditorChange = (value) => {
    setContent(value)
  }

  const onFilesChange = (value) => {
    setFiles(files)
  }

  return (
    <div style={{ maxWidth: '60%', maxHeight: '60%',margin: '10px auto' }}>
      <div style={{ textAlign: 'center' }}>
        <Title level={2}>Editor</Title>
      </div>

      <QuillEditor
        placeholder="What's on your Mind Today"
        onEditorChange={onEditorChange}
        onFilesChange={onFilesChange}
      />

      <Form >
        <div style={{ textAlign: 'center', margin: '10px auto' }}>
          <Button
            size="large"
            htmlType="submit"
            className=""
            // onSubmit={onSubmit}
          >
            Submit
          </Button>
        </div>
      </Form>
      {/* {content} */}
      {ReactHtmlParser(content)}
    </div>
  )
}

export default App;
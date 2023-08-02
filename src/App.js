import { useRef, useState } from 'react';
import './App.css';
import JoditEditor from 'jodit-react';
import DOMPurify from 'dompurify';

function App() {
  const editor = useRef(null);
	const [content, setContent] = useState(null);
	const [preview, setPreview] = useState(false);
  const sanitizedContent = DOMPurify.sanitize(content);

  const buttons = [
    'bold', 'italic', 'underline', 'strikethrough', 'eraser', '|', 'ul', 'ol', '|', 'font', 'fontsize', 'paragraph', 'line-height', '|', 'subscript', 'superscript', '|', 'file', 'image', 'video', '|', 'cut', 'copy', 'paste', 'selectall', '|', 'hr', 'table', 'link', 'indent', 'outdent', 'align', '|', 'brush', '|', 'undo', 'redo', '|', 'find', 'source', 'fullsize', 'preview'
  ]

  const config = {
    buttons: buttons
  };

  const handlePreview = () => {
    setPreview(true)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '30px 0' }}>
      <div className="App" style={{ width: '1000px', margin: 'auto' }}>
        <div style={{ width: '100%' }}>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onBlur={newContent => setContent(newContent)}
          />
        </div>

        {
          preview &&
          <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          </div>
        }

        <div style={{ margin: '10px 0' }}>
          <button onClick={ handlePreview }>Submit</button>
        </div>
      </div>
    </div>

  );
}

export default App;

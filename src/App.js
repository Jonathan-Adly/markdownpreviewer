import React, { useState } from 'react'
import marked from 'marked';



const originalText = `# H1
## H2
### H3
`
  + "\nHeres some code, `<div></div>`, between 2 backticks."
  + "\n```"
  + `\n// this is multi-line code:
function anotherExample(firstLine, lastLine) {" `
  +
  "\nif (firstLine == '```' && lastLine == '```') {" +
  `\nreturn multiLineCode;
  } 
}` +
  "\n```"
  +
  `
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://jonathanadly.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Jonathan Adly](https://www.nicepng.com/png/full/228-2285877_heart-png-minimalist-svg-free-stock-small-heart.png)`

function App() {

  const [text, setText] = useState(originalText)

  const handleChange = event => {
    setText(event.target.value)
  }

  function createMarkup() {
    const markedText = marked(text, { gfm: true, breaks: true })
    return { __html: markedText };
  }

  return (
    <div className="container-fluid bg-dark text-white">
      <h1 className="text-center"> Markdown Preview Editor
      </h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="card w-75 mt-4 mx-auto">
            <div className="card-header bg-dark text-white">
              Markdown Editor
            </div>
            <textarea value={text} className="form-control vh-100 card-text" onChange={handleChange} id="editor" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="w-75 mt-4 mx-auto" id="preview" dangerouslySetInnerHTML={createMarkup()}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

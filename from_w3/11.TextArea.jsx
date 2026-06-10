// React Forms - Textarea
// Textarea
// The textarea element in React is slightly different from ordinary HTML.

// In HTML the value of a textarea is the text between the start tag <textarea> and the end tag </textarea>.

<textarea>
  Content of the textarea.
</textarea>

// In React the value of a textarea is placed in a value attribute, just like with the input element.

// We'll use the useState Hook to manage the value of the textarea:

// Example:
// React uses the value attribute to control the textarea:

import { createRoot } from 'react-dom/client'
import { useState } from 'react'

function MyForm() {
  const [mytxt, setMytxt] = useState("");

  function handleChange(e) {
    setMytxt(e.target.value);
  }

  return (
    <form>
      <label>Write here:
        <textarea
          value={mytxt}
          onChange={handleChange}
        />
      </label>
      <p>Current value: {mytxt}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);


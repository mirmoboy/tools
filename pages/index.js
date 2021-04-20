import { useState } from 'react'

const countWords = (str) => {
  var matches = str.match(/[\w\d\’\'-]+/gi);
  return matches ? matches.length : 0;
}

export default function Home() {
  const [words, setwords] = useState('');
  const wordCount = countWords(words)
  const characterCount = words.length

  return (
    <div className='w-full h-full flex justify-center align-middle'>
      <div className='container max-w-screen-md my-10'>
        <div className="text-md">Word Counter</div>
        <textarea 
          rows="20" 
          cols="50" 
          className='w-full border-2 rounded-md px-4 py-2'
          onChange={({ target: { value } }) => setwords(value)}
        />
        <div>
          <div>
            Words: {wordCount}
          </div>
          <div>
            Characters: {characterCount}
          </div>
        </div>
      </div>
    </div>
  )
}

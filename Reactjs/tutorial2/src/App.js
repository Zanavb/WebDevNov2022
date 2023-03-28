
import {useState} from 'react'

function Posts(props){
  return(
    <li>{props.singlePost.title}</li>
  )
}

function App() {
  const [state, setState] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const [username, setUsername] = useState(undefined)
  const clickHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
      setState(posts)
      setTimeout(() => {
        setUsername(['a', 'b', 'c', 'd'])
      })
    }, 3000)
  }
  return (
    <div>
      <button onClick = {clickHandler}>Get Posts</button>
      {
      state.map((post, index) => {
        return(
          <Posts singlePost={post} key={index}/>
        )
      })
      }
    </div>
  )
}

export default App;

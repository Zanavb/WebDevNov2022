import Header from "./components/header.js"
import Newsfeed from "./components/newsfeed.js"
import Footer from "./components/footer.js"


function App() {
  const handleInput = (event) => {
    console.log(event.target.value)
  }
  return (
    <div>
      <Header/>
      <Newsfeed/>
      <input type='text' onKeyDown={handleInput}></input>
      <Footer/>
    </div>
  );
}

export default App;

function Newsfeed() {
    const handeClick = ()=>alert('hello world')
    const handleNewsData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    }
    return (
        <ul>
            <li onClick={handeClick}>News1</li>
            <li onMouseOver={handeClick}>News2</li>
            <li onClick={handleNewsData}>News3</li>
            <li>News4</li>
        </ul>
    )
}

export default Newsfeed
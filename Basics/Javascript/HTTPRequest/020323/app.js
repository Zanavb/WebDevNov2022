const deleteBtn = document.getElementById('delete-btn');
const url = 'http://localhost:3000/database';

// Start your backend server before coding the below code.
// You can use the json-server package to create a fake REST API server.
// json-server db.json --watch

// The function below is not working yet. Please help me to fix it.
// I want to delete all posts from the server using the delete http request.
// I have tried to use the deleteAllPosts function below but it is not working.
// Maybe i need to use the fetch api to send the delete request for each post while looping through the posts.

function deleteAllPosts(){
    console.log('Deleting all posts...');

    fetch(`http://localhost:3000/database`)
    .then(res => res.json())
    .then(data => {
        data.forEach(comment => {
            fetch(`http://localhost:3000/database/${comment.id}`, {
                method: 'DELETE'
                })
                .then(res => res.text())
                .then(() => {
                    console.log('done!')
                })
            })
            
        })
    // delete one by one
   
}
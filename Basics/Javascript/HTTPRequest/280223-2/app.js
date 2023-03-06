const InputUsername = document.getElementById('username');
const TextAreaComment = document.getElementById('comment');
const CommentsList = document.getElementById('commentsList');
const Data_ID = document.getElementById('data_id');

function AddComment() {
    const obj = {
        username: InputUsername.value,
        comment: TextAreaComment.value
    }
    fetch('http://localhost:3000/database',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(obj) 
    })
    .then(res => res.json())
    .then(data => {
        console.log(data, 'saved')
    })
}

fetch('http://localhost:3000/database')
.then(res => res.json())
.then(allcomments => {
    allcomments.map(single_comment=>{
        console.log(single_comment)

        CommentsList.innerHTML += `<li class="list-group-item">${single_comment.username} - ${single_comment.comment}</li>`

    })
})

function deleteOne() {
    const id =  Data_ID.value

    fetch(`http://localhost:3000/database/${id}`, {
        method:'DELETE'
    })
    .then(() => {
        console.log('data is deleted')
    })
}

function updateOne() {
    const id = Data_ID.value;
    const newComment = {
        username: InputUsername.value,
        comment: TextAreaComment.value
    }

    fetch(`http://localhost:3000/database/${id}`, {
        method: 'PATCH',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(newComment) 
    })
    .then(res => res.json())
    .then(data => {
        console.log(data, 'updated!')
    })
    
}

function deleteAll(){
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
    }

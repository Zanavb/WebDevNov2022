fetch('http://localhost:3000/database')
    .then(res => res.json()) // make the jason readable
    .then(jsondata => {
        console.log(jsondata)
    })

fetch('readme.txt')
    .then(response => response.text())
    .then(txtcontent => {
        console.log(txtcontent)
    })

fetch('http://localhost:3000/database/2')
    .then(res => res.json())
    .then(jsondata => {
        console.log(jsondata)
    })

fetch('http://localhost:3000/database/?title=Javascript')
    .then(res => res.json())
    .then(data => {
        console.log(data, 'url query')
    })

//use fetch in function:
async function getData(id) {
    let response = await fetch('http://localhost:3000/database/' + id)
    let data = response.json();
    return data
}

const DataID = document.getElementById('data_id')
const output = document.getElementById('output')


function ClickHandler() {
    getData(DataID.value)
        .then(mydata => { output.innerHTML += `<li>Title:${mydata.title}<br>Body:${mydata.body}data1</li>` })
}

const newData = {
    title: "Python",
    body: "Python is easy language"
}



function AddDataHandler() {
    fetch('http://localhost:3000/database', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(newData)
    })
        .then(data => {
            console.log(data, 'Saved')
        })
}

function DeleteHandler() {
    console.log('testing delete')
    //Delete request
    fetch('http://localhost:3000/database/'+DataID.value, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('deleted')
    })        
}

const newObjectData={
    title: 'GoLang',
    body:'Coolest language ever',

}

function UpdateHandler(){
    fetch('http://localhost:3000/database/6', {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json; charset = utf-8'
        },
        body: JSON.stringify(newObjectData)
    })
    .then(res => res.json())
    .then(data => {
        console.group(data, 'UPDATED')
    })
}


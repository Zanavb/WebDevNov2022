const Output = document.getElementById('output')
const Username = document.getElementById('username')
const myBtn = document.getElementById('myBtn')
const myImg = document.getElementById('myImage')

function ClickHandler(){
    console.log('Event Handler')
    Output.innerText=Username.value
}

function ChangeHandler(){
    console.log('Change Handler')
    Output.innerText=Username.value
}

function MouseOverHandler(){
    console.log('test mouseoverhandler!!!')
    myImg.src="https://static.dw.com/image/45897958_6.jpg"
    myBtn.className = "btn btn-primary btn-lg"
}

function MouseOutHandler(){
    console.log('test mouseoverhandler!!!')
    myImg.src="https://cdn.quotesgram.com/img/10/11/315950784-Funny_Photos_of_Bill_Clinton_in_1996__1_.jpg"
    myBtn.className = "btn btn-danger btn-lg"
}


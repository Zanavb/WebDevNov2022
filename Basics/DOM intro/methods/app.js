// // Find li elements 
// const liItems = document.querySelectorAll('li.list-group-item:nth-child(even)') // object

// const ListContainer = document.querySelector('.list-group')

// // liItems.forEach((li,index)=>{
// //     console.log(li) // > each li element
// //     // className
// //     console.log(li.className)
// //     li.className="list-group-item bg-dark text-light"
// //     li.innerHTML =`<h1>Item-${index}</h1>` // update content of element or elements
// //   // li.innerText = `<h1>hello </h1>` // NO HTML TAGs
// //     // li.innerText > only string <p>hello</p>
// // })

// // classList
// liItems.forEach((li,index)=>{
//     console.log(li)
//     li.classList.add('bg-dark')
//     li.classList.add('text-light')
//     console.log(li.classList.contains('list-group-item'))
//     // li.classList.remove('coffee')
//     if(li.classList.contains('coffee')){
//         li.classList.remove('coffee')
//     }
// })

// // add new Child into ul list
// // "<li>Hello world</li>" DOMString
// const liElement = document.createElement('li')
// // setAttribute
// liElement.setAttribute('class','list-group-item')
// liElement.classList.add('bg-danger')
// liElement.classList.add('text-light')
// liElement.innerText="This is new li element";

// console.log(liElement,"this is new li")
// ListContainer.appendChild(liElement)

// const g = t => document.createElement(t)

// const newTask = g('li');
// newTask.classList.add('list-group-item')
// newTask.classList.add('bg-primary')
// newTask.classList.add('text-light')
// newTask.innerText="This is another li"
// ListContainer.appendChild(newTask)

// //previousSibling
// const TeaElement = document.querySelector('.tea');
// TeaElement.previousElementSibling.innerText="This is sibling of Tea element"
// console.log(TeaElement.previousElementSibling)

// //nextSingling
// TeaElement.nextElementSibling.innerText="This is next sibling"
// console.log(TeaElement.nextElementSibling)

const ParentContainer = document.querySelector('.container')
const g = t => document.createElement(t)

const ULContainer = g('ul')
ULContainer.className="list-group list-group-flush"

// const LiItem = g('li')
// LiItem.className="list-group-item"
// LiItem.innerText = "This is an example li"

function LiItemGenerator(content, bgColor, textColor) {
    const LiItem = g('li')
    LiItem.className=`list-group-item ${bgColor} ${textColor}`
    LiItem.innerText = content

    return LiItem
}

for(let i=1; i<=10; i++){
    if(i%2===0) {
        const item = LiItemGenerator(`Ìtem-${i} example`, 'bg-dark', 'text-light')
        ULContainer.appendChild(item)
    }else {
        const item = LiItemGenerator(`Ìtem-${i} example`)
        ULContainer.appendChild(item)
    }
    
}


ParentContainer.appendChild(ULContainer)
console.log(ULContainer)
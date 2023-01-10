const student={
    first_name:"Jenny",
    last_name:"Doe",
    age:30,
    email:"jenny@microsoft.com",
    role:"Developer",
    phone:"04884445544",
    isValid:true
}


function getName(){
    return student.first_name
}

function getStudentEmail(){
    return student.email
}

function getStudentPhoneNumber(){
    return student.phone
}

function setStudentName(newName){
    student.first_name = newName // update student name
    return student
}


function getSelectedStudentInfo(){
    return {
        fullname : `${student.first_name} ${student.last_name}`,
        age: student.age
    }
}


console.log(getName())
console.log(getStudentEmail());
console.log(getStudentPhoneNumber());
setStudentName('Michael') // update object property first_name
console.log(getName()) // display first_name property out again

console.log(getSelectedStudentInfo());

function addNewValue(property_name,value){
   // student['test'] = 'test valueeeee'
    return student[property_name] = value
}

addNewValue('teenage',false)
addNewValue('rich',false)
addNewValue('coffeedrinker',true)
console.log(student)

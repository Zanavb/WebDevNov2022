// List of String Methods

/*

1. charAt()
2. charCodeAt()
3. concat()
4. endsWith()
5. fromCharCode()
6. includes()
7. indexOf()
8. lastIndexOf()
9. localeCompare()
10. match()
11. repeat()
12. replace()
13. search()
14. slice()
15. split()
16. startsWith()
17. substr()
18. substring()
19. toLocaleLowerCase()
20. toLocaleUpperCase()
21. toLowerCase()
22. toString()
23. toUpperCase()
24. trim()
25. valueOf()

*/

var FullText = "Veniam et nulla microsoft 001 002 veniam excepteur aute duis microsoft in consequat quis fugiat eu pariatur est microsoft enim."
var result;

// 1. charAt(position<number>) extract char from a string
result = FullText.charAt(0)
result = FullText.charAt(6)
result = FullText.charAt(10)

// 2. charCodeAt(position<number>)
result = FullText.charCodeAt(16);
result = FullText.charCodeAt(5)

// 3. contact(Word<string>) 
var txt1="Hello";
result = txt1.concat(" World").concat(" new word").concat(" another word")

// 4. endswith(<string>)
result = FullText.endsWith("hello") // false
result = FullText.endsWith("enim.") // true

// 5. startsWidth(searchString<string>)
result = FullText.startsWith("hello") // false
result = FullText.startsWith("Veniam") // true

// 6. fromCharCode(utf16<number>)
result = String.fromCharCode(86)
result = String.fromCharCode(101);
result = FullText.charCodeAt(5) // extracted char as utf16
result = String.fromCharCode(109) // converted utf16 char to utf8

// 7.includes(SearchWord<string>)
result = FullText.includes("nulla");  // true
result = FullText.includes("microsoft") // false

// 8. indexOf(word<string>);
result = FullText.indexOf('microsoft') // first match
result = FullText.indexOf('intec'); // first match
result = FullText.lastIndexOf('microsoft') // last match

// 9. substr/substring(startPosition<number>,endPosition<number>)
result = FullText.substr(0,10)
result = FullText.substring(10,13)

// 10. toLowerCase() // A => a
result = "HELLO WORLD".toLowerCase()

// 11. toUpperCase() // a => A
result = "javascript".toUpperCase();

// 12. match() https://regex101.com/
result = FullText.match('microsoft');
result = FullText.match('intec')
result = FullText.match(/[a-zA-Z0-9]+/g)
result = FullText.match(/microsoft/g)

// 13. text.repeat(<number>)
result = FullText.repeat(3).repeat(5)
result = "#".repeat(10)

// 14. replace()
result = result.replace('#','$')

// 15. replaceAll()
result = result.replaceAll('#','$')
result = "wwwwwwwwwmicrosoftwwwwwwwwwwwwww".replace(/[a-z]/g,"lol")

var user_email="jimmy@microsoft.com johnny@gmail.com admin@yandex.com"
var myEmailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
result = [...user_email.matchAll(myEmailRegex)]

function FindAllEmails(stringData){
    return stringData.match(myEmailRegex)
}

var myStringData = "abc@intec.com admin@gmail.com"

result = FindAllEmails(user_email)


var FindEmails = "bilal@microsoft.com mohammed@gmail.com bilal@gmail.com ara@abc.be prince@brussel.be"

result = FindEmails.match(/[a-zA-Z]+@(gmail.com)/g) // only gmail.com emails

console.log(result)
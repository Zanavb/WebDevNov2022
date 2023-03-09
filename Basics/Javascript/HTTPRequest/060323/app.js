const LinkNeedToBeShorten = document.getElementById("link"); // <input> tag
const QRCodeImage = document.getElementById("qrcode"); // <img> tag
const shortURLText = document.getElementById("short_url"); // <p> tag

// do not change these variables
let baseURL = "https://csclub.uwaterloo.ca/~phthakka/1pt/addURL.php?url="; // base URL for 1pt.co
//let QRCode = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="; // base URL for QR Code image


async function MakeShortURL(){
    /*
    step 1: get the link from the input tag
    step 2: encode the link
    step 3: add the encoded link to the base URL
    step 4: send a GET request to the URL
    step 5: get the response from the server
    step 6: make new object from the response for ShortURL link and QRCode image
    step 7: set the src attribute of the QRCode image to the QRCode image URL
    step 8: set the innerHTML of the shortURLText to the ShortURL link. Example: Short URL: https://1pt.co/05thj
    step 9: set the href attribute of the shortURLText to the ShortURL link. Example: Short URL: https://1pt.co/05thj
    */

    // Good Luck!
    
    console.log(LinkNeedToBeShorten.value);
    console.log(encodeURIComponent(LinkNeedToBeShorten.value))

    const FullLink = baseURL+=encodeURIComponent(LinkNeedToBeShorten.value)

    console.log(FullLink)
    let res = await fetch(FullLink);
    let data = res.json()

    data.then(obj => {
        const ShortObj = {
        ShortUrl : `http://1pt.co/${obj.short}`,
        QRImage : ''
        }
        console.log(ShortObj)
        shortURLText.innerText=`Short URL: ${ShortObj.ShortUrl}`

        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: ShortObj.ShortUrl,
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    })
 
}

// MakeShortURL().then(data=>{
//     console.log(data)
// })


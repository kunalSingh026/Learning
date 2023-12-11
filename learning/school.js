alert("Let's Begin and Have some Fun")
function display()
{
    chart=(document.getElementById("alpha").value);
    // let speech= new SpeechSynthesisUtterance();
    // const inputEl = document.getElementById("alpha")

    // function fetchAPI(word)
    // {
    //     console.log(word);
    // }

    // inputEl.addEventListener("keyup",(e)=>{
    //     if(e.target.value && e.key ==="Enter"){
    //         fetchAPI(e.target.value)
    //     }
    // })
    let pro=(document.getElementById("about").value)
    let speech = new SpeechSynthesisUtterance();
    switch(chart)
    {
        case "a":
            document.getElementById("about").innerHTML="A for Android";
            document.getElementById("img1").style.background="url('android.jpg')";
            document.querySelector("btn").addEventListener("click",()=>{
                // speech.text = document.querySelector("#about").value;
                // window.speechSynthesis.speak(speech);
                speech.text =document.getElementById("about").value;
                window.speechSynthesis.speak(speech);
            })
            break;
        case "b":
            document.getElementById("about").innerHTML="B for Backup";
            document.getElementById("img1").style.backgroundImage="url('backup.jpg')";
            break;
        case "c":
            document.getElementById("about").innerHTML="C for Compiler";
            document.getElementById("img1").style.backgroundImage="URL('compiler.jpg')";
            break;
        case "d":
            document.getElementById("about").innerHTML="D for Database";
            document.getElementById("img1").style.backgroundImage="URL('database.jpg')";
            break;
        case "e":
            document.getElementById("about").innerHTML="E for Electronic";
            document.getElementById("img1").style.backgroundImage="URL('electronics.jpg')";
            break;
        case "f":
            document.getElementById("about").innerHTML="F for Frimware";
            document.getElementById("img1").style.backgroundImage="URL('frimware.jpg')";
            break;
        case "g":
            document.getElementById("about").innerHTML="G for Google";
            document.getElementById("img1").style.backgroundImage="URL('google.jpg')";
            document.getElementById("img1").style.backgroundRepeat="noRepeat";
            break;
        case "h":
            document.getElementById("about").innerHTML="H for Hacker";
            document.getElementById("img1").style.backgroundImage="URL('hacker.jpg')";
            break;
        case "i":
            document.getElementById("about").innerHTML="I for Image";
            document.getElementById("img1").style.backgroundImage="URL('image1.jpg')";
            break;
        case "j":
            document.getElementById("about").innerHTML="J for Java";
            document.getElementById("img1").style.backgroundImage="URL('java.jpg')";
            break;
        case "k":
            document.getElementById("about").innerHTML="K for Keyboard";
            document.getElementById("img1").style.backgroundImage="URL('keyboard.jpg')";
            break;
        case "l":
            document.getElementById("about").innerHTML="L for Linux";
            document.getElementById("img1").style.backgroundImage="URL('linux.jpg')";
            break;
        case "m":
            document.getElementById("about").innerHTML="M for Modem";
            document.getElementById("img1").style.backgroundImage="URL('modem.jpg')";
            break;
        case "n":
            document.getElementById("about").innerHTML="N for Networking";
            document.getElementById("img1").style.backgroundImage="URL('networking.jpg')";
            break;
        case "o":
            document.getElementById("about").innerHTML="O for Operating";
            document.getElementById("img1").style.backgroundImage="URL('operating.jpg')";
            break;
        case "p":
            document.getElementById("about").innerHTML="P for Programing";
            document.getElementById("img1").style.backgroundImage="URL('programing.jpg')";
            break;
        case "q":
            document.getElementById("about").innerHTML="Q for Quantum";
            document.getElementById("img1").style.backgroundImage="URL('quantum.jpg')";
            break;
        case "r":
            document.getElementById("about").innerHTML="R for RAM";
            document.getElementById("img1").style.backgroundImage="URL('ram.jpg')";
            break;
        case "s":
            document.getElementById("about").innerHTML="S for Server";
            document.getElementById("img1").style.backgroundImage="URL('server.jpg')";
            break;
        case "t":
            document.getElementById("about").innerHTML="T for Tailwind";
            document.getElementById("img1").style.backgroundImage="URL('tailwind.jpg')";
            break;
        case "u":
            document.getElementById("about").innerHTML="U for User";
            document.getElementById("img1").style.backgroundImage="URL('user.jpg')";
            break;
        case "v":
            document.getElementById("about").innerHTML="V for Virus";
            document.getElementById("img1").style.backgroundImage="URL('virus.jpg')";
            break;
        case "w":
            document.getElementById("about").innerHTML="W for Website";
            document.getElementById("img1").style.backgroundImage="URL('website.jpg')";
            break;
        case "x":
            document.getElementById("about").innerHTML="X for Xml";
            document.getElementById("img1").style.backgroundImage="URL('xml.jpg')";
            break;
        case "y":
            document.getElementById("about").innerHTML="Y for Yahoo";
            document.getElementById("img1").style.backgroundImage="URL('yahoo.jpg')";
            break;
        case "z":
            document.getElementById("about").innerHTML="Z for Zoom";
            document.getElementById("img1").style.backgroundImage="URL('zoom.jpg')";
            break; 
    }
}

function lower()
{
    document.getElementById("about").style.textTransform="uppercase"
    document.getElementById("alpha").style.textTransform="uppercase"
}
function upper()
{
    document.getElementById("about").style.textTransform="lowercase"
    document.getElementById("alpha").style.textTransform="lowercase"
}
// let modeBtn1 = document.querySelector("#change");
// let body = document.querySelector("body");
// let currmode = "light";
// modeBtn1.addEventListener("click",()=>{
//     if(currmode==="light")
//     {
//         currmode ="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currmode ="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// })
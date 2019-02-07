//clock
/*var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}*/
//binary code convertor
function convertBinary() {
    var output = document.getElementById("outputBinary");
    var input = document.getElementById("inputBinary").value;
    output.value = "";
    for (i=0; i < input.length; i++) {var e=input[i].charCodeAt(0);var s = "";
    do{
        var a =e%2;
        e=(e-a)/2;
        s=a+s;
        }while(e!=0);
        while(s.length<8){s="0"+s;}
        output.value+=s;
    }
}
//sidebar code
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("nav").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("nav").style.marginLeft= "0";
}
//deals with morse code page
var charCodes=new Array(36); charCodes["a"]=". _";
charCodes["b"]="_ . . .";
charCodes["c"]="_ . _ .";
charCodes["d"]="_ . .";
charCodes["e"]=".";
charCodes["f"]=". . _ .";
charCodes["g"]="_ _ .";
charCodes["h"]=". . . .";
charCodes["i"]=". .";
charCodes["j"]=". _ _ _";
charCodes["k"]="_ . _";
charCodes["l"]=". _ . .";
charCodes["m"]="_ _";
charCodes["n"]="_ .";
charCodes["o"]="_ _ _";
charCodes["p"]=". _ _ .";
charCodes["q"]="_ _ . _";
charCodes["r"]=". _ .";
charCodes["s"]=". . .";
charCodes["t"]="_";
charCodes["u"]=". . _";
charCodes["v"]=". . . _";
charCodes["w"]=". _ _";
charCodes["x"]="_ . . _";
charCodes["y"]="_ . _ _";
charCodes["z"]="_ _ . .";
charCodes["1"]=". _ _ _ _";
charCodes["2"]=". . _ _ _";
charCodes["3"]=". . . _ _";
charCodes["4"]=". . . . _";
charCodes["5"]=". . . . .";
charCodes["6"]="_ . . . .";
charCodes["7"]="_ _ . . .";
charCodes["8"]="_ _ _ . .";
charCodes["9"]="_ _ _ _ .";
charCodes["0"]="_ _ _ _ _";
var temp=''

function encode() {
document.morsecode.chars.value=document.morsecode.chars.value.toLowerCase();
document.morsecode.codebox.value="";
temp=''
var chars=document.morsecode.chars.value.split("");

for (a=0; a<chars.length; a++) {
if (chars[a]!=" ") {
if (window.charCodes[chars[a]]) {
document.morsecode.codebox.value+=charCodes[chars[a]]+"    ";
temp+=chars[a]+"="+charCodes[chars[a]]+"\n";
}
else
temp+=chars[a]+"=(None)\n";
}
else temp+="\n";
}
document.morsecode.codebox.value+="\n\n\nEXPLANATION:\n\n"+temp
}
//Uncomment code below if using old search method
/*function dosearch() {
    var sf=document.searchform;
    var submitto = sf.sengines.options[sf.sengines.selectedIndex].value + escape(sf.searchterms.value);
    window.location.href = submitto;
    return false;
}*/
//Focuses attention on Input
function FocusOnInput(){
    document.getElementById("Search").focus();
}
//allows the textbox on main page to search
function searchDuck(event){
    if (event.keyCode == 13 || event.which == 13) { location='https://duckduckgo.com/?q=' + encodeURIComponent(document.getElementById('Search').value);}//13 = enter
}
//Keycode events to do things
function keyCode(event) {
    var x = event.keyCode;
    if (x == 27) {// 27 = esc key
        openConsole()
    }
    /*else if (x == 192){ //192 = `
        openNav();
    }
    else if (x == 49){ //49 = 1
        alert("👏 👏 MEME REVIEW 👏 👏");
    }
    else if (x == 37){ // 37 = left arrow
        document.getElementById("body").style.background = "linear-gradient(red, yellow, green, blue, white, gray, rgba(0, 26, 77), gray, white, blue, green, yellow, red)";
    }
    else if (x == 39){ //39 = right arrow
        document.getElementById("body").style.background = "#323232";
    }*/
}
//CODE FOR CONSOLE
function openConsole(){
    var command;
     
    command=prompt('Enter Command',' ');

    if (command == "help"){
        alert("Set: used to change Property of an object \n")
    }
    else if (command == "set"){
        setProperty()
    }
    else if (command == "4chan"){
        document.getElementById("pLink").innerHTML = "4chan";
        document.getElementById("pLink").href = "https://4chan.org/";
        document.getElementById("pLinks").innerHTML = "4channel";
        document.getElementById("pLinks").href = "https://4channel.org/";
    }
}
//CODE FOR SET COMMAND
function setProperty(){
    var elementID;// ID of an object
    var element;//Property that will be changed
    var elementValue;//Value for Property
    elementID=prompt('Please Input ID',' ');
    element=prompt('Please Input Property',' ');
    elementValue=prompt('Enter Property Value',' ');
    var x = document.getElementById(elementID);
    if (element == "background"){//changes background
        x.style.background = elementValue;
    }
    else if (element == "color"){//changes color
        x.style.color = elementValue;
    }
    else if (element == "innerHTML"){//changes innerHTML
        x.innerHTML = elementValue;
    }
    else if (element == "src"){//changes source
        x.src = elementValue;
    }
    else if (element == "href"){//changes href value
        x.href = elementValue;
    }
}
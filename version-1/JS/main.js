var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
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
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
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
function dosearch() {
var sf=document.searchform;
var submitto = sf.sengines.options[sf.sengines.selectedIndex].value + escape(sf.searchterms.value);
window.location.href = submitto;
return false;
}
function keyCode(event) {
    var x = event.keyCode;
    if (x == 27) {
        closeNav();
    }
    else if (x == 192){
        openNav();
    }
    else if (x == 49){
        alert("👏 👏 MEME REVIEW 👏 👏");
    }
    else if (x == 37){
        document.getElementById("body").style.background = "linear-gradient(red, yellow, green, blue, white, gray, rgba(0, 26, 77), gray, white, blue, green, yellow, red)";
    }
    else if (x == 39){
        document.getElementById("body").style.background = "#323232";
    }
}

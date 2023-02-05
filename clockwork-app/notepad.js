////CONFIG////

var link = "https://lukasexists.netlify.app/notepad/index.html"; // link to app webpage
var id = "Notepad-CW-IFrame"; // a UNIQUE id to identify the frame for your app
var title = "Notepad"; // title shown in navbar
var uninstallId = "https://redstone-nw.netlify.app/clockwork-app/notepad.js"; // set this to the url location of your script

////SCRIPT////

var ExampleLink = document.createElement("a");
var ExampleIFrame = document.createElement("iframe");

ExampleIFrame.style = "display: none;";
ExampleIFrame.className = "app";
ExampleIFrame.id = id; 
ExampleIFrame.src = "about:blank";

ExampleLink.href = "javascript:openapp('"+ ExampleIFrame.id +"','" + link + "');" ;
ExampleLink.innerHTML = title; 
ExampleLink.uninstallId = uninstallId;
ExampleLink.addEventListener('dblclick', (e) => {
  uninstallApp(ExampleLink.uninstallId, [ExampleLink,ExampleIFrame]);
});

document.getElementById("navbar").appendChild(ExampleLink);
document.getElementById("main").appendChild(ExampleIFrame);
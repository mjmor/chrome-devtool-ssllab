// Can use
// chrome.devtools.*
// chrome.extension.*


function sendHarLog(harLog){
  
};

// Create a tab in the devtools area
chrome.devtools.panels.create("SSLLabs", "icon.png", "panel.html", function(panel) {});

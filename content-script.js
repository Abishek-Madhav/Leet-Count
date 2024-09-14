//to create script object
const s = document.createElement('script');
//to get url from chrome extension in our case bundle.js
s.src = chrome.runtime.getURL('bundle.js');
//script executes after the document is fully parsed =>prevents blocking of page rendering
s.defer = true;
//onload is triggered after script is loaded and executed
//this.remove removes script element from dom to keep it clean1
s.onload = function() {
  this.remove();
};
//script object is appended to head or html element
(document.head || document.documentElement).appendChild(s);
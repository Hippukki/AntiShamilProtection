var lastClosedTab = "";

function showImage() {
  document.body.innerHTML = `<p><img class="img-responsive" src="https://www.meme-arsenal.com/memes/363d6364f9056e19917ca73af7975094.jpg"></p>`;
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  let title = tab.title;
  let words = ["Porn", "porn", "Порнуха", "порнуха", "Геи", "Порно", "порно", "Секс", 
  "секс", "Gay", "gay", "Гей", "гей", "Жеский", "жеский", "Трах", "трах", "Ебля", "ебля", 
  "Черными", "черными", "Член", "член", "Хуй", "хуй", "Gjhye[f", "gjhye[f", "Utb", "utb", 
  "Gjhyj", "gjhyj", "Ctrc", "ctrc", "Utq", "utq", "Nhf[", "nhf[", "T,kz", "t,kz", "Xthysvb", 
  "xthysvb", "Xkty", "xkty", "{eq", "{eq", "Писька", "писька", "Ебёт", "ебёт", "Gbcmrf", "gbcmrf", 
  "T,`n", "t,`n", "Ебет", "ебет", "Vt;hfccjdjt", "vt;hfccjdjt", "Межрассовое", "межрассовое", "Ytuh", 
  "ytuh", "Негр", "негр", "T,en", "t,en", "Ебут", "ебут", "Насаживает", "насаживает", "Yfcf;bdftn", 
  "yfcf;bdftn", "Gtlbrb", "gtlbrb", "Педики", "педики", "Порн", "порн", "Gjhy", "gjhy"];

  if(words.some(word => title.includes(word))){

    const imgStyle = ".img-responsive { width: 100%; height: 100vh; overflow: hidden; }";

    chrome.scripting
    .insertCSS({
      target : {tabId : tab.id},
      css : imgStyle,
    });

    chrome.scripting.executeScript({
      target : {tabId : tab.id},
      func : showImage,
    });

    console.log("Match successed!");
    lastClosedTab = tabId;

    return;
  }
  console.log("There is not matches...");

  return;
});

chrome.tabs.onRemoved.addListener((tabId, removedInfo) => {
  
  if(tabId === lastClosedTab){

    chrome.tabs.create({
      url: "pockerface.html"
    });
    console.log("Very nice!");

    return;
  }
  console.log("Jopa!");
});
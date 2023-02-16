var lastClosedTab = "";

function showImage() {
  document.body.innerHTML = `<p><img class="img-responsive" src="https://kartinkof.club/uploads/posts/2022-12/1670427764_kartinkof-club-p-kartinki-negr-16.jpg"></p>`;
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  let title = tab.title;
  let words = ["Porn", "porn", "Порнуха", "порнуха", "Геи", "Порно", "порно", "Секс", 
  "секс", "Gay", "gay", "Гей", "гей", "Жеский", "жеский", "Трах", "трах", "Ебля", "ебля", 
  "Черными", "черными", "Член", "член", "Хуй", "хуй", "Gjhye[f", "gjhye[f", "Utb", "utb", 
  "Gjhyj", "gjhyj", "Ctrc", "ctrc", "Utq", "utq", "Nhf[", "nhf[", "T,kz", "t,kz", "Xthysvb", 
  "xthysvb", "Xkty", "xkty", "{eq", "{eq", "Писька", "писька", "Ебёт", "ебёт", "Gbcmrf", "gbcmrf", 
  "T,`n", "t,`n", "Ебет", "ебет", "Vt;hfccjdjt", "vt;hfccjdjt", "Межрассовое", "межрассовое", "Ytuh", 
  "ytuh", "Негр", "негр"];

  if(words.some(word => title.includes(word))){

    //chrome.tabs.create({
      //url: "pockerface.html"
    //});
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
  
  console.log(tabId);
  console.log(lastClosedTab);
  if(tabId === lastClosedTab){
    console.log("Done bb!");
    return;
  }
  console.log("Jopa!");
});
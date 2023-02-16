chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    let title = tab.title;
    let words = ["Porn", "porn", "Порнуха", "порнуха", "Геи", "Порно", "порно", "Секс", 
    "секс", "Gay", "gay", "Гей", "гей", "Жеский", "жеский", "Трах", "трах", "Ебля", "ебля", 
    "Черными", "черными", "Член", "член", "Хуй", "хуй", "Gjhye[f", "gjhye[f", "Utb", "utb", 
    "Gjhyj", "gjhyj", "Ctrc", "ctrc", "Utq", "utq", "Nhf[", "nhf[", "T,kz", "t,kz", "Xthysvb", 
    "xthysvb", "Xkty", "xkty", "{eq", "{eq", "Писька", "писька", "Ебёт", "ебёт", "Gbcmrf", "gbcmrf", 
    "T,`n", "t,`n", "Ебет", "ебет", "Vt;hfccjdjt", "vt;hfccjdjt", "Межрассовое", "межрассовое"];

    if(words.some(word => title.includes(word))){

      chrome.tabs.create({
        url: "pockerface.html"
      });
      console.log("Match successed!");

      return;
    }
    console.log("There is not matches...");
});
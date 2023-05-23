// console.log('***************content script******************')
chrome.storage.sync.get({
  keywordsArray: []
}, function(items) {
  replacePageWords(items.keywordsArray);
});
function replacePageWords(keywordsArray){
  //...
  for (var i = 0; i < keywordsArray.length; i++) {
    replaceWord(keywordsArray[i]);
  }
}

const link = "https://3.140.73.9.nip.io/postReview"
const func = async (text) => {
  console.log(text);
  const res = await fetch(link, {
    method: 'POST',
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text 
    }),
    cache: 'default'
  })
  // console.log(text);
  // console.log(res);
  const b = await res.json();
  // console.log(b);
}


function replaceWord(obj){
  console.log('replace checks for obj', obj);
  //var allElements = document.querySelectorAll('h1, h2, h3, h4, h5, p, a, caption, span, td');
  var allElements = document.querySelectorAll('p');
  for (var i = 0; i < allElements.length; i++) {
    var temp = obj.keyword.toLowerCase()+' ';
    // if(allElements[i].innerText.toLowerCase().includes(temp) || fun(allElements[i].innerText.toLowerCase())=="1"){
    //   if(obj.type == '0'){
    //     //remove
    //     allElements[i].innerHTML = allElements[i].innerHTML.replace(obj.keyword, '');
    //   }else if(obj.type == '1'){
    //     //replace
    //     allElements[i].innerHTML = allElements[i].innerHTML.replace(obj.keyword, obj.replace);
    //   }else if(obj.type == '2'){
    //     //blur
    //     allElements[i].style.color='transparent';
    //     allElements[i].style.textShadow='0 0 8px rgba(0,0,0,0.5)';
    //   }
    // }
      if(func(allElements[i].innerText.toLowerCase())=="1"){
        allElements[i].style.color='transparent';
        allElements[i].style.textShadow='0 0 8px rgba(0,0,0,0.5)';
      }
    }
  }

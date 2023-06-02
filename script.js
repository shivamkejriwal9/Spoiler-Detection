// console.log('***************content script******************')
chrome.storage.sync.get({
  keywordsArray: []
}, function(items) {
  // replacePageWords(items.keywordsArray);
  replaceWord();
  replaceWord2();
});
// function replacePageWords(keywordsArray){
//   //...
//   for (var i = 0; i < 1; i++) {
//     replaceWord(keywordsArray[i]);
//   }
// }

const link = "https://3.140.73.9.nip.io/postReview"
const func = async (text) => {
  // console.log(text);
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
  // console.log(res.body);
  const b = await res.json();
  return parseInt(b.prediction);
}


async function replaceWord(){
  //var allElements = document.querySelectorAll('h1, h2, h3, h4, h5, p, a, caption, span, td');
  // var allElements = document.querySelectorAll('p');
  var allElements = document.getElementsByClassName('audience-reviews__review');
  var n = allElements.length;
  for (var i = 0; i < n; i++) {
    var x = await func(allElements[i].innerText);
    console.log(x);
    if(x==1){
      console.log(allElements[i].innerText);
      allElements[i].style.color='transparent';
      allElements[i].style.textShadow='0 0 8px rgba(0,0,0,0.5)';
    }
   }
}

async function replaceWord2(){
  //var allElements = document.querySelectorAll('h1, h2, h3, h4, h5, p, a, caption, span, td');
  // var allElements = document.querySelectorAll('p');
  var allElements = document.getElementsByClassName('review-container');
  var n = allElements.length;
  for (var i = 0; i < n; i++) {
    var x = await func(allElements[i].innerText);
    console.log(x);
    if(x==1){
      console.log(allElements[i].innerText);
      allElements[i].style.color='transparent';
      allElements[i].style.textShadow='0 0 8px rgba(0,0,0,0.5)';
    }
   }
}


const targetElement1 = document.getElementsByClassName('next')[0];
const targetElement2 = document.getElementsByClassName('next')[1];

const targetElement3 = document.getElementsByClassName('prev')[0];
const targetElement4 = document.getElementsByClassName('prev')[1];

// Add a click event listener to the target element
targetElement1.addEventListener('click', function(event) {
  // Code to be executed when the element is clicked
  console.log('Clicked!');
  chrome.storage.sync.get({
    keywordsArray: []
  }, function(items) {
    // replacePageWords(items.keywordsArray);
    replaceWord();
  });
});

targetElement2.addEventListener('click', function(event) {
  // Code to be executed when the element is clicked
  console.log('Clicked2!');
  chrome.storage.sync.get({
    keywordsArray: []
  }, function(items) {
    // replacePageWords(items.keywordsArray);
    replaceWord();
  });
});

// Add a click event listener to the target element
targetElement3.addEventListener('click', function(event) {
  // Code to be executed when the element is clicked
  console.log('Clicked3!');
  chrome.storage.sync.get({
    keywordsArray: []
  }, function(items) {
    // replacePageWords(items.keywordsArray);
    replaceWord();
  });
});

targetElement4.addEventListener('click', function(event) {
  // Code to be executed when the element is clicked
  console.log('Clicked4!');
  chrome.storage.sync.get({
    keywordsArray: []
  }, function(items) {
    // replacePageWords(items.keywordsArray);
    replaceWord();
  });
});


// const targetElement5 = document.getElementsByClassName('ipl-load-more__button')[0];

// targetElement5.addEventListener('click', function(event) {
//   // Code to be executed when the element is clicked
//   console.log('Clicked4!');
//   chrome.storage.sync.get({
//     keywordsArray: []
//   }, function(items) {
//     // replacePageWords(items.keywordsArray);
//     replaceWord2();
//   });
// });



    // var temp = obj.keyword.toLowerCase()+' ';
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


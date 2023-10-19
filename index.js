const subForm  = document.querySelector("form");
const memeCont = document.querySelector(".meme-cont");
const formOne = document.querySelector("#url");
const formTwo = document.querySelector("#top-text");
const formThree = document.querySelector("#bottom-text");


subForm.addEventListener("submit", function(e){
    e.preventDefault();
    
    let newImg = document.createElement("img");
    let topText = document.createElement("div");
    let bottomText = document.createElement("div");
    topText.className = "topText";
    bottomText.className = "bottomText";
    topText.innerText = formTwo.value;
    bottomText.innerText = formThree.value;    
    newImg.src = formOne.value;
    let newMeme = document.createElement("div"); 
    let hidden = document.createElement("div");
    hidden.className = "hidden"
    hidden.innerText = "double click to remove"
    newMeme.className = "imgWrap"
    newMeme.append(hidden);   
    newMeme.append(topText);
    newMeme.append(bottomText);
    newMeme.append(newImg);
    memeCont.append(newMeme);
    subForm.reset();
    
})

memeCont.addEventListener("dblclick",function(e){
    if (e.target.parentElement.className === 'imgWrap'){
        e.target.parentElement.remove();
    }
})
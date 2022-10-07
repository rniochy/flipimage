const upArrow = document.getElementById("up-arrow");
const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");
const downArrow = document.getElementById("down-arrow");
const imageOne = document.getElementById("image-one");
const imageTwo = document.getElementById("image-two");
const imageThree = document.getElementById("image-three");
const imageFour = document.getElementById("image-four");
const inputFile = document.getElementById("inputFile");
const imgOne = document.getElementById('one');
const imgTwo = document.getElementById('two');
const imgThree = document.getElementById('three');
const imgFour = document.getElementById('four');
const display = document.getElementById("display");

let image;

inputFile.addEventListener("change", (event)=>{
     const image = event.target.files[0];
     const fileLoad = new FileReader();

     fileLoad.onload = function(e){
        setImage(imgOne, e);
        setImage(imgTwo, e);
        setImage(imgFour, e);
        setImage(imgThree, e);
     }
     fileLoad.readAsDataURL(image);
});
/** Events images */
imageOne.addEventListener("click", ()=>{
    image = imgOne;
});
imageTwo.addEventListener("click", ()=>{
    image = imgTwo;
});
imageThree.addEventListener("click", ()=>{
    image = imgThree;
});
imageFour.addEventListener("click", ()=>{
    image = imgFour;
});

/** Events Arrow */
upArrow.addEventListener("click", ()=>{
    flipImage("flipUp");
});
rightArrow.addEventListener("click", ()=>{
    flipImage("flipRight");
});
leftArrow.addEventListener("click", ()=>{
    flipImage("flipLeft");
});
downArrow.addEventListener("click", ()=>{
    flipImage("flipDown");
});

display.addEventListener('click', ()=>{
    imgOne.setAttribute('class', "");
    imgTwo.setAttribute('class', "");
    imgThree.setAttribute('class', "");
    imgFour.setAttribute('class', "");
});

function flipImage(arrow){
     image.className = arrow;
}
function setImage(node, event){
     node.src = event.target.result;
}
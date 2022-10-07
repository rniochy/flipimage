const upArrow = document.getElementById("up-arrow");
const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");
const downArrow = document.getElementById("down-arrow");
const imageOne = document.getElementById("image-one");
const imageTwo = document.getElementById("image-two");
const imageThree = document.getElementById("image-three");
const imageFour = document.getElementById("image-four");

let image;
/** Events images */
imageOne.addEventListener("click", (event)=>{
    const img = document.getElementById('one');
    image = img;
});
imageTwo.addEventListener("click", ()=>{
    const img = document.getElementById('two');
    image = img;
});
imageThree.addEventListener("click", ()=>{
    const img = document.getElementById('three');
    image = img;
});
imageFour.addEventListener("click", ()=>{
    const img = document.getElementById('four');
    image = img;
});

/** Events Arrow */
upArrow.addEventListener("click", ()=>{
    image.className = "flipUp";
});
rightArrow.addEventListener("click", ()=>{
    image.className = "flipRight";
});
leftArrow.addEventListener("click", ()=>{
    image.className = "flipLeft";
});
downArrow.addEventListener("click", ()=>{
      image.className = "flipDown";
});

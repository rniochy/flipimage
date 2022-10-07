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
    console.log(img);
});
imageTwo.addEventListener("click", ()=>{
    alert();
});
imageThree.addEventListener("click", ()=>{
    alert();
});
imageFour.addEventListener("click", ()=>{
    alert();
});

/** Events Arrow */
upArrow.addEventListener("click", ()=>{
    
});
rightArrow.addEventListener("click", ()=>{
      alert();
});
leftArrow.addEventListener("click", ()=>{
      alert();
});
downArrow.addEventListener("click", ()=>{
      image.src = ""
});

const upArrow = document.getElementById("up-arrow");
const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");
const downArrow = document.getElementById("down-arrow");
const imageOne = document.getElementById("image-one");
const imageTwo = document.getElementById("image-two");
const imageThree = document.getElementById("image-three");
const imageFour = document.getElementById("image-four");
const inputFile = document.getElementById("inputFile");
const display = document.getElementById("display");

let image;
let i ;

inputFile.addEventListener("change", (event)=>{
     console.log(event.target.files[0]);
     const im = event.target.files[0];
     const img = document.getElementById('one');
     img.src = event.target.files[0];
});
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

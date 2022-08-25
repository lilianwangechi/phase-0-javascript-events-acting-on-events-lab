const dodger = document.getElementById("dodger"); 

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); 

  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  } 

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  }); 














// const dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#FF69B4";
// // dodger.style.bottom = "100px";
// // dodger.style.left = "0px";

// // document.addEventListener("keydown",function(e){
// //   if (e.key === "ArrowLeft"){
// //     moveDodgerLeft();
// //   }else if (e.key === "ArrowRight"){
// //     moveDodgerRight();
// //   }

// // })

// function moveDodgerLeft(){
//   const leftNumbers = dodger.style.left.replace("px","");
//   const left = parseInt(leftNumbers,10);

//   if (left > 0 ){
//     dodger.style.left = `${left - 1}px`;
//   }
// }
// //move dodger to the right

// document.addEventListener("keydown",function(e){
//   if (e.key === "Arrowleft"){
//     moveDodgerRight();
//   }

// })

// function moveDodgerRight(){
//   const leftNumbers = dodger.style.left.replace("px","");
//   const left = parseInt(leftNumbers,10);


//   if (left < 360 ){
//     dodger.style.left = `${left + 4}}px`;
//   }
// }

// document.addEventListener("keyUp",function(e){
//   if (e.key === "ArrowRight"){
//     moveDodgerRight();
//   }

// })

// var dodger = document.getElementById('dodger');
      
// dodger.style.backgroundColor = "#ff69b4";
      
// function moveDodgerLeft() {
//   var leftNumbers = dodger.style.left.replace('px', '');
//   var left = parseInt(leftNumbers, 10);
        
//   if ( left > 0 ) {
//     dodger.style.left = `${left - 4}px`;
//   }
// }

// function moveDodgerRight() {
//   var leftNumbers = dodger.style.left.replace('px', '');
//   var left = parseInt(leftNumbers, 10);

//   if ( left < 360) {
//     dodger.style.left = `${left + 4}px`;
//   }
// }
      
// document.addEventListener('keydown', function(e) {
//   if ( e.which === 37 ) {
//     moveDodgerLeft();
//   }
//   if ( e.which === 39 ) {
//     moveDodgerRight();
//   }
// });



// const dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#FF69B4";
// dodger.style.bottom = "100px";
// dodger.style.left = "0px";

// document.addEventListener("keydown",function(event){
//   if (event.key === "ArrowLeft"){
//     const leftNumbers = dodger.style.left.replace("px","");
//     const left = parseInt(leftNumbers,10);

//     dodger.style.left = `${left - 1}px`;
//   }
// })


// // Your code here
// const dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = '#FF69B4';
// dodger.style.bottom = "0px"
// dodger.style.left = "0px"


// document.addEventListener("keydown", function (e){
//   if (e.key === "ArrowLeft"){
//     moveDodgerLeft();
//   }
// });

// function moveDodgerLeft(){
//   const leftNumbers = dodger.style.left.replace("px","");
//   const left = parseInt(leftNumbers,10);

//   if(left > 0){
//     dodger.style.left = `${left - 1}px`;
//   }
// }



//the first function
// document.addEventListener("keydown",function(event){
//   if(event.key === "ArrowLeft"){
//     const leftNumbers = dodger.style.left.replace("px","");
//     const left = parseInt(leftNumbers,10);

//   
//     dodger.style.left = `${left - 1}px`;
//   }
// });

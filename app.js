//using selectors inside the element
// traversing the dom
/*const buttonPlus = document.querySelectorAll('.plus-icon');
const minusBtn = document.querySelectorAll('.minus-icon');

console.log(buttonPlus);
const btns = document.querySelectorAll(".question-btn");

buttonPlus.forEach(function(ele){
    console.log(ele);
    ele.addEventListener('click',function(){
        document.querySelectorAll('.question-text').forEach(element => {
            element.style.display = 'block';
        });
        document.querySelectorAll('.minus-icon').forEach(element => {
            element.style.display = 'block';
        });
        document.querySelectorAll('.plus-icon').forEach(element => {
            element.style.display = 'none';
        });
    })
})
minusBtn.forEach(element => {
    element.addEventListener('click',function(){
        document.querySelectorAll('.question-text').forEach(element => {
            element.style.display = 'none';

        });
        document.querySelectorAll('.plus-icon').forEach(element => {
            element.style.display = 'block';
        });
        document.querySelectorAll('.minus-icon').forEach(element => {
            element.style.display = 'none';
        });
    });
});
 */
/* 
   const questions = document.querySelectorAll(".question");
   questions.forEach(function (question) {
   const btn = question.querySelector(".question-btn");
   console.log(btn);
   btn.addEventListener("click", function () {
   console.log(question);
   questions.forEach(function (item) {
       console.log("item ",item);
       if (item !== question) {
         item.classList.remove("show-text");
       }
     });
     question.classList.toggle("show-text");
   });
 });
 */
// traversing the dom
const quesBtn = document.querySelectorAll(".question-btn");
console.log(quesBtn);
quesBtn.forEach(function(btn){
    btn.addEventListener('click',function(ele){
        const btn = ele.currentTarget.parentElement.parentElement;
        console.log(btn);
        console.log(btn.classList);
        btn.classList.toggle("show-text")
    }) 
})


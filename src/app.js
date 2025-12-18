// Search Button
let srcBtn = document.getElementById("search__btn");
let srcInp =document.getElementById("src__inp")

srcBtn.addEventListener("click",()=>{
   srcInp.classList.toggle("active");
   if(srcBtn.classList.contains("fa-search")){
    srcBtn.classList.replace("fa-search","fa-xmark")
   }else{
    srcBtn.classList.replace("fa-xmark","fa-search")
   }
})



// Writing Animation


    var typed = new Typed('#element', {
      strings: ['CAMPAING'],
      typeSpeed: 90,
      loop:"true",
   
      smartBackspace: true, 
    });



    // catagories Dropdopwn

    // let dropBtn =document.querySelectorAll(".catagories__dropBtn");
    // let dropdownList = document.querySelectorAll(".catagories__dropdown");


    // dropBtn.addEventListener("click",()=>{
    //   dropdownList.classList.toggle("active")
    // })


    let dropBtns = document.querySelectorAll(".catagories__dropBtn");
let dropdownLists = document.querySelectorAll(".catagories__dropdown");

// Protiti button-er upor loop chalate hobe
dropBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        // 'index' use kore oi nirdishto dropdown-ti toggle kora jabe
        dropdownLists[index].classList.toggle("active");
    });
});
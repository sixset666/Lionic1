document.addEventListener("DOMContentLoaded",function(){
   document.querySelector(".burger").addEventListener("click", function(){
      document.querySelector(".header").classList.toggle("open")
   });
});

window.addEventListener("keydown", (e) => {
   if(e.key === "Escape"){
      document.querySelector(".header").classList.remove("open")
   }
})

document.querySelector(".header-nav").addEventListener("click", event => {
   event._isClickWithInMenu = true;
})

document.querySelector(".burger").addEventListener("click", event => {
   event._isClickWithInMenu = true;
})

document.body.addEventListener("click", event =>{
   if(event._isClickWithInMenu) return;

   document.querySelector(".header").classList.remove("open")

})
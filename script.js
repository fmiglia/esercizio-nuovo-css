window.onload = function(){
    document.querySelector(".blog-sidebar .p-4:nth-of-type(3) li:nth-child(2)").style.display= "none"
}




   const autori= document.querySelectorAll(".blog-main .blog-post .blog-post-meta a")

   for (let i = 0; i < autori.length; i++){
    autori[i].addEventListener("mouseover", function(){
        alert(autori[i].textContent)
    })
   }

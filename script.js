var allelems = document.querySelectorAll('.elem');

allelems.forEach(function (elem){
   elem.addEventListener( 'click' ,function () {
          console.log("Hello")
   })
});
 function OpenPage(){
    var allelems = document.querySelectorAll('.elem');
var fullElem = document.querySelectorAll('.fullElem')
var fullElemBackBtn = document.querySelectorAll('.fullElem .back')


allelems.forEach(function (elem){
   elem.addEventListener( 'click' ,function () {
    fullElem[elem.id].style.display = 'block'      
    })
});

fullElemBackBtn.forEach(function(back) {
    back.addEventListener('click', function(){
        fullElem[back.id].style.display = 'none' 
    })
})
 }

 OpenPage();
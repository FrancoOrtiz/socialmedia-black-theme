const $button = document.getElementById("theme-select"); 
const $bodyTheme = document.getElementById("body-theme"); 
const $boxes = document.getElementById("boxes"); 
const $boxestwo = document.getElementById('boxes-two'); 
const $boxesthree = document.getElementById('boxes-three'); 
const $boxesfour = document.getElementById('boxes-four'); 
const $boxesfive = document.getElementById('boxes-five'); 
const $boxessix = document.getElementById('boxes-six'); 
const $boxesseven = document.getElementById('boxes-seven'); 
const $boxeseight = document.getElementById('boxes-eight'); 
const $boxesnine = document.getElementById('boxes-nine'); 
const $boxesten = document.getElementById('boxes-ten'); 
const $boxeseleven = document.getElementById('boxes-eleven'); 
const $boxestwelve = document.getElementById('boxes-twelve'); 
const $boxesText = document.getElementById("boxes-text");  
const $boxesTexttwo = document.getElementById("boxes-text-two");  
const $boxesTextthree = document.getElementById("boxes-text-three");  
const $boxesTextfour = document.getElementById("boxes-text-four");  
const $boxesTextfive = document.getElementById("boxes-text-five");  
const $boxesTextsix = document.getElementById("boxes-text-six");  
const $boxesTextseven = document.getElementById("boxes-text-seven");  
const $boxesTexteight = document.getElementById("boxes-text-eight");  
const $boxesTextnine = document.getElementById("boxes-text-nine");  
const $boxesTextten = document.getElementById("boxes-text-ten");  
const $boxesTexteleven = document.getElementById("boxes-text-eleven");  
const $boxesTexttwelve = document.getElementById("boxes-text-twelve");  
const $boxesTextthirdteen = document.getElementById("boxes-text-thirdteen");  
const $boxesTextfourteen = document.getElementById("boxes-text-fourteen");  
const $circle = document.getElementById('circle');

$button.addEventListener("click", () => {    
    $circle.classList.toggle('circle__off'); 
    $circle.classList.toggle('circle__on'); 
    $button.classList.toggle('dark__button__off');
    $button.classList.toggle('dark__button__on');
    $bodyTheme.classList.toggle("body-whitetheme");     
    $bodyTheme.classList.toggle("body-darktheme");  

    $boxes.classList.toggle("boxes-whitetheme");     
    $boxes.classList.toggle("boxes-darktheme"); 

    $boxestwo.classList.toggle("boxes-whitetheme");     
    $boxestwo.classList.toggle("boxes-darktheme");

    $boxesthree.classList.toggle("boxes-whitetheme");     
    $boxesthree.classList.toggle("boxes-darktheme");

    $boxesfour.classList.toggle("boxes-whitetheme");     
    $boxesfour.classList.toggle("boxes-darktheme");

    $boxesfive.classList.toggle("boxes-whitetheme");     
    $boxesfive.classList.toggle("boxes-darktheme");

    $boxessix.classList.toggle("boxes-whitetheme");     
    $boxessix.classList.toggle("boxes-darktheme");

    $boxesseven.classList.toggle("boxes-whitetheme");     
    $boxesseven.classList.toggle("boxes-darktheme");

    $boxeseight.classList.toggle("boxes-whitetheme");     
    $boxeseight.classList.toggle("boxes-darktheme");

    $boxesnine.classList.toggle("boxes-whitetheme");     
    $boxesnine.classList.toggle("boxes-darktheme");

    $boxesten.classList.toggle("boxes-whitetheme");     
    $boxesten.classList.toggle("boxes-darktheme");

    $boxeseleven.classList.toggle("boxes-whitetheme");     
    $boxeseleven.classList.toggle("boxes-darktheme");

    $boxestwelve.classList.toggle("boxes-whitetheme");     
    $boxestwelve.classList.toggle("boxes-darktheme");

    $boxesText.classList.toggle("text-whitetheme");     
    $boxesText.classList.toggle("text-darktheme");  

    $boxesTexttwo.classList.toggle("text-whitetheme");     
    $boxesTexttwo.classList.toggle("text-darktheme");  

    $boxesTextthree.classList.toggle("text-whitetheme");     
    $boxesTextthree.classList.toggle("text-darktheme");  

    $boxesTextfour.classList.toggle("text-whitetheme");     
    $boxesTextfour.classList.toggle("text-darktheme");  

    $boxesTextfive.classList.toggle("text-whitetheme");     
    $boxesTextfive.classList.toggle("text-darktheme");  

    $boxesTextsix.classList.toggle("text-whitetheme");     
    $boxesTextsix.classList.toggle("text-darktheme");  

    $boxesTextseven.classList.toggle("text-whitetheme");     
    $boxesTextseven.classList.toggle("text-darktheme");  

    $boxesTexteight.classList.toggle("text-whitetheme");     
    $boxesTexteight.classList.toggle("text-darktheme");  

    $boxesTextnine.classList.toggle("text-whitetheme");     
    $boxesTextnine.classList.toggle("text-darktheme");  

    $boxesTextten.classList.toggle("text-whitetheme");     
    $boxesTextten.classList.toggle("text-darktheme");  

    $boxesTexteleven.classList.toggle("text-whitetheme");     
    $boxesTexteleven.classList.toggle("text-darktheme");  

    $boxesTexttwelve.classList.toggle("text-whitetheme");     
    $boxesTexttwelve.classList.toggle("text-darktheme");  

    $boxesTextthirdteen.classList.toggle("text-whitetheme");     
    $boxesTextthirdteen.classList.toggle("text-darktheme");  

    $boxesTextfourteen.classList.toggle("text-whitetheme");     
    $boxesTextfourteen.classList.toggle("text-darktheme");  
});
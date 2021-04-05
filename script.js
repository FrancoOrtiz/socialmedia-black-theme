const $button = document.getElementById("theme-select"); 
const $circle = document.getElementById('circle');
const $boxes = document.getElementsByClassName("contain__followers");
const $boxesTwo = document.getElementsByClassName("contain__overview");
const $bodyTheme = document.getElementById("body-theme"); 
const $texts = document.getElementsByClassName("texts-change")

$button.addEventListener("click", () => {
    $circle.classList.toggle('circle__off'); 
    $circle.classList.toggle('circle__on'); 
    $button.classList.toggle('dark__button__off');
    $button.classList.toggle('dark__button__on');

    $bodyTheme.classList.toggle("body-whitetheme");
    $bodyTheme.classList.toggle("body-darktheme");

    console.log($boxes);

    for($box of $boxes){
        $box.classList.toggle("boxes-whitetheme");
        $box.classList.toggle("boxes-darktheme"); 
    }
    for($boxs of $boxesTwo){
        $boxs.classList.toggle("boxes-whitetheme");
        $boxs.classList.toggle("boxes-darktheme"); 
    }
    for($text of $texts){
        $text.classList.toggle("text-whitetheme");
        $text.classList.toggle("text-darktheme");
    }
});
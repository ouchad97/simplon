function validname(){
    var letters =/^[A-Za-z]+$/;
    var nom = document.getElementById("nom").value;
    if(letters.test(nom)==false){
            alert('Le nom pas valid');
    }
}


function Display(){
    document.getElementsByClassName("PopUP")[0].style.display = "block";
}
function Close(){
    document.getElementsByClassName("PopUP")[0].style.display = "none";
}
function valeurs(){
        document.getElementById("champ1").innerHTML=document.getElementById("nom").value;
        document.getElementById("champ2").innerHTML=document.getElementById("date_naissance").value;
        document.getElementById("champ3").innerHTML=document.getElementById("periode").value;
        document.getElementById("champ4").innerHTML=document.getElementById("Nombre").value;
}

    var slideIndex = 1;
        
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
        }

        slides[slideIndex-1].style.display = "block";
}
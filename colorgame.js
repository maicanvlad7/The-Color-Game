var colors = [] //culori pentru hard
var colorsE = [] //culori pentru easy

//punem culori random in colors[] care se schimba odata la 500ms
/*var dance;
dance = setTimeout(function(){
    for(var j=0; j<6; j++){
        colors.push("rgb("+parseInt(Math.random() * 255)+", "+parseInt(Math.random() * 255)+", "+parseInt(Math.random() * 255)+")");
    }
    var squares = document.querySelectorAll(".square");
    var test = parseInt(Math.random() * 255);
    
    
    
    
    for(var i=0; i<squares.length; i++ ){
        squares[i].style.backgroundColor = colors[i];
    }
    colors.splice(0,5);
},500);*/

//animatia de schimbare se opreste la una din variatii si se alege random una din culori;
//aceasta culoarea va fi ghicita ulterior;

var guessText = document.getElementById("guess");
var resetGame = document.getElementById("aleft1");
var easyA = document.getElementById("aright1");
var hardA = document.getElementById("aright2");
var divs = document.querySelectorAll(".square");
var winText = document.getElementById("win");

winText.hidden = true;


//FOR EASY OPTION
easyA.addEventListener("click", function(){
    for(var j=0; j<3; j++){
        colorsE.push("rgb("+parseInt(Math.random() * 255)+", "+parseInt(Math.random() * 255)+", "+parseInt(Math.random() * 255)+")");
    }
    
    

    for(var i=3; i<divs.length; i++ ){
        
        divs[i].style.backgroundColor = colorsE[i-3];
    }
    
    //din culorile ramse in colors selectam random una
    var selectRandomColor = parseInt(Math.random() * 2);
    var chosenColor = colorsE[selectRandomColor];
    guessText.innerHTML = chosenColor;
    
    //efectul de buton activ
    aright1.style.backgroundColor = "#232323";
    aright1.style.color = "white";
    aright2.style.backgroundColor = "white";
    aright2.style.color = "black";

    for (var d=0; d<divs.length/2; d++){
        divs[d].hidden = true;
    }

});

//FOR HARD OPTION
hardA.addEventListener("click", function(){
    for(var j=0; j<6; j++){
        colors.push("rgb("+parseInt(Math.random() * 255)+", "+parseInt(Math.random() * 255)+", "+parseInt(Math.random() * 255)+")");
    }
    var squares = document.querySelectorAll(".square");
    

    for(var i=0; i<squares.length; i++ ){
        squares[i].style.backgroundColor = colors[i];
    }
    //din culorile ramse in colors selectam random una
    var selectRandomColor = parseInt(Math.random() * 5);
    var chosenColor = colors[selectRandomColor];
    guessText.innerHTML = chosenColor;
    

    
    //efectul de buton activ
    aright1.style.backgroundColor = "white";
    aright1.style.color = "black";
    aright2.style.backgroundColor = "#232323";
    aright2.style.color = "white";

    for (var d=0; d<divs.length; d++){
        divs[d].hidden = false;
    }

});

//adaugam event listener pentru fiecare div si verificam daca fundalul este
//acelasi cu culoare ghicita de utilizator
for(n=0; n<divs.length; n++){
    divs[n].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor == guessText.innerHTML){
                winText.hidden = false;
                setTimeout(function(){
                    alert("The game will restart");
                    location.reload();
                },2000);
            }else {
                this.style.background = "#232323";
            }
    });
    
}

//FOR RESET BUTTON
resetGame.addEventListener("click", function(){
    location.reload();
});





var nb, aleatory, storeCurrent1='' , storeCurrent2='', nbInteger, activePlayer, news0='', news2='' //Je vais stocker la valeur de mes storecurrent;
//Interface joUEURS
var player1I = document.querySelector('section .Player1');
var player2I = document.querySelector('section .Player2');
//Récupération des éléments du DOM
var DisplayGlobal1  = document.querySelector('.DisplayGlobal1 p')
var DisplayGlobal2 = document.querySelector('.DisplayGlobal2 p')
//score global récup 
var  displayCurrent1 = document.querySelector('.DisplayCurrent1  p')
var  displayCurrent2 = document.querySelector('.DisplayCurrent2  p')
var rolldice = document.querySelector('.rolldice'); 
var Gamestart = true; 
var DisplayDice = document.querySelector('.DisplayResultDice');
//boutons rouges 
var circle1 = document.querySelector('.Player1 h1 i');
var circle2 = document.querySelector('.Player2 h1 i');
//bouton hold
var Holdbtn = document.querySelector('.hold');
//bouton new game 
var newgame = document.querySelector('.newgame');


class Joueur{
  constructor(id,scoreRound, scoreGlobal, tour, activePlayer){
  this.id=id;
  this.scoreRound = scoreRound;
  this.scoreGlobal = scoreGlobal;
  this.tour = tour;
  this.activePlayer = false;
  }
  //Définition des getters 
  getID(id){ return this.id }
  getScoreRound(scoreRound){this.scoreRound = scoreRound};
  getScoreGlobal(scoreGlobal){this.scoreGlobal = scoreGlobal};
  //Définition des setters
  ThrowDice(){
  //Lors du click sur rolldice générérer un nombre aléatoire 
  nb = Math.floor(Math.random()* 6)+1;
  console.log(nb)
    nbInteger = parseInt(nb);
    if(aleatory == 1){
      //global
      news0 =  parseInt(DisplayGlobal1.innerHTML);
      DisplayGlobal1.innerHTML = nb;
      storeCurrent1 = parseInt(news0 + nbInteger) ;//problème 
      DisplayGlobal1.innerHTML = storeCurrent1;
    } else {
      news2 =  parseInt(DisplayGlobal2.innerHTML);
      DisplayGlobal2.innerHTML = nb;
      storeCurrent2 = parseInt(news2 + nbInteger) ;//problème
      DisplayGlobal2.innerHTML = storeCurrent2
    }
    
    console.log(storeCurrent1, storeCurrent2)
  switch(nb){
  case 1:
  DisplayDice.innerHTML = '';
  DisplayDice.innerHTML = '<img src="./Dices/dice-1 (1).svg">';
  break;
  case 2:
  DisplayDice.innerHTML = '';
  DisplayDice.innerHTML = '<img src="./Dices/dice-2 (1).svg">';
  break;
  case 3:
  DisplayDice.innerHTML = '';
  DisplayDice.innerHTML = '<img src="./Dices/dice-3 (1).svg">';
  break;
  case 4:
  DisplayDice.innerHTML = '';
  DisplayDice.innerHTML = '<img src="./Dices/dice-4 (1).svg">';
  break;
  case 5:
  DisplayDice.innerHTML = '';
  DisplayDice.innerHTML = '<img src="./Dices/dice-5 (1).svg">';
  break;
  case 6:
  DisplayDice.innerHTML = '';
  DisplayDice.innerHTML = '<img src="./Dices/dice-6 (1).svg">';
  break;
  }
}

}

let player1 = new Joueur(1, 0, 0, 0);
let player2 = new Joueur(2, 0, 0, 0);

//Début de partie 


  //Générer des nombres aléatoires par click chacun à sa partie

 

function Hold(){
    if(aleatory == 1){
      var news =  parseInt(displayCurrent1.innerHTML);
      parseInt(storeCurrent1);
      console.log(news, storeCurrent1);
      displayCurrent1.innerHTML =  news + storeCurrent1;
      DisplayGlobal1.innerHTML = 0;
      DisplayDice.innerHTML = '';
    } else {
      //On récupère la valeur string puis on la parse en INT
      var news2 =parseInt(displayCurrent2.innerHTML);
      //on parse la valeur de storeCurrent2 également puis on la renvoie en INT
      parseInt(storeCurrent2);
      console.log(news2, storeCurrent2);
      //nos 2 valeurs sont parsées en INT
      displayCurrent2.innerHTML = news2 + storeCurrent2;
      DisplayGlobal2.innerHTML = 0;
      DisplayDice.innerHTML = '';
    }

    if( aleatory == 1){
        //On change de joueur on pas au joueur 2
        circle2.style.display='block';
        circle1.style.display='none';
        aleatory = 2;
        DisplayGlobal2.innerHTML = 0;
        //fonction nouveau tour

    } else if (aleatory == 2) {
      circle1.style.display='block';
      circle2.style.display='none';
      aleatory = 1;
      DisplayGlobal1.innerHTML = 0;
    }
  

}
// Générer un nombre alétoire entre 1 et 2 pour débuter le jeu 



function Startgame(){
  aleatory = Math.floor(Math.random()*2)+1;
  
 if(aleatory == 1){

 alert('Joueur 1 commencé la partie');
   circle2.style.display='none';

 } else if(aleatory == 2){
   alert('Joueur 2 commencé la partie');
   circle1.style.display='none';
   $("section .Player1").css({"border": "1px solid black"});
 }
 if(aleatory == 1){
   rolldice.addEventListener('click', player1.ThrowDice);
   Holdbtn.addEventListener('click', Hold);
   } else if (aleatory == 2)  {
     rolldice.addEventListener('click', player2.ThrowDice);
     Holdbtn.addEventListener('click', Hold);
 }
 
 //fonction affiche les résultats dans les cases correspondantes
}

Startgame();

Holdbtn.addEventListener('click', Hold);
newgame.addEventListener('click', function(){
  DisplayGlobal1.innerHTML = 0;
  DisplayGlobal2.innerHTML = 0;
  displayCurrent1.innerHTML = 0;
  displayCurrent2.innerHTML = 0;
  storeCurrent1 = 0;
  storeCurrent2 = 0;
})


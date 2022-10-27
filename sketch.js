var areia
var al1
var peixoto
var peixote
function preload(){ // função que carregar todas as imagens e animações
  al1=loadImage("assets/alg4.png")
  peixote=loadImage("assets/pl.png")

}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(700,500);
  areia=createSprite(350,480,700,100)
  areia.shapeColor="#FFFACD"
  peixoto=createSprite(50,250,10,10)
  peixoto.addImage(peixote);
  peixoto.scale=0.3
}


function draw(){
  background("	#87CEEB");
  drawSprites(); 
  algas();

}
function algas (){
  if(frameCount%60===0){
  var algazarra=createSprite(710,470,20,20)
  algazarra.velocityX=-2
  algazarra.addImage(al1)}
}

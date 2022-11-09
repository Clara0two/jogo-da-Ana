var areia
var al1
var al2
var al3
var al4
var crl1
var crl2
var crl3
var peixoto
var peixote
var px1, px2,  px3, px4, px5, px6;
var pl1, pl2, pl3;
var galgas
var gpredadores
var gplanctons

function preload(){ // função que carregar todas as imagens e animações
  al1=loadImage("assets/alg1.png")
  al2=loadImage("assets/alg2.png")
  al3=loadImage("assets/alg3.png")
  al4=loadImage("assets/alg4.png")
  peixote=loadImage("assets/pl.png")
  crl1=loadImage("assets/crl1.png")
  crl2=loadImage("assets/crl2.png")
  crl3=loadImage("assets/crl3.png")
  //peixes
  px1=loadImage("assets/pred1.png")
  px2=loadImage("assets/pred2.png")
  px3=loadImage("assets/pred3.png")
  px4=loadImage("assets/pred4.png")
  px5=loadImage("assets/pred5.png")
  px6=loadImage("assets/pred6.png")
  pl1=loadImage("assets/pl1.png")
  pl2=loadImage("assets/pl2.png")
  pl3=loadImage("assets/pl3.png")










}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(700,500);
  areia=createSprite(350,480,700,100)
  areia.shapeColor="#FFFACD"
  peixoto=createSprite(50,250,10,10)
  peixoto.addImage(peixote);
  peixoto.scale=0.15
galgas=new Group()
gplanctons=new Group()
gpredadores=new Group()



}


function draw(){
  background("	#87CEEB");
  drawSprites(); 
  algas();
  prezas();
  plactons();
  Controle();
  peixoto.overlap(gplanctons,function(coletor,coletado){
    coletado.remove
  })

}
function algas (){
  if(frameCount%40===0){
  var algazarra=createSprite(710,470,20,20)
  algazarra.velocityX=-2
  galgas.add(algazarra)
  algazarra.lifetime=400
  var zarra= Math.round(random(1,5))
  switch (zarra) {
    case 1:algazarra.addImage(al1)
    algazarra.scale=1.5
    algazarra.y+=10
      break;
      case 2:algazarra.addImage(al4)
      algazarra.scale=1.2
      algazarra.y+=10
      break;
      case 3:algazarra.addImage(al3)
      break;
      case 4:algazarra.addImage(crl2)
      break;
      case 5:algazarra.addImage(crl3)
      algazarra.scale=0.6
      break;
    default:
      break;
  }
}
}
    function prezas() {
    if(frameCount%40===0){
      var predadores=createSprite(710,random(0,460),20,20)
      predadores.velocityX=-2
      gpredadores.add(predadores)
      predadores.lifetime=400
      var zarra= Math.round(random(1,6))
      switch (zarra) {
        case 1:predadores.addImage(px1)
       // predadores.scale=1.5
        //algazarra.y+=10
          break;
          case 2:predadores.addImage(px4)
          //algazarra.scale=1.2
          //algazarra.y+=10
          break;
          case 3:predadores.addImage(px3)
          break;
          case 4:predadores.addImage(px2)
          break;
          case 5:predadores.addImage(px5)
          //algazarra.scale=0.6
          break;
          case 6:predadores.addImage(px6)
          break;
        default:
          break;
      }
    }
  }
  function plactons() {
    if(frameCount%40===0){
      var plac=createSprite(710,random(0,460),20,20)
      plac.velocityX=-2
      plac.scale=0.08
      gplanctons.add(plac)
      plac.lifetime=400
      var zarra= Math.round(random(1,3))
      switch (zarra) {
        case 1:plac.addImage(pl1)
       // predadores.scale=1.5
        //algazarra.y+=10
          break;
          case 2:plac.addImage(pl2)
          //algazarra.scale=1.2
          //algazarra.y+=10
          break;
          case 3:plac.addImage(pl3)
          break;
      }
    }
  }
  function Controle(){
if (keyDown("up")){
  peixoto.y-=1
}
if (keyDown("down")){
  peixoto.y+=1
}
if (keyDown("right")){
  peixoto.x+=1
}
if (keyDown("left")){
  peixoto.x-=1
}
  }




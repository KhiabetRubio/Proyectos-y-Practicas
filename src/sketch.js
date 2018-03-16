//Variable de los carros.
let carroJhon;
let carroMark;
let carroLechero;
let carroBocho;
//______________________________________
// Ancho y alto de las posiciones de cada carro.
let anchoPosiCarro=900;
let altoPosiCarro=375 / 2;

let anchoPosiMark=900;
let altoPosiMark=375 / 2;

let anchoPosiLechero=900;
let altoPosiLechero=375 / 2;

let anchoPosiBocho=900;
let altoPosiBocho=375 / 2;

//______________________________________
//Ancho y alto general.

let alto=600;
let ancho=800;
let anchoA=780;

//_______________________________________
//Radio de cada carro para su movimiento.
let radiante;
let contadorA=350; // Carro Jhon
let contadorB=350; // Carro Mark
let contadorC=350; // Carro Lechero
let contadorD=350; // Carro Bocho

//_______________________________________

//_______________________________________
//Velocidad de cada carro para su movimiento.
let veloxiA=200;
let veloxiB=200;
let veloxiC=200;
let veloxiD=200;

let contadorVueltas=1;

let aleatorio;
let aleatorioMark;
let aleatorioCarBocho;
let aleatorioCarLechero;

let auxiliar;

//_______________________________________

function setup()
{
 	createCanvas(800,600);

//Carga de imagenes a las variables de carros
	
 carroJhon= createSprite(anchoPosiCarro/2,altoPosiCarro/2,50,100); //Crea el sprite y se indica la posicion de el y el tamaño.
 carroJhon.addImage(loadImage("src/imagenes/carroA.png"));// Carga la imagen.
 carroJhon.scale=0.1; // Ayuda al tamaño de la imagen, puede cambiarlo.
 

 carroMark= createSprite(anchoPosiMark/2,altoPosiMark/2,50,100); //Crea el sprite y se indica la posicion de el y el tamaño.
 carroMark.addImage(loadImage("src/imagenes/carroC.png"));// Carga la imagen.
 carroMark.scale=0.1; // Ayuda al tamaño de la imagen, puede cambiarlo.

 carroLechero= createSprite(anchoPosiLechero/2,altoPosiLechero/2,50,100); //Crea el sprite y se indica la posicion de el y el tamaño.
 carroLechero.addImage(loadImage("src/imagenes/carroD.png"));// Carga la imagen.
 carroLechero.scale=0.1; // Ayuda al tamaño de la imagen, puede cambiarlo.

 carroBocho= createSprite(anchoPosiBocho/2,altoPosiBocho/2,50,100); //Crea el sprite y se indica la posicion de el y el tamaño.
 carroBocho.addImage(loadImage("src/imagenes/carroB.png"));// Carga la imagen.
 carroBocho.scale=0.1; // Ayuda al tamaño de la imagen, puede cambiarlo.

	
	
 
}

function velocidades(){
	// VELOCIDAD DE CADA CARRO
	veloxiA-= Math.random()* 5 /2;
	veloxiB-= Math.random()* 5 /2;
	veloxiC-= Math.random()* 5 /2;
	veloxiD-= Math.random()* 5 /2;

}

function validarMeta(){

	
		if (carroJhon.overlapPoint(ancho / 2, 375 / 2 - (375 / 2 / 2)))
	      {
	            fill(0, 0, 0);
	            textSize(32);
	            textAlign(CENTER);
	            text("Gano Jhon", ancho / 2, alto / 2);
	            noLoop();
	      }else
	      {
	      	if (carroMark.overlapPoint(ancho / 2, 375 / 2 - (375 / 2 / 2)))
		      {
		            fill(0, 0, 0);
		            textSize(32);
		            textAlign(CENTER);
		            text("Gano Mark", ancho / 2, alto / 2);
		            noLoop();
		      }
		      else{
		      		if (carroLechero.overlapPoint(ancho / 2, 375 / 2 - (375 / 2 / 2)))
				      {
				            fill(0, 0, 0);
				            textSize(32);
				            textAlign(CENTER);
				            text("Gano Juan", ancho / 2, alto / 2);
				            noLoop();
				      }
				      else
				      {
				      	if (carroBocho.overlapPoint(ancho / 2, 375 / 2 - (375 / 2 / 2)))
						      {
						            fill(0, 0, 0);
						            textSize(32);
						            textAlign(CENTER);
						            text("Gano Maria", ancho / 2, alto / 2);
						            noLoop();
						      }
				      }
		      }
	      }
	
}

function draw()
{	
	background('rgba(142,206,123,0.50)') //Color de fondo.
    noStroke()// Quita el borde.

  	fill('rgba(0,0,0,0.80)')
		ellipse(ancho/2,alto/2,600,590); // CREACIÓN DE LA PISTA DE CARRERAS. [NEGRO]
	fill('')
 	
 	fill('rgba(64,102,234,0.80)')
		ellipse(ancho/2,alto/2,375,375); // CREACIÓN DE LA PISTA DE CARRERAS.[AZUL]
	fill('')

	fill('white')
	rect(800/2,10,7,104); //Meta de inicio.
	fill('')

	// Carro de Jhon.
	radiante= Math.PI/ veloxiA * contadorA;
	carroJhon.position.x= anchoA/2 + (480 /2 ) * cos(radiante); // Es para sacar la mitad del circulo [NEGRO].
	carroJhon.position.y= alto /2 + (400 /2 ) * sin(radiante);
	contadorA++;

	// Carro Mark
	radiante= Math.PI/ veloxiB * contadorB;
	carroMark.position.x= anchoA/2 + ( 480 /2 ) * cos(radiante); // Es para sacar la mitad del circulo [NEGRO].
	carroMark.position.y= alto /2 +  ( 440 /2 ) * sin(radiante);
	contadorB++;
	
	// Carro Lechero
	radiante= Math.PI/ veloxiC * contadorC;
	carroLechero.position.x= anchoA/2 + (480  /2) * cos(radiante); // Es para sacar la mitad del circulo [NEGRO].
	carroLechero.position.y= alto /2 + (440 / 2) * sin(radiante);
	contadorC++;

	// Carro Bocho
	radiante= Math.PI/ veloxiD * contadorD;
	carroBocho.position.x= anchoA/2 + (480/2) * cos(radiante); // Es para sacar la mitad del circulo [NEGRO].
	carroBocho.position.y= alto /2 + (440/2) * sin(radiante);
	contadorD++;

	velocidades();
	validarMeta();


  drawSprites();
}

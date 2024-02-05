//Posição e tamanho da bolinha
let xBolinha = 300;
let ybolinha = 200;
let diametro = 25;
let raio = 12.5;

//Velocidade da bolinha
let VelocidadeDaBolinhaX = 6;
let velocidadeDaBolinhaY = 6;

//Raquete
let xRaquete = 5;
let yRaquete = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;

// Raquete Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let colidiu=false;
//Placar
let meusPontos=0;
let pontosOponente=0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  colideBorda();
  mostraRaquete();
  movimentaRaquete();
  colideRaquete();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  colisaoRaqueteOponente();
  incluirPlacar();
  marcaPontos();
}
//
function mostraBolinha() {
  circle(xBolinha, ybolinha, diametro);
}
function movimentoBolinha() {
  xBolinha += VelocidadeDaBolinhaX;
  ybolinha += velocidadeDaBolinhaY;
}
function colideBorda() {
  if (xBolinha > width || xBolinha < 0) {
    VelocidadeDaBolinhaX *= -1;
  }
  if (ybolinha > height || ybolinha < 0) {
    velocidadeDaBolinhaY *= -1;
  }
}
function mostraRaquete() {
  rect(xRaquete, yRaquete, RaqueteComprimento, RaqueteAltura);
}
function mostraRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente, RaqueteComprimento, RaqueteAltura);
}
function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function colideRaquete() {
  if (
    xBolinha - raio < xRaquete + RaqueteComprimento &&
    ybolinha - raio < yRaquete + RaqueteAltura &&
    ybolinha + raio > yRaquete
  ) {
    VelocidadeDaBolinhaX *= -1;
  }
}
function movimentaRaqueteOponente() {
  velocidadeYOponente= ybolinha - yRaqueteOponente - RaqueteAltura/2;
  yRaqueteOponente += velocidadeYOponente;
}
function colisaoRaqueteOponente(){
 colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, RaqueteComprimento, RaqueteAltura, xBolinha, ybolinha, raio);
if(colidiu){
  VelocidadeDaBolinhaX *= -1;
}
}

function incluirPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosOponente, 321, 26);
  }
function marcaPontos(){
  if(xBolinha>xRaqueteOponente){
    meusPontos+=1;
    xBolinha=50;
    yBolinha=200;
  }
  if(xBolinha< raio){
    pontosOponente+=1;
    xBolinha=550;
    yBolinha=200;
  }
}









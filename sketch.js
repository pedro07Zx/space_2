var lifes = 5;
var PLAY = 1;
var END = 0;
var gameState = PLAY;



function preload(){
ground = loadImage("darkbackground.jpg");
inimigo1 = loadImage("inimigo1.png");
inimigo2 = loadImage("inimigo2.png");
inimigo3 = loadImage("inimigo3.png");
inimigo4 = loadImage("inimigo4.png");
mothership = loadImage("mothership.png");
Pc1 = loadImage("PC1.png");
laser = loadImage("laser.png");
laser2 = loadImage("laser-2.png");
}


function setup() {
 createCanvas(1000,650);
 dark = createSprite(500,325);
dark.addImage(ground);
dark.velocityY = +2;
dark.scale = 0.9;
 nave = createSprite(500,500);
 nave.addImage(Pc1);
 nave.scale = 0.1;
edges = createEdgeSprites();
inimigoA = new Group();
inimigoB = new Group();
inimigoC = new Group();
inimigoD = new Group();
Pc = new Group();
inimigoE = new Group();
inimigoF = new Group();
inimigoG = new Group();
inimigoH = new Group();
}

function draw() {
 drawSprites();
 nave.collide(edges);
 
text(mouseX+","+mouseY,mouseX,mouseY);
    
    



if(gameState === PLAY){
    fill("darkblue");
 textSize(20);
 text("Life:"+lifes,862,598);
 
    if(keyIsDown(RIGHT_ARROW)){
        nave.x = nave.x +10
        }
        if(keyIsDown(LEFT_ARROW)){
            nave.x = nave.x -10
            }
        if(keyIsDown(DOWN_ARROW)){
            nave.y = nave.y +10
            }
            if(keyIsDown(UP_ARROW)){
                nave.y = nave.y -10
                }
            if(keyWentDown("space")){
                shoot = createSprite(300,100);
                shoot.addImage(laser);
                shoot.velocityY = -15;
                shoot.x = nave.x;
                shoot.y = nave.y;
                shoot.scale = 0.3;
                shoot.lifetime = 650/15;
                Pc.add(shoot);
            }
            if(dark.y>650){
                dark.y = height/2
            }
    if(inimigoA.isTouching(nave)){
        lifes = lifes-1; 
        nave.x = 200;
        nave.y = 300;
        //nave.destroy();
    }
    if(inimigoB.isTouching(nave)){
        lifes = lifes-1;
        nave.x = 300;
        nave.y = 400;
        //nave.destroy();
    }
    if(inimigoC.isTouching(nave)){
        lifes = lifes-1;
        nave.x = 400;
        nave.y = 500;
       //nave.destroy();
    }
    if(inimigoD.isTouching(nave)){
        lifes = lifes-1;
        nave.x = 500;
        nave.y = 600;
        //nave.destroy();
    }
    if(Pc.isTouching(inimigoE)){
        inimigoE.destroyEach();
    }
    if(Pc.isTouching(inimigoF)){
        inimigoF.destroyEach();
    }
    if(Pc.isTouching(inimigoG)){
        inimigoG.destroyEach();
    }
    if(Pc.isTouching(inimigoH)){
        inimigoH.destroyEach();
    }
    fill("blue");    
    textSize(20);    
    text("score:",863,625);    

    vangers();
if(lifes<=0){
    gameState = END

}
}
else if(gameState === END){
background ("black");    
fill("red");
textSize(50);   
text("GAME OVER",390,300);    

}
}

function vangers(){
            if(frameCount%60===0){
                
                var positions = [80,160,240,320,400,480,560,640,720,800,880,960];
                var position = random(positions)
                inimigo_1 = createSprite(position,200);
                inimigo_1.addImage(inimigo1);
               // inimigo_1.x = Math.round(random(100,1000))
                inimigo_1.scale = 0.2;
                shot_1 = createSprite(inimigo_1.x,inimigo_1.y,10,20);
                shot_1.velocityY = 20;    
                shot_1.addImage(laser2);
                shot_1.scale = 0.3;
                inimigoA.add(shot_1);
                inimigoE.add(inimigo_1);
                }
            if(frameCount%90===0){
                var positions = [90,180,270,360,450,540,630,720,810,900,990];
                var position = random(positions)
                inimigo_2 = createSprite(position,250);                                            
                inimigo_2.addImage(inimigo2);
                //inimigo_2.x = Math.round(random(100,1000))
                inimigo_2.scale = 0.3;
                shot_2 = createSprite(inimigo_2.x,inimigo_2.y,10,20);
                shot_2.velocityY = 10;
                shot_2.addImage(laser2);
                shot_2.scale = 0.3;
                inimigoB.add(shot_2);
                inimigoF.add(inimigo_2);

                }
            if(frameCount%120===0){
                var positions = [100,200,300,400,500,600,700,800,900,1000];
                var position = random(positions);
                inimigo_3 = createSprite(position,30);
                inimigo_3.addImage(inimigo3);
                //inimigo_3.x = Math.round(random(100,1000))
                inimigo_3.scale = 0.2;
                shot_3 = createSprite(inimigo_3.x,inimigo_3.y,10,20);
                shot_3.velocityY = 25;
                shot_3.addImage(laser2);
                shot_3.scale = 0.3;
                inimigoC.add(shot_3);
                inimigoG.add(inimigo_3);

                }
                if(frameCount%150===0){
                    var positions = [70,140,210,280,350,420,490,560,630,700,770,840,910];
                    var position = random(positions)
                    inimigo_4 = createSprite(position,100);
                    inimigo_4.addImage(inimigo4);
                    //inimigo_4.x = Math.round(random(100,1000)) 
                    inimigo_4.scale = 0.1;
                    shot_4 = createSprite(inimigo_4.x,inimigo_4.y,10,20);
                    shot_4.velocityY = 30;   
                    shot_4.addImage(laser2);
                    shot_4.scale = 0.3;
                    inimigoD.add(shot_4);
                    inimigoH.add(inimigo_4)    
                    
                    }
    }


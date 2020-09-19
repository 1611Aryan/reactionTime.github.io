// JavaScript Document
var start=new Date().getTime(); 
function randomColor()
{   
    var values="1234567890ABCDEF";
    var val=values.split("");
    var color="#";
    for(var i=0;i<6;i++)
    {
        color+=val[Math.floor(Math.random()*16)];
    }
    if(color=='#000000')
    {
        return '#ffffff';
    }
    else
    {
        return color;
    }
}
function shapeAppear()
{   
    var loc=new Array("images/2x/Asset 2@2x.png","images/2x/Asset 3@2x.png","images/2x/Asset 4@2x.png","images/2x/Asset 5@2x.png","images/2x/Asset 6@2x.png","images/2x/Asset 7@2x.png","images/2x/Asset 8@2x.png","images/2x/Asset 9@2x.png","images/2x/Asset 10@2x.png","images/2x/Asset 11@2x.png","images/2x/Asset 12@2x.png");
    var img=Math.floor(Math.random()*loc.length);
    
    var top=Math.random()*500;
    var left=Math.random()*1200;
    var width=(Math.random()*200)+50
    var borderWidth=(Math.random()*10);
    var height=(Math.random()*150)+10;
    //RandomShapeChooser
    var shape=Math.floor(Math.random()*6+1);
    if(shape==1)//Square
     {
         //Dimensions
         document.getElementById("shape1").style.width=width+"px";
         document.getElementById("shape1").style.height=width+"px"
         //color
         document.getElementById("shape1").style.backgroundColor=randomColor();
         //position
         document.getElementById("shape1").style.top=top+"px";
         document.getElementById("shape1").style.left=left+"px";
         //Border
         document.getElementById("shape1").style.borderColor=randomColor();
         document.getElementById("shape1").style.borderWidth=borderWidth+"px";
         //revelation
         document.getElementById("shape1").style.display="block"  
         
     }
    if (shape==2)//Rectangle
     {
         //Dimensions
         document.getElementById("shape2").style.width=width+"px";
         document.getElementById("shape2").style.height=height+"px"
         //color
         document.getElementById("shape2").style.backgroundColor=randomColor();
         //position
         document.getElementById("shape2").style.top=top+"px";
         document.getElementById("shape2").style.left=left+"px";
         //Border
         document.getElementById("shape2").style.borderColor=randomColor();
         document.getElementById("shape2").style.borderWidth=borderWidth+"px";
         //revelation
         document.getElementById("shape2").style.display="block"
         
     }
    if (shape==3)//Circle
     {
         //Dimensions
         document.getElementById("shape3").style.width=width+20+"px";
         document.getElementById("shape3").style.height=width+20+"px"
         //color
         document.getElementById("shape3").style.backgroundColor=randomColor();
         //position
         document.getElementById("shape3").style.top=top+"px";
         document.getElementById("shape3").style.left=left+"px";
         //Border
         document.getElementById("shape3").style.borderColor=randomColor();
         document.getElementById("shape3").style.borderWidth=borderWidth+"px";
         //revelation
         document.getElementById("shape3").style.display="block"
         
     }
    if (shape==4)//Diamond
     {
         //Dimensions
         document.getElementById("shape4").style.width=width+20+"px";
         document.getElementById("shape4").style.height=width+20+"px"
         //color
         document.getElementById("shape4").style.backgroundColor=randomColor();
         //position
         document.getElementById("shape4").style.top=top+"px";
         document.getElementById("shape4").style.left=left+"px";
         //Border
         document.getElementById("shape4").style.borderColor=randomColor();
         document.getElementById("shape4").style.borderWidth=borderWidth+"px";
         //revelation
         document.getElementById("shape4").style.display="block" 
         
     }
    if (shape==5)//Heart
        {
            //position
            document.getElementById("shape5").style.top=top+"px";
            document.getElementById("shape5").style.left=left+"px";
            //Border
            document.getElementById("shape5").style.borderColor=randomColor();
            document.getElementById("shape5").style.borderWidth=borderWidth+"px";
            //revelation
            document.getElementById("shape5").style.display="block" 
            
        }
    if(shape==6)//Avengers
        {
            document.getElementById("size").src=loc[img];
            //dimensions
            document.getElementById("size").style.width=width-10+50+"px";
            document.getElementById("size").style.height=width+50+"px";
            document.getElementById("shape6").style.width=width-10+50+"px";
            document.getElementById("shape6").style.height=width+50+"px";
            //position
            document.getElementById("shape6").style.top=top+"px";
            document.getElementById("shape6").style.left=left+"px";
            //revelation
            document.getElementById("shape6").style.display="block"
            
        }
    start=new Date().getTime();
}
function delay()
{
    setTimeout(shapeAppear,Math.random()*2000);
}
delay();
document.getElementById("shape1").onclick=function()
{
    document.getElementById("shape1").style.display="none";
    var end=new Date().getTime();
    var time =(end-start)/1000;
    document.getElementById("timeTaken").innerHTML="Your Reaction Time:"+" "+time+"s";
    delay();
}
document.getElementById("shape2").onclick=function()
{
    document.getElementById("shape2").style.display="none";
    var end=new Date().getTime();
    var time =(end-start)/1000;
    document.getElementById("timeTaken").innerHTML="Your Reaction Time:"+" "+time+"s";
    delay();
}
document.getElementById("shape3").onclick=function()
{
    document.getElementById("shape3").style.display="none";
    var end=new Date().getTime();
    var time =(end-start)/1000;
    document.getElementById("timeTaken").innerHTML="Your Reaction Time:"+" "+time+"s";
    delay();
}
document.getElementById("shape4").onclick=function()
{
    document.getElementById("shape4").style.display="none";
    var end=new Date().getTime();
    var time =(end-start)/1000;
    document.getElementById("timeTaken").innerHTML="Your Reaction Time:"+" "+time+"s";
    delay();
}
document.getElementById("shape5").onclick=function()
{
    document.getElementById("shape5").style.display="none";
    var end=new Date().getTime();
    var time =(end-start)/1000;
    document.getElementById("timeTaken").innerHTML="Your Reaction Time:"+" "+time+"s";
    delay();
}
document.getElementById("shape6").onclick=function()
{
    document.getElementById("shape6").style.display="none";
    var end=new Date().getTime();
    var time =(end-start)/1000;
    document.getElementById("timeTaken").innerHTML="Your Reaction Time:"+" "+time+"s";
    delay();
}


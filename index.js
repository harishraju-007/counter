var count = 0;

function decrease(){
    count = count-1;
    document.getElementById('counting').innerHTML=count;
}

function increase(){
    count=count+1;
    document.getElementById('counting').innerHTML=count;
}

function reseting(){
    count=0;
    document.getElementById('counting').innerHTML=count;
}
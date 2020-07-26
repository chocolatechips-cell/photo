function upDate(blue){
    document.getElementById('me').style.backgroundImage="url("+blue.src +")";
    document.getElementById('me').innerHTML=blue.alt;
}

function unDo(){
    document.getElementById('me').style.backgroundImage="url(' ')";
    document.getElementById('me').innerHTML="hover over the below images to display here.";
}
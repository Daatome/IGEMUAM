let auxTopic;
let auxColapsa;
function cambia1(info,num){
    let aux = document.getElementById('colapsa'+num);
    //guardamos valores previos
    auxTopic= info.innerHTML;
    auxColapsa=aux.innerHTML;
    if(num==1){
        info.innerHTML= "116.9 Million MXN";
      

    }
    else if(num==2){
        info.innerHTML= "46%";
    }
    else if(num==3){
        info.innerHTML= "140%";
    }
    else if(num==4){
        info.innerHTML= "5 Years and 7 months";
    }
}
function cambia2(info,num){
    let aux = document.getElementById('colapsa'+num);
    info.innerHTML=auxTopic;
    //aux.innerHTML=auxColapsa;
    
}
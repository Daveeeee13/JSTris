scelta="";

function carica(){

    x = document.createElement("TABLE");
    x.setAttribute("id", "tabella");
    document.body.appendChild(x);
    
    
    x.style.border = "1px solid";
    x.style.borderCollapse="collapse";

    for(i=0; i<3; i++){


        var y = document.createElement("TR");
        y.setAttribute("id", "myTr"+i);
        
        document.getElementById("tabella").appendChild(y);
        var t=document.createTextNode("");
        y.appendChild(t);
        
        
        for(j=0; j<3; j++){
            
            var z = document.createElement("TD");
            var t = document.createTextNode("");   //testo sulle caselle
            z.align="center";
           
            //assegno id + onclick
            z.setAttribute("id", "myTd"+j);
            z.setAttribute("onclick", "clickcella(this);")

            z.style.border="2px solid";
            z.style.height="18em";
            z.style.width="18em";
            z.style.backgroundColor='white';
            
                        
            z.appendChild(t);
            document.getElementById("myTr"+i).appendChild(z);
            
        }
        
    }

}

function assegnaGiocatoreX(){
        scelta="X";
        console.log(scelta);
}
function assegnaGiocatoreO(){
        scelta="O";
        console.log(scelta);
}

function clickcella(td){
    if(td.innerHTML=="")
        td.innerHTML=scelta;    //controllo per assicurarsi che la cella non sia già popolata
}

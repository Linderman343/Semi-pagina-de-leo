//crear maz0
document.getElementById("ganar").style.display = 'none'
document.getElementById("f5").style.display = 'none'
document.getElementById("comenzar").style.display = 'none'
document.getElementById("confir").style.display = 'none'
let i = 1
let mazo = []
for (let i = 1; i <= 12; i++) {
    mazo.push('basto ' + i)
    mazo.push('copas ' + i)
    mazo.push('oro ' + i)
    mazo.push('espada ' + i)
}
//mezclar el mazo
function shufflearray(mezcla) {
    mezcla.sort(()=> Math.random() - 0.5);
}

shufflearray(mazo);

    let mazo1 = []
for (let o = 24; o <= 47; o++) {

    mazo1.push(mazo[o])
    
}
console.log('mazo del primer jugador es: ' + mazo1 + '</br>');


let mazo2 = [];
for (let y = 0; y <= 23 ; y++) {
    mazo2.push(mazo[y])
}
console.log('mazo del segundo participante: ' + mazo2);

// jugar cartas

function iniciar(b) {
    if (b = "start") {
        document.getElementById("start").style.display = 'none'
        document.getElementById("comenzar").style.display = ''
        document.getElementById("juga").innerHTML = "Turno de jugador " + turno;
        for (let  z  = 0; z  <= mazo1.length - 1; z ++) {
            let h = z + 1
            document.getElementById("lista").innerHTML += '<li id="liste" >'+ h + ") "+ mazo1[z] +'</li>'
        
            }
    }
}


  

let mazo_mesa = []
let turno = 1
let tipo_palo = ""
function palos(y) {
    document.getElementById("mostar").style.display = 'none'   
    document.getElementById("sub").innerHTML ="Se esta jugando con: " + y
    tipo_palo = y;
    

}

// tirar cartas a la mesa: 

function siguiente(v) {
    if (v == "si") {
        document.getElementById("confir").style.display = 'none'
        document.getElementById("comenzar").style.display = ''
    }
}
function mov(x){
if (tipo_palo != "") {
if(turno == 1)
{  

   if (mazo2.length == 0) {
    document.getElementById("ganar").style.display = ''
                document.getElementById("ganar").innerHTML = "Jugador 2  a ganado!" 
                document.getElementById("f5").style.display = ''
                document.getElementById("comenzar").style.display = 'none'
            }    

    if (mazo1.length >= 1) {
                    
            let validar = parseInt(x)
            if (validar <= mazo1.length && validar >= 1) {
            let posicion_1 = parseInt(x) - 1;
            let n_x = parseInt(x) - 1
            mazo_mesa.unshift(mazo1[posicion_1])
            mazo1.splice(n_x, 1)
            turno = 2  
            document.getElementById("juga").innerHTML = "Turno de jugador " + turno;
            document.getElementById("lista").innerHTML = ""
            for ( let  j  = 0; j  <= mazo2.length -1  ; j ++) {
                let h = j + 1
            document.getElementById("lista").innerHTML += '<li id="liste">'+ h + "_ "+ mazo2[j] +'</li>'
            document.getElementById("confir").style.display = ''
            document.getElementById("comenzar").style.display = 'none'
            v = ""

            
            }
             console.log(mazo_mesa[0])
            }
            
            else{
                alert("por favor seleccione una carta disponible!")
            }}

        
        
           
       

}    
// turno mazo 2
else
{
    
   if (mazo1.length == 0) {
        document.getElementById("ganar").style.display = ''
                 document.getElementById("ganar").innerHTML = "Jugador 1  a ganado!"
                 document.getElementById("f5").style.display = ''
                 document.getElementById("comenzar").style.display = 'none'
             }
   

    if (mazo2.length >= 1) {
        let validar = parseInt(x)
        if (validar <= mazo2.length && validar >= 1) {
            let posicion_1 = parseInt(x) - 1;
            let n_x = parseInt(x) - 1
            mazo_mesa.unshift(mazo2[posicion_1])
            mazo2.splice(n_x, 1)  
            turno = 1
            document.getElementById("juga").innerHTML = "Turno de jugador 1"
            document.getElementById("lista").innerHTML = ""
            for (let  z  = 0; z  <= mazo1.length - 1; z ++) {
                let h = z + 1
                document.getElementById("lista").innerHTML += '<li id="liste">'+ h + ") "+  mazo1[z] +'</li>'
                document.getElementById("confir").style.display = ''
                document.getElementById("comenzar").style.display = 'none'
                v = ""
                }
                console.log(mazo_mesa[0])
            

        }
            else{
                alert("por favor seleccione una carta disponible!")
            }
             
        }
    
}
}
else{
    alert("seleccione el palo a jugar")
}

}


// desconfiar
function desconfio(d) {
if (mazo_mesa.length > 0) {
    document.getElementById("sub").innerHTML ="";
    if(turno == 1){
        if (mazo_mesa[0].includes(tipo_palo)) {
            for (let index = 0; index <= mazo_mesa.length -1; index++) {
                mazo1.push(mazo_mesa[index])
                
            }
            document.getElementById("lista").innerHTML = ""
            for (let  z  = 0; z  <= mazo1.length - 1; z ++) {
                let h = z + 1
                document.getElementById("lista").innerHTML += '<li id="liste">'+ h + ") "+ mazo1[z] +'</li>'
            
                }
            mazo_mesa = []
            console.log(mazo1 + "nashe: " + mazo_mesa)
            tipo_palo = ""
            document.getElementById("mostar").style.display = '' 
        }
        else{
            for (let index = 0; index <= mazo_mesa.length -1; index++) {
                mazo2.push(mazo_mesa[index])
                
            }
            
            mazo_mesa = []
            console.log(mazo1 + "nashe: " + mazo_mesa)
            tipo_palo = ""
            document.getElementById("mostar").style.display = '' 
        }
    }
    else{
        if (mazo_mesa[0].includes(tipo_palo)) {
            for (let index = 0; index <= mazo_mesa.length - 1; index++) {
                mazo2.push(mazo_mesa[index])
                
            }
            document.getElementById("lista").innerHTML = ""
            for (let  z  = 0; z  <= mazo2.length - 1; z ++) {
                let h = z + 1
                document.getElementById("lista").innerHTML += '<li id="liste">'
                + h + ") "+ mazo2[z] +'</li>'
                }
                mazo_mesa = []
                tipo_palo = ""
                document.getElementById("mostar").style.display = '' 
            }
        else{
            for (let index = 0; index <= mazo_mesa.length -1; index++) {
                mazo1.push(mazo_mesa[index])
                
            }
                mazo_mesa = []
                tipo_palo = ""
                document.getElementById("mostar").style.display = '' 
            }
        
    }   

}
else{
    alert("no hay nada para poder desconfiar pedazo de imbecil >:(")
} 
}


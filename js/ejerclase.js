var array;

function arraymulti(){
     array = [
        {username: "Steivin", cod:"191992", doc:"123456", tipouser:"estudiante"},
        {username: "Wilmer", cod:"191991", doc:"123457", tipouser:"profe"},
        {username: "Laura", cod:"191995", doc:"123455", tipouser:"estudiante"}
    ]
    let fecha = new Date();
    var minutos = fecha.getHours();
    console.log(horas);
}

function compara(){
    var nombre = $("nombre").val();
    for(let i=0;i<array.length;i++){
        if(nombre==array[i].username){
            console.log("El nombre SI existe");
        }
        else{
            console.log("El nombre NO existe");
        }
    }
}
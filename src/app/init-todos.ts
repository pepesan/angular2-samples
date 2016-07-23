export class Init{
  load(){
    if (localStorage.getItem("todos")===null
        || localStorage.getItem("todos") == undefined){
      console.log("No hay todos almacenados, cargando algunos de ellos");
      var todos=[
        {
          text:"hacer la compra"
        },
        {
          text: "revisar el coche"
        }
      ];
      localStorage.setItem("todos",JSON.stringify(todos));
      return;
    }else{
      console.log("Hay todos");
    }
  }
}

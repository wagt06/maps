 let getKilometros = function(origen,destino)
 {
    let lat1 = origen.lat;
    let lon1 = origen.lng
    let lat2 = destino.lat
    let lon2 = destino.lng 


 rad = function(x) {return x*Math.PI/180;}
 var R = 6378.137; //Radio de la tierra en km
 var dLat = rad( lat2 - lat1 );
 var dLong = rad( lon2 - lon1 );
var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
 var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
 var d = R * c;
return d.toFixed(3); //Retorna tres decimales
 }

 let GetPrecioByKm =function(distancia){

   if(distancia == null){
      alert("No tenemos envios a esa ubicacion");
      "No tenemos envios a esa ubicacion";
   }

   let kms = distancia/1000;
   let precio;
   let tb = [     	   
      {kmInicial:0,kmFinal:4.99,precio: 80},
      {kmInicial:5 ,kmFinal:6.99,precio:90},
      {kmInicial:7 ,kmFinal:7.99,	precio:100},
      {kmInicial:8 ,kmFinal:11.99,precio:110},
      {kmInicial:12,kmFinal:12.99,precio:120},
      {kmInicial:13,kmFinal:13.99,precio:130},
      {kmInicial:14,kmFinal:14.99,precio:150},
      {kmInicial:15,kmFinal:17.99,precio:170},
      {kmInicial:18,kmFinal:25,precio:200}
   ]

   tb.forEach((x)=>{
      if(kms>= x.kmInicial && kms < x.kmFinal){
         precio = x.precio;
      }
   })
   return precio;
 }
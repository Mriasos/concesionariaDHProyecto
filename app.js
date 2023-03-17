const autos = require('./autos');

const concesionaria = {
   autos: autos,
 
   buscarAuto: function(patente){
      const autoEncontrado = this.autos.find(
         (auto) => auto.patente == patente
      )
   return autoEncontrado || null;
},
   venderAuto: function(patente){
      const autoEncontrado = this.buscarAuto(patente);
      if(autoEncontrado){
         autoEncontrado.vendido = true;
        
      }},
       autosParaLaVenta: function () {
       const autoFiltrado = this.autos.filter(
      (auto) => !auto.vendido 
       )
        return autoFiltrado;
},
      autosNuevos: function (){
      const listAutosVenta = this.autosParaLaVenta();
      const autosOkm = listAutosVenta.filter(
         (auto) => auto.km <100
      )
      return autosOkm;
      },

      listaDeVentas: function (){
      const autosVendidos = this.autos.filter (function(auto){return auto.vendido === true})
        
      const listaVentas = autosVendidos.map (function(auto){return auto.precio})
      return listaVentas
     
         
  },
  totalDeVentas: function (){
  const ventas = this.listaDeVentas();
  const total = ventas.reduce(function(total,importe){
     return total + importe} ,0)
     return total
  },
   puedeComprar: function(auto, persona){
   const cuotas = auto.precio/auto.cuotas
    if (auto.precio < persona.capacidadDePagoTotal && cuotas < persona.capacidadDePagoEnCuotas){
       return true
    }
    else {
       return false
    };
  
    autosQuePuedeComprar: function (persona){
         const disponibles = this.autosParaLaVenta();
      return disponibles.filter(auto =>this.puedeComprar(persona))

   }
   }
}

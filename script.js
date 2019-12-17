function calcular() {
   
   var CRO = document.calcform.CRO.value;
   var Pontos = document.calcform.Pontos.value;
   var C1 = document.calcform.C1.value;
   var C2 = document.calcform.C2.value;
   var C3 = document.calcform.C3.value;
   var C4 = document.calcform.C4.value;
   var C5 = document.calcform.C5.value;
   var C6 = document.calcform.C6.value;
   var N1 = document.calcform.N1.value;
   var N2 = document.calcform.N2.value;
   var N3 = document.calcform.N3.value;
   var N4 = document.calcform.N4.value;
   var N5 = document.calcform.N5.value;
   var N6 = document.calcform.N6.value;
   var Prd = 1*C1*N1 + 1*C2*N2 + 1*C3*N3 + 1*C4*N4 + 1*C5*N5 + 1*C6*N6;
   var CR = (1*Pontos + 1*Prd)/(1*CRO + 1*C1 + 1*C2 + 1*C3 + 1*C4 + 1*C5 + 1*C6)
   var crparcial = (Prd)/(1*C1 + 1*C2 + 1*C3 + 1*C4 + 1*C5 + 1*C6)


   document.calcform.Prd.value = crparcial;
   document.calcform.psat.value = CR;
}

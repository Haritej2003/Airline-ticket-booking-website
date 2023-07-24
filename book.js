function confirmation(flightNumber){
     window.location.href=`seatselection.html?flight=${flightNumber}`;
}
function getDetails(){
     const query=window.location.search
     const urlPar=new URLSearchParams(query)
     flightFrom=urlPar.get('fromA');
     flightTo=urlPar.get('toA');
     const from=document.getElementById("fromAddress")
     const to=document.getElementById("toAddress")
     const from1=document.getElementsByClassName("from")
     const to1=document.getElementByClassName("to")
     from.value=flightFrom;
     to.value=flightTo
     from1.value=flightFrom;
     to1.value=flightTo

}
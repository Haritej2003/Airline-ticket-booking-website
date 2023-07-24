const flightDetails ={
    1:{
        number: "ABC123",
        departure:"Delhi",
        destination:"Pune",
        PriceS:2000,
        PriceT:1500,


    },
    2:{
        number: "XYZ123",
        departure:"Hyderabad",
        destination:"Banglore",
        PriceS:2000,
        PriceT:1500,
    },
    3:{
        number: "ABC789",
        departure:"Banglore",
        destination:"Mumbai",
        PriceS:2000,
        PriceT:1500,
    },
    4:{
        number: "XYZ789",
        departure:"Delhi",
        destination:"Hyderabad",
        PriceS:2000,
        PriceT:1500,
    },
};
let flightNum,Tprice,seats=[],NumberofPass;
function onLoading()
{   
    
    
    const query=window.location.search
    const urlPar=new URLSearchParams(query)
    flightNum=urlPar.get('flight');
    NumberofPass = document.getElementById("numberOfMembers");
    const seatstring=urlPar.get('seats');
    seats+=seatstring;
    const flightNumber = document.getElementById("flightNumber");
      const from = document.getElementById("from");
      const to = document.getElementById("to");
      const price = document.getElementById("text");
    
    flightNumber.value=flightDetails[flightNum].number;
      from.value=flightDetails[flightNum].departure;
      to.value=flightDetails[flightNum].destination;
      price.value=seats;
      NumberofPass.value=seats.split(",").length;
      checking();
      
}
function checking()
{
    const radioB=document.querySelector('input[name="t"]:checked');
    Tprice = document.getElementById("text1");
    
    if (radioB) {
        const selectedValue = radioB.value;
             if(selectedValue=="faculty")
             {
                Tprice.value=(1500*NumberofPass.value)-500;
                checking()
             }
             else if(selectedValue=='student')
             {
                Tprice.value=(1500*NumberofPass.value);
                checking()
             }

      } else {
        console.log("Please select Faculty or Student");
      }
}

function checkAndConfirm()
{
    
    const cardHolderName = document.getElementById("cardHolderName").value;
    const email = document.getElementById("email").value;
    if(cardHolderName=="")
    {
        alert("please enter your name")
        return
    }
    
    alert("Booking Confirmed. FLight Details are sent to "+email)
     
     
    
    
}



      


  

      

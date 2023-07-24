function nextPage()
{     
    var dropdown = document.getElementById("fromAirportSelect");
    var dropdown2=document.getElementById("toAirportSelect");
     let from,to;
    // Get the selected option's value
    var selectedValue = dropdown.value;
    var selectedValue2 = dropdown2.value;
    if(selectedValue.includes("Gcet"))
    {
         from="GCET";
    }
    else if(selectedValue.includes("Indira"))
    {
         from="DEL";
    }
    else if(selectedValue.includes("Goa"))
    {
         from="GOI";
    }
    else if(selectedValue.includes("Bengaluru"))
    {
         from="BLR";
    }
    else if(selectedValue.includes("Bangkok"))
    {
         from="BKK";
    }
    else
    {
        alert("Invalid selection")
        return;
    }
   if(selectedValue2.includes("Indira"))
    {
         from="DEL";
    }
    else if(selectedValue2.includes("Goa"))
    {
         from="GOI";
    }
    else if(selectedValue2.includes("Bengaluru"))
    {
         from="BLR";
    }
    else if(selectedValue2.includes("Bangkok"))
    {
         from="BKK";
    }
    else
    {
        alert("Invalid selection")
        return;
    }
  document.getElementById("myButton").addEventListener("click", getSelectedValue);


    window.location.href=`book.html?fromA=${from}&toA=${to}`;
}
function convert()
{
    const value = parseFloat(document.getElementById("takeValue").value);
    const ctof = document.getElementById("Celsius to Fahrenheit");
    const ftoc = document.getElementById("Fahrenheit to Celsius");
    const ktoc = document.getElementById("Kelvin to Celsius");
    const ctok = document.getElementById("Celsius to Kelvin");
    const result = document.getElementById("result");
    let temp;
    if(ctof.checked)
    {
        temp = value*(1.8)+32;
        result.textContent=`${temp.toFixed(2)} °F`;
    }
    else if(ftoc.checked)
    {
        temp = (value-32)*(5/9);
        result.textContent=`${temp.toFixed(2)} °C`;
    }
    else if(ktoc.checked)
    {
        temp = value - 273.15;
        result.textContent=`${temp.toFixed(2)} °C`;
    }
    else if(ctok.checked)
    {
        temp = value + 273.15;
        result.textContent=`${temp.toFixed(2)} K`;
    }
    else{
        result.textContent=`please select any option.`
    }
}

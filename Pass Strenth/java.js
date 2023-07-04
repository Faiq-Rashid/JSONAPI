function passwordstrength()
{
    var passwordstrenght = document.getElementById("pass").value;

    if(passwordstrenght.length >10)
    {
        document.getElementById("strength").innerHTML="Strong";
        document.getElementById("strength").style.color="Red";
    }
    else if(passwordstrenght.length >=6)
    {
        document.getElementById("strength").innerHTML="Medium";
        document.getElementById("strength").style.color="Blue";

        
    }
    else if(passwordstrenght.length >0)
    {
        document.getElementById("strength").innerHTML="Low";
        document.getElementById("strength").style.color="Gree    n";

        
    }
    else 
    {
        document.getElementById("strength").innerHTML="";
        
    }

}
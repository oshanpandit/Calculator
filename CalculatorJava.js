
var buttonsD=document.getElementsByClassName('individual-buttons');

var displayD=document.getElementById('display');

var op1=null;

var op2=null;

var operator=null;

var signCount=0;

var decimal=false;

function calculation(){

 

    var value=this.getAttribute('data-value');

    if(value=='ac'){

       
        displayD.innerText="";
       
        op1=null;

        op2=null;
       
        operator=null;

        decimal=false;

    }




    else if(value=='+'){

        op1=parseFloat(displayD.textContent);

        operator='+';

        displayD.innerText="";

    }

    else if(value=='-'){

        op1=parseFloat(displayD.textContent);

        operator='-';

        displayD.innerText="";

    }

    else if(value=='*'){

        op1=parseFloat(displayD.textContent);

        operator='*';

        displayD.innerText="";

    }

    else if(value=='/'){

        op1=parseFloat(displayD.textContent);

        operator='/';

        decimal=true;

        displayD.innerText="";

    }

    else if(value=='%'){

        op1=parseFloat(displayD.textContent);

        var abc=op1/100;

        displayD.innerText=abc;

        if(displayD.textContent=="NaN"){

            displayD.innerText="Plz Enter Appropriate Arguments";
        }

        

        return;

    }

    else if(value=='+/-'){

        signCount++;

        if(signCount%2!=0){

            displayD.innerText='-';
        }

        else{

            displayD.innerText="";
        }


    }

    else if(value=='='){

        var ans;

        if(value=="."){

            decimal=true;
        }

        op2=parseFloat(displayD.innerText);

        ans=eval(op1+operator+op2);

        
if(decimal==true){
         var fans=ans.toFixed(1);

         displayD.innerText=fans;
}

else{

    displayD.innerText=ans;
}

         if(displayD.textContent=="NaN"){

            displayD.innerText="Plz Enter Appropriate Arguments";
         }

         if(displayD.textContent=="Infinity"){

            displayD.innerText="Invalid Operation!";
         }

         
}


else{

    if(value=="."){

        decimal=true;
    }

        if(displayD.textContent=="Plz Enter Appropriate Arguments" || displayD.textContent=="Infinity"){

            displayD.innerText="";
        }
       
        displayD.innerText+=value;
        
    }


    
}

for(var i=0;i<buttonsD.length;i++){

    buttonsD[i].addEventListener('click',calculation);

}
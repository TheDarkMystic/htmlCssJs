console.log("javascript is being read")


var number=10;
var string="Hellow";
var isRad=true;

/*
now lets say we want to display the value of string var
inside our div box on index.html page 

we can do it as follows

*/

document.getElementById('box').innerHTML=string;


/*console.log is used for debugging*/

/*JS has conditional statements also*/

if(number>10){
    console.log("Yeah ");
}
else{
    console.log("nope");
}

/*scipts can be run directly from console also, i.e., above 
conditioonal snippet can be exexuted directly on consol*/


/*loops*/

var grocery=['eggs','milk','rice']

for(i=0;i<grocery.length;i++)
    console.log(grocery[i])


/*functions*/
function listGroceries(){
    console.log("Inside the function listGroceries")
    for(i=0;i<grocery.length;i++)
    console.log(grocery[i])

}

listGroceries();



/*Event listner

Let's say we want to get notified everytime user clicks on the
div box1, we can do it as follows
*/

document.getElementById('box1').addEventListener('click', function(){
    alert("I got clicked!")
}

)
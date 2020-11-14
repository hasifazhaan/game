var sum;
var stsum;
var text= document.getElementById("e");

window.onload = function(){
    sum="";
    text.value=""
    text.addEventListener("keydown",(e)=>{
        if(e.keyCode===13){
            ans_sum()
        }
        else if(e.key >=0 && e.key<=9){
            sum+=e.key
        }
    })
}
function num(a)
{   a=a.toString();
    console.log("a"+a)
    sum=sum+a
    console.log("sum"+sum)
    stsum=sum
    text.value=stsum;
}
function ans_sum(){
    try{
       var ans = eval(text.value)
       text.value=""
       text.value=ans
       sum = text.value
       console.log(ans)
       document.querySelector("#display").innerHTML="";

    }
    catch (error)
        {
            document.querySelector("#display").innerHTML="Error";
    
        }
}
del =()=> {
    text.value=text.value.slice(0, -1)
    sum=text.value
}


function cl(){
    text.value="";
    sum=""
}function sqr(){
    try{
    text.value = (text.value*text.value)
    }
    catch(error)
    {
        document.querySelector("#display").innerHTML="Error";
    }
}
function sqrt(){
    try{
    text.value=Math.sqrt(text.value)
    }
    catch(error)
    {
        document.querySelector("#display").innerHTML="Error";
    }
}



var sum=0;
var stsum;
function num(a)
{
sum=sum.toString()
sum=sum+a
stsum=sum
document.querySelector('#display').innerHTML=stsum;
if(a=='='){
	evve(stsum)

stsum=sum=0
}

}

function evalua()
{
	var ans=document.querySelector("#e").value;
	ans=eval(ans)
	document.querySelector("#display").innerHTML=ans;
}

function evve(last)
{
	var ans=last.slice(0,last.lastIndexOf( ))
	try{
		ans=eval(ans)
	}
	catch (error)
	{	console.log("0")
		document.querySelector("#display").innerHTML=1;

	}
	
	document.querySelector("#display").innerHTML=ans;
}

var div=document.createElement("div");
document.body.appendChild(div);

var input=document.createElement("input");
input.setAttribute("id","inputid");
input.style.border="dotted";
input.style.borderWidth="3px";
input.style.borderColor="red";
document.body.style.textAlign="center";
document.body.style.marginTop="20%";
div.appendChild(input);

var x = document.createElement("div");
div.appendChild(x);

var button=document.createElement("button");
button.innerHTML="RUN";
button.style.marginTop="20px";
x.appendChild(button);

var tag=document.createElement("h1");
tag.setAttribute("id","tag");
div.appendChild(tag);

button.onclick=function()
{
	document.getElementById("tag").innerHTML="kavzz";
	document.getElementById("tag").style.color=String(document.getElementById("inputid").value);
}
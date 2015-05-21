var inputItem = document.getElementById("type-message");
var section = document.getElementById("the-list");
var button = document.getElementById("submit");
var listArray = [];

//inputItem.addEventListener("keyup", render);
button.addEventListener("click", render);

function render(event){
	console.log(event);
	//if(event.keyCode === 13){
		section.innerHTML = "";
		listArray.push(inputItem.value);
		inputItem.value = "";
		section.innerHTML += "<div>"+listArray.join("</div><div>")+"</div>";
	//}
}
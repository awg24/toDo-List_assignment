var form = document.getElementById("form-id");
var input = document.getElementById("type-message");
var section = document.getElementById("the-list");
var buttonDelete = document.getElementById("delete");
var listArray = [];

form.style.marginBottom = "10px";

form.addEventListener("submit", render);
input.addEventListener("focus", render);
window.addEventListener("unload", save);
buttonDelete.addEventListener("click",deleteAll);


function render(event){
	event.preventDefault();
	console.log(event);
	section.innerHTML = "";
	listArray.push(input.value);
	input.value = "";
	section.innerHTML += "<div>"+listArray.join("</div><div>")+"</div>";
	input.focus();
	return false;
}

function save(){
	localStorage.setItem("toDo",JSON.stringify(listArray));
}

function deleteAll(){
	var confirmDelete = confirm("Are you sure you want to delete the entire list?");
	if(confirmDelete){
		localStorage.removeItem("toDo");
		listArray = [];
		section.innerHTML = "";
	}
}


if(localStorage.getItem("toDo") !== ""){
	var restoredSession = JSON.parse(localStorage.getItem("toDo"));
	listArray = restoredSession;
	section.innerHTML += "<div>"+restoredSession.join("</div><div>")+"</div>";
}

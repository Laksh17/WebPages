function thanks(){
	var str = document.getElementById("email").value;
	if (str === "" || str == null || str.includes("@") == false){
		alert("Please enter a valid email id!");
	}
	else{
		alert("Thanks for contacting us");
	}
}

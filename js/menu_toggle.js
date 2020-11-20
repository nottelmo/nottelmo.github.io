let menu_toggle = document.getElementById("menu_toggle");
let nav = document.getElementsByTagName("nav")[0];

if(window.innerWidth < 768){
	nav.classList.add("hide");
	menu_toggle.classList.remove("hide");
	menu_toggle.addEventListener('click', function(){
		nav.classList.toggle("hide");
	});
}else{
}

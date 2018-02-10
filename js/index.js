function openNav(){
  var open = document.getElementById('open');
  open.style.display = 'none';
  var sidebar = document.getElementById('sidebar');
  sidebar.style.display = 'block';
 // sidebar.style.width = '200px';
  
}

var openButton = document.getElementById('open');
openButton.addEventListener('click', openNav);

var closeButton = document.getElementById('close');
closeButton.addEventListener('click', closeNav);
var dogs = document.getElementsByClassName('dog');
for (i = 0; i < dogs.length; i++) { 
dogs[i].addEventListener('click', closeNav);
}

function closeNav(){
    var open = document.getElementById('open');
  open.style.display = 'block'
  var sidebar = document.getElementById('sidebar');
  sidebar.style.display = 'none';
  // sidebar.style.width = '0px';
}
	var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

		var i = 1;

		window.setInterval(function(){
			document.body.style.backgroundColor = colors[i];
			i++;
			if (i === colors.length){
				i=0;
			}
		}, 5000);
	var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

		var i = 1;

		window.setInterval(function(){
			document.h1.style.color = colors[i];
			i++;
			if (i === colors.length){
				i=0;
			}
		}, 5000);
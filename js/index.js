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
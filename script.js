const scientist = document.getElementById('scientist');
const gas = document.getElementById('gas');

window.addEventListener('scroll', function(){

  scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);

  if (scrollValue > 0.62){
    scientist.style.opacity = '1';
    scientist.style.transform = 'none';
  };

  if (scrollValue > 0.58){
    gas.style.opacity = '1';
    gas.style.transform = 'none';
  };
});

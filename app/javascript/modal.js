function use_strict(){
  const opens = document.querySelectorAll(".list-show-link");
  const closes = document.querySelectorAll('.close');
  const modals = document.querySelectorAll('.modal');
  const masks = document.querySelectorAll('.mask');
  console.log(masks)
  console.log(modals)
  let i = 0
opens.forEach( function(value){
  var modal = modals[i]
    var mask = masks[i]
    var close = closes[i]
    console.log(modal)
    i = i + 1;
  value.addEventListener('click', function () {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
    close.addEventListener('click', function () {
      modal.classList.add('hidden');
      mask.classList.add('hidden');
    });
    mask.addEventListener('click', function () {
      modal.classList.add('hidden');
      mask.classList.add('hidden');
    });
  })
});
  
  
}
window.addEventListener("load", use_strict);
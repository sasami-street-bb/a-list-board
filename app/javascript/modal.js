// function use_strict(){
//   const opens = document.querySelectorAll(".list-link");
//   const closes = document.querySelectorAll('.close');
//   const modals = document.querySelectorAll('.modal');
//   const masks = document.querySelectorAll('.mask');
//   console.log(masks)
//   console.log(modals)

// opens.forEach( function(value){
//   var modal = modals[i]
//     var mask = masks[i]
//     var close = closes[i]
//     console.log(modal)
//     i = i + 1;
//   value.addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     mask.classList.remove('hidden');
//     close.addEventListener('click', function () {
//       modal.classList.add('hidden');
//       mask.classList.add('hidden');
//     });
//     mask.addEventListener('click', function () {
//       modal.classList.add('hidden');
//       mask.classList.add('hidden');
//     });
//   })
// });
  
  
// }
// window.addEventListener("load", use_strict);




// $(window).on('load', function(){
//   let i = 0
//   $(".list-link").each(function(value){
//     var modal = $(".modal")[i];
//     var mask = $(".mask")[i];
//     var close = $(".close")[i];
//     // console.log(modal);
//     i = i + 1;
//     $(".list-link").on('click', function(){
//       $(".modal").removeClass('hidden');
//       $(".mask").removeClass('hidden');
//       $(".close").on('click', function(){
//         $(".modal").addClass('hidden');
//         $(".mask").addClass('hidden');
//       });
//       $(".mask").on('click', function(){
//         $(".modal").addClass('hidden');
//         $(".mask").addClass('hidden');
//       });
//     });
//   });
// });






// $(function () {
//   var i = 0;
//   $(".list-link").each(function(value){
//     var modal = $('#modal')[i];
//     var mask = $('#mask')[i];
//     var close = $('#close')[i];
//     i = i + 1;
//   });
//     $(value).on('click', function(){
//         $('#modal').fadeIn();
//     });
//     $('#close, #mask').on('click', function(){
//       $('#modal').fadeOut();
//     });
  
// });


// $(function(){
//   // $(".list-link").each(function(){
//     $(".list-link").on('click', function(){
//       // let num = $(this).data('num');
//       // var modal = document.getElementById(num);
//       $('#modal').fadeIn();
//       // return false;
//     });
//   // });
//   $('#close, #mask').on('click', function(){
//     $('#modal').fadeOut();
//     // return false;
//   });
// });

// $(function(){
$(document).on("click", ".list-link", function(e){
  e.preventDefault();
  $(this).next().delay(500).fadeIn();
});
$(document).on("click",".close, .mask", function(e){
  e.preventDefault;
  $(".modal").fadeOut();
});
// });

// $('.close, #mask').on("click", function(){
//   $('#modal').fadeOut();
// });
// });
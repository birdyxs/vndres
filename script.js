$(document).ready(function(){
      $('.dots').click(function(){
         $('body').toggleClass('move');
         $('.daynight span').toggleClass('close');
      });
   });
   
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();

          var $container = $('.content');
   $container.find('.notecount').each(function(){
       var n = $(this).html().split(' ')[0].replace(/,/g, '');
       if (n > 999) {
           n = Math.floor(n / 100) / 10;
           $(this).text(n + 'k');
       }
   });




function gatherData(images, arr) {
  for (let i = 0; i < images.length; i++) {
    let currentData = {
      "width": images[i].getAttribute('data-width'),
      "height": images[i].getAttribute('data-height'),
      "low_res": images[i].getAttribute('data-lowres'),
      "high_res": images[i].getAttribute('data-highres')
    };
    arr.push(currentData);
  }
}
function getIndex(elem) {
  let i = 0;
  while( (elem = elem.previousElementSibling) != null ) i++;
  return i;
}
function lightbox(elem) {
  let currentPhotoset = elem.parentNode;
  let photosetPhotos = currentPhotoset.getElementsByTagName('div');
  let data = [];
  gatherData(photosetPhotos, data);
  Tumblr.Lightbox.init(data, getIndex(elem) + 1);
}

function closeNav() {
    document.getElementById("mercMenu").style.width = "0";
    document.getElementById("mercMenu").style.right = "-60px";
}
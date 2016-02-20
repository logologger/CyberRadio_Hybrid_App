var url;
$(document).on('pageshow','#music',function()
              {
   var url_search=location.search;
     url=url_search.substring(5);
       
});
var a;
function playSound() {
   a = new Audio(url);
   if(a && a.paused)
    a.play();
}
function pauseAudio()
{
  if(a && !a.paused)
  a.pause();
  
}
function volumeIncrease()
{
  if(a)
  a.volume+=0.1;
}

function volumedecrease()
{
  if(a)
  a.volume-=0.1;
}
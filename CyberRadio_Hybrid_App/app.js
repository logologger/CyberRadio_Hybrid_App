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
//-----------------------------------------------------accordion--------------------------------------------------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) 
{
  acc[i].addEventListener("click", function () 
  {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) 
    {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
//-----------------------------------------------------range--------------------------------------------------------
var sliderStyle = document.getElementById("style");
var sliderIllustration = document.getElementById("illustration");
var sliderMep = document.getElementById("mep");
var sliderEmotion = document.getElementById("emotion");
var outputNote1 = document.getElementById("note1");
var outputNote2 = document.getElementById("note2");
var outputNote3 = document.getElementById("note3");
var outputNote4 = document.getElementById("note4");

sliderStyle.oninput = function () 
{
  outputNote1.innerHTML = this.value;
}
sliderIllustration.oninput = function () 
{
  outputNote2.innerHTML = this.value;
}
sliderMep.oninput = function () 
{
  outputNote3.innerHTML = this.value;
}
sliderEmotion.oninput = function () 
{
  outputNote4.innerHTML = this.value;
}

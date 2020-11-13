//typing text animation 
window.onload = function(){
   $(document).ready(function(){
    var string = "I'm A DeVeloPer";
    var i=0;
    if(i<string.length)
    {
      setInterval(function(){
        document.querySelector(".header-tag").innerHTML += string.charAt(i);
        i++;
      },100);
    }
  });
 }
 //collapse for mobile 
  $(document).ready(function(){
    $(".nav-icon").click(function(){
      $("#mobile-menu").collapse("toggle");
      $("#mobile-menu").addClass("animated zoomIn")
    });
    
  });
// $(document).ready(function(){
//   var string = $(".brand-name").text();
//   var z = string.charAt(0);
//   // $(".brand-name")[0].css("border", "solid 1px white");
//   $(".brand-name").addClass("border border-light p-2");
  
// });

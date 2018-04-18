// function showDistance () {
//     var speed = 10;
//     var time = 5;
//     alert(speed * time);
// }
// showDistance();



// function showDistance (speed, time) {
//     alert(speed * time);
// }
// showDistance(35,3);

// creating a function to return data
// function getDistance(speed, time) {
//     return speed * time;
// }

// var distance = getDistance(73,19);

// alert(distance);

// functiion showPage () {
//     if (document.getElementById('one')) {
//         if (document.getElementById('one').style.display == 'none') {
            
//         }
//     }
// }


// $('#one').on('click',function(){
//     $('#one').css('display','none');
// });

// $(".main-content").click(function(e) {
//     e.preventDefault();
//     $('.content-container div').fadeOut('slow');
//     $('#' + $(this).data('rel')).fadeIn('slow');
// });
$(document).ready(function() {

    $("ul#tabs li").click(function(e) {
      var tabIndex = $(this).index();
      if (!$(this).hasClass("active")) {
        var nthChild = tabIndex + 1;
        $("ul#tabs li.active").removeClass("active");
        $(this).addClass("active");
        $("#content-tab div.active").removeClass("active");
        $("#content-tab div:nth-child(" + nthChild + ")").addClass("active");
      } else {
        $(this).removeClass("active");
        $("#content-tab div.active").removeClass("active");
      }
    });
  });
  
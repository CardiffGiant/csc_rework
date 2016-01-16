
window.onload = function () { setTimeout( function () { $('#loading').addClass('stopIt'); 
      $('#wrapper').css('visibility', 'visible'); 
      $('#wrapper').fadeTo(2000, 1.0);}, 3000)};
      //console.log(window.$('img').length);
      //var percentCounter = 0;
      //$.each(arrayOfImageUrls, function(index, value) {
         //$('<img></img>').attr('src', value)
            //.load(function() {
              // percentCounter=(index /arrayOfImageUrls.length) * 100;
               //$('#progressChecker').text(percentCounter + '%');
               //});
         //});

      

   

var $lastClicked = 0;
var $info;
var movies = [ ".\\assets\\movies\\Bakers_Square.mp4",".\\assets\\movies\\Carte_Noire.mp4"];
$('.posterBox').on("click",function() {
   if ($(this).width() === 263) {
      if ($lastClicked !== 0) {
         if (!($lastClicked.width() === 263)) {
            $info = $lastClicked.find('.scoreInfo');
            $info.css("opacity","0.0");
            $lastClicked.animate({width: "263px"},1000,'swing');
         }
      }
      $(this).animate({width: "526px"},1000,'swing');
      $info = $(this).find('.scoreInfo');
      console.log ($info[0]);
      setTimeout(function() { $info.fadeTo(600, 0.99)}, 1000);
      $lastClicked = $(this);
   } else {
      $info = $(this).find('.scoreInfo');
      $info.css("opacity","0.0");
      $(this).animate({width: "263px"},1000,'swing');
   }
});
$(document).load( 
$('#frame').sly({
   horizontal: 1,
   			itemNav: 'centered',
   			smart: 1,
   			activateMiddle: 1,
   			activateOn: 'click',
   			mouseDragging: 1,
   			touchDragging: 1,
   			releaseSwing: 1,
   			startAt: 1,
   			scrollBar: $('#scrollbar'),
   			scrollBy: 1,
   			speed: 800,
   			elasticBounds: 1,
   			easing: 'swing',
   			dragHandle: 1,
   			dynamicHandle: 1,
   			clickBar: 1,
})
);
var $win, $height;
var $inView;
$height = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;

function goOne() {
   var $win = $(window).height();
   $('#outerWrapper').animate({top:"0"},1000,function(){});
   $inView = document.getElementById('wrapperMovies');
}
function goTwo() {
   $win = $(window).height();
   $('#outerWrapper').animate({top:-1000},1000,function(){});
   $inView = document.getElementById('wrapperVideos');
}
function goThree() {
   $win = $(window).height();
   $('#outerWrapper').animate({top:-2000},1000,function(){});
   $inView = document.getElementById('wrapperCommercials');
}
$('#movies').click(function() { goOne();});
$('#videos').click(function() { goTwo();});
$('#commercials').click(function() { goThree();});
var videoList = document.getElementById("listBox");
var pics = videoList.getElementsByTagName('img');
for(var q = 0; q< pics.length; q+= 1) {
   pics[q].addEventListener('click', lightItUp);
}

		function lightItUp(e) {
         document.getElementById('commPlayer').src = setMovieSource(e);
         console.log(document.getElementById('source').src);
			drawTheShades();
			$('#listBox').animate({opacity:.4},500);
         var offsetLeft = $(window).width()/2 - $('#lightBox').width()/2;
         $('#lightBox').css({left: offsetLeft});
         var player = document.getElementById("commPlayer");
         $('#lightBox').css('visibility','visible');
			setTimeout( function() {$('#lightBox').fadeTo('slow',1.0,function(){player.play();})},500);
			}
		function closeIt() {
         var player = document.getElementById("commPlayer");
         player.pause();
			$('#lightBox').fadeTo(400,0.0);
         $('#listBox').animate({opacity:1.0},500);
         $('#shade').animate({height:'0px'},700);
         setTimeout( function(){ $('#lightBox').css('visibility','hidden');}, 400);
			}
		var hideIt = function () {
			document.getElementById('lightBox').style.visibility='hidden';
			$('#listBox').animate({opacity:1.0},400);
			}
		function drawTheShades() {
		document.getElementById("shade").style.visibility="visible";
			$('#shade').animate({height:'100%'},700);
      }
      function setMovieSource(event) {
         var source;
         if(event.srcElement === document.getElementById('bakers') || event.target === document.getElementById('bakers')) {
            console.log(movies[0]);
            return movies[0];
         } else if (event.srcElement === document.getElementById('carte')) {
            return movies[1];
         }
      }  
         

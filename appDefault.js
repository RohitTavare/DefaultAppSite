// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDl6nfVlV2KIKe1MrlVFzKvHDhzb5N4VKA",
    authDomain: "analytics-92172.firebaseapp.com",
    databaseURL: "https://analytics-92172.firebaseio.com",
    storageBucket: "analytics-92172.appspot.com",
    messagingSenderId: "576200678383"
  };
  firebase.initializeApp(config);
  var db = firebase.database();


var aspect = 1.7;
var aspect2 = 1.5;
var q = 0;
var qtext = ['"This app has helped me to complete all of my assignment everyday. I owe my success to the efficiency of this app. So awesome!"','"An amazingly well finished app. definitely a timesaver for students all across the nation."','"A new breath for the industry of free education."'];
var authors = ["- a Student","- Wall Street Journal","- New York Times"];
var qsinterval;

$(document).ready(function() {


// Next snippet is part of analytics code.
  $(document).click(function(e) {
    var posx = e.clientX + $(window).scrollLeft();
    var posy = e.clientY + $(window).scrollTop();
    console.log("(" + posx + ", " + posy + ")");
    $('body').append("<div style='width: 10px; height: 10px; border-radius: 10px; position: absolute; top: "+ (posy - 5)  +"px; left: "+ (posx - 5) +"px; background-color: red;'></div>");
    var url = window.location;
    db.ref("/" + url + "/").post({x: posx, y: posy});
  });

  view();
  $("#textblock").width($(".quoteblock").width());
  if($(window).width()/$(window).height() >= aspect) {
    $(".headPic").css("background-size", "100vw auto");
  } else {
    $(".headPic").css("background-size", "auto 100vh");
  }
  if($(window).width()/$(window).height() >= aspect2) {
    $("#botimage").css("background-size", "100vw auto");
    $("#blurbotimage").css("background-size", "100vw auto");
  } else {
    $("#botimage").css("background-size", "auto 100vh");
    $("#blurbotimage").css("background-size", "auto 100vh");
  }
  $(".blurtext").width($(".blurbotimage").width());
  $(".philimg").css("height", $(".philtext").height().toString()-20);
  if($(window).width() >= 992) {
    $("#blurbotimage").css("background-position", "-66vw 0px");
    $("#blurbotimage h1").css("font-size", "70px");
    $(".features h1").css("font-size", "90px");
    $("#fpic").css("width", "50vw");
    $("#f1text h1").css("font-size", "100px");
    $("#f1text h2").css("font-size", "50px");
    $("#fpic").css("width", "auto");
    $("#fpic").css("height", "100vh");
    $("#f1text").css("height", $("#fpic").height().toString());
    $(".screenshot").show();
    $(".philimg").show();
    $(".philimg").css("background-size", "900px auto");
    $(".text").css("width", "450px");
    $("#phone").show();
    $("#philpic").show();
    $(".screenshot").css("width", "40vw");
    $("#botimage").show();
  } else {
    $("#botimage").hide();
    $("#fpic").css("width", "778px");
    $("#blurbotimage").css("background-position", "0px 0px");
    if($(window).width() >= 700) {
      $(".features h1").css("font-size", "90px");
      $("#blurbotimage h1").css("font-size", "100px");
      $("#f1text h1").css("font-size", "100px");
      $("#f1text h2").css("font-size", "50px");
      $("#f1text").css("height", "auto");
      $(".screenshot").show();
      $(".philimg").show();
      $(".philimg").css("background-size", "100vw auto");
      $(".text").css("width", "600px");
      $(".screenshot").css("width", "60vw");
    } else {
      $(".features h1").css("font-size", "70px");
      $("#blurbotimage h1").css("font-size", "50px");
      $("#f1text h1").css("font-size", "70px");
      $("#f1text h2").css("font-size", "30px");
      $("#f1text").css("height", "auto");
      $(".philimg").hide();
      $(".text").css("width", "350px");
      $(".screenshot").hide();
    }
    $("#phone").hide();
    $("#philpic").hide();
  }
  $("#learn").mouseenter(function() {
		$("#learn").stop().animate({ color: 'black', backgroundColor: "white"}, 250);
	});
	$("#learn").mouseleave(function() {
		$("#learn").stop().animate({ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0)'}, 250);
	});
  $("#download").mouseenter(function() {
		$("#download").stop().animate({ color: 'white', backgroundColor: "rgba(200, 50, 70, 1)"}, 250);
	});
	$("#download").mouseleave(function() {
		$("#download").stop().animate({ color: 'white', backgroundColor: 'rgba(255, 0, 0, .5)'}, 250);
	});
  $(".ios").mouseenter(function() {
		$(".ios").stop().animate({ color: 'black', backgroundColor: "white"}, 250);
	});
	$(".ios").mouseleave(function() {
		$(".ios").stop().animate({ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0)'}, 250);
	});
  $(".andr").mouseenter(function() {
		$(".andr").stop().animate({ color: 'black', backgroundColor: "white"}, 250);
	});
	$(".andr").mouseleave(function() {
		$(".andr").stop().animate({ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0)'}, 250);
	});

  qsinterval = setInterval(switchQuote, 5000);

  $("#b1").click(function() {
    clearInterval(qsinterval);
    button1();
    qsinterval = setInterval(switchQuote, 5000);
  });
  $("#b2").click(function() {
    clearInterval(qsinterval);
    button2();
    qsinterval = setInterval(switchQuote, 5000);
  });
  $("#b3").click(function() {
    clearInterval(qsinterval);
    button3();
    qsinterval = setInterval(switchQuote, 5000);
  });
  $(window).resize(function() {
    scale();
  });
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

function button1() {
  $("#b1").attr("src","bead.png");
  $("#b2").attr("src","bead2.png");
  $("#b3").attr("src","bead2.png");
  $(".quoteblock").stop().animate({opacity: 0.0}, 700, function() {
    $(".quotetext").text(qtext[0]);
    $(".author").text(authors[0]);
  });
  $(".quoteblock").animate({opacity: 1}, 400);
  q = 0;
}

function button2() {
  $("#b2").attr("src","bead.png");
  $("#b1").attr("src","bead2.png");
  $("#b3").attr("src","bead2.png");
  $(".quoteblock").stop().animate({opacity: 0.0}, 700, function() {
    $(".quotetext").text(qtext[1]);
    $(".author").text(authors[1]);
  });
  $(".quoteblock").animate({opacity: 1}, 400);
  q = 1;
}

function button3() {
  $("#b3").attr("src","bead.png");
  $("#b1").attr("src","bead2.png");
  $("#b2").attr("src","bead2.png");
  $(".quoteblock").stop().animate({opacity: 0.0}, 700, function() {
    $(".quotetext").text(qtext[2]);
    $(".author").text(authors[2]);
  });
  $(".quoteblock").animate({opacity: 1}, 400);
  q = 2;
}

function switchQuote() {
  q++;
  if(q % 3 == 0) {
    button1();
  } else if(q % 3 == 1) {
    button2();
  } else {
    button3();
  }
}

function scale() {
  $("#textblock").width($(".quoteblock").width());
  $(".blurtext").width($(".blurbotimage").width());
  $(".philimg").css("height", $(".philtext").height().toString());
  if($(window).width()/$(window).height() >= aspect) {
    $(".headPic").css("background-size", "100vw auto");
  } else {
    $(".headPic").css("background-size", "auto 100vh");
  }
  if($(window).width()/$(window).height() >= aspect2) {
    $("#botimage").css("background-size", "100vw auto");
    $("#blurbotimage").css("background-size", "100vw auto");
  } else {
    $("#botimage").css("background-size", "auto 100vh");
    $("#blurbotimage").css("background-size", "auto 100vh");
  }
  if($(window).width() >= 992) {
    $(".features h1").css("font-size", "90px");
    $("#blurbotimage").css("background-position", "-66vw 0px");
    $("#blurbotimage h1").css("font-size", "70px");
    $("#fpic").css("width", "50vw");
    $("#f1text h1").css("font-size", "100px");
    $("#f1text h2").css("font-size", "50px");
    $("#fpic").css("width", "auto");
    $("#fpic").css("height", "100vh");
    $("#f1text").css("height", $("#fpic").height().toString());
    $(".screenshot").show();
    $(".philimg").show();
    $(".philimg").css("background-size", "900px auto");
    $(".text").css("width", "450px");
    $("#phone").show();
    $("#philpic").show();
    $(".screenshot").css("width", "40vw");
    $("#botimage").show();
  } else {
    if($(window).width() >= 700) {
      $(".features h1").css("font-size", "90px");
      $("#blurbotimage h1").css("font-size", "100px");
      $("#f1text h1").css("font-size", "100px");
      $("#f1text h2").css("font-size", "50px");
      $("#f1text").css("height", "auto");
      $(".screenshot").show();
      $(".philimg").show();
      $(".philimg").css("background-size", "100vw auto");
      $(".text").css("width", "600px");
      $(".screenshot").css("width", "60vw");
    } else {
      $(".features h1").css("font-size", "70px");
      $("#blurbotimage h1").css("font-size", "50px");
      $("#f1text h1").css("font-size", "70px");
      $("#f1text h2").css("font-size", "30px");
      $("#f1text").css("height", "auto");
      $(".screenshot").hide();
      $(".philimg").hide();
      $(".text").css("width", "350px");
    }
    $("#blurbotimage").css("background-position", "0px 0px");
    $("#botimage").hide();
    $("#fpic").css("width", "778px");
    $("#phone").hide();
    $("#philpic").hide();
  }
}

function view() {
  //debugger;
  var pixels = $(window).height()/705;
  //console.log($(window).width());
  var w = $(window).width()/pixels;
  if(w > $(window).width()) {
    $("head").append('<meta name="viewport" content="width = device-width, initial-scale=1">');
    return true;
  } else {
    //$("head").append('<meta name="viewport" content="width = device-width, initial-scale=1">');
    $("head").append('<meta name="viewport" content="width=' + w + ', initial-scale=1">');
    return false;
  }
}

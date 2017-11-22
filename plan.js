document.getElementById("mynum")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("check").click();
    }
});
document.getElementById('check').onclick = function () {
  var usernum = document.getElementById('mynum').value;
  var out = document.getElementById('out');
  if(usernum !== 'Denise' && usernum !== "Mariam" && usernum !== "armen"
   && usernum !== "Armen" && usernum !== "mariam" && usernum !== "Taron"
   && usernum !== "Tedi" && usernum !== "satenik" && usernum !== "Satenik"
   && usernum !=="taron"  && usernum !== 'Deniza' && usernum !== "denise"
   && usernum !== "deniza" && usernum !== "lily" && usernum !== "Lily"
   && usernum !== "Burcho" && usernum !== "Hasmik" && usernum !== "hasmik"
   && usernum !== "debul" && usernum !== 'Debul'
   && usernum !== "mane" && usernum !== "Mane"
   && usernum !== "ligia" && usernum !== "Ligia"
   && usernum !== "narek" && "Narek"
   && usernum !== "valiko" && usernum !== " "
   && usernum !== "tedi" &&  usernum !== "Tedi"
   && usernum !== "james" && usernum !== "James"
   && usernum !== "vahan" && usernum !== "Vahan"
   && usernum !== "gurgen" && usernum !== "Gurgen"
   && usernum !== "noro dovlatyans" && usernum !== "Noro Dovlatyans"
   && usernum !== "noro Dovlatyans" && usernum !== "Noro dovlatyans"

  ) {
    var anunner = ["Sorry, probably your name is not in our base.", "It seems to be an invalid value.", "Sorry, we could not find your name.", ];
    var random = Math.floor(Math.random() * anunner.length);
    out.innerHTML = (anunner[random])

  }  else if(usernum === "Hasmik" || usernum === 'Debul' || usernum === "hasmik" || usernum === 'debul') {
    var arr = ["Malyshka moya", "Taguhis", "Luv tebya", "SunkMan"];
    var rand = Math.floor(Math.random() * arr.length);
    out.innerHTML = ( arr[rand] );

  } else if (usernum === "lily" || usernum === "Lily") {
    out.innerHTML = "Oh, hello Lily. I was waiting for your name to be checked! Take it easy and have a nice day!)) "
  } else if (usernum === "Taron" || usernum === "taron") {
   alert("Hm, you wrote my name? Interestiing! Okay then, have a nice day and thanks for being here.");
   href.href = "boss.html";
   setTimeout("window.location.reload()",1000)
  } else if (usernum === "Satenik" || usernum === "satenik") {
    out.innerHTML = "High five Jigyar!";
    href.href = "https://www.facebook.com/satenik.barseghyan.33"
   setTimeout("window.location.reload()",1000)
  } else if (usernum === "Tedi") {
    out.innerHTML = "Ma nigga"
  } else if (usernum === "Burcho"){
    alert("Burcho!Burcho!Burcho!");
    href.href = "http://www.burcho.ru/"
    setTimeout("window.location.reload()",1000)
  } else if (usernum === "mariam" || usernum === "Mariam"){
    out.innerHTML = "Lavym, tu huncs jana?"
  } else if (usernum === "armen" || usernum === "Armen") {
    out.innerHTML = "I am in love with programming not with you! "
  } else if (usernum === "mane" || usernum === "Mane"){
    out.innerHTML = "Taganrog rules"
  } else if (usernum === "Ligia" || usernum === "ligia"){
    out.innerHTML = "G-EAZY Foreveeeeerrrrrrrrrrrrr!!!!!!!!!!!!!!!!!"
  } else if (usernum === "narek" || usernum === "Narek"){
    out.innerHTML = "Derena Derena Derena"
  } else if (usernum === "valiko") {
    out.innerHTML = "Idi nahren"
  } else if (usernum === " "){
    out.innerHTML = "Anund gri ara"
  } else if (usernum === "tedi" || usernum === "Tedi"){
    out.innerHTML = "Alright!!! Lets Ride!"
  } else if (usernum === "james" || usernum === "James") {
    alert('Bond. Jamie Bond.')
    href.href = "james.html";
    setTimeout("window.location.reload()",1000)
  }  else if (usernum === "vahan" || usernum === "Vahan"){
    out.innerHTML = "hretorakan paterazm"
  } else if (usernum === "gurgen" || usernum === "Gurgen") {
    out.innerHTML = "Since!"
  } else if (usernum === "noro dovlatyans" || usernum === "Noro Dovlatyans" || usernum === "noro Dovlatyans" || usernum === "Noro dovlatyans"){
    href.href= "dovlatyans.html";
    setTimeout('window.location.reload()',1000)
  }
  else {
    alert("If you wrote your name that means you are reading this now! And if you are reading this i wanna say that i like you!!! And yes, this works only with your name!! ")
    href.href = "sup.html";
    setTimeout("window.location.reload()",1000)
  }

};


$(document).ready(function() {
    $('.oopa').on('click', 'a', function() {
        $('.oopa a').removeClass('active');
        $(this).addClass('active');
    });
});

// delay possible clicks until page is turned
document.getElementById('book').addEventListener('click', function(e) {
  e = this
  e.style.pointerEvents = "none"
  setTimeout(function(){
    e.style.pointerEvents = ""
  }, 1000)
});

let klik = document.querySelector('.click');


// klik.addEventListener('click', function() {
// 	audio.play();
// });

function kon() {
	let audio = document.getElementById('audioPlay');
	audio.play();
}
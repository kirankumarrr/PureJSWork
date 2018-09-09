var SoundObj = {
	playing : function  (e){
		//console.log(e.keyCode);
		var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		var keys = document.querySelector(`.Drumskey[data-key="${e.keyCode}"]`);
		if(!audio) return;
		audio.currentTime = 0;	
		audio.play();
		keys.classList.add("playing");
		//console.log(audio);
	},
	removeTransition : function  (e){
		//console.log(e);
		if(e.propertyName !== 'transform') return;
		this.classList.remove("playing");
	}
}

setTimeout(function(){
	const keys = document.querySelectorAll('.Drumskey');	
	console.log(keys);
	keys.forEach(key => key.addEventListener('transitionend',SoundObj.removeTransition));	
},300);	
	
	
window.addEventListener('keydown',SoundObj.playing);
	
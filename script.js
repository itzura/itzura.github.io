console.log("its working")

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themedots = document.getElementsByClassName('theme-dot')

for(var i=0; themedots.length > i;i++){
	themedots[i].addEventListener('click',function(){
		let mode = this.dataset.mode
		console.log('option clicked', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href='default.css'
	}
	if(mode == 'dark'){
		document.getElementById('theme-style').href='dark.css'
	}
	if(mode == 'peach'){
		document.getElementById('theme-style').href='peach.css'
	}

	localStorage.setItem('theme',mode)
}
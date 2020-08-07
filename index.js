let btnGenerate = document.getElementById('btnGenerate')
let myMap = document.getElementById('myMap')

let randomize = 0

btnGenerate.addEventListener('click', function () {
	myMap.innerHTML = ""
			for (var i = 0; i < 100; i++) {
			randomize =	Math.floor(Math.random() * 8)
			console.log(randomize)
			crMapElement = document.createElement('div')
			crMapElement.classList.add('col-1','mapElement')
			crMapElement.style.background = "url(img/forest"+randomize+".png)"
			crMapElement.style.height = "50px"
			crMapElement.style.width = "50px"
			crMapElement.style.backgroundSize = "cover"
			myMap.appendChild(crMapElement)
		}
	})
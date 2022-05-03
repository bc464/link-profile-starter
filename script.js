// FAQ-SECTION
const questions = document.querySelectorAll(".question-title");

	questions.forEach(function(question){
	
		const plus = question.querySelector(".plus-icon");
		question.addEventListener("click", function(){

		questions.forEach(function(item){
			if(item !== question) {
				item.classList.remove("show-text");
			}
		})
		question.classList.toggle("show-text");
	})
})

// SETUP PAGES

let nextBtn = document.querySelectorAll(".next-btn");
const pageOne = document.querySelector(".page-one");
const pageTwo = document.querySelector(".page-two");
const pageThree = document.querySelector(".page-three");

let count = 1;

nextBtn.forEach(myFunction);

function myFunction(item) {
	item.addEventListener("click", function(e) {
		e.preventDefault();
		count += 1;
		if (count == 2) {
			pageOne.style.display = "none";
			pageTwo.style.display = "flex";
	}
		else if(count == 3) {
			pageTwo.style.display = "none";
			pageThree.style.display = "flex";
	}
})
}

// MODAL

const modal = document.getElementById("myModal");
const createModalBtn = document.querySelector(".btn-create");
const closeModal = document.querySelector(".close-icon-modal");
const createCustomLink = document.getElementById("create-link");
let inputMediaName = document.querySelector(".input-media-name");
let bgColor = document.querySelector(".bgColor")
let iconImg = document.querySelector(".iconLink")

const mediaPlatforms = document.querySelector(".media-platforms")

createModalBtn.onclick = function() {
	modal.style.display = "block";
}

createCustomLink.onclick = function(e) {
	e.preventDefault()
	
	let mediaName = inputMediaName.value;
	let color = bgColor.value;
	let iconLink = iconImg.value;

	const html = `<div class="platform flex" style="background-color:${color};">
              <div class="platform-name flex" >
                <img src="Assets/${iconLink}" alt="" class="platform-icon">
                <p>${mediaName}</p>
              </div>
              <img src="Assets/Close.svg" alt="close-icon" class="close-icon">
            </div>` 
		currPlatform.insertAdjacentHTML("afterbegin", html)
}

	closeModal.onclick = function(e) {
		e.preventDefault();
		modal.style.display = "none";
}

// SWITCHING PLATFORMS

const availablePlatforms = document.querySelectorAll(".available-platforms")
const platform = document.querySelectorAll(".platform")

const addPlatform = document.querySelectorAll(".plus-icon")
const currentPlatform = document.querySelector(".currently-added-platforms")
const currPlatform = document.querySelector(".curr-platform")
const removeCurrentPlatform = document.querySelectorAll(".close-icon")
const newPlatform = document.querySelectorAll('.newPlatform')


addPlatform.forEach(addItem);

removeCurrentPlatform.forEach(removeItem);

function addItem(item) {
	item.addEventListener("click", function(e){
		
		let result = item.parentNode.outerHTML
				
		item.parentNode.remove(result)
		
		currPlatform.insertAdjacentHTML("afterbegin", result)
	})
}
function removeItem(item) {
	item.addEventListener("click", function(e){
		
		let result = item.parentNode.outerHTML
		
		item.parentNode.remove(result)
		
		mediaPlatforms.insertAdjacentHTML("afterbegin", result)
	})
}
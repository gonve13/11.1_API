const API_ENDPOINT = "https://dog.ceo/api/breeds/image/random";
const UI_SUBMIT_BUTTON = document.getElementById("submit-button");
let imgURL = "";

function init(){
insertListOfBreeds();
UI_SUBMIT_BUTTON.addEventListener("click", ()=>{compareAnswer();})
getJSON(API_ENDPOINT);

}

async function getJSON(URL) {
  try {
    const response = await fetch(URL);
    const result = await response.json();
    imgURL = (result.message)
	imgInserter();
	
  } catch (error) {
    console.error("oops! Ocurrió un error en la solicitud fetch:", error);
  }
}


function imgInserter(){
	document.getElementById("img-container").innerHTML = `<img src="${imgURL}">`
}


function insertListOfBreeds(){
	const breeds = [
		"affenpinscher",
        "african",
        "airedale",
        "akita",
        "appenzeller",
        "australian",
        "australian-shepherd",
        "basenji",
        "beagle",
        "bluetick",
        "borzoi",
        "bouvier",
        "boxer",
        "brabancon",
        "briard",
        "buhund",
        "buhund-norwegian",
        "bulldog",
        "bulldog-boston",
        "bulldog-english",
        "bulldog-french",
        "bullterrier",
		"bullterrier-staffordshire",
        "cattledog",
		"cattledog-australian",
        "cavapoo",
        "chihuahua",
        "chow",
        "clumber",
        "cockapoo",
        "collie",
        "collie-border",
        "coonhound",
        "corgi",
        "corgi-cardigan",
        "cotondetulear",
        "dachshund",
        "dalmatian",
        "dane",
        "dane-great",
        "deerhound",
        "deerhound-scottish",
        "dhole",
        "dingo",
        "doberman",
        "elkhound",
		"elkhound-norwegian",
        "entlebucher",
        "eskimo",
        "finnish",
		"finnish-lapphund",
        "frise",
        "frise-bichon",
        "germanshepherd",
        "greyhound",
        "greyhound-italian",
        "groenendael",
        "havanese",
        "hound",
        "hound-afghan",
        "hound-basset",
        "hound-blood",
        "hound-english",
        "hound-ibizan",
        "hound-plott",
        "hound-walker",
        "husky",
        "keeshond",
        "kelpie",
        "komondor",
        "kuvasz",
        "labradoodle",
        "labrador",
        "leonberg",
        "lhasa",
        "malamute",
        "malinois",
        "maltese",
        "mastiff",
        "mastif-bull",
        "mastif-english",
        "mastif-tibetan",
        "mexicanhairless",
        "mix",
        "mountain",
        "mountain-bernese",
        "mountain-swiss",
        "newfoundland",
        "otterhound",
        "ovcharka",
        "ovcharka-caucasian",
        "papillon",
        "pekinese",
        "pembroke",
        "pinscher",
        "pinscher-miniature",
        "pitbull",
        "pointer",
        "pointer-german",
        "pointer-germanlonghair",
        "pomeranian",
        "poodle",
        "poodle-medium",
        "poodle-miniature",
        "poodle-standard",
        "poodle-toy",
        "pug",
        "puggle",
        "pyrenees",
        "redbone",
        "retriever",
        "chesapeake",
        "curly",
        "flatcoated",
        "golden",
        "ridgeback",
        "ridgeback-rhodesian",
        "rottweiler",
        "saluki",
        "samoyed",
        "schipperke",
        "schnauzer",
        "schnauzer-giant",
        "schnauzer-miniature",
        "segugio",
        "segugio-italian",
        "setter",
        "setter-english",
        "setter-gordon",
        "setter-irish",
        "sharpei",
        "sheepdog",
        "sheepdog-english",
        "sheepdog-shetland",
        "shiba",
        "shihtzu",
        "spaniel",
        "spaniel-blenheim",
        "spaniel-brittany",
        "spaniel-cocker",
        "spaniel-irish",
        "spaniel-japanese",
        "spaniel-sussex",
        "spaniel-welsh",
        "spitz",
		"spitz-japanese",
        "springer",
        "springer-english",
        "stbernard",
        "terrier",
        "terrier-american",
        "terrier-australian",
        "terrier-bedlington",
        "terrier-border",
        "terrier-cairn",
        "terrier-dandie",
        "terrier-fox",
        "terrier-irish",
        "terrier-kerryblue",
        "terrier-lakeland",
        "terrier-norfolk",
        "terrier-norwich",
        "terrier-patterdale",
        "terrier-russell",
        "terrier-scottish",
        "terrier-sealyham",
        "terrier-silky",
        "terrier-tibetan",
        "terrier-toy",
        "terrier-welsh",
        "terrier-westhighland",
        "terrier-wheaten",
        "terrier-yorkshire"
		];
	const datalist = document.getElementById("breeds");
	breeds.forEach((breed) => {
		datalist.innerHTML += `<option value="${breed}">`
	});
}


function compareAnswer(){
const userAnswer = document.getElementById("user-input").value;
const correctBreed = imgURL.slice(30).split("/")[0];
const mainContainer = document.getElementById("main-container");
const answerContainer = document.getElementById("answer-container");
	
	
	if (userAnswer == correctBreed){
		answerContainer.innerHTML = "<h1>¡Correcto!<h1>";
		mainContainer.className = "correct";
	} else {
		answerContainer.innerHTML = "<h1>¡Incorrecto!<h1>";
		mainContainer.className = "incorrect";
	}
}

document.addEventListener("DOMContentLoaded", init);
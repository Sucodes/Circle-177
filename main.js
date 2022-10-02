// Selectors

const numInput = document.getElementById("number__input");
const submitBtn = document.querySelector("button");
let result = document.querySelector("p");

// Event listeners

submitBtn.addEventListener("click", validate);

// Telephone prefixes

const mtn = ["0803", "0806", "0703", "0706", "0813", "0816", "0810","0814", "0903", "0906", "0913", "0916", "0704", "07025", "07026"];
const glo = ["0805", "0807", "0705", "0815", "0811", "0905", "0915"];
const airtel = ["0802", "0808", "0708", "0812", "0701", "0901", "0902", "0904", "0907", "0912"];
const etisalat = ["0809", "0818", "0817", "0909", "0908"];
const ntel = "0804";
const smile = "0702";

// function to validate phone number

function validate() {
    event.preventDefault();
    result.innerText = numInput.value;
    
    if (numInput.value[0] != "0") {
        result.innerText = "Phone number must start with 0.";
    }

    else if (numInput.value[2] > "1") {
        result.innerText = "Phone number does not belong to a Nigerian network provider.";
    } 

    else if (numInput.value.length > 11 || numInput.value.length < 11) {
        result.innerText = "Phone number must be exactly 11 characters.";
    }
    
    else if (numInput.value.substring(0, 4) == smile) {
        result.innerText = "This is a Smile number.";
    }

    else if (numInput.value.substring(0, 4) == ntel) {
        result.innerText = "This is an Ntel number.";
    }

    else {
        for(let i = 0; i <= mtn.length; i++) {
            let num = mtn[i];
            if (numInput.value.substring(0, 4) == num) {
                result.innerText = "This is an MTN number";
                document.querySelector(".image").src = "./images/MTN.jpeg";
            }
        }
    
        for(let i = 0; i <= etisalat.length; i++) {
            let num = etisalat[i];
            if (numInput.value.substring(0, 4) == num) {
                result.innerText = "This is an Etisalat number";
                document.querySelector(".image").src = "./images/9mobile.jpg";
            }
        }
    
        for(let i = 0; i <= airtel.length; i++) {
            let num = airtel[i];
            if (numInput.value.substring(0, 4) == num) {
                result.innerText = "This is an Airtel number";
                document.querySelector(".image").src = "./images/airtel.png";
            }
        }
    
        for(let i = 0; i <= glo.length; i++) {
            let num = glo[i];
            if (numInput.value.substring(0, 4) == num) {
                result.innerText = "This is a GLO number";
                document.querySelector(".image").src = "./images/GLO.jpg";
            }
        }
    }
}
// let pounds = document.querySelector(".pounds"),
//   kilograms = document.querySelector(".kilograms"),
//   grams = document.querySelector(".grams"),
//   ounces = document.querySelector(".ounces"),
//   form = document.querySelector("form");

// form.addEventListener("input", convertWeight);

// function convertWeight(e) {
//   if (e.target.classList.contains("pounds")) {
//     let x = e.target.value;
//     kilograms.value = (x / 2.2046).toFixed(2);
//     grams.value = (x / 0.0022046).toFixed(2);
//     ounces.value = (x * 16).toFixed(2);
//   }

//   if (e.target.classList.contains("kilograms")) {
//     let x = e.target.value;
//     pounds.value = x * 2.2046;
//     grams.value = x * 1000;
//     ounces.value = x * 35.274;
//   }

//   if (e.target.classList.contains("grams")) {
//     let x = e.target.value;
//     kilograms.value = x / 1000;
//     pounds.value = x * 0.0022046;
//     ounces.value = x * 0.035274;
//   }

//   if (e.target.classList.contains("ounces")) {
//     let x = e.target.value;
//     kilograms.value = x / 35.274;
//     grams.value = x / 0.035274;
//     pounds.value = x * 0.0625;
//   }
// }

const pounds = document.querySelector(".pounds");
const kilograms = document.querySelector(".kilograms");
const grams = document.querySelector(".grams");
const ounces = document.querySelector(".ounces");
const stones = document.querySelector(".stones");

const form = document.querySelector("form");

form.addEventListener("input", displayCalculateWeight);

function displayCalculateWeight(e) {
    // POUNDS
    if (e.target.classList.contains("pounds")) {
        let x = e.target.value;

        kilograms.value = (x / 2.2046).toFixed(2);
        ounces.value = (x * 16).toFixed(2);
        grams.value = (x / 0.0022046).toFixed(2);
        stones.value = (x * 0.071429).toFixed(2);
    }
    // KILOGRAMS
    if (e.target.classList.contains("kilograms")) {
        let x = e.target.value;

        pounds.value = (x * 2.2046).toFixed(2);
        ounces.value = (x * 35.274).toFixed(2);
        grams.value = (x * 1000).toFixed(2);
        stones.value = (x * 0.1574).toFixed(2);
    }
    // OUNCES
    if (e.target.classList.contains("ounces")) {
        let x = e.target.value;

        pounds.value = (x * 0.0625).toFixed(2);
        kilograms.value = (x / 35.274).toFixed(2);
        grams.value = (x / 0.035274).toFixed(2);
        stones.value = (x * 0.0044643).toFixed(2);
    }
    // GRAMS
    if (e.target.classList.contains("grams")) {
        let x = e.target.value;

        pounds.value = (x * 0.0022046).toFixed(2);
        kilograms.value = (x / 1000).toFixed(2);
        ounces.value = (x * 0.035274).toFixed(2);
        stones.value = (x * 0.00015747).toFixed(2);
    }
    // STONES
    if (e.target.classList.contains("stones")) {
        let x = e.target.value;

        pounds.value = (x * 14).toFixed(2);
        kilograms.value = (x / 0.15747).toFixed(2);
        ounces.value = (x * 224).toFixed(2);
        grams.value = (x / 0.00015747).toFixed(2);
    }
}

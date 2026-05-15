const textArea = document.getElementById("text-area");
const biggerButton = document.getElementById("bigger-button");
const fancyRadio = document.getElementById("fancy");
const boringRadio = document.getElementById("boring");
const mooButton = document.getElementById("moo-button");

biggerButton.addEventListener("click", makeBigger);
fancyRadio.addEventListener("change", applyFancyStyle);
boringRadio.addEventListener("change", applyFancyStyle);
mooButton.addEventListener("click", mooText);

function makeBigger() {
    alert("Hello, world!");
    textArea.style.fontSize = "24pt";
}

function applyFancyStyle() {
    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}


function mooText() {
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {

        let sentence = sentences[i];

        if (sentence !== "") {

            let words = sentence.split(" ");

            let lastWordIndex = words.length - 1;

            words[lastWordIndex] =
                words[lastWordIndex] + "-MOO";

            sentences[i] = words.join(" ");
        }
    }

    text = sentences.join(".");
    textArea.value = text;
}
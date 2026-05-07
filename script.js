async function translateText() {

    const inputText =
    document.getElementById("inputText").value;

    const sourceLang =
    document.getElementById("sourceLang").value;

    const targetLang =
    document.getElementById("targetLang").value;

    if (inputText.trim() === "") {

        alert("Please enter text");

        return;
    }

    try {

        const response = await fetch(

            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${sourceLang}|${targetLang}`

        );

        const data = await response.json();

        console.log(data);

        document.getElementById("outputText").innerText =

        data.responseData.translatedText;

    }

    catch(error) {

        console.log(error);

        document.getElementById("outputText").innerText =

        "Translation Failed";

    }

}

function copyText() {

    const text =
    document.getElementById("outputText").innerText;

    navigator.clipboard.writeText(text);

    alert("Copied Successfully!");

}

function speakText() {

    const text =
    document.getElementById("outputText").innerText;

    const speech =
    new SpeechSynthesisUtterance(text);

    speech.lang =
    document.getElementById("targetLang").value;

    window.speechSynthesis.speak(speech);

}
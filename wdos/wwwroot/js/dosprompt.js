var dosPrompt = document.getElementById("dosPrompt");
dosPrompt.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        dosPrompt.id = "disabled";
        dosPrompt.disabled = true;
        dosPromptInput(dosPrompt.value);
    }
});


function dosPromptInput(cmdInput){
    cmdInput.toLowerCase();
    switch(cmdInput){
        case "help":
            helpMenu();
            break;
        case "win":
            loadWindows();
            break;
        case "Win":
            loadWindows();
            break;
        case "ipconfig":
            ipConfig();
            break;
        case "dir":
            dir();
            break;
        case "stockquotes":
            loadStockPrompt();
            break;
        case "monthly":
            monthlyQuote();
            break;
        default:
            invalidCommand();
            break;








    }
}
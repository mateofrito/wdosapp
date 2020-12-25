
// stockQuotePrompt = document.getElementById('stockPrompt');
// stockQuotePrompt.addEventListener("keyup", function (event){
//     if (event.keyCode === 13){
//         stockQuotePrompt.id = "disabled";
//         stockQuotePrompt.disbaled = true;
//         stockPromptInput(stockQuotePrompt.value);
//     }
// });

function stockPromptInput(stockInput){
    stockInput.toLowerCase();
    switch(stockInput){
        case "monthly":
            
            promptUserForStockSymbol(stockInput);
            break;
        case "intraday":
            promptUserForStockSymbol(stockInput);
            break;
        case "help":
            stockHelpMenu();
            break;
        case "exit":
            newPrompt();
            refreshPrompt();
            break;
        default:
            invalidCommand();
            break;
    }

}
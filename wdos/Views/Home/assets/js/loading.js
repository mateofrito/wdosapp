
// var dosPrompt = document.getElementById("dosPrompt");

// dosPrompt.addEventListener("keyup", function (event) {

//     if (event.keyCode === 13) {
//         dosPrompt.id = "disabled";
//         dosPrompt.disabled = true;
//         if (dosPrompt.value === "help") {

            

//             helpMenu();
//             if (dosPrompt.id === "disabled") {
//                 dosPrompt.autofocus = false;
//             }
//         } else if(dosPrompt.value === "win"){
//             loadWindows();
//         } else {
//             invalidCommand();
//             dosPrompt.disabled = true;
//         }
//     }

// });



var menu = ['win', 'exit', 'about']
function helpMenu() {


    // for (var i = 0; i < menu.length; i++) {
    //     var new_div = document.createElement('div');
    //     new_div.className = "dos-prompt-container";

    //     new_div.innerHTML = "<p class='dos-output'>" + menu[i] + "</p>";

    //     document.body.appendChild(new_div);
    // }

    new_div = document.createElement('div');
    new_div.id = "container"
    new_div.className = "dos-prompt-container";

    new_div.innerHTML = "<p class='dos-output'>This portion of the page is a work in progress!  Just type 'win' at the prompt below.</p>";

    document.body.appendChild(new_div);
    new_div = document.createElement('div');
    new_div.className = "dos-prompt-container";
    new_div.innerHTML = '<p class="loading">C:></p> <input type="text" id="dosPromptNew" class="dos-prompt-input" autofocus/>';
    document.body.appendChild(new_div);

    refreshPrompt();

}
function stockHelpMenu(){
    new_div = document.createElement('div');
    new_div.id = "container"
    new_div.className = "dos-prompt-container";

    new_div.innerHTML = "<p class='dos-output'>This portion of the page is a work in progress!  Just type 'win' at the prompt below.</p>";

    document.body.appendChild(new_div);
    new_div = document.createElement('div');
    new_div.className = "dos-prompt-container";
    new_div.innerHTML = '<p class="loading">C:></p> <input type="text" id="dosPromptNew" class="dos-prompt-input" autofocus/>';
    document.body.appendChild(new_div);

    refreshPrompt();
}
function newPrompt(){
    new_div = document.createElement('div');
    new_div.className = "dos-prompt-container";
    new_div.innerHTML = '<p class="loading">C:></p> <input type="text" id="dosPromptNew" class="dos-prompt-input" autofocus/>';
    document.body.appendChild(new_div);
}

function loadStockPrompt(){
    new_div = document.createElement('div');
    new_div.className = "stock-prompt-container";
    new_div.innerHTML = '<p class="loading">$:></p> <input type="text" id="stockPrompt" class="dos-prompt-input" autofocus/>';
    document.body.appendChild(new_div);
    stockQuotePrompt = document.getElementById('stockPrompt');
stockQuotePrompt.addEventListener("keyup", function (event){
    if (event.keyCode === 13){
        stockQuotePrompt.id = "disabled";
        stockQuotePrompt.disbaled = true;
        stockPromptInput(stockQuotePrompt.value);
    }
});
}

function newStockPrompt(){
    new_div = document.createElement('div');
    new_div.className = "stock-prompt-container";
    new_div.innerHTML = '<p class="loading">$:></p> <input type="text" id="stockPromptNew" class="dos-prompt-input" autofocus/>';
    document.body.appendChild(new_div);
}

function invalidCommand() {
    var new_div = document.createElement('div');
    
    new_div.className = "dos-prompt-container";
    new_div.innerHTML = "<p class='dos-output'>" + "'" + dosPrompt.value + "'" + "is not recognized as an internal or external command, operable program or batch file. Type 'help' for available commands, or 'win' to continue." + "</p> <div class='dos-prompt-container'><p class='loading'>C:></p> <input type='text' id='dosPromptNew' class='dos-prompt-input' autofocus/></div>";
    document.body.appendChild(new_div);
    refreshPrompt();
}


function ipConfig(){
    
    const ipConfigHeader = "<p class='dos-output'>Windows IP Configuration</p></br><p class='dos-output'>Ethernet adapter Wireless Network Connection:</p></br>";
    const dnsSuffix = "<p class='dos-prompt padding'>Connection-specific DNS Suffix . : mattfry.io</p>";
    const ipConfigIPaddress = "<p class='dos-prompt padding'>IP Address . . . . . . . . . . . : 192.168.0.91</p>";
    const subnetmask = "<p class='dos-prompt padding'>Subnet Mask  . . . . . . . . . . : 255.255.255.0</p>";
    const gateway = "<p class='dos-prompt padding'>Default Gateway  . . . . . . . . : 192.168.0.1</p>";
    dosHTMLOutput(ipConfigHeader);
    dosHTMLOutput(dnsSuffix);
    dosHTMLOutput(ipConfigIPaddress);
    dosHTMLOutput(subnetmask);
    dosHTMLOutput(gateway); 
   newPrompt();
  // document.body.appendChild(new_div);
    refreshPrompt();
}

function dir(){
    const dirLine1 = "<p class='dos-output'>Volume in drive C has no label.</p>";
    const dirLine2 = "<p class='dos-output'>Volume Serial Number is 867-5309-J3NN7</p>";
    const dirDirectory = "<p class='dos-output'>Directory of C:\</p>";
    const tbltagopen = "<table class='dir-table'>"
    const dirrow1 = "<tr class='dir-row'><td class='dir-td'>2019-03-01</td><tdclass='dir-td'>04:05 PM</td><td class='dir-td'><DIR></td></tr>"
    const tbltagclose = "</table>"
//perhaps create a method that makes a HTML table?  takes in arrays as inputs.  Perhaps dosHTMLOutput should be reconfigured to accept an array of data
    dosHTMLOutput(dirLine1);
    dosHTMLOutput(dirLine2);
    dosHTMLOutput(dirDirectory);
    dosHTMLOutput(tbltagopen);
    dosHTMLOutput(dirrow1);
    dosHTMLOutput(tbltagclose);
    newPrompt();
    
    refreshPrompt();
}

function dosHTMLOutput(output){
    var new_div = document.createElement('div');
    new_div.className = "dos-prompt-container";
    new_div.innerHTML = output;
    document.body.appendChild(new_div);
}

function dosHTMLTable(){
    var new_table = document.createElement('div');
    new_table.className = "dos-prompt-container";
    new_table.innerHTML = "<table class='dir-table'>"

}

function refreshPrompt() {
    //newPrompt();
    dosPromptNew = document.getElementById("dosPromptNew");
    dosPromptNew.autofocus = true;
    dosPromptNew.addEventListener('keyup', function (event) {

        if (event.keyCode === 13) {

                dosPromptNew.id = "disabled";
                dosPromptNew.disabled = true;
                dosPromptInput(dosPromptNew.value);

                
              
        }

    });
}
function loadWindows() {
    var dpC = document.getElementsByClassName('dos-prompt-container');
    for (var i = 0; i < dpC.length; i++) {
        dpC[i].style.display = 'none';
    }
    var dInput = document.getElementsByClassName('dos-prompt-input');
    for (var j = 0; j < dInput.length; j++) {
        dInput[j].style.display = 'none';
    }
    var prompt = document.getElementsByClassName('loading');
    for (var k = 0; k < prompt.length; k++) {
        prompt[k].style.display = 'none';
    }

    document.getElementById('win95').style.display = 'inline-block';

    redirectToPortfolio();
}

function redirectToPortfolio() {
    setTimeout(function () {
        window.location.href = 'http://mattfry.io/index_main.html';
    }, 5000);
}

function clearScreen() {
    var dpC = document.getElementsByClassName('dos-prompt-container');
    for (var i = 0; i < dpC.length; i++) {
        dpC[i].style.display = 'none';
    }
    var dInput = document.getElementsByClassName('dos-prompt-input');
    for (var j = 0; j < dInput.length; j++) {
        dInput[j].style.display = 'none';
    }
    var prompt = document.getElementsByClassName('loading');
    for (var k = 0; k < prompt.length; k++) {
        prompt[k].style.display = 'none';
    }
}
    


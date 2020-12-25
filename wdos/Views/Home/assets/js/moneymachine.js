//const { response } = require("express");

function currentQuote(){
var url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&outputsize=compact&apikey=EXGBU46FGX9CDJ24";
    
    fetch(url).then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data){
    console.log(data);
        // console.log('success!', jsonData);

        
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}
function promptUserForStockSymbol(frequency){
    newLine("Enter a stock symbol below:");
    new_div = document.createElement('div');
    new_div.className = "stock-prompt-container";
    new_div.innerHTML = '<p class="prompt-label stock-output">Symbol:</p> <input type="text" id="symbolPrompt" class="dos-prompt-input" autofocus/>';
    document.body.appendChild(new_div);
    symbolPrompt = document.getElementById('symbolPrompt');
    symbolPrompt.addEventListener("keyup", function (event){
        if (event.keyCode === 13){
            symbolPrompt.id = "disabled";
            symbolPrompt.disbaled = true;
            if (frequency === "monthly"){
                monthlyQuote(symbolPrompt.value);
            }else if(frequency === "intraday"){
                intradayQuote(symbolPrompt.value);
            }
        } 

       
    });
    
}
function monthlyQuote(stockSymbol){
    const apikey = "EXGBU46FGX9CDJ24";
    
    
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol="+ stockSymbol + "&apikey="+ apikey;
     console.log(url);   
        fetch(url).then(function (response) {
            // The API call was successful!
            return response.json();
        }).then(function (json_data){
        
        console.log(json_data);
        for (var i = 0; i <json_data.length; i++){
            var symbol = json_data['Meta Data']['2. Symbol'];
            //var lastPrice = json_data['Monthly Adjusted Time Series']['1999-12-31']['4. close'];
            var stockOutput = "<p class='dos-output stock-output'>"+ symbol + " " + lastPrice + "</p>"; 
        }
        var symbol = json_data['Meta Data']['2. Symbol'];
        var lastPrice = json_data['Monthly Adjusted Time Series']['1999-12-31']['4. close'];
        var stockOutput = "<p class='dos-output stock-output'>"+ symbol + " " + lastPrice + "</p>";
        dosHTMLOutput(stockOutput);
        loadStockPrompt();
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
            newLine("Exception occured:  "+err);
            
            loadStockPrompt();
        });
    }

    function intradayQuote(stockSymbol){
        const apikey = "EXGBU46FGX9CDJ24";
        
        
        var url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+ stockSymbol + "&interval=60min&apikey="+ apikey;
         console.log(url);   
            fetch(url).then(function (response) {
                // The API call was successful!
                return response.json();
            }).then(function (json_data){
            
            console.log(json_data);
            var obj = JSON.parse(url);
            for(var k in obj){
                if(obj[k] instanceof Object) {
                    newLine(obj[k]);
                } else {
                    newLine(obj[k]);
                };
            }
            /*for (var i = 0; i <url.length; i++){
                var symbol = url[i]['Meta Data'][i]['2. Symbol'];
                var lastPrice = url[i]['Time Series (60min)'][i]['4. close'];
                var stockOutput = "<p class='dos-output stock-output'>"+ symbol + " " + lastPrice + "</p>";
                dosHTMLOutput(stockOutput); 
            }*/
           // var symbol = json_data['Meta Data']['2. Symbol'];
           // var lastPrice = json_data['Monthly Adjusted Time Series']['1999-12-31']['4. close'];
           // var stockOutput = "<p class='dos-output stock-output'>"+ symbol + " " + lastPrice + "</p>";
            
            loadStockPrompt();
            }).catch(function (err) {
                // There was an error
                console.warn('Something went wrong.', err);
                newLine("Exception occured:  "+err);
                
                loadStockPrompt();
            });
        }



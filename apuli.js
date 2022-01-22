const AmountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const change = new Currency("USD","TRY");
const ui = new UI(firstSelect,secondSelect);
eventListener ();

function eventListener(){
    AmountElement.addEventListener("input",ExchangeCurrency);

    firstSelect.onchange = function (){
        change.changeFirstParameter(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.ChangefirstUI();
    };

    secondSelect.onchange = function(){
        change.changeSecondParameter(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.ChangeSecondUI();
    };


}

function ExchangeCurrency(){
    change.ChangeAmount(AmountElement.value);
    
    change.Exchange().then(result => {ui.ChangeResult(result)}).catch(err=>(console.error(err)));
}


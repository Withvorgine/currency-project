class UI{
    constructor(firsSelect,secondSelect){
        this.firsSelect = firsSelect;
        this.secondSelect = secondSelect;

        this.output1 = document.getElementById("outputFirst");
        this.output2 = document.getElementById("outputSecond");
        this.result = document.getElementById("outputResult");
    }
    ChangefirstUI(){
        this.output1.textContent = this.firsSelect.options[this.firsSelect.selectedIndex].textContent
    }
    ChangeSecondUI(){
        this.output2.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent
    }
    ChangeResult(result){
        this.result.value =result;
    }


}
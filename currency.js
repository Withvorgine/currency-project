class Currency {
    constructor(firstParameter,secondParameter){
        this.firstParameter = firstParameter;
        this.secondParameter = secondParameter;
        this.url = "https://api.exchangerate.host/latest?base=";
        this.amount = null;
    }

    Exchange(){
        return new Promise((resolve,reject)=>{
            fetch(this.url + this.firstParameter)
            .then(response => response.json())
            .then(data =>{
                const z = data["rates"][this.secondParameter]
                const y = Number(this.amount)
                const total = z*y;
                resolve(total)})
            .catch(err =>reject(err))
        })
        
    };
    ChangeAmount(quentity){
        this.amount = quentity;

    }
    changeFirstParameter(firstparameter){
        this.firstParameter = firstparameter;
    }
    changeSecondParameter(secondparameter){
        this.secondParameter = secondparameter ;
    }
}

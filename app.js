let number = document.querySelectorAll('.nr');
let operation = document.querySelectorAll('.operation');
let equal = document.querySelector('#equal');
let del = document.querySelector('#del');
let clear = document.querySelector('#clear');
let value = document.querySelector('#text');
let neg = document.querySelector('#neg');
let secondValue;
let i;


class Calculator{
        
        constructor(value, secondValue){
        this.value = value;
        this.secondValue = secondValue;
        this.clear();
    }

    screen(){
        this.value.innerHTML = this.secondV;
    }
 

    addOperation(operation){
        if(this.secondV === ''){ 
            return;
        }else if(this.v !== ''){
            this.calculate();
        }

        this.operation = operation;
        this.v = this.secondV;
        this.secondV ='';      
    }


    calculate(){
        let calculus;
        const rez1 = parseFloat(this.v);
        const rez2 = parseFloat(this.secondV);
        
        if(isNaN(rez1) || isNaN(rez2)){
            return;
        }else{
        switch(this.operation){
            case '+':            
                calculus = rez1 + rez2;      
                break;
            case '-':
                calculus = rez1 - rez2;
                break;
            case 'x':
                calculus = rez1 * rez2;
                break;   
             case '/':
                calculus = rez1 / rez2;
                break;    
             case '%':
               calculus = rez1 % rez2;
               break;
             case 'pow':
               calculus = Math.pow(rez1, rez2);
               break;
             case 'rad':
               calculus = Math.pow(rez1, 1/rez2);
                break;
            
             default: return;  
        }
    }
        this.secondV = calculus;
        this.v = '';
        this.operation =undefined;
    }

    clear(){
        this.v = '';
        this.secondV = '';
        this.operation = undefined;
    }

    delete(){
        this.secondV = this.secondV.toString().slice(0,-1);
    }

    appendN(number){
        if(number === '.' && this.secondV.includes('.')){
            return;
        }  else{
            return this.secondV = this.secondV.toString() + number.toString();
        }     
            
        
      this.secondV = this.secondV.toString() + number.toString();
    }

    plusMin(){
        i = value.innerHTML.toString();
  
        if(!i.includes('-')){
          i = '-' + i;
        }else{
          i = i.slice(1);
        }
        this.secondV = i;
    }


} 

const calculator = new Calculator(value,secondValue);



number.forEach( btn => {
    btn.addEventListener('click', function(){
       calculator.appendN(btn.innerHTML);
       calculator.screen();

        
    });

   
});


operation.forEach( btn => {
    btn.addEventListener('click', function(){
        calculator.addOperation(btn.innerHTML);
        calculator.screen();
    });
});

equal.addEventListener('click', btn =>{
    calculator.calculate();
    calculator.screen();
    
});

 

del.addEventListener('click', btn => {
    calculator.delete();
    calculator.screen();
});

clear.addEventListener('click', btn => {
    calculator.clear();
    calculator.screen();
});


neg.addEventListener('click', function(){
    calculator.plusMin();
    calculator.screen();

});


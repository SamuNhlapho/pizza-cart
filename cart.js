document.addEventListener('alpine:init', () => {
    Alpine.data('pizza', function() {
      return  {
        smallPizzaTotal: 0.00, 
        smallPizzaQuantity:0,  
        mediumPizzaTotal: 0.00, 
        mediumPizzaQuantity:0, 
        largePizzaTotal: 0.00, 
        largePizzaQuantity:0, 
        payNow: false,
        paymentAmount: 0,
        paymentMessage: '',

            addSmallPizza(){
                this.smallPizzaTotal += 50.00 ;
                this.smallPizzaQuantity +=1
            },
            removeSmallPizza(){
                if(this.smallPizzaQuantity>0){
                    this.smallPizzaTotal -= 50.00 ;
                    this.smallPizzaQuantity -= 1
                }
            },
            addMediumPizza(){
                this.mediumPizzaTotal += 85.00 ;
                this.mediumPizzaQuantity +=1
            },
            removeMediumPizza(){
                if(this.mediumPizzaQuantity>0){
                    this.mediumPizzaTotal -= 85.00 ;
                    this.mediumPizzaQuantity -=1
                }
            },
            addLargePizza(){
                this.largePizzaTotal += 130.00 ;
                this.largePizzaQuantity +=1
            },
            removeLargePizza(){
                if(this.largePizzaTotal>0){
                    this.largePizzaTotal -= 130.00 ;
                    this.largePizzaQuantity -=1
                }
            },
         
            cartTotal(){
                return this.smallPizzaTotal + this.mediumPizzaTotal + this.largePizzaTotal
            },
            totalQuantity(){
                return this.smallPizzaQuantity + this.mediumPizzaQuantity + this.largePizzaQuantity
            },
            makePayment(){
                if(!this.paymentAmount){
                    this.paymentMessage = 'No amount entered!'
                    setTimeout(() => {
                        this.paymentMessage = '';
                    }, 3000);
                }
                else if(this.paymentAmount >= this.cartTotal()){
                    this.paymentMessage = 'Thank you - Successful Payment! Enjoy your pizza!'
                    setTimeout(() => {
                        this.payNow=false;
                        this.showCart=false;
                        this.clearCart();
                    }, 3000);
                }else{
                    this.paymentMessage = 'Sorry - that is not enough money!'
                    setTimeout(() => {
                        this.paymentMessage = '';
                        this.paymentAmount = 0;
                    }, 3000);
                }
            },
            clearCart(){
                this.smallPizzaTotal= 0.00;
                this.smallPizzaQuantity=0; 
                this.mediumPizzaTotal= 0.00; 
                this.mediumPizzaQuantity=0; 
                this.largePizzaTotal= 0.00; 
                this.largePizzaQuantity=0; 
                this.paymentMessage='';
                this.paymentAmount=0.00;
            },

            itemCount: 0,
            incrementItemCount() {
              this.itemCount++;
            },
            decrementItemCount() {
              if (this.itemCount > 0) {
                this.itemCount--;
              }
        }
    }
    })
})
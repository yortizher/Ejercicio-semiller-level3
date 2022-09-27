var app = new Vue({
    el: '#app',
    data: {
        error1:false,
        error2:false,
        error3:false,
        error4:false,
        error5:false,
        error6:false,
        error7:false,
        baseSalary2:"",
        overtimePercentage:"",
        quantitySlippers:"",
        percentageSlippers:"",
        quantityShoes:"",
        percentageShoes:"",
        childrenCommission:"",
    },
    methods: {
        getError() {
            if (this.baseSalary2 == "") {
              this.error1 = true;
            } else {
              this.error1 = false;
            }
            if (this.overtimePercentage == "") {
                this.error2 = true;
            } else {
            this.error2 = false;
            }
            if (this.quantitySlippers== "") {
              this.error3 = true;
            } else {
              this.error3 = false;
            }
    
            if (this.percentageSlippers == "") {
                this.error4 = true;
            } else {
            this.error4 = false;
            }
            if (this.quantityShoes == "") {
                this.error5 = true;
            } else {
            this.error5 = false;
            }
            if (this.percentageShoes == "") {
                this.error6 = true;
            } else {
            this.error6 = false;
            }
            if (this.childrenCommission == "") {
                this.error7 = true;
            } else {
            this.error7 = false;
            }
        
          },
        validate(){
            this.getError();
            if(this.error1 == true || this.error2 == true || this.error3 == true || this.error4 == true || this.error5 == true || this.error6 == true || this.error7 == true){
               
            }else{
                
            }
            
        },
        delete(){
            this.baseSalary="";
            this.overtimePercentage1="";
        },
       
      
    },
      });


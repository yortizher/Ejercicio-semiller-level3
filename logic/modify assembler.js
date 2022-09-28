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
        error8:false,
        error9:false,
        error10:false,
        baseSalary2:"",
        overtimePercentage:"",
        quantitySlippers:"",
        percentageSlippers17:"",
        percentageSlippers30:"",
        quantityShoes:"",
        percentageShoes10:"",
        percentageShoes20:"",
        childrenCommission1:"",
        childrenCommission2:"",
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
    
            if (this.percentageSlippers17 == "") {
                this.error4 = true;
            } else {
                 this.error4 = false;
            }
            if (this.percentageSlippers30 == "") {
                this.error5 = true;
            } else {
                this.error5 = false;
            }
            if (this.quantityShoes == "") {
                this.error6 = true;
            } else {
               this.error6 = false;
            }
            if (this.percentageShoes10 == "") {
                this.error7 = true;
            } else {
                this.error7 = false;
            }
            if (this. percentageShoes20 == "") {
                this.error8 = true;
            } else {
                this.error8 = false;
            }
            if (this.childrenCommission1 == "") {
                this.error9 = true;
            } else {
                 this.error9 = false;
            }
            if (this.childrenCommission2 == "") {
              this.error10 = true;
          } else {
               this.error10 = false;
          }
        
          },
        validate(){
            this.getError();
            if(this.error1 == true || this.error2 == true || this.error3 == true || this.error4 == true || this.error5 == true || this.error6 == true || this.error7 == true || this.error8 == true || this.error9 == true || this.error10 == true){
               
            }else{
              this.updateLocalStorage()
            }
            
        },
        delete(){
            this.baseSalary="";
            this.overtimePercentage1="";
        },
        updateLocalStorage() {
          localStorage.setItem("assemblerBaseSalary",JSON.stringify(this.baseSalary2));
          localStorage.setItem("overtimePercentage",JSON.stringify(this.overtimePercentage));
          localStorage.setItem("AssembledShoeQuantity",JSON.stringify(this.quantitySlippers));
          localStorage.setItem("initialPercentageSlippers",JSON.stringify(this.percentageSlippers17));
          localStorage.setItem("finalPercentageSlippers",JSON.stringify(this.percentageSlippers30));
          localStorage.setItem("QuantityAssembledShoes",JSON.stringify(this.quantityShoes));
          localStorage.setItem("initialPercentageShoes",JSON.stringify(this.percentageShoes10));
          localStorage.setItem("finalPercentageShoes",JSON.stringify(this.percentageShoes20));
          localStorage.setItem("quantityChildrenCommission1",JSON.stringify(this.childrenCommission1));
          localStorage.setItem("quantityChildrenCommission2",JSON.stringify(this.childrenCommission2));


  
        },
       
        
    },
    created() {
      if (localStorage.getItem("assemblerBaseSalary") !== null) {
        this.baseSalary2 = JSON.parse(localStorage.getItem("assemblerBaseSalary"));
      } else {
        this.baseSalary2 = this.baseSalary2;
      }
      if (localStorage.getItem("overtimePercentage") !== null) {
        this.overtimePercentage = JSON.parse(localStorage.getItem("overtimePercentage"));
      } else {
        this.overtimePercentage = this.overtimePercentage;
      }
      if (localStorage.getItem("AssembledShoeQuantity") !== null) {
        this.quantitySlippers= JSON.parse(localStorage.getItem("AssembledShoeQuantity"));
      } else {
        this.quantitySlippers = this.quantitySlippers;
      }
      if (localStorage.getItem("initialPercentageSlippers") !== null) {
        this.percentageSlippers17= JSON.parse(localStorage.getItem("initialPercentageSlippers"));
      } else {
        this.percentageSlippers17 = this.percentageSlippers17;
      }
      if (localStorage.getItem("finalPercentageSlippers") !== null) {
        this.percentageSlippers30= JSON.parse(localStorage.getItem("finalPercentageSlippers"));
      } else {
        this.percentageSlippers30 = this.percentageSlippers30;
      }
      if (localStorage.getItem("QuantityAssembledShoes") !== null) {
        this.quantityShoes= JSON.parse(localStorage.getItem("QuantityAssembledShoes"));
      } else {
        this.quantityShoes = this.quantityShoes;
      }
      if (localStorage.getItem("initialPercentageShoes") !== null) {
        this.percentageShoes10= JSON.parse(localStorage.getItem("initialPercentageShoes"));
      } else {
        this.percentageShoes10 = this.percentageShoes10;
      }
      if (localStorage.getItem("finalPercentageShoes") !== null) {
        this.percentageShoes20= JSON.parse(localStorage.getItem("finalPercentageShoes"));
      } else {
        this.percentageShoes20 = this.percentageShoes20;
      }
      if (localStorage.getItem("quantityChildrenCommission1") !== null) {
        this.childrenCommission1= JSON.parse(localStorage.getItem("quantityChildrenCommission1"));
      } else {
        this.childrenCommission1 = this.childrenCommission1;
      }  
      if (localStorage.getItem("quantityChildrenCommission2") !== null) {
        this.childrenCommission2= JSON.parse(localStorage.getItem("quantityChildrenCommission2"));
      } else {
        this.childrenCommission2 = this.childrenCommission2;
      }         
      this.updateLocalStorage();
      
    },
      });


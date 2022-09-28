var app = new Vue({
    el: '#app',
    data: {
        error1:false,
        error2:false,
        baseSalary:1000000,
        overtimePercentage1:1.8,
    },
    methods: {
        
        getError() {
            if (this.baseSalary == "") {
              this.error1 = true;
            } else {
              this.error1 = false;
            }
    
            if (this.overtimePercentage1 == "") {
                this.error2 = true;
              } else {
                this.error2 = false;
              }
          },
        validate(){
          this.getError();
          if(this.error1 == true || this.error2 == true ){
            
          }else{
              this.updateLocalStorage()
                
            }
            
        },
        delete(){
            this.baseSalary="";
            this.overtimePercentage1="";
        },
        updateLocalStorage() {
          localStorage.setItem("SalarioBase",JSON.stringify(this.baseSalary));
          localStorage.setItem("PorcentajeHora",JSON.stringify(this.overtimePercentage1));
        },
       
      
    },
    created() {
      if (localStorage.getItem("SalarioBase") !== null) {
        this.baseSalary = JSON.parse(localStorage.getItem("SalarioBase"));
      } else {
        this.baseSalary = this.baseSalary;
      }
      if (localStorage.getItem("PorcentajeHora") !== null) {
        this.overtimePercentage1= JSON.parse(localStorage.getItem("PorcentajeHora"));
      } else {
        this.overtimePercentage1 = this.overtimePercentage1;
      }
      this.updateLocalStorage();
    },
  
      });


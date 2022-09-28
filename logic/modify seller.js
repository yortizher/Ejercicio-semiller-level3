var app = new Vue({
    el: '#app',
    data: {
        error1:false,
        error2:false,
        error3:false,
        error4:false,
        baseSalary1:1000000,
        commission5:0.1,
        commission10:0.2,
    },
    methods: {
        getError() {
            if (this.baseSalary1 == "") {
              this.error1 = true;
            } else {
              this.error1 = false;
            }
            if (this.commission5 == "") {
              this.error2 = true;
            } else {
              this.error2 = false;
            }
            if (this.commission10 == "") {
              this.error3 = true;
            } else {
              this.error3 = false;
            }
            
          },
        validate(){
            this.getError();
            if(this.error1 == true || this.error2 == true || this.error3 == true ){
               
            }else{
              this.updateLocalStorage()
            }
            
        },
        delete(){
            this.baseSalary1="";
            this.commission5="";
            this.commission10="";
        },
        updateLocalStorage() {
          localStorage.setItem("salarybaseSeller",JSON.stringify(this.baseSalary1));
          localStorage.setItem("bonusPercentageSeller5",JSON.stringify(this.commission5));
          localStorage.setItem("bonusPercentageSeller10",JSON.stringify(this.commission10));
        },
    },
    created() {
      if (localStorage.getItem("salarybaseSeller") !== null) {
        this.baseSalary1 = JSON.parse(localStorage.getItem("salarybaseSeller"));
      } else {
        this.baseSalary1 = this.baseSalary1;
      }
      if (localStorage.getItem("bonusPercentageSeller5") !== null) {
        this.commission5 = JSON.parse(localStorage.getItem("bonusPercentageSeller5"));
      } else {
        this.commission5 = this.commission5;
      }
      if (localStorage.getItem("bonusPercentageSeller10") !== null) {
        this.commission10 = JSON.parse(localStorage.getItem("bonusPercentageSeller10"));
      } else {
        this.commission10 = this.commission10;
      }
      this.updateLocalStorage();
    },
  
      });


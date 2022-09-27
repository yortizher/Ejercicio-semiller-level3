var app = new Vue({
    el: '#app',
    data: {
        error1:false,
        error2:false,
        baseSalary:"",
        overtimePercentage1:"",
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
                
            }
            
        },
        delete(){
            this.baseSalary="";
            this.overtimePercentage1="";
        },
       
      
    },
      });


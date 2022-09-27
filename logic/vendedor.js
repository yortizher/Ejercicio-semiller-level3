const app = new Vue({
    el: "#app",
    data: {
     name:"",
     option:"",
     sells:"",
     shoes:[{model:"zapatilla",price:80000},{model:"zapato",price:90000}],
     settlement:[],
     error: false,
     error2: false,
     error3: false,
     total:0,
     salary:1000000,
     commission1:0.10,
     commission2:0.20,
     commission:0,
     sellPrice:0,
     bonus:"0%",
     nameM:"",
     optionM:"",             
     sellsM:"",
     commissionM:"",
     sellPriceM:"",
     bonusM:"",
     totalM:0,
     total:"",
     index:"",

     
    },
    methods: {
        getIndex(evt){
          
            this.index = evt.target.selectedIndex;
        },

        getError() {
            if (this.name == "") {
              this.error = true;
            } else {
              this.error = false;
            }
    
            if (this.option == "") {
                this.error2 = true;
              } else {
                this.error2 = false;
              }

            if (this.sells == "") {
                this.error3 = true;
              } else {
                this.error3 = false;
              }
          },
          clearInputs(){
            this.name=""
            this.option=""
            this.sells=""
        
  
        },

        getArray(index){

         this.nameM = this.settlement[index].name,
         this.optionM=this.settlement[index].option
         this.sellsM=this.settlement[index].sells,
         this.commissionM=this.settlement[index].commission,
         this.sellPriceM=this.settlement[index].sells
         this.bonusM=this.settlement[index].bonus  
         this.totalM=this.settlement[index].total 
         
        },

        deleteRegister(data, index) {
            Swal.fire({
                title: "¿Está seguro de eliminar a"+ " " +data.name+"?",
                text: "¡Este proceso es irreversible!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "SI",
                cancelButtonText: "NO",
              }).then((result) => {
                if (result.isConfirmed) {
                  this.settlement.splice(index,1);
                  this.updateLocalStorage()
                  this.message(
                    "Se eliminó correctamente",
                    3000,
                    "center",
                    "¡Este proceso es irreversible!"
                  );
              }
            });
    },

        calculateLV(){
            this.getError();

            
            if(this.option == "zapatilla"){
                this.sellPrice= this.sells * this.shoes[0].price
                
            }else if (this.option == "zapato"){
                this.sellPrice = this.sells * this.shoes[1].price
              
            }


            if(this.error == true || this.error2 == true || this.error3 == true ){
               
  
            }else{
                if(this.sellPrice > 5000000 && this.sellPrice < 10000000){
                    this.commission = (this.commission1 * this.salary)
                    this.bonus="10%"
                    
                    this.total = this.commission + this.salary + 117172
                
                } else if(this.sellPrice > 10000000){
                    this.commission = (this.commission2 * this.salary)
                    this.total = this.commission + this.salary + 117172
                    this.bonus="20%"
                   
                
                }else{
                    this.commission = 0
                    this.total = this.commission + this.salary + 117172
                    this.bonus="0%"
                   
                
                }

                this.settlement.push({
                    name: this.name,
                    option:this.option,
                    sells: this.sells,
                    commission: this.commission,
                    bonus: this.bonus,
                    sellPrice:this.sellPrice,
                    total:this.total,
                    
                    
                    
                });
                this.updateLocalStorage();
                this.message("Se liquido correctamente", 3000, "center");
                this.clearInputs();
            }
  
            
           
            },
            updateLocalStorage() {
                localStorage.setItem(
                  "dataStoragePer",
                  JSON.stringify(this.settlement)
                );
              },
              message(msj,time,position,text){
                  Swal.fire({
                    position: position,
                    text: text,
                    icon: "success",
                    title: msj,
                    showConfirmButton: false,
                    timer: time,
                  });
                  },

            
            
    },

    created() {
        if (localStorage.getItem("dataStoragePer") !== null) {
          this.settlement = JSON.parse(localStorage.getItem("dataStoragePer"));
        } else {
          this.settlement = this.settlement;
        }
      }
  });
  
const app = new Vue({
    el: "#app",
    data: {
     name:"",
     option:"",
     extraH:"",
     amount:"",
     sons:"",
     shoes:[{model:"zapatilla",price:40000,producction:500},{model:"zapato",price:45000,production:500}],
     manufactured:[],
     error: false,
     error2: false,
     error3: false,
     error4: false,
     error5: false,
     total:0,
     salary:1000000,
     sellPrice:0,
     bonus:"0%",
     nameM:"",
     optionM:"",             
     amountM:"",
     sonsM:"",
     totalM:0,
     total:"",
     index:"",

     
    },
    methods: {
        getIndex(evt){
          
            this.index = evt.target.selectedIndex;
        },
        
        getExtraH(){
            this.extraH=(((this.salary/4)/6)/8) *this.overtimePercentage;
            this.result2=(this.sMLV)+(this.extraHours *this.valueExtraHours);
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

            if (this.extraH == "") {
                this.error3 = true;
              } else {
                this.error3 = false;
              }

            if (this.amount == "") {
            this.error4 = true;
            } else {
            this.error4 = false;
            }

            if (this.sons == "") {
            this.error5 = true;
            } else {
            this.error5 = false;
            }
          },
          clearInputs(){
            this.name=""
            this.option=""
            this.sells=""
        
  
        },

        getArray(index){

         this.nameM = this.manufacturedt[index].name,
         this.optionM=this.manufactured[index].option
         this.sellsM=this.manufactured[index].sells,
         this.commissionM=this.manufactured[index].commission,
         this.sellPriceM=this.manufactured[index].sells
         this.bonusM=this.manufactured[index].bonus  
         this.totalM=this.manufactured[index].total 
         
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
                  this.manufactured.splice(index,1);
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

        calculateLE(){
            this.getError();

            
            if(this.option == "zapatilla"){
                this.sellPrice= this.sells * this.shoes[0].price
                
            }else if (this.option == "zapato"){
                this.sellPrice = this.sells * this.shoes[1].price
              
            }


            if(this.error == true || this.error2 == true || this.error3 == true ){
               
  
            }else{
                

                this.manufactured.push({
                    name: this.name,
                    option:this.option,
                    extraH: this.extraH,
                    ammount: this.ammount,
                    sons: this.sons,
                    total:this.total,
                    
                    
                    
                });
                this.updateLocalStorage();
                this.message("Se liquido correctamente", 3000, "center");
                this.clearInputs();
            }
  
            
           
            },
            updateLocalStorage() {
                localStorage.setItem(
                  "dataStorageEn",
                  JSON.stringify(this.manufactured)
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
        if (localStorage.getItem("dataStorageEn") !== null) {
          this.manufactured = JSON.parse(localStorage.getItem("dataStorageEn"));
        } else {
          this.manufactured = this.manufactured;
        }
      }
  });
  
const app = new Vue({
    el: "#app",
    data: {
     name:"",
     option:"",
     extraH:"",
     extraHc:"",
     extraV:2.2,
     amount:"",
     sons:"",
     increment:"",
     shoeI1:0.10,
     shoeI2:0.20,
     shoeI3:0.15,
     shoeI4:0.30,
     bonus:"",
     shoes:[{model:"zapatilla",price:40000,production:3500},{model:"zapato",price:45000,production:3500}],
     AssembledShoeQuantity:0,
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
     extraHm:"",
     sonsM:"",
     bonusM:"",
     incrementM:"",
     commissionM:"",
     totalM:0,
     total:"",
     index:"",
     children1:80000,
     children2:60000,

     
    },
    methods: {
        getIndex(evt){
          
            this.index = evt.target.selectedIndex;
        },
        
        getExtraH(){
            this.extraHc=(((this.salary/4)/6)/8) * this.extraV *this.extraH ;
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
            this.sons=""
            this.amount=""
            this.extraH=""
        
  
        },

        getArray(index){

         this.nameM = this.manufactured[index].name,
         this.optionM=this.manufactured[index].option
         this.amountM=this.manufactured[index].sells,
         this.extraHm=this.manufactured[index].extraH
         this.sonsM=this.manufactured[index].sells
         this.totalM=this.manufactured[index].total 
         this.bonusM =this.manufactured[index].bonus
         this.incrementM = this.manufactured[index].increment
         
        },
        getIncrement(){
            if(this.option == 'zapato' && this.amount> 1000 & this.amount<2000){
                this.increment = this.shoes[0].price * this.shoeI1
                
            }else if (this.option == 'zapato' && this.amount> 2000){
                this.increment = this.shoes[0].price * this.shoeI2
            }else if (this.option == 'zapatilla' && this.amount> 1700 & this.amount<3000){
                this.increment = this.shoes[0].price * this.shoeI3
            }else if (this.option == 'zapatilla' && this.amount> 3000){
                this.increment = this.shoes[0].price * this.shoeI4
            }
            else{
                this.increment=0
            }
        },

        getBonus(){
            if(this.sons == 1){
                this.bonus = this.children1
            }else if (this.sons>1){
                this.bonus = this.sons * this.children2
            }
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
            this.getExtraH()
            this.getBonus()
            this.getIncrement()
            
            this.total = this.salary + this.extraHc + this.bonus + this.increment + 117172;
            
        
            console.log(this.increment)
            console.log(this.salary)
            console.log(this.extraHc)
            console.log(this.bonus)
      
            if(this.amount > this.shoes[0].production ){
                this.sellPrice= this.sells * this.shoes[0].price
                this.message2(
                    "El numero de produccion",
                    2200,
                    "center",
                    "Supero el limite",
                
                  )
    
                
            }else{
                if(this.error == true || this.error2 == true || this.error3 == true ){
               
  
                }else{
                    
                    
                    this.manufactured.push({
                        name: this.name,
                        option:this.option,
                        extraH: this.extraHc,
                        amount: this.amount,
                        bonus: this.bonus,
                        increment: this.increment,
                        sons: this.sons,
                        total:this.total,
    
                    });
                    this.updateLocalStorage();
                    this.message("Se liquido correctamente", 3000, "center");
                    this.clearInputs();
                }
              
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

            message2(msj,time,position,text){
            Swal.fire({
                position: position,
                text: text,
                icon: "error",
                title: msj,
                showConfirmButton: false,
                timer: time,
            });
            },
            updateLocalStorage2() {
              this.salary = JSON.parse(localStorage.getItem("assemblerBaseSalary"));
              this.extraV = JSON.parse(localStorage.getItem("overtimePercentage"));
              this.shoes[0].production=JSON.parse(localStorage.getItem("AssembledShoeQuantity"));
              this.shoeI3=JSON.parse(localStorage.getItem("initialPercentageSlippers"));
              this.shoeI4=JSON.parse(localStorage.getItem("finalPercentageSlippers"));
              this.shoes[1].production=JSON.parse(localStorage.getItem("QuantityAssembledShoes"));
              this.shoeI1=JSON.parse(localStorage.getItem("initialPercentageShoes"));
              this.shoeI2=JSON.parse(localStorage.getItem("finalPercentageShoes"));
              this.children1=JSON.parse(localStorage.getItem("quantityChildrenCommission1"));
              this.children2=JSON.parse(localStorage.getItem("quantityChildrenCommission2"));
            },
            
            
    },

    created() {
        if (localStorage.getItem("dataStorageEn") !== null) {
          this.manufactured = JSON.parse(localStorage.getItem("dataStorageEn"));
        } else {
          this.manufactured = this.manufactured;
        }
        this.updateLocalStorage2()
      }
  });
  
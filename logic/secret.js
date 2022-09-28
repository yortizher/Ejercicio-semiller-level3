var app = new Vue({
    el: '#app',
    data: {
        item:1,
        name:"",
        nameM:"",
        extraHours:0,
        extraHoursM:"",
        total:0,
        error1:false,
        error2:false,
        index:"",
        secretaries:[],
        sMLV:1000000,
        valueExtraHours:0,
        valueExtraHoursM:"",
        WorkingHours:8,
        WorkDays:6,
        workWeek:4,
        overtimePercentage:1.8,
        result:"",
        result2:0,
        result2M:"",


    },
    methods: {
      
        getError() {
            if (this.name == "") {
              this.error1 = true;
            } else {
              this.error1 = false;
            }
    
            if (this.extraHours == "") {
                this.error2 = true;
              } else {
                this.error2 = false;
              }
          },
        validate(){
            this.getError();
            if(this.error1 == true || this.error2 == true ){
               
            }else{
                this.addSecretaries();
            }
            
        },
        getIndex(evt) {
            this.index = evt.target.selectedIndex;
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
                this.secretaries.splice(index,1);
                this.updateLocalStorage();
                this.message(
                  "Se eliminó correctamente",
                  1500,
                  "center",
                  "¡Este proceso es irreversible!"
                );
            }
          });
        },
        calculateLS(){
          this.valueExtraHours=((this.sMLV/this.workWeek)/this.WorkDays/this.WorkingHours) *this.overtimePercentage;
          this.result2=(this.sMLV)+(this.extraHours *this.valueExtraHours);
        },
        addSecretaries() {
          this.calculateLS();
          this.secretaries.push({
            index: this.item++,
            name: this.name,
            extraHours: this.extraHours, 
            value:this.valueExtraHours,
            total: this.result2,
            baseSalary:this.sMLV,
            overtimePercentage:this.overtimePercentage,
            
            
          });
          this.updateLocalStorage();
          this.message("Se liquidó correctamente", 1500, "center");
          this.delete();
        },
        getArray(index){
          this.nameM = this.secretaries[index].name;
          this.extraHoursM=this.secretaries[index].extraHours;
          this.valueExtraHoursM=this.secretaries[index].value;
          this.result2M=this.secretaries[index].total;
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
        delete(){
          this.name="";
          this.extraHours="";
        },
        updateLocalStorage() {
          localStorage.setItem("intento100",JSON.stringify(this.secretaries));
        },
        updateLocalStorage2() {
          this.sMLV = JSON.parse(localStorage.getItem("SalarioBase"));
          this.overtimePercentage = JSON.parse(localStorage.getItem("PorcentajeHora"));
        },
    },
    created() {
        if (localStorage.getItem("intento100") !== null) {
          this.secretaries = JSON.parse(localStorage.getItem("intento100"));
        } else {
          this.secretaries = this.secretaries;
        }
        this.updateLocalStorage2()
    },
    

  });


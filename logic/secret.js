var app = new Vue({
    el: '#app',
    data: {
        item:1,
        name:"",
        nameM:"",
        extraHours:0,
        extraHoursM:"",
        valueExtraHours:0,
        total:0,
        error1:false,
        error2:false,
        index:"",
        secretaries:[],
        sMLV:1000000,
        result:0,
        valueExtraHours:0,
        
      
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
              title: "¿Está seguro de eliminar?",
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
        calculateLS(){
          this.valueExtraHours=(5208.33333* 1.80);
          this.result=(this.sMLV) + ((this.extraHours * 5208.33333) * 1.80);
        },
        addSecretaries() {
          this.secretaries.push({
            index: this.item++,
            name: this.name,
            extraHours: this.extraHours, 
            value:this.valueExtraHours,
            total: this.total, 
          });
          this.calculateLS()
          this.total=this.result;
          this.updateLocalStorage();
          this.message("Se guardó correctamente", 3000, "center");
          this.delete();
        },
        getArray(index){
            this.nameM = this.secretaries[index].name
            this.extraHoursM=this.secretaries[index].extraHours
        },
    

        updateLocalStorage() {
          localStorage.setItem("intento100",JSON.stringify(this.secretaries));
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
       
      
    },
    created() {
        if (localStorage.getItem("intento100") !== null) {
          this.secretaries = JSON.parse(localStorage.getItem("intento100"));
        } else {
          this.secretaries = this.secretaries;
        }
    },

  });


const app = new Vue({
    el: "#app",
    data: {
      username: "",
      password: "",
      userCredentials: [
        { name: "secretario", password: "12345" },
        { name: "vendedor", password: "123456" },
        { name: "ensamblador", password: "1234567" },
        { name: "administrador del sistema", password: "12345678" },
      ],
      seller:false,
      error: false,
      error2: false,
    },
    methods: {
      getError() {
        if (this.username == "") {
          this.error = true;
        } else {
          this.error = false;
        }

        if (this.password == "") {
            this.error2 = true;
          } else {
            this.error2 = false;
          }
      },

      login() {
        this.getError();
        if (this.error == true || this.error2 == true) {
        } else {
        }
      },
      validateCredentials(user, key) {
        this.login();
        let loguedUser = [];
        let res = this.userCredentials.filter(
          (usr) => usr.name === user.toLowerCase() && usr.password === key
        );
        loguedUser = [...res];
        if(loguedUser.length === 0){
          this.message(
            "Oops",
            2200,
            "center",
            "Verifique que los datos sean correctos",
            "error"
          )
          }
           else if(this.username == "vendedor") {
            this.message(
              "¡Enhorabuena!",
              2200,
              "center",
              "Ingreso exitoso",
              "success"
            ) ;
            setTimeout(function() {location.href="../view/vendedor.html"}, 2000);
          }
       
          

            
            
      },
      message(title, timer, position, text, icon) {
        Swal.fire({
          position,
          text,
          icon,
          title,
          showConfirmButton: false,
          timer,
        });
      },
    },
  });
  
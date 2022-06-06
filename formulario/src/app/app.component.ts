import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario';
  nombre: string = '';
  email: any = '';
  mensaje: string = '';
  password: any = '';
  elemento: any = [];

  listaregistros: any=[];



saveAlta() {
if(this.emailNorepe() == false){
  window.alert("El email ya está registrado")
}else if(this.password != '5') {
  window.alert("El password no es correcto")
} else if(this.nombre == ''|| this.email == '' || this.mensaje == '' || this.password != '5') {
  window.alert("Quedan campos por rellenar")
}else if(this.nombre != '' && this.email != '' && this.mensaje != '' && this.password == '5'){
  let lista: any = [];
  lista = [this.nombre,this.email,this.mensaje];
  this.listaregistros.push(lista);
  console.log(this.listaregistros);
}
//   if(){
//     this.listaregistros.push({nombre: this.nombre, email: this.email, mensaje: this.mensaje});
//   }else if( this.password != '5'){
//     window.alert("El password no es correcto")
//   }else if(this.emailNorepe() == false){
//     // que salti un puto error quan la condicio sigui false
//     window.alert("El email ya está registrado marica")
//   }else {
//     window.alert("Le quedan campos por rellenar")
//   }
 }

emailNorepe() {
  console.log("email actual: "+ this.email);
  for (let index = 0; index < this.listaregistros.length; index++) {
    this.elemento = this.listaregistros[index];
    if(this.email === this.elemento[1]){
      console.log("email repe, putoo");
      return false; //Retorna false cuando el email ya esta registrado
    }
  }
  console.log("email no esta repe, putoo");
  return true; // Retorna true cuendo el email no esta registrado
}

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { RastreoI } from 'src/app/modelos/rastreo.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rastreo',
  templateUrl: './rastreo.component.html',
  styleUrls: ['./rastreo.component.css']

})
export class RastreoComponent {

  //para mostrar si encuentra al estudiante
  status: any = 'ninguno';
  //
  codigo: any
  data: RastreoI[] = []
  data2: any
  nombre: any;
  apellido: any;
  dni: any;
  tipo: any;
  sexo: any;
  codtramite: any;
  nro_hito: any;
  estado: any;
  escuela: any;
  facultad: any;
  fechatramite: any;
  code_estu: any
  buscarForm = new FormGroup({
  codigo: new FormControl('')

  });
  
  ngOnInit(): void {
    this.actualizarFechaHora();
    // this.getTramite()
    setInterval(() => this.actualizarFechaHora(), 1000);
  }


constructor(private api: ApiService){}

  getTramite(){
    if(this.codigo || this.dni){
      this.api.getTramite(this.codigo).subscribe(data => {
        if (Array.isArray(data) && data.length > 0) {//como mi servicio me da un array con un objeto, realizo esta acion para acceder al mismo objeto
          this.nombre = data[0].nombre
          this.apellido = data[0].apellido
          this.dni = data[0].dni
          this.tipo = data[0].tipo
          this.codtramite = data[0].codtramite
          this.nro_hito = data[0].nro_hito
          this.estado = data[0].estado
          this.escuela = data[0].escuela
          this.fechatramite = data[0].fechatramite
          this.sexo = data[0].sexo
          this.facultad = data[0].facultad
          this.code_estu = data[0].codigo
        this.data=data
          console.log(this.data)    
          this.status = 'true'
          Swal.fire({
            toast: true,
            title: this.nombre + ' tu tramaite fue encontrado',
            icon: 'success',
            iconColor: '#ffffff',
            customClass: 'bg-success',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
  
        } else{
          this.status = 'false'
          Swal.fire({
            toast: true,
            title:'Este estudiante no tiene ningun tramite en proceso o este estudiante no existe',
            icon: 'error',
            iconColor: '#ffffff',
            customClass: 'bg-danger',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
        }
      }, error => {
        console.error(error);
        this.status = 'false'

        // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario
      });
    }else{
      this.status = 'false'
    }
    
  }

  VerDetalles(id:any){
    console.log(id)
    this.api.getSingleTramite(id).subscribe(data => {
      this.data2 = data
      console.log(this.data2)

    })
  }


  actualizarFechaHora() {
    const fechaHoraElement = document.getElementById("fechaHora");
    if (fechaHoraElement) {
      const fechaHoraActual = new Date();
      const dia = String(fechaHoraActual.getDate()).padStart(2, '0');
      const mes = String(fechaHoraActual.getMonth() + 1).padStart(2, '0');
      const año = fechaHoraActual.getFullYear();
      const hora = String(fechaHoraActual.getHours()).padStart(2, '0');
      const minuto = String(fechaHoraActual.getMinutes()).padStart(2, '0');
      const segundo = String(fechaHoraActual.getSeconds()).padStart(2, '0');
      const fechaHoraFormateada = `${dia}/${mes}/${año} - ${hora}:${minuto}:${segundo}`;
      fechaHoraElement.textContent = fechaHoraFormateada;
    }
  }


}

import {Component, Input, OnInit} from '@angular/core';
import {NetworkMachineService} from './services/network-machine.service';
import {MachineModel} from './model/MachineModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'netowrk-machine';
  input: string;
  coeficiente: string;
  error: string;
  information: string;
  machine: MachineModel;

  constructor(private networkMachineService: NetworkMachineService) { }

  ngOnInit(): void {
  }


  keyup(text: string, indicate: number): void {
    if(indicate == 0) {
      this.input = text;
    }
    if(indicate == 1) {
      this.coeficiente = text;
    }

    if(indicate == 2) {
      this.error = text
    }
  }

  clickItem(): void  {
    this.information = '';
    if(!this.checkInputIsValid()) {
       this.information = 'Por favor revise la data ingresada, recuerde que debe ser  maximo dos campos y minimo, adicional deben ser mayor a 0  y menor 2';
       return;
    }

    if(!this.checkFieldIsValid(this.error)) {
      this.information = 'En el campo error debe ingresar un campo numerico';
      return;
   }

   
   if(!this.checkFieldIsValid(this.coeficiente)) {
     this.information = 'En el campo factor de aprendizaje debe ingresar un campo numerico';
     return;
   }


    this.networkMachineService.getMachineNetwork(this.input.split(';'), Number(this.error), Number(this.coeficiente)).subscribe(result => {
       this.machine = result.data;
    }, error => {
      this.information  = JSON.stringify(error);
    });
  }


  checkInputIsValid(): boolean {
     return this.input !== undefined && this.input.split(';').length == 2 && (Number(this.input.split(';')[0])< 2 && Number(this.input.split(';')[0])> -2)
     && (Number(this.input.split(';')[1])< 2 && Number(this.input.split(';')[1])> -2)
  }

  checkFieldIsValid(input : string): boolean {
    return !isNaN(Number(input));
  }
}

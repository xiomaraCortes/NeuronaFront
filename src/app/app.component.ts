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

    this.networkMachineService.getMachineNetwork(this.input.split(';'), 0, 0).subscribe(result => {
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

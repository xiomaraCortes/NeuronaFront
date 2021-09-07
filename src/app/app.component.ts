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
  machine: MachineModel;

  constructor(private networkMachineService: NetworkMachineService) { }

  ngOnInit(): void {
  }


  keyup(text: string): void {
    this.input = text;
  }

  clickItem(): void  {
    this.networkMachineService.getMachineNetwork(this.input.split(',')).subscribe(result => {
       console.log(result);
       this.machine = result.data;
    }, error => {
      console.log(error);
    });
  }
}


export class MachineModel {
  input: Array<number>;
  height: Array<number>;
  tangent: number;


  constructor(input: Array<number>, height: Array<number>, tangent: number) {
    this.input = input;
    this.height = height;
    this.tangent = tangent;
  }
}

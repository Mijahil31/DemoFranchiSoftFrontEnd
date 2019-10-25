export class ClienteModel {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public dni: string,
    public direccion: string,
    public fecha: string
  ){}
}

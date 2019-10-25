import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ICliente } from './interfaces/icliente';
import { ClienteServicioService } from './services/cliente-servicio.service';
import { ClienteModel } from './models/cliente-model';
import { Observable, from } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClienteServicioService]
})
export class AppComponent {
  title = 'DemoFranchiSoftFront';
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'dni', 'direccion', 'fecha', 'opciones'];
  dataSource: MatTableDataSource<ClienteModel[]>;
  clientes: ClienteModel[];
  public clienteModel: ClienteModel;
  public update: boolean;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public _servivioCliente: ClienteServicioService, public sanck: MatSnackBar){
    this.clienteModel = new ClienteModel(0, '', '', '', '', '');
    this.getClientes();
    this.update = false;
  }

  ngOnInit(){
    //this.getClientes();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  enviarCliente(form){
    this._servivioCliente.guardarCliente(this.clienteModel).subscribe(
      resultado=>{
        console.log(resultado);
        this.getClientes();
        this.clienteModel = new ClienteModel(0, '', '', '', '', '');
        this.sanck.open('Registrado de forma exitosa', 'Success', {duration:2000,});
      },
      error=>{
        console.log(<any>error);
      }
    );

  }

  eliminarCliente(clienteEliminar: ClienteModel){
    this._servivioCliente.eliminarCliente(clienteEliminar.id).subscribe(
      result=>{
        let eliminar = this.clientes.indexOf(clienteEliminar);
        this.clientes.splice(eliminar, 1);
        console.log(result);
        console.log(clienteEliminar);
        this.getClientes();
        this.sanck.open('Eliminado de forma exitosa', 'Success', {duration:2000,});
      },
      error=>{
        console.log(<any>error);
      }
    );

  }

  getClientes(){
    this._servivioCliente.listarClientes().subscribe(
      result =>{
        this.clientes = result;
        console.log(this.clientes);
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  selectCliente(clienteSelect: ClienteModel){
    this.clienteModel = clienteSelect;
    this.update = true;
  }


  updateCliente(form){
    this._servivioCliente.actualizarCliente(this.clienteModel, this.clienteModel.id).subscribe(
      result=>{
        console.log("Cliente Modificado");
        this.getClientes();
        this.clienteModel = new ClienteModel(0, '', '', '', '', '');
        this.sanck.open('Modificado de forma exitosa', 'Success', {duration:2000,});
        this.update=false;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}

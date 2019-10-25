import { NgModule } from '@angular/core';
// Componentes del Material
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule ({
  imports: [MatSnackBarModule, MatPaginatorModule, MatTableModule, MatGridListModule, MatSliderModule, MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  exports: [MatSnackBarModule, MatPaginatorModule, MatTableModule, MatGridListModule, MatSliderModule, MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule, MatInputModule, MatFormFieldModule, MatSelectModule],
})

export class MaterialModule{}


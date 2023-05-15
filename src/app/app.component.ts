import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';

  constructor(private dialog:MatDialog){}

  openAddEditEmpForm(){
    this.dialog.open(EmpAddEditComponent)
  }
  
}

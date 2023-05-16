import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-crud';

  displayedColumns: string[] = [
    'id', 
    'firstName', 
    'lastName',
     'email',
     'dob',
     'gender',
     'education',
     'company',
     'experience',
     'package1',
     'action'
    ];
  dataSource!: MatTableDataSource<any>;
  //[EmployeeEntity(id=1, firstName=Enamul, lastName=Haque, email=ehaque95@gmail.com, 
  //dob=2023-05-15T18:00:00.000Z, education=MA, company=ERA-InfoTech Ltd, experience=1, package1=55)]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog,private employeeService:EmployeeService){}
  
  
  ngOnInit(): void {
    this.getEmployeeList()
  }

  openAddEditEmpForm(){
    this.dialog.open(EmpAddEditComponent)
  }

  getEmployeeList(){
    this.employeeService.getEmployeeList().subscribe({
      next:(res)=>{
        console.log(res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator;      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  deletemployee(id:number){
    this.employeeService.deletemployee(id).subscribe({
      next:(res)=>{
        console.log(res)   
        alert('Employee Deleted')     
        },
      error:(err)=>{
        console.log(err)
      }
    })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}

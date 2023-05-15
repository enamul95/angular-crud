import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {

  empForm:FormGroup
  education:string[] =
  [
    'SSC',
    'HSC',
    'BA/BSC',
    'MA',
  ]
  constructor(private formBuilder:FormBuilder, 
    private employeeService:EmployeeService,
     private dialogRef:DialogRef<EmpAddEditComponent>){
    this.empForm = this.formBuilder.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      package1:''
    })
  }
  onFormSubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value)
      this.employeeService.addEmployee(this.empForm.value).subscribe({
        next:(val:any) =>{
          alert('Employee added successfully')
          this.dialogRef.close()

        },
        error:(err:any)=>{
          console.error(err);
          
        },

      })
    }
  }


}

//https://www.youtube.com/watch?v=4mKY_yDq64g
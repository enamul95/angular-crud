import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {

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
   private dialogRef:MatDialogRef<EmpAddEditComponent>,
   @Inject(MAT_DIALOG_DATA) public data:any
   ){
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
  ngOnInit(): void {
   this.empForm.patchValue(this.data)
  }
  
  onFormSubmit(){
    if(this.data){

      if(this.empForm.valid){
        console.log(this.empForm.value)
        this.employeeService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next:(val:any) =>{
            alert('Employee update successfully')
            this.dialogRef.close(true)
  
          },
          error:(err:any)=>{
            console.error(err);
            
          },
  
        })
      }

    }else{
      if(this.empForm.valid){
        console.log(this.empForm.value)
        this.employeeService.addEmployee(this.empForm.value).subscribe({
          next:(val:any) =>{
            alert('Employee added successfully')
            this.dialogRef.close(true)
  
          },
          error:(err:any)=>{
            console.error(err);
            
          },
  
        })
      }
    }
    
  }


}

//https://www.youtube.com/watch?v=4mKY_yDq64g&t=1220s
//https://www.youtube.com/watch?v=4mKY_yDq64g
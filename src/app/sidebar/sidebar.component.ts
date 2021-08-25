import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  branchForm: FormGroup;
  name: string = '';
  phone: string = '';
  email: string = '';

  constructor(private fb: FormBuilder) {
    this.branchForm = fb.group({
      name: '',
      phone: '',
      email: '',
    });
  }

  onSubmit() {
    console.log(this.branchForm.value);
  }
  ngOnInit() {}
}

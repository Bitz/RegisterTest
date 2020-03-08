import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  @Output() stepEmit = new EventEmitter<number>(true);

  passwordForm: FormGroup;
  submitted: boolean;
  correctPassword =  '123';

  constructor(private  formBuilder: FormBuilder) {
    this.passwordForm = this.formBuilder.group(
      {
        password: new FormControl('', [Validators.required])
      });
  }

  get f() {
    return this.passwordForm.controls;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (this.passwordForm.invalid) {
      return;
    }
    //IWe would be doing this on the db.
    if (this.passwordForm.value.password === this.correctPassword) {
      this.stepEmit.emit(2);
    } else {
        this.f.password.setErrors({correct: true});
    }
  }
}


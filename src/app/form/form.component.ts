import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { STATE_DATA} from '../state-data';
import {RegisterService, Registration} from '../register.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  //In real applications we may want to pick up on the previous password as well to ensure user is properly auth'd- and use the password for the postback event.
  @Output() stepEmit = new EventEmitter<number>(true);
  submitted: boolean;
  mainForm: FormGroup;
  availableStates = STATE_DATA;

  constructor(private  formBuilder: FormBuilder, private register: RegisterService) {
    this.mainForm = this.formBuilder.group(
      {
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        emailConfirm: new FormControl('', [Validators.required]),
        subscribe: new FormControl('')
      }, {validator: this.equalValueValidator('email', 'emailConfirm')}
    );
  }

  get f() {
    return this.mainForm.controls;
  }



  equalValueValidator(targetKey: string, toMatchKey: string): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      const target = group.controls[targetKey];
      const toMatch = group.controls[toMatchKey];
      if (target.touched && toMatch.touched) {
        const isMatch = target.value === toMatch.value;
        if (!isMatch && target.valid && toMatch.valid) {
          toMatch.setErrors({equalValue: targetKey});
          const message = targetKey + ' != ' + toMatchKey;
          return {'equalValue': message};
        }
        if (isMatch && toMatch.hasError('equalValue')) {
          toMatch.setErrors(null);
        }
      }

      return null;
    };
  }

  ngOnInit(): void {
    this.stepEmit.emit(2);
  }

  onSubmit() {
    this.submitted = true;
    if (this.mainForm.invalid) {
      return;
    }

    let registerBody = new Registration();
    registerBody.firstName = this.mainForm.value.firstName;
    registerBody.lastName = this.mainForm.value.lastName;
    registerBody.state = this.mainForm.value.state;
    registerBody.email = this.mainForm.value.email;
    registerBody.subscribe = (this.mainForm.value.subscribe === true);


    this.register.addRegistration(registerBody).subscribe(response => {
        console.log(response);

      if (response && response.id && response.id !== '') {
        this.stepEmit.emit(3);
      }
    });

  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { FormComponent } from './form/form.component';
import { StepperComponent } from './stepper/stepper.component';
import { DoneComponent } from './done/done.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    FormComponent,
    StepperComponent,
    DoneComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    { path: 'password-form', component: PasswordComponent },
    { path: 'main-form', component: FormComponent },
    { path: 'complete', component: FormComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

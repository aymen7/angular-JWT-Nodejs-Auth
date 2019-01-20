import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public myForm: FormGroup;
  // controls array that we use to determine if we should/shouldn't display certain html elements
  public controlFlags: any;
  constructor(private _fb: FormBuilder) {
    /**
     * init the form with formBuilder group
     */
    this.myForm = this._fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required , Validators.minLength(8)])]
    });
    /**
     * init the controls array
     */
    this.controlFlags = {
      submitBtnIsDisabled: false,
      addDangerClassStyleEmail: true,
      addDangerClassStylePassword: true,
      emailErrorsMsg: [],
      passwordErrorsMsg: [],
    };
   }
  formSubmitted(form: any) {
    const valid = this.myForm.valid;
    if (!valid) {
      console.log(`form is not valid`);
    }
    /**
     * TODO
     * HANDLE form if valid
     */
  }
  disableSubmitBtn() {
      this.myForm.valueChanges.subscribe(
        () => {
          this.controlFlags.submitBtnIsDisabled = this.myForm.valid;
        }
      );
  }
  addDangerClassStyle() {
    this.myForm.controls['email'].valueChanges.subscribe(
      () => {
        this.controlFlags.addDangerClassStyleEmail = this.myForm.controls['email'].valid;
      }
    );
    this.myForm.controls['password'].valueChanges.subscribe(
      () => {
        this.controlFlags.addDangerClassStylePassword = this.myForm.controls['password'].valid;
      }
    );
  }
  displayEmailDangerParagraph() {
    this.myForm.controls['email'].valueChanges.subscribe(
      () => {
        if (this.myForm.controls['email'].hasError('required') && !this.controlFlags.emailErrorsMsg.includes('required')) {
          this.controlFlags.emailErrorsMsg.push('required');
        }
        if (!this.myForm.controls['email'].valid && !this.controlFlags.emailErrorsMsg.includes('invalid')) {
          this.controlFlags.emailErrorsMsg.push('invalid');
        }
      }
    );
  }
  displayPasswordDangerParagraph() {
    this.myForm.controls['password'].valueChanges.subscribe(
      () => {
        if (this.myForm.controls['password'].hasError('required') && !this.controlFlags.passwordErrorsMsg.includes('required')) {
          this.controlFlags.passwordErrorsMsg.push('required');
        }
        if (!this.myForm.controls['password'].valid && !this.controlFlags.passwordErrorsMsg.includes('invalid')) {
          this.controlFlags.passwordErrorsMsg.push('invalid');
        }
      }
    );
  }


  ngOnInit() {
    this.disableSubmitBtn();
    this.addDangerClassStyle();
    this.displayEmailDangerParagraph();
    this.displayPasswordDangerParagraph();
  }

}

import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES: any = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  minlength: 'Too short!',
  notMatch: 'Passwords do not match',
};

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css'],
})
export class InputValidationComponent implements OnInit, OnChanges {
  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidations();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidations();
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidations();
  }
  @Input()
  control!: AbstractControl;
  @Input()
  showErrorsWhen: boolean = true;
  errorMessages: string[] = [];

  checkValidations(): void {
    const errors = this.control.errors;
    if (!errors) {
      this.errorMessages = [];
      return;
    }

    const keys = Object.keys(errors);
    this.errorMessages = keys.map((key) => VALIDATORS_MESSAGES[key]);
  }
}

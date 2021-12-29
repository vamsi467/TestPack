import { Directive } from "@angular/core";
import { Validator, ValidationErrors, AbstractControl } from "@angular/forms";

@Directive({ selector: "[match-case]" })
export class MatchDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    throw new Error("Method not implemented.");
  }

  constructor() {}
}

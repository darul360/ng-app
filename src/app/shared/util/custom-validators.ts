import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export class CustomValidators{
  static atLeatsOneShouldBeSelected(control: any): ValidationErrors | null  {
    console.log(Object.values(control.value));
    if(Object.values(control.value).includes(true)){
        return null;
    }
    return{atLeatsOneShouldBeSelected:true};
  }
  static shouldBePassed(control: AbstractControl): ValidationErrors | null {
    const userDate = Date.parse(control.value);
    if(Date.now() > userDate){
        return null;
    }
    return {shouldBePassed:true};
  }

}
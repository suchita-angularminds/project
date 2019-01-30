import { FormGroup } from '@angular/forms';

export function passwordpatternValidator(password): any {
    if (password.pristine) {
       return null;
    }
    const password_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{4,8}$/;
    password.markAsTouched();
    if (password_REGEXP.test(password.value)) {
       return null;
    }
    return {
       invalidpassword: true
    };
 }
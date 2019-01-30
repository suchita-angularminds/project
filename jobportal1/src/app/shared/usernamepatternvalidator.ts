import { FormGroup } from '@angular/forms';

export function usernamepatternValidator(username): any {
    if (username.pristine) {
       return null;
    }
    const username_REGEXP = /^[a-z0-9_\-]+$/;
    username.markAsTouched();
    if (username_REGEXP.test(username.value)) {
       return null;
    }
    return {
       invalidusername: true
    };
 }
import { FormGroup } from '@angular/forms';

export function zipcodepatternValidator(zipcode): any {
    if (zipcode.pristine) {
       return null;
    }
    const zipcode_REGEXP = /^[0-9]{6}+$/;
    zipcode.markAsTouched();
    if (zipcode_REGEXP.test(zipcode.value)) {
       return null;
    }
    return {
       invalidzipcode: true
    };
 }
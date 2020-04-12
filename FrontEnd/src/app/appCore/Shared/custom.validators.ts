import { AbstractControl, Validators, FormGroup } from '@angular/forms';

export class CustomValidators {

    static validationMessages = {
        name: {
            required: 'Name is required.',
            minlength: 'Name must be greater then 2 characters.',
            maxlength: 'Name must be less then 100 characters.'
        },
        description: {
            required: 'Description is required.',
            minlength: 'Description must be greater then 2 characters.',
            maxlength: 'Description must be less then 200 characters.'
        },
        email: {
            required: 'Email address is required.',
            minlength: 'Email must be greater then 2 characters.',
            maxlength: 'Email must be less then 200 characters.',
            emailDomain: 'Email domain should be' + ' ' + '{{emailDomain}}',
        },
        confirmEmail: {
            required: 'Confirm Email address is required.',
        },
        emailGroup: {
            emailMismatch: 'Email and Confirm Email do not match.',
        },
        phone: {
            required: 'Phone No is required.',
        },
        email1: {
            required: 'Email address is required.',
            minlength: 'Email must be greater then 2 characters.',
            maxlength: 'Email must be less then 200 characters.',
            emailDomain: 'Email domain should be' + ' ' + '{{emailDomain}}',
        }
    };

    static propartyLength = {
        id: 0,
        minlength: 3,
        maxlength: 100,
        name: 100,
        shortDescription: 250,
        description: 500,
    };

    static emailDomainList = {
        abc: 'abc.com',
        aits: 'aits.com',
    };

    static stringNameList = {
        email: 'email',
        confirmEmail: 'confirmEmail',
    };

    // This methode use for email domain validation
    // use closer function can check any domain name if we pass domain to the function

    static emailDomain(domainName: string) {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const email: string = control.value;
            const domain = email.substring(email.lastIndexOf('@') + 1);
            if (email === '' || email.length < this.propartyLength.minlength ||
                email.length > this.propartyLength.maxlength || domain.toLocaleLowerCase() === domainName.toLocaleLowerCase()) {
                return null;
            } else {
                return { emailDomain: true, };
            }
        };
    }

    // This function compair with two Emails
    // use closer function can check Email with compairable Email if we pass to the function
    static matchEmail(email: string, confirmEmail: string) {
        return (mailGroup: AbstractControl): { [key: string]: any } | null => {
            const emailControl = mailGroup.get(email);
            const confirmEmailControl = mailGroup.get(confirmEmail);
            if (emailControl.value === confirmEmailControl.value || confirmEmailControl.pristine) {
                return null;
            } else {
                return { emailMismatch: true };
            }
        };
    }


    // This methode use for checkbox or radio button selected input field validators
    static onRadioOrCheckboxSelectValidationErrors(selectedValue: string, form: FormGroup) {
        const formPropartyValue = form.get('phone');
        const formPropartyValueEmail = form.get('email1'); // dont work it
        if (selectedValue === 'phone') {
            formPropartyValue.setValidators([Validators.required]);
            formPropartyValueEmail.clearValidators(); // dont work it
        } else {

            formPropartyValue.clearValidators();
        }
        formPropartyValue.updateValueAndValidity();
    }
}

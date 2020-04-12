import { AbstractControl, Validators } from '@angular/forms';

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
        }
    };

    static propartyLength = {
        minlength: 3,
        maxlength: 100,
        nameLength: 100,
        shortDesctiptionLength: 250,
        descriptionLength: 500,
    };

    static emailDomainList = {
        abc: 'abc.com',
        aits: 'aits.com',
    };

    // This methode use for email domain validation
    // use closer function for check any domain name if we pass to the function

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


}

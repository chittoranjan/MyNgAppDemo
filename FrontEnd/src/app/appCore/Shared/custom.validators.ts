import { AbstractControl, Validators, FormGroup } from '@angular/forms';

export class CustomValidators {

    static formErrors = {
        name: '',
        description: '',
        email: '',
        confirmEmail: '',
        emailGroup: '',
        contactPrefence: '',
        phone: '',
        email1: '',
    };

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
            emailDomain: 'Email domain should be as place holder',
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
            emailDomain: 'Email domain should be as place holder',
        }
    };

    static propertyLength = {
        minLength: 3,
        maxLength: 100,
        FistName40Length: 40,
        MiddleName30Length: 30,
        LastName30Length: 30,
        Name100Length: 100,
        ShortName50Length: 50,
        GeneralText50Length: 50,
        GeneralText100Length: 100,
        Code30Length: 30,
        AutoGenCode30Length: 30,
        AutoGenNo30Length: 30,
        AreaCode10Length: 10,
        ShortDescription100Length: 100,
        Description500Length: 500,
        Description250Length: 250,
        Address500Length: 500,
        Address250Length: 250,
        WebUrl100Length: 100,
        FileUrl250Length: 250,
        MobileNo15Length: 15,
        PhoneNo15Length: 15,
        NidNo17Length: 17,
        NidNo10Length: 10,
        Email50Length: 50,
        ApIKey100Length: 100,
        SocialNetworkUserName30Length: 30,
        HeightUnitCm3Length: 3,
        WeightUnitKg3Length: 5,
        PublicIp100Length: 100,
        LocalIp100Length: 100,
        MacAddress100Length: 100,
        Browser100Length: 100,
    };

    static propertyType = {
        number: 0,
        string: '',
        boolean: false,
        date: new Date(),
        time: new Date().getHours() + ':' + new Date().getMinutes(),

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
            if (email === '' || email.length < this.propertyLength.minLength ||
                email.length > this.propertyLength.maxLength || domain.toLocaleLowerCase() === domainName.toLocaleLowerCase()) {
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

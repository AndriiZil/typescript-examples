/// <reference path="form-namespace.ts">

namespace Form {
    class MyForm {
        private type: FormType = 'inline';
        private state: FormState = 'active';

        constructor(public email: string) {
        }

        getInfo(): IFormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }

    const myForm = new MyForm('v@mail.ru');

    console.log(myForm);
}

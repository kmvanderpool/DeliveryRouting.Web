import { IaddressDisplay } from '../interfaces/iaddress-display';

export class Address implements IaddressDisplay {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    numberAttendingThanksgiving: string;
    familyId: string;

    public constructor(init?: Partial<Address>) {
        Object.assign(this, init);
    }
}

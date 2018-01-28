import { IaddressDisplay } from '../interfaces/iaddress-display';

export class Family implements IaddressDisplay {
    numberAttendingThanksgiving: string;
    id: number;
    familyId: string;
    initialId: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    attendingThanksgiving: number;
    notes: string;
    informationUpdateNotes: string;
    routeAssignmentId: string;
    assignmentNotes: string;

    public constructor(init?: Partial<Family>) {
        Object.assign(this, init);
    }
}

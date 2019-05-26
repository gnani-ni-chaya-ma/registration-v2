
export class EventListClass {
    accommodation_provided: boolean;
    active: boolean;
    center: number;
    end_date: string;
    event_code: string;
    fees: string;
    gender: string;
    id: number;
    last_date_of_registration: string;
    late_fees: string;
    max_age: number;
    min_age: number;
    name: string;
    remarks: string;
    rules: string;
    start_date: string
    venue: VenueClass;
    year: number;
}

export class VenueClass {
    address_1: string;
    address_2: string;
    city: string;
    country: string;
    id: number;
    raw: string;
    state: string;
    zip_code: string;
}
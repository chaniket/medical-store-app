// src/types.ts

export interface Medicine {
    id: string;
    medicineName: string;
    medicinePrice: number;
    medicineDisc: number;
}

export interface Customer {
    customerName: string;
    medicine: Medicine[];
    mobileNo: string;
    age: number;
}

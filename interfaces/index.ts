export interface Property {
    id: string;
    title: string;
    description: string;
    location: string;
    price: number;
    image: string;
    bedrooms?: number;
    bathrooms?: number;
    guests?: number;
    rating?: number;
    amenities?: string[];
}

export interface Review {
    id: string;
    propertyId: string;
    userName: string;
    userAvatar?: string;
    rating: number;
    comment: string;
    date: string;
}

export interface BookingFormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
    billingAddress: string;
    propertyId?: string;
    checkIn?: string;
    checkOut?: string;
}

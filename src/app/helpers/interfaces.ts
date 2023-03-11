export interface Profile {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    date_joined: string;
    profile_picture: string;
    address: string;
    bio: string;
}

export interface Library {
    id: number,
    name: string,
    location: string,
    address: string,
    description: string,
    phone_number: string,
    email: string,
    date_established: string,
    established_by: string,
    type: string,
    librarian: number
}
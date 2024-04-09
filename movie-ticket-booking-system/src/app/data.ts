export interface register {
    username :string;
    password :string;
    confirmpassword :string;
}

export interface login {
    username : string;
    password :string;
}

// movie.interface.ts

export interface Movie {
    id: number;
    title: string;
    genre: string;
    director: string;
    releaseDate: string;
    description: string;
    image: string;
  }
  
  // theatre.interface.ts
  
  export interface Theatre {
    id: number;
    name: string;
    location: string;
    movieId: number;
  }
  
  // seat.interface.ts
  
  export interface Seat {
    id: number;
    row: string;
    number: number;
    status: 'available' | 'booked';
  }
  
  // booking.interface.ts
  
  export interface Booking {
    id: number;
    movieId: number;
    theatreId: number;
    userId: number;
    seats: Seat[];
    totalPrice: number;
  }
  
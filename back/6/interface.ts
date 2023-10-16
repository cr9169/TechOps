interface User {
    _id: string;
    username: string;
    password: string; // Consider hashing the password.
    role: 'technician' | 'manager'; // User roles.
    email: string;
    createdDate: Date;
    lastLoginDate?: Date; // Last time the user logged in.
    isActive: boolean; // If the user is active or not.
  }
  
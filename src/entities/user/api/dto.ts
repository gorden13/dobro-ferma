export interface IUser {
  name: string;
  phoneNumber: string;
  avatar: string;
  isActive: boolean;
  role: 'User' | 'Admin' | 'Shop' | 'Farmer';
}

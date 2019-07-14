import { axiosInstance } from '../config/axios.config';
import { IUser } from '../store/reducers/users.reducer';

export const getUser = () => axiosInstance.get<IUser[]>('/participants?key=qhkbd2');

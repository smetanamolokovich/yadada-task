import { auth } from '@/config/firebase';
import { IAuthError } from '@/interfaces/auth.interfaces';

export class AuthServices {
    public static async login(email: string, password: string) {
        try {
            const res = await auth.signInWithEmailAndPassword(email, password);

            return res.user;
        } catch (error) {
            return error as IAuthError;
        }
    }
    public static async logout() {
        await auth.signOut();
    }
}

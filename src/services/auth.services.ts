import { auth, Providers } from '@/config/firebase';
import { IAuthError } from '@/interfaces/auth.interfaces';

export class AuthServices {
    public static async login(email: string, password: string) {
        const res = await auth.signInWithEmailAndPassword(email, password);
        return res;
    }
    public static async loginWithPopup(provider: string) {
        const res = await auth.signInWithPopup(Providers[provider]);
        return res;
    }
    public static async logout() {
        await auth.signOut();
    }
}

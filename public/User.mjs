import { getUserByEmailAndPassword } from "./database.mjs";

async function authenticateUser(email, password){
    try {
        const user = await getUserByEmailAndPassword(email, password);
        if (user && user.password === pasword){
            console.log("Ueser autenticated");
            return true;
        } else {
            console.log('Invalid email or password');
            return false;
        }
    }catch(err) {
        console.error('Error authenticating user', err);
        throw err;
    }
}

authenticateUser('user@example.com', 'password123');
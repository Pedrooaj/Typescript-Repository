type User = {
    username: string;
    password: string;
}

type VerifyUserFn = (user: User, sentValue: User) => boolean; 

const VerifyUser: VerifyUserFn = (user, sentValue) => {
    return user.username === sentValue.username && user.password === sentValue.password;
}
const dbUser = {
    username: "Pedro",
    password: "123456"
}

const sentUser = {
    username: "Pedro",
    password: "123456",
    permissions: ""
}

const loggedIn = VerifyUser(dbUser, sentUser);
console.log(loggedIn);

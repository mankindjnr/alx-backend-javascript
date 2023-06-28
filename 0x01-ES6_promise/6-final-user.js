import signUpUser from "./4-user-promise"
import uploadPhoto from "./5-photo-reject"

export default function handleProfileSignup() {
    return Promise.all([signUpUser(), uploadPhoto()])
        .then((values) => {
            console.log(values[0].body, values[1].body);
        })
        .catch(() => {
            console.log('Signup system offline');
        })
}

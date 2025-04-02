import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const newPromise = Promise.all([uploadPhoto(), createUser()]);
  return newPromise
    .then((response) => {
      const [photo, user] = response;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

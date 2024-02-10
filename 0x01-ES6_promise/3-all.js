import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  let a;
  let b;
  let c;
  try {
    const uwu = await uploadPhoto();
    a = uwu.body;
    const sec = await createUser();
    b = sec.firstName;
    c = sec.lastName;
  } catch (e) {
    console.log('Signup system offline');
  }
  console.log(`${a} ${b} ${c}`);
}

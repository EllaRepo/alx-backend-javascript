import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];
  const res = [];
  Promise.allSettled(promises).then((results) => {
    for (const result of results) {
      const tmp = {
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason.toString(),
      };
      res.push(tmp);
    }
  });
  return res;
}

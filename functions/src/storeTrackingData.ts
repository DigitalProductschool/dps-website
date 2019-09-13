exports.handler = async function(snap: any) {
  const email: string = snap.data()!.email;
  console.log(email);
};

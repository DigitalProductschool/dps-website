export default function isApplicationPhaseOpen(applicationStartDate) {
  const today = new Date();
  let givenDate = applicationStartDate.toDate();
  return givenDate <= today;
}

export function convertIsoDateToString(prismaDate: Date | undefined) {
  // if (prismaDate === undefined) {
  //   throw new Error('Invalid input: date is undefined!');
  // }
  // If input is a string, convert it to a date object

  // if (typeof prismaDate === 'string') {
  //   dateObject = new Date(prismaDate);
  //   console.log(dateObject);
  // if (isNaN(dateObject.getTime())) {
  //   return;
  // }
  // } else if (prismaDate instanceof Date) {
  // } else {
  //   throw new Error(
  //     'Invalid input: date must be a Date object or an ISO string'
  //   );
  // }

  // Convert the date object to ISO string format and extract the date part
  if (prismaDate instanceof Date) {
    const isoString = prismaDate.toISOString();
    const dateString = isoString.split('T')[0];
    return dateString;
  }
}

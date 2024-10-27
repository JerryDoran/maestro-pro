export function convertIsoDateToString(
  prismaDate: Date | string | undefined
): string {
  if (prismaDate === undefined) {
    throw new Error('Invalid input: date is undefined!');
  }
  // If input is a string, convert it to a date object
  let dateObject: Date;
  if (typeof prismaDate === 'string') {
    dateObject = new Date(prismaDate);
    if (isNaN(dateObject.getTime())) {
      throw new Error('Invalid input: date string is not valid!');
    }
  } else if (prismaDate instanceof Date) {
    dateObject = prismaDate;
  } else {
    throw new Error(
      'Invalid input: date mush be a Date object or an ISO string'
    );
  }

  // Convert the data object to ISO string format and extract the date part
  const isoString = dateObject.toISOString();
  const dateString = isoString.split('T')[0];
  return dateString;
}

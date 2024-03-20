export function formatPhoneNumber(phoneNumber: string) {
  const cleanedNumber = phoneNumber.replace(/\D/g, '');

  if (cleanedNumber.length !== 11) {
    return phoneNumber;
  }

  const areaCode = cleanedNumber.substring(0, 2);
  const centralPart = cleanedNumber.substring(2, 7);
  const finalPart = cleanedNumber.substring(7, 11);

  return `(${areaCode}) ${centralPart}-${finalPart}`;
}

export const addressParser = (address) => {
  return `${address.suite} ${address.street},  ${address.city}. ${address.zipcode}`;
};

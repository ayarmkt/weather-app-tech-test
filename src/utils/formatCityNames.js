export const formatCityNames = (timezone) => {
  const startOfSlice = timezone.indexOf('/') + 1;
  const city = timezone.slice(startOfSlice).replace('_', ' ');
  return city;
};

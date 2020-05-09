//@ts-check
const formatDate = (inputDate: string) => {
  const [dd, mm, yyyy] = (inputDate).split('/');
  return yyyy + '-' + mm + '-' + dd;
}

export default {
  formatDate
}
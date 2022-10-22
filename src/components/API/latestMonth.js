function latestMonth() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
  
    const lastMonth = [year, month, day].join('-');
    return lastMonth;
}
export default latestMonth;
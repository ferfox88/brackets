module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map(item => item.join(''));
  console.log(bracketsConfig);
  while (str.length > 0) {
    let delLength = str.length;
    for (const bracket of bracketsConfig) {
      if (str.indexOf(bracket) >= 0) {
        str = str.replace(bracket, '');
      }
    }
    if (delLength === str.length) {
      return false;
    }
  }
  return true;
}

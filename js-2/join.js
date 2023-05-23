function join(str) {
    if (str.length === 0) {
      return "";
    }
  
    let result = str[0].toString();
  
    for (let i = 1; i < str.length; i++) {
      result += " " + str[i].toString();
    }
  
    return result;
}
function countWords(str) {
    return str.replace(/\s+|[^\x00-\x7F]+/g," ").split(" ").filter(ele => ele !="").length;
  }
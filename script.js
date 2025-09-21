function toCase(str) {
  if (str === "") return "-"; // handle empty string
  return str.toLowerCase() + "-" + str.toUpperCase();
}

// Examples
console.log(toCase('Mthatha'));     // 'mthatha-MTHATHA'
console.log(toCase('HelloWorld'));  // 'helloworld-HELLOWORLD'
console.log(toCase('OpenAI'));      // 'openai-OPENAI'
console.log(toCase(''));            // '-'


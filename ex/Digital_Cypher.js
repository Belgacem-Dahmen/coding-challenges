function decode(code, key) {
    const keyArr = String(key).split('').map(Number); // Convert the key into an array of digits
    let decodedMessage = '';
  
    code.forEach((num, index) => {
      // Use modulus to cycle through the key digits
      const shift = keyArr[index % keyArr.length];
      const decodedChar = String.fromCharCode((num - shift) + 96); // Convert to character based on ASCII value
      decodedMessage += decodedChar;
    });
  
    return decodedMessage;
  }
  
  // Example usage:
  console.log(decode([20, 12, 18, 30, 21], 1939)); // Output: "scout"
  console.log(decode([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939)); // Output: "masterpiece"
  
var prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();

  function convertTemp(temp){
    return (temp*1.8)+32
  }

  prompt.get(['temperature'], function (err, result) {
    let finalTemp = convertTemp(result.temperature);
    console.log(result.temperature + ' is ' + finalTemp + ' in Fahrenheit')

  });

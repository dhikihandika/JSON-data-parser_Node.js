// ----------------------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------- Data Parsing Code ----------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------------------------------------------- //

// Its code program which show different about JSON.stringify() and JSON.parse() in command terminal
// -------------------------------------------------------------------------//
// author   = dhikihandika
// contact  = (+) 085874783049
//     c      (+) dhikihandikatama
// emmail   = dhikihandika36@gmail.com


// Define variable "data" is a JSON format
const data = ('{"no":1, "temp":24, "hum":86}');


function dataparsing (){                                            // its a dataparsing() function 
    var parser1 = JSON.stringify(data);                             // define variable "parser1" is a JSON method convert JavaScipt Objet to string                                           // 
    var parser2 = JSON.parse(data);                                 // define variable "parser2" is a JSON method convert string to JavaScript Object

    // result its show on Command Termianl
    console.log("Result of parsing object to string JSON file: ");
    console.log(parser1);
    console.log("Result of parsing string to object JSON file: ");
    console.log(parser2);
}

dataparsing();                                                      // Prosedure call function dataparsing()
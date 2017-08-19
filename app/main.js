if (annyang) {

    var sayThis = function(repeat) {
        console.log(repeat);
    }

    // Let's define a command.
    var commands = {
        '*repeat': sayThis
    };

    // Turn on debugging for the console
    //annyang.debug();

    // Initialize annyang with our commands
    annyang.init(commands);

    // Start listening.
    annyang.start();
   

}

var greeting = function() {
    $('#greeting').text('Hello!');
}

function helloTester() {
    console.log(annyang);
}


function masterController(x)
{
    hamro = document.getElementById('english');
    hamro.innerHTML = x;
    convert();
}
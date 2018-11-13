$(document).ready(function () {

  console.log("READY")

  $("button").click(function () {
    console.log($("#number").val())
    // console.log(validate())
    const message = {
      "text": $("#text").val(),
      "to": $("#number").val(),
      "from": $("#from").val(),
      "when": new Date($("#datetimepicker1").data().date).toISOString()
    }
    // console.log({message})
    sendData(message)
  });

  const validate = () => {
    const errors = {}
    if ($("#number").val().match(/\d/g).length !== 12) {
      errors.numberError = 'Invalid Phone Number'
    }
    if ($("#text").val().length === 0) {
      errors.textError = 'Input a message'
    }
    return errors
  }
})

function sendData(message) {
  var XHR = new XMLHttpRequest()

  console.log({message})

  // Define what happens on successful data submission
  XHR.addEventListener("load", function (event) {
    console.log("success")
    // alert(event.target.responseText);
  });

  // Define what happens in case of error
  XHR.addEventListener("error", function (event) {
     console.log("fail")
    //alert('Oups! Something goes wrong.');
  });

  XHR.onreadystatechange = function () {
    console.log(XHR.readyState);
    console.log(XHR.status);
  };

  // Set up our request
  XHR.open("POST", "https://cors-anywhere.herokuapp.com/https://glacial-cliffs-39893.herokuapp.com/reminders");

  // The data sent is what the user provided in the form
  XHR.setRequestHeader("Content-Type", "application/json");

  // XHR.setRequestHeader(`x-auth`, `${token}`);

  XHR.send(JSON.stringify(message));

}



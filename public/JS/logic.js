$(document).ready(function () {

  console.log("READY")
  $("button").click(async function () {
    console.log($("#number").val())
    const errors = validate()
    console.log({errors})
    if (Object.keys(errors).length !== 0) {
      if (errors.numberError) {
        $("#numberError").text(errors.numberError).css({color: "red"})
      } else {
        $("#numberError").text("")
      }
      if (errors.textError) {
        $("#textError").text(errors.textError).css({color: "red"})
      } else {
         $("#textError").text("")
      }
      if (errors.fromError) {
        $("#fromError").text(errors.fromError).css({color: "red"})
      } else {
        $("#fromError").text("")
      }
      if (errors.whenError) {
        $("#whenError").text(errors.whenError).css({color: "red"})
      } else {
        $("#whenError").text("")
      }
    } else {
      resetErrors()
      const message = {
        "text": $("#text").val(),
        "to": $("#number").val(),
        "from": $("#from").val(),
        "when": new Date($("#datetimepicker1").data().date).toISOString()
      }
      pendingState()
      const data = await sendData(message)
      if (data.status === 200) {
          resetValue()
          finishedState()
      }
    }
  });

  const pendingState = () => {
    $("#send").text("Sending...").css({color: "red"})
    $("#send").prop('disabled', true)

  }

  const finishedState = () => {
    $("#send").text("Send").css({color: "white"})
    $("#send").prop('disabled', false)
  }

  const resetErrors = () => {
    $("#whenError").text("")
    $("#fromError").text("")
     $("#textError").text("")
     $("#numberError").text("")
  }
  const resetValue = () => {
    console.log('reset')
    $("#text").val('')
     $("#number").val('')
    $("#from").val('')
  }

  const validate = () => {
    console.log($("#text").val())
    const errors = {}
    if (($("#number").val().match(/\d/g) || []).length !== 12) {
      errors.numberError = 'Invalid Phone Number'
    }
    if (($("#text").val().trim() || []).length === 0 ) {
      errors.textError = 'Input a message'
    }
    if (($("#from").val() || []).length === 0) {
      errors.fromError = 'Type who the message is from'
    }
    if (!$("#datetimepicker1").data().date) {
      errors.whenError = 'Select a date'
    }
    return errors
  }
})

function sendData(message) {
  var XHR = new XMLHttpRequest()

  return new Promise(function (resolve, reject) {
    console.log({message})

    // Define what happens on successful data submission
    XHR.addEventListener("load", function (event) {
      console.log("success")
       resolve(XHR);
      // alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function (event) {
      console.log("fail")
       reject({
         status: XHR.status,
         statusText: XHR.statusText
       });
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
  })
}



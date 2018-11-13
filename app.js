// const submit = document.querySelector("#submit")

document.querySelector('#reset').addEventListener('click', () => {
  console.log("RESET")
})

// document.querySelector('#submit').addEventListener('click', () => {
//   console.log("submitting")
// })

// const validate = () => {
//   const errors = {}
//   if ($("#number").val().match(/\d/g).length !== 12) {
//     errors.numberError = 'Invalid Phone Number'
//   }
//   if ($("#text").val().length === 0) {
//     errors.textError = 'Input a message'
//   }
//   return errors
// }

// $("form").submit(function (event) {
//   const errors = validate()
//   console.log({
//     errors
//   })
//   if (Object.keys(errors).length !== 0) {
//     if (errors.numberError) {
//       $("p").text('error').show().fadeOut(1000);
//       $("p").text('error').show().fadeOut(1000);
//     }
//     if (errors.textError) {
//       $("#textError").text(errors.textError).show().fadeOut(1000);
//     }

//     $.ajax({
//       url: 'https://glacial-cliffs-39893.herokuapp.com/reminders',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       type: "POST",
//       dataType: "json",
//       data: {},
//       success: function (result) {
//         console.log({
//           result
//         });
//       },
//       error: function () {
//         console.log("error");
//       }
//     });
//   }

//   console.log($("#number").val())
//   console.log($("#text").val())

  event.preventDefault();
});
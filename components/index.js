// Querry selectors
const submit_button = document.querySelector("#submit");
const user_field = document.querySelector("#user_name");
const email_field = document.querySelector("#email");
const password_field = document.querySelector("#password");
const url = "http://localhost:4500/submit";

// Reseting of fields function
const reset = () => {
  user_field.value = "";
  email_field.value = "";
  password_field.value = "";
};
// Post request function
const postRequest = async () => {
  let user_data = {
    User_name: user_field.value,
    Email: email_field.value,
    Password: password_field.value,
  };
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user_data),
  });
  if(response.ok){
    alert("The form has been submitted");
    reset()
  }else{
    alert("Some error has been occured.")
  }
};
// Checking of form data function
const check = () => {
  if (
    user_field.value === "" ||
    email_field.value === "" ||
    password_field.value === ""
  ) {
    alert("Please fill all the fields");
  } else {
    postRequest();
  }
};

// The submit button event listener
submit_button.addEventListener("click", (event) => {
  event.preventDefault();
  check();
});

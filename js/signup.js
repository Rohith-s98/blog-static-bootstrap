function submitHandler() {
    let message = document.getElementById('message');
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const regexEmailForm = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const regexNumFormat = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    message.style.display = 'none';

    if(firstName.length == 0 ||lastName.length == 0 ||email.length==0 ||password.length==0 ||confirmPassword.length==0){
      message.innerText = 'All fields are mandatory';
      message.style.display = 'block';
      return false;
    }
  
    //check email
    if (!regexEmailForm.test(email)) {
      message.innerText = 'Please provide a valid mailID!';
      message.style.display = 'block';
      return false;
    }
    //check password
    if (password.length < 8) {
      message.innerText = 'Password Length should be atleast 8';
      message.style.display = 'block';
      return false;
    }
  
    if (!regexNumFormat.test(password)) {
      message.innerText = 'Password should contain a number, uppercase & lowercase letters ';
      message.style.display = 'block';
      return false;
    }
    //match password
    if (confirmPassword != password) {
      message.innerText = 'Passwords do not match !';
      message.style.display = 'block';
      return false;
    }
    //check terms and conditions
    if (!document.getElementById('terms').checked) {
        alert('Please accept the Terms & Conditions!');
        return false;
      }
    
      alert("sign up Success");
      return false; // Prevent form submission
  }
  
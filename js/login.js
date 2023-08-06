function loginHandler() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let message = document.getElementById('message');
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  

    if(email.length==0 || password.length==0){
        message.innerText = 'Please Provide your Email and password...';
        message.style.display = 'block';
        return false;

    }
    if (!regex.test(email)) {
      message.innerText = 'Invalid Email...!';
      message.style.display = 'block';
      return false;
    }
    if (password.length < 8) {
      message.innerText = 'Incorrect Password...';
      message.style.display = 'block';
      return false;
    }
    alert('Login Successful...!');
  }
// search: from searching reloading page.


document.getElementById('login-btn').addEventListener('click', function(event){ 
    event.preventDefault();  //<--------vajaila for beginner
    console.log('Hello')

    const phoneNumber = document.getElementById('phone-number').value ;
    console.log(phoneNumber);

})
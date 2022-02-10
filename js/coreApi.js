function post(formData) {
    
    const button = document.getElementById('cf-submit')
    button.disabled = true

    var data = {
        name: formData.name.value,
        email: formData.email.value,
        phone: formData.phone.value,
        message: formData.message.value
    }
    // console.log(data)
    // console.log(JSON.stringify(data))

    var xhr = new XMLHttpRequest();
    xhr.onload = function(){ 
        button.disabled = false
        document.getElementById("appointment-form").reset();
        alert ("Thanks for your query, we'll answer soon!"); 
    } // success case
    xhr.onerror = function(){ 
        button.disabled = false
        alert (xhr.responseText); 
    } // failure case
    xhr.open (formData.method, formData.action, true);
    // xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send (JSON.stringify(data));
    xhr.onreadystatechange = function() {
        if (postRequest.readyState === 4) {
            var data = JSON.parse(postRequest.responseText);
            console.log(data);
        }
    };
    return false;

}
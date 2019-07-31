


$('#eventForm').submit(function (e) {
    e.preventDefault();
    const username = $("#inlineFormInputName").val();
    var fd = new FormData($(this)[0]);
    $.ajax({
        url: '/',
        data: username,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data){
            console.log(data);
            console.log("ajax method"+data)
        },

        error: function(data){
            console.log(data);
            console.log("ajax method wrong"+data)
        }
    }).fail(function (jqXHR, textStatus, error) {
        // Handle error here
        console.log(data);
        console.log("ajax method wrong"+data)
    });;
});




function login() {
    const username = $("#inlineFormInputName").val();
    const password = $("#inlineFormInputGroupUsername").val();

    console.log(username, password);

    $.post("/", { username: username, password: password }, (data, status) => {

    if (status === 'success'){
        alert(`Login success\n${data}`);

        joinRoom(data.username, data.password);

    }else
        alert("Login denied");

    });
}





function joinRoom(username, password){



}














function submited() {
    console.log("submited");
}







// Submit form with name function.
function submit_by_name() {

    console.log("submited by name");

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (validation()) // Calling validation function
    {
    var x = document.getElementsByName('form_name');
    x[0].submit(); //form submission
    alert(" Name : " + name + " n Email : " + email + " n Form Name : " + document.getElementById("form_id").getAttribute("name") + "nn Form Submitted Successfully......");
    }
    }



// Name and Email validation Function.
function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if (name === '' || email === '') {
    alert("Please fill all fields...!!!!!!");
    return false;
    } else if (!(email).match(emailReg)) {
    alert("Invalid Email...!!!!!!");
    return false;
    } else {
    return true;
    }
    }
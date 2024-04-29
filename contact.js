function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "unlad.kooperatiba@gmail.com",
        Password : "63940D17A2B68A7E550BC0AFB151BF542DB3",
        To : 'unlad.kooperatiba@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Phone No: " + document.getElementById("phone").value +
        "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent")
    );
};
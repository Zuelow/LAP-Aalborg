function sendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_m4aiao6";
    const templateID = "template_y3tqrmb";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("adresse").value = "";
            document.getElementById("number").value = "";
                        document.getElementById("by").value = "";
                                                document.getElementById("number").value = "";
                                                document.getElementById("kommune").value = "";

            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")
        })
        .catch(err => console.log(err));
}

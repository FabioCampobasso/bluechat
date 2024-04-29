document.getElementById('connect').addEventListener('click', function() {
    navigator.bluetooth.requestDevice({acceptAllDevices: true, optionalServices: ['battery_service']})
    .then(device => {
        console.log('Connessione al dispositivo:', device.name);
        return device.gatt.connect();
    })
    .then(server => {
        // Ottieni un servizio specifico
        return server.getPrimaryService('battery_service');
    })
    .then(service => {
        // Ottieni una caratteristica del servizio
        return service.getCharacteristic('battery_level');
    })
    .then(characteristic => {
        // Leggi il valore della caratteristica
        return characteristic.readValue();
    })
    .then(value => {
        console.log('Livello batteria:', value.getUint8(0));
    })
    .catch(error => {
        console.log('Errore:', error);
    });
});

document.getElementById('send').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    // Qui dovrai aggiungere la logica per inviare il messaggio al dispositivo Bluetooth
    console.log('Messaggio inviato:', message);
});

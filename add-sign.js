document.getElementById('handle').addEventListener('input', function(event) {
    let value = event.target.value;

    // If the value doesn't start with "@", and there's some input, add it
    if (value.length > 0 && value[0] !== '@') {
        event.target.value = '@' + value;
    }
    
    // If the input is just the "@", remove it
    else if (value === '@') {
        event.target.value = '';
    }
});

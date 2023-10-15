document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('handle').addEventListener('input', function(event) {
        let value = event.target.value;

        if (value.length > 0 && value[0] !== '@') {
            event.target.value = '@' + value;
        } else if (value === '@') {
            event.target.value = '';
        }
    });
});

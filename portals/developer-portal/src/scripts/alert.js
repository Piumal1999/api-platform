function showAlert(message, type) {
    return new Promise((resolve) => {
        const alertElement = document.getElementById('alertToast');
        if (!alertElement) {
            resolve();
            return;
        }
        const alertMessage = alertElement.querySelector('.dp-alert__toast-message');
        const alertIcon = alertElement.querySelector('.dp-alert__icon');

        if (alertMessage) {
            alertMessage.textContent = message;
        }

        alertElement.classList.remove('success', 'error', 'info');
        if (type) alertElement.classList.add(type);

        // Set appropriate icon based on alert type
        if (alertIcon) {
            alertIcon.className = 'dp-alert__icon bi';
            if (type === 'success') {
                alertIcon.classList.add('bi-check-circle-fill');
            } else if (type === 'error') {
                alertIcon.classList.add('bi-exclamation-circle-fill');
            }
        }

        // Show the toast
        alertElement.classList.remove('dp-alert__toast--hidden');
        alertElement.classList.add('dp-alert__toast--visible');

        setTimeout(() => {
            alertElement.classList.add('dp-alert__toast--fade-out');
            setTimeout(() => {
                alertElement.classList.remove('dp-alert__toast--visible', 'dp-alert__toast--fade-out');
                alertElement.classList.add('dp-alert__toast--hidden');
                resolve();
            }, 500);
        }, 2300);
    });
}

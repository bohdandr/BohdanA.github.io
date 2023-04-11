document.addEventListener('DOMContentLoaded', () => {
    const createUserButton = document.getElementById('create-user-button');

    async function createUser() {
        const formData = new FormData(document.getElementById('create-user-form'))
        const data = Object.fromEntries(Array.from(formData).filter(([, v]) => v !== ''));
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match');
        }
        else {

            delete data.confirmPassword;

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            const response = await fetch('http://127.0.0.1:5000/api/v1/user', options);
            const json = await response.json();
            if (json.code !== 200) {
                alert(json.error);
            }
            else {
                alert('User successfully created');
            }
        }
    }
    createUserButton.addEventListener('click', createUser);
});
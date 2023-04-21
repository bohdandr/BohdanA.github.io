document.addEventListener('DOMContentLoaded', () => {
    const sendingMoneyButton = document.getElementById('send-money-button');

    async function sendMoney() {
        const formData = new FormData(document.getElementById('send-money-form'))
        const data = Object.fromEntries(Array.from(formData).filter(([, v]) => v !== ''));
        console.log(data)


        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: sessionStorage.getItem('Authorization'),
            },
            body: JSON.stringify({ value: data.value })
        };
        const encodedCredentials = sessionStorage.getItem('Authorization').replace('Basic ', '');

        const decodedCredentials = atob(encodedCredentials);

        const usernamefrom = decodedCredentials.split(':')[0];

        console.log(usernamefrom)


        if (usernamefrom == data.usernameto) {
            alert('You are not able to send money to your card');
        }

        
        const response = await fetch(`http://127.0.0.1:5000/api/v1/transaction/${data.usernameto}`, options);
        const json = await response.json();
        console.log(json)
        if (json.code !== 200) {
            alert(json.error);
        }
        else {
            alert('Transaction successfully completed');
        }
        window.location.href = './index.html';


    }

    sendingMoneyButton.addEventListener('click', sendMoney);
});
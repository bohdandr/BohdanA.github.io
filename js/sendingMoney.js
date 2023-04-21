document.addEventListener('DOMContentLoaded', () => {
    const sendingMoneyButton = document.getElementById('send-money-button');

    async function sendMoney() {
        const formData = new FormData(document.getElementById('send-money-form'))
        const data = Object.fromEntries(Array.from(formData).filter(([, v]) => v !== ''));
        if (data.sentByUser == data.sentToUser) {
            alert('You are not able to send money to your card');
        }
        else {

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            const response = await fetch('http://127.0.0.1:5000/api/v1/transaction/sendMoney', options);
            const json = await response.json();
            console.log(json)
            if (json.code !== 200) {
                alert(json.error);
            }
            else {
                alert('Transaction successfully completed');
            }
         
            
        }
    }
    sendingMoneyButton.addEventListener('click', sendMoney);
});
function submitForm() {
    const form = document.getElementById('invoiceForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndzNDAwMDk5Mjg3NzAwNzEyIiwiZXhwIjoxNzE0OTc2ODIzfQ.PrvIEGOqXM0Co30JAG9amORMVRvIGG2Sl9XM7iSyfV0';

    fetch('https://ebms.obr.gov.bi:9443/ebms_api/addInvoice', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            alert('Invoice posted successfully!');
        } else {
            alert('Failed to post invoice.');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', submitForm);
});
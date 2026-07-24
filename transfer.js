document.getElementById('transferForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const payload = {
    senderAccount: document.getElementById('sourceAccount').value,
    recipientAccount: document.getElementById('targetAccount').value,
    amount: parseFloat(document.getElementById('amount').value),
    note: document.getElementById('note').value
  };

  try {
    await request('/transactions/transfer', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    alert('Transfer initiated successfully!');
    window.location.href = 'dashboard.html';
  } catch (err) {}
});
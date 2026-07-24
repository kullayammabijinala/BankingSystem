document.addEventListener('DOMContentLoaded', async () => {
  const userNameElem = document.getElementById('userName');
  if (userNameElem) {
    userNameElem.textContent = localStorage.getItem('user_name') || 'User';
  }

  try {
    const accounts = await request('/accounts/my-accounts');
    renderAccounts(accounts);
    
    const transactions = await request('/transactions/recent');
    renderTransactions(transactions);
  } catch (err) {
    console.log('Using placeholder view until backend connection.');
  }
});

function renderAccounts(accounts) {
  const container = document.getElementById('accountsList');
  if (!container || !accounts) return;
  
  container.innerHTML = accounts.map(acc => `
    <div class="glass-panel stat-card">
      <p class="stat-label">${acc.accountType} - ${acc.accountNumber}</p>
      <p class="stat-value">$${acc.balance.toLocaleString()}</p>
    </div>
  `).join('');
}

function renderTransactions(transactions) {
  const container = document.getElementById('transactionsList');
  if (!container || !transactions) return;
  
  container.innerHTML = transactions.map(tx => `
    <div style="display:flex; justify-content:space-between; padding:12px 0; border-bottom:1px solid var(--border-color);">
      <div>
        <p style="font-weight:600;">${tx.description}</p>
        <p style="font-size:0.8rem; color:var(--text-muted);">${tx.date}</p>
      </div>
      <span style="color:${tx.type === 'CREDIT' ? 'var(--success)' : 'var(--danger)'}; font-weight:700;">
        ${tx.type === 'CREDIT' ? '+' : '-'}$${tx.amount}
      </span>
    </div>
  `).join('');
}
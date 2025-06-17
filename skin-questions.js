document.getElementById('skinForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const skinInfo = {
    skinType: document.getElementById('skinType').value,
    allergy: document.getElementById('allergy').value.trim(),
    concern: document.getElementById('concern').value,
    sunscreenUse: document.getElementById('sunscreenUse').value,
    productType: document.getElementById('productType').value,
    routine: document.getElementById('routine').value,
    budget: document.getElementById('budget').value
  };

  localStorage.setItem('skinInfo', JSON.stringify(skinInfo));
  window.location.href = 'dashboard.html';
});

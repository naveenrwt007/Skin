document.getElementById('hairForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const hairInfo = {
    hairType: document.getElementById('hairType').value,
    problem: document.getElementById('problem').value,
    washFrequency: document.getElementById('washFrequency').value,
    treatment: document.getElementById('treatment').value,
    goal: document.getElementById('goal').value,
    budget: document.getElementById('budget').value
  };

  localStorage.setItem('hairInfo', JSON.stringify(hairInfo));
  window.location.href = "dashboard.html";
});

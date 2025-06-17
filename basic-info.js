document.getElementById('basicForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const basicInfo = {
    name: document.getElementById('name').value.trim(),
    age: document.getElementById('age').value,
    bloodGroup: document.getElementById('bloodGroup').value.trim(),
    routine: document.getElementById('routine').value,
    concern: document.getElementById('concern').value
  };

  localStorage.setItem('basicInfo', JSON.stringify(basicInfo));

  if (basicInfo.concern === 'skin') {
    window.location.href = 'skin-questions.html';
  } else {
    window.location.href = 'hair-questions.html';
  }
});

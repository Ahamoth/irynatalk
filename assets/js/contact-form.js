(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var btn = form.querySelector('button[type="submit"]');
  var status = document.getElementById('form-status');
  var methodSelect = document.getElementById('contact-method');
  var nicknameContainer = document.getElementById('nickname-container');
  var nicknameInput = document.getElementById('nickname');
  
  if (!btn || !status || !methodSelect || !nicknameContainer || !nicknameInput) return;

  var originalText = btn.textContent;

  // Логика показа поля @nickname для Viber и Telegram
  function toggleNickname() {
    if (methodSelect.value === 'Telegram' || methodSelect.value === 'Viber') {
      nicknameContainer.classList.remove('hidden');
      nicknameInput.required = true;
    } else {
      nicknameContainer.classList.add('hidden');
      nicknameInput.required = false;
      nicknameInput.value = '';
    }
  }

  methodSelect.addEventListener('change', toggleNickname);
  toggleNickname(); // Проверяем состояние при загрузке

  // Отправка формы
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Проверка телефона на код страны
    var phoneValue = form.querySelector('input[name="phone"]').value.replace(/[\s\-\(\)]/g, '');
    if (!phoneValue.startsWith('+')) {
      status.textContent = 'Будь ласка, вкажіть номер телефону з кодом країни (наприклад, +380...)';
      status.className = 'bg-red-50 border border-red-200 text-red-800 rounded-md p-4 text-sm mt-4';
      status.classList.remove('hidden');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Надсилаємо...';
    status.classList.add('hidden');
    status.textContent = '';

    try {
      var data = new FormData(form);
      var obj = {};
      
      // Собираем только нужные поля для Telegram
      var allowedFields = ['name', 'email', 'phone', 'contact_method', 'nickname', 'message'];
      
      data.forEach(function (value, key) { 
        if (allowedFields.includes(key) && value.trim() !== '') {
          obj[key] = value; 
        }
      });

      // URL вашего Cloudflare Worker
      var res = await fetch('https://telegram-form-relay.irynaborisovskaya.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });

      var json = await res.json();

      if (json.success) {
        status.textContent = 'Дякуємо! Заявку отримано. Ми звяжемося з вами протягом доби.';
        status.className = 'bg-green-50 border border-green-200 text-green-800 rounded-md p-4 text-sm mt-4';
        form.reset();
        toggleNickname(); // Прячем поле никнейма после сброса
      } else {
        status.textContent = 'Помилка: ' + (json.error || 'не вдалося надіслати заявку');
        status.className = 'bg-red-50 border border-red-200 text-red-800 rounded-md p-4 text-sm mt-4';
      }
    } catch (err) {
      status.textContent = 'Помилка зєднання. Спробуйте ще раз або напишіть на irynaborisovskaya@gmail.com';
      status.className = 'bg-red-50 border border-red-200 text-red-800 rounded-md p-4 text-sm mt-4';
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
      status.classList.remove('hidden');
    }
  });
})();
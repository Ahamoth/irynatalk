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

  function toggleNickname() {
    if (methodSelect.value === 'Telegram') {
      nicknameContainer.classList.remove('hidden');
      nicknameInput.required = true;
    } else {
      nicknameContainer.classList.add('hidden');
      nicknameInput.required = false;
      nicknameInput.value = '';
    }
  }

  methodSelect.addEventListener('change', toggleNickname);
  toggleNickname();

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

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
      var allowedFields = ['name', 'email', 'phone', 'contact_method', 'nickname', 'message', 'access_key'];

      data.forEach(function (value, key) {
        if (allowedFields.includes(key) && value.trim() !== '') {
          obj[key] = value;
        }
      });

      // 1. Запрос на Web3Forms (Почта)
      var emailReq = fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(obj)
      });

      // 2. Запрос на Cloudflare Worker (Telegram)
      var tgReq = fetch('https://telegram-form-relay.irynaborisovskaya.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });

      // Ждем выполнения обоих запросов
      var results = await Promise.allSettled([emailReq, tgReq]);

      // Проверяем успешность почты (если почта ок, считаем что всё ок)
      var emailOk = false;
      if (results[0].status === 'fulfilled') {
        var json = await results[0].value.json();
        if (json.success) emailOk = true;
      }

      if (emailOk) {
        status.textContent = "Дякуємо! Заявку отримано. Ми зв'яжемося з вами протягом доби.";
        status.className = 'bg-green-50 border border-green-200 text-green-800 rounded-md p-4 text-sm mt-4';
        form.reset();
        toggleNickname();
      } else {
        status.textContent = 'Сталася помилка. Спробуйте ще раз або напишіть на irynaborisovskaya@gmail.com';
        status.className = 'bg-red-50 border border-red-200 text-red-800 rounded-md p-4 text-sm mt-4';
      }
    } catch (err) {
      status.textContent = "Помилка з'єднання. Спробуйте ще раз або напишіть на irynaborisovskaya@gmail.com";
      status.className = 'bg-red-50 border border-red-200 text-red-800 rounded-md p-4 text-sm mt-4';
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
      status.classList.remove('hidden');
    }
  });
})();

// Gallery Point · project site template
// Mobile menu and the viewing form. No animations by design.
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Menu';
      }
    });
  }

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Viewing form, sent through FormSubmit (AJAX endpoint)
  var form = document.getElementById('viewing-form');
  if (!form) return;
  var msg = form.querySelector('.form__msg');
  var submit = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.elements['_honey'] && form.elements['_honey'].value) return;

    var name = form.elements['name'].value.trim();
    var email = form.elements['email'].value.trim();
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.className = 'form__msg';
      msg.textContent = 'Please enter your name and a valid email address.';
      (name ? form.elements['email'] : form.elements['name']).focus();
      return;
    }

    var data = {};
    new FormData(form).forEach(function (v, k) { data[k] = v; });
    if (!data.send_documents) data.send_documents = 'No';

    submit.disabled = true;
    msg.className = 'form__msg';
    msg.textContent = 'Sending…';

    // Fast path: AJAX. If FormSubmit answers anything but a clear success
    // (network error, not activated yet, rate limit), fall back to a normal
    // form POST, which always reaches FormSubmit and then returns the visitor
    // to thanks.html.
    fetch('https://formsubmit.co/ajax/snehota@gallerypoint.cz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (r) { return r.json().catch(function () { return {}; }); })
      .then(function (res) {
        if (String(res.success) !== 'true') throw new Error(res.message || 'not sent');
        form.reset();
        submit.disabled = false;
        msg.className = 'form__msg ok';
        msg.textContent = 'Thank you. We will be in touch within one business day.';
      })
      .catch(function () {
        msg.textContent = 'Sending…';
        HTMLFormElement.prototype.submit.call(form);
      });
  });
})();

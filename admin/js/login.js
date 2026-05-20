(function () {
  var form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  }

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  var overlay = document.querySelector(".nav-overlay");

  function setOpen(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
    if (overlay) overlay.classList.toggle("is-visible", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") !== "true";
      setOpen(open);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    if (overlay) {
      overlay.addEventListener("click", function () {
        setOpen(false);
      });
    }

    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  var pwdToggle = document.querySelector("[data-password-toggle]");
  var pwdInput = document.querySelector("#password");

  if (pwdToggle && pwdInput) {
    var eyeOpen = pwdToggle.querySelector(".icon-eye-open");
    var eyeClosed = pwdToggle.querySelector(".icon-eye-closed");

    function syncPasswordIcon() {
      var hidden = pwdInput.type === "password";
      pwdToggle.setAttribute("aria-label", hidden ? "Show password" : "Hide password");
      if (eyeOpen && eyeClosed) {
        eyeOpen.classList.toggle("is-hidden", hidden);
        eyeClosed.classList.toggle("is-hidden", !hidden);
      }
    }

    pwdToggle.addEventListener("click", function () {
      pwdInput.type = pwdInput.type === "password" ? "text" : "password";
      syncPasswordIcon();
    });

    syncPasswordIcon();
  }
})();

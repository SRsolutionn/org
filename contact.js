document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    // 🔍 DEBUG — YOU MUST SEE name & service HERE
    console.log("FORM DATA:");
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    fetch("https://script.google.com/macros/s/AKfycbwsD8ebpuP1wTp5TGUX1aucIylbjfc69CzHdz76IfqoYcVGLGs7sfWPAMwmqxdGevgRYg/exec", {
      method: "POST",
      body: formData
    })
    .then(() => {
    alert("Message sent successfully");
    this.reset();
  })
  .catch(() => {
    alert("Error sending message");
  });
});
});

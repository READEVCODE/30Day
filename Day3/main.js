    const inputs = document.querySelectorAll(".controllers input");

    function Updates() {
      const invoer = this.dataset.sizing || "";
      document.documentElement.style.setProperty(`--${this.name}`, this.value + invoer);
    }

    inputs.forEach(input => input.addEventListener("change", Updates));
    inputs.forEach(input => input.addEventListener("mousemove", Updates));
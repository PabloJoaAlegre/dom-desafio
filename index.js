const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "essential",
  },
  {
    tema: "node",
    class: "server",
  },
  {
    tema: "oop",
    class: "fundamental",
  },
  {
    tema: "typescript",
    class: "typed",
  },
  {
    tema: "css",
    class: "style",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {}
    
    const lista = document.querySelector(".lista");
    const items = lista.querySelectorAll("li");
    items.forEach((elemento)=> {
      elemento.remove();
    });
    cosasQueAprendimos.forEach((cosas) => {
      let li = document.createElement("li");
          li.textContent = cosas.tema;
          li.classList.add(cosas.class || "item");
      lista.appendChild(li);
    })
    main();


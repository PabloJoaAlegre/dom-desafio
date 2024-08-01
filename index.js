function main() {}
    
    const lista = document.getElementsByClassName("lista");
    const items = lista.getElementsByTagName("li");
    const itemsArray = Array.from(items)

    itemsArray.forEach(item => lista.removeChild(item))

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

    cosasQueAprendimos.forEach(cosas => {
      const li = document.createElement("li");

      li.textContent = cosas.tema;

      if (cosas.class){
        li.classList.add(cosa.class);
      }

      lista.appendChild(li);
    })

    main();


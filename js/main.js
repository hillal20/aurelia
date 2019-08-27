const workBox = () => {
  console.log("********  workbox is here ********");
  const createNode = el => {
    return document.createElement(el);
  };

  const append = (parent, el) => {
    return parent.appendChild(el);
  };
  const ul = document.getElementById("workboxContainer");
  console.log("ul ===> ", ul);
  let people = [];
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      let res = response.json();

      return res;
    })
    .then(data => {
      let people = data;
      return people.map(person => {
        let li = createNode("li");
        let span = createNode("span");
        li.innerHTML = person.name;
        span.innerHTML = person.email;
        append(li, span);
        append(ul, li);
      });
    });
};

module.exports = { workBox };

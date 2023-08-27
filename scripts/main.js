let body = document.querySelector('.table_body');

for (let i = 1; i <= 10; i++) {
    let first = document.createElement('div');
    first.classList.add('cell')
    for (let j = 1; j <= 10; j++) {
        let total = i * j;
        let second = document.createElement("p");
        second.textContent = `${i} x ${j} = ${total}`;
        first.appendChild(second);
    }
    body.appendChild(first);
}
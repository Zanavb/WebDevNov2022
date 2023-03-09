const ParentContainer = document.querySelector('.table')
const g = t => document.createElement(t)

const thead = g('thead')
const tbody = g('tbody')
const tr = g('tr')
const tr2 = g('tr')
const th1 = g('th')
th1.innerText = "#"
const th2 = g('th')
th2.innerText = "username"
const th3 = g('th')
th3.innerText = "password"
const td1 = g('td')
td1.innerText = "1"
const td2 = g('td')
td2.innerText = "root"
const td3 = g('td')
td3.innerText = "toor123"

tr.append(th1, th2, th3)
thead.appendChild(tr)
tr2.append(td1, td2, td3)
tbody.appendChild(tr2)
ParentContainer.appendChild(thead);
ParentContainer.appendChild(tbody);

console.log(ParentContainer);


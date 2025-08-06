const BASE_URL = "https://www.superheroapi.com/api.php/7f07b2080b6fcedb6525374cc69a13a2/search/";

function getHeroId() {
  const id = document.getElementById("heroId").value;
}
function renderList(title, dataObj) {
  let html = `<h3>${title}</h3><ul class="list-group">`;
  for (const key in dataObj) {
    html += `<li class="list-group-item"><strong>${key}:</strong> ${dataObj[key]}</li>`;
  }
  html += `</ul>`;
  document.getElementById("result").innerHTML = html;
}

function getHeroInfo() {
  const id = getHeroId();
  fetch(`${BASE_URL}${id}`)
    .then(res => res.json())
    .then(data => {
      const html = `
        <h3>${data.name}</h3>
        <img src="${data.image.url}" alt="${data.name}">
        <p><strong>Full Name:</strong> ${data.biography["full-name"]}</p>
        <p><strong>Publisher:</strong> ${data.biography.publisher}</p>
      `;
      document.getElementById("result").innerHTML = html;
    });
}
/*
function getPowerStats() {
  const id = getHeroId();
  if (!id) return;
  fetch(`${BASE_URL}${id}/powerstats`)
    .then(res => res.json())
    .then(data => renderList("Powerstats", data));
}

function getBiography() {
  const id = getHeroId();
  if (!id) return;
  fetch(`${BASE_URL}${id}/biography`)
    .then(res => res.json())
    .then(data => renderList("Biography", data));
}

function getAppearance() {
  const id = getHeroId();
  if (!id) return;
  fetch(`${BASE_URL}${id}/appearance`)
    .then(res => res.json())
    .then(data => renderList("Appearance", data));
}

function getWork() {
  const id = getHeroId();
  if (!id) return;
  fetch(`${BASE_URL}${id}/work`)
    .then(res => res.json())
    .then(data => renderList("Work", data));
}

function getConnections() {
  const id = getHeroId();
  if (!id) return;
  fetch(`${BASE_URL}${id}/connections`)
    .then(res => res.json())
    .then(data => renderList("Connections", data));
}*/
(function () {
  const data = window.PORTFOLIO;
  const GH = "https://github.com/itspoppadom/";
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const labels = { hackathon: "Hackathon", school: "School & uni", personal: "Personal" };

  // Stats
  const count = (c) => data.projects.filter((p) => p.category === c).length;
  const stats = [
    [data.projects.length, "projects"],
    [count("hackathon"), "hackathons"],
    [new Date().getFullYear() - 2022, "years of study"],
  ];
  document.getElementById("stats").innerHTML = stats
    .map(([n, l]) => `<div><strong>${n}</strong><span>${l}</span></div>`)
    .join("");

  // Projects: featured first, then newest first
  const sorted = [...data.projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.year - a.year);
  const grid = document.getElementById("project-grid");

  function repoLink(repo, label, isPrivate) {
    if (isPrivate) return `<span class="link muted" title="This repository is private">🔒 ${esc(label)}: on request</span>`;
    const url = repo.includes("/") ? `https://github.com/${repo}` : `${GH}${repo}`;
    return `<a class="link" href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`;
  }

  sorted.forEach((p) => {
    const card = el("article", "card" + (p.featured ? " featured" : ""));
    card.dataset.category = p.category;
    const links = [];
    if (p.repo) links.push(repoLink(p.repo, "Code", p.private));
    (p.extraRepos || []).forEach((r) => links.push(repoLink(r.repo, r.label, r.private)));
    (p.links || []).forEach((l) => links.push(`<a class="link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`));

    card.innerHTML = `
      ${p.image ? `<img class="card-img" src="${esc(p.image)}" alt="${esc(p.imageAlt || p.title)}" loading="lazy">` : ""}
      <div class="card-body">
        <div class="card-meta">
          <span class="tag tag-${p.category}">${labels[p.category]}</span>
          <span class="year">${p.year}</span>
          ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}
        </div>
        <h3>${esc(p.title)}</h3>
        <p class="context">${esc(p.context)}</p>
        <p>${esc(p.summary)}</p>
        <ul class="stack">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        ${p.repoNote ? `<p class="note">${esc(p.repoNote)}</p>` : ""}
        ${links.length ? `<div class="links">${links.join("")}</div>` : ""}
      </div>`;
    grid.appendChild(card);
  });

  document.querySelectorAll(".filters .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filters .chip").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      grid.querySelectorAll(".card").forEach((c) => {
        c.hidden = f !== "all" && c.dataset.category !== f;
      });
    });
  });

  // Journey
  const tl = document.getElementById("timeline");
  data.journey.forEach((j) => {
    tl.appendChild(
      el("li", "", `<span class="when">${esc(j.years)}</span><h3>${esc(j.title)}</h3><p class="context">${esc(j.place)}</p><p>${esc(j.text)}</p>`)
    );
  });

  // Skills
  const sk = document.getElementById("skill-list");
  data.skills.forEach((g) => {
    sk.appendChild(el("div", "skill-group", `<h3>${esc(g.group)}</h3><ul class="stack">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`));
  });

  // Experience
  const ex = document.getElementById("exp-list");
  data.experience.forEach((e) => {
    ex.appendChild(
      el("div", "exp-item", `<div><h3>${esc(e.role)}</h3><p class="context">${esc(e.org)}</p>${e.text ? `<p>${esc(e.text)}</p>` : ""}</div><span class="when">${esc(e.when)}</span>`)
    );
  });

  // Contact
  const L = data.links;
  document.getElementById("contact-links").innerHTML = `
    <a class="btn primary" href="${L.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
    <a class="btn" href="${L.github}" target="_blank" rel="noopener">GitHub</a>
    <a class="btn" href="${L.blog}" target="_blank" rel="noopener">HND blog</a>`;

  document.getElementById("year").textContent = new Date().getFullYear();
})();

// Certificates. Paths are relative to index.html.
const certificates = [
  // TESDA Online Program
  { title: "Introduction to Computer Systems Servicing", issuer: "TESDA Online Program", date: "September 29, 2026", category: "TESDA", file: "assets/certificate/tesda1.pdf", thumb: "assets/certificate/thumbs/tesda1.jpg", type: "PDF" },
  { title: "Installing and Configuring Computer Systems", issuer: "TESDA Online Program", date: "September 29, 2026", category: "TESDA", file: "assets/certificate/tesda2.pdf", thumb: "assets/certificate/thumbs/tesda2.jpg", type: "PDF" },
  { title: "Setting Up Computer Networks", issuer: "TESDA Online Program", date: "September 29, 2026", category: "TESDA", file: "assets/certificate/tesda3.pdf", thumb: "assets/certificate/thumbs/tesda3.jpg", type: "PDF" },
  { title: "Setting Up Computer Servers", issuer: "TESDA Online Program", date: "September 29, 2026", category: "TESDA", file: "assets/certificate/tesda4.pdf", thumb: "assets/certificate/thumbs/tesda4.jpg", type: "PDF" },
  { title: "Maintaining Computer Systems and Networks", issuer: "TESDA Online Program", date: "September 29, 2026", category: "TESDA", file: "assets/certificate/tesda5.pdf", thumb: "assets/certificate/thumbs/tesda5.jpg", type: "PDF" },

  // Cisco Networking Academy
  { title: "Getting Started with Cisco Packet Tracer", issuer: "Cisco Networking Academy", date: "September 21, 2026", category: "Cisco", file: "assets/certificate/ciscoo.pdf", thumb: "assets/certificate/thumbs/ciscoo.jpg", type: "PDF" },
  { title: "CSS Essentials", issuer: "Cisco Networking Academy", date: "October 12, 2026", category: "Cisco", file: "assets/certificate/cssessentialsnetacad.pdf", thumb: "assets/certificate/thumbs/cssessentialsnetacad.jpg", type: "PDF" },

  // Microsoft Learn
  { title: "Explore Fundamentals of Real-Time Analytics", issuer: "Microsoft Learn", date: "October 20, 2026", category: "Microsoft", file: "assets/certificate/microsoft1.pdf", thumb: "assets/certificate/thumbs/microsoft1.jpg", type: "PDF" },
  { title: "Explore the Analytics Process That Turns Data into Insights", issuer: "Microsoft Learn", date: "October 20, 2026", category: "Microsoft", file: "assets/certificate/microsoft2.pdf", thumb: "assets/certificate/thumbs/microsoft2.jpg", type: "PDF" },
  { title: "Get Started Building with Power BI", issuer: "Microsoft Learn", date: "October 20, 2026", category: "Microsoft", file: "assets/certificate/microsoft3.pdf", thumb: "assets/certificate/thumbs/microsoft3.jpg", type: "PDF" },
  { title: "Explore Prebuilt Microsoft Copilot Agents", issuer: "Microsoft Learn", date: "October 20, 2026", category: "Microsoft", file: "assets/certificate/microsoft4.pdf", thumb: "assets/certificate/thumbs/microsoft4.jpg", type: "PDF" },

  // DICT webinars
  { title: "Digital Trust in the AI Era: Detecting Deepfakes and Strengthening Cybersecurity", issuer: "DICT Region IV-A", date: "July 22, 2026", category: "Webinars", file: "assets/certificate/dict1.pdf", thumb: "assets/certificate/thumbs/dict1.jpg", type: "PDF" },
  { title: "Build Back Better: Practical Implementation", issuer: "DICT Region IV-A, National Disaster Resilience Month Webinar", date: "July 28, 2026", category: "Webinars", file: "assets/certificate/dict2.pdf", thumb: "assets/certificate/thumbs/dict2.jpg", type: "PDF" },
  { title: "Don't Get Hacked: Detect, Defend, and Secure Your Digital Life", issuer: "DICT Region V", date: "August 13, 2026", category: "Webinars", file: "assets/certificate/dict3.pdf", thumb: "assets/certificate/thumbs/dict3.jpg", type: "PDF" },
  { title: "Being a Hobbyist Game Dev in the Modern Era", issuer: "DICT Region VIII, Press Start: Game Development in Region 8", date: "August 17, 2026", category: "Webinars", file: "assets/certificate/dict4.pdf", thumb: "assets/certificate/thumbs/dict4.jpg", type: "PDF" },

  // Northeastern College, 10th IT Week 2026
  { title: "Agentic AI", issuer: "Northeastern College, 10th IT Week 2026", date: "August 27, 2026", category: "IT Week", file: "assets/certificate/seminar1.png", thumb: "assets/certificate/thumbs/seminar1.jpg", type: "Image" },
  { title: "Integrating IoT in Capstone Project", issuer: "Northeastern College, 10th IT Week 2026", date: "August 27, 2026", category: "IT Week", file: "assets/certificate/seminar2.png", thumb: "assets/certificate/thumbs/seminar2.jpg", type: "Image" },
  { title: "Programming Fundamentals", issuer: "Northeastern College, 10th IT Week 2026", date: "August 27, 2026", category: "IT Week", file: "assets/certificate/seminar3.png", thumb: "assets/certificate/thumbs/seminar3.jpg", type: "Image" },
  { title: "Video Editing Tips & Tricks", issuer: "Northeastern College, 10th IT Week 2026", date: "August 27, 2026", category: "IT Week", file: "assets/certificate/seminar4.png", thumb: "assets/certificate/thumbs/seminar4.jpg", type: "Image" },
];

const categoryLabels = {
  TESDA: "TESDA Online Program",
  Cisco: "Cisco Networking Academy",
  Microsoft: "Microsoft Learn",
  Webinars: "DICT webinars",
  "IT Week": "Northeastern College IT Week 2026",
};

const certificateGrid = document.getElementById("certificateGrid");
const certificateFilters = document.getElementById("certificateFilters");
let activeCategory = "All";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function renderFilters() {
  const shortLabels = { All: "All", TESDA: "TESDA", Cisco: "Cisco", Microsoft: "Microsoft", Webinars: "Webinars", "IT Week": "IT Week" };
  certificateFilters.innerHTML = Object.keys(shortLabels).map((category) => {
    const count = category === "All" ? certificates.length : certificates.filter((c) => c.category === category).length;
    const active = category === activeCategory;
    return `<button type="button" class="filter-chip${active ? " active" : ""}" data-category="${escapeHTML(category)}" aria-pressed="${active}">${escapeHTML(shortLabels[category])}<span>${count}</span></button>`;
  }).join("");
}

function certificateRow(certificate) {
  const showIssuer = certificate.issuer && certificate.issuer !== categoryLabels[certificate.category];
  const title = escapeHTML(certificate.title);
  const issuer = escapeHTML(certificate.issuer || "");
  const date = escapeHTML(certificate.date || "");
  const file = encodeURI(certificate.file);
  const thumb = encodeURI(certificate.thumb);

  return `
    <li class="cert">
      <a class="cert-thumb" href="${file}" target="_blank" rel="noopener" aria-label="Open original certificate: ${title}">
        <img src="${thumb}" alt="Certificate: ${title}. Issued to Jonwayne M. Ramos." loading="lazy" width="1200">
      </a>
      <div class="cert-info">
        <div>
          <h4>${title}</h4>
          ${showIssuer ? `<p>${issuer}</p>` : ""}
          <p>${date}</p>
        </div>
        <div class="cert-actions">
          <a class="button secondary" href="${file}" target="_blank" rel="noopener">Open original</a>
          <a class="button primary" href="${file}" download>Download</a>
        </div>
      </div>
    </li>`;
}

function renderCertificates() {
  const categories = Object.keys(categoryLabels).filter((c) => activeCategory === "All" || c === activeCategory);

  certificateGrid.innerHTML = categories.map((category) => {
    const items = certificates.filter((c) => c.category === category);
    if (items.length === 0) return "";
    return `
      <div class="cert-group">
        <h3>${escapeHTML(categoryLabels[category])}<span>${items.length}</span></h3>
        <ul class="cert-list">${items.map(certificateRow).join("")}</ul>
      </div>`;
  }).join("");
}

certificateFilters.addEventListener("click", (event) => {
  const chip = event.target.closest(".filter-chip");
  if (!chip) return;
  activeCategory = chip.dataset.category;
  renderFilters();
  renderCertificates();
});

renderFilters();
renderCertificates();

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

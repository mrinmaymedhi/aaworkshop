// --- Data Definition (from WorkshopLanding.tsx) ---
const APPLY_URL = "https://forms.gle/wK1D5u2v4zYUiwBb7";

const importantDates = [
  { label: 'Last Date of Application', value: '20 December, 2025' },
  { label: 'Publication of Selected Participants', value: '10 January, 2026' },
  { label: 'Workshop Dates', value: '16–17 February, 2026' },
];

const importantUpdates = [
  { title: 'Application link is now live.', date: '11 Nov 2025', url: '#', new: true },
  { title: 'Download workshop poster.', date: '', url: 'AA_Workshop_Poster.pdf', new: true },
];

const resourcePersons = [
  { name: 'Prof. Kanak Saha', inst: 'IUCAA', imageUrl: 'https://www.iucaa.in/images/Research_files/Faculty/Kanak_Saha.jpg', profileUrl: 'https://www.iucaa.in/en/faculty-research/kanak' },
  { name: 'Dr. Sukanta Deb', inst: 'Cotton University', imageUrl: 'https://cottonuniversity.ac.in/storage/uploads/profile/fa732e5488d21b5cbb771d2a1d38cba6.jpg', profileUrl: 'https://cottonuniversity.irins.org/profile/257522' },
  { name: 'Dr. Rupjyoti Gogoi', inst: 'Tezpur University', imageUrl: 'https://www.tezu.ernet.in/dphy/home/img/Rupjyoti_new.jpg', profileUrl: 'https://www.tezu.ernet.in/dphy/home/profiles/rup_profile.php' },
  { name: 'Dr. Biman Jyoti Medhi', inst: 'Gauhati University', imageUrl: 'https://i1.rgstatic.net/ii/profile.image/733312645595136-1551846767490_Q128/Biman-Medhi.jpg', profileUrl: 'https://www.researchgate.net/profile/Biman-Medhi' },
  { name: 'Dr. Debasish Borah', inst: 'IIT Guwahati', imageUrl: 'https://lh3.googleusercontent.com/sitesv/AAzXCkcyddCrxUPyjWF8UhP4iGTxEvS3Yp9whYyrkPU3Yo7MuQ9-jRfAiJR5zar7QusEhOq_robN-_ONefUOgJ6uyUaG7XuJHaor8hfJpkLvhXCpsfZ_U5yOjtQjefwIcSBiqxRioT_dHeDGPnGQ9u2j1anTP0bryrcerwxfN3uNoCvZzLK_gyPD0zLIikqleFCv4VdnP37qQ32UqNgdLbrYw4bEq0CyVdyEg0Dz=w1280', profileUrl: 'https://sites.google.com/view/debasish-borah/home' },
];

const programmeCoordinators = [
  { name: 'Dr. Vivek Baruah Thapa', inst: 'Bhawanipur Anchalik College', imageUrl: 'https://www.vivekbaruahthapa.com/img/self_img3.jpg', profileUrl: 'https://www.vivekbaruahthapa.com/' },
  { name: 'Dr. Debajyoti Dutta', inst: 'Bhattadev University', imageUrl: 'https://lh3.googleusercontent.com/sitesv/AAzXCkcBi4H-3csYPlG28HsgTlicvTv2hqe1kS7djrIo771Hd9NDqFJSL8FqgcVZ4slVSwCPNPUl2A3R4_4pXyytTP5XD37ZoAbfz98kh7qHsQtk26f6IwOpsEFecbowPIdVsj1REY8fBT5ahL-ToptHejeBf51NC9vrR3hVCz2oegqCMBS5ejVleeMOS_Xfvn8Da_oPYerbSvbDJYTXGWqP6iwIU1jQJbBTTt2_tBk=w1280', profileUrl: 'https://sites.google.com/view/debajyotidutta/home?authuser=0' },
  { name: 'Prof. Kanak Saha', inst: 'IUCAA', imageUrl: 'https://www.iucaa.in/images/Research_files/Faculty/Kanak_Saha.jpg', profileUrl: 'https://www.iucaa.in/en/faculty-research/kanak' },
];

const organisers = [
    {
        name: 'Bhawanipur Anchalik College',
        description: 'Established in 1982 in Bhawanipur, Barpeta district of Assam, the college offers undergraduate programmes in Arts, Science, and Commerce. It has played a crucial role in promoting higher education, social awareness, and intellectual growth among the youth of lower Assam.',
        imageUrl: 'https://www.bacollege.ac.in/img/icon.png',
        websiteUrl: 'https://www.bacollege.ac.in/'
    },
    {
        name: 'Bhattadev University',
        description: 'A state public university located in Pathsala (Bajali district), established under the Bhattadev University Act, 2017. Emerging from the historic Bajali College, it offers UG and PG programmes across Science, Arts, and Commerce, fostering knowledge and regional development.',
        imageUrl: 'https://www.bhattadevuniversity.ac.in/images/bd_icon.png',
        websiteUrl: 'https://www.bhattadevuniversity.ac.in/index.jsp'
    },
    {
        name: 'IUCAA, Pune',
        description: 'The Inter‑University Centre for Astronomy and Astrophysics (IUCAA) is an autonomous institution set up by the UGC to promote excellence in research and teaching in astronomy and astrophysics. Established in 1988, it serves as a national hub for university researchers.',
        imageUrl: 'https://www.iucaa.in/images/IUCAA-logo-text.png',
        websiteUrl: 'https://www.iucaa.in/en/'
    }
];

// --- Helper Functions to Render Dynamic Content via Template Literals ---

function renderDates() {
  return importantDates.map(item => `
    <li class="flex items-start gap-3">
      <span class="mt-1 h-2 w-2 rounded-full bg-rose-600"></span>
      <div>
        <span class="font-medium">${item.label}:</span> 
        <strong>${item.value}</strong>
      </div>
    </li>
  `).join('');
}


function renderUpdates() {
  return importantUpdates.map(update => `
    <a href="${update.url}" class="block p-4 rounded-xl border border-neutral-200 hover:bg-rose-50 hover:border-rose-200 transition-colors">
      <div class="flex justify-between items-center">
          <div>
              <p class="font-medium text-neutral-800">${update.title}</p>
              <p class="text-sm text-neutral-600">${update.date}</p>
          </div>
          ${update.new ? '<span class="text-xs font-semibold bg-rose-100 text-rose-700 px-2 py-1 rounded-full">New</span>' : ''}
      </div>
    </a>
  `).join('');
}

function renderSpeakers(persons) {
  return persons.map(p => {
      // Logic for generating avatar or initials
      const initials = p.name.split(' ').slice(0, 2).map(w => w[0]).join('');
      const avatarContent = p.imageUrl ? 
          `<img src="${p.imageUrl}" alt="${p.name}" class="h-24 w-24 rounded-full object-cover mx-auto" />` :
          `<div class="h-24 w-24 rounded-full bg-rose-100 flex items-center justify-center font-bold text-rose-700 mx-auto">${initials}</div>`;

      return `
          <a href="${p.profileUrl}" target="_blank" rel="noreferrer" class="group block">
              <div class="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm text-center transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2">
                  ${avatarContent}
                  <h3 class="mt-4 font-semibold">${p.name}</h3>
                  <p class="text-sm text-neutral-600">${p.inst}</p>
              </div>
          </a>
      `;
  }).join('');
}

function renderOrganisers() {
  return organisers.map(org => `
      <a href="${org.websiteUrl}" target="_blank" rel="noreferrer" class="group block h-full">
          <div class="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col items-center text-center h-full transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2">
          <img src="${org.imageUrl}" alt="${org.name} logo" class="h-20 object-contain mb-4" />
          <h3 class="font-semibold">${org.name}</h3>
          <p class="mt-3 text-sm text-neutral-700 leading-relaxed text-justify">
              ${org.description}
          </p>
          </div>
      </a>
    `).join('');
}


// --- Main Render Function (Equivalent to mounting the WorkshopLanding component) ---
function renderWorkshopLanding() {
  const root = document.getElementById('root');
  if (!root) return;

  root.innerHTML = `
      <!-- Sticky Apply bar -->
      <div class="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div class="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
          <span class="text-sm font-semibold tracking-wide uppercase text-rose-700">A&A Workshop</span>
          <nav class="ml-auto hidden md:flex items-center gap-6 text-sm">
            <a href="#updates" class="hover:text-rose-700">Updates</a>
            <a href="#about" class="hover:text-rose-700">About</a>
            <a href="#speakers" class="hover:text-rose-700">Resource Persons</a>
            <a href="#eligibility" class="hover:text-rose-700">Eligibility</a>
            <a href="#orgs" class="hover:text-rose-700">Organisers</a>
            <a href="#contact" class="hover:text-rose-700">Contact</a>
          </nav>
        </div>
      </div>

      <!-- Hero -->
      <header class="relative isolate overflow-hidden">
        <div
          class="absolute inset-0 -z-10 bg-gradient-to-br from-rose-100 via-white to-rose-50"
          aria-hidden
        ></div>
        <div class="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div class="inline-flex items-center gap-2 rounded-full bg-white shadow px-3 py-1 text-xs font-medium text-rose-700 border border-rose-200">
                16–17 February, 2026 • Bhattadev University, Assam
              </div>
              <h1 class="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
                Introductory Workshop<span class="text-rose-700 text-3xl md:text-[2.45rem] font-semibold"> on Astronomy & Astrophysics</span>
              </h1>
              <p class="mt-4 text-neutral-700 md:text-lg leading-relaxed text-justify">
                An immersive 2-day, in-person workshop with engaging lectures, hands‑on demonstrations, interactive sessions, and night‑sky observation. Jointly organised by
                <span class="font-semibold"> Bhawanipur Anchalik College, Barpeta</span> and <span class="font-semibold">Bhattadev University, Bajali</span>. Sponsored by <span class="font-semibold">IUCAA</span>.
              </p>
              <div class="mt-6 flex flex-wrap gap-3">
                <a href="#about" class="rounded-2xl px-5 py-3 font-semibold border border-neutral-300 hover:border-rose-400 hover:text-rose-700 bg-white transition-colors">
                  Learn more
                </a>
              </div>
            </div>
            <div class="md:pl-6">
              <div class="relative">
                <div class="absolute -inset-4 bg-rose-200/30 blur-2xl rounded-3xl" aria-hidden></div>
                <div class="relative rounded-3xl border border-neutral-200 bg-white/90 shadow-lg p-6">
                  <h3 class="text-lg font-semibold">Important Dates</h3>
                  <ul class="mt-4 space-y-3 text-sm">
                    ${renderDates()}
                  </ul>
                  <a href="${APPLY_URL}" target="_blank" rel="noreferrer" class="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 font-semibold text-rose-700 hover:bg-rose-100 transition-colors">
                    Click Here to Apply
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Important Updates -->
      <section id="updates" class="bg-white border-y border-neutral-200">
        <div class="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 class="text-2xl md:text-3xl font-bold">Important Updates</h2>
          <div class="mt-6 space-y-4">
            ${renderUpdates()}
          </div>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div class="grid md:grid-cols-5 gap-10">
          <div class="md:col-span-3">
            <h2 class="text-2xl md:text-3xl font-bold">About the Workshop</h2>
            <p class="mt-4 text-neutral-700 leading-relaxed text-justify">
              The workshop aims to provide a comprehensive introduction to the fundamental concepts of Astronomy and Astrophysics through engaging lectures, hands-on demonstrations, interactive sessions, and exciting night-sky observation. This in-person 2-day workshop seeks to inspire the next generation of researchers by fostering scientific inquiry into the expanding frontiers of astronomy.
            </p>
            <p class="mt-4 text-neutral-700 leading-relaxed text-justify">
              The event also promotes early exposure to Astronomy and Astrophysics in consonance with the vision of <span class="font-medium">NEP 2020</span>, which emphasises equitable access to quality scientific education across all regions of the country.
            </p>
            <p class="mt-4 text-neutral-700 leading-relaxed text-justify">
              The workshop also aims to build a collaborative platform connecting students, educators, and researchers. Participants will gain valuable exposure to modern astrophysical methods, data analysis, and observational practices, fostering curiosity and scientific understanding of the cosmos.
          </div>
          <aside class="md:col-span-2">
            <div class="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 class="text-lg font-semibold">Quick Facts</h3>
              <dl class="mt-4 grid grid-cols-1 gap-3 text-sm">
                <div class="rounded-xl border bg-neutral-50 p-3">
                  <dt class="font-medium"><strong>Mode</strong></dt>
                  <dd>In-person, 2 days</dd>
                </div>
                <div class="rounded-xl border bg-neutral-50 p-3">
                  <dt class="font-medium"><strong>Location</strong></dt>
                  <dd>Bhattadev University, Bajali (Pathsala), Assam</dd>
                </div>
                <div class="rounded-xl border bg-neutral-50 p-3">
                  <dt class="font-medium"><strong>Seats</strong></dt>
                  <dd>30 participants (capped)</dd>
                </div>
                <div class="rounded-xl border bg-neutral-50 p-3">
                  <dt class="font-medium"><strong>Support</strong></dt>
                  <dd>Limited travel & accommodation for non‑local attendees (may be extended)</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <!-- Resource Persons -->
      <section id="speakers" class="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 class="text-2xl md:text-3xl font-bold">Resource Persons</h2>
        <p class="mt-3 text-neutral-700 text-justify">Confirmed speakers and coordinators from leading institutions.</p>
        <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${renderSpeakers(resourcePersons)}
        </div>
      </section>

      <!-- Eligibility / Target Participants -->
      <section id="eligibility" class="bg-white border-y border-neutral-200">
        <div class="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 class="text-2xl md:text-3xl font-bold">Target Participants & Eligibility</h2>
          <ul class="mt-6 grid md:grid-cols-2 gap-4 text-neutral-700">
            <li class="rounded-xl border bg-neutral-50 p-4"><span class="font-medium">Bachelor’s and Master’s</span> students in Physics and allied fields.</li>
            <li class="rounded-xl border bg-neutral-50 p-4">Doctoral candidates in their initial two years of study with research interest in Astronomy & Astrophysics.</li>
            <li class="rounded-xl border bg-neutral-50 p-4">Total intake capped at <span class="font-medium">30 participants</span>.</li>
            <li class="rounded-xl border bg-neutral-50 p-4">Limited travel and accommodation support may be extended to non‑local attendees.</li>
          </ul>
        </div>
      </section>

      <!-- Organisers & About Institutions -->
      <section id="orgs" class="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 class="text-2xl md:text-3xl font-bold">Organisers & Institutes</h2>
        <div class="mt-8 grid lg:grid-cols-3 gap-6">
           ${renderOrganisers()}
        </div>
      </section>

      <!-- Programme Coordinators -->
      <section id="coordinators" class="bg-white border-t border-neutral-200">
        <div class="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <h2 class="text-2xl md:text-3xl font-bold">Programme Coordinators</h2>
            <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            ${renderSpeakers(programmeCoordinators)}
            </div>
        </div>
      </section>


      <!-- Callout -->
      <section class="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div class="rounded-3xl border border-rose-200 bg-rose-50 p-6 md:p-10">
          <h3 class="text-xl md:text-2xl font-bold text-rose-800">Ready to explore the cosmos?</h3>
          <p class="mt-3 text-neutral-800 md:text-lg">Applications are open now. Seats are limited to 30 participants.</p>
          <a href="${APPLY_URL}" target="_blank" rel="noreferrer" class="mt-6 inline-flex rounded-2xl bg-rose-600 px-5 py-3 text-white font-semibold hover:bg-rose-700 shadow transition-colors">Apply via Google Form</a>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="bg-white border-t border-neutral-200">
        <div class="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 class="text-2xl md:text-3xl font-bold">Contact & Venue</h2>
          <div class="mt-6 grid md:grid-cols-2 gap-8">
            <div class="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 flex flex-col justify-center">
                <p class="font-semibold text-lg">Get in touch</p>
                <p class="mt-4 text-sm text-neutral-700">
                  <span class="font-medium">Email:</span> <a href="mailto:astro@bacollege.ac.in" class="underline hover:text-rose-700">astro@bacollege.ac.in</a>
                </p>
                <p class="mt-2 text-sm text-neutral-700">
                  <span class="font-medium">Phone:</span> +91 88762 70054 (VBT), +91 96138 60550 (DD)
                </p>
                <p class="mt-4 text-sm text-neutral-700">
                    <span class="font-medium">Venue:</span> Bhattadev University, Bajali (Pathsala), Assam
                </p>
                <p class="mt-4 text-sm text-neutral-700">For updates, check your email after the selection list is published on <span class="font-medium">10 January, 2026</span>.</p>
            </div>
            <div class="rounded-2xl border border-neutral-200 overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.168003803616!2d91.18412452460846!3d26.505337190844845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375b9fa7c37ef2d3%3A0x0000000000000000!2sBhattadev%20University%2C%20Bajali%2C%20Pathsala%2C%20Assam!5e0!3m2!1sen!2sin!4v1731340000000!5m2!1sen!2sin"                    width="100%" 
                    height="100%" 
                    style="border:0" 
                    allowfullscreen="true"
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Bhattadev University Location"
                    class="min-h-[300px]"
                    >
                </iframe>
            </div>
          </div>
        </div>
      </section>

      <footer class="border-t border-neutral-200">
        <div class="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600 text-center space-y-2">
          <div class="flex flex-wrap justify-center items-center gap-4">
            <p>© ${new Date().getFullYear()} A&A Workshop • IUCAA Sponsored</p>
            <a href="#about" class="hover:text-rose-700">About</a>
            <a href="#eligibility" class="hover:text-rose-700">Eligibility</a>
          </div>
          <p>
            Webpage is designed by 
            <a href="https://mrinmaymedhi.myportfolio.com/ target="_blank" rel="noreferrer" class="font-medium text-rose-700 hover:underline">
              Mrinmay Medhi
            </a> 
            and hosted using <span class="font-medium">Netlify.app</span>.
          </p>
        </div>
      </footer>

  `;
}


// --- Smooth Scroll Logic (from WorkshopLanding.tsx useEffect) ---
function setupSmoothScroll() {
  // Event delegation on the document body
  document.addEventListener('click', (e) => {
    const target = e.target;
    // Use .closest to check if the clicked element or its ancestor is an anchor with a hash link
    const a = target.closest('a[href^="#"]');
    if (!a) return;
    
    const href = a.getAttribute('href');
    // Ignore anchors that are just '#' (used sometimes as placeholders)
    if (href === '#' || href === '') return;

    const id = href.slice(1);
    const el = document.getElementById(id);
    
    if (el) {
      e.preventDefault(); // Prevent default link behavior
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}


// Initialize the application once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderWorkshopLanding();
    setupSmoothScroll();
});
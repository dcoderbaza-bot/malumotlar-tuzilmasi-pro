// ============================================================================
// CYBER UNIVERSITY — MA'LUMOTLAR TUZILMASI VA ALGORITMLAR
// 8 ta Ma'ruza Mavzusi: Professor Mag'zi, Rangli "Notes" Shakllar va Kodlar
// ============================================================================

window.LECTURES_DATA = [
  // --------------------------------------------------------------------------
  // 01-MAVZU
  // --------------------------------------------------------------------------
  {
    id: 1,
    num: "01",
    title: "Ma'lumotlar turlari va algoritmlari",
    subtitle: "ADT, Axborot vs Ma'lumot, S={D,R}, munosabat turlari, klassifikatsiya va CRUD",
    color: "#4f46e5",
    gradient: "linear-gradient(135deg, #0b5a6e 0%, #312e81 100%)",
    plan: [
      "1. Ma'lumotlarning abstrakt tuzilmalari (ADT)",
      "2. Algoritmlarni ishlab chiqish va tahlil qilish",
      "3. Ma'lumotlar va ularni ifodalash bosqichlari",
      "4. Ma'lumot tuzilmalarining klassifikatsiyasi",
      "5. Ma'lumotlarning sozlangan turlari va amallar (CRUD)"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-6 accent-indigo">
          <div class="note-card-head">
            <h3 class="note-card-title">🧠 1. Abstrakt Ma'lumotlar Turi (ADT)</h3>
            <span class="note-tag">Asosiy tushuncha</span>
          </div>
          <p><strong>Ma'lumotlarning abstrakt tuzilmasi (ADT — Abstract Data Type)</strong> — bu ma'lumotlarning kompyuter xotirasida <em>aynan qanday saqlanishini emas</em>, balki ular bilan <strong>qanday amallar bajarilishi</strong>, bu amallar qanday natija berishi va ulardan foydalanish qoidalarini belgilovchi <strong>mantiqiy-matematik modeldir</strong>.</p>
          <div class="formula-banner">
            <span class="formula-pill pill-blue">Ma'lumot</span>
            <span>=</span>
            <span class="formula-pill pill-green">Axborot</span>
            <span>+</span>
            <span class="formula-pill pill-purple">Shakl</span>
          </div>
          <ul>
            <li><strong>Axborot</strong> (lotincha tushuncha, tasnif) — manbalari va taqdim etilish shaklidan qat'i nazar obyektlar va jarayonlar to'g'risidagi xabarlar.</li>
            <li><strong>Ma'lumot</strong> — obyekt/jarayon mazmunini raqamli, matnli, tovushli, sonli yoki mantiqiy qiymat shaklida aks ettiradi.</li>
          </ul>
          <div class="prof-insight">
            <div class="prof-insight-head">🎓 Professor mag'zi:</div>
            Oddiy qilib aytganda: <b>Ma'lumotlar tuzilmasi</b> — ma'lumotlarni tartibga solish usuli (saqlash shakli va interfeys funksiyalari), <b>Algoritm</b> esa — muammoni hal qilish qadamlari usulidir.
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">📐 2. Ma'lumotlar Tuzilmasi Matematik Modeli</h3>
            <span class="note-tag">S = { D, R }</span>
          </div>
          <p><strong>Ma'lumotlar tuzilmasi (MT)</strong> — tuzilmani tashkil qiluvchi elementlar (D) va ular orasidagi bog'liqlikni ko'rsatib beruvchi munosabatlar (R) majmuasidir.</p>
          <div class="diagram-box">
            <div class="diagram-caption">🔷 Tuzilma formulasi va komponentlari</div>
            <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
              <div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center;">
                <span class="shape-node" style="background:#f59e0b; color:#1e293b;">D — Ma'lumotlar (Elementlar)</span>
                <span class="shape-node" style="background:#10b981;">R — Munosabatlar = (Tartib, Amallar)</span>
              </div>
              <div style="font-size:1.3rem; font-weight:900; color:#0284c7;">⇅ &nbsp; ⇅ &nbsp; ⇅</div>
              <div class="shape-node" style="background:#15803d; width:100%; max-width:340px; text-align:center;">
                Turli xil elementlar va funksional aloqalar
              </div>
              <div style="font-family:var(--font-mono); font-weight:800; font-size:1rem; margin-top:4px;">
                S = { D, R } &nbsp;|&nbsp; R = (Tartib, Amallar)
              </div>
            </div>
          </div>
          <p>Dasturlash tillarida har bir <strong>ma'lumot turi</strong> aniq 3 ta narsani belgilaydi:</p>
          <ol>
            <li>Qabul qilishi mumkin bo'lgan <strong>qiymatlar to'plami</strong>;</li>
            <li>Mumkin bo'lgan <strong>amallar (operatsiyalar) majmuasi</strong>;</li>
            <li>Qiymatlarni xotirada saqlash uchun <strong>tashkil etilganlik tasnifi</strong>.</li>
          </ol>
        </div>

        <!-- Card 3 -->
        <div class="note-card col-12 accent-amber">
          <div class="note-card-head">
            <h3 class="note-card-title">⚙️ 3. Algoritm Tushunchasi, Nazariy va Amaliy Jihatlar</h3>
            <span class="note-tag">Al-Xorazmiy merosi</span>
          </div>
          <p><strong>"Algoritm"</strong> so'zi buyuk alloma <strong>Muhammad al-Xorazmiy</strong> ismining lotincha yozilishi — <em>Algorithmi</em> so'zidan kelib chiqqan. U o'zining <em>"Hind hisobi to'g'risida"</em> kitobida o'nlik sanoq tizimi va arifmetik qoidalarni bayon etgan.</p>
          <div class="formula-banner">
            <span class="formula-pill pill-blue">DASTUR</span>
            <span>=</span>
            <span class="formula-pill pill-red">ALGORITM</span>
            <span>+</span>
            <span class="formula-pill pill-green">MA'LUMOTLAR</span>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:14px; margin-top:12px;">
            <div style="background:var(--emerald-soft); border-left:5px solid var(--emerald); padding:14px; border-radius:12px;">
              <h4 style="margin:0 0 6px; color:var(--emerald);">📘 Nazariy jihat</h4>
              <p style="margin:0; font-size:0.9rem;">Bu vazifa prinsipial jihatdan algoritmik yo'l bilan hal qilinishi mumkinmi? Agar yechimi bo'lsa, katta hajmli ma'lumotlarda aniq yechim olish uchun to'liq muammolar sinfiga mansubligi va nazariy vaqt xarajatlari o'rganiladi.</p>
            </div>
            <div style="background:var(--cyan-soft); border-left:5px solid var(--cyan); padding:14px; border-radius:12px;">
              <h4 style="margin:0 0 6px; color:var(--cyan);">🛠️ Amaliy jihat</h4>
              <p style="margin:0; font-size:0.9rem;">Asimptotik va amaliy tahlil yordamida: cheklangan xotira va input hajmiga mos algoritmni oqilona tanlash, vaqtinchalik baholar olish hamda axborotni qayta ishlash algoritmlarini takomillashtirish.</p>
            </div>
          </div>
          <p style="margin-top:14px;"><strong>Algoritmlarni ifodalashning 3 ta asosiy usuli:</strong></p>
          <div class="shape-flow">
            <div class="shape-node" style="background:#4f46e5;">A) So'z-formulali ko'rinish (matn &amp; matematika)</div>
            <div class="shape-node" style="background:#0891b2;">B) Grafik-chizma (blok-sxema, oqim diagrammasi, jadval)</div>
            <div class="shape-node" style="background:#059669;">C) Dasturiy ko'rinish (Psevdokod &amp; C++/Python kodi)</div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="note-card col-12 accent-cyan">
          <div class="note-card-head">
            <h3 class="note-card-title">🪜 4. Ma'lumotlarni Tasvirlashning 3 Bosqichi (A + B misolida)</h3>
            <span class="note-tag">Abstrakt → Fizik</span>
          </div>
          <div class="shape-flow" style="justify-content:space-between; margin-bottom:14px;">
            <div class="shape-node" style="background:linear-gradient(135deg,#1d4ed8,#1e40af); flex:1; min-width:210px;">
              <strong>1. Abstrakt (Matematik) bosqich</strong><br>
              <span style="font-weight:500; font-size:0.82rem;">Masalaning texnik qo'yilishi va matematik modeli: Kirish: a=2, b=3 → Chiqish: a+b=5</span>
            </div>
            <span class="shape-arrow">➜</span>
            <div class="shape-node" style="background:linear-gradient(135deg,#475569,#334155); flex:1; min-width:210px;">
              <strong>2. Mantiqiy bosqich</strong><br>
              <span style="font-weight:500; font-size:0.82rem;">Muammoni dasturlash tilida (masalan, C++) kod ko'rinishida yozish bosqichi</span>
            </div>
            <span class="shape-arrow">➜</span>
            <div class="shape-node" style="background:linear-gradient(135deg,#15803d,#166534); flex:1; min-width:210px;">
              <strong>3. Fizik (Jismoniy) bosqich</strong><br>
              <span style="font-weight:500; font-size:0.82rem;">Obyektning kompyuter xotirasi yacheykalarida (manzillarda) 2, 3, 5 tarzida akslanishi</span>
            </div>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>C++ — Mantiqiy bosqich namunasi (A + B muammosi)</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>#include &lt;iostream&gt;
using namespace std;
int main() {
    int a, b;
    cout &lt;&lt; "Ikki ta son kiriting: ";
    cin &gt;&gt; a &gt;&gt; b;
    cout &lt;&lt; "Yig'indi = " &lt;&lt; a + b &lt;&lt; '\\n';
    return 0;
}</pre>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="note-card col-12 accent-violet">
          <div class="note-card-head">
            <h3 class="note-card-title">🕸️ 5. Elementlar Orasidagi Munosabatlar (6 xil turi)</h3>
            <span class="note-tag">R to'plam tuzilishi</span>
          </div>
          <div class="rel-grid">
            <div class="rel-card">
              <h4>1️⃣ To'plam (Set)</h4>
              <p style="font-size:0.84rem; margin:0;">Munosabat to'plami bo'sh: <code>R = ∅</code>. Elementlar orasida bog'liqlik yo'q.</p>
              <svg class="rel-svg" viewBox="0 0 180 70">
                <ellipse cx="90" cy="35" rx="75" ry="28" fill="#eef2ff" stroke="#4f46e5" stroke-width="2" stroke-dasharray="4 3"/>
                <circle cx="50" cy="35" r="10" fill="#4f46e5"/><text x="50" y="39" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">A</text>
                <circle cx="90" cy="25" r="10" fill="#0891b2"/><text x="90" y="29" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">B</text>
                <circle cx="130" cy="40" r="10" fill="#10b981"/><text x="130" y="44" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">C</text>
              </svg>
            </div>
            <div class="rel-card">
              <h4>2️⃣ Ketma-ketlik</h4>
              <p style="font-size:0.84rem; margin:0;">Bitta chiziqli munosabat: <code>R={(A,B),(B,C),(C,D)}</code>.</p>
              <svg class="rel-svg" viewBox="0 0 180 70">
                <line x1="25" y1="35" x2="155" y2="35" stroke="#0d9488" stroke-width="2.5"/>
                <circle cx="25" cy="35" r="11" fill="#0d9488"/><text x="25" y="39" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">A</text>
                <circle cx="68" cy="35" r="11" fill="#0d9488"/><text x="68" y="39" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">B</text>
                <circle cx="111" cy="35" r="11" fill="#0d9488"/><text x="111" y="39" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">C</text>
                <circle cx="155" cy="35" r="11" fill="#0d9488"/><text x="155" y="39" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">D</text>
              </svg>
            </div>
            <div class="rel-card">
              <h4>3️⃣ Matritsa</h4>
              <p style="font-size:0.84rem; margin:0;">Ikkita chiziqli munosabat: <b>satr</b> va <b>ustun</b> bo'yicha.</p>
              <svg class="rel-svg" viewBox="0 0 180 70">
                <rect x="45" y="10" width="90" height="50" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
                <line x1="90" y1="10" x2="90" y2="60" stroke="#d97706" stroke-width="1.5"/>
                <line x1="45" y1="35" x2="135" y2="35" stroke="#d97706" stroke-width="1.5"/>
                <text x="67" y="27" text-anchor="middle" font-weight="bold" font-size="12">1</text>
                <text x="112" y="27" text-anchor="middle" font-weight="bold" font-size="12">0</text>
                <text x="67" y="52" text-anchor="middle" font-weight="bold" font-size="12">0</text>
                <text x="112" y="52" text-anchor="middle" font-weight="bold" font-size="12">1</text>
              </svg>
            </div>
            <div class="rel-card">
              <h4>4️⃣ Daraxt (Tree)</h4>
              <p style="font-size:0.84rem; margin:0;">Bitta <b>iyerarxik tartibdagi</b> munosabatdan tashkil topgan.</p>
              <svg class="rel-svg" viewBox="0 0 180 70">
                <line x1="90" y1="18" x2="50" y2="52" stroke="#7c3aed" stroke-width="2"/>
                <line x1="90" y1="18" x2="130" y2="52" stroke="#7c3aed" stroke-width="2"/>
                <circle cx="90" cy="18" r="11" fill="#7c3aed"/><text x="90" y="22" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">A</text>
                <circle cx="50" cy="52" r="11" fill="#a855f7"/><text x="50" y="56" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">B</text>
                <circle cx="130" cy="52" r="11" fill="#a855f7"/><text x="130" y="56" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">C</text>
              </svg>
            </div>
            <div class="rel-card">
              <h4>5️⃣ Graf (Graph)</h4>
              <p style="font-size:0.84rem; margin:0;">Faqatgina bitta <b>binar tartibli</b> munosabatdan iborat.</p>
              <svg class="rel-svg" viewBox="0 0 180 70">
                <line x1="40" y1="20" x2="95" y2="20" stroke="#e11d48" stroke-width="2"/>
                <line x1="95" y1="20" x2="135" y2="48" stroke="#e11d48" stroke-width="2"/>
                <line x1="40" y1="20" x2="65" y2="52" stroke="#e11d48" stroke-width="2"/>
                <line x1="65" y1="52" x2="135" y2="48" stroke="#e11d48" stroke-width="2"/>
                <circle cx="40" cy="20" r="9" fill="#e11d48"/><circle cx="95" cy="20" r="9" fill="#e11d48"/>
                <circle cx="65" cy="52" r="9" fill="#e11d48"/><circle cx="135" cy="48" r="9" fill="#e11d48"/>
              </svg>
            </div>
            <div class="rel-card">
              <h4>6️⃣ Gipergraf (Hypergraph)</h4>
              <p style="font-size:0.84rem; margin:0;"><b>Ikki yoki undan ortiq</b> turli tartibdagi munosabatlardan iborat (qirra 3+ tugunni bog'laydi).</p>
              <svg class="rel-svg" viewBox="0 0 180 70">
                <ellipse cx="68" cy="35" rx="45" ry="22" fill="rgba(16,185,129,0.22)" stroke="#059669" stroke-width="2"/>
                <ellipse cx="115" cy="38" rx="42" ry="20" fill="rgba(245,158,11,0.25)" stroke="#d97706" stroke-width="2"/>
                <circle cx="45" cy="35" r="5" fill="#0f172a"/><circle cx="80" cy="25" r="5" fill="#0f172a"/>
                <circle cx="85" cy="45" r="5" fill="#0f172a"/><circle cx="130" cy="38" r="5" fill="#0f172a"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="note-card col-6 accent-teal">
          <div class="note-card-head">
            <h3 class="note-card-title">🌳 6. Ma'lumot Tuzilmalari Klassifikatsiyasi</h3>
            <span class="note-tag">Atomlar &amp; Molekulalar</span>
          </div>
          <div class="diagram-box">
            <div class="diagram-caption">📊 Foydalanuvchi dasturi va xotirada MT daraxti</div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.84rem;">
              <div style="background:#dbeafe; color:#1e3a8a; padding:10px; border-radius:12px;">
                <strong>Sozlangan MT</strong><br>
                • <b>Atomlar:</b> Bool, Butun, Haqiqiy, Belgili, Ko'rsatkichli<br>
                • <b>Molekulalar (Tuzilmaviy):</b> Massiv, Yozuv, Rekursiv turlar, To'plam
              </div>
              <div style="background:#dcfce7; color:#14532d; padding:10px; border-radius:12px;">
                <strong>Hosil qilingan MT</strong><br>
                • <b>Chiziqli:</b> Jadval, Stek (push/pop), Navbat, Ro'yxat, Dek<br>
                • <b>Chiziqsiz:</b> Daraxtlar, Binar daraxtlar, Graf
              </div>
            </div>
          </div>
          <p><strong>Qo'shimcha klassifikatsiya mezonlari:</strong></p>
          <ul>
            <li><strong>O'zgaruvchanligi bo'yicha:</strong> Statik (massiv, yozuv, vektor), Yarimstatik (stek, navbat), Dinamik (to'liq o'zgaruvchan).</li>
            <li><strong>Tartibliligi bo'yicha:</strong> Chiziqli vs Chiziqsiz.</li>
            <li><strong>Murakkabligi bo'yicha:</strong> Oddiy o'zgaruvchilar → Bir xil turli to'plamlar (massiv) → Har xil turli (yozuv, klass) → Ichki aloqali dinamik (ro'yxat, daraxt, graf).</li>
          </ul>
        </div>

        <!-- Card 7 -->
        <div class="note-card col-6 accent-rose">
          <div class="note-card-head">
            <h3 class="note-card-title">🔄 7. Ma'lumot Tuzilmalari Ustida 4 Asosiy Amal (CRUD)</h3>
            <span class="note-tag">Interfeys amallari</span>
          </div>
          <div class="crud-grid">
            <div class="crud-item" style="background:linear-gradient(135deg,#7c3aed,#6d28d9);">
              <span class="crud-letter">C</span>
              <strong>Create (Yaratish)</strong>
              <span style="font-size:0.8rem; opacity:0.92;">Xotiradan joy ajratish (o'zgaruvchi e'lon qilinganda).</span>
            </div>
            <div class="crud-item" style="background:linear-gradient(135deg,#ea580c,#c2410c);">
              <span class="crud-letter">R</span>
              <strong>Read / Tanlash (Ruxsat)</strong>
              <span style="font-size:0.8rem; opacity:0.92;">Xotira maydonidan qiymatni o'qish va ishlatish.</span>
            </div>
            <div class="crud-item" style="background:linear-gradient(135deg,#0284c7,#0369a1);">
              <span class="crud-letter">U</span>
              <strong>Update (Yangilash)</strong>
              <span style="font-size:0.8rem; opacity:0.92;">Tenglashtirish operatori (<code>=</code>) bilan qiymatni o'zgartirish.</span>
            </div>
            <div class="crud-item" style="background:linear-gradient(135deg,#16a34a,#15803d);">
              <span class="crud-letter">D</span>
              <strong>Delete (O'chirish)</strong>
              <span style="font-size:0.8rem; opacity:0.92;">Xotira maydonini bo'shatish (dastur yopilganda yoki <code>delete</code>).</span>
            </div>
          </div>
          <div class="prof-insight rose" style="margin-top:14px;">
            <div class="prof-insight-head">💡 Eslab qoling!</div>
            Har qanday ma'lumotlar tuzilmasini o'rganganingizda (Massiv, Stek, Daraxt, Hash Table) avvalo undagi <b>CRUD amallari necha vaqt (<code>O(...)</code>) olishini</b> so'rang!
          </div>
        </div>
      </div>
    `
  },

  // --------------------------------------------------------------------------
  // 02-MAVZU
  // --------------------------------------------------------------------------
  {
    id: 2,
    num: "02",
    title: "Ma'lumotning xotirada joylashuvi va turlari",
    subtitle: "Heap/Stack xotira, int/float/bool/pointer, struct, union, vector va set",
    color: "#059669",
    gradient: "linear-gradient(135deg, #065f46 0%, #0e7490 100%)",
    plan: [
      "1. Ma'lumotlarni xotirada joylashuvi (Code, Global, Stack, Heap)",
      "2. Standart turlar (int, float, bool, char, pointer)",
      "3. Foydalanuvchi turlari (enum, struct, union, class, object)",
      "4. Massiv, Vektor, Yozuv, Jadval va To'plam (set)"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">💾 1. Kompyuter Xotirasining 4 Qatlami</h3>
            <span class="note-tag">RAM Arxitekturasi</span>
          </div>
          <div class="diagram-box">
            <div class="diagram-caption">🧱 Dastur ishga tushganda xotira taqsimoti</div>
            <div class="mem-stack-layout">
              <div class="mem-seg mem-heap"><strong>Heap</strong><span>Dinamik ajratiladigan erkin xotira (<code>new</code> / <code>delete</code>)</span></div>
              <div class="mem-seg mem-stack"><strong>Stack</strong><span>Lokal o'zgaruvchilar va funksiya chaqiruvlari (LIFO)</span></div>
              <div class="mem-seg mem-global"><strong>Global (Static)</strong><span>Global va statik o'zgaruvchilar (dastur tugaguncha)</span></div>
              <div class="mem-seg mem-code"><strong>Program Code</strong><span>Dasturning mashina buyruqlari (kod segmenti)</span></div>
            </div>
          </div>
          <div class="prof-insight teal">
            <div class="prof-insight-head">🎓 Professor mag'zi:</div>
            <b>Stack</b> tez va avtomatik tozalanadi (lekin hajmi cheklangan). <b>Heap</b> katta va dinamik o'lchamli ma'lumotlar uchun mo'ljallangan, lekin uni dasturchi o'zi boshqarishi kerak!
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-cyan">
          <div class="note-card-head">
            <h3 class="note-card-title">📏 2. Standart va Hosilaviy Ma'lumot Turlari</h3>
            <span class="note-tag">Xotira hajmlari</span>
          </div>
          <div class="styled-table-wrap">
            <table class="styled-table">
              <thead><tr><th>Tur (Data type)</th><th>Ma'nosi</th><th>Xotira hajmi (bayt)</th></tr></thead>
              <tbody>
                <tr><td><code>int</code></td><td>Butun son (integer)</td><td><strong>2 / 4 bayt</strong></td></tr>
                <tr><td><code>float</code></td><td>Haqiqiy son (floating-point)</td><td><strong>4 bayt</strong></td></tr>
                <tr><td><code>double</code></td><td>Ikki karra aniqlik (double)</td><td><strong>8 bayt</strong></td></tr>
                <tr><td><code>char</code></td><td>Belgili (character)</td><td><strong>1 bayt</strong></td></tr>
                <tr><td><code>bool</code></td><td>Mantiqiy (Boolean: true/false)</td><td><strong>1 bayt</strong></td></tr>
                <tr><td><code>void</code></td><td>Bo'sh tur (empty)</td><td><strong>1 bayt</strong></td></tr>
                <tr><td><code>*</code> (Pointer)</td><td>Xotira manzili (adres)</td><td><strong>4 bayt</strong> (32-bit) / 8 bayt</td></tr>
              </tbody>
            </table>
          </div>
          <p style="font-size:0.88rem; margin-bottom:0;"><strong>Turlar daraxti:</strong> Basic (<code>int, float, double, char, bool, void</code>) • Derived (<code>array, pointer, functions</code>) • User Defined (<code>structure, union, enum, class, object</code>).</p>
        </div>

        <!-- Card 3 -->
        <div class="note-card col-6 accent-amber">
          <div class="note-card-head">
            <h3 class="note-card-title">🔢 3. Butun (INT) va Haqiqiy (FLOAT) Sonlar Formati</h3>
            <span class="note-tag">Bitlar tuzilishi</span>
          </div>
          <p><strong>1) Butun son turi:</strong> <em>N</em> ta razryadda (qo'shimcha kodda) saqlanadi:</p>
          <ul>
            <li><strong>Ishorasiz (<code>unsigned</code>):</strong> oraliq <code>0 .. 2<sup>N</sup> - 1</code></li>
            <li><strong>Ishorali (<code>signed</code>):</strong> oraliq <code>-2<sup>N-1</sup> .. 2<sup>N-1</sup> - 1</code></li>
          </ul>
          <div class="bit-row">
            <div class="bit-cell bit-val">SON (Ishorasiz: 0 .. 2ᴺ - 1)</div>
          </div>
          <div class="bit-row">
            <div class="bit-cell bit-sign">ishora (1 bit)</div>
            <div class="bit-cell bit-val">SON (Ishorali: -2ᴺ⁻¹ .. 2ᴺ⁻¹ - 1)</div>
          </div>
          <p style="font-size:0.85rem;">Sintaksis: <code>[signed|unsigned] short | long | int | long long &lt;nom&gt;;</code></p>
          <hr style="border:none; border-top:1px dashed var(--border-color); margin:12px 0;">
          <p><strong>2) Haqiqiy son (Qo'zg'aluvchan nuqta):</strong> Yarimlogarifmik shaklda <code>x = ±M · q<sup>±P</sup></code> saqlanadi. Masalan: <code>937,56 = 93756 · 10<sup>-2</sup> = 0,93756 · 10<sup>3</sup></code>.</p>
          <div class="bit-row">
            <div class="bit-cell bit-mantissa-sign">Mantissa ishorasi</div>
            <div class="bit-cell bit-mantissa">Mantissa (M)</div>
            <div class="bit-cell bit-exp-sign">Tartib ishorasi</div>
            <div class="bit-cell bit-exp">Tartib (P)</div>
          </div>
          <p style="font-size:0.85rem; margin:0;">Sintaksis: <code>float | double | long double &lt;nom&gt;;</code></p>
        </div>

        <!-- Card 4 -->
        <div class="note-card col-6 accent-violet">
          <div class="note-card-head">
            <h3 class="note-card-title">🔗 4. Mantiqiy (bool), Ko'rsatkich (*), Birlashma (union)</h3>
            <span class="note-tag">Xotirani boshqarish</span>
          </div>
          <ul>
            <li><strong>Mantiqiy tur (<code>bool</code>):</strong> <code>true (1)</code> va <code>false (0)</code>. Amallar: kon'yunksiya (VA), diz'yunksiya (YOKI), inkor (YO'Q), implikatsiya, ekvivalentlik.</li>
            <li><strong>Ko'rsatkich (<code>*</code> Pointer):</strong> Ma'lumotning o'zini emas, balki uning <strong>xotiradagi manzilini (adresini)</strong> saqlaydi (atigi 4 bayt joyda juda katta obyektni ko'rsatadi).</li>
            <li><strong>Birlashma (<code>union</code>):</strong> Strukturaga o'xshaydi, lekin e'lon qilingan barcha maydonlar <strong>xotiraning bitta hududini</strong> egallaydi (bir-birini qoplaydi). Bir vaqtda faqat <em>bitta elementga</em> murojaat qilinadi!</li>
          </ul>
          <div class="code-wrap">
            <div class="code-head"><span>C++ — Union va Class sintaksisi</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>union myUnion {
    int i;
    float f;
    char str[20]; // Xotira hajmi eng kattasi = 20 bayt!
} U_1;</pre>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="note-card col-12 accent-indigo">
          <div class="note-card-head">
            <h3 class="note-card-title">📦 5. Massiv vs Vektor, Yozuv (struct), Jadval va To'plam (set)</h3>
            <span class="note-tag">Taqqoslash</span>
          </div>
          <div class="styled-table-wrap">
            <table class="styled-table">
              <thead><tr><th>Tuzilma</th><th>Tarkibi va tartibi</th><th>Xotira / O'lcham xususiyati</th><th>C++ misol</th></tr></thead>
              <tbody>
                <tr><td><strong>Massiv (Array)</strong></td><td>Bir xil turdagi elementlarning tartibli ketma-ketligi</td><td>O'lchami oldindan ma'lum (statik)</td><td><code>int a[12]; int m[2][3];</code></td></tr>
                <tr><td><strong>Vektor (Vector)</strong></td><td>Bir xil turdagi elementlarning dinamik ketma-ketligi</td><td>Uzunligi oldindan berilmaydi, dastur davomida o'zgaradi</td><td><code>vector&lt;int&gt; v;</code></td></tr>
                <tr><td><strong>Yozuv (Struct)</strong></td><td>Turli turdagi maydonlarning tartibli ketma-ketligi</td><td>Xotira hajmi = barcha maydonlar hajmi yig'indisi</td><td><code>struct TALABA { int ID; char fio[30]; };</code></td></tr>
                <tr><td><strong>Jadval (Table)</strong></td><td>Yozuvlarning chekli majmuasi</td><td>Jadval elementi = Yozuv</td><td><code>TALABA guruh[5];</code></td></tr>
                <tr><td><strong>To'plam (Set)</strong></td><td>Bir xil turdagi elementlarning tartibsiz majmuasi</td><td>Elementlar <strong>takrorlanmas (noyob)</strong> bo'ladi</td><td><code>set&lt;int&gt; s;</code></td></tr>
              </tbody>
            </table>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>C++ — Jadval (Yozuvlar massivi) bilan ishlash</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>struct TALABA { int ID; char fio[30]; };
TALABA guruh[5];
for(int i = 0; i &lt; 5; i++) {
    guruh[i].ID = i + 1;
    cin &gt;&gt; guruh[i].fio;
}</pre>
          </div>
        </div>
      </div>
    `
  },

  // --------------------------------------------------------------------------
  // 03-MAVZU
  // --------------------------------------------------------------------------
  {
    id: 3,
    num: "03",
    title: "Massivlar, Dinamik Massivlar va STL Konteynerlar",
    subtitle: "new/delete operatorlari, STL kutubxonasi, 5 xil iterator va metodlar",
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0369a1 0%, #0f766e 100%)",
    plan: [
      "1. Statik va Dinamik massivlar (new / delete[])",
      "2. 1D va 2D dinamik massivlar yaratish",
      "3. STL (Standard Template Library) konteynerlari",
      "4. Iteratorlarning 5 turi va metodlari"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-12 accent-cyan">
          <div class="note-card-head">
            <h3 class="note-card-title">📊 1. Statik Massiv vs Dinamik Massiv</h3>
            <span class="note-tag">Stack vs Heap</span>
          </div>
          <div class="diagram-box">
            <div class="diagram-caption">🔍 Xotirada joylashuv farqi</div>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
              <div style="background:var(--bg-surface); border:1.5px solid var(--emerald); border-radius:14px; padding:14px;">
                <strong style="color:var(--emerald);">Static Array: <code>int a[5] = {1,2,3,4,5};</code></strong>
                <p style="font-size:0.84rem;">O'lchami kompilyatsiya bosqichida aniqlanadi, o'zgarmaydi. Dastur yopilganda xotira avtomatik bo'shatiladi.</p>
                <div class="array-visual">
                  <div class="arr-cell"><div class="arr-val highlight">1</div><span class="arr-idx">0</span></div>
                  <div class="arr-cell"><div class="arr-val highlight">2</div><span class="arr-idx">1</span></div>
                  <div class="arr-cell"><div class="arr-val highlight">3</div><span class="arr-idx">2</span></div>
                  <div class="arr-cell"><div class="arr-val highlight">4</div><span class="arr-idx">3</span></div>
                  <div class="arr-cell"><div class="arr-val highlight">5</div><span class="arr-idx">4</span></div>
                </div>
              </div>
              <div style="background:var(--bg-surface); border:1.5px solid var(--indigo); border-radius:14px; padding:14px;">
                <strong style="color:var(--indigo);">Dynamic Array: <code>int *a = new int[5];</code></strong>
                <p style="font-size:0.84rem;">Dastur bajarilishi vaqtida <code>new</code> bilan ajratiladi. Ish tugagach albatta <code>delete [] a;</code> bilan o'chirilishi shart!</p>
                <div class="array-visual">
                  <div class="arr-cell"><div class="arr-val pivot">*a</div><span class="arr-idx">ptr</span></div>
                  <span style="font-weight:900; font-size:1.3rem;">➜</span>
                  <div class="arr-cell"><div class="arr-val">0</div><span class="arr-idx">0</span></div>
                  <div class="arr-cell"><div class="arr-val">0</div><span class="arr-idx">1</span></div>
                  <div class="arr-cell"><div class="arr-val">0</div><span class="arr-idx">2</span></div>
                  <div class="arr-cell"><div class="arr-val">0</div><span class="arr-idx">3</span></div>
                  <div class="arr-cell"><div class="arr-val">0</div><span class="arr-idx">4</span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>C++ — 1D va 2D Statik/Dinamik massivlarni e'lon qilish va o'chirish</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>// 1) Statik massivlar
int ARRAY[10];
int MASSIV[5][5] = {};

// 2) Dinamik massivlar (Heap)
int *A = new int[10];
int **B = new int*[5];
for (int i = 0; i &lt; 5; i++)
    B[i] = new int[5]();

// Xotirani tozalash:
delete [] A;
for (int i = 0; i &lt; 5; i++) delete [] B[i];
delete [] B;</pre>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-indigo">
          <div class="note-card-head">
            <h3 class="note-card-title">🧰 2. STL Kutubxonasi va Konteynerlar</h3>
            <span class="note-tag">3 ta yadro element</span>
          </div>
          <p><strong>STL (Standard Template Library)</strong> yadrosi 3 ta elementdan iborat:</p>
          <div class="shape-flow" style="margin-bottom:12px;">
            <span class="shape-node" style="background:#4f46e5;">1. Konteynerlar</span>
            <span class="shape-node" style="background:#059669;">2. Algoritmlar</span>
            <span class="shape-node" style="background:#d97706;">3. Iteratorlar</span>
          </div>
          <ul>
            <li><strong>Chiziqli (Asosiy):</strong> <code>array</code>, <code>vector</code> (dinamik massiv), <code>deque</code> (ikki tomonlama navbat), <code>list</code> (ikki bog'lamli ro'yxat), <code>forward_list</code>, <code>string</code>.</li>
            <li><strong>Assotsiativ:</strong> <code>set</code> (noyob elementlar), <code>multiset</code> (takrorlanuvchi to'plam), <code>map</code> (kalit/qiymat juftligi).</li>
            <li><strong>Hosila konteynerlar (Adapterlar):</strong> <code>stack</code> (stek — LIFO), <code>queue</code> (navbat — FIFO), <code>priority_queue</code> (ustuvor navbat).</li>
          </ul>
          <div class="prof-insight">
            <div class="prof-insight-head">🎓 Professor mag'zi:</div>
            <code>array, vector, deque</code> konteynerlarida istalgan elementga <b>indeks orqali</b> (<code>O(1)</code>) murojaat qilish mumkin; <code>stack</code> va <code>queue</code> da esa faqat ma'lum chekka elementlarga ruxsat bor!
          </div>
        </div>

        <!-- Card 3 -->
        <div class="note-card col-6 accent-violet">
          <div class="note-card-head">
            <h3 class="note-card-title">🧭 3. Iteratorlar, Turlari va Metodlari</h3>
            <span class="note-tag">5 xil iterator</span>
          </div>
          <p><strong>Iteratorlar</strong> — konteyner elementlariga ko'rsatkichlar kabi ruxsat beruvchi obyektlar (<code>*it</code>, <code>++it</code>, <code>--it</code> amallari ishlaydi).</p>
          <ol style="font-size:0.9rem;">
            <li><code>input_iterator</code> — Kiritish (faqat o'qish, oldinga)</li>
            <li><code>output_iterator</code> — Chiqarish (faqat yozish, oldinga)</li>
            <li><code>forward_iterator</code> — Bitta yo'nalishdagi</li>
            <li><code>bidirectional_iterator</code> — Ikki yo'nalishdagi (<code>++</code> va <code>--</code>)</li>
            <li><code>random_access_iterator</code> — Ixtiyoriy ruxsatga ega (eng kuchlisi: <code>it + 5</code>)</li>
          </ol>
          <p style="font-size:0.88rem;"><strong>Asosiy metodlar:</strong> <code>begin()</code>, <code>end()</code> (oxiridan keyingi o'rin), <code>rbegin()</code>, <code>rend()</code>, <code>empty()</code>, <code>size()</code>, <code>clear()</code> (<code>array</code> dan tashqari).</p>
          <div class="code-wrap">
            <div class="code-head"><span>C++ — Vector, Iterator va sort()</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>vector&lt;string&gt; names = {"Peter", "Ivan", "John"};
sort(names.begin(), names.end());
for (auto x : names) cout &lt;&lt; x &lt;&lt; endl; // Ivan, John, Peter</pre>
          </div>
        </div>
      </div>
    `
  },

  // --------------------------------------------------------------------------
  // 04-MAVZU
  // --------------------------------------------------------------------------
  {
    id: 4,
    num: "04",
    title: "Algoritmlarda rekursiya tushunchasi",
    subtitle: "Base Case, Recursive Step, Call Stack (LIFO), Stack Frame, Fibonacci daraxti",
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #5b21b6 0%, #be185d 100%)",
    plan: [
      "1. Rekursiya tushunchasi va ikki tayanchi (Base Case & Recursive Step)",
      "2. Call Stack (LIFO) va Stack Frame (Activation Record)",
      "3. Rekursiv chaqiruvlar daraxti (Fibonacci misoli)",
      "4. Rekursiya chuqurligi, Stack Overflow va turlari"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-6 accent-violet">
          <div class="note-card-head">
            <h3 class="note-card-title">🪞 1. Rekursiya va Uning Ikki Tayanchi</h3>
            <span class="note-tag">O'z-o'zini chaqirish</span>
          </div>
          <p><strong>Rekursiya (Recursion)</strong> — funksiyaning o'zini bevosita yoki bilvosita qayta chaqirish usuli. Asosiy g'oya: <em>muammoni o'zining kichikroq nusxasiga aylantirish</em>.</p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:10px 0;">
            <div style="background:var(--emerald-soft); border:1.5px solid var(--emerald); padding:12px; border-radius:12px;">
              <strong style="color:var(--emerald);">1. Bazaviy holat (Base Case)</strong>
              <p style="font-size:0.84rem; margin:4px 0 0;">Rekursiyani to'xtatadigan shart. U bo'lmasa funksiya cheksiz chaqiriladi!</p>
            </div>
            <div style="background:var(--cyan-soft); border:1.5px solid var(--cyan); padding:12px; border-radius:12px;">
              <strong style="color:var(--cyan);">2. Rekursiv qadam (Recursive Step)</strong>
              <p style="font-size:0.84rem; margin:4px 0 0;">Muammoni kichikroq holatga o'tkazadi va o'zini qayta chaqiradi.</p>
            </div>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>C++ — factorial(n) misoli</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>int factorial(int n) {
    if (n &lt;= 1) return 1;           // Base Case
    return n * factorial(n - 1);    // Recursive Step
}</pre>
          </div>
          <div class="prof-insight violet">
            <div class="prof-insight-head">🎓 Chaqiruv → Qaytish mexanizmi:</div>
            <code>factorial(4)</code> → pastga tushadi: <code>4*f(3)</code> → <code>3*f(2)</code> → <code>2*f(1)</code> → <b>Base Case = 1</b> → yuqoriga qaytadi: <code>2*1=2</code> → <code>3*2=6</code> → <code>4*6=24</code>.
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">📚 2. Call Stack (LIFO) va Stack Frame</h3>
            <span class="note-tag">Xotira mexanizmi</span>
          </div>
          <p><strong>Call Stack</strong> — <strong>LIFO</strong> (Last In, First Out — Oxirgi kirgan, birinchi chiqadi) qoidasi bo'yicha ishlaydigan stek. Har bir chaqiruv xotirada alohida <strong>Stack Frame (Activation Record)</strong> yaratadi:</p>
          <div class="callstack-wrap">
            <div>
              <p style="font-size:0.86rem; font-weight:700; margin:0 0 6px;">Stack Frame nimalarni saqlaydi?</p>
              <ul style="font-size:0.85rem; padding-left:18px;">
                <li>Funksiya parametrlari (<code>n</code>)</li>
                <li>Lokal o'zgaruvchilar</li>
                <li>Qaytish manzili (<em>Return Address</em>)</li>
                <li>Oraliq holat</li>
              </ul>
              <p style="font-size:0.82rem; color:var(--rose); font-weight:700;">Chuqurlik ↑ → Stack Frame ↑ → Space Complexity O(n)</p>
            </div>
            <div>
              <div style="font-size:0.78rem; font-weight:800; color:var(--emerald); text-align:center;">CALL STACK (TOP ↑)</div>
              <div class="stack-box">
                <div class="stack-frame top"><span>factorial(1)</span><span>n = 1 (TOP)</span></div>
                <div class="stack-frame"><span>factorial(2)</span><span>n = 2</span></div>
                <div class="stack-frame"><span>factorial(3)</span><span>n = 3</span></div>
                <div class="stack-frame"><span>factorial(4)</span><span>n = 4</span></div>
                <div class="stack-frame" style="background:var(--bg-subtle);"><span>main()</span><span>entry</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="note-card col-12 accent-rose">
          <div class="note-card-head">
            <h3 class="note-card-title">🌲 3. Rekursiv Chaqiruvlar Daraxti va Chuqurlik (Stack Overflow)</h3>
            <span class="note-tag">Naive Fibonacci O(2ⁿ)</span>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1.2fr; gap:18px; align-items:center;">
            <div>
              <p>Bir funksiya ichidan 2 ta rekursiv chaqiruv chiqsa, daraxt hosil bo'ladi. Masalan, <code>fib(4)</code> da <code>fib(2)</code> va <code>fib(1)</code> qayta-qayta hisoblanadi:</p>
              <div class="code-wrap">
                <div class="code-head"><span>C++ — Naive Fibonacci</span><button class="copy-code-btn">Nusxa olish</button></div>
                <pre>int fib(int n) {
    if (n &lt;= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
// Time: O(2^n) — juda sekin!
// Space: O(n) — stek chuqurligi</pre>
              </div>
              <p style="font-size:0.88rem;"><strong>Rekursiya turlari:</strong> 1) Chiziqli (Linear), 2) Takrorlanuvchi / Quyruq (Tail), 3) Kaskadli / Daraxtsimon (Tree), 4) Qaytaruvchi (Backtracking), shuningdek Direct, Indirect va Mutual.</p>
            </div>
            <div class="diagram-box" style="text-align:center;">
              <div class="diagram-caption">🌳 fib(4) Chaqiruvlar daraxti</div>
              <svg viewBox="0 0 360 190" style="width:100%; max-width:420px; height:auto;">
                <line x1="180" y1="25" x2="105" y2="70" stroke="#64748b" stroke-width="2"/>
                <line x1="180" y1="25" x2="265" y2="70" stroke="#64748b" stroke-width="2"/>
                <line x1="105" y1="70" x2="60" y2="118" stroke="#64748b" stroke-width="2"/>
                <line x1="105" y1="70" x2="148" y2="118" stroke="#64748b" stroke-width="2"/>
                <line x1="265" y1="70" x2="225" y2="118" stroke="#64748b" stroke-width="2"/>
                <line x1="265" y1="70" x2="305" y2="118" stroke="#64748b" stroke-width="2"/>
                <line x1="60" y1="118" x2="35" y2="164" stroke="#64748b" stroke-width="2"/>
                <line x1="60" y1="118" x2="88" y2="164" stroke="#64748b" stroke-width="2"/>

                <rect x="145" y="10" width="70" height="28" rx="7" fill="#4f46e5"/><text x="180" y="28" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">f(4)=3</text>
                <rect x="70" y="56" width="70" height="28" rx="7" fill="#0891b2"/><text x="105" y="74" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">f(3)=2</text>
                <rect x="230" y="56" width="70" height="28" rx="7" fill="#f59e0b"/><text x="265" y="74" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">f(2)=1</text>

                <rect x="25" y="104" width="70" height="28" rx="7" fill="#f59e0b"/><text x="60" y="122" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">f(2)=1</text>
                <rect x="115" y="104" width="66" height="28" rx="7" fill="#10b981"/><text x="148" y="122" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">f(1)=1</text>
                <rect x="192" y="104" width="66" height="28" rx="7" fill="#10b981"/><text x="225" y="122" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">f(1)=1</text>
                <rect x="272" y="104" width="66" height="28" rx="7" fill="#10b981"/><text x="305" y="122" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">f(0)=0</text>

                <rect x="5" y="150" width="60" height="26" rx="7" fill="#10b981"/><text x="35" y="167" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">f(1)=1</text>
                <rect x="70" y="150" width="60" height="26" rx="7" fill="#10b981"/><text x="100" y="167" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">f(0)=0</text>
              </svg>
              <p style="font-size:0.8rem; margin:6px 0 0; color:var(--rose); font-weight:700;">⚠️ Chuqurlik juda katta bo'lsa — Stack Overflow (stek to'lib toshishi) yuz beradi! Agar masalani sikl bilan yechish oson bo'lsa, iterativ usul afzal.</p>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // --------------------------------------------------------------------------
  // 05-MAVZU
  // --------------------------------------------------------------------------
  {
    id: 5,
    num: "05",
    title: "Ma'lumotlarni massivlarda qidirish algoritmlari",
    subtitle: "Linear Search, Binary Search, Jump Search, Hash Search va 1D/2D/3D massivlar",
    color: "#0d9488",
    gradient: "linear-gradient(135deg, #0f766e 0%, #1d4ed8 100%)",
    plan: [
      "1. Chiziqli qidiruv (Linear Search) — Iterativ, Rekursiv va Chegaraviy holatlar",
      "2. Binar qidiruv (Binary Search) — O(log n)",
      "3. Sakrab qidiruv (Jump Search) — √n qadam",
      "4. Xeshlash yordamida qidiruv (Hash Search) — O(1)",
      "5. Ko'p o'lchovli massivlarda (1D, 2D, 3D) qidirish"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-6 accent-teal">
          <div class="note-card-head">
            <h3 class="note-card-title">🔎 1. Chiziqli Qidiruv (Linear Search)</h3>
            <span class="note-tag">O(n) — Tartib shart emas</span>
          </div>
          <p>Birinchi elementdan oxirgi elementgacha ketma-ket tekshiradi. Topilsa indeksini, topilmasa <code>-1</code> qaytaradi.</p>
          <div class="array-visual">
            <div class="arr-cell"><div class="arr-val">10</div><span class="arr-idx">0</span></div>
            <div class="arr-cell"><div class="arr-val">50</div><span class="arr-idx">1</span></div>
            <div class="arr-cell"><div class="arr-val">30</div><span class="arr-idx">2</span></div>
            <div class="arr-cell"><div class="arr-val">70</div><span class="arr-idx">3</span></div>
            <div class="arr-cell"><div class="arr-val highlight">20</div><span class="arr-idx">4 ✓</span></div>
            <div class="arr-cell"><div class="arr-val">90</div><span class="arr-idx">5</span></div>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>Python — Iterativ va Rekursiv Linear Search</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre># Iterativ usul:
def linear_search(arr, key):
    for i in range(len(arr)):
        if arr[i] == key:
            return i
    return -1

# Rekursiv usul (oxiridan boshlab tekshiradi):
def rec_search(arr, n, x):
    if n == 0: return -1
    if arr[n - 1] == x: return n - 1
    return rec_search(arr, n - 1, x)</pre>
          </div>
          <div class="prof-insight teal">
            <div class="prof-insight-head">🛡️ Chegaraviy holatlar (Boundary Cases):</div>
            Algoritmni albatta <code>[]</code> (bo'sh massiv), <code>[10]</code> (1 ta element), oxirgi elementni izlash va mavjud bo'lmagan element (<code>-1</code>) holatlarida tekshiring!
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">⚡ 2. Binar Qidiruv (Binary Search)</h3>
            <span class="note-tag">O(log n) — Tartiblangan!</span>
          </div>
          <p><strong>Sharti:</strong> Massiv <strong>albatta tartiblangan</strong> bo'lishi kerak! Har qadamda o'rtadagi element (<code>mid = (L + R) // 2</code>) tekshiriladi va qidiruv oralig'i <strong>2 barobar qisqaradi</strong>.</p>
          <div class="diagram-box">
            <div class="diagram-caption">🎯 23 sonini izlash: L=0, R=9 → mid=4 (16) → L=5, R=9 → mid=7 (56) → L=5, R=6 → mid=5 (23✓)</div>
            <div class="array-visual">
              <div class="arr-cell"><div class="arr-val">2</div><span class="arr-idx">0</span></div>
              <div class="arr-cell"><div class="arr-val">5</div><span class="arr-idx">1</span></div>
              <div class="arr-cell"><div class="arr-val">8</div><span class="arr-idx">2</span></div>
              <div class="arr-cell"><div class="arr-val">12</div><span class="arr-idx">3</span></div>
              <div class="arr-cell"><div class="arr-val compare">16</div><span class="arr-idx">4 (M)</span></div>
              <div class="arr-cell"><div class="arr-val highlight">23</div><span class="arr-idx">5 ✓</span></div>
              <div class="arr-cell"><div class="arr-val">38</div><span class="arr-idx">6</span></div>
              <div class="arr-cell"><div class="arr-val compare">56</div><span class="arr-idx">7 (M)</span></div>
              <div class="arr-cell"><div class="arr-val">72</div><span class="arr-idx">8</span></div>
              <div class="arr-cell"><div class="arr-val">91</div><span class="arr-idx">9</span></div>
            </div>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>Python — Binary Search</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>def binary_search(arr, key):
    L, R = 0, len(arr) - 1
    while L &lt;= R:
        mid = (L + R) // 2
        if arr[mid] == key: return mid
        elif arr[mid] &lt; key: L = mid + 1
        else: R = mid - 1
    return -1</pre>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="note-card col-6 accent-amber">
          <div class="note-card-head">
            <h3 class="note-card-title">🦘 3. Sakrab Qidiruv (Jump Search)</h3>
            <span class="note-tag">O(√n) — Blok qadami</span>
          </div>
          <p>Tartiblangan massivda elementlarni bittalab emas, balki optimal <strong>qadam = ⌊√n⌋</strong> (masalan, <code>n = 9</code> bo'lsa <code>qadam = 3</code>) bilan bloklar bo'yicha sakrab o'tadi. Kerakli blok topilgach, uning ichida chiziqli qidiradi.</p>
          <div class="code-wrap">
            <div class="code-head"><span>Python — Jump Search (n=9, qadam=3)</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>import math
def jump_search(arr, key):
    n = len(arr)
    qadam = int(math.sqrt(n))
    boshlanish, tugash = 0, qadam
    while boshlanish &lt; n and arr[min(tugash, n) - 1] &lt; key:
        boshlanish = tugash
        tugash += qadam
        if boshlanish &gt;= n: return -1
    for i in range(boshlanish, min(tugash, n)):
        if arr[i] == key: return i
    return -1</pre>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="note-card col-6 accent-indigo">
          <div class="note-card-head">
            <h3 class="note-card-title">🔑 4. Xeshlash Yordamida Qidiruv (Hash Search)</h3>
            <span class="note-tag">O(1) — Eng tezkor</span>
          </div>
          <p><strong>Maqsadi:</strong> kerakli elementni o'rtacha holatda <strong>bir amal vaqtda — O(1)</strong> topish. Maxsus <em>Xesh-funksiya</em> kalit qiymatidan xotiradagi indeksni darhol hisoblab beradi (kutubxonadagi raqamlangan javon kabi).</p>
          <div class="shape-flow" style="justify-content:center; margin:12px 0;">
            <span class="shape-node" style="background:#059669;">Key (102)</span>
            <span class="shape-arrow">➜</span>
            <span class="shape-node" style="background:#7c3aed;">Hash Function</span>
            <span class="shape-arrow">➜</span>
            <span class="shape-node" style="background:#0284c7;">Hash Table → "Vali"</span>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>Python — Dictionary (Hash Table)</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>talabalar = {101: "Ali", 102: "Vali", 103: "Madina"}
kalit = 102
print("Topildi:", talabalar.get(kalit, "Topilmadi"))</pre>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="note-card col-12 accent-coral">
          <div class="note-card-head">
            <h3 class="note-card-title">🧊 5. Ko'p O'lchovli Massivlarda Qidirish (1D, 2D, 3D)</h3>
            <span class="note-tag">Shape &amp; Ichma-ich sikl</span>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px;">
            <div style="background:var(--cyan-soft); padding:13px; border-radius:12px; border:1px solid var(--cyan);">
              <strong>1D Massiv — Shape: (3)</strong>
              <p style="font-size:0.84rem; margin:4px 0;">Bitta qator, bitta indeks <code>arr[i]</code>, <b>1 ta <code>for</code> sikli</b>.</p>
            </div>
            <div style="background:var(--indigo-soft); padding:13px; border-radius:12px; border:1px solid var(--indigo);">
              <strong>2D Massiv — Shape: (2, 3)</strong>
              <p style="font-size:0.84rem; margin:4px 0;">Jadval = <code>qator + ustun</code>, <code>baholar[i][j]</code>, <b>2 ta <code>for</code> sikli</b>.</p>
            </div>
            <div style="background:var(--violet-soft); padding:13px; border-radius:12px; border:1px solid var(--violet);">
              <strong>3D Massiv — Shape: (2, 3, 3)</strong>
              <p style="font-size:0.84rem; margin:4px 0;"><code>jadval + qator + ustun</code> (guruh, talaba, fan), <b>3 ta ichma-ich <code>for</code></b>.</p>
            </div>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>Python — 3D Massivda (Guruh, Talaba, Fan) 90 ball olganlarni topish</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>baholar = [ [[70, 80, 90], [85, 95, 75]], [[90, 75, 80], [70, 90, 85]] ]
for i in range(len(baholar)):
    for j in range(len(baholar[i])):
        for k in range(len(baholar[i][j])):
            if baholar[i][j][k] == 90:
                print(f"{i+1}-guruh, {j+1}-talaba, {k+1}-fandan 90 ball olgan")</pre>
          </div>
        </div>
      </div>
    `
  },

  // --------------------------------------------------------------------------
  // 06-MAVZU
  // --------------------------------------------------------------------------
  {
    id: 6,
    num: "06",
    title: "Sodda va taqqoslanmaydigan saralash algoritmlari",
    subtitle: "Bubble, Selection, Insertion, Pancake Sort vs Radix & Counting Sort, Stability",
    color: "#ea580c",
    gradient: "linear-gradient(135deg, #c2410c 0%, #be123c 100%)",
    plan: [
      "1. Saralash turlari va Barqarorlik (Stability) tushunchasi",
      "2. Taqqoslanmaydigan algoritmlar: Radix Sort & Counting Sort",
      "3. Kvadratik sodda algoritmlar: Bubble, Selection, Insertion, Pancake",
      "4. CPU (Sequential) vs GPU (Parallel) zamonaviy saralash"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-12 accent-coral">
          <div class="note-card-head">
            <h3 class="note-card-title">⚖️ 1. Saralashning Ikki Sinfi va Barqarorlik (Stability)</h3>
            <span class="note-tag">Terminologiya</span>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:12px;">
            <div style="background:var(--indigo-soft); padding:14px; border-radius:12px; border-left:5px solid var(--indigo);">
              <strong>Taqqoslash algoritmlari (Comparison Sort)</strong>
              <p style="font-size:0.86rem; margin:4px 0 0;">Elementlarni <code>arr[i] &gt; arr[j]</code> tarzida solishtirib tartiblaydi: Bubble, Selection, Insertion, Merge, Quick, Heap Sort.</p>
            </div>
            <div style="background:var(--emerald-soft); padding:14px; border-radius:12px; border-left:5px solid var(--emerald);">
              <strong>Taqqoslanmaydigan (Non-Comparison)</strong>
              <p style="font-size:0.86rem; margin:4px 0 0;">Taqqoslash qilmaydi! Son xonalari yoki chastota sanash orqali ishlaydi: <b>Radix Sort</b> va <b>Counting Sort</b>.</p>
            </div>
            <div style="background:var(--amber-soft); padding:14px; border-radius:12px; border-left:5px solid var(--amber);">
              <strong>Barqarorlik (Stability) nima?</strong>
              <p style="font-size:0.86rem; margin:4px 0 0;">Bir xil qiymatli elementlarning <b>eski nisbiy tartibi saqlanishi</b>. Bubble va Insertion — <b>Stable</b>; Selection va Pancake — <b>Unstable</b>.</p>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">🧮 2. Counting Sort &amp; Radix Sort</h3>
            <span class="note-tag">Taqqoslashsiz usullar</span>
          </div>
          <p><strong>Counting Sort:</strong> Elementlarni taqqoslab emas, har bir qiymat nechta marta uchraganini <b>sanab</b> saralaydi (kichik diapazonli butun sonlar uchun).</p>
          <ul>
            <li><code>inputArray</code> — tartiblanmagan boshlang'ich massiv</li>
            <li><code>countArray</code> — <em>cumulative count</em> (yig'ib sanash), element <code>outputArray</code> da qaysi indeksgacha turishini ko'rsatadi</li>
            <li><code>outputArray</code> — saralangan natija joylashadigan massiv</li>
          </ul>
          <p><strong>Radix Sort:</strong> Sonlarni raqam xonalari bo'yicha o'ngdan chapga barqaror saralaydi: <b>birlik xonasi → o'nlik xonasi → yuzlik xonasi</b>.</p>
          <div class="prof-insight teal">
            <div class="prof-insight-head">🎓 Professor mag'zi:</div>
            Counting Sort = <i>avval sanaydi, keyin joyiga qo'yadi</i>. Taqqoslashga asoslangan algoritmlarning nazariy pastki chegarasi <code>O(n log n)</code> bo'lsa, Counting va Radix Sort chiziqli vaqtga yaqin (<code>O(n+k)</code>) ishlay oladi!
          </div>
        </div>

        <!-- Card 3 -->
        <div class="note-card col-6 accent-indigo">
          <div class="note-card-head">
            <h3 class="note-card-title">🃏 3. Insertion Sort (Qo'yish / Kiritish Usuli)</h3>
            <span class="note-tag">O(n) Best Case</span>
          </div>
          <p>Qo'lda o'yin kartalarini tartiblashga o'xshaydi. Har bir yangi element chap tomondagi tartiblangan qism bilan solishtirilib, o'z o'rniga surib joylashtiriladi.</p>
          <div class="code-wrap">
            <div class="code-head"><span>Python — Insertion Sort</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>def insertion_sort(arr):
    for i in range(1, len(arr)):
        j = i - 1
        while j &gt;= 0 and arr[j + 1] &lt; arr[j]:
            arr[j + 1], arr[j] = arr[j], arr[j + 1]
            j -= 1
    return arr</pre>
          </div>
          <p style="font-size:0.86rem; margin-bottom:0;"><strong>Qachon zo'r ishlaydi?</strong> Kichik yoki <em>deyarli tartiblangan</em> ma'lumotlarda Best Case = <strong>O(n)</strong>, gibrid algoritmlarda (masalan, Python'ning <b>TimSort</b>) ishlatiladi.</p>
        </div>

        <!-- Card 4 -->
        <div class="note-card col-12 accent-rose">
          <div class="note-card-head">
            <h3 class="note-card-title">📋 4. Sodda Saralash Algoritmlarini To'liq Taqqoslash Jadvali</h3>
            <span class="note-tag">Comparison Table</span>
          </div>
          <div class="styled-table-wrap">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Algoritm</th>
                  <th>Asosiy g'oya</th>
                  <th>Best Case</th>
                  <th>Average / Worst</th>
                  <th>Space</th>
                  <th>Stable?</th>
                  <th>Adaptive?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bubble Sort</strong></td>
                  <td>Qo'shni elementlarni almashtiradi (katta element oxirga suzadi)</td>
                  <td><span class="badge-ok">O(n)*</span></td>
                  <td><span class="badge-warn">O(n²)</span></td>
                  <td>O(1)</td>
                  <td><span class="badge-ok">Ha</span></td>
                  <td>Ha*</td>
                </tr>
                <tr>
                  <td><strong>Selection Sort</strong></td>
                  <td>Har bosqichda eng kichigini tanlab boshiga qo'yadi (swap ≤ n-1)</td>
                  <td><span class="badge-warn">O(n²)</span></td>
                  <td><span class="badge-warn">O(n²)</span></td>
                  <td>O(1)</td>
                  <td><span class="badge-warn">Yo'q</span></td>
                  <td>Yo'q</td>
                </tr>
                <tr>
                  <td><strong>Insertion Sort</strong></td>
                  <td>Tartiblangan chap qismga elementni joyiga qo'yadi</td>
                  <td><span class="badge-ok">O(n)</span></td>
                  <td><span class="badge-warn">O(n²)</span></td>
                  <td>O(1)</td>
                  <td><span class="badge-ok">Ha</span></td>
                  <td>Ha</td>
                </tr>
                <tr>
                  <td><strong>Pancake Sort</strong></td>
                  <td>Prefikslarni teskari ag'darish (flip) orqali kattasini oxirga qo'yadi</td>
                  <td><span class="badge-warn">O(n²)</span></td>
                  <td><span class="badge-warn">O(n²)</span></td>
                  <td>O(1)</td>
                  <td><span class="badge-warn">Yo'q</span></td>
                  <td>Yo'q</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style="font-size:0.88rem; margin-bottom:0;"><strong>Zamonaviy yondashuv:</strong> Katta ma'lumotlarda <b>GPU Parallel hisoblash</b> (minglab kichik yadrolar) CPU'ning ketma-ket (Sequential) bajarishidan o'nlab marta tezroq ishlaydi (masalan, Parallel Radix/Quick Sort).</p>
        </div>
      </div>
    `
  },

  // --------------------------------------------------------------------------
  // 07-MAVZU
  // --------------------------------------------------------------------------
  {
    id: 7,
    num: "07",
    title: "Divide and Conquer va Takomillashtirilgan Saralash",
    subtitle: "Merge Sort, Cocktail/Shaker Sort, Shell Sort, Heap Sort va Quick Sort",
    color: "#e11d48",
    gradient: "linear-gradient(135deg, #9f1239 0%, #4f46e5 100%)",
    plan: [
      "1. Divide and Conquer tamoyili va Merge Sort O(n log n)",
      "2. Sheyker (Cocktail) saralash — ikki yo'nalishli Bubble Sort",
      "3. Shell saralash (gap = n // 2)",
      "4. Piramidasimon saralash (Heap Sort — Max Heap)",
      "5. Tez saralash (Quick Sort — Pivot)"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">✂️ 1. Divide &amp; Conquer: Merge Sort</h3>
            <span class="note-tag">O(n log n) | Space O(n)</span>
          </div>
          <p><strong>Birlashtirib saralash (Merge Sort)</strong> 3 qadamdan iborat:</p>
          <div class="shape-flow" style="margin-bottom:10px;">
            <span class="shape-node" style="background:#2563eb;">1. Divide (Ikkiga bo'lish)</span>
            <span class="shape-arrow">➜</span>
            <span class="shape-node" style="background:#7c3aed;">2. Conquer (1 elementgacha)</span>
            <span class="shape-arrow">➜</span>
            <span class="shape-node" style="background:#059669;">3. Merge (Tartiblab birlashtirish)</span>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>Python — To'liq Merge Sort</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>def merge_sort(arr):
    if len(arr) &lt;= 1: return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    res, i, j = [], 0, 0
    while i &lt; len(left) and j &lt; len(right):
        if left[i] &lt;= right[j]:
            res.append(left[i]); i += 1
        else:
            res.append(right[j]); j += 1
    res.extend(left[i:]); res.extend(right[j:])
    return res</pre>
          </div>
          <p style="font-size:0.85rem; margin-bottom:0;">Bo'lish bosqichlari soni <code>log₂(n)</code>, har bir bosqichda <em>n</em> ta element birlashtiriladi → <strong>O(n log n)</strong>. Kamchiligi: <code>O(n)</code> qo'shimcha xotira talab qiladi.</p>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-amber">
          <div class="note-card-head">
            <h3 class="note-card-title">🍹 2. Sheyker (Cocktail) va Shell Saralash</h3>
            <span class="note-tag">Takomillashtirilganlar</span>
          </div>
          <p><strong>Cocktail (Shaker) Sort:</strong> Bubble Sort'ning ikki yo'nalishli shakli:</p>
          <ul>
            <li><strong>Forward Pass:</strong> chapdan o'ngga yurib eng katta elementni oxiriga suradi (<code>end -= 1</code>).</li>
            <li><strong>Backward Pass:</strong> o'ngdan chapga qaytib eng kichik elementni boshiga olib keladi (<code>start += 1</code>).</li>
          </ul>
          <hr style="border:none; border-top:1px dashed var(--border-color); margin:10px 0;">
          <p><strong>Shell Sort (Donald Shell, 1959):</strong> Insertion Sort'ning tezkor ko'rinishi. Uzoq masofadagi (<code>gap = n // 2</code>) elementlarni solishtiradi, so'ngra gap 2 ga bo'linib boradi (<code>d<sub>i</sub> = d<sub>i-1</sub> / 2</code>) va oxirida <code>gap = 1</code> da yakunlanadi.</p>
          <div class="code-wrap">
            <div class="code-head"><span>Python — Shell Sort</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>def shell_sort(arr):
    n, gap = len(arr), len(arr) // 2
    while gap &gt; 0:
        for i in range(gap, n):
            temp, j = arr[i], i
            while j &gt;= gap and arr[j - gap] &gt; temp:
                arr[j] = arr[j - gap]; j -= gap
            arr[j] = temp
        gap //= 2</pre>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="note-card col-6 accent-violet">
          <div class="note-card-head">
            <h3 class="note-card-title">⛰️ 3. Piramidasimon Saralash (Heap Sort)</h3>
            <span class="note-tag">J. Williams, 1964</span>
          </div>
          <p><strong>Binary Max Heap</strong> tuzilmasiga asoslanadi: har bir ota tugun farzandlaridan katta yoki teng, eng katta element esa doim <strong>root (ildiz)</strong> da turadi.</p>
          <ol style="font-size:0.88rem;">
            <li>Massivdan <b>Max Heap</b> quriladi (<code>[4, 10, 3, 5, 1]</code> → ildiz = 10).</li>
            <li>Ildizdagi eng katta element massiv oxiri bilan almashtiriladi.</li>
            <li>Heap hajmi 1 taga kamaytiriladi va qolgan qismda Heap xossasi tiklanadi.</li>
          </ol>
          <div class="diagram-box" style="text-align:center;">
            <div class="diagram-caption">🔺 Max Heap daraxti: ildiz = 10 (eng katta)</div>
            <svg viewBox="0 0 260 120" style="width:100%; max-width:260px;">
              <line x1="130" y1="22" x2="75" y2="60" stroke="#7c3aed" stroke-width="2"/>
              <line x1="130" y1="22" x2="185" y2="60" stroke="#7c3aed" stroke-width="2"/>
              <line x1="75" y1="60" x2="45" y2="98" stroke="#7c3aed" stroke-width="2"/>
              <line x1="75" y1="60" x2="105" y2="98" stroke="#7c3aed" stroke-width="2"/>
              <circle cx="130" cy="22" r="15" fill="#10b981"/><text x="130" y="27" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">10</text>
              <circle cx="75" cy="60" r="14" fill="#6366f1"/><text x="75" y="65" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">5</text>
              <circle cx="185" cy="60" r="14" fill="#6366f1"/><text x="185" y="65" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">3</text>
              <circle cx="45" cy="98" r="14" fill="#f59e0b"/><text x="45" y="103" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">4</text>
              <circle cx="105" cy="98" r="14" fill="#f59e0b"/><text x="105" y="103" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">1</text>
            </svg>
            <p style="font-size:0.82rem; margin:4px 0 0;"><strong>Time: O(n log n)</strong> | <strong>Space: O(1)</strong> (joyida saralaydi!)</p>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="note-card col-6 accent-rose">
          <div class="note-card-head">
            <h3 class="note-card-title">⚡ 4. Tez Saralash (Quick Sort)</h3>
            <span class="note-tag">Tony Hoare</span>
          </div>
          <p><strong>G'oyasi:</strong> Massivdan bitta tayanch element (<strong>pivot</strong>) tanlanadi. Undan kichiklar chapga, katta yoki tenglar o'ngga ajratiladi va rekursiv takrorlanadi.</p>
          <div class="array-visual">
            <div class="arr-cell"><div class="arr-val">10</div><span class="arr-idx">&lt;40</span></div>
            <div class="arr-cell"><div class="arr-val">30</div><span class="arr-idx">&lt;40</span></div>
            <div class="arr-cell"><div class="arr-val pivot">40</div><span class="arr-idx">PIVOT</span></div>
            <div class="arr-cell"><div class="arr-val compare">90</div><span class="arr-idx">&gt;40</span></div>
            <div class="arr-cell"><div class="arr-val compare">80</div><span class="arr-idx">&gt;40</span></div>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>Python — Quick Sort (tayanch element bilan)</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>def tez_saralash(massiv):
    if len(massiv) &lt;= 1: return massiv
    tayanch = massiv[-1]
    kichik = [x for x in massiv[:-1] if x &lt; tayanch]
    katta  = [x for x in massiv[:-1] if x &gt;= tayanch]
    return tez_saralash(kichik) + [tayanch] + tez_saralash(katta)</pre>
          </div>
          <p style="font-size:0.85rem; margin-bottom:0;">Best/Average: <strong>O(n log n)</strong> | Worst Case (yomon pivot): <strong>O(n²)</strong> | Space: <strong>O(log n)</strong>.</p>
        </div>
      </div>
    `
  },

  // --------------------------------------------------------------------------
  // 08-MAVZU
  // --------------------------------------------------------------------------
  {
    id: 8,
    num: "08",
    title: "Algoritmlar samaradorligi va Big-O tahlili",
    subtitle: "Time vs Space Complexity, O(1) dan O(n!) gacha barcha 7 sinf va Graf matritsasi",
    color: "#be185d",
    gradient: "linear-gradient(135deg, #4338ca 0%, #be185d 100%)",
    plan: [
      "1. Time Complexity va Space Complexity mohiyati",
      "2. Big-O asimptotik yuqori chegarasi",
      "3. 7 ta asosiy murakkablik sinfi (Best → Worst)",
      "4. Adjacency Matrix (Qo'shnilik matritsasi) tahlili"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-12 accent-indigo">
          <div class="note-card-head">
            <h3 class="note-card-title">📈 1. Big-O Notatsiyasi va 7 ta Murakkablik Sinfi</h3>
            <span class="note-tag">Tez → Sekin</span>
          </div>
          <p><strong>Big-O</strong> — kompyuter tezligini sekundlarda emas, balki <strong>kirish hajmi (<em>n</em>) oshganda amallar soni qanday o'sishini</strong> ko'rsatadi: <code>f(n) = O(g(n))</code>.</p>
          <div class="styled-table-wrap">
            <table class="styled-table">
              <thead>
                <tr><th>Big-O</th><th>Nomi</th><th>O'sish tezligi</th><th>n=10 da ish</th><th>n=100 da ish</th><th>Real misol</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>O(1)</strong></td><td>Constant Time</td><td><span class="badge-ok">Eng tez (O'zgarmas)</span></td><td>1</td><td>1</td><td><code>arr[0]</code>, Hash lookup, <code>matrix[a][b]</code></td></tr>
                <tr><td><strong>O(log n)</strong></td><td>Logarithmic Time</td><td><span class="badge-ok">Juda samarali</span></td><td>~3</td><td>~7</td><td>Binary Search (<code>log₂(2048) = 11</code>, 40000 so'zda 15 qadam)</td></tr>
                <tr><td><strong>O(n)</strong></td><td>Linear Time</td><td><span class="badge-mid">Proporsional</span></td><td>10</td><td>100</td><td>Bitta <code>for</code> sikl, Linear Search</td></tr>
                <tr><td><strong>O(n log n)</strong></td><td>Linearithmic Time</td><td><span class="badge-mid">Samarali saralash</span></td><td>~33</td><td>~664</td><td>Merge Sort, Heap Sort, Python <code>sort()</code></td></tr>
                <tr><td><strong>O(n²)</strong></td><td>Quadratic Time</td><td><span class="badge-warn">Katta n da sekin</span></td><td>100</td><td>10 000</td><td>Ichma-ich 2 ta sikl, Bubble/Selection/Insertion</td></tr>
                <tr><td><strong>O(2ⁿ)</strong></td><td>Exponential Time</td><td><span class="badge-warn">Juda sekin</span></td><td>1 024</td><td>1.26×10³⁰</td><td>Barcha subsetlar, Naive Fibonacci</td></tr>
                <tr><td><strong>O(n!)</strong></td><td>Factorial Time</td><td><span class="badge-warn">Eng og'ir!</span></td><td>3 628 800</td><td>Cheksiz ko'p</td><td>Barcha permutatsiyalar (o'rin almashtirishlar)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">⚡ 2. Logarifmik (O(log n)) vs Eksponensial &amp; Faktorial</h3>
            <span class="note-tag">Matematik mohiyat</span>
          </div>
          <p><strong>Logarifm — darajaning aksi:</strong> <code>log₂(n)</code> degani <em>n</em> sonini 2 ga necha marta bo'lsak 1 ga yetishini bildiradi (masalan: <code>8 → 4 → 2 → 1</code> ⇒ <code>log₂(8) = 3</code>). Agar lug'at hajmi 40 000 dan 80 000 ga (2 barobar) oshsa, Binary Search atigi <strong>+1 ta qadam</strong> (15 dan 16 ga) qo'shadi!</p>
          <div class="code-wrap">
            <div class="code-head"><span>Python — O(log n) va Faktorial hisoblash</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre># O(log n) misol:
n = 16
while n &gt; 1:
    n = n // 2

# N faktorialni hisoblash (algoritm O(n) sikl, natija esa N!):
def faktorial(N):
    i, fakt = 1, 1
    while i != N + 1:
        fakt *= i
        i += 1
    return fakt</pre>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="note-card col-6 accent-rose">
          <div class="note-card-head">
            <h3 class="note-card-title">🕸️ 3. Graf Qo'shnilik Matritsasi (Adjacency Matrix)</h3>
            <span class="note-tag">Time O(1) vs Space O(V²)</span>
          </div>
          <p>Grafda <em>V</em> ta tugun (Vertex) bo'lsa, ular orasidagi qirralar (Edge) <code>V × V</code> o'lchamli 2D matritsada <code>0</code> va <code>1</code> ko'rinishida saqlanadi.</p>
          <div class="diagram-box">
            <div class="diagram-caption">📊 A → B qirra bormi? Bitta katak: <code>matrix[A][B] == 1</code></div>
            <table class="styled-table" style="text-align:center; font-family:var(--font-mono);">
              <thead><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr></thead>
              <tbody>
                <tr><td><strong>A</strong></td><td>0</td><td style="background:#bbf7d0; color:#14532d; font-weight:800;">1</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td><strong>B</strong></td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
                <tr><td><strong>C</strong></td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
                <tr><td><strong>D</strong></td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td><strong>E</strong></td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
              </tbody>
            </table>
          </div>
          <div class="prof-insight rose">
            <div class="prof-insight-head">🎓 Trade-off (Vaqt va Xotira muvozanati):</div>
            Qirra bor-yo'qligini tekshirish <strong>Time Complexity = O(1)</strong> (darhol!), lekin <code>V × V</code> jadval saqlash uchun <strong>Space Complexity = O(V²)</strong> xotira talab qiladi!
          </div>
        </div>
      </div>
    `
  }
];

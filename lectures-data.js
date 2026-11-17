// ============================================================================
// CYBER UNIVERSITY — MA'LUMOTLAR TUZILMASI VA ALGORITMLAR
// 8 ta To'liq Ma'ruza Mavzusi: Slaydlardagi Barcha Detallar, Jadvallar va Kodlar
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
            <h3 class="note-card-title">🧠 1. Abstrakt Ma'lumotlar Turi (ADT / ATD)</h3>
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
            <li><strong>Axborot</strong> (lotincha tushuncha, tasnif) — manbalari va taqdim etilish shaklidan qat'i nazar obyektlar va jarayonlar to'g'risidagi xabarlar hisoblanadi.</li>
            <li><strong>Ma'lumot</strong> — ma'lum bir obyekt va jarayonning mazmun va mohiyatini ifoda etib, ularning <em>raqamli, matnli, tovushli, sonli, mantiqiy</em> qiymatini o'zida aks ettiradi.</li>
            <li><strong>ATDni ifodalash</strong> uchun ma'lum bir tarzda birlashtirilgan o'zgaruvchilar va har xil turdagi ma'lumotlar to'plamidan iborat ma'lumotlar tuzilmalari qo'llaniladi.</li>
          </ul>
          <div class="prof-insight">
            <div class="prof-insight-head">🎓 Professor mag'zi:</div>
            <b>Ma'lumotlar tuzilmasi</b> — ma'lumotlarni tartibga solish usuli bo'lib, qo'shish, qidirish, o'zgartirish va o'chirish uchun o'z interfeys funksiyalarini taqdim etadi. <b>Algoritm</b> esa — muammolarni hal qilish usulidir.
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">📐 2. Matematik Model: S = { D, R }</h3>
            <span class="note-tag">Tuzilma formulasi</span>
          </div>
          <p><strong>Ma'lumotlar tuzilmasi (MT)</strong> — bu tuzilmani tashkil qiluvchi elementlar (ma'lumotlar) va ular orasidagi bog'liqlikni ko'rsatib beruvchi munosabatlar majmuasidir. Munosabatlar — funksional aloqalar va ma'lumotlarning qayerda joylashganligini ko'rsatuvchi belgilar sifatida tushuniladi.</p>
          <div class="diagram-box">
            <div class="diagram-caption">🔷 Tuzilma komponentlari va o'zaro bog'liqlik</div>
            <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
              <div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center;">
                <span class="shape-node" style="background:#f59e0b; color:#1e293b;">D — Ma'lumotlar (Elementlar)</span>
                <span class="shape-node" style="background:#10b981;">R — Munosabatlar = (Tartib, Amallar)</span>
              </div>
              <div style="font-size:1.3rem; font-weight:900; color:#0284c7;">⇅ &nbsp; ⇅ &nbsp; ⇅</div>
              <div class="shape-node" style="background:#15803d; width:100%; max-width:340px; text-align:center;">
                Turli xil elementlar va ularning joylashuv belgilari
              </div>
              <div style="font-family:var(--font-mono); font-weight:800; font-size:1rem; margin-top:4px;">
                S = { D, R } &nbsp;|&nbsp; R = (Tartib, Amallar)
              </div>
            </div>
          </div>
          <p>Har qanday konstantalar (o'zgarmaydigan), o'zgaruvchilar, funksiya qiymatlari yoki ifodalar ularning turlari bilan izohlanadi. Har bir <strong>ma'lumot turi</strong> aniq 3 ta narsani belgilaydi:</p>
          <ol>
            <li>Qabul qilishi mumkin bo'lgan <strong>qiymatlari to'plami</strong>;</li>
            <li>Mumkin bo'lgan <strong>amallar (operatsiyalar) majmuasi</strong>;</li>
            <li>Tuzilma qiymatlarini saqlash uchun <strong>tashkil etilganlik tasnifi</strong>.</li>
          </ol>
        </div>

        <!-- Card 3 -->
        <div class="note-card col-12 accent-amber">
          <div class="note-card-head">
            <h3 class="note-card-title">⚙️ 3. Algoritm Tarixi, Nazariy va Amaliy Jihatlar</h3>
            <span class="note-tag">Al-Xorazmiy merosi</span>
          </div>
          <p><strong>"Algoritm"</strong> so'zi buyuk alloma <strong>Muhammad al-Xorazmiy</strong> ismining lotincha yozilishi — <em>algorithmi</em> so'zidan kelib chiqqan. U o'zining <strong>"Hind hisobi to'g'risida"</strong> kitobida arab raqamlari va harakat qoidalari yordamida natural sonlarni yozish va ularni <strong>ustun bo'yicha bo'lish</strong> qoidalarini ishlab chiqqan. Keyinchalik algoritm — dastlabki ma'lumotlardan kerakli natijani olishni ta'minlaydigan harakatlar ketma-ketligini aniqlaydigan aniq mezon deb nomlangan.</p>
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
              <p style="margin:0; font-size:0.9rem;">Ikki asosiy savolga javob beradi: 1) Bu vazifa prinsipial jihatdan algoritmik yo'l bilan hal qilinishi mumkinmi? 2) Agar yechimi bo'lsa, muammo <em>to'liq muammolar sinfiga</em> mansubmi (katta kirish o'lchamlarida aniq yechim olish uchun katta vaqt xarajatlari talab etiladimi)?</p>
            </div>
            <div style="background:var(--cyan-soft); border-left:5px solid var(--cyan); padding:14px; border-radius:12px;">
              <h4 style="margin:0 0 6px; color:var(--cyan);">🛠️ Amaliy jihat</h4>
              <p style="margin:0; font-size:0.9rem;">Asosan <strong>asimptotik va amaliy tahlil</strong> bo'limlariga tayanadi: 1) Input o'lchami va qo'shimcha xotira cheklangan sharoitda oqilona algoritm tanlash; 2) Murakkab masalalar uchun vaqtinchalik baholar olish; 3) Axborotni qayta ishlashning samarali algoritmlarini yaratish va takomillashtirish.</p>
            </div>
          </div>
          <p style="margin-top:14px;"><strong>Algoritmlarni ifodalashning 3 ta asosiy usuli:</strong></p>
          <div class="shape-flow">
            <div class="shape-node" style="background:#4f46e5;">A) So'z-formulali ko'rinish (matematik formulalar &amp; so'z)</div>
            <div class="shape-node" style="background:#0891b2;">B) Grafik-chizma (oqim diagrammalari, jadvallar, sxemalar, chizmalar)</div>
            <div class="shape-node" style="background:#059669;">C) Dasturiy ko'rinish (Psevdokod — inson o'qiydigan mantiq &amp; aniq til kodi)</div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="note-card col-12 accent-cyan">
          <div class="note-card-head">
            <h3 class="note-card-title">🪜 4. Ma'lumotlarni Tasvirlashning 3 Bosqichi (A + B misolida)</h3>
            <span class="note-tag">Abstrakt → Fizik</span>
          </div>
          <p>Kompyuterga ma'lumot kiritganimizda biz uni mantiqiy darajada (mavhum tarzda) qayta ishlaymiz, mashina esa unga maydon va manzil ajratib jismoniy darajada bajaradi:</p>
          <div class="shape-flow" style="justify-content:space-between; margin-bottom:14px;">
            <div class="shape-node" style="background:linear-gradient(135deg,#1d4ed8,#1e40af); flex:1; min-width:210px;">
              <strong>1. Abstrakt (Matematik) bosqich</strong><br>
              <span style="font-weight:500; font-size:0.82rem;">Hal qilinishi lozim bo'lgan masalaning texnik qo'yilishi va matematik modeli: Kirish 2 ta son (2, 3) → Chiqish yig'indisi (5)</span>
            </div>
            <span class="shape-arrow">➜</span>
            <div class="shape-node" style="background:linear-gradient(135deg,#475569,#334155); flex:1; min-width:210px;">
              <strong>2. Mantiqiy bosqich</strong><br>
              <span style="font-weight:500; font-size:0.82rem;">Qo'yilgan masalani biror dasturlash tilida (masalan, C++) kodi / dasturini ishlab chiqish</span>
            </div>
            <span class="shape-arrow">➜</span>
            <div class="shape-node" style="background:linear-gradient(135deg,#15803d,#166534); flex:1; min-width:210px;">
              <strong>3. Fizik (Jismoniy) bosqich</strong><br>
              <span style="font-weight:500; font-size:0.82rem;">Informatsion obyektning mantiqiy tavsifiga mos ravishda kompyuter xotirasi yacheykalarida (2, 3, 5) akslantirilishi</span>
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
              <p style="font-size:0.84rem; margin:0;">Munosabat to'plami bo'sh: <code>R = 0 (∅)</code> bo'lgan elementlar majmuasi.</p>
              <svg class="rel-svg" viewBox="0 0 180 70">
                <ellipse cx="90" cy="35" rx="75" ry="28" fill="#eef2ff" stroke="#4f46e5" stroke-width="2" stroke-dasharray="4 3"/>
                <circle cx="50" cy="35" r="10" fill="#4f46e5"/><text x="50" y="39" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">A</text>
                <circle cx="90" cy="25" r="10" fill="#0891b2"/><text x="90" y="29" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">B</text>
                <circle cx="130" cy="40" r="10" fill="#10b981"/><text x="130" y="44" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">C</text>
              </svg>
            </div>
            <div class="rel-card">
              <h4>2️⃣ Ketma-ketlik</h4>
              <p style="font-size:0.84rem; margin:0;">Bitta chiziqli munosabat (birinchi va oxirgidan tashqari har birida oldin/keyin bor): <code>R={(A,B),(B,C),(C,D)}</code>.</p>
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
              <p style="font-size:0.84rem; margin:0;">Ikkita chiziqli munosabatdan tashkil topgan: <b>satr</b> va <b>ustun</b> bo'ladi.</p>
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
              <p style="font-size:0.84rem; margin:0;">Bitta <b>iyerarxik tartibdagi</b> munosabatdan tashkil topgan bo'ladi.</p>
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
              <p style="font-size:0.84rem; margin:0;">Faqatgina bitta <b>binar tartibli</b> munosabatdan tashkil topgan bo'ladi.</p>
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
              <p style="font-size:0.84rem; margin:0;"><b>Ikki yoki undan ortiq</b> turli tartibdagi munosabatlardan tashkil topgan (bir qirra 3+ tugunni birlashtiradi).</p>
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
            <div class="diagram-caption">📊 Foydalanuvchi dasturi va kompyuter xotirasida MT klassifikatsiyasi</div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.84rem;">
              <div style="background:#dbeafe; color:#1e3a8a; padding:10px; border-radius:12px;">
                <strong>Sozlangan MT</strong><br>
                • <b>Atomlar:</b> Bul (boolean), Butun, Haqiqiy, Belgili, <em>Ko'rsatkichli toifa</em><br>
                • <b>Molekulalar (Tuzilmaviy MT):</b> Massiv, Yozuv, Rekursiv turlar, To'plam
              </div>
              <div style="background:#dcfce7; color:#14532d; padding:10px; border-radius:12px;">
                <strong>Hosil qilingan MT</strong><br>
                • <b>Chiziqli MT:</b> Jadval, Stek (<code>push(), pop()</code>), Navbat, Ro'yxat, Dek<br>
                • <b>Chiziqsiz MT:</b> Daraxtlar, Binary daraxtlar, Graf
              </div>
            </div>
          </div>
          <p><strong>Tuzilmalarni tasniflashning 3 ta mezoni:</strong></p>
          <ul style="font-size:0.88rem;">
            <li><strong>O'zgaruvchanligi bo'yicha:</strong>
              <em>Statik</em> (dastur oxirigacha o'zgarmaydi: yozuvlar, massivlar, satrlar, vektorlar),
              <em>Yarimstatik</em> (statik ma'lumotlar + dinamik taqsimotli boshqaruv diskriptori: steklar, pastki qavatlar, navbatlar),
              <em>Dinamik</em> (dastur bajarilganda to'liq o'zgaradi).</li>
            <li><strong>Tartibliligi bo'yicha:</strong> <em>Chiziqli</em> (vektorlar, massivlar, steklar, pastki qavatlar, yozuvlar) vs <em>Chiziqsiz</em> (ko'p bog'langan ro'yxatlar, daraxt tuzilmalari, grafikalar).</li>
            <li><strong>Murakkabligi bo'yicha:</strong> Oddiy o'zgaruvchilar/konstantalar → Bir xil turdagi to'plamlar (1D/ko'p o'lchovli massivlar) → Har xil turdagi to'plamlar (yozuvlar, sinf obyektlari) → Ichki aloqalarga ega dinamik tuzilmalar (ro'yxatlar, daraxtlar, graflar).</li>
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
              <span style="font-size:0.8rem; opacity:0.92;">Kompyuter xotirasidan kerakli maydonlarni ajratish (o'zgaruvchilarni e'lon qilganda).</span>
            </div>
            <div class="crud-item" style="background:linear-gradient(135deg,#ea580c,#c2410c);">
              <span class="crud-letter">R</span>
              <strong>Read / Tanlash (Ruxsat)</strong>
              <span style="font-size:0.8rem; opacity:0.92;">Xotira maydonlaridan ma'lumot qiymatini ishlatish yoki ruxsat olish (o'zgaruvchi ismiga murojaat).</span>
            </div>
            <div class="crud-item" style="background:linear-gradient(135deg,#0284c7,#0369a1);">
              <span class="crud-letter">U</span>
              <strong>Update (Yangilash)</strong>
              <span style="font-size:0.8rem; opacity:0.92;">Tuzilmaning ma'lumotlar qiymatini o'zgartirish (tenglashtirish operatori <code>=</code> orqali).</span>
            </div>
            <div class="crud-item" style="background:linear-gradient(135deg,#16a34a,#15803d);">
              <span class="crud-letter">D</span>
              <strong>Delete (O'chirish)</strong>
              <span style="font-size:0.8rem; opacity:0.92;">Xotiradan egallab turgan maydonlarni bo'shatish (yo'q qilish — dastur yopilishida yoki <code>delete</code>).</span>
            </div>
          </div>
          <div class="prof-insight rose" style="margin-top:14px;">
            <div class="prof-insight-head">💡 Professor eslatmasi:</div>
            Har qanday ma'lumotlar tuzilmasini baholashda uning <b>CRUD amallari</b> (yaratish, o'qish, yangilash, o'chirish) xotira va vaqt bo'yicha qancha xarajat qilishini tekshiring!
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
    subtitle: "Heap/Stack xotira, int/float/bool/pointer, struct, union, class, object, vector va set",
    color: "#059669",
    gradient: "linear-gradient(135deg, #065f46 0%, #0e7490 100%)",
    plan: [
      "1. Ma'lumotlarning xotirada joylashuvi (Heap, Stack, Global, Code)",
      "2. Standart 5 tur (int, float, bool, char, *) va o'lchamlari",
      "3. Foydalanuvchi turlari (enum, struct, union, array, class, object)",
      "4. Massiv, Vektor, Yozuv, Jadval va To'plam (set)"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">💾 1. Kompyuter Xotirasining 4 Segmenti</h3>
            <span class="note-tag">RAM Arxitekturasi</span>
          </div>
          <div class="diagram-box">
            <div class="diagram-caption">🧱 Dastur ishga tushganda xotira bo'linishi</div>
            <div class="mem-stack-layout">
              <div class="mem-seg mem-heap"><strong>Heap</strong><span>Dynamic (free memory) — dinamik ajratiladigan erkin xotira</span></div>
              <div class="mem-seg mem-stack"><strong>Stack</strong><span>Local variables and functions — lokal o'zgaruvchilar va funksiyalar</span></div>
              <div class="mem-seg mem-global"><strong>Global (Static)</strong><span>Global variables — global va statik o'zgaruvchilar</span></div>
              <div class="mem-seg mem-code"><strong>Program Code</strong><span>Dasturning bajariladigan mashina buyruqlari</span></div>
            </div>
          </div>
          <div class="prof-insight teal">
            <div class="prof-insight-head">🎓 Professor mag'zi:</div>
            Standart turlarning qiymatlari odatda <b>Stack</b> yoki <b>Global</b> segmentida saqlansa, dinamik massivlar va katta obyektlar <b>Heap</b> xotirasida joylashadi!
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-cyan">
          <div class="note-card-head">
            <h3 class="note-card-title">📏 2. Standart (5 ta) va Foydalanuvchi Turlari</h3>
            <span class="note-tag">Xotira hajmlari</span>
          </div>
          <p style="font-size:0.88rem;">Standart turlarga 5 ta tur kiradi: <b>a) butun (INT)</b>, <b>b) haqiqiy (FLOAT)</b>, <b>c) mantiqiy (BOOL)</b>, <b>d) belgili (CHAR)</b>, <b>e) ko'rsatkichli (*)</b>.</p>
          <div class="styled-table-wrap">
            <table class="styled-table">
              <thead><tr><th>Data type</th><th>Meaning</th><th>Size (in bytes)</th></tr></thead>
              <tbody>
                <tr><td><code>int</code></td><td>integer (butun son)</td><td><strong>2 / 4 bayt</strong></td></tr>
                <tr><td><code>float</code></td><td>floating-point (haqiqiy)</td><td><strong>4 bayt</strong></td></tr>
                <tr><td><code>double</code></td><td>double floating-point</td><td><strong>8 bayt</strong></td></tr>
                <tr><td><code>char</code></td><td>character (belgi)</td><td><strong>1 bayt</strong></td></tr>
                <tr><td><code>bool</code></td><td>Boolean (mantiqiy)</td><td><strong>1 bayt</strong></td></tr>
                <tr><td><code>void</code></td><td>empty (bo'sh tur)</td><td><strong>1 bayt</strong></td></tr>
                <tr><td><code>*</code> (Pointer)</td><td>xotira manzili (adres)</td><td><strong>4 bayt</strong> (32-bit)</td></tr>
              </tbody>
            </table>
          </div>
          <p style="font-size:0.86rem; margin-bottom:0;"><strong>Turlar iyerarxiyasi:</strong> <em>Basic</em> (<code>int, float, double, char, bool, void</code>) • <em>Derived</em> (<code>array, pointer, functions</code>) • <em>User Defined</em>: a) <code>enum</code> (sanaladigan), b) <code>struct</code> (yozuvlar), c) <code>union</code> (birlashmalar), d) <code>array</code> (massivlar), e) <code>class</code> (klasslar), f) <code>object</code> (obyekt).</p>
        </div>

        <!-- Card 3 -->
        <div class="note-card col-6 accent-amber">
          <div class="note-card-head">
            <h3 class="note-card-title">🔢 3. Butun (INT) va Haqiqiy (FLOAT) Sonlar Formati</h3>
            <span class="note-tag">Bitlar tuzilishi</span>
          </div>
          <p><strong>1) Butun son turi:</strong> <em>N</em> ta razryadda (qo'shimcha kodda) tasvirlanadi: <code>-2<sup>N-1</sup> &lt;= x &lt; 2<sup>N-1</sup></code>.</p>
          <ul>
            <li><strong>Ishorasiz (<code>unsigned</code>):</strong> oraliq <code>0 .. 2<sup>N</sup> - 1</code></li>
            <li><strong>Ishorali (<code>signed</code>):</strong> oraliq <code>-2<sup>N-1</sup> .. 2<sup>N-1</sup> - 1</code></li>
          </ul>
          <div class="bit-row">
            <div class="bit-cell bit-val">SON (Ishorasiz: 0 .. 2ᴺ - 1)</div>
          </div>
          <div class="bit-row">
            <div class="bit-cell bit-sign">ishora</div>
            <div class="bit-cell bit-val">SON (Ishorali: -2ᴺ⁻¹ .. 2ᴺ⁻¹ - 1)</div>
          </div>
          <p style="font-size:0.84rem;">Sintaksis: <code>[signed|unsigned] short | long | int | long long &lt;identifier&gt;;</code></p>
          <hr style="border:none; border-top:1px dashed var(--border-color); margin:10px 0;">
          <p><strong>2) Haqiqiy son (Qo'zg'aluvchan nuqta):</strong> Yarimlogarifmik shaklda <code>x = +/- M * q(+/-P)</code> ko'rinishida saqlanadi. Amallar: +, -, /, *, trigonometrik, daraja, ildiz, logarifm, min/max. Misol: <code>937,56 = 93756 * 10<sup>-2</sup> = 0,93756 * 10<sup>3</sup></code>.</p>
          <div class="bit-row">
            <div class="bit-cell bit-mantissa-sign">Mantissa ishorasi</div>
            <div class="bit-cell bit-mantissa">Mantissa</div>
            <div class="bit-cell bit-exp-sign">Tartib ishorasi</div>
            <div class="bit-cell bit-exp">Tartib</div>
          </div>
          <p style="font-size:0.84rem; margin:0;">Sintaksis: <code>float | double | long double &lt;identifier&gt;;</code></p>
        </div>

        <!-- Card 4 -->
        <div class="note-card col-6 accent-violet">
          <div class="note-card-head">
            <h3 class="note-card-title">🔗 4. Mantiqiy (bool), Ko'rsatkich (*), Birlashma &amp; Klass</h3>
            <span class="note-tag">Murakkab turlar</span>
          </div>
          <ul style="font-size:0.88rem;">
            <li><strong>Mantiqiy tur (<code>bool &lt;identifier&gt;;</code>):</strong> <code>true (1)</code> va <code>false (0)</code>. Amallar: kon'yunksiya (va), diz'yunksiya (yoki), inkor (yo'q), ekvivalentlik, implikatsiya, chiqarib tashlash.</li>
            <li><strong>Ko'rsatkichli tur (<code>*</code> Pointer):</strong> Ma'lumotning o'zini emas, u joylashgan xotira manzilini (adresini) o'z ichiga oladi (4 bayt joyda katta ma'lumotlar guruhiga yo'naltiriladi).</li>
            <li><strong>Birlashma (<code>union</code>):</strong> E'lon qilingan har bir element uchun <b>xotiraning bitta hududi</b> ajratiladi (bir-birini qoplaydi). Bir vaqtda faqat 1 elementga murojaat qilinadi.</li>
            <li><strong>Klass (<code>class</code>) va Obyekt (<code>object</code>):</strong> Klass lokal/global o'zgaruvchilar va funksiyalar to'plami; Obyekt esa klassning nusxa o'zgaruvchisi (masalan, <em>talaba</em>).</li>
          </ul>
          <div class="code-wrap">
            <div class="code-head"><span>C++ — Union va Class sintaksisi</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>union myUnion { int i; float f; char str[20]; } U_1;

class klass_nomi {
    // lokal va global o'zgaruvchilar ro'yxati;
    // funksiyalar
};</pre>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="note-card col-12 accent-indigo">
          <div class="note-card-head">
            <h3 class="note-card-title">📦 5. Massiv vs Vektor, Yozuv (struct), Jadval va To'plam (set)</h3>
            <span class="note-tag">Taqqoslash va C++ kodi</span>
          </div>
          <div class="styled-table-wrap">
            <table class="styled-table">
              <thead><tr><th>Tuzilma</th><th>Tarkibi va tartibi</th><th>Xotira / O'lcham xususiyati</th><th>C++ sintaksisi</th></tr></thead>
              <tbody>
                <tr><td><strong>Massiv (Array)</strong></td><td>Bir xil turdagi elementlarning tartibli ketma-ketligi (1D va 2D)</td><td>Elementlar soni oldindan ma'lum (statik)</td><td><code>int a[12]; int a[2][3];</code></td></tr>
                <tr><td><strong>Vektor (Vector)</strong></td><td>Bir xil turdagi elementlarning dinamik ketma-ketligi</td><td>Uzunligi oldindan berilmaydi, dastur davomida o'zgaradi</td><td><code>vector&lt;int&gt; v;</code></td></tr>
                <tr><td><strong>Yozuv (Struct)</strong></td><td>Turli turdagi ma'lumotlarning tartibli ketma-ketligi (maydonlar)</td><td>Xotira hajmi = maydonlar xotira hajmlari yig'indisi</td><td><code>struct TALABA { int ID; char fio[30]; };</code></td></tr>
                <tr><td><strong>Jadval (Table)</strong></td><td>Yozuvlarning chekli majmuasi (jadval elementi = yozuv)</td><td>Jadval berilganda yozuvlar soni ko'rsatiladi</td><td><code>TALABA guruh[5];</code></td></tr>
                <tr><td><strong>To'plam (Set)</strong></td><td>Bir xil turdagi elementlarning tartibsiz majmuasi</td><td>Elementlar <strong>takrorlanmas (noyob)</strong> bo'ladi; kiritish, o'chirish, soni, bo'shlik</td><td><code>set&lt;int&gt; s;</code></td></tr>
              </tbody>
            </table>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>C++ — Yozuv va Jadval (TALABA guruh[5]) misoli</span><button class="copy-code-btn">Nusxa olish</button></div>
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
    subtitle: "Statik/Dinamik massiv (new/delete[]), 2D massiv, STL yadrosi, 5 xil iterator",
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0369a1 0%, #0f766e 100%)",
    plan: [
      "1. Massiv, vektor, yozuv, to'plam va ko'rsatkichli turlar",
      "2. Statik va Dinamik massivlar (new / delete[])",
      "3. Chiziqli va Assotsiativ STL konteynerlari",
      "4. Iteratorlarning 5 turi va 7 ta asosiy metodi"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-12 accent-cyan">
          <div class="note-card-head">
            <h3 class="note-card-title">📊 1. Statik Massiv vs Dinamik Massiv</h3>
            <span class="note-tag">Stack vs Heap</span>
          </div>
          <p><strong>Massivlar (arrays)</strong> — indekslarga mos keladigan tartibda joylashtirilgan belgilangan miqdordagi elementlar tuzilmasi. Massivni e'lon qilish 2 xil usulda amalga oshiriladi: <b>1) Initsializatsiya qilmasdan</b> (kvadrat qavs ichida soni ko'rsatiladi), <b>2) Initsializatsiya qilish orqali</b> (o'lcham kompilyator tomonidan avtomatik aniqlanadi).</p>
          <div class="diagram-box">
            <div class="diagram-caption">🔍 Statik (kompilyatsiyada) vs Dinamik (bajarilishda new/delete[])</div>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
              <div style="background:var(--bg-surface); border:1.5px solid var(--emerald); border-radius:14px; padding:14px;">
                <strong style="color:var(--emerald);">Static Array: <code>int a[5] = {1,2,3,4,5};</code></strong>
                <p style="font-size:0.84rem;">Dastur bajarilganda hajmi o'zgarmaydi. Dastur yopilganda xotira <strong>avtomatik</strong> chiqariladi.</p>
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
                <p style="font-size:0.84rem;"><code>new</code> operatori bilan ajratiladi. Bo'shatish uchun <code>delete [] &lt;massiv nomi&gt;;</code> shart!</p>
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
            <div class="code-head"><span>C++ — 1D/2D Dinamik massiv, chop etish (rand()%100) va delete[]</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>int *B = new int[5](); // nol bilan initsializatsiya
for(int i = 0; i &lt; 5; i++) cout &lt;&lt; B[i] &lt;&lt; "\\t";
delete [] B;

// 2D Statik massivni rand() bilan to'ldirish va jadval ko'rinishida chop etish:
int n = 3;
int A[n][n] = {};
for(int i = 0; i &lt; n; i++)
    for(int j = 0; j &lt; n; j++)
        cout &lt;&lt; (A[i][j] = rand() % 100) &lt;&lt; ((j == n - 1) ? "\\n" : "\\t");

// 2D Dinamik massiv:
int **M = new int*[5];
for(int i = 0; i &lt; 5; i++) M[i] = new int[5]();</pre>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-indigo">
          <div class="note-card-head">
            <h3 class="note-card-title">🧰 2. STL Kutubxonasi va Konteynerlar</h3>
            <span class="note-tag">Asosiy vs Xosila</span>
          </div>
          <p><strong>STL dasturiy kutubxonasi yadrosi 3 ta elementdan iborat:</strong></p>
          <div class="shape-flow" style="margin-bottom:12px;">
            <span class="shape-node" style="background:#4f46e5;">1. Konteynerlar</span>
            <span class="shape-node" style="background:#059669;">2. Algoritmlar</span>
            <span class="shape-node" style="background:#d97706;">3. Iteratorlar</span>
          </div>
          <div class="styled-table-wrap">
            <table class="styled-table">
              <thead><tr><th>Guruh</th><th>Konteynerlar va vazifasi</th></tr></thead>
              <tbody>
                <tr><td><strong>Asosiy (Chiziqli)</strong></td><td><code>vector</code> (dinamik massiv), <code>list</code> (chiziqli ro'yxat), <code>deque</code> (ikki tarafli navbat), shuningdek <code>array, forward_list, string</code></td></tr>
                <tr><td><strong>Asosiy (Assotsiativ)</strong></td><td><code>set</code> (noyob to'plam), <code>multiset</code> (noyob bo'lishi shart emas to'plam), <code>map</code> (kalit/qiymat juftligi)</td></tr>
                <tr><td><strong>Xosila (Adapterlar)</strong></td><td><code>stack</code> (stek), <code>queue</code> (navbat), <code>priority_queue</code> (ustuvor navbat)</td></tr>
              </tbody>
            </table>
          </div>
          <div class="prof-insight">
            <div class="prof-insight-head">🎓 Professor mag'zi:</div>
            <code>array, vector, deque</code> konteynerlarida istalgan elementga <b>indeksi bilan</b> murojaat qilish mumkin; <code>stack</code> va <code>queue</code> da esa faqat ma'lum bir (chekka) elementlarga ruxsat beriladi!
          </div>
        </div>

        <!-- Card 3 -->
        <div class="note-card col-6 accent-violet">
          <div class="note-card-head">
            <h3 class="note-card-title">🧭 3. Iteratorlar: 5 Turi va 7 Metodi</h3>
            <span class="note-tag">Konteyner ko'rsatkichi</span>
          </div>
          <p><strong>Iteratorlar</strong> — konteyner ichidagiga ruxsat beruvchi ko'rsatkich-obyektlar (<code>*</code>, inkrement <code>++</code>, dekrement <code>--</code> ishlaydi). 5 ta turi mavjud:</p>
          <ol style="font-size:0.86rem;">
            <li>Kiritish iteratorlar (<code>input_iterator</code>)</li>
            <li>Chiqarish iteratorlar (<code>output_iterator</code>)</li>
            <li>Bitta yo'nalishdagi iteratorlar (<code>forward_iterator</code>)</li>
            <li>Ikki yo'nalishdagi iteratorlar (<code>bidirectional_iterator</code>)</li>
            <li>Ixtiyoriy ruxsatga ega iteratorlar (<code>random_access_iterator</code>)</li>
          </ol>
          <p style="font-size:0.86rem;"><strong>7 ta asosiy metod:</strong> <code>begin()</code> (1-element), <code>end()</code> (oxiridan keyingi o'rin), <code>rbegin()</code> (teskari boshiga), <code>rend()</code> (teskari oxiridan keyingi o'ringa), <code>empty()</code> (bo'shlikka tekshirish), <code>size()</code> (elementlar soni), <code>clear()</code> (tozalash — <b><code>array</code> konteyneridan tashqari!</b>).</p>
          <div class="code-wrap">
            <div class="code-head"><span>C++ — String iterator va vector sort() namunasi</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>string A = "This is a string";
for (string::iterator it = A.begin(); it != A.end(); ++it)
    cout &lt;&lt; *it &lt;&lt; endl;

vector&lt;string&gt; names;
names.push_back("Peter"); names.push_back("Ivan"); names.push_back("John");
sort(names.begin(), names.end()); // Natija: Ivan, John, Peter</pre>
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
    subtitle: "Base Case, Recursive Step, Call Stack (LIFO), Stack Frame, Fibonacci daraxti va Turlari",
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #5b21b6 0%, #be185d 100%)",
    plan: [
      "1. Rekursiya tushunchasi, count(3) va Base Case / Recursive Step",
      "2. Chaqiruv va Qaytish bosqichlari (factorial(4))",
      "3. Call Stack (LIFO) va Stack Frame (Activation Record)",
      "4. Rekursiv chaqiruvlar daraxti (Fibonacci O(2ⁿ)), Chuqurlik va 4+ turi"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-6 accent-violet">
          <div class="note-card-head">
            <h3 class="note-card-title">🪞 1. Rekursiya va Uning Ikki Tayanchi</h3>
            <span class="note-tag">O'z-o'zini chaqirish</span>
          </div>
          <p><strong>Rekursiya (Recursion)</strong> — funksiya o'zini bevosita yoki bilvosita qayta chaqiradigan usul. Asosiy g'oya: <em>muammoni o'zining kichikroq nusxasiga aylantirish</em> (masalan, <code>count(3) → count(2) → count(1) → count(0)</code>). Tree traversal, DFS, Divide and Conquer va Backtracking da keng qo'llaniladi.</p>
          <p style="font-size:0.86rem;"><strong>Hayotiy misollar:</strong> Matryoshka qo'g'irchoqlari, kesilgan piyoz va karam qatlamlari (o'z-o'zini takrorlovchi obyektlar).</p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:10px 0;">
            <div style="background:var(--emerald-soft); border:1.5px solid var(--emerald); padding:12px; border-radius:12px;">
              <strong style="color:var(--emerald);">1. Bazaviy holat (Base Case)</strong>
              <p style="font-size:0.84rem; margin:4px 0 0;">Rekursiyani to'xtatadigan holat. U bo'lmasa funksiya cheksiz chaqiriladi!</p>
            </div>
            <div style="background:var(--cyan-soft); border:1.5px solid var(--cyan); padding:12px; border-radius:12px;">
              <strong style="color:var(--cyan);">2. Rekursiv qadam (Recursive Step)</strong>
              <p style="font-size:0.84rem; margin:4px 0 0;">Muammoni kichikroq holatga o'tkazadi va o'zini yana chaqiradi.</p>
            </div>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>C++ — factorial(4): Chaqiruv → Base Case → Qaytish</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>int factorial(int n) {
    if (n &lt;= 1) return 1;           // Base Case
    return n * factorial(n - 1);    // Recursive Step
}</pre>
          </div>
          <div class="prof-insight violet">
            <div class="prof-insight-head">🎓 Chaqiruv → Qaytish bosqichlari:</div>
            <strong>Chaqiruv (pastga):</strong> <code>f(4)=4×f(3)</code> → <code>3×f(2)</code> → <code>2×f(1)</code> → <b>Base Case: 1</b>.<br>
            <strong>Qaytish (yuqoriga):</strong> <code>f(1)=1</code> → <code>f(2)=2×1=2</code> → <code>f(3)=3×2=6</code> → <code>f(4)=4×6=24</code>.
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">📚 2. Call Stack (LIFO) va Stack Frame</h3>
            <span class="note-tag">Activation Record</span>
          </div>
          <p><strong>Call Stack (Chaqiriqlar steki)</strong> — <strong>LIFO</strong> (Last In, First Out — oxirgi kirgan, birinchi chiqadi) qoidasi bilan ishlaydi (ustma-ust taxlangan likopchalar kabi). Funksiya chaqirilganda eng yuqoriga <strong>Push</strong> qilinadi, tugagach <strong>Pop</strong> bilan o'chiriladi. Har bir blok <strong>Stack Frame (Activation Record)</strong> deyiladi.</p>
          <div class="callstack-wrap">
            <div>
              <p style="font-size:0.86rem; font-weight:700; margin:0 0 6px;">Stack Frame nimalarni saqlaydi?</p>
              <ul style="font-size:0.85rem; padding-left:18px;">
                <li>Function parametrlari (argumentlar)</li>
                <li>Lokal o'zgaruvchilar</li>
                <li>Qaytish manzili (<em>Return Address</em>)</li>
                <li>Oraliq holat</li>
              </ul>
              <p style="font-size:0.82rem; color:var(--rose); font-weight:700;">Depth ↑ → Stack Memory ↑ → Space Complexity O(n)</p>
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
            <h3 class="note-card-title">🌲 3. Rekursiv Chaqiruvlar Daraxti, Chuqurlik va Rekursiya Turlari</h3>
            <span class="note-tag">Naive Fibonacci O(2ⁿ)</span>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1.2fr; gap:18px; align-items:center;">
            <div>
              <p>Bir funksiya ichidan bir nechta rekursiv chaqiruv chiqsa, daraxt hosil bo'ladi. Masalan, <code>fib(4)</code> da <code>fib(3), fib(2), fib(1)</code> qayta hisoblanadi (jami 9 ta chaqiruv!).</p>
              <div class="code-wrap">
                <div class="code-head"><span>C++ — Naive Fibonacci</span><button class="copy-code-btn">Nusxa olish</button></div>
                <pre>int fib(int n) {
    if (n &lt;= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
// Time ≈ O(2^n) | Space ≈ O(n)</pre>
              </div>
              <p style="font-size:0.86rem;"><strong>Rekursiya turlari:</strong> 1) Chiziqli rekursiya (Linear), 2) Takrorlanuvchi / Quyruq rekursiya (Tail), 3) Kaskadli / Daraxtga o'xshash (Tree), 4) Qaytaruvchi (Backtracking), hamda Direct (bevosita), Indirect (bilvosita) va Mutual (o'zaro) rekursiya.</p>
              <p style="font-size:0.86rem; color:var(--rose); font-weight:700; margin-bottom:0;">⚠️ Rekursiya chuqurligi yetarli darajada kichik bo'lishi shart! Aks holda uzoq ishlash va Stack Overflow (stekning to'lib toshib ketishi) yuz beradi. Agar masalani rekursiyasiz (iterativ) yechish mumkin bo'lsa, rekursiya tavsiya etilmaydi.</p>
            </div>
            <div class="diagram-box" style="text-align:center;">
              <div class="diagram-caption">🌳 fib(4) Chaqiruvlar daraxti (Base Case: f(0)=0, f(1)=1)</div>
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
    subtitle: "Linear, Binary, Jump, Hash Search, Chegaraviy holatlar va 1D/2D/3D massivlar",
    color: "#0d9488",
    gradient: "linear-gradient(135deg, #0f766e 0%, #1d4ed8 100%)",
    plan: [
      "1. Qidiruv maqsadlari va turlari (Sequential vs Interval)",
      "2. Chiziqli qidiruv (Iterativ, Rekursiv, Boundary Cases)",
      "3. Binar qidiruv — O(log n), afzallik va kamchiliklari",
      "4. Sakrab qidiruv (Jump Search) va Xeshlash (Hash Search)",
      "5. 1D, 2D va 3D massivlarda qidirish vazifalari"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-6 accent-teal">
          <div class="note-card-head">
            <h3 class="note-card-title">🔎 1. Chiziqli Qidiruv (Linear Search)</h3>
            <span class="note-tag">O(n) — Tartib shart emas</span>
          </div>
          <p><strong>Qidiruvning 3 ta maqsadi:</strong> 1) Topilgan yozuvni o'qish; 2) Topilmasa, uni jadvalga qo'shish; 3) Topilgan yozuvni o'chirish. <strong>Chiziqli qidiruv</strong> 1-elementdan oxirgisigacha ketma-ket tekshiradi (topilmasa <code>-1</code> qaytaradi).</p>
          <div class="array-visual">
            <div class="arr-cell"><div class="arr-val">10</div><span class="arr-idx">0</span></div>
            <div class="arr-cell"><div class="arr-val">50</div><span class="arr-idx">1</span></div>
            <div class="arr-cell"><div class="arr-val">30</div><span class="arr-idx">2</span></div>
            <div class="arr-cell"><div class="arr-val">70</div><span class="arr-idx">3</span></div>
            <div class="arr-cell"><div class="arr-val">80</div><span class="arr-idx">4</span></div>
            <div class="arr-cell"><div class="arr-val">60</div><span class="arr-idx">5</span></div>
            <div class="arr-cell"><div class="arr-val highlight">20</div><span class="arr-idx">6 ✓</span></div>
            <div class="arr-cell"><div class="arr-val">90</div><span class="arr-idx">7</span></div>
            <div class="arr-cell"><div class="arr-val">40</div><span class="arr-idx">8</span></div>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>Python &amp; C++ — Iterativ va Rekursiv Linear Search</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre># Python Iterativ:
def search(arr, key):
    for i in range(len(arr)):
        if arr[i] == key: return i
    return -1

# Python Rekursiv (oxiridan boshlab tekshiradi):
def rec_search(arr, n, x):
    if n == 0: return -1
    if arr[n - 1] == x: return n - 1
    return rec_search(arr, n - 1, x)

// C++ Iterativ:
int search(int arr[], int N, int key) {
    for (int i = 0; i &lt; N; i++)
        if (arr[i] == key) return i;
    return -1;
}</pre>
          </div>
          <div class="prof-insight teal">
            <div class="prof-insight-head">🛡️ Chegaraviy holatlar (Boundary Cases):</div>
            Algoritmni albatta 4 ta maxsus holatda sinang: <code>[]</code> (bo'sh massiv), <code>[10]</code> (bitta element), <code>[10, 20, 30]</code> da oxirgi element (<code>30</code>) va <code>50</code> (element topilmagan holat).
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">⚡ 2. Binar Qidiruv (Binary Search)</h3>
            <span class="note-tag">O(log n) — Tartiblangan!</span>
          </div>
          <p><strong>Afzalliklari:</strong> Har qadamda elementlar sonini ikki barobar kamaytiradi (juda tez), ko'plab tillarda oson yoziladi. <strong>Kamchiligi:</strong> Ma'lumotlar to'plami <strong>albatta tartiblangan</strong> bo'lishi shart (tartiblash ham vaqt talab qiladi).</p>
          <div class="diagram-box">
            <div class="diagram-caption">🎯 23 ni izlash: L=0, R=9 → M=4 (16&lt;23) → L=5, M=7 (56&gt;23) → L=5, R=6, M=5 (23✓)</div>
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
            <div class="code-head"><span>Python &amp; C++ — Binary Search (arr=[10,20,30,40,50], key=25 → -1)</span><button class="copy-code-btn">Nusxa olish</button></div>
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
          <p>Tartiblangan ro'yxatda bloklar bo'yicha <strong>qadam = int(math.sqrt(n))</strong> (masalan, <code>n = 9</code> da <code>qadam = 3</code>) bilan oldinga sakraydi; kerakli blok topilgach (masalan <code>[53, 78, 107]</code>), ichida chiziqli qidiradi.</p>
          <div class="code-wrap">
            <div class="code-head"><span>Python — Jump Search (arr=[1,2,5,9,17,26,53,78,107], key=78 → 8)</span><button class="copy-code-btn">Nusxa olish</button></div>
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
        if arr[i] == key: return i + 1  # slayddagi 1-dan indekslash
    return -1</pre>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="note-card col-6 accent-indigo">
          <div class="note-card-head">
            <h3 class="note-card-title">🔑 4. Xeshlash Yordamida Qidiruv (Hash Search)</h3>
            <span class="note-tag">O(1) — Bir amal vaqtda</span>
          </div>
          <p><strong>Maqsadi:</strong> Kerakli elementni to'g'ridan-to'g'ri va o'rtacha holatda <strong>bir amal vaqtda — O(1)</strong> topish. Element o'rni maxsus xesh-funksiya orqali hisoblanadi (hayotiy misol: har bir kitobga maxsus raqam berib, barcha javonlarni emas, faqat shu raqamli joyni ochib ko'rish).</p>
          <div class="shape-flow" style="justify-content:center; margin:10px 0;">
            <span class="shape-node" style="background:#059669;">Key (102)</span>
            <span class="shape-arrow">➜</span>
            <span class="shape-node" style="background:#7c3aed;">Hash Function</span>
            <span class="shape-arrow">➜</span>
            <span class="shape-node" style="background:#0284c7;">Hash Table → "Vali"</span>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>Python — Dictionary orqali O(1) xesh qidiruv</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>talabalar = {101: "Ali", 102: "Vali", 103: "Madina"}
kalit = 102
if kalit in talabalar:
    print("Topildi:", talabalar[kalit])  # Natija: Topildi: Vali</pre>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="note-card col-12 accent-coral">
          <div class="note-card-head">
            <h3 class="note-card-title">🧊 5. Ko'p O'lchovli Massivlarda Qidirish: 1D, 2D va 3D</h3>
            <span class="note-tag">Shape: (3), (2,3), (2,3,3)</span>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px;">
            <div style="background:var(--cyan-soft); padding:13px; border-radius:12px; border:1px solid var(--cyan);">
              <strong>1D Massiv — Shape: (3)</strong>
              <p style="font-size:0.84rem; margin:4px 0;">Bitta qator, bitta indeks <code>baholar[2]</code>, <b>1 ta <code>for</code> sikli</b>.</p>
            </div>
            <div style="background:var(--indigo-soft); padding:13px; border-radius:12px; border:1px solid var(--indigo);">
              <strong>2D Massiv — Shape: (2, 3)</strong>
              <p style="font-size:0.84rem; margin:4px 0;"><code>2D = qator + ustun</code>, <code>baholar[1][1]</code>, <b>2 ta <code>for</code> sikli</b>.</p>
            </div>
            <div style="background:var(--violet-soft); padding:13px; border-radius:12px; border:1px solid var(--violet);">
              <strong>3D Massiv — Shape: (2, 3, 3)</strong>
              <p style="font-size:0.84rem; margin:4px 0;"><code>3D = jadval + qator + ustun</code> (guruh, talaba, fan), <b>3 ta ichma-ich <code>for</code></b>.</p>
            </div>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>Python — 2D (key=85) va 3D (key=90) amaliy qidiruv kodlari</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre># 2D massivda 85 ball olgan talabani topish (Natija: 1-talaba 2-fandan 85 ball olgan):
baholar2D = [[70, 85, 90], [80, 75, 95], [85, 90, 70]]
for i in range(len(baholar2D)):
    for j in range(len(baholar2D[i])):
        if baholar2D[i][j] == 85:
            print(f"{i+1}-talaba {j+1}-fandan 85 ball olgan")

# 3D massiv (2 guruh × 2 talaba × 3 fan) dan 90 ball olganlarni aniqlash:
baholar3D = [ [[70, 80, 90], [85, 95, 75]], [[90, 75, 80], [70, 90, 85]] ]
for i in range(len(baholar3D)):
    for j in range(len(baholar3D[i])):
        for k in range(len(baholar3D[i][j])):
            if baholar3D[i][j][k] == 90:
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
    subtitle: "Lug'at, Radix & Counting Sort, Bubble, Selection, Insertion, Pancake Sort, GPU vs CPU",
    color: "#ea580c",
    gradient: "linear-gradient(135deg, #c2410c 0%, #be123c 100%)",
    plan: [
      "1. Saralash turlari, Stability va O'zbekcha–Inglizcha terminlar",
      "2. Taqqoslanmaydiganlar: Radix Sort & Counting Sort",
      "3. Bubble, Selection, Insertion va Pancake Sort (Comparison Table)",
      "4. Zamonaviy saralash: CPU (Sequential) vs GPU (Parallel)"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-12 accent-coral">
          <div class="note-card-head">
            <h3 class="note-card-title">⚖️ 1. Saralashning Ikki Sinfi, Stability va Terminlar Lug'ati</h3>
            <span class="note-tag">Terminologiya</span>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:12px; margin-bottom:14px;">
            <div style="background:var(--indigo-soft); padding:13px; border-radius:12px; border-left:5px solid var(--indigo);">
              <strong>Taqqoslash algoritmlari</strong>
              <p style="font-size:0.85rem; margin:4px 0 0;"><code>arr[i] &gt; arr[j]</code> kabi solishtiradi: Bubble, Selection, Insertion, Merge, Quick Sort.</p>
            </div>
            <div style="background:var(--emerald-soft); padding:13px; border-radius:12px; border-left:5px solid var(--emerald);">
              <strong>Taqqoslanmaydiganlar</strong>
              <p style="font-size:0.85rem; margin:4px 0 0;">Solishtirmasdan xususiyat/sanashdan foydalanadi: <b>Radix Sort</b> va <b>Counting Sort</b>.</p>
            </div>
            <div style="background:var(--amber-soft); padding:13px; border-radius:12px; border-left:5px solid var(--amber);">
              <strong>Stability (Barqarorlik)</strong>
              <p style="font-size:0.85rem; margin:4px 0 0;">Bir xil qiymatli elementlar eski tartibi saqlanadi: Bubble &amp; Insertion — <b>Stable</b>; Selection &amp; Pancake — <b>Unstable</b>.</p>
            </div>
          </div>
          <div class="styled-table-wrap">
            <table class="styled-table">
              <thead><tr><th>O'zbekcha</th><th>English keyword</th><th>O'zbekcha</th><th>English keyword</th></tr></thead>
              <tbody>
                <tr><td>Qo'shib saralash</td><td>Merge sorting</td><td>O'sish / Kamayish tartibi</td><td>Ascending / Descending Order</td></tr>
                <tr><td>Tanlash / Qo'yish / Pufakcha</td><td>Selection / Insertion / Bubble Sort</td><td>Vaqt / Xotira murakkabligi</td><td>Time / Space Complexity</td></tr>
                <tr><td>Taqqoslash / O'rin almashtirish</td><td>Comparison / Swap</td><td>Kvadratik murakkablik</td><td>Quadratic Complexity</td></tr>
                <tr><td>Barqaror / Nobarqaror saralash</td><td>Stable / Unstable Sorting</td><td>Ichma-ich sikl / Qo'shni elementlar</td><td>Nested Loop / Adjacent Elements</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">🧮 2. Counting Sort &amp; Radix Sort</h3>
            <span class="note-tag">Non-Comparison Sorts</span>
          </div>
          <p><strong>Radix Sort:</strong> Sonlarni to'liq taqqoslamaydi, balki raqam xonalari bo'yicha saralaydi: <b>birlik xonasi → o'nlik xonasi → yuzlik xonasi</b>. Masalan: <code>[329, 457, 657, 839, 436, 720, 355]</code> → birlik bo'yicha <code>[720, 355, 436, 457, 657, 329, 839]</code> → o'nlik → yuzlik <code>[329, 355, 436, 457, 657, 720, 839]</code>.</p>
          <p><strong>Counting Sort:</strong> Elementlar nechta marta uchraganini sanaydi (kichik diapazonli butun sonlar uchun):</p>
          <ul style="font-size:0.86rem;">
            <li><code>inputArray</code> — tartiblanmagan boshlang'ich massiv (masalan: <code>[2, 5, 3, 0, 2, 3, 0, 3]</code>)</li>
            <li><code>countArray</code> — <em>cumulative count</em> (yig'ib sanash: <code>[2, 2, 4, 7, 7, 8]</code> yoki oraliq <code>[1, 2, 3, 5, 7, 8]</code>), har bir qiymat <code>outputArray</code> da qayergacha turishini ko'rsatadi</li>
            <li><code>outputArray</code> — saralangan natija joylashadigan massiv</li>
          </ul>
          <div class="prof-insight teal">
            <div class="prof-insight-head">🎓 Professor mag'zi:</div>
            Counting Sort = <i>avval sanaydi, keyin joyiga qo'yadi</i>. <code>arr[i] &gt; arr[j]</code> kabi taqqoslashga asoslanmaydi!
          </div>
        </div>

        <!-- Card 3 -->
        <div class="note-card col-6 accent-indigo">
          <div class="note-card-head">
            <h3 class="note-card-title">🃏 3. Insertion Sort (Kiritish / Qo'yish Usuli)</h3>
            <span class="note-tag">O(n) Best Case</span>
          </div>
          <p>Qo'lda o'yin kartalarini tartiblashga o'xshaydi. Har bir yangi element chap tomondagi tartiblangan qism bilan solishtirilib (C++ da <code>if (arr[j+1] &lt; arr[j]) swap(arr[j+1], arr[j]); else break;</code>), o'z o'rniga qo'yiladi.</p>
          <div class="code-wrap">
            <div class="code-head"><span>Python — Insertion Sort ([40, 51, 8, 38, 90, 14])</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>def insertion_sort(arr):
    for i in range(1, len(arr)):
        j = i - 1
        while j &gt;= 0 and arr[j + 1] &lt; arr[j]:
            arr[j + 1], arr[j] = arr[j], arr[j + 1]
            j -= 1
    return arr</pre>
          </div>
          <p style="font-size:0.86rem; margin-bottom:0;"><strong>Analogiyalar:</strong> Bubble — suv pufakchalari yuqoriga ko'tarilishi; Selection — javondan eng kichik kitobni tanlab oldinga qo'yish; Insertion — qo'ldagi kartalarni saralash; Pancake — kurakcha bilan quymoqni ag'darish (flip).</p>
        </div>

        <!-- Card 4 -->
        <div class="note-card col-12 accent-rose">
          <div class="note-card-head">
            <h3 class="note-card-title">📋 4. Sodda Saralashlar Comparison Table &amp; GPU vs CPU</h3>
            <span class="note-tag">To'liq tahlil</span>
          </div>
          <div class="styled-table-wrap">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Xususiyat (Property)</th>
                  <th>Bubble Sort</th>
                  <th>Selection Sort</th>
                  <th>Insertion Sort</th>
                  <th>Pancake Sort</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Best Case Time</strong></td><td><span class="badge-ok">O(n)*</span></td><td><span class="badge-warn">O(n²)</span></td><td><span class="badge-ok">O(n)</span></td><td><span class="badge-warn">O(n²)</span></td></tr>
                <tr><td><strong>Average / Worst Time</strong></td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td></tr>
                <tr><td><strong>Space Complexity</strong></td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
                <tr><td><strong>Stable / Adaptive</strong></td><td><span class="badge-ok">Yes / Yes*</span></td><td><span class="badge-warn">No / No</span></td><td><span class="badge-ok">Yes / Yes</span></td><td><span class="badge-warn">No / No</span></td></tr>
                <tr><td><strong>Main Operation</strong></td><td>Adjacent Swaps</td><td>Select Minimum</td><td>Insert / Shift</td><td>Prefix Flips</td></tr>
                <tr><td><strong>Swaps / Writes</strong></td><td>Ko'p (Many)</td><td>Minimal (≤ n-1)</td><td>Siljishlar (Kam swap)</td><td>Ko'p Flip</td></tr>
                <tr><td><strong>Amaliy qo'llanilishi</strong></td><td>O'quv maqsadida</td><td>Swap qimmat bo'lsa</td><td>Kichik/deyarli tartibli (TimSort)</td><td>Nazariy masala</td></tr>
              </tbody>
            </table>
          </div>
          <p style="font-size:0.88rem; margin-bottom:0;"><strong>CPU vs GPU Parallel saralash:</strong> CPU (4–32 kuchli yadro, <em>ketma-ket / low latency</em>) dan farqli ravishda GPU (minglab kichik yadro, <em>parallel / high throughput</em>) da Parallel Radix/Quick Sort yuzlab marta tezroq ishlaydi (slayd grafigida: Bubble 123 322 ms → 7 377 ms; Radix 75 ms → 4.83 ms). Sun'iy intellekt esa mos algoritm tanlash va optimallashtirishda yordam beradi.</p>
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
    subtitle: "Merge Sort, Cocktail/Sheyker Sort, Shell Sort, Heap Sort va Quick Sort",
    color: "#e11d48",
    gradient: "linear-gradient(135deg, #9f1239 0%, #4f46e5 100%)",
    plan: [
      "1. Divide & Conquer (Bo'lish → Yechish → Birlashtirish) va Merge Sort",
      "2. Sheyker (Cocktail) saralash — ikki yo'nalishli Bubble Sort",
      "3. Shell saralash (Donald Shell, 1959 — gap = n // 2)",
      "4. Piramidasimon saralash (Heap Sort — Williams, 1964)",
      "5. Tez saralash (Quick Sort — Tony Hoare)"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">✂️ 1. Divide &amp; Conquer: Merge Sort</h3>
            <span class="note-tag">O(n log n) | Space O(n)</span>
          </div>
          <p><strong>Birlashtirib saralash (Merge Sort)</strong> massivni 1 ta element qolguncha <code>log₂(n)</code> bosqichda ikkiga bo'ladi (masalan, 4 ta element uchun <code>log₂ 4 = 2</code> marta bo'linadi) va tartiblab birlashtiradi.</p>
          <div class="shape-flow" style="margin-bottom:10px;">
            <span class="shape-node" style="background:#2563eb;">1. Divide (Bo'lish)</span>
            <span class="shape-arrow">➜</span>
            <span class="shape-node" style="background:#7c3aed;">2. Conquer (Yechish)</span>
            <span class="shape-arrow">➜</span>
            <span class="shape-node" style="background:#059669;">3. Merge (Birlashtirish)</span>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>Python — Merge Sort ([38, 27, 43, 3, 9, 82, 10])</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>def merge_sort(arr):
    if len(arr) &lt;= 1: return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result, i, j = [], 0, 0
    while i &lt; len(left) and j &lt; len(right):
        if left[i] &lt;= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])   # qolgan elementlarni qo'shish!
    result.extend(right[j:])
    return result</pre>
          </div>
          <p style="font-size:0.84rem; margin-bottom:0;"><strong>Qoida:</strong> <code>left=[27,38]</code> va <code>right=[9,43]</code> birlashtirilganda <code>while</code> dan keyin <code>43</code> ni yo'qotmaslik uchun albatta <code>result.extend(...)</code> yoziladi!</p>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-amber">
          <div class="note-card-head">
            <h3 class="note-card-title">🍹 2. Sheyker (Cocktail) va Shell Saralash</h3>
            <span class="note-tag">Takomillashtirilganlar</span>
          </div>
          <p><strong>Cocktail / Shaker Sort:</strong> Bubble Sort dan farqli o'laroq ikki yo'nalishda ishlaydi: <b>Forward Pass</b> (katta element o'ngga → <code>end -= 1</code>) va <b>Backward Pass</b> (kichik element chapga ← <code>start += 1</code>, sikl <code>range(end-1, start-1, -1)</code>).</p>
          <p><strong>Shell Sort (Donald Shell, 1959):</strong> Insertion Sort ni tezlashtirish uchun <code>gap</code> masofadagi elementlarni solishtiradi: <code>d<sub>1</sub> = n / 2</code>, <code>d<sub>i</sub> = d<sub>i-1</sub> / 2</code>, <code>d<sub>k</sub> = 1</code>. Masalan, <code>[40, 51, 8, 38, 90, 14]</code> da <code>gap=3</code> da <code>(40,38), (51,90), (8,14)</code> solishtiriladi, keyin <code>gap=1</code> da yakunlanadi. <strong>Best Case: O(n log n)</strong>, <strong>Worst: O(n²)</strong>, <strong>Qo'shimcha xotira: O(1)</strong>.</p>
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
            <span class="note-tag">J. W. J. Williams, 1964</span>
          </div>
          <p><strong>Binary Max Heap</strong> (ikkilik uyum) ga asoslanadi: har bir ota tugun farzandlaridan katta yoki teng, eng katta element esa doim <strong>root (ildiz)</strong> da joylashadi.</p>
          <ol style="font-size:0.86rem;">
            <li>Massivdan <b>Max Heap</b> quriladi (<code>[4, 10, 3, 5, 1]</code> → ildiz = 10).</li>
            <li>Root (10) oxirgi element (1) bilan almashtiriladi: <code>[1, 5, 3, 4 | 10]</code>.</li>
            <li>Heap hajmi 1 taga kamaytirilib, qolgan qism uchun heap qayta tiklanadi: <code>[1, 4, 3 | 5, 10]</code>.</li>
          </ol>
          <div class="diagram-box" style="text-align:center;">
            <div class="diagram-caption">🔺 Max Heap daraxti: ildiz = 10</div>
            <svg viewBox="0 0 260 120" style="width:100%; max-width:250px;">
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
            <p style="font-size:0.82rem; margin:4px 0 0;"><strong>Time: O(n log n)</strong> | <strong>Space: O(1)</strong></p>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="note-card col-6 accent-rose">
          <div class="note-card-head">
            <h3 class="note-card-title">⚡ 4. Tez Saralash (Quick Sort)</h3>
            <span class="note-tag">C. A. R. (Tony) Hoare</span>
          </div>
          <p><strong>Tarixi:</strong> Tony Hoare Moskva davlat universitetida mashinali tarjima (ruscha so'zlarni inglizcha lug'atdan qidirish) ustida ishlaganida yaratgan. Massivdan bitta tayanch element (<strong>pivot</strong>) tanlanadi, undan kichiklar chapga, katta yoki tenglar o'ngga ajratiladi.</p>
          <div class="array-visual">
            <div class="arr-cell"><div class="arr-val">10</div><span class="arr-idx">&lt;40</span></div>
            <div class="arr-cell"><div class="arr-val">30</div><span class="arr-idx">&lt;40</span></div>
            <div class="arr-cell"><div class="arr-val pivot">40</div><span class="arr-idx">PIVOT</span></div>
            <div class="arr-cell"><div class="arr-val compare">90</div><span class="arr-idx">&gt;40</span></div>
            <div class="arr-cell"><div class="arr-val compare">80</div><span class="arr-idx">&gt;40</span></div>
          </div>
          <div class="code-wrap">
            <div class="code-head"><span>Python — Quick Sort (tayanch=massiv[0] yoki massiv[-1])</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>def tez_saralash(massiv):
    if len(massiv) &lt;= 1: return massiv
    tayanch = massiv[-1]
    kichik = [x for x in massiv[:-1] if x &lt; tayanch]
    katta  = [x for x in massiv[:-1] if x &gt;= tayanch]
    return tez_saralash(kichik) + [tayanch] + tez_saralash(katta)</pre>
          </div>
          <p style="font-size:0.84rem; margin-bottom:0;"><strong>Best Case: O(n log n)</strong> | <strong>Average: O(n log n)</strong> | <strong>Worst: O(n²)</strong> | <strong>Space: O(log n)</strong>.</p>
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
    subtitle: "Time vs Space Complexity, O(1)..O(n!), Binary Search lug'at misoli va Adjacency Matrix",
    color: "#be185d",
    gradient: "linear-gradient(135deg, #4338ca 0%, #be185d 100%)",
    plan: [
      "1. Time Complexity, Space Complexity va Big-O (f(n) = O(g(n)))",
      "2. 7 ta asosiy murakkablik sinfi (Best → Worst)",
      "3. Logarifmik o'sish: Lug'at, Gmail va 1–100 o'yini misollari",
      "4. Graf Qo'shnilik Matritsasi: Time O(1) vs Space O(V²)"
    ],
    html: `
      <div class="notes-grid">
        <!-- Card 1 -->
        <div class="note-card col-12 accent-indigo">
          <div class="note-card-head">
            <h3 class="note-card-title">📈 1. Big-O Notatsiyasi va 7 ta Murakkablik Sinfi</h3>
            <span class="note-tag">Best → Worst</span>
          </div>
          <p><strong>Big-O</strong> — kompyuter tezligini sekundlarda emas, balki <strong>input size (<em>n</em>) oshganda amallar soni qanday o'sishini</strong> ko'rsatadi: <code>|f(n)| ≤ c · g(n)</code> ya'ni <code>f(n) = O(g(n))</code>.</p>
          <div class="styled-table-wrap">
            <table class="styled-table">
              <thead>
                <tr><th>Big-O</th><th>Nomi</th><th>O'sish tezligi</th><th>n=10</th><th>n=100</th><th>n=1000</th><th>Real misol</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>O(1)</strong></td><td>Constant Time</td><td><span class="badge-ok">Always the best!</span></td><td>1</td><td>1</td><td>1</td><td><code>numbers[0]</code>, <code>matrix[a][b]</code></td></tr>
                <tr><td><strong>O(log n)</strong></td><td>Logarithmic Time</td><td><span class="badge-ok">Very efficient</span></td><td>~3</td><td>~7</td><td>~10</td><td>Binary Search (2048→11, 40000→15)</td></tr>
                <tr><td><strong>O(n)</strong></td><td>Linear Time</td><td><span class="badge-mid">Proporsional</span></td><td>10</td><td>100</td><td>1 000</td><td>Bitta <code>for</code> sikl, Linear Search</td></tr>
                <tr><td><strong>O(n log n)</strong></td><td>Linearithmic Time</td><td><span class="badge-mid">Samarali saralash</span></td><td>~33</td><td>~664</td><td>~9 966</td><td>Merge Sort, Heap Sort, <code>sort()</code></td></tr>
                <tr><td><strong>O(n²)</strong></td><td>Quadratic / Polynomial</td><td><span class="badge-warn">Tez o'sadi</span></td><td>100</td><td>10 000</td><td>1 000 000</td><td>Loop ichida loop (ichma-ich 2 sikl)</td></tr>
                <tr><td><strong>O(2ⁿ)</strong></td><td>Exponential Time</td><td><span class="badge-warn">Juda sekin</span></td><td>1 024</td><td>2¹⁰⁰</td><td>2¹⁰⁰⁰</td><td>Barcha subsetlar (2³=8, 2¹⁰=1024)</td></tr>
                <tr><td><strong>O(n!)</strong></td><td>Factorial Time</td><td><span class="badge-warn">Eng og'ir!</span></td><td>3 628 800</td><td>100!</td><td>1000!</td><td>Barcha permutatsiyalar (3!=6, 5!=120)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="note-card col-6 accent-emerald">
          <div class="note-card-head">
            <h3 class="note-card-title">⚡ 2. Logarifmik O(log n) Hayotiy Misollar &amp; Faktorial</h3>
            <span class="note-tag">Darajaning aksi</span>
          </div>
          <ul style="font-size:0.88rem;">
            <li><strong>Lug'at va Google misoli:</strong> Ingliz-O'zbek lug'atidan "Programming" so'zini izlashda o'rtasidan (P harfidan) ochamiz; Google da <code>****@gmail.com</code> bandligini tekshirish ham Binary Search kabi ishlaydi.</li>
            <li><strong>1–100 o'yini (30 soni):</strong> Linear Search 30 ta savol so'raydi; Binary Search esa 50 → 25 → ... qilib atigi <b>6-qadamda</b> topadi!</li>
            <li><strong>40 000 vs 80 000 so'z:</strong> Linear Search 40 000 dan 80 000 ga (2×) oshsa, Binary Search atigi <b>15 qadamdan 16 qadamga</b> (+1 qadam) o'tadi!</li>
            <li><strong>Logarifmlar:</strong> <code>2²=4 ⇒ log₂4=2</code>; <code>2³=8 ⇒ log₂8=3</code>; <code>2⁴=16 ⇒ log₂16=4</code>; <code>log₂(2048)=11</code>.</li>
          </ul>
          <div class="code-wrap">
            <div class="code-head"><span>Python — O(log n) Binary Search &amp; Faktorial</span><button class="copy-code-btn">Nusxa olish</button></div>
            <pre>def binary_search(lst, item):
    low, high = 0, len(lst) - 1
    while low &lt;= high:
        mid = (low + high) // 2
        if lst[mid] == item: return mid
        if lst[mid] &gt; item: high = mid - 1
        else: low = mid + 1
    return None

def faktorial(N):
    i, fakt = 1, 1
    while i != N + 1:
        fakt *= i; i += 1
    return fakt  # faktorial(3)=6, faktorial(5)=120</pre>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="note-card col-6 accent-rose">
          <div class="note-card-head">
            <h3 class="note-card-title">🕸️ 3. Graf Qo'shnilik Matritsasi (Adjacency Matrix)</h3>
            <span class="note-tag">Time O(1) vs Space O(V²)</span>
          </div>
          <p>Grafda <em>V</em> ta tugun (Vertex) bo'lsa, A dan B ga qirra (Edge) bor-yo'qligini <code>if (matrix[a][b] == 1)</code> orqali bitta katakdan darhol tekshiramiz.</p>
          <div class="diagram-box">
            <div class="diagram-caption">📊 A, B, C, D, E (5×5) Adjacency Matrix</div>
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
            Qirra bor-yo'qligini tekshirish <strong>Time Complexity = O(1)</strong> (input hajmiga bog'liq emas!), lekin har bir Vertex juftligi uchun joy ajratilgani sababli <strong>Space Complexity = O(V²)</strong> talab qilinadi!
          </div>
        </div>
      </div>
    `
  }
];

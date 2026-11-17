// ============================================================================
// CYBER UNIVERSITY — MA'LUMOTLAR TUZILMASI VA ALGORITMLAR
// Asosiy Interaktiv Dastur (app.js)
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  const lectures = window.LECTURES_DATA || [];
  const tests = window.TESTS_DATA || [];

  // --------------------------------------------------------------------------
  // STATE & LOCAL STORAGE
  // --------------------------------------------------------------------------
  const state = {
    activeTab: "notes",
    activeTopicId: lectures[0]?.id || 1,
    completedTopics: JSON.parse(localStorage.getItem("cu_completed_topics") || "[]"),
    theme: localStorage.getItem("cu_theme") || "light",

    // Lab states
    searchArr: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91],
    searchRunId: 0,
    sortArr: [38, 27, 43, 10, 55, 18, 64, 12, 48, 30],
    sortRunId: 0,

    // Test center states
    activeVariant: 1,
    testMode: "study", // 'study' | 'exam' | 'all'
    studyAnswers: {},  // { variantNum: { qIdx: optIdx } }
    examAnswers: {},   // { variantNum: { qIdx: optIdx } }
    examSubmitted: {}, // { variantNum: true/false }
    examSeconds: 0,
    examTimerId: null,
    examScores: JSON.parse(localStorage.getItem("cu_exam_scores") || "{}"),
    showAllKeys: true
  };

  // --------------------------------------------------------------------------
  // THEME & PRINT
  // --------------------------------------------------------------------------
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("cu_theme", theme);
    const btn = document.getElementById("themeToggle");
    if (btn) btn.textContent = theme === "dark" ? "☀️ Kunduzgi" : "🌙 Tungi";
  }
  applyTheme(state.theme);

  document.getElementById("themeToggle")?.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme(state.theme);
  });

  document.getElementById("printBtn")?.addEventListener("click", () => {
    window.print();
  });

  // --------------------------------------------------------------------------
  // TAB NAVIGATION
  // --------------------------------------------------------------------------
  function switchTab(tabName) {
    state.activeTab = tabName;
    document.querySelectorAll(".nav-tab").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabName);
    });
    document.querySelectorAll(".tab-section").forEach(sec => {
      sec.classList.toggle("active", sec.id === `sec-${tabName}`);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  document.querySelectorAll("[data-jump]").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.jump));
  });

  // --------------------------------------------------------------------------
  // SECTION 1: LECTURES & VISUAL NOTES
  // --------------------------------------------------------------------------
  const topicListEl = document.getElementById("topicList");
  const lectureSheetEl = document.getElementById("lectureSheet");
  const searchInputEl = document.getElementById("topicSearchInput");

  function updateProgressUI() {
    const countEl = document.getElementById("progressCount");
    const barEl = document.getElementById("progressBarFill");
    const doneCount = state.completedTopics.length;
    const total = lectures.length || 8;
    if (countEl) countEl.textContent = `${doneCount} / ${total}`;
    if (barEl) barEl.style.width = `${Math.round((doneCount / total) * 100)}%`;
  }

  function renderTopicSidebar(filterText = "") {
    if (!topicListEl) return;
    const q = filterText.trim().toLowerCase();
    const filtered = lectures.filter(l => {
      if (!q) return true;
      return (
        l.title.toLowerCase().includes(q) ||
        l.subtitle.toLowerCase().includes(q) ||
        l.html.toLowerCase().includes(q)
      );
    });

    if (filtered.length === 0) {
      topicListEl.innerHTML = `<div style="padding:14px; font-size:0.86rem; color:var(--text-soft);">"${escapeHtml(filterText)}" bo'yicha mavzu topilmadi.</div>`;
      return;
    }

    topicListEl.innerHTML = filtered
      .map(l => {
        const isActive = l.id === state.activeTopicId;
        const isDone = state.completedTopics.includes(l.id);
        return `
          <button class="topic-btn ${isActive ? "active" : ""}" data-topic-id="${l.id}" style="--topic-color:${l.color};">
            <span class="topic-num">${isDone ? "✓" : l.num}</span>
            <span class="topic-meta">
              <strong>${l.title}</strong>
              <span>${l.subtitle}</span>
            </span>
          </button>
        `;
      })
      .join("");

    topicListEl.querySelectorAll(".topic-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeTopicId = Number(btn.dataset.topicId);
        renderTopicSidebar(searchInputEl?.value || "");
        renderLectureSheet();
      });
    });
  }

  function renderLectureSheet() {
    if (!lectureSheetEl) return;
    const idx = lectures.findIndex(l => l.id === state.activeTopicId);
    const lec = lectures[idx] || lectures[0];
    if (!lec) return;

    const isDone = state.completedTopics.includes(lec.id);
    const prevLec = idx > 0 ? lectures[idx - 1] : null;
    const nextLec = idx < lectures.length - 1 ? lectures[idx + 1] : null;

    lectureSheetEl.innerHTML = `
      <div class="lecture-header" style="background:${lec.gradient};">
        <div class="lecture-header-badge">📘 ${lec.num}-MAVZU • CYBER UNIVERSITY PROFESSOR KONSPEKTI</div>
        <h2>${lec.title}</h2>
        <p>${lec.subtitle}</p>
        <div class="lecture-plan-chips">
          ${lec.plan.map(p => `<span class="plan-chip">${p}</span>`).join("")}
        </div>
      </div>

      ${lec.html}

      <div class="lecture-footer-nav">
        <button class="btn-outline" id="prevTopicBtn" ${!prevLec ? "disabled" : ""}>
          ← ${prevLec ? prevLec.num + "-Mavzu" : "Oldingi yo'q"}
        </button>

        <button class="${isDone ? "btn-outline" : "btn-primary"}" id="toggleDoneBtn">
          ${isDone ? "✅ O'zlashtirilgan (Bekor qilish)" : "🎓 Mavzuni o'zlashtirdim ✓"}
        </button>

        <button class="btn-outline" id="nextTopicBtn" ${!nextLec ? "disabled" : ""}>
          ${nextLec ? nextLec.num + "-Mavzu" : "Keyingi yo'q"} →
        </button>
      </div>
    `;

    // Bind copy buttons
    lectureSheetEl.querySelectorAll(".copy-code-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const pre = btn.closest(".code-wrap")?.querySelector("pre");
        if (!pre) return;
        navigator.clipboard?.writeText(pre.textContent).then(() => {
          btn.textContent = "Nusxalandi ✓";
          setTimeout(() => { btn.textContent = "Nusxa olish"; }, 1600);
        });
      });
    });

    document.getElementById("prevTopicBtn")?.addEventListener("click", () => {
      if (prevLec) {
        state.activeTopicId = prevLec.id;
        renderTopicSidebar(searchInputEl?.value || "");
        renderLectureSheet();
        lectureSheetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    document.getElementById("nextTopicBtn")?.addEventListener("click", () => {
      if (nextLec) {
        state.activeTopicId = nextLec.id;
        renderTopicSidebar(searchInputEl?.value || "");
        renderLectureSheet();
        lectureSheetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    document.getElementById("toggleDoneBtn")?.addEventListener("click", () => {
      if (state.completedTopics.includes(lec.id)) {
        state.completedTopics = state.completedTopics.filter(id => id !== lec.id);
      } else {
        state.completedTopics.push(lec.id);
      }
      localStorage.setItem("cu_completed_topics", JSON.stringify(state.completedTopics));
      updateProgressUI();
      renderTopicSidebar(searchInputEl?.value || "");
      renderLectureSheet();
    });
  }

  searchInputEl?.addEventListener("input", e => {
    renderTopicSidebar(e.target.value);
  });

  renderTopicSidebar();
  renderLectureSheet();
  updateProgressUI();

  // --------------------------------------------------------------------------
  // SECTION 2: INTERACTIVE ALGORITHM LABORATORY
  // --------------------------------------------------------------------------
  const sleep = ms => new Promise(res => setTimeout(res, ms));

  // --- 2A. Search Simulator ---
  function renderSearchArray(highlights = {}) {
    const wrap = document.getElementById("searchSimArray");
    if (!wrap) return;
    wrap.innerHTML = state.searchArr
      .map((val, i) => {
        let cls = "";
        if (highlights.found === i) cls = "highlight";
        else if (highlights.pivot === i) cls = "pivot";
        else if (highlights.compare === i) cls = "compare";
        return `
          <div class="arr-cell">
            <div class="arr-val ${cls}">${val}</div>
            <span class="arr-idx">${i}</span>
          </div>
        `;
      })
      .join("");
  }

  async function runSearchSim() {
    const algo = document.getElementById("searchAlgoSelect").value;
    const key = Number(document.getElementById("searchTargetInput").value);
    const logEl = document.getElementById("searchSimLog");
    const runId = ++state.searchRunId;
    const arr = state.searchArr;
    let steps = 0;

    if (algo === "linear") {
      for (let i = 0; i < arr.length; i++) {
        if (state.searchRunId !== runId) return;
        steps++;
        renderSearchArray({ compare: i });
        logEl.textContent = `${steps}-qadam: arr[${i}] = ${arr[i]} bilan ${key} solishtirilmoqda...`;
        await sleep(420);
        if (arr[i] === key) {
          renderSearchArray({ found: i });
          logEl.textContent = `✅ Topildi! Indeks = ${i}. Jami taqqoslashlar: ${steps} ta (Linear Search).`;
          return;
        }
      }
      renderSearchArray({});
      logEl.textContent = `❌ ${key} massivda topilmadi (-1). Jami ${steps} ta element tekshirildi.`;
    } else if (algo === "binary") {
      let L = 0, R = arr.length - 1;
      while (L <= R) {
        if (state.searchRunId !== runId) return;
        steps++;
        const mid = Math.floor((L + R) / 2);
        renderSearchArray({ pivot: mid });
        logEl.textContent = `${steps}-qadam: L=${L}, R=${R}, mid=${mid} → arr[${mid}] = ${arr[mid]}`;
        await sleep(600);
        if (arr[mid] === key) {
          renderSearchArray({ found: mid });
          logEl.textContent = `✅ Topildi! Indeks = ${mid}. Binary Search atigi ${steps} qadamda topdi!`;
          return;
        } else if (arr[mid] < key) {
          L = mid + 1;
        } else {
          R = mid - 1;
        }
      }
      renderSearchArray({});
      logEl.textContent = `❌ ${key} massivda topilmadi (-1). Jami qadamlar: ${steps}.`;
    } else if (algo === "jump") {
      const n = arr.length;
      const stepSize = Math.floor(Math.sqrt(n));
      let start = 0, end = stepSize;
      while (start < n && arr[Math.min(end, n) - 1] < key) {
        if (state.searchRunId !== runId) return;
        steps++;
        const checkIdx = Math.min(end, n) - 1;
        renderSearchArray({ pivot: checkIdx });
        logEl.textContent = `${steps}-sakrash (qadam=${stepSize}): arr[${checkIdx}] = ${arr[checkIdx]} < ${key}, keyingi blokka o'tamiz...`;
        await sleep(550);
        start = end;
        end += stepSize;
        if (start >= n) {
          renderSearchArray({});
          logEl.textContent = `❌ ${key} topilmadi (-1).`;
          return;
        }
      }
      for (let i = start; i < Math.min(end, n); i++) {
        if (state.searchRunId !== runId) return;
        steps++;
        renderSearchArray({ compare: i });
        logEl.textContent = `${steps}-qadam: blok ichida arr[${i}] = ${arr[i]} tekshirilmoqda...`;
        await sleep(450);
        if (arr[i] === key) {
          renderSearchArray({ found: i });
          logEl.textContent = `✅ Topildi! Indeks = ${i}. Jump Search jami ${steps} ta qadam bajardi.`;
          return;
        }
      }
      renderSearchArray({});
      logEl.textContent = `❌ ${key} topilmadi (-1).`;
    }
  }

  document.getElementById("runSearchSimBtn")?.addEventListener("click", runSearchSim);
  document.getElementById("resetSearchSimBtn")?.addEventListener("click", () => {
    state.searchRunId++;
    const set = new Set();
    while (set.size < 10) set.add(Math.floor(Math.random() * 90) + 5);
    state.searchArr = Array.from(set).sort((a, b) => a - b);
    document.getElementById("searchTargetInput").value = state.searchArr[Math.floor(Math.random() * 10)];
    renderSearchArray({});
    document.getElementById("searchSimLog").textContent = "Yangi tartiblangan massiv yaratildi!";
  });
  renderSearchArray({});

  // --- 2B. Sorting Simulator ---
  function renderSortBars(arr, active = [], sorted = [], pivotIdx = -1) {
    const wrap = document.getElementById("sortSimBars");
    if (!wrap) return;
    const maxVal = Math.max(...arr, 1);
    wrap.innerHTML = arr
      .map((val, i) => {
        let cls = "";
        if (sorted.includes(i)) cls = "sorted";
        else if (i === pivotIdx) cls = "pivot";
        else if (active.includes(i)) cls = "active";
        const h = Math.max(24, Math.round((val / maxVal) * 155));
        return `<div class="sim-bar ${cls}" style="height:${h}px;">${val}</div>`;
      })
      .join("");
  }

  async function runSortSim() {
    const algo = document.getElementById("sortAlgoSelect").value;
    const logEl = document.getElementById("sortSimLog");
    const runId = ++state.sortRunId;
    const a = [...state.sortArr];
    const n = a.length;
    let comps = 0, swaps = 0;

    const show = async (active = [], sorted = [], pivot = -1, msg = "") => {
      if (state.sortRunId !== runId) throw new Error("cancelled");
      renderSortBars(a, active, sorted, pivot);
      if (msg) logEl.textContent = msg;
      await sleep(230);
    };

    try {
      if (algo === "bubble") {
        const sorted = [];
        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            comps++;
            await show([j, j + 1], sorted, -1, `Taqqoslash: ${a[j]} va ${a[j + 1]}`);
            if (a[j] > a[j + 1]) {
              [a[j], a[j + 1]] = [a[j + 1], a[j]];
              swaps++;
            }
          }
          sorted.push(n - 1 - i);
        }
        sorted.push(0);
      } else if (algo === "selection") {
        const sorted = [];
        for (let i = 0; i < n - 1; i++) {
          let minIdx = i;
          for (let j = i + 1; j < n; j++) {
            comps++;
            await show([j], sorted, minIdx, `Minimum izlanmoqda (joriy min=${a[minIdx]})`);
            if (a[j] < a[minIdx]) minIdx = j;
          }
          if (minIdx !== i) {
            [a[i], a[minIdx]] = [a[minIdx], a[i]];
            swaps++;
          }
          sorted.push(i);
        }
        sorted.push(n - 1);
      } else if (algo === "insertion") {
        for (let i = 1; i < n; i++) {
          let j = i - 1;
          while (j >= 0) {
            comps++;
            await show([j, j + 1], [], -1, `Qo'yish: ${a[j + 1]} chapga surilmoqda`);
            if (a[j + 1] < a[j]) {
              [a[j + 1], a[j]] = [a[j], a[j + 1]];
              swaps++;
              j--;
            } else break;
          }
        }
      } else if (algo === "cocktail") {
        let start = 0, end = n - 1, swapped = true;
        const sorted = [];
        while (swapped) {
          swapped = false;
          for (let i = start; i < end; i++) {
            comps++;
            await show([i, i + 1], sorted, -1, `Forward Pass → (${a[i]} vs ${a[i + 1]})`);
            if (a[i] > a[i + 1]) { [a[i], a[i + 1]] = [a[i + 1], a[i]]; swaps++; swapped = true; }
          }
          sorted.push(end);
          if (!swapped) break;
          swapped = false;
          end--;
          for (let i = end - 1; i >= start; i--) {
            comps++;
            await show([i, i + 1], sorted, -1, `Backward Pass ← (${a[i]} vs ${a[i + 1]})`);
            if (a[i] > a[i + 1]) { [a[i], a[i + 1]] = [a[i + 1], a[i]]; swaps++; swapped = true; }
          }
          sorted.push(start);
          start++;
        }
      } else if (algo === "shell") {
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
          for (let i = gap; i < n; i++) {
            const temp = a[i];
            let j = i;
            while (j >= gap) {
              comps++;
              await show([j, j - gap], [], -1, `Shell gap=${gap}: ${a[j - gap]} vs ${temp}`);
              if (a[j - gap] > temp) {
                a[j] = a[j - gap];
                swaps++;
                j -= gap;
              } else break;
            }
            a[j] = temp;
          }
        }
      } else if (algo === "merge") {
        async function mergeSortRange(l, r) {
          if (l >= r) return;
          const m = Math.floor((l + r) / 2);
          await mergeSortRange(l, m);
          await mergeSortRange(m + 1, r);
          const left = a.slice(l, m + 1);
          const right = a.slice(m + 1, r + 1);
          let i = 0, j = 0, k = l;
          while (i < left.length && j < right.length) {
            comps++;
            if (left[i] <= right[j]) { a[k++] = left[i++]; }
            else { a[k++] = right[j++]; }
            swaps++;
            await show([k - 1], [], -1, `Merge [${l}..${r}] birlashtirilmoqda`);
          }
          while (i < left.length) { a[k++] = left[i++]; swaps++; await show([k - 1]); }
          while (j < right.length) { a[k++] = right[j++]; swaps++; await show([k - 1]); }
        }
        await mergeSortRange(0, n - 1);
      } else if (algo === "quick") {
        async function quickRange(low, high) {
          if (low >= high) return;
          const pivot = a[high];
          let i = low - 1;
          for (let j = low; j < high; j++) {
            comps++;
            await show([j], [], high, `Pivot=${pivot}, tekshirilmoqda: ${a[j]}`);
            if (a[j] < pivot) {
              i++;
              [a[i], a[j]] = [a[j], a[i]];
              swaps++;
            }
          }
          [a[i + 1], a[high]] = [a[high], a[i + 1]];
          swaps++;
          const pi = i + 1;
          await quickRange(low, pi - 1);
          await quickRange(pi + 1, high);
        }
        await quickRange(0, n - 1);
      } else if (algo === "heap") {
        const sorted = [];
        async function heapify(size, root) {
          let largest = root;
          const l = 2 * root + 1, r = 2 * root + 2;
          if (l < size) { comps++; if (a[l] > a[largest]) largest = l; }
          if (r < size) { comps++; if (a[r] > a[largest]) largest = r; }
          if (largest !== root) {
            [a[root], a[largest]] = [a[largest], a[root]];
            swaps++;
            await show([root, largest], sorted, 0, `Max Heap tiklanmoqda...`);
            await heapify(size, largest);
          }
        }
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) await heapify(n, i);
        for (let i = n - 1; i > 0; i--) {
          [a[0], a[i]] = [a[i], a[0]];
          swaps++;
          sorted.push(i);
          await show([0, i], sorted, -1, `Root (${a[i]}) oxiriga qo'yildi`);
          await heapify(i, 0);
        }
      }

      renderSortBars(a, [], a.map((_, i) => i), -1);
      logEl.textContent = `✅ Saralandi! Taqqoslashlar: ${comps} ta | Almashtirish/yozishlar: ${swaps} ta.`;
    } catch (e) {
      if (e.message !== "cancelled") throw e;
    }
  }

  document.getElementById("runSortSimBtn")?.addEventListener("click", runSortSim);
  document.getElementById("shuffleSortSimBtn")?.addEventListener("click", () => {
    state.sortRunId++;
    state.sortArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 85) + 10);
    renderSortBars(state.sortArr);
    document.getElementById("sortSimLog").textContent = "Yangi tasodifiy massiv yaratildi!";
  });
  renderSortBars(state.sortArr);

  // --- 2C. Recursion & Call Stack Simulator ---
  function runRecSim() {
    const type = document.getElementById("recTypeSelect").value;
    let n = Number(document.getElementById("recNInput").value);
    n = Math.max(1, Math.min(6, n));
    document.getElementById("recNInput").value = n;
    const out = document.getElementById("recSimOutput");

    if (type === "fact") {
      const frames = [];
      let stepsHtml = `<div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;"><div><strong>Chaqiruv &amp; Qaytish izi:</strong><ul style="padding-left:18px; margin:6px 0;">`;
      function fact(k) {
        frames.unshift(`factorial(${k}) [n=${k}]`);
        if (k <= 1) {
          stepsHtml += `<li><code>factorial(${k})</code> → <b>Base Case = 1</b></li>`;
          return 1;
        }
        stepsHtml += `<li><code>factorial(${k})</code> → chaqiradi <code>${k} * factorial(${k - 1})</code></li>`;
        const res = k * fact(k - 1);
        stepsHtml += `<li>↩️ <code>factorial(${k})</code> qaytaradi: <b>${res}</b></li>`;
        return res;
      }
      const ans = fact(n);
      stepsHtml += `</ul><strong>Natija: ${n}! = ${ans}</strong></div>`;
      stepsHtml += `<div><strong>Maksimal Call Stack (Chuqurlik = ${frames.length}):</strong><div class="stack-box" style="margin-top:6px;">`;
      frames.forEach((f, idx) => {
        stepsHtml += `<div class="stack-frame ${idx === 0 ? "top" : ""}"><span>${f}</span><span>${idx === 0 ? "TOP" : "kutmoqda"}</span></div>`;
      });
      stepsHtml += `<div class="stack-frame"><span>main()</span><span>entry</span></div></div></div></div>`;
      out.innerHTML = stepsHtml;
    } else {
      let calls = 0;
      const trace = [];
      function fib(k, depth = 0) {
        calls++;
        trace.push(`${"— ".repeat(depth)}fib(${k})`);
        if (k <= 1) return k;
        return fib(k - 1, depth + 1) + fib(k - 2, depth + 1);
      }
      const ans = fib(n);
      out.innerHTML = `
        <p style="margin:0 0 8px;"><strong>fib(${n}) = ${ans}</strong> | Jami rekursiv chaqiruvlar soni: <span class="badge-warn">${calls} ta</span> (Time ≈ O(2ⁿ))</p>
        <pre style="border-radius:10px; max-height:175px; overflow:auto;">${trace.join("\n")}</pre>
      `;
    }
  }
  document.getElementById("runRecSimBtn")?.addEventListener("click", runRecSim);
  runRecSim();

  // --- 2D. Big-O Calculator ---
  function factorial(num) {
    let r = 1;
    for (let i = 2; i <= num; i++) r *= i;
    return r;
  }

  function renderBigOCalc(n) {
    document.getElementById("bigONVal").textContent = n;
    const rows = [
      { label: "O(1)", name: "Constant", val: "1", cls: "badge-ok" },
      { label: "O(log n)", name: "Logarithmic", val: Math.max(1, Math.round(Math.log2(n))), cls: "badge-ok" },
      { label: "O(n)", name: "Linear", val: n.toLocaleString("uz-UZ"), cls: "badge-mid" },
      { label: "O(n log n)", name: "Linearithmic", val: Math.max(1, Math.round(n * Math.log2(n))).toLocaleString("uz-UZ"), cls: "badge-mid" },
      { label: "O(n²)", name: "Quadratic", val: (n * n).toLocaleString("uz-UZ"), cls: "badge-warn" },
      { label: "O(2ⁿ)", name: "Exponential", val: n <= 30 ? Math.pow(2, n).toLocaleString("uz-UZ") : "2^" + n + " (juda ulkan!)", cls: "badge-warn" },
      { label: "O(n!)", name: "Factorial", val: n <= 18 ? factorial(n).toLocaleString("uz-UZ") : n + "! (astronomik!)", cls: "badge-warn" }
    ];
    document.getElementById("bigOCalcTable").innerHTML = `
      <div class="styled-table-wrap">
        <table class="styled-table">
          <thead><tr><th>Sinf</th><th>Nomi</th><th>n = ${n} da taxminiy amallar</th></tr></thead>
          <tbody>
            ${rows.map(r => `<tr><td><strong>${r.label}</strong></td><td>${r.name}</td><td><span class="${r.cls}">${r.val}</span></td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  const bigORange = document.getElementById("bigONRange");
  bigORange?.addEventListener("input", e => renderBigOCalc(Number(e.target.value)));
  renderBigOCalc(16);

  // --------------------------------------------------------------------------
  // SECTION 3: 15-VARIANT TEST & EXAM CENTER
  // --------------------------------------------------------------------------
  const variantsGridEl = document.getElementById("variantsGrid");
  const testWorkspaceEl = document.getElementById("testWorkspace");
  const letters = ["A", "B", "C", "D"];

  function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  function stopExamTimer() {
    if (state.examTimerId) {
      clearInterval(state.examTimerId);
      state.examTimerId = null;
    }
  }

  function startExamTimer() {
    stopExamTimer();
    state.examSeconds = 0;
    state.examTimerId = setInterval(() => {
      state.examSeconds++;
      const tEl = document.getElementById("examTimerBadge");
      if (tEl) tEl.textContent = `⏱️ ${formatTime(state.examSeconds)}`;
    }, 1000);
  }

  function renderVariantsGrid() {
    if (!variantsGridEl) return;
    if (state.testMode === "all") {
      variantsGridEl.style.display = "none";
      return;
    }
    variantsGridEl.style.display = "grid";
    variantsGridEl.innerHTML = tests
      .map(v => {
        const isActive = v.variant === state.activeVariant;
        const best = state.examScores[v.variant];
        return `
          <button class="variant-card ${isActive ? "active" : ""}" data-variant="${v.variant}">
            <span class="variant-num">${v.variant}-Variant</span>
            <span class="variant-status">10 savol • ${best !== undefined ? `Natija: ${best}/10 ✅` : "Yechilmagan"}</span>
          </button>
        `;
      })
      .join("");

    variantsGridEl.querySelectorAll(".variant-card").forEach(card => {
      card.addEventListener("click", () => {
        state.activeVariant = Number(card.dataset.variant);
        if (state.testMode === "exam" && !state.examSubmitted[state.activeVariant]) {
          startExamTimer();
        } else {
          stopExamTimer();
        }
        renderVariantsGrid();
        renderTestWorkspace();
      });
    });
  }

  function renderQuestionCard(qObj, qIdx, mode, userAns, isSubmitted) {
    const showResult = (mode === "study" && userAns !== undefined) || (mode === "exam" && isSubmitted) || (mode === "all" && state.showAllKeys);
    const isCorrect = userAns === qObj.answer;

    return `
      <div class="question-card" data-qidx="${qIdx}">
        <div class="question-head">
          <span class="q-num">${qIdx + 1}-savol</span>
          <span class="q-topic-tag">${qObj.topic}</span>
        </div>
        <div class="q-text">${qObj.q}</div>
        <div class="options-list">
          ${qObj.options
            .map((opt, optIdx) => {
              let cls = "";
              if (showResult) {
                if (optIdx === qObj.answer) cls = "correct";
                else if (optIdx === userAns && userAns !== qObj.answer) cls = "wrong";
              } else if (userAns === optIdx) {
                cls = "selected";
              }
              const disabled = (mode === "study" && userAns !== undefined) || (mode === "exam" && isSubmitted) || mode === "all";
              return `
                <button class="option-btn ${cls}" data-q="${qIdx}" data-opt="${optIdx}" ${disabled ? "disabled" : ""}>
                  <span class="opt-letter">${letters[optIdx]}</span>
                  <span>${opt}</span>
                </button>
              `;
            })
            .join("")}
        </div>
        ${
          showResult
            ? `<div class="q-explanation ${userAns !== undefined && !isCorrect ? "wrong-exp" : ""}">
                 <strong>${mode === "all" ? `✅ To'g'ri javob: ${letters[qObj.answer]}.` : isCorrect ? "✅ To'g'ri!" : `❌ Noto'g'ri! To'g'ri javob: ${letters[qObj.answer]}.`}</strong>
                 ${qObj.exp}
               </div>`
            : ""
        }
      </div>
    `;
  }

  function renderTestWorkspace() {
    if (!testWorkspaceEl) return;

    // Mode 3: All 15 variants view
    if (state.testMode === "all") {
      stopExamTimer();
      testWorkspaceEl.innerHTML = `
        <div class="test-toolbar">
          <div>
            <strong>📚 Barcha 15 ta Variant (150 ta savol) — To'liq To'plam</strong><br>
            <small style="color:var(--text-soft);">Chop etish (Print/PDF) yoki javoblar kalitini yashirib mustaqil mashq qilish mumkin.</small>
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn-outline" id="toggleKeysBtn">${state.showAllKeys ? "🙈 Javoblar kalitini yashirish" : "👁️ Javoblar kalitini ko'rsatish"}</button>
            <button class="btn-primary" id="printTestsBtn">🖨️ Barchasini chop etish</button>
          </div>
        </div>
        ${tests
          .map(
            v => `
          <div style="margin-bottom:28px;">
            <div style="background:linear-gradient(135deg,#0c4a6e,#4f46e5); color:#fff; padding:14px 20px; border-radius:14px; margin-bottom:14px;">
              <strong style="font-size:1.08rem;">${v.title}</strong>
            </div>
            ${v.questions.map((qObj, idx) => renderQuestionCard(qObj, idx, "all", undefined, true)).join("")}
          </div>
        `
          )
          .join("")}
      `;
      document.getElementById("toggleKeysBtn")?.addEventListener("click", () => {
        state.showAllKeys = !state.showAllKeys;
        renderTestWorkspace();
      });
      document.getElementById("printTestsBtn")?.addEventListener("click", () => window.print());
      return;
    }

    // Mode 1 (Study) & Mode 2 (Exam)
    const vObj = tests.find(v => v.variant === state.activeVariant) || tests[0];
    const vNum = vObj.variant;
    const isExam = state.testMode === "exam";
    const ansMap = isExam ? (state.examAnswers[vNum] || {}) : (state.studyAnswers[vNum] || {});
    const isSubmitted = !!state.examSubmitted[vNum];

    let correctCount = 0;
    vObj.questions.forEach((q, idx) => {
      if (ansMap[idx] === q.answer) correctCount++;
    });
    const answeredCount = Object.keys(ansMap).length;

    let resultBannerHtml = "";
    if (isExam && isSubmitted) {
      const pct = Math.round((correctCount / vObj.questions.length) * 100);
      const grade = pct >= 86 ? "5 (A'lo)" : pct >= 71 ? "4 (Yaxshi)" : pct >= 55 ? "3 (Qoniqarli)" : "2 (Qayta o'qing)";
      resultBannerHtml = `
        <div class="result-banner">
          <div>
            <h3 style="margin:0 0 4px;">🎓 Imtihon Yakunlandi — ${vNum}-Variant</h3>
            <p style="margin:0; opacity:0.92;">Sarflangan vaqt: <b>${formatTime(state.examSeconds)}</b> | Baho: <b>${grade}</b></p>
          </div>
          <div style="text-align:right;">
            <strong style="font-size:2rem; display:block; line-height:1;">${correctCount} / ${vObj.questions.length} (${pct}%)</strong>
            <button class="btn-glass" id="retakeExamBtn" style="margin-top:8px;">↻ Qayta topshirish</button>
          </div>
        </div>
      `;
    }

    testWorkspaceEl.innerHTML = `
      <div class="test-toolbar">
        <div>
          <strong style="font-size:1.08rem;">${vObj.title}</strong><br>
          <span style="font-size:0.84rem; color:var(--text-soft);">
            Belgilandi: <b>${answeredCount} / ${vObj.questions.length}</b>
            ${!isExam && answeredCount > 0 ? ` • To'g'ri javoblar: <b>${correctCount}</b>` : ""}
          </span>
        </div>
        <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
          ${isExam && !isSubmitted ? `<span class="timer-badge" id="examTimerBadge">⏱️ ${formatTime(state.examSeconds)}</span>` : ""}
          ${isExam && !isSubmitted ? `<button class="btn-primary" id="submitExamBtn">✅ Imtihonni yakunlash</button>` : ""}
          ${!isExam ? `<button class="btn-outline" id="resetStudyBtn">↻ Variantni tozalash</button>` : ""}
        </div>
      </div>

      ${resultBannerHtml}

      <div>
        ${vObj.questions.map((qObj, idx) => renderQuestionCard(qObj, idx, state.testMode, ansMap[idx], isSubmitted)).join("")}
      </div>
    `;

    // Option selection
    testWorkspaceEl.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const qIdx = Number(btn.dataset.q);
        const optIdx = Number(btn.dataset.opt);
        if (isExam) {
          if (state.examSubmitted[vNum]) return;
          if (!state.examAnswers[vNum]) state.examAnswers[vNum] = {};
          state.examAnswers[vNum][qIdx] = optIdx;
        } else {
          if (!state.studyAnswers[vNum]) state.studyAnswers[vNum] = {};
          state.studyAnswers[vNum][qIdx] = optIdx;
        }
        renderTestWorkspace();
      });
    });

    document.getElementById("resetStudyBtn")?.addEventListener("click", () => {
      state.studyAnswers[vNum] = {};
      renderTestWorkspace();
    });

    document.getElementById("submitExamBtn")?.addEventListener("click", () => {
      stopExamTimer();
      state.examSubmitted[vNum] = true;
      let score = 0;
      const curAns = state.examAnswers[vNum] || {};
      vObj.questions.forEach((q, i) => { if (curAns[i] === q.answer) score++; });
      state.examScores[vNum] = score;
      localStorage.setItem("cu_exam_scores", JSON.stringify(state.examScores));
      renderVariantsGrid();
      renderTestWorkspace();
      testWorkspaceEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    document.getElementById("retakeExamBtn")?.addEventListener("click", () => {
      state.examAnswers[vNum] = {};
      state.examSubmitted[vNum] = false;
      startExamTimer();
      renderTestWorkspace();
    });
  }

  document.querySelectorAll("[data-testmode]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.testMode = btn.dataset.testmode;
      document.querySelectorAll("[data-testmode]").forEach(b => b.classList.toggle("active", b === btn));
      if (state.testMode === "exam" && !state.examSubmitted[state.activeVariant]) {
        startExamTimer();
      } else {
        stopExamTimer();
      }
      renderVariantsGrid();
      renderTestWorkspace();
    });
  });

  renderVariantsGrid();
  renderTestWorkspace();

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  }
});

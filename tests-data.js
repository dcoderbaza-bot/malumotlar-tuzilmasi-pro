// ============================================================================
// CYBER UNIVERSITY — MA'LUMOTLAR TUZILMASI VA ALGORITMLAR
// 15 ta Variantli Test Bazasi (15 x 25 = 375 ta Savol, O'xshash/Chalg'ituvchi Javoblar Bilan)
// ============================================================================

window.TESTS_DATA = [
  {
    "variant": 1,
    "title": "1-Variant: Fundamental Asoslar & Murakkablik Tahlili",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "Ma'lumot tushunchasining 01-ma'ruzada keltirilgan asosiy formulasi qaysi?",
        "options": [
          "Ma'lumot = Dastur + Shakl",
          "Ma'lumot = Axborot + Kod",
          "Ma'lumot = Axborot + Shakl",
          "Ma'lumot = Axborot + Xotira"
        ],
        "answer": 2,
        "exp": "01-mavzu 3-slaydga ko'ra: Ma'lumot = Axborot + Shakl."
      },
      {
        "topic": "01-Mavzu",
        "q": "Dasturlash nazariyasidagi asosiy formula qaysi?",
        "options": [
          "DASTUR = ALGORITM + SINTAKSIS",
          "DASTUR = FUNKSIYA + MA'LUMOTLAR",
          "DASTUR = ALGORITM + XOTIRA",
          "DASTUR = ALGORITM + MA'LUMOTLAR"
        ],
        "answer": 3,
        "exp": "01-mavzu 6-slaydda keltirilgan formula: DASTUR = ALGORITM + MA'LUMOTLAR."
      },
      {
        "topic": "01-Mavzu",
        "q": "Ma'lumotlar tuzilmasi matematik modeli S = { D, R } da R nimani anglatadi?",
        "options": [
          "Elementlarning xotira adresi: R = (Manzil, Indeks)",
          "Elementlar orasidagi munosabatlar: R = (Tartib, Amallar)",
          "Elementlar orasidagi razryadlar: R = (Razryad, Hajm)",
          "Elementlarning rekursiya daraxti: R = (Chuqurlik, Stek)"
        ],
        "answer": 1,
        "exp": "01-mavzu 4-slayd: S = { D, R } da D — ma'lumotlar, R = (Tartib, Amallar) — munosabatlar."
      },
      {
        "topic": "02-Mavzu",
        "q": "02-mavzudagi xotira diagrammasida 'Dynamic (free memory)' qaysi segmentga tegishli?",
        "options": [
          "Program Code",
          "Heap",
          "Global (Static)",
          "Stack"
        ],
        "answer": 1,
        "exp": "02-mavzu 1-slayd: Heap — Dynamic (free memory); Stack — Local variables and functions."
      },
      {
        "topic": "02-Mavzu",
        "q": "Lokal o'zgaruvchilar va funksiyalar (Local variables and functions) xotiraning qaysi qismida saqlanadi?",
        "options": [
          "Program Code",
          "Heap",
          "Global (Static)",
          "Stack"
        ],
        "answer": 3,
        "exp": "02-mavzu 1-slayd diagrammasi: Stack — Local variables and functions."
      },
      {
        "topic": "02-Mavzu",
        "q": "Global o'zgaruvchilar xotiraning qaysi segmentida joylashadi?",
        "options": [
          "Stack",
          "Program Code",
          "Global (Static)",
          "Heap"
        ],
        "answer": 2,
        "exp": "02-mavzu 1-slayd: Global (Static) — Global variables."
      },
      {
        "topic": "03-Mavzu",
        "q": "Statik massiv va dinamik massiv o'lchamini o'zgartirish bo'yicha qaysi fikr to'g'ri?",
        "options": [
          "Ikkalasining ham hajmi dastur ishlashida o'zgarmaydi",
          "Statik massiv hajmi doim o'zgaradi; dinamik massiv kompilyatsiyada qotiriladi",
          "Dinamik massiv ko'rsatkichsiz e'lon qilinadi",
          "Statik massiv hajmi kompilyatsiyada aniqlanib dasturda o'zgarmaydi; dinamik massiv hajmi bajarilishda belgilanadi"
        ],
        "answer": 3,
        "exp": "03-mavzu 3-slayd: Statik massiv kompilyatsiyada aniqlanadi, dinamik massiv dastur bajarilayotganda new bilan yaratiladi."
      },
      {
        "topic": "03-Mavzu",
        "q": "C++ da dinamik massiv yaratish uchun qaysi operator ishlatiladi?",
        "options": [
          "alloc_var",
          "create",
          "malloc_static",
          "new"
        ],
        "answer": 3,
        "exp": "03-mavzu 3-slayd: Dinamik massivni yaratish uchun C++ da 'new' operatori ishlatiladi."
      },
      {
        "topic": "03-Mavzu",
        "q": "Dinamik massivni e'lon qilishning to'g'ri C++ sintaksisi qaysi?",
        "options": [
          "<ma'lumotlar turi> &<massiv_nomi> = new <ma'lumotlar turi>(<massiv_hajmi>);",
          "new <massiv_nomi>[<massiv_hajmi>] as <ma'lumotlar turi>;",
          "<ma'lumotlar turi> *<massiv_nomi> = new <ma'lumotlar turi>[<massiv_hajmi>];",
          "<ma'lumotlar turi> <massiv_nomi> = new [<massiv_hajmi>];"
        ],
        "answer": 2,
        "exp": "03-mavzu 3-slayd: <turi> *<nomi> = new <turi>[<hajmi>];"
      },
      {
        "topic": "04-Mavzu",
        "q": "Rekursiyaning asosiy g'oyasi qaysi javobda to'g'ri ifodalangan?",
        "options": [
          "Muammoni o'zining kichikroq nusxasiga aylantirish",
          "Muammoni cheksiz marta ko'paytirish",
          "Dasturni faqat while sikli bilan yozish",
          "Barcha o'zgaruvchilarni global qilish"
        ],
        "answer": 0,
        "exp": "04-mavzu 3-slayd: Asosiy g'oya — muammoni o'zining kichikroq nusxasiga aylantirish."
      },
      {
        "topic": "04-Mavzu",
        "q": "Rekursiya asosan qaysi algoritm sinflarida mantiqni tabiiy va ixcham ifodalaydi?",
        "options": [
          "Faqat Bubble Sort va Linear Search",
          "Faqat Statik massiv e'lonida",
          "Faqat oddiy A+B qo'shishda",
          "Tree traversal, DFS, Divide and Conquer, Backtracking"
        ],
        "answer": 3,
        "exp": "04-mavzu 3-slayd: Tree traversal, DFS, Divide and Conquer, Backtracking."
      },
      {
        "topic": "04-Mavzu",
        "q": "Rekursiya faqat 'funksiya o'zini chaqirishi' emas; yana qaysi ikki narsa majburiy?",
        "options": [
          "Pointer va Union",
          "Global o'zgaruvchi va Heap xotirasi",
          "Ikki tomonlama iterator va Vector",
          "To'xtash sharti (Base Case) va muammoning kichrayishi (Recursive Step)"
        ],
        "answer": 3,
        "exp": "04-mavzu 3 va 4-slayd: Bazaviy holat (Base Case) va muammoning kichikroq holatga o'tishi majburiy."
      },
      {
        "topic": "05-Mavzu",
        "q": "Qidiruv jarayonining 05-mavzu 3-slaydda keltirilgan 3 ta maqsadiga qaysilar kiradi?",
        "options": [
          "Massivni aralashtirish, nusxalash, chop etish",
          "Faqat Bubble Sort va Merge Sort bajarish",
          "Topilgan yozuvni o'qish, topilmasa jadvalga qo'shish, topilgan yozuvni o'chirish",
          "Xotirani 0 ga tenglash, union tuzish, kompilyatsiya"
        ],
        "answer": 2,
        "exp": "05-mavzu 3-slayd: topilgan yozuvni o'qish; topilmasa jadvalga qo'shish; topilgan yozuvni o'chirish."
      },
      {
        "topic": "05-Mavzu",
        "q": "Sequential Searching (Chiziqli qidiruv) ning asosiy xususiyati qaysi?",
        "options": [
          "O(1) xesh funksiya ishlatadi",
          "Har qadamda oraliqni 2 ga bo'ladi",
          "Faqat tartiblangan ma'lumotlarda ishlaydi",
          "Ma'lumotlarni oldindan saralash shart emas (No Data Preprocessing) va amalga oshirish sodda"
        ],
        "answer": 3,
        "exp": "05-mavzu 3-slayd tarozi diagrammasi: Sequential Searching — No Data Preprocessing, Simplicity in Implementation."
      },
      {
        "topic": "05-Mavzu",
        "q": "Interval Searching (Binar / Sakrab qidiruv) ning tarozi diagrammasidagi ikkita ustunligi nima?",
        "options": [
          "Doim O(n²) vaqt oladi",
          "Requires Sorted Data (Tartiblangan data talab qiladi) va Efficiency in Sorted Data (Samarali)",
          "Hech qanday shart talab qilmaydi",
          "Tartiblanmagan datada O(1) ishlaydi"
        ],
        "answer": 1,
        "exp": "05-mavzu 3-slayd: Interval Searching — Requires Sorted Data, Efficiency in Sorted Data."
      },
      {
        "topic": "06-Mavzu",
        "q": "Saralash (Sorting) algoritmlari nechta asosiy turga bo'linadi?",
        "options": [
          "4 ta: C, R, U, D",
          "2 ta: taqqoslash asosida va taqqoslanmaydigan algoritmlar",
          "1 ta: faqat taqqoslash asosida",
          "3 ta: statik, dinamik, rekursiv"
        ],
        "answer": 1,
        "exp": "06-mavzu slayd: Saralash algoritmlari ikkita asosiy turga bo'linadi: taqqoslash asosida va taqqoslanmaydigan."
      },
      {
        "topic": "06-Mavzu",
        "q": "Taqqoslanmaydigan (Non-Comparison) saralash algoritmlariga qaysilar kiradi?",
        "options": [
          "Bubble Sort va Selection Sort",
          "Quick Sort va Merge Sort",
          "Radix Sort va Counting Sort",
          "Insertion Sort va Pancake Sort"
        ],
        "answer": 2,
        "exp": "06-mavzu slayd: Taqqoslanmaydigan algoritmlar — Radix Sort va Counting Sort."
      },
      {
        "topic": "06-Mavzu",
        "q": "Radix Sort 3 xonali sonlarni qaysi tartibda raqam xonalari bo'yicha saralaydi?",
        "options": [
          "Birlik xonasi → O'nlik xonasi → Yuzlik xonasi",
          "Faqat o'nlik xonasi bo'yicha",
          "Tasodifiy xonalar bo'yicha",
          "Yuzlik xonasi → O'nlik xonasi → Birlik xonasi"
        ],
        "answer": 0,
        "exp": "06-mavzu slayd: birlik xonasi → o'nlik xonasi → yuzlik xonasi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Divide and Conquer usulining 3 ta asosiy bosqichi qaysilar?",
        "options": [
          "Divide (Bo'lish) → Conquer (Yechish) → Merge (Birlashtirish)",
          "Input → Hash → Print",
          "Push → Pop → Clear",
          "Create → Read → Update"
        ],
        "answer": 0,
        "exp": "07-mavzu slayd: Divide → Conquer → Merge."
      },
      {
        "topic": "07-Mavzu",
        "q": "Merge Sort da [n1, n2, n3, n4] (n=4) ro'yxatini 1 ta element qolguncha bo'lish uchun nechta bo'lish bosqichi kerak?",
        "options": [
          "8 marta",
          "4 marta",
          "1 marta",
          "2 marta (log2(4) = 2)"
        ],
        "answer": 3,
        "exp": "07-mavzu slayd: log2(4) = 2 marta bo'lish bosqichi kerak bo'ladi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Merge Sort da massivni chap va o'ng qismlarga ajratish Python da qanday yoziladi?",
        "options": [
          "mid = 0; left = arr; right = []",
          "mid = len(arr); left = arr[:1]; right = arr[1:]",
          "mid = len(arr) / 2; left = arr[mid:]; right = arr[:mid]",
          "mid = len(arr) // 2; left = arr[:mid]; right = arr[mid:]"
        ],
        "answer": 3,
        "exp": "07-mavzu slayd: mid = len(arr) // 2; left = arr[:mid]; right = arr[mid:]."
      },
      {
        "topic": "08-Mavzu",
        "q": "Time Complexity nimani ko'rsatadi?",
        "options": [
          "Faqat RAM xotira chastotasini",
          "Dastur kodining baytlardagi fayl hajmini",
          "Dasturning kompyuterda aynan necha millisekund ishlashini",
          "Input size (n) oshganda algoritmning bajarilish vaqti / amallar soni qanday o'sishini"
        ],
        "answer": 3,
        "exp": "08-mavzu slayd: Time Complexity input uzunligiga bog'liq funksiya sifatida tushuntiriladi, real mashina vaqti sifatida emas."
      },
      {
        "topic": "08-Mavzu",
        "q": "Space Complexity nimani bildiradi?",
        "options": [
          "Algoritm ishlashi uchun talab qilinadigan qo'shimcha/umumiy xotira sarfini",
          "Sikllar sonini",
          "CPU yadrolari sonini",
          "Algoritmning bajarilish tezligini"
        ],
        "answer": 0,
        "exp": "08-mavzu slayd: Space Complexity — Xotira murakkabligi."
      },
      {
        "topic": "08-Mavzu",
        "q": "Big O Analysis ta'rifidagi |f(n)| ≤ c * g(n) tengsizlik nimani anglatadi?",
        "options": [
          "f(n) funksiyasi n=0 da g(n) ga teng",
          "f(n) har doim g(n) dan katta",
          "Algoritm faqat c ta elementda ishlaydi",
          "f(n) funksiyasi asimptotik jihatdan yuqoridan c konstanta ko'paytuvchili g(n) bilan chegaralangan"
        ],
        "answer": 3,
        "exp": "08-mavzu slayd rasmi: |f(n)| is asymptotically bounded above by g(n) up to constant factor c."
      },
      {
        "topic": "01-Mavzu",
        "q": "Abstrakt ma'lumotlar turi (ADT) asosan nimani belgilaydi?",
        "options": [
          "Ma'lumotlarning faqat statik yoki dinamik massiv hajmini",
          "Ma'lumotlar bilan qanday amallar bajarilishi, natijalari va foydalanish qoidalarini",
          "Ma'lumotlarning faqat RAM xotiradagi fizik bayt joylashuvini",
          "Ma'lumotlarni faqat C++ tilida e'lon qilish sintaksisini"
        ],
        "answer": 1,
        "exp": "ADT ma'lumotlarning xotirada aynan qanday saqlanishini emas, mantiqiy model va amallar qoidalarini belgilaydi."
      }
    ]
  },
  {
    "variant": 2,
    "title": "2-Variant: Xotira Segmentlari, Turlar & Qidiruv",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "Ma'lumotlar tuzilmasi va algoritm o'rtasidagi asosiy farq qaysi javobda to'g'ri berilgan?",
        "options": [
          "Ma'lumotlar tuzilmasi — muammolarni hal qilish usuli, algoritm — ma'lumotlarni saqlash usuli",
          "Ma'lumotlar tuzilmasi — faqat fizik xotira, algoritm — faqat grafik chizma",
          "Ma'lumotlar tuzilmasi — faqat o'zgaruvchilar, algoritm — faqat konstantalar",
          "Ma'lumotlar tuzilmasi — ma'lumotlarni tartibga solish usuli, algoritm — muammolarni hal qilish usuli"
        ],
        "answer": 3,
        "exp": "01-mavzu 3-slayd: MT ma'lumotlarni tartibga solish usuli, algoritm esa muammolarni hal qilish usuli."
      },
      {
        "topic": "01-Mavzu",
        "q": "Har bir ma'lumot turi dasturlash tillarida nechta asosiy xossani (belgini) aniq belgilaydi?",
        "options": [
          "4 ta: yaratish, o'qish, yangilash, o'chirish",
          "2 ta: faqat qiymatlar to'plami va xotira adresi",
          "3 ta: qiymatlar to'plami, amallar majmuasi, saqlash tasnifi",
          "5 ta: int, float, char, bool va ko'rsatkich"
        ],
        "answer": 2,
        "exp": "01-mavzu 5-slayd: 1) qiymatlari to'plami; 2) mumkin bo'lgan amallar majmuasi; 3) saqlash uchun tashkil etilganlik tasnifi."
      },
      {
        "topic": "01-Mavzu",
        "q": "Muhammad al-Xorazmiy qaysi kitobida natural sonlarni yozish va ustun bo'yicha bo'lish qoidalarini ishlab chiqqan?",
        "options": [
          "\"Ziji Ko'ragoniy\"",
          "\"Mantiq asoslari to'g'risida\"",
          "\"Hind hisobi to'g'risida\"",
          "\"Al-jabr val-muqobala\""
        ],
        "answer": 2,
        "exp": "01-mavzu 6-slayd: Muhammad al-Xorazmiy o'zining 'Hind hisobi to'g'risida' kitobida buni bayon etgan."
      },
      {
        "topic": "02-Mavzu",
        "q": "Dasturning mashina buyruqlari xotiraning eng quyi qaysi segmentida saqlanadi?",
        "options": [
          "Global (Static)",
          "Stack",
          "Heap",
          "Program Code"
        ],
        "answer": 3,
        "exp": "02-mavzu 1-slayd: Eng pastki qatlam Program Code."
      },
      {
        "topic": "02-Mavzu",
        "q": "Ko'plab dasturlash tillarida ma'lumotlarning 5 ta standart turiga qaysilar kiradi?",
        "options": [
          "Stack, Queue, Deque, List, Map",
          "Massiv, Vektor, Yozuv, Jadval, To'plam",
          "Butun (INT), Haqiqiy (FLOAT), Mantiqiy (BOOL), Belgili (CHAR), Ko'rsatkichli (*)",
          "Enum, Struct, Union, Class, Object"
        ],
        "answer": 2,
        "exp": "02-mavzu 3-slayd: a) butun (INT), b) haqiqiy (FLOAT), c) mantiqiy (BOOL), d) belgili (CHAR), e) ko'rsatkichli (*)."
      },
      {
        "topic": "02-Mavzu",
        "q": "02-mavzu jadvaliga ko'ra 'int' turi xotirada necha bayt joy egallaydi?",
        "options": [
          "8 bayt",
          "1 bayt",
          "2 / 4 bayt",
          "16 bayt"
        ],
        "answer": 2,
        "exp": "02-mavzu 3-slayd jadvali: int — integer — 2/4 bytes."
      },
      {
        "topic": "03-Mavzu",
        "q": "Massivni initsializatsiya qilish orqali e'lon qilganda massiv o'lchami qanday aniqlanadi?",
        "options": [
          "Foydalanuvchi klaviaturadan kiritganda aniqlanadi",
          "Har doim 0 ga teng bo'ladi",
          "Dastur tugagandan keyin aniqlanadi",
          "Kompilyator tomonidan avtomatik tarzda aniqlanadi"
        ],
        "answer": 3,
        "exp": "03-mavzu 4-slayd: Initsializatsiya qilish orqali e'lon qilishda massiv o'lchami kompilyator tomonidan avtomatik aniqlanadi."
      },
      {
        "topic": "03-Mavzu",
        "q": "int MASSIV[5][5] = {}; kodi massiv elementlarini qanday qiymat bilan to'ldiradi?",
        "options": [
          "Kompilyatsiya xatosi beradi",
          "Massivni xotiradan o'chiradi",
          "Barcha 25 ta elementni 0 qiymati bilan initsializatsiya qiladi",
          "Barcha elementlarni tasodifiy sonlar (garbage) bilan qoldiradi"
        ],
        "answer": 2,
        "exp": "03-mavzu 4-slayd: {} bo'sh ro'yxat bilan initsializatsiyada barcha elementlar 0 ga tenglanadi."
      },
      {
        "topic": "03-Mavzu",
        "q": "Statik massivlar uchun ajratilgan xotira qachon bo'shatiladi?",
        "options": [
          "Dastur (yoki blok) yopilganda avtomatik ravishda chiqariladi",
          "Faqat clear() chaqirilganda",
          "Hech qachon bo'shatilmaydi",
          "Faqat delete [] buyrug'i yozilgandagina"
        ],
        "answer": 0,
        "exp": "03-mavzu 5-slayd: Statik massivlar uchun dastur yopilganda strukturaga ajratilgan xotira avtomatik ravishda chiqariladi."
      },
      {
        "topic": "04-Mavzu",
        "q": "Base Case (Bazaviy holat) bo'lmasa rekursiv funksiyada nima sodir bo'ladi?",
        "options": [
          "Kompilyator uni iterativ siklga aylantiradi",
          "Funksiya 1 marta ishlab to'xtaydi",
          "Funksiya darhol 0 qaytaradi",
          "Funksiya cheksiz chaqirilib, Stack Overflow yuz beradi"
        ],
        "answer": 3,
        "exp": "04-mavzu 4-slayd: U bo'lmasa function cheksiz chaqirilishi mumkin (va stek to'lib ketadi)."
      },
      {
        "topic": "04-Mavzu",
        "q": "int factorial(int n) { if (n <= 1) return 1; return n * factorial(n - 1); } kodida 'if (n <= 1) return 1;' nima?",
        "options": [
          "Stack Frame",
          "Base Case (Bazaviy holat)",
          "Recursive Step (Rekursiv qadam)",
          "Tail Call"
        ],
        "answer": 1,
        "exp": "04-mavzu 4-slayd: if (n <= 1) return 1; // Base Case."
      },
      {
        "topic": "04-Mavzu",
        "q": "Yuqoridagi factorial(n) kodida 'return n * factorial(n - 1);' qatori qanday nomlanadi?",
        "options": [
          "Activation Record",
          "Return Address",
          "Recursive Step (Rekursiv qadam)",
          "Base Case (Bazaviy holat)"
        ],
        "answer": 2,
        "exp": "04-mavzu 4-slayd: return n * factorial(n - 1); // Recursive Step."
      },
      {
        "topic": "05-Mavzu",
        "q": "Chiziqli qidiruv (Linear Search) algoritmi qidirilayotgan element topilmaganda odatda qanday qiymat qaytaradi?",
        "options": [
          "1",
          "-1 (maxsus topilmadi belgisi)",
          "0",
          "len(arr)"
        ],
        "answer": 1,
        "exp": "05-mavzu 9-slayd: Agar topilmasa, -1 qaytaradi."
      },
      {
        "topic": "05-Mavzu",
        "q": "arr = [10, 50, 30, 70, 80, 60, 20, 90, 40] massivida '20' soni chiziqli qidiruvda nechanchi indeksda topiladi?",
        "options": [
          "2-indeksda",
          "5-indeksda",
          "6-indeksda",
          "7-indeksda"
        ],
        "answer": 2,
        "exp": "05-mavzu 8-slayd chizmasi: 0:10, 1:50, 2:30, 3:70, 4:80, 5:60, 6:20."
      },
      {
        "topic": "05-Mavzu",
        "q": "arr = [10, 30, 20, 40, 50] massivida search(arr, 20) nechta qaytaradi?",
        "options": [
          "-1",
          "2",
          "3",
          "1"
        ],
        "answer": 1,
        "exp": "05-mavzu 9 va 11-slayd: 20 qiymati massivda 2-indeksda joylashgan."
      },
      {
        "topic": "06-Mavzu",
        "q": "Radix Sort da har bir raqam xonasi bo'yicha saralashda qanday talab qo'yiladi?",
        "options": [
          "Faqat Binary Search ishlatish shart",
          "Faqat Quick Sort ishlatish shart",
          "Nobarqaror (unstable) saralash ishlatish shart",
          "Barqaror (stable) saralash usulidan foydalanish shart"
        ],
        "answer": 3,
        "exp": "06-mavzu Radix Sort psevdokodi: do 'use a stable sort to sort array A on digit i'."
      },
      {
        "topic": "06-Mavzu",
        "q": "Counting Sort qanday turdagi ma'lumotlar uchun eng qulay?",
        "options": [
          "Faqat uzun matnlar uchun",
          "Kichik diapazondagi butun sonlar uchun",
          "Faqat graf qirralari uchun",
          "Cheksiz katta haqiqiy (float) sonlar uchun"
        ],
        "answer": 1,
        "exp": "06-mavzu slayd: Counting Sort odatda kichik diapazondagi butun sonlar uchun ishlatiladi."
      },
      {
        "topic": "06-Mavzu",
        "q": "Counting Sort dagi 'countArray' nimani saqlaydi?",
        "options": [
          "Cumulative count (yig'ib sanash) — har bir qiymat outputArray da qaysi joygacha joylashishini",
          "Massivdagi faqat manfiy sonlarni",
          "Massivning teskari nusxasini",
          "Binar qidiruv indekslarini"
        ],
        "answer": 0,
        "exp": "06-mavzu slayd: countArray oddiy sanash emas, balki cumulative count (yig'ib sanash)."
      },
      {
        "topic": "07-Mavzu",
        "q": "Merge Sort da left = [27, 38] va right = [9, 43] ni birlashtirishda birinchi solishtirishda qaysi element result ga qo'shiladi?",
        "options": [
          "43",
          "9 (chunki 27 <= 9 noto'g'ri, shuning uchun right[0]=9 qo'shiladi)",
          "27",
          "38"
        ],
        "answer": 1,
        "exp": "07-mavzu slayd: 27 <= 9 noto'g'ri, shuning uchun result.append(right[j]) -> 9 qo'shiladi, j += 1."
      },
      {
        "topic": "07-Mavzu",
        "q": "Merge Sort da left=[27, 38] va right=[9, 43] uchun while sikli tugagach qaysi element qolib ketmasligi uchun extend() yoziladi?",
        "options": [
          "9",
          "43 (o'ng ro'yxatning oxirida qolgan element)",
          "Hech biri qolmaydi",
          "27"
        ],
        "answer": 1,
        "exp": "07-mavzu slayd Qoida: shu while kodining o'zi bilan 43 hali natijaga qo'shilmaydi; shuning uchun result.extend(left[i:]) va result.extend(right[j:]) yoziladi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Merge Sort ning vaqt (Time) va qo'shimcha xotira (Space) murakkabliklari qanday?",
        "options": [
          "Time: O(n log n), Qo'shimcha xotira: O(n)",
          "Time: O(log n), Qo'shimcha xotira: O(n)",
          "Time: O(n²), Qo'shimcha xotira: O(1)",
          "Time: O(n log n), Qo'shimcha xotira: O(1)"
        ],
        "answer": 0,
        "exp": "07-mavzu slayd: umumiy vaqt murakkabligi O(n log n), qo'shimcha xotira O(n)."
      },
      {
        "topic": "08-Mavzu",
        "q": "O(1) — Constant Time ning eng to'g'ri izohi qaysi?",
        "options": [
          "n barobar oshsa vaqt ham n barobar oshadi",
          "n barobar oshsa vaqt log2(n) ga oshadi",
          "Kirish hajmi n kattalashsa ham bajariladigan amal soni o'zgarmaydi (masalan, numbers[0])",
          "Faqat n=1 bo'lganda ishlaydi"
        ],
        "answer": 2,
        "exp": "08-mavzu slayd: 5000 ta element bo'lsa ham numbers[0] ni olish bir xil vaqt oladi — O(1)."
      },
      {
        "topic": "08-Mavzu",
        "q": "for x in numbers: print(x) kodining Time Complexity si nechaga teng?",
        "options": [
          "O(1) — Constant Time",
          "O(log n) — Logarithmic Time",
          "O(n) — Linear Time",
          "O(n²) — Quadratic Time"
        ],
        "answer": 2,
        "exp": "08-mavzu slayd: Array dagi hamma elementlarni bittalab chiqargani uchun O(n)."
      },
      {
        "topic": "08-Mavzu",
        "q": "for i in numbers: for j in numbers: print(i, j) kodining Time Complexity si nechaga teng?",
        "options": [
          "O(n log n) — Linearithmic Time",
          "O(n²) — Quadratic Time",
          "O(2^n) — Exponential Time",
          "O(2n) — Linear Time"
        ],
        "answer": 1,
        "exp": "08-mavzu slayd: loop ichida loop — Kvadratik vaqt O(n²)."
      },
      {
        "topic": "02-Mavzu",
        "q": "02-mavzu jadvaliga ko'ra 'float' turi xotirada necha bayt joy egallaydi?",
        "options": [
          "1 bayt",
          "2 bayt",
          "8 bayt",
          "4 bayt"
        ],
        "answer": 3,
        "exp": "02-mavzu 3-slayd jadvali: float — floating-point — 4 bytes."
      }
    ]
  },
  {
    "variant": 3,
    "title": "3-Variant: ADT, STL Konteynerlar & Rekursiya",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "'Axborot' atamasi kelib chiqishi va ta'rifiga ko'ra nimani bildiradi?",
        "options": [
          "Faqat raqamli va mantiqiy qiymatlarni kompyuter xotirasida saqlashni",
          "Manbalari va taqdim etilish shaklidan qat'i nazar obyektlar va jarayonlar to'g'risidagi xabarlarni",
          "Faqat binar daraxt va graf ko'rinishidagi ma'lumotlarni",
          "Faqat C++ tilida e'lon qilingan o'zgaruvchilar to'plamini"
        ],
        "answer": 1,
        "exp": "01-mavzu 3-slayd: Axborot — manba va shaklidan qat'i nazar obyektlar va jarayonlar to'g'risidagi xabarlar."
      },
      {
        "topic": "01-Mavzu",
        "q": "Algoritmlar nazariyasining 'Nazariy jihati' qaysi savolga javob beradi?",
        "options": [
          "Ma'lumotlar xotiraning Heap qismida saqlanadimi yoki Stack da?",
          "Dastur C++ da tezroq kompilyatsiya bo'ladimi yoki Python da?",
          "Cheklangan qo'shimcha xotira sharoitida qaysi tayyor kutubxonani ulash kerak?",
          "Vazifa prinsipial jihatdan algoritmik hal qilinishi mumkinmi va to'liq muammolar sinfiga mansubmi?"
        ],
        "answer": 3,
        "exp": "01-mavzu 7-slayd: Nazariy jihat muammoning algoritmik yechimi bor-yo'qligi va to'liq muammolar sinfiga mansubligini o'rganadi."
      },
      {
        "topic": "01-Mavzu",
        "q": "Algoritmlar nazariyasining 'Amaliy jihati' asosan qaysi tahlil bo'limlariga tayanadi?",
        "options": [
          "Semantik va grafik tahlil bo'limlariga",
          "Diskret va integral tahlil bo'limlariga",
          "Sintaktik va leksik tahlil bo'limlariga",
          "Asimptotik va amaliy tahlil bo'limlariga"
        ],
        "answer": 3,
        "exp": "01-mavzu 7-slayd: Amaliy jihat — asosan asimptotik va amaliy tahlil bo'limlari."
      },
      {
        "topic": "02-Mavzu",
        "q": "02-mavzu jadvaliga ko'ra 'double' turi xotirada necha bayt joy egallaydi?",
        "options": [
          "4 bayt",
          "16 bayt",
          "2 bayt",
          "8 bayt"
        ],
        "answer": 3,
        "exp": "02-mavzu 3-slayd jadvali: double — double floating-point — 8 bytes."
      },
      {
        "topic": "02-Mavzu",
        "q": "02-mavzu jadvaliga ko'ra 'char', 'bool' va 'void' turlari mos ravishda necha baytdan joy oladi?",
        "options": [
          "1 bayt, 1 bayt, 1 bayt",
          "4 bayt, 2 bayt, 1 bayt",
          "1 bayt, 4 bayt, 0 bayt",
          "2 bayt, 1 bayt, 4 bayt"
        ],
        "answer": 0,
        "exp": "02-mavzu 3-slayd jadvalida char=1, bool=1, void=1 bayt ko'rsatilgan."
      },
      {
        "topic": "02-Mavzu",
        "q": "Data Types tasnif daraxtida 'Derived Data Types' (hosilaviy turlar) ga qaysilar kiradi?",
        "options": [
          "array, pointer, functions",
          "structure, union, enum",
          "int, float, double, char, bool, void",
          "stack, queue, priority_queue"
        ],
        "answer": 0,
        "exp": "02-mavzu 4-slayd rasmi: Basic (int,float,double,char,bool,void); Derived (array,pointer,functions); User Defined (structure,union,enum)."
      },
      {
        "topic": "03-Mavzu",
        "q": "Dinamik massiv uchun zaxiralangan xotirani to'g'ri o'chirish buyrug'i qaysi?",
        "options": [
          "delete <massiv nomi>; (qavssiz)",
          "delete [] <massiv nomi>;",
          "clear [] <massiv nomi>;",
          "remove <massiv nomi>;"
        ],
        "answer": 1,
        "exp": "03-mavzu 5-slayd: Dinamik massivlarda 'delete [] <massiv nomi>;' talab qilinadi."
      },
      {
        "topic": "03-Mavzu",
        "q": "Ko'p o'lchovli massivlarni qayta ishlash uchun odatda nima ishlatiladi?",
        "options": [
          "O'lchamlar soniga mos tegishli miqdordagi ichma-ich for tsikllari",
          "Faqat delete [] operatori",
          "Faqat bitta if operatori",
          "Faqat bitta while(true)"
        ],
        "answer": 0,
        "exp": "03-mavzu 5-slayd: Ko'p o'lchovli massivni qayta ishlash uchun tegishli miqdordagi tsikllardan foydalaniladi."
      },
      {
        "topic": "03-Mavzu",
        "q": "int *B = new int [5] (); kodida oxiridagi () qavslar nima vazifa bajaradi?",
        "options": [
          "Massivni funksiyaga aylantiradi",
          "Ajratilgan 5 ta elementning barchasini 0 qiymati bilan initsializatsiya qiladi",
          "Massiv hajmini 2 barobar oshiradi",
          "Massivni darhol xotiradan o'chiradi"
        ],
        "answer": 1,
        "exp": "03-mavzu 1 va 6-slaydlarda: new int[5]() barcha elementlarni 0 ga tenglaydi."
      },
      {
        "topic": "04-Mavzu",
        "q": "Rekursiv algoritmning ishlash mexanizmi qaysi tartibda kechadi?",
        "options": [
          "Yuqoriga chiqadi → Heap ga o'tadi → O'chadi",
          "Base Case ga yetadi → Pastga tushadi → To'xtaydi",
          "Pastga tushadi (Chaqiruv) → Base Case ga yetadi → Natijalar yuqoriga qaytadi (Qaytish)",
          "Faqat pastga tushadi va qaytmaydi"
        ],
        "answer": 2,
        "exp": "04-mavzu 5-slayd: Rekursiya pastga tushadi → Base Case ga yetadi → natijalar yuqoriga qaytadi."
      },
      {
        "topic": "04-Mavzu",
        "q": "factorial(4) chaqirilganda qaytish bosqichida factorial(2) qaysi qiymatni hisoblab qaytaradi?",
        "options": [
          "4 × 6 = 24",
          "2 × 1 = 2",
          "3 × 2 = 6",
          "1"
        ],
        "answer": 1,
        "exp": "04-mavzu 5-slayd: factorial(1)=1, factorial(2)=2×1=2, factorial(3)=3×2=6, factorial(4)=4×6=24."
      },
      {
        "topic": "04-Mavzu",
        "q": "factorial(4) chaqirilganda qaytish bosqichida factorial(3) qaysi qiymatni qaytaradi?",
        "options": [
          "12",
          "6",
          "24",
          "2"
        ],
        "answer": 1,
        "exp": "factorial(3) = 3 × factorial(2) = 3 × 2 = 6."
      },
      {
        "topic": "05-Mavzu",
        "q": "Binar qidiruvning har bir qadamida qidiruv oralig'i qanchaga qisqaradi?",
        "options": [
          "1 taga kamayadi",
          "√n taga kamayadi",
          "2 barobar (yarmiga) kamayadi",
          "10 barobar kamayadi"
        ],
        "answer": 2,
        "exp": "05-mavzu 4 va 5-slayd: har bir qadamda ro'yxatni ikki qismga bo'lib ma'lumotlar sonini ikki barobar kamaytiradi."
      },
      {
        "topic": "05-Mavzu",
        "q": "05-mavzu 4-slayddagi [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] massivda 23 ni Binary Search bilan izlaganda birinchi mid=4 qiymati nima?",
        "options": [
          "38",
          "12",
          "16",
          "23"
        ],
        "answer": 2,
        "exp": "L=0, H=9 -> M=(0+9)//2 = 4 -> arr[4] = 16. 23 > 16 bo'lgani uchun 2-yarmiga o'tadi."
      },
      {
        "topic": "05-Mavzu",
        "q": "Yuqoridagi [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] massivda 23 ni izlaganda 2-qadamda L=5, H=9 uchun M=(5+9)//2 nechaga teng?",
        "options": [
          "M = 5 (arr[5] = 23)",
          "M = 8 (arr[8] = 72)",
          "M = 7 (arr[7] = 56)",
          "M = 6 (arr[6] = 38)"
        ],
        "answer": 2,
        "exp": "05-mavzu 4-slayd: 2-qadamda L=5, H=9, M=7 (56), 23 < 56 -> chap yarmi olinadi."
      },
      {
        "topic": "06-Mavzu",
        "q": "Nima uchun Counting Sort taqqoslash (Comparison Sort) algoritmi EMAS?",
        "options": [
          "Chunki u faqat GPU da ishlaydi",
          "Chunki u arr[i] > arr[j] kabi taqqoslashga asoslanmaydi, avval sanaydi va keyin joyiga qo'yadi",
          "Chunki u faqat 2 ta elementni saralaydi",
          "Chunki u elementlarni ko'paytiradi"
        ],
        "answer": 1,
        "exp": "06-mavzu slayd: Counting Sort = avval sanaydi, keyin joyiga qo'yadi; arr[i] > arr[j] taqqoslashga asoslanmaydi."
      },
      {
        "topic": "06-Mavzu",
        "q": "'Barqaror saralash' atamasining inglizcha ekvivalenti qaysi?",
        "options": [
          "Stable Sorting",
          "Unstable Sorting",
          "Adjacent Swaps",
          "Quadratic Complexity"
        ],
        "answer": 0,
        "exp": "06-mavzu terminlar jadvali: Barqaror saralash — Stable Sorting."
      },
      {
        "topic": "06-Mavzu",
        "q": "'Qo'shni elementlar' va 'O'rin almashtirish' terminlarining inglizcha nomlari qaysi?",
        "options": [
          "Nested Loop va Complexity",
          "Ascending Order va Descending Order",
          "Adjacent Elements va Swap",
          "Key Value va Comparison"
        ],
        "answer": 2,
        "exp": "06-mavzu terminlar jadvali: Qo'shni elementlar — Adjacent Elements; O'rin almashtirish — Swap."
      },
      {
        "topic": "07-Mavzu",
        "q": "Merge Sort da solishtirish mezonini belgilovchi atama inglizchada nima deyiladi?",
        "options": [
          "Activation Record",
          "Pivot",
          "Comparator",
          "Iterator"
        ],
        "answer": 2,
        "exp": "07-mavzu terminlar jadvali: Taqqoslash mezoni — Comparator."
      },
      {
        "topic": "07-Mavzu",
        "q": "Sheyker (Cocktail / Shaker) saralash qaysi algoritmning takomillashtirilgan ko'rinishi?",
        "options": [
          "Selection Sort ning",
          "Quick Sort ning",
          "Heap Sort ning",
          "Bubble Sort ning (ikki yo'nalishli pufakcha saralash)"
        ],
        "answer": 3,
        "exp": "07-mavzu slayd: Sheyker saralash — Bubble Sort ning takomillashtirilgan ko'rinishi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Cocktail Sort da Forward Pass va Backward Pass nima vazifa bajaradi?",
        "options": [
          "Ikkalasi ham faqat chapdan o'ngga yuradi",
          "Forward Pass katta elementlarni o'ngga, Backward Pass kichik elementlarni chapga olib keladi",
          "Faqat massivni teskari aylantiradi",
          "Forward Pass kichik elementni o'ngga, Backward Pass kattasini chapga oladi"
        ],
        "answer": 1,
        "exp": "07-mavzu slayd: Forward Pass → katta elementlarni o'ngga; Backward Pass → kichik elementlarni chapga."
      },
      {
        "topic": "08-Mavzu",
        "q": "Complexity Order (Best → Worst) dagi TO'G'RI ketma-ketlikni ko'rsating:",
        "options": [
          "O(1) → O(n) → O(log n) → O(n²) → O(n log n) → O(2^n) → O(n!)",
          "O(1) → O(log n) → O(n) → O(n log n) → O(n²) → O(2^n) → O(n!)",
          "O(log n) → O(1) → O(n) → O(n log n) → O(2^n) → O(n²) → O(n!)",
          "O(n!) → O(2^n) → O(n²) → O(n log n) → O(n) → O(log n) → O(1)"
        ],
        "answer": 1,
        "exp": "08-mavzu Complexity Order jadvali: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n) < O(n!)."
      },
      {
        "topic": "08-Mavzu",
        "q": "n = 1000 bo'lganda O(1), O(n) va O(n²) sinflari mos ravishda nechta amal bajaradi?",
        "options": [
          "1; 100; 10 000",
          "1; 1 000; 1 000 000",
          "10; 1 000; 100 000",
          "1; 10; 1 000"
        ],
        "answer": 1,
        "exp": "08-mavzu taqqoslash jadvali: n=1000 -> O(1)=1, O(n)=1000, O(n²)=1 000 000."
      },
      {
        "topic": "08-Mavzu",
        "q": "n = 100 bo'lganda O(1), O(n) va O(n²) sinflari mos ravishda nechta amal bajaradi?",
        "options": [
          "1; 200; 10 000",
          "1; 10; 100",
          "1; 100; 10 000",
          "100; 1 000; 100 000"
        ],
        "answer": 2,
        "exp": "08-mavzu jadvali: n=100 -> O(1)=1, O(n)=100, O(n²)=10 000."
      },
      {
        "topic": "03-Mavzu",
        "q": "Quyidagi C++ qatoridagi ternar operator nimani bajaradi?\n<pre>cout &lt;&lt; (A[i][j]=rand()%100) &lt;&lt; ((j==n-1)?\"\\n\":\"\\t\");</pre>",
        "options": [
          "Faqat bitta elementni chop etadi",
          "Har doim faqat yangi qatorga o'tadi",
          "Satr oxirgi ustunida (j==n-1) yangi qatorga o'tadi, aks holda tabulyatsiya (\\t) tashlaydi",
          "Massivni 0 bilan to'ldiradi"
        ],
        "answer": 2,
        "exp": "03-mavzu 6-slayd: j == n-1 bo'lsa '\\n' (keyingi satr), aks holda '\\t' (bo'shliq)."
      }
    ]
  },
  {
    "variant": 4,
    "title": "4-Variant: C++/Python Kod Tahlili & Amaliy Masalalar",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "Algoritmlarni ifodalashning 3 ta asosiy usuliga qaysilar kiradi?",
        "options": [
          "Yaratish, Tanlash, Yangilash amallari",
          "Statik, Yarimstatik, Dinamik turlar",
          "So'z-formulali, Grafik-chizma, Dasturiy ko'rinish",
          "Abstrakt, Mantiqiy, Fizik bosqichlar"
        ],
        "answer": 2,
        "exp": "01-mavzu 8-slayd: A) So'z-formulali, B) Grafik-chizma, C) Dasturiy ko'rinish."
      },
      {
        "topic": "01-Mavzu",
        "q": "Algoritmning mantig'ini inson o'qishi mumkin bo'lgan yarim-dasturiy ifoda shakli nima?",
        "options": [
          "Giperkod",
          "Psevdokod",
          "Mashina kodi",
          "Bayt-kod"
        ],
        "answer": 1,
        "exp": "01-mavzu 8-slayd: Psevdokod — uning mantig'ini inson o'qishi mumkin bo'lgan ixtisoslashtirilgan tasvir."
      },
      {
        "topic": "01-Mavzu",
        "q": "Ma'lumotlarni tasvirlashning 3 bosqichi qaysi tartibda bajariladi?",
        "options": [
          "Abstrakt (matematik) → Mantiqiy → Fizik (jismoniy)",
          "Fizik (jismoniy) → Mantiqiy → Abstrakt (matematik)",
          "Mantiqiy → Abstrakt (matematik) → Fizik (jismoniy)",
          "Abstrakt (matematik) → Fizik (jismoniy) → Mantiqiy"
        ],
        "answer": 0,
        "exp": "01-mavzu 9-slayd: 1) Abstrakt bosqich, 2) Mantiqiy bosqich, 3) Fizik bosqich."
      },
      {
        "topic": "02-Mavzu",
        "q": "Foydalanuvchi tomonidan aniqlanadigan (User Defined) 6 ta tur ro'yxatiga qaysi qator to'g'ri mos keladi?",
        "options": [
          "INT, FLOAT, BOOL, CHAR, POINTER, VOID",
          "ENUM, STRUCTURE, UNION, ARRAY, CLASS, OBJEKT",
          "HEAP, STACK, GLOBAL, CODE, RAM, ROM",
          "VECTOR, LIST, DEQUE, SET, MAP, STACK"
        ],
        "answer": 1,
        "exp": "02-mavzu 4-slayd: a) ENUM, b) STRUCTURE, c) UNION, d) ARRAY, e) CLASS, f) OBJEKT."
      },
      {
        "topic": "02-Mavzu",
        "q": "N ta razryadli qo'shimcha kodda tasvirlanadigan x ishorali butun son qaysi shartni qanoatlantirishi lozim?",
        "options": [
          "-2^(N-1) < x <= 2^N",
          "-2^(N-1) <= x < 2^(N-1)",
          "0 <= x <= 2^(N-1)",
          "-2^N <= x < 2^N"
        ],
        "answer": 1,
        "exp": "02-mavzu 6-slayd: -2^(N-1) <= x < 2^(N-1)."
      },
      {
        "topic": "02-Mavzu",
        "q": "N ta razryadli ishorasiz (unsigned) butun sonlarning qiymat qabul qilish oralig'i qanday?",
        "options": [
          "-2^(N-1) .. 2^(N-1) - 1",
          "0 .. 2^N - 1",
          "1 .. 2^N",
          "0 .. 2^(N-1) - 1"
        ],
        "answer": 1,
        "exp": "02-mavzu 6-slayd: a) ishorasiz sonlar uchun (0 .. 2^N - 1)."
      },
      {
        "topic": "03-Mavzu",
        "q": "A[i][j] = rand() % 100 ifodasi qaysi oraliqdagi tasodifiy sonlarni beradi?",
        "options": [
          "1 dan 99 gacha",
          "0 dan 100 gacha",
          "0 dan 99 gacha",
          "1 dan 100 gacha"
        ],
        "answer": 2,
        "exp": "100 ga bo'lgandagi qoldiq 0..99 oraliqda bo'ladi."
      },
      {
        "topic": "03-Mavzu",
        "q": "STL (Standard Template Library) yadrosi qaysi 3 ta asosiy komponentdan iborat?",
        "options": [
          "Konteynerlar, Algoritmlar, Iteratorlar",
          "Stack, Heap, Global",
          "Massivlar, Yozuvlar, To'plamlar",
          "Klasslar, Obyektlar, Ko'rsatkichlar"
        ],
        "answer": 0,
        "exp": "03-mavzu 7-slayd: STL yadrosi uchta elementdan iborat: konteynerlar, algoritmlar va iteratorlar."
      },
      {
        "topic": "03-Mavzu",
        "q": "STL standart konteynerlari shartli ravishda qaysi ikkita guruhga ajratiladi?",
        "options": [
          "Chiziqli va Assotsiativ",
          "Statik va Dinamik",
          "Ochiq va Yopiq",
          "Butun va Haqiqiy"
        ],
        "answer": 0,
        "exp": "03-mavzu 7-slayd: chiziqli (array, vector, stack, queue, deque, list, forward_list, string) va assosiativ (set, map)."
      },
      {
        "topic": "04-Mavzu",
        "q": "04-mavzu 6-slaydda 'Rekursiv obyektlar' ga qaysi grafik misollar keltirilgan?",
        "options": [
          "Kitob javonlari va o'yin kartalari",
          "Quymoqlar va pufakchalar",
          "Matryoshka qo'g'irchoqlari, piyoz va karam kesimi (o'z-o'zini takrorlovchi obyektlar)",
          "Kuchlanish va tok transformatori"
        ],
        "answer": 2,
        "exp": "04-mavzu 6-slayd: matryoshka qo'g'irchoqlari, qizil piyoz va karam qatlamlari."
      },
      {
        "topic": "04-Mavzu",
        "q": "Call Stack (Chaqiriqlar steki) ning ishlash qoidasi qaysi?",
        "options": [
          "LIFO — Last In, First Out (Oxirgi kirgan, birinchi chiqadi)",
          "FIFO — First In, First Out (Birinchi kirgan, birinchi chiqadi)",
          "Random Access — Ixtiyoriy kirish",
          "LILO — Last In, Last Out"
        ],
        "answer": 0,
        "exp": "04-mavzu 7-slayd: LIFO (Last In, First Out) — ustma-ust taxlangan likopchalar kabi."
      },
      {
        "topic": "04-Mavzu",
        "q": "Dasturda funksiya chaqirilganda Call Stack ning eng yuqorisiga joylashish amali nima deyiladi?",
        "options": [
          "Push",
          "Pop",
          "Flip",
          "Swap"
        ],
        "answer": 0,
        "exp": "04-mavzu 7-slayd: chaqirilganda eng yuqoriga joylashadi (Push)."
      },
      {
        "topic": "05-Mavzu",
        "q": "Binar qidiruv algoritmining asosiy kamchiligi nimada?",
        "options": [
          "Ma'lumotlar to'plamining albatta tartiblangan bo'lishi zarurligi (tartiblash ham vaqt oladi)",
          "Katta massivlarda juda sekin ishlashi",
          "O(n²) qo'shimcha xotira sarflashi",
          "Faqat Python tilida yozilishi"
        ],
        "answer": 0,
        "exp": "05-mavzu 6-slayd: Asosiy kamchiligi — ma'lumotlar to'plamining tartiblangan bo'lishi zarurligi."
      },
      {
        "topic": "05-Mavzu",
        "q": "05-mavzu 7-slaydda sanab o'tilgan qidiruvning 4 ta turi qaysilar?",
        "options": [
          "Push, Pop, Peek, Clear",
          "Bubble, Selection, Insertion, Merge",
          "Chiziqli, Binar, Sakrab (Jump) va Xeshlash (Hash) qidiruv",
          "Direct, Indirect, Tail, Mutual"
        ],
        "answer": 2,
        "exp": "05-mavzu 7-slayd: Chiziqli, Binar, Sakrab qidiruv, Xeshlash orqali qidiruv."
      },
      {
        "topic": "05-Mavzu",
        "q": "arr = [10, 20, 30, 40, 50] da binary_search(arr, 25) nima qaytaradi?",
        "options": [
          "2",
          "3",
          "-1",
          "25"
        ],
        "answer": 2,
        "exp": "05-mavzu 12-slayd: Natija -1, chunki 25 qiymati ro'yxatda yo'q."
      },
      {
        "topic": "06-Mavzu",
        "q": "'O'sish tartibi' va 'Kamayish tartibi' inglizchada qanday nomlanadi?",
        "options": [
          "Forward Pass va Backward Pass",
          "Sorted Array va Unsorted Array",
          "Ascending Order va Descending Order",
          "Best Case va Worst Case"
        ],
        "answer": 2,
        "exp": "06-mavzu jadvali: O'sish tartibi — Ascending Order; Kamayish tartibi — Descending Order."
      },
      {
        "topic": "06-Mavzu",
        "q": "Bubble Sort algoritmining hayotiy analogiyasi slaydda qanday tasvirlangan?",
        "options": [
          "Kurakcha bilan quymoqni ag'darish",
          "Qo'ldagi o'yin kartalarini tartiblash",
          "Suv pufakchalari kabi eng katta elementning yuqoriga (oxiriga) ko'tarilishi",
          "Javondan eng kichik kitobni tanlab oldinga qo'yish"
        ],
        "answer": 2,
        "exp": "06-mavzu slayd: Bubble Sort — Bubbles rising to the top."
      },
      {
        "topic": "06-Mavzu",
        "q": "Selection Sort algoritmining hayotiy analogiyasi qaysi?",
        "options": [
          "Quymoqni kurakcha bilan ag'darish",
          "Pufakchalarning suv yuziga chiqishi",
          "Eng kichik kitobni tanlab oldingi o'ringa qo'yish",
          "Qo'ldagi o'yin kartalarini tartiblash"
        ],
        "answer": 2,
        "exp": "06-mavzu slayd: Selection Sort — Selecting the smallest book and placing it at the front."
      },
      {
        "topic": "07-Mavzu",
        "q": "Cocktail Sort da agar Forward Pass davomida hech qanday swap bo'lmasa (if not swapped:), algoritm nima qiladi?",
        "options": [
          "Cheksiz siklga kiradi",
          "Massivni boshidan aralashtiradi",
          "end ni 2 ga ko'paytiradi",
          "break qilib to'xtaydi (massiv allaqachon tartiblangan)"
        ],
        "answer": 3,
        "exp": "07-mavzu Cocktail Sort kodi: if not swapped: break."
      },
      {
        "topic": "07-Mavzu",
        "q": "Cocktail Sort da orqaga yurish sikli range(len(arr) - 2, -1, -1) da har bir son nimani bildiradi?",
        "options": [
          "-2: 2 ta qadam sakrash; -1: massiv oxiri; -1: o'chirish",
          "-2: oxiridan bir oldingi indeksdan boshlash; -1: 0-indeksgacha borish; -1: bir qadam orqaga yurish",
          "0 dan boshlab oxirigacha 2 qadam yurish",
          "Faqat oxirgi elementni tekshirish"
        ],
        "answer": 1,
        "exp": "07-mavzu slayd tushuntirishi: 1-parametr oxiridan bir oldingi indeks, 2-parametr 0 gacha chegara, 3-parametr orqaga qadam."
      },
      {
        "topic": "07-Mavzu",
        "q": "Cocktail Sort da Forward Pass dan keyin end va Backward Pass dan keyin start qanday o'zgaradi?",
        "options": [
          "end //= 2 va start *= 2",
          "Ikkalasi ham o'zgarmaydi",
          "end -= 1 va start += 1",
          "end += 1 va start -= 1"
        ],
        "answer": 2,
        "exp": "07-mavzu slayd: Forward dan keyin end -= 1; Backward dan keyin start += 1."
      },
      {
        "topic": "08-Mavzu",
        "q": "n = 10 bo'lganda O(1), O(n) va O(n²) sinflari mos ravishda nechta amal bajaradi?",
        "options": [
          "1; 3; 100",
          "1; 20; 100",
          "1; 10; 100",
          "10; 100; 1 000"
        ],
        "answer": 2,
        "exp": "08-mavzu jadvali: n=10 -> O(1)=1, O(n)=10, O(n²)=100."
      },
      {
        "topic": "08-Mavzu",
        "q": "log2(n) matematik jihatdan nimani bildiradi?",
        "options": [
          "n ning kvadrat ildizini",
          "n sonini 2 ga necha marta bo'lsak 1 ga yetishini (darajaning aksi)",
          "n sonini 2 ga ko'paytirishni",
          "n ta sonning yig'indisini"
        ],
        "answer": 1,
        "exp": "08-mavzu slayd: log2(n) = n sonini 2 ga necha marta bo'lsak 1 ga yaqinlashadi?"
      },
      {
        "topic": "08-Mavzu",
        "q": "2^4 = 16 bo'lsa, log2(16) nechaga teng?",
        "options": [
          "4",
          "16",
          "8",
          "2"
        ],
        "answer": 0,
        "exp": "08-mavzu Eksponenta/Logarifm jadvali: 2^4 = 16 -> log2(16) = 4."
      },
      {
        "topic": "04-Mavzu",
        "q": "Funksiya bajarilib bo'lingach stekdan o'chirib tashlanish amali nima deyiladi?",
        "options": [
          "Extend",
          "Push",
          "Merge",
          "Pop"
        ],
        "answer": 3,
        "exp": "04-mavzu 7-slayd: bajarilib bo'lingach stekdan o'chirib tashlanadi (Pop)."
      }
    ]
  },
  {
    "variant": 5,
    "title": "5-Variant: Munosabatlar, Call Stack & Saralash",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "Ma'lumotlarni tasvirlashning qaysi bosqichida masalaning texnik qo'yilishi va matematik modeli quriladi?",
        "options": [
          "Kompilyatsiya bosqichida",
          "Fizik (jismoniy) bosqichda",
          "Abstrakt bosqichda",
          "Mantiqiy bosqichda"
        ],
        "answer": 2,
        "exp": "01-mavzu 10-slayd: Abstrakt bosqichda masalaning texnik qo'yilishi va matematik modeli quriladi."
      },
      {
        "topic": "01-Mavzu",
        "q": "Masalani biror dasturlash tilida kodi (dasturi) ishlab chiqilishi qaysi bosqichga to'g'ri keladi?",
        "options": [
          "Abstrakt bosqichga",
          "Asimptotik bosqichga",
          "Mantiqiy bosqichga",
          "Fizik (jismoniy) bosqichga"
        ],
        "answer": 2,
        "exp": "01-mavzu 10-slayd: Mantiqiy bosqichda masalaning dasturlash tilidagi kodi ishlab chiqiladi."
      },
      {
        "topic": "01-Mavzu",
        "q": "Informatsion obyektni kompyuter xotirasida akslantirilishi qaysi bosqichda tushuniladi?",
        "options": [
          "Abstrakt bosqichda",
          "Fizik (jismoniy) bosqichda",
          "Mantiqiy bosqichda",
          "Grafik bosqichda"
        ],
        "answer": 1,
        "exp": "01-mavzu 10-slayd: Fizik bosqichda mantiqiy tavsifga mos ravishda kompyuter xotirasida akslantirish tushuniladi."
      },
      {
        "topic": "02-Mavzu",
        "q": "N=8 razryadli ishorali (signed) butun son qanday qiymat oralig'ida bo'ladi?",
        "options": [
          "0 .. 255",
          "-256 .. 255",
          "-128 .. 127",
          "-127 .. 128"
        ],
        "answer": 2,
        "exp": "-2^(8-1) = -128 dan 2^(8-1)-1 = 127 gacha."
      },
      {
        "topic": "02-Mavzu",
        "q": "N=8 razryadli ishorasiz (unsigned) butun son qanday qiymat oralig'ida bo'ladi?",
        "options": [
          "0 .. 256",
          "0 .. 255",
          "-128 .. 127",
          "0 .. 127"
        ],
        "answer": 1,
        "exp": "0 dan 2^8 - 1 = 255 gacha."
      },
      {
        "topic": "02-Mavzu",
        "q": "C++ tilida ishorasiz sonlar bo'lishini ko'rsatish uchun qaysi kalit so'z ishlatiladi?",
        "options": [
          "signed",
          "unsigned",
          "positive",
          "unbounded"
        ],
        "answer": 1,
        "exp": "02-mavzu 6-slayd: C++ tilida ishorasiz sonlar uchun unsigned kalit so'zi ishlatiladi."
      },
      {
        "topic": "03-Mavzu",
        "q": "Qaysi chiziqli STL konteynerlarida istalgan elementga uning indeksi bilan bevosita murojaat qilish mumkin?",
        "options": [
          "array, vector va deque",
          "stack va queue",
          "list va forward_list",
          "set va map"
        ],
        "answer": 0,
        "exp": "03-mavzu 7-slayd: array, vector va deque konteynerlarida istalgan elementga indeksi bilan murojaat qilish mumkin."
      },
      {
        "topic": "03-Mavzu",
        "q": "Qaysi konteynerlar faqat ma'lum bir (chekka) elementlarga murojaat qilishga imkon beradi?",
        "options": [
          "deque va string",
          "stack va queue",
          "vector va array",
          "map va set"
        ],
        "answer": 1,
        "exp": "03-mavzu 7-slayd: stack va queue konteynerlari esa faqat ma'lum bir elementlarga murojaat qilishga imkon beradi."
      },
      {
        "topic": "03-Mavzu",
        "q": "STL da 'Asosiy konteynerlar' ro'yxatiga qaysilar kiradi?",
        "options": [
          "int, float, double, char",
          "vector, list, deque, set, multiset, map",
          "stack, queue, priority_queue",
          "input_iterator, output_iterator"
        ],
        "answer": 1,
        "exp": "03-mavzu 8-slayd: Asosiy konteynerlar — vector, list, deque, set, multiset, map."
      },
      {
        "topic": "04-Mavzu",
        "q": "Stack Frame ba'zan inglizchada yana qanday nom bilan ataladi?",
        "options": [
          "Activation Record",
          "Memory Leak",
          "Heap Segment",
          "Base Record"
        ],
        "answer": 0,
        "exp": "04-mavzu 8-slayd: Stack Frame (ba'zan Activation Record ham deyiladi) — Call Stack ichidagi alohida blok."
      },
      {
        "topic": "04-Mavzu",
        "q": "Stack Frame ichida saqlanadigan ma'lumotlarga qaysilar kiradi?",
        "options": [
          "Function parametrlari, lokal o'zgaruvchilar, qaytish manzili (return address), oraliq holat",
          "Faqat Heap dagi dinamik massivlar",
          "Faqat global o'zgaruvchilar va dastur nomi",
          "Faqat static konstantalar"
        ],
        "answer": 0,
        "exp": "04-mavzu 8 va 9-slayd: parametrlar, lokal o'zgaruvchilar, return address, oraliq holat."
      },
      {
        "topic": "04-Mavzu",
        "q": "Qaytish manzili (Return Address) ning vazifasi nima?",
        "options": [
          "Lokal o'zgaruvchilarni globalga aylantirish",
          "Funksiyani boshqa faylga yozish",
          "Funksiya tugagach dastur kodning qaysi qatoriga qaytib borishi kerakligini ko'rsatish",
          "Heap xotirasini tozalash"
        ],
        "answer": 2,
        "exp": "04-mavzu 8-slayd: Funksiya tugagach dastur kodning qaysi qatoriga qaytib borishi kerakligi haqidagi ko'rsatma."
      },
      {
        "topic": "05-Mavzu",
        "q": "Binary Search da agar arr[mid] < key bo'lsa, chap chegara L qanday o'zgartiriladi?",
        "options": [
          "L = mid - 1",
          "L = mid + 1",
          "R = mid - 1",
          "R = mid + 1"
        ],
        "answer": 1,
        "exp": "05-mavzu 12-slayd: elif arr[mid] < key: L = mid + 1."
      },
      {
        "topic": "05-Mavzu",
        "q": "Binary Search da agar arr[mid] > key bo'lsa, o'ng chegara R qanday o'zgartiriladi?",
        "options": [
          "L = mid + 1",
          "R = mid + 1",
          "R = mid - 1",
          "L = mid - 1"
        ],
        "answer": 2,
        "exp": "05-mavzu 12-slayd: else: R = mid - 1."
      },
      {
        "topic": "05-Mavzu",
        "q": "Sakrab qidiruv (Jump Search) qaysi turdagi ro'yxatda ishlaydi?",
        "options": [
          "Tartiblangan ro'yxatda",
          "Tartiblanmagan ro'yxatda",
          "Faqat bo'sh ro'yxatda",
          "Faqat Xesh jadvalda"
        ],
        "answer": 0,
        "exp": "05-mavzu 15-slayd: Sakrab qidiruv, ya'ni Jump Search algoritmi tartiblangan ro'yxatda ishlaydi."
      },
      {
        "topic": "06-Mavzu",
        "q": "Insertion Sort algoritmining hayotiy analogiyasi qaysi?",
        "options": [
          "Suv pufakchalarining suzib chiqishi",
          "Eng kichik kitobni tanlab oldinga qo'yish",
          "Quymoq taxlamini ag'darish",
          "Qo'lingizdagi o'yin kartalarini tartiblash"
        ],
        "answer": 3,
        "exp": "06-mavzu slayd: Insertion Sort — Sorting playing cards in your hand."
      },
      {
        "topic": "06-Mavzu",
        "q": "Pancake Sort algoritmining hayotiy analogiyasi qaysi?",
        "options": [
          "O'yin kartalarini chapdan o'ngga qo'yish",
          "Kutubxonadan raqamli javonni ochish",
          "Kurakcha (spatula) yordamida quymoqlarni ag'darish (flip)",
          "Kitob javonini tartiblash"
        ],
        "answer": 2,
        "exp": "06-mavzu slayd: Pancake Sort — Using a spatula to flip pancakes."
      },
      {
        "topic": "06-Mavzu",
        "q": "[5, 1, 4, 2, 8] massivida Bubble Sort ning 1-o'tish (Pass 1) dan keyingi holati qanday bo'ladi?",
        "options": [
          "[1, 2, 4, 5, 8]",
          "[5, 4, 2, 1, 8]",
          "[1, 5, 4, 2, 8]",
          "[1, 4, 2, 5, 8]"
        ],
        "answer": 3,
        "exp": "06-mavzu infografika: Pass 1 da 5 va 1 -> [1,5,4,2,8] -> [1,4,5,2,8] -> [1,4,2,5,8] (8 joyida)."
      },
      {
        "topic": "07-Mavzu",
        "q": "Shell Sort 1959-yilda kim tomonidan taklif qilingan?",
        "options": [
          "Tim Peters",
          "Donald Shell",
          "Tony Hoare",
          "J. W. J. Williams"
        ],
        "answer": 1,
        "exp": "07-mavzu slayd: Shell Sort 1959-yilda amerikalik olim Donald Shell tomonidan taklif qilingan."
      },
      {
        "topic": "07-Mavzu",
        "q": "Shell Sort ning asosiy g'oyasi nima?",
        "options": [
          "Pivot tanlab ikkiga ajratish",
          "Elementlarni faqat yonma-yon emas, ma'lum masofadagi (gap/interval) elementlar bilan taqqoslash",
          "Massivni har safar ikkiga bo'lib yangi massiv yaratish",
          "Max Heap qurib ildizini oxirga qo'yish"
        ],
        "answer": 1,
        "exp": "07-mavzu slayd: ma'lum masofadagi (gap) elementlar bilan taqqoslash, gap=1 da Insertion Sort kabi yakunlash."
      },
      {
        "topic": "07-Mavzu",
        "q": "Shell Sort da [40, 51, 8, 38, 90, 14] (n=6) massivida gap=3 bo'lganda qaysi juftliklar solishtiriladi?",
        "options": [
          "(40 va 14), (51 va 8), (38 va 90)",
          "(40 va 51), (8 va 38), (90 va 14)",
          "(40 va 38), (51 va 90), (8 va 14)",
          "(40 va 8), (51 va 38), (90 va 14)"
        ],
        "answer": 2,
        "exp": "07-mavzu slayd: arr[0] va arr[3] (40,38), arr[1] va arr[4] (51,90), arr[2] va arr[5] (8,14)."
      },
      {
        "topic": "08-Mavzu",
        "q": "log2(2048) qiymati nechaga teng?",
        "options": [
          "12",
          "10",
          "11",
          "1024"
        ],
        "answer": 2,
        "exp": "08-mavzu slayd: Agar ro'yxatimiz 2048 elementdan iborat bo'lsa, Binary Search qadamlari log2(2048) = 11 ga teng."
      },
      {
        "topic": "08-Mavzu",
        "q": "1 dan 100 gacha son o'ylash o'yinida (o'ylangan son 30) Linear Search va Binary Search nechtadan savol so'raydi?",
        "options": [
          "Linear Search — 6 marta; Binary Search — 30 marta",
          "Linear Search — 30 marta; Binary Search — 6 marta",
          "Linear Search — 100 marta; Binary Search — 50 marta",
          "Ikkalasi ham 15 marta"
        ],
        "answer": 1,
        "exp": "08-mavzu slayd: Linear Search 30 marta so'raydi, Binary Search esa 50 -> 25 -> ... qilib 6-qadamda topadi."
      },
      {
        "topic": "08-Mavzu",
        "q": "40 000 so'zli lug'atdan oxirgi so'zni topish uchun Linear Search 40 000 qadam qilsa, Binary Search nechta qadam qiladi?",
        "options": [
          "40 qadam",
          "20 000 qadam",
          "400 qadam",
          "15 qadam"
        ],
        "answer": 3,
        "exp": "08-mavzu slayd: chiziqli qidiruv 40 000 qadamdan, binary search esa 15 qadamdan iborat bo'ladi xolos."
      },
      {
        "topic": "05-Mavzu",
        "q": "Jump Search da bloklarni o'tkazish qadami qanday formula bilan topiladi?",
        "options": [
          "Ildiz osti N (qadam = int(math.sqrt(n)))",
          "n // 2",
          "log2(n)",
          "n - 1"
        ],
        "answer": 0,
        "exp": "05-mavzu 14 va 15-slayd: Bloklarni o'tqazish uchun qadami ildiz osti N ga teng."
      }
    ]
  },
  {
    "variant": 6,
    "title": "6-Variant: Klassifikatsiya, Xeshlash & Heap Sort",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "Munosabatlar to'plami bo'sh (R = 0) bo'lgan elementlar majmuasi qanday tuzilma deyiladi?",
        "options": [
          "Ketma-ketlik",
          "To'plam",
          "Graf",
          "Matritsa"
        ],
        "answer": 1,
        "exp": "01-mavzu 11-slayd: To'plam — munosabat to'plami bo'sh R=0 bo'lgan elementlar majmuasi."
      },
      {
        "topic": "01-Mavzu",
        "q": "Birinchi va oxirgi elementdan tashqari har bir elementda o'zidan oldin va keyin keladigan element mavjud bo'lgan tuzilma qaysi?",
        "options": [
          "Daraxt",
          "To'plam",
          "Gipergraf",
          "Ketma-ketlik"
        ],
        "answer": 3,
        "exp": "01-mavzu 11-slayd: Ketma-ketlik — bitta chiziqli munosabatdan iborat, misol R={(A,B),(B,C),(C,D)}."
      },
      {
        "topic": "01-Mavzu",
        "q": "Qaysi ma'lumotlar tuzilmasida R munosabatlar to'plami ikkita chiziqli munosabatdan (satr va ustun) tashkil topgan?",
        "options": [
          "Daraxt",
          "Matritsa",
          "To'plam",
          "Ketma-ketlik"
        ],
        "answer": 1,
        "exp": "01-mavzu 11-slayd: Matritsa — R to'plami satr va ustun ko'rinishidagi ikkita chiziqli munosabatdan iborat."
      },
      {
        "topic": "02-Mavzu",
        "q": "Butun son turdagi o'zgaruvchilarni e'lon qilish sintaksisida qaysi modifikatorlar to'g'ri berilgan?",
        "options": [
          "[float|double] short | long | int <identifier>;",
          "[signed|unsigned] char | bool | void <identifier>;",
          "[const|var] real | integer <identifier>;",
          "[signed|unsigned] short | long | int | long long <identifier>;"
        ],
        "answer": 3,
        "exp": "02-mavzu 6-slayd: [signed|unsigned] short | long | int | long long <identifier>;"
      },
      {
        "topic": "02-Mavzu",
        "q": "Haqiqiy sonlar EHM xotirasida qaysi formatda saqlanadi?",
        "options": [
          "Qo'zg'aluvchan nuqta formatida (x = +/- M * q^(+/-P))",
          "Faqat birlashma (union) formatida",
          "Faqat o'nlik satr (string) formatida",
          "Qo'zg'almas nuqta formatida"
        ],
        "answer": 0,
        "exp": "02-mavzu 7-slayd: EHM xotirasida haqiqiy sonlar asosan qo'zg'aluvchan nuqta formatida saqlanadi."
      },
      {
        "topic": "02-Mavzu",
        "q": "Qo'zg'aluvchan nuqta formatidagi sonning chizmada ko'rsatilgan 4 ta qismi qaysilar?",
        "options": [
          "Mantissa | Indeks | Razryad | Bayt",
          "Butun qism | Kasr qism | Nuqta | Ishora",
          "Ishora | Manzil | Qiymat | Tur",
          "Mantissa ishorasi | Mantissa | Tartib ishorasi | Tartib"
        ],
        "answer": 3,
        "exp": "02-mavzu 7-slayd chizmasida: Mantissa ishorasi | Mantissa | Tartib ishorasi | Tartib."
      },
      {
        "topic": "03-Mavzu",
        "q": "STL da 'Xosila konteynerlar' ro'yxatiga qaysilar kiradi?",
        "options": [
          "array, string, forward_list",
          "set, multiset, map",
          "vector, list, deque",
          "stack, queue, priority_queue"
        ],
        "answer": 3,
        "exp": "03-mavzu 8-slayd: Xosila konteynerlar — stack (stek), queue (navbat), priority_queue (ustuvor navbat)."
      },
      {
        "topic": "03-Mavzu",
        "q": "STL da 'vector' konteynerining ta'rifi nima?",
        "options": [
          "Dinamik massiv",
          "Ikki tarafli tartib",
          "Chiziqli ro'yxat",
          "Ustuvor navbat"
        ],
        "answer": 0,
        "exp": "03-mavzu 8-slayd: vector <vector> dinamik massiv."
      },
      {
        "topic": "03-Mavzu",
        "q": "STL da 'list' konteyneri nimani anglatadi?",
        "options": [
          "Dinamik massiv",
          "Chiziqli ro'yxat (bog'lamli ro'yxat)",
          "Kalit/qiymat juftligi",
          "Stek"
        ],
        "answer": 1,
        "exp": "03-mavzu 8-slayd: list — chiziqli ro'yxat."
      },
      {
        "topic": "04-Mavzu",
        "q": "factorial(4) chaqirilib, Base Case (factorial(1)) ga yetganda Call Stack ning ENG YUQORISIDA (TOP) qaysi freym turadi?",
        "options": [
          "factorial(1) [n = 1]",
          "factorial(4) [n = 4]",
          "factorial(2) [n = 2]",
          "main() [entry]"
        ],
        "answer": 0,
        "exp": "04-mavzu 9-slayd chizmasi: pastdan yuqoriga main() -> factorial(4) -> factorial(3) -> factorial(2) -> factorial(1) TOP."
      },
      {
        "topic": "04-Mavzu",
        "q": "Rekursiv algoritmning Space Complexity (xotira murakkabligi) ko'pincha nimaga bog'liq?",
        "options": [
          "Kodning qatorlar soniga",
          "Faqat CPU chastotasiga",
          "Funksiyaning nom uzunligiga",
          "Chaqiruv chuqurligiga (Call Stack dagi faol freymlar soniga)"
        ],
        "answer": 3,
        "exp": "04-mavzu 9-slayd: Rekursiv algoritmning Space Complexity si ko'pincha chaqiruv chuqurligiga bog'liq."
      },
      {
        "topic": "04-Mavzu",
        "q": "Bir funksiya ichidan bir nechta rekursiv chaqiruv chiqsa (masalan fib(n-1) + fib(n-2)), nima hosil bo'ladi?",
        "options": [
          "Matritsa",
          "Xesh jadval",
          "Bitta chiziqli stek",
          "Rekursiv chaqiruvlar daraxti (Tree)"
        ],
        "answer": 3,
        "exp": "04-mavzu 10-slayd: Bir function ichidan bir nechta rekursiv chaqiruv chiqsa, tree hosil bo'ladi."
      },
      {
        "topic": "05-Mavzu",
        "q": "Agar ro'yxatda 16 ta element bo'lsa, Jump Search da sakrash qadami nechaga teng bo'ladi?",
        "options": [
          "8",
          "16",
          "4",
          "2"
        ],
        "answer": 2,
        "exp": "math.sqrt(16) = 4."
      },
      {
        "topic": "05-Mavzu",
        "q": "Agar ro'yxatda 25 ta element bo'lsa, Jump Search da sakrash qadami nechaga teng bo'ladi?",
        "options": [
          "5",
          "4",
          "25",
          "12"
        ],
        "answer": 0,
        "exp": "math.sqrt(25) = 5."
      },
      {
        "topic": "05-Mavzu",
        "q": "arr = [1, 2, 5, 9, 17, 26, 53, 78, 107] (1-dan indekslashda) 78 soni Jump Search da nechanchi indeksda topiladi?",
        "options": [
          "7",
          "9",
          "8",
          "6"
        ],
        "answer": 2,
        "exp": "05-mavzu 14 va 16-slayd: Kodda indeks 1 dan boshlangan (return i + 1), shuning uchun 78 ning indeksi 8 bo'ladi."
      },
      {
        "topic": "06-Mavzu",
        "q": "[5, 1, 4, 2, 8] massivida Selection Sort ning 1-qadamida (Step 1) nima bo'ladi?",
        "options": [
          "Qo'shni 5 va 1 almashtirilib 8 oxirga olib boriladi",
          "Barcha elementlar bir qadamda [1, 2, 4, 5, 8] bo'ladi",
          "Eng katta 8 oxiridan boshiga o'tadi",
          "Eng kichik element (1) topilib boshidagi 5 bilan almashtiriladi: [1, 5, 4, 2, 8]"
        ],
        "answer": 3,
        "exp": "06-mavzu infografika: Selection Sort Step 1 — find min (1) and place at front -> [1, 5, 4, 2, 8]."
      },
      {
        "topic": "06-Mavzu",
        "q": "Selection Sort ning Best Case, Average va Worst Case vaqt murakkabliklari qanday?",
        "options": [
          "Best O(n), Average va Worst O(n²)",
          "Uchala holatda ham O(n²)",
          "Uchala holatda ham O(n log n)",
          "Best O(1), Worst O(n²)"
        ],
        "answer": 1,
        "exp": "06-mavzu Comparison Table: Selection Sort — Best: O(n²), Avg: O(n²), Worst: O(n²)."
      },
      {
        "topic": "06-Mavzu",
        "q": "Selection Sort algoritmi barqaror (Stable) va moslashuvchan (Adaptive) mi?",
        "options": [
          "Ha (Yes) — ikkalasi ham",
          "Yo'q (No) — barqaror ham emas, moslashuvchan ham emas",
          "Moslashuvchan (Yes), lekin barqaror emas (No)",
          "Barqaror (Yes), lekin moslashuvchan emas (No)"
        ],
        "answer": 1,
        "exp": "06-mavzu Comparison Table: Selection Sort — Stable: No, Adaptive: No."
      },
      {
        "topic": "07-Mavzu",
        "q": "Shell Sort da Donald Shell taklif qilgan oraliqlar ketma-ketligi formulasi qaysi?",
        "options": [
          "d1 = n - 1, di = di-1 - 1, dk = 0",
          "d1 = n / 2, di = di-1 / 2, dk = 1",
          "d1 = √n, dk = 1",
          "d1 = 1, di = di-1 * 2, dk = n"
        ],
        "answer": 1,
        "exp": "07-mavzu slayd: d1 = n / 2; di = di-1 / 2; dk = 1."
      },
      {
        "topic": "07-Mavzu",
        "q": "Shell Sort ning murakkabliklari 07-mavzuda qanday ko'rsatilgan?",
        "options": [
          "Worst: O(2^n), Best: O(n²), Qo'shimcha xotira: O(log n)",
          "Worst: O(n²), Best: O(n log n), Umumiy xotira: O(n), Qo'shimcha xotira: O(1)",
          "Worst: O(n!), Best: O(1), Qo'shimcha xotira: O(1)",
          "Worst: O(n log n), Best: O(n), Qo'shimcha xotira: O(n)"
        ],
        "answer": 1,
        "exp": "07-mavzu slayd: Eng yomon O(n²), Eng yaxshi O(n log n), Umumiy xotira O(n), Qo'shimcha xotira O(1)."
      },
      {
        "topic": "07-Mavzu",
        "q": "Shell Sort ning oxirgi bosqichida gap nechaga teng bo'ladi va u qaysi algoritm kabi ishlaydi?",
        "options": [
          "gap = 1 bo'ladi va oddiy Insertion Sort kabi ishlaydi",
          "gap = 0 bo'ladi va Bubble Sort kabi ishlaydi",
          "gap = n bo'ladi va Selection Sort kabi ishlaydi",
          "gap = 2 bo'ladi va Merge Sort kabi ishlaydi"
        ],
        "answer": 0,
        "exp": "07-mavzu slayd: Oxirida gap = 1 bo'lganda oddiy Insertion Sort kabi ishlaydi."
      },
      {
        "topic": "08-Mavzu",
        "q": "Lug'at tarkibi 40 000 dan 80 000 so'zga (2 barobar) ko'paytirilsa, Binary Search qadamlari soni qanday o'zgaradi?",
        "options": [
          "Bor yo'g'i 1 qadamga (15 dan 16 qadamga) oshadi",
          "Umuman o'zgarmaydi",
          "40 000 qadamga oshadi",
          "2 barobar oshib 30 qadam bo'ladi"
        ],
        "answer": 0,
        "exp": "08-mavzu slayd: chiziqli qidiruv 2 barobar oshadi, binary search esa bor yo'g'i 1 qadamga (16 qadam) oshadi."
      },
      {
        "topic": "08-Mavzu",
        "q": "08-mavzudagi Google misolida yangi ****@gmail.com akkaunti bandligini tekshirish qaysi algoritmga o'xshatilgan?",
        "options": [
          "Binary Search (Ikkilik qidiruv) — ro'yxat o'rtasidan tekshirish",
          "Stack Overflow",
          "Factorial Time O(n!)",
          "Bubble Sort"
        ],
        "answer": 0,
        "exp": "08-mavzu slayd: Google akkaunt bandligini tekshirish va Ingliz-O'zbek lug'atidan 'Programming' qidirish Binary Search misollari."
      },
      {
        "topic": "08-Mavzu",
        "q": "Ingliz-O'zbek lug'atidan 'Programming' so'zini qidirayotganda nima uchun o'rtasidan ochamiz?",
        "options": [
          "P harfi alifbo o'rtasiga yaqin bo'lgani va lug'at tartiblangani uchun Binary Search tamoyilida tez topish uchun",
          "Faqat 1-betda so'zlar yo'qligi uchun",
          "Lug'at tartiblanmagan bo'lgani uchun",
          "O(n²) vaqtda ishlashi uchun"
        ],
        "answer": 0,
        "exp": "08-mavzu slayd: alifbo tartibi ma'lum bo'lgani uchun P harfini o'rtarog'idan ochish Binary Search."
      },
      {
        "topic": "01-Mavzu",
        "q": "R to'plami iyerarxik tartibdagi bitta munosabatdan tashkil topgan tuzilma qaysi?",
        "options": [
          "Matritsa",
          "Daraxt",
          "Gipergraf",
          "Graf"
        ],
        "answer": 1,
        "exp": "01-mavzu 11-slayd: Daraxt — R to'plam iyerarxik tartibdagi bitta munosabatdan tashkil topgan."
      }
    ]
  },
  {
    "variant": 7,
    "title": "7-Variant: Dinamik Massivlar, Jump Search & Shell Sort",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "R munosabatlar to'plami faqatgina bitta binar tartibli munosabatdan tashkil topgan tuzilma qaysi?",
        "options": [
          "Gipergraf",
          "Graf",
          "Daraxt",
          "Ketma-ketlik"
        ],
        "answer": 1,
        "exp": "01-mavzu 11-slayd: Graf — R to'plam faqatgina bitta binar tartibli munosabatdan tashkil topgan."
      },
      {
        "topic": "01-Mavzu",
        "q": "R to'plami ikki yoki undan ortiq turli tartibdagi munosabatlardan tashkil topgan tuzilma nima?",
        "options": [
          "Matritsa",
          "Daraxt",
          "Gipergraf",
          "Graf"
        ],
        "answer": 2,
        "exp": "01-mavzu 11-slayd: Gipergraf — R to'plam ikki yoki undan ortiq turli tartibdagi munosabatlardan iborat."
      },
      {
        "topic": "01-Mavzu",
        "q": "Klassifikatsiya sxemasiga ko'ra, 'Ma'lumotlar toifalari (atomlar)' guruhiga qaysilar kiradi?",
        "options": [
          "Bul (boolean), Butun, Haqiqiy, Belgili",
          "Daraxtlar, Binar daraxtlar, Graf",
          "Jadval, Stek, Navbat, Ro'yxat, Dek",
          "Massiv, Yozuv, Rekursiv turlar, To'plam"
        ],
        "answer": 0,
        "exp": "01-mavzu 12-slayd: Atomlar — Bul, Butun, Haqiqiy, Belgili; Molekulalar — Massiv, Yozuv, Rekursiv, To'plam."
      },
      {
        "topic": "02-Mavzu",
        "q": "937,56 sonining yarimlogarifmik shakldagi normalizatsiyalangan ifodasi slaydda qanday yozilgan?",
        "options": [
          "937,56 = 937,56 * 10^3 = 9,3756 * 10^2",
          "937,56 = 93756 * 10^-2 = 0,93756 * 10^3",
          "937,56 = 0,93756 * 10^2 = 93756 * 10^-3",
          "937,56 = 93756 * 10^2 = 0,93756 * 10^-3"
        ],
        "answer": 1,
        "exp": "02-mavzu 7-slayd: 937,56 = 93756 * 10^-2 = 0,93756 * 10^3."
      },
      {
        "topic": "02-Mavzu",
        "q": "C++ da haqiqiy son turdagi o'zgaruvchilarni e'lon qilish sintaksisi qaysi?",
        "options": [
          "float | double | long double <identifier> ;",
          "real | decimal | float64 <identifier> ;",
          "bool | char | void <identifier> ;",
          "short | int | long long <identifier> ;"
        ],
        "answer": 0,
        "exp": "02-mavzu 7-slayd: float | double | long double <identifier> ;"
      },
      {
        "topic": "02-Mavzu",
        "q": "Mantiqiy tur (bool) ustida qaysi operatsiyalarni bajarish mumkin?",
        "options": [
          "Faqat xotira manzillarini o'chirish",
          "Faqat qo'shish, ayirish, bo'lish va kvadrat ildiz chiqarish",
          "Kon'yunksiya (va), diz'yunksiya (yoki), inkor (yo'q), ekvivalentlik, implikatsiya",
          "Faqat trigonometrik funksiyalarni hisoblash"
        ],
        "answer": 2,
        "exp": "02-mavzu 8-slayd: kon'yunksiya (va), diz'yunksiya (yoki), inkor (yo'q), ekvivalentlik, implikatsiya va b."
      },
      {
        "topic": "03-Mavzu",
        "q": "STL da 'deque' konteyneri nimani anglatadi?",
        "options": [
          "Ikki tarafli navbat",
          "Bitta tarafli stek",
          "Takrorlanmas to'plam",
          "Assotsiativ lug'at"
        ],
        "answer": 0,
        "exp": "03-mavzu 8-slayd: deque — ikki tarafli navbat."
      },
      {
        "topic": "03-Mavzu",
        "q": "STL da 'multiset' va 'set' ning farqi nimada?",
        "options": [
          "multiset faqat matn saqlaydi",
          "set indeks bilan ishlaydi",
          "multiset da har bir element noyob bo'lishi shart emas (takrorlanishi mumkin)",
          "set da elementlar takrorlanadi, multiset da yo'q"
        ],
        "answer": 2,
        "exp": "03-mavzu 8-slayd: multiset — har bir elementi noyob bo'lishi shart emas to'plam."
      },
      {
        "topic": "03-Mavzu",
        "q": "STL da 'map' konteynerining vazifasi nima?",
        "options": [
          "Faqat bir xil elementlarni ketma-ket saqlash",
          "Faqat LIFO tartibida saqlash",
          "Kalit/qiymat juftligini saqlash (har bir kalit bitta qiymat bilan bog'langan)",
          "Faqat FIFO tartibida saqlash"
        ],
        "answer": 2,
        "exp": "03-mavzu 8-slayd: map — kalit/qiymat juftlikni saqlash uchun assotsiativ ro'yxat."
      },
      {
        "topic": "04-Mavzu",
        "q": "Naive Fibonacci algoritmining Time va Space Complexity si 04-mavzuda qanday berilgan?",
        "options": [
          "Time ≈ O(n²), Space ≈ O(n²)",
          "Time ≈ O(log n), Space ≈ O(n)",
          "Time ≈ O(n), Space ≈ O(1)",
          "Time ≈ O(2^n), Space ≈ O(n)"
        ],
        "answer": 3,
        "exp": "04-mavzu 10-slayd: Naive Fibonacci: Time ≈ O(2^n), Space ≈ O(n)."
      },
      {
        "topic": "04-Mavzu",
        "q": "Nima uchun Naive Fibonacci ning Time Complexity si juda katta (O(2^n)) bo'lib ketadi?",
        "options": [
          "Funksiya har safar massiv yaratgani uchun",
          "Base Case umuman mavjud emasligi uchun",
          "Stack Frame da return address saqlanmagani uchun",
          "Bir xil qiymatlar (fib(3), fib(2), fib(1)) qayta-qayta hisoblanaveradi"
        ],
        "answer": 3,
        "exp": "04-mavzu 10-slayd: Bir xil qiymatlar qayta hisoblanmoqda: fib(3), fib(2), fib(1)."
      },
      {
        "topic": "04-Mavzu",
        "q": "fib(4) daraxtida Base Case f(1) va f(0) jami necha marta chaqiriladi?",
        "options": [
          "5 marta (f(1) 3 marta, f(0) 2 marta)",
          "4 marta",
          "2 marta",
          "8 marta"
        ],
        "answer": 0,
        "exp": "04-mavzu 10-slayd daraxtida barglar: f(1)=1, f(0)=0, f(1)=1, f(1)=1, f(0)=0 — jami 5 ta barg."
      },
      {
        "topic": "05-Mavzu",
        "q": "Xeshlash (Hash Search) yordamida qidirishning o'rtacha vaqt murakkabligi qancha?",
        "options": [
          "O(√n)",
          "O(1) — bir amal vaqtda",
          "O(n)",
          "O(log n)"
        ],
        "answer": 1,
        "exp": "05-mavzu 18 va 19-slayd: o'rtacha holatda bir amal vaqtda — juda tez O(1) topish usuli."
      },
      {
        "topic": "05-Mavzu",
        "q": "Xeshlashda qidiruv vaqti asosan nimaga sarflanadi?",
        "options": [
          "Massivni ikkiga bo'lishga",
          "Xesh-funksiyani bir marta hisoblashga",
          "Massivni qayta saralashga",
          "Ro'yxatni boshidan oxirigacha tekshirishga"
        ],
        "answer": 1,
        "exp": "05-mavzu 18-19-slayd: asosiy vaqt faqat xesh-funksiyani bir marta hisoblashga ketadi."
      },
      {
        "topic": "05-Mavzu",
        "q": "Components of Hashing diagrammasida 3 ta asosiy komponent qaysilar?",
        "options": [
          "Low, Mid, High",
          "Key, Hash Function, Hash Table",
          "Input, Stack, Output",
          "Divide, Conquer, Merge"
        ],
        "answer": 1,
        "exp": "05-mavzu 18-19-slayd: Key → Hash Function → Hash Table."
      },
      {
        "topic": "06-Mavzu",
        "q": "Insertion Sort algoritmi barqaror (Stable) va moslashuvchan (Adaptive) mi?",
        "options": [
          "Faqat GPU da barqaror",
          "Yo'q (No) — barqaror ham emas, moslashuvchan ham emas",
          "Barqaror (Yes), lekin moslashuvchan emas (No)",
          "Ha (Yes) — ham barqaror, ham deyarli tartiblangan datada moslashuvchan"
        ],
        "answer": 3,
        "exp": "06-mavzu Comparison Table: Insertion Sort — Stable: Yes, Adaptive: Yes."
      },
      {
        "topic": "06-Mavzu",
        "q": "Bubble Sort (optimallashtirilgan bayroqli) barqaror va moslashuvchan hisoblanadimi?",
        "options": [
          "Yo'q (Stable: No, Adaptive: No)",
          "Faqat Adaptive: Yes, Stable: No",
          "Faqat Stable: Yes, Adaptive: No",
          "Ha (Stable: Yes, Adaptive: Yes*)"
        ],
        "answer": 3,
        "exp": "06-mavzu Comparison Table: Bubble Sort — Stable: Yes, Adaptive: Yes*."
      },
      {
        "topic": "06-Mavzu",
        "q": "Pancake Sort da nima uchun 'Stability' (barqarorlik) saqlanmaydi?",
        "options": [
          "Chunki u faqat 1 ta element bilan ishlaydi",
          "Chunki prefiksni ag'darish (flip) bir xil qiymatli elementlarning tartibini teskari qilib yuboradi",
          "Chunki u faqat sonlarni sanaydi",
          "Chunki u O(n log n) da ishlaydi"
        ],
        "answer": 1,
        "exp": "Comparison Table: Pancake Sort — Stable: No."
      },
      {
        "topic": "07-Mavzu",
        "q": "n = 8 bo'lganda O(n²) va O(n log n) algoritmlar bajaradigan ishlar soni slaydda qanday taqqoslangan?",
        "options": [
          "O(n²): 8 × 8 = 64; O(n log n): 8 × 3 = 24",
          "O(n²): 8 × 2 = 16; O(n log n): 8 × 8 = 64",
          "O(n²): 64; O(n log n): 32",
          "Ikkalasi ham 24"
        ],
        "answer": 0,
        "exp": "07-mavzu slayd: O(n²): 8×8=64; O(n log n): 8×3=24."
      },
      {
        "topic": "07-Mavzu",
        "q": "Piramidasimon saralash (Heap Sort) qaysi ma'lumotlar tuzilmasiga asoslanadi?",
        "options": [
          "Hash Table (Xesh jadval)",
          "Adjacency Matrix",
          "Binary Heap (Ikkilik uyum — to'liq binar daraxt)",
          "Circular Queue (Halqali navbat)"
        ],
        "answer": 2,
        "exp": "07-mavzu slayd: Heap Sort — Binary Heap (ikkilik uyum) ga asoslangan saralash algoritmi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Heap Sort algoritmini 1964-yilda kim taklif qilgan?",
        "options": [
          "Tony Hoare",
          "J. W. J. Williams",
          "Donald Shell",
          "Edsger Dijkstra"
        ],
        "answer": 1,
        "exp": "07-mavzu slayd: Bu usul 1964-yilda J. W. J. Williams tomonidan taklif qilingan."
      },
      {
        "topic": "08-Mavzu",
        "q": "O(n log n) — Linearithmic Time murakkabligi qaysi algoritmlar uchun xos?",
        "options": [
          "Naive Fibonacci va Barcha permutatsiyalar",
          "Hash Lookup va numbers[0]",
          "Merge Sort, Heap Sort va Python sort() funksiyasi",
          "Linear Search va Bubble Sort"
        ],
        "answer": 2,
        "exp": "08-mavzu slayd: O(n log n) Merge Sort, Heap Sort va Python sort() da uchraydi."
      },
      {
        "topic": "08-Mavzu",
        "q": "Merge Sort da [70, 30, 50, 10] (n = 4) uchun n log2(n) taxminiy asosiy ishlar soni nechaga teng?",
        "options": [
          "4 × 1 = 4",
          "4 × 2 = 8",
          "4 × 4 = 16",
          "2 × 2 = 4"
        ],
        "answer": 1,
        "exp": "08-mavzu slayd: n = 4, log2(4) = 2 -> n log n = 4 × 2 = 8."
      },
      {
        "topic": "08-Mavzu",
        "q": "O(2^n) — Exponential Time qaysi vaziyatda yuzaga keladi?",
        "options": [
          "Massivni ikkiga bo'lib qidirishda",
          "Ikkita sonni qo'shishda",
          "Massivning 1-elementini olishda",
          "Har bir element uchun 'olamiz yoki olmaymiz' ikki xil tanlov bo'lganda (barcha subsetlar)"
        ],
        "answer": 3,
        "exp": "08-mavzu slayd: O(2^n) — har bir element uchun 2 xil tanlov (barcha subsetlar)."
      },
      {
        "topic": "02-Mavzu",
        "q": "Ko'rsatkichli tur (pointer) xotirada qancha joy egallashi 02-mavzu 8-slaydda ta'kidlangan?",
        "options": [
          "Bori yo'g'i 4 bayt (32-bit tizimda), lekin ko'rsatayotgan ma'lumot ancha katta bo'lishi mumkin",
          "Doim ko'rsatilayotgan massiv hajmiga teng (masalan 400 bayt)",
          "1 bit",
          "128 bayt"
        ],
        "answer": 0,
        "exp": "02-mavzu 8-slayd: Ko'rsatkichlar xotirada bori yo'g'i 4 bayt joyni egallab, katta ma'lumotga yo'naltirilishi mumkin."
      }
    ]
  },
  {
    "variant": 8,
    "title": "8-Variant: CRUD Amallari, Iteratorlar & Big-O",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "Klassifikatsiya sxemasiga ko'ra, 'Tuzilmaviy MT (molekulalar)' guruhiga qaysilar kiradi?",
        "options": [
          "Jadval, Stek, Navbat, Ro'yxat, Dek",
          "Daraxtlar, Binar daraxtlar, Graf",
          "Bul, Butun, Haqiqiy, Belgili",
          "Massiv, Yozuv, Rekursiv turlar, To'plam"
        ],
        "answer": 3,
        "exp": "01-mavzu 12-slayd: Tuzilmaviy MT ('molekulalar') — Massiv, Yozuv, Rekursiv turlar, To'plam."
      },
      {
        "topic": "01-Mavzu",
        "q": "Hosil qilingan chiziqli MT guruhiga qaysilar kiradi?",
        "options": [
          "Daraxtlar, Binar daraxtlar, Graf",
          "Jadval, Stek, Navbat, Ro'yxat, Dek",
          "Massiv, Yozuv, Rekursiv turlar, To'plam",
          "Bul, Butun, Haqiqiy, Belgili"
        ],
        "answer": 1,
        "exp": "01-mavzu 12-slayd: Chiziqli MT — Jadval, Stek (push(), pop()), Navbat, Ro'yxat, Dek."
      },
      {
        "topic": "01-Mavzu",
        "q": "Hosil qilingan chiziqsiz MT guruhiga qaysilar kiradi?",
        "options": [
          "Vektorlar, Satrlar, Massivlar",
          "Jadval, Stek, Navbat, Ro'yxat, Dek",
          "Massiv, Yozuv, Rekursiv turlar, To'plam",
          "Daraxtlar, Binary daraxtlar, Graf"
        ],
        "answer": 3,
        "exp": "01-mavzu 12-slayd: chiziqsizMT — Darahtlar, Binary darahtlar, graf."
      },
      {
        "topic": "02-Mavzu",
        "q": "Ko'rsatkich (pointer) o'zida nimani saqlaydi?",
        "options": [
          "Ma'lumotlarni emas, balki bu ma'lumotlar joylashgan xotiradagi manzilni (adresni)",
          "Ma'lumotning faqat mantissasi va tartibini",
          "Ma'lumotning faqat qiymatini va nomini",
          "Faqat funksiyaning qaytish qiymatini"
        ],
        "answer": 0,
        "exp": "02-mavzu 8-slayd: ko'rsatkichlar ma'lumotlarni emas, bu ma'lumotlar joylashgan xotiradagi manzilni o'z ichiga oladi."
      },
      {
        "topic": "02-Mavzu",
        "q": "Birlashmalar (union) ning asosiy xususiyati nimada?",
        "options": [
          "E'lon qilingan har bir element uchun xotiraning bitta hududi ajratiladi (bir-birini qoplaydi)",
          "Har bir element uchun alohida ketma-ket xotira ajratilib yig'indisi olinadi",
          "Bir vaqtning o'zida barcha elementlarga murojaat qilinadi",
          "Faqat bir xil turdagi elementlar saqlanadi"
        ],
        "answer": 0,
        "exp": "02-mavzu 10-slayd: birlashmada barcha elementlar xotiraning bitta hududini qoplaydi va bir vaqtda faqat 1 elementga murojaat qilinadi."
      },
      {
        "topic": "02-Mavzu",
        "q": "union myUnion { int i; float f; char str[20]; } U_1; e'lonida birlashma uchun xotiradan kamida qancha joy ajratiladi?",
        "options": [
          "20 bayt (eng katta maydon char str[20] hajmicha)",
          "28 bayt (4 + 4 + 20 yig'indisicha)",
          "8 bayt",
          "4 bayt (int hajmicha)"
        ],
        "answer": 0,
        "exp": "union da maydonlar bir-birini qoplagani uchun hajm eng katta maydon (20 bayt) ga teng bo'ladi."
      },
      {
        "topic": "03-Mavzu",
        "q": "STL da 'priority_queue' qanday tarjima qilinadi?",
        "options": [
          "Ustuvor navbat",
          "Assotsiativ to'plam",
          "Dinamik stek",
          "Ikki tarafli navbat"
        ],
        "answer": 0,
        "exp": "03-mavzu 8-slayd: priority_queue — ustuvor navbat."
      },
      {
        "topic": "03-Mavzu",
        "q": "Iteratorlarning dasturlashdagi asosiy roli nima?",
        "options": [
          "Funksiyalarni rekursiv chaqirish",
          "Sonlarni o'nlikdan ikkilikka o'tkazish",
          "Xotiradan dinamik massivni o'chirish",
          "Konteynerga nisbatan ko'rsatkich sifatida konteyner ichidagiga ruxsat olish"
        ],
        "answer": 3,
        "exp": "03-mavzu 9-slayd: Iteratorlar — konteynerga nisbatan ko'rsatkich sifatida bo'lgan obyektlar."
      },
      {
        "topic": "03-Mavzu",
        "q": "Iteratorlarga qaysi operatorlarni qo'llash mumkin?",
        "options": [
          "* (qiymat olish), inkrement (++) va dekrement (--)",
          "Hech qanday operator qo'llab bo'lmaydi",
          "Faqat delete [] operatorini",
          "Faqat % va ^ operatorlarini"
        ],
        "answer": 0,
        "exp": "03-mavzu 9-slayd: Ularga *, inkrement, dekrement operatorlarni qo'llash mumkin."
      },
      {
        "topic": "04-Mavzu",
        "q": "Rekursiya chuqurligi (Recursion Depth) nimani bildiradi?",
        "options": [
          "Kodning ekrandagi satrlar balandligini",
          "Massivdagi elementlarning eng kichigini",
          "Bir vaqtda Stack da nechta faol rekursiv chaqiruv mavjudligini",
          "Funksiya necha bayt xotira o'chirishini"
        ],
        "answer": 2,
        "exp": "04-mavzu 11-slayd: Chuqurlik — bir vaqtda Stack da nechta rekursiv chaqiruv mavjudligini bildiradi."
      },
      {
        "topic": "04-Mavzu",
        "q": "factorial(5) uchun Call Stack da nechta faol rekursiv freym (maksimal chuqurlik) hosil bo'ladi?",
        "options": [
          "1 ta faol frame",
          "25 ta faol frame",
          "5 ta faol rekursiv frame",
          "120 ta faol frame"
        ],
        "answer": 2,
        "exp": "04-mavzu 11-slayd: factorial(5) → 5 ta faol rekursiv frame."
      },
      {
        "topic": "04-Mavzu",
        "q": "Depth ↑ → Stack Memory ↑ munosabati nimani anglatadi?",
        "options": [
          "Chuqurlik oshgani sari stek xotirasi sarfi ham oshadi",
          "Chuqurlik xotiraga ta'sir qilmaydi",
          "Chuqurlik oshsa stek xotirasi kamayadi",
          "Stack to'lsa Heap avtomatik kichrayadi"
        ],
        "answer": 0,
        "exp": "04-mavzu 11-slayd: Depth ↑ → Stack Memory ↑."
      },
      {
        "topic": "05-Mavzu",
        "q": "05-mavzu 20-slayddagi Python kodida kalit = 102 bo'lsa nima chop etiladi?\n<pre>talabalar = {101: \"Ali\", 102: \"Vali\", 103: \"Madina\"}\nprint(\"Topildi:\", talabalar[102])</pre>",
        "options": [
          "Topildi: Vali",
          "Topilmadi",
          "Topildi: Madina",
          "Topildi: Ali"
        ],
        "answer": 0,
        "exp": "05-mavzu 20-slayd: 102 kaliti Vali qiymatiga bog'langan."
      },
      {
        "topic": "05-Mavzu",
        "q": "Rekursiv qidiruv def search(arr, n, x) funksiyasi massivni qaysi tomondan tekshiradi?",
        "options": [
          "Boshidan boshlab (arr[0])",
          "Juft indekslardan boshlab",
          "Oxiridan boshlab (arr[n - 1] == x)",
          "O'rtasidan boshlab (arr[n // 2])"
        ],
        "answer": 2,
        "exp": "05-mavzu 21-slayd: Kod ro'yxatni oxiridan boshlab tekshiradi."
      },
      {
        "topic": "05-Mavzu",
        "q": "arr = [10, 20, 30, 40, 50] uchun rec_search(arr, len(arr), 30) natijasi nechaga teng?",
        "options": [
          "3",
          "-1",
          "1",
          "2"
        ],
        "answer": 3,
        "exp": "05-mavzu 22-slayd: 30 elementi 2-indeksda turibdi, natija 2."
      },
      {
        "topic": "06-Mavzu",
        "q": "Selection Sort da N ta elementni saralashda ko'pi bilan nechta o'rin almashtirish (swap) bajariladi?",
        "options": [
          "n! ta swap",
          "Ko'pi bilan n - 1 ta swap",
          "n² ta swap",
          "2^n ta swap"
        ],
        "answer": 1,
        "exp": "06-mavzu Comparison Table: Selection Sort — Swaps: Minimum (at most n-1)."
      },
      {
        "topic": "06-Mavzu",
        "q": "Qaysi algoritm har bir o'tishdan (pass) keyin 'eng kichik elementni boshiga' qat'iy joylashtiradi?",
        "options": [
          "Bubble Sort",
          "Selection Sort",
          "Quick Sort",
          "Pancake Sort"
        ],
        "answer": 1,
        "exp": "Comparison Table ('What gets fixed after each pass?'): Selection Sort -> Smallest element at beginning."
      },
      {
        "topic": "06-Mavzu",
        "q": "Bubble Sort va Pancake Sort da har bir o'tishdan keyin qaysi element o'z joyiga qo'yiladi?",
        "options": [
          "Eng kichik element massiv boshiga",
          "O'rtacha element massiv markaziga",
          "Hech biri",
          "Eng katta element massiv oxiriga (Largest element at end)"
        ],
        "answer": 3,
        "exp": "Comparison Table: Bubble Sort va Pancake Sort -> Largest element at end."
      },
      {
        "topic": "07-Mavzu",
        "q": "Max Heap tuzilmasida har bir ota tugun (parent) va farzand tugunlar (children) o'rtasidagi qoida qanday?",
        "options": [
          "Farzand tugunlar doim bir-biriga teng bo'ladi",
          "Ota tugun qiymati farzand tugunlari qiymatidan katta yoki teng bo'ladi",
          "Eng kichik element ildizda turadi",
          "Ota tugun qiymati farzandlaridan doim kichik bo'ladi"
        ],
        "answer": 1,
        "exp": "07-mavzu slayd: Max Heap da har bir ota tugun qiymati uning farzand tugunlari qiymatidan katta yoki teng bo'ladi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Heap Sort da eng katta element ildizdan (root) qayerga o'tkaziladi?",
        "options": [
          "Massiv oxiriga (oxirgi element bilan almashtiriladi)",
          "Massivdan butunlay o'chiriladi",
          "Yangi qo'shimcha massivga",
          "Massiv o'rtasiga"
        ],
        "answer": 0,
        "exp": "07-mavzu slayd: Eng katta element (root) massiv oxiriga o'tkaziladi va heap hajmi 1 taga kamaytiriladi."
      },
      {
        "topic": "07-Mavzu",
        "q": "[4, 10, 3, 5, 1] massividan Max Heap hosil qilinganda daraxtning ildizida (root) qaysi son turadi?",
        "options": [
          "10",
          "1",
          "4",
          "5"
        ],
        "answer": 0,
        "exp": "07-mavzu slayd: Max Heap da eng katta element 10 tepada (root) turadi."
      },
      {
        "topic": "08-Mavzu",
        "q": "3 ta elementli to'plamda (n = 3) O(2^n) nechta variant (subset) beradi?",
        "options": [
          "2³ = 8 ta variant",
          "3² = 9 ta variant",
          "3! = 6 ta variant",
          "2 × 3 = 6 ta variant"
        ],
        "answer": 0,
        "exp": "08-mavzu slayd: 2^3 = 8 ta variant; 10 ta element bo'lsa 2^10 = 1024."
      },
      {
        "topic": "08-Mavzu",
        "q": "O(n!) — Factorial Time murakkabligi odatda qaysi masalalarda uchraydi?",
        "options": [
          "Adjacency Matrix dan qirra tekshirishda",
          "Barcha tartiblarni, ya'ni permutatsiyalarni (o'rin almashtirishlarni) tekshirishda",
          "Massivda maksimum topishda",
          "Binary Search bajarishda"
        ],
        "answer": 1,
        "exp": "08-mavzu slayd: O(n!) barcha permutatsiyalarni (o'rin almashtirish) tekshirishda uchraydi."
      },
      {
        "topic": "08-Mavzu",
        "q": "N faktorial (N!) ta'rifi qaysi javobda to'g'ri berilgan?",
        "options": [
          "1 dan N gacha bo'lgan sonlarning yig'indisi",
          "N ning kvadrat ildizi",
          "2 ning N-darajasi",
          "1 dan N gacha bo'lgan natural sonlarning ko'paytmasi (masalan 5! = 120)"
        ],
        "answer": 3,
        "exp": "08-mavzu slayd: N faktorial deb 1 dan N gacha bo'lgan sonlarning ko'paytmasiga aytiladi."
      },
      {
        "topic": "03-Mavzu",
        "q": "Iteratorlarning nechta turi mavjud?",
        "options": [
          "3 ta",
          "5 ta",
          "4 ta",
          "7 ta"
        ],
        "answer": 1,
        "exp": "03-mavzu 9-slayd: Iteratorlarning beshta turi mavjud."
      }
    ]
  },
  {
    "variant": 9,
    "title": "9-Variant: Ko'rsatkichlar, Fibonacci Daraxti & Quick Sort",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "Vaqt o'tishi bilan o'zgaruvchanligi bo'yicha dastur bajarish oxirigacha o'zgarmaydigan tuzilmalar qaysilar?",
        "options": [
          "Chiziqsiz tuzilmalar (daraxtlar, gipergraflar)",
          "Yarimstatik tuzilmalar (steklar, pastki qavatlar, navbatlar)",
          "Dinamik tuzilmalar (ko'p bog'langan ro'yxatlar, graflar)",
          "Statik tuzilmalar (yozuvlar, massivlar, satrlar, vektorlar)"
        ],
        "answer": 3,
        "exp": "01-mavzu 13-slayd: statik tuzilmalar — dasturni bajarish oxirigacha o'zgarmaydigan tuzilmalar."
      },
      {
        "topic": "01-Mavzu",
        "q": "Dinamik taqsimotga ega kirish diskriptoriga bog'liq bo'lgan yarimstatik tuzilmalarga qaysilar kiradi?",
        "options": [
          "Yozuvlar, massivlar, satrlar, vektorlar",
          "Steklar, pastki qavatlar, navbatlar",
          "Oddiy konstantalar va o'zgaruvchilar",
          "Sinf obyektlari va enum turlari"
        ],
        "answer": 1,
        "exp": "01-mavzu 13-slayd: yarimstatik tuzilmalar — steklar, pastki qavatlar, navbatlar."
      },
      {
        "topic": "01-Mavzu",
        "q": "Tuzilishning murakkabligi darajasi bo'yicha 'bir xil turdagi ma'lumotlar to'plamlari' ga nima misol bo'ladi?",
        "options": [
          "Standart oddiy o'zgaruvchilar va konstantalar",
          "Yozuvlar va sinf obyektlari",
          "Ro'yxatlar, daraxtlar, graflar",
          "Massivlar (bitta va ko'p o'lchovli)"
        ],
        "answer": 3,
        "exp": "01-mavzu 14-slayd: bir xil turdagi ma'lumotlar to'plamlari — massivlar, bitta va ko'p o'lchovli."
      },
      {
        "topic": "02-Mavzu",
        "q": "C++ da bir o'lchovli massivni e'lon qilish sintaksisi qaysi?",
        "options": [
          "<massiv_nomi> <turi>(elementlar_soni); (Masalan: a int(12);)",
          "int a[12][12];",
          "array<turi>[elementlar_soni];",
          "<turi> <massiv_nomi>[elementlar_soni]; (Masalan: int a[12];)"
        ],
        "answer": 3,
        "exp": "02-mavzu 10-slayd: <turi><massiv_nomi>[elementlar_soni]; Masalan, int a[12];"
      },
      {
        "topic": "02-Mavzu",
        "q": "C++ da ikki o'lchovli massivni e'lon qilish sintaksisi qaysi?",
        "options": [
          "<turi> <massiv_nomi>[ustunlar_soni, qatorlar_soni]; (Masalan: int a[3,2];)",
          "<turi> <massiv_nomi>[qatorlar_soni][ustunlar_soni]; (Masalan: int a[2][3];)",
          "int a(2)(3);",
          "matrix<int> a[2];"
        ],
        "answer": 1,
        "exp": "02-mavzu 10-slayd: <turi><massiv_nomi>[qatorlar_soni][ustunlar_soni]; Masalan, int a[2][3];"
      },
      {
        "topic": "02-Mavzu",
        "q": "Klass (class) ga berilgan ta'rif qaysi javobda to'g'ri?",
        "options": [
          "Faqat ikkita butun sonni qo'shadigan standart funksiya",
          "Xotiraning faqat Heap segmenti nomi",
          "Mavjud turlar asosida yaratilgan, lokal/global o'zgaruvchilar va funksiyalar to'plamidan iborat strukturalangan tur",
          "Elementlari takrorlanmas tartibsiz to'plam"
        ],
        "answer": 2,
        "exp": "02-mavzu 11-slayd: Klass — lokal va global o'zgaruvchilar va ular ustida amal bajaradigan funksiyalar to'plami."
      },
      {
        "topic": "03-Mavzu",
        "q": "Quyidagilardan qaysi biri iteratorning 5 ta turiga KIRMAYDI?",
        "options": [
          "forward_iterator",
          "bidirectional_iterator",
          "input_iterator",
          "recursive_iterator"
        ],
        "answer": 3,
        "exp": "5 ta tur: input, output, forward, bidirectional, random_access."
      },
      {
        "topic": "03-Mavzu",
        "q": "Ikki yo'nalishdagi iteratorlar inglizcha qanday nomlanadi?",
        "options": [
          "forward_iterator",
          "random_access_iterator",
          "bidirectional_iterator",
          "input_iterator"
        ],
        "answer": 2,
        "exp": "03-mavzu 9-slayd: 4. Ikki yo'nalishdagi iteratorlar (bidirectional_iterator)."
      },
      {
        "topic": "03-Mavzu",
        "q": "Ixtiyoriy ruxsatga ega bo'lgan iteratorlar inglizcha qanday nomlanadi?",
        "options": [
          "output_iterator",
          "random_access_iterator",
          "bidirectional_iterator",
          "forward_iterator"
        ],
        "answer": 1,
        "exp": "03-mavzu 9-slayd: 5. Ixtiyoriy ruxsatga ega bo'lgan iteratorlar (random_access_iterator)."
      },
      {
        "topic": "04-Mavzu",
        "q": "04-mavzu 12-slaydda sanab o'tilgan rekursiyaning 4 ta turi qaysilar?",
        "options": [
          "1-Bubble, 2-Selection, 3-Insertion, 4-Merge",
          "1-Input, 2-Output, 3-Forward, 4-Random",
          "1-Chiziqli, 2-Takrorlanuvchi, 3-Kaskadli (daraxtga o'xshash), 4-Qaytaruvchi (backtracking)",
          "1-Statik, 2-Dinamik, 3-Yarimstatik, 4-Nobarqaror"
        ],
        "answer": 2,
        "exp": "04-mavzu 12-slayd: 1-Chiziqli, 2-Takrorlanuvchi, 3-Kaskadli (daraxtga o'xshash), 4-Qaytaruvchi (backtracking)."
      },
      {
        "topic": "04-Mavzu",
        "q": "04-mavzu 12-slayddagi 'Types of Recursion Algorithm' sxemasida ko'rsatilgan turlardan qaysi biri to'g'ri?",
        "options": [
          "Quick, Shell, Cocktail, Radix Recursion",
          "Static, Dynamic, Heap, Stack Recursion",
          "Binary, Jump, Hash, Linear Recursion",
          "Direct, InDirect, Tail, Linear, Tree, Mutual Recursion"
        ],
        "answer": 3,
        "exp": "04-mavzu 12-slayd rasmi: Direct, InDirect, Tail, Linear, Tree, Mutual Recursion."
      },
      {
        "topic": "04-Mavzu",
        "q": "Qaysi holatda funksiyada OVERFLOW (STACK FULL) sodir bo'ladi?",
        "options": [
          "Funksiya o'zini 1 marta chaqirganda",
          "Rekursiya chuqurligi ajratilgan Stack xotira sig'imidan oshib ketganda",
          "Base Case darhol 0 qaytarganda",
          "for sikli tugaganda"
        ],
        "answer": 1,
        "exp": "04-mavzu 11-slayd rasmi: MEMORY CAPACITY to'lganda STACK FULL → OVERFLOW yuzaga keladi."
      },
      {
        "topic": "05-Mavzu",
        "q": "arr = [10, 20, 30, 40, 50] uchun rec_search(arr, len(arr), 40) natijasi nechaga teng?",
        "options": [
          "4",
          "-1",
          "2",
          "3"
        ],
        "answer": 3,
        "exp": "05-mavzu 21-slayd: 40 elementi 3-indeksda turibdi."
      },
      {
        "topic": "05-Mavzu",
        "q": "Chegaraviy holatlar (Boundary Cases) deganda nima tushuniladi?",
        "options": [
          "Faqat 3D massivlar yaratish",
          "Faqat massiv o'rtasidagi elementni izlash",
          "Algoritmda alohida tekshirilishi kerak bo'lgan maxsus holatlar: [], [10], oxirgi element, topilmagan holat",
          "Faqat dasturning birinchi qatorini o'chirish"
        ],
        "answer": 2,
        "exp": "05-mavzu 21-22-slayd: Boundary Cases: [] bo'sh massiv, [10] bitta element, 30 oxirgi element, 50 topilmagan holat."
      },
      {
        "topic": "05-Mavzu",
        "q": "1D massivda elementlarning shakli (Shape) qanday ko'rinishda beriladi (3 ta element uchun)?",
        "options": [
          "Shape: (3, 3)",
          "Shape: (3)",
          "Shape: (1, 1, 3)",
          "Shape: (2, 3)"
        ],
        "answer": 1,
        "exp": "05-mavzu 1 va 23-slayd: 1D array — Shape: (3)."
      },
      {
        "topic": "06-Mavzu",
        "q": "Insertion Sort da har bir qadamdan keyin massivning qaysi qismi kengayadi?",
        "options": [
          "Xesh jadval hajmi",
          "Rekursiya steki",
          "Chap tomondagi tartiblangan qism (Sorted portion grows by one element)",
          "O'ng tomondagi tartiblanmagan qism"
        ],
        "answer": 2,
        "exp": "Comparison Table: Insertion Sort -> Sorted portion grows by one element."
      },
      {
        "topic": "06-Mavzu",
        "q": "Worst Case Time O(n²) bo'lgan algoritmda n = 10 dan n = 100 ga (10 barobar) oshsa, ish hajmi taxminan nechaga o'zgaradi?",
        "options": [
          "O'zgarmaydi",
          "100 ta ishdan 10 000 ta ishga (100 barobar) ko'payadi",
          "10 ta ishdan 100 ta ishga",
          "100 ta ishdan 200 ta ishga"
        ],
        "answer": 1,
        "exp": "06-mavzu slayd: n = 10 -> taxminan 100 ta ish | n = 100 -> taxminan 10 000 ta ish."
      },
      {
        "topic": "06-Mavzu",
        "q": "arr = [40, 8] da arr[j+1], arr[j] = arr[j], arr[j+1] bajarilgandan keyin massiv qanday bo'ladi?",
        "options": [
          "[40, 40]",
          "[8, 40]",
          "[40, 8]",
          "[8, 8]"
        ],
        "answer": 1,
        "exp": "06-mavzu slayd: arr[0] va arr[1] o'rinlari almashtiriladi -> [8, 40]."
      },
      {
        "topic": "07-Mavzu",
        "q": "[4, 10, 3, 5, 1] da 10 oxirga yuborilib [1, 5, 3, 4 | 10] hosil bo'lgach, qolgan qismdan Max Heap tiklanganda root ga qaysi son chiqadi?",
        "options": [
          "5",
          "1",
          "4",
          "3"
        ],
        "answer": 0,
        "exp": "07-mavzu slayd 3-4-qadam: qolgan [1, 5, 3, 4] da eng kattasi 5, u root ga chiqadi va oxirga yuboriladi -> [1, 4, 3 | 5, 10]."
      },
      {
        "topic": "07-Mavzu",
        "q": "Heap Sort da dastlabki Max Heap [50, ...] da 50 oxirga qo'yilgandan keyin qolgan tugunlardan ildizga qaysi son chiqadi (07-mavzu rasmiga ko'ra)?",
        "options": [
          "23",
          "7",
          "10",
          "-4"
        ],
        "answer": 0,
        "exp": "07-mavzu Heap Sort rasmi: Step 1-2 da 50 oxirga ketadi, Step 3-4 da 23 root dan oxirga [23, 50] ga tushadi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Quick Sort algoritmining muallifi C. A. R. Hoare uni qayerda va nima maqsadda yaratgan?",
        "options": [
          "Google da veb-sahifalarni indekslashda",
          "Moskva davlat universitetida mashinali tarjima (ruscha so'zlarni inglizcha lug'atdan tezroq qidirish uchun tartiblashda)",
          "Cyber University da laboratoriya ishida",
          "Bell Labs da C tilini yozishda"
        ],
        "answer": 1,
        "exp": "07-mavzu slayd: Hoare Moskva davlat universitetida mashinali tarjima bo'yicha ishlagan davrida yaratgan."
      },
      {
        "topic": "08-Mavzu",
        "q": "08-mavzu kodidagi faktorial(3) funksiyasi while siklida necha marta ko'paytiradi va natijada nima qaytaradi?",
        "options": [
          "i=1, 2 da aylanadi va 2 qaytaradi",
          "i=1, 2, 3 da aylanadi va 6 qaytaradi (1×2×3 = 6)",
          "24 qaytaradi",
          "i=0, 1, 2, 3 da aylanadi va 0 qaytaradi"
        ],
        "answer": 1,
        "exp": "08-mavzu slayd: 1-qadam 1×1=1, 2-qadam 1×2=2, 3-qadam 2×3=6."
      },
      {
        "topic": "08-Mavzu",
        "q": "4! (4 faktorial) qiymati nechaga teng?",
        "options": [
          "12",
          "16",
          "24",
          "120"
        ],
        "answer": 2,
        "exp": "4! = 1 × 2 × 3 × 4 = 24."
      },
      {
        "topic": "08-Mavzu",
        "q": "6! (6 faktorial) qiymati nechaga teng?",
        "options": [
          "720",
          "64",
          "120",
          "360"
        ],
        "answer": 0,
        "exp": "6! = 5! × 6 = 120 × 6 = 720."
      },
      {
        "topic": "04-Mavzu",
        "q": "Rekursiyani qo'llashda nima uchun uning chuqurligi yetarli darajada kichik bo'lishi shart?",
        "options": [
          "Katta chuqurlikda CPU harorati 0 ga tushadi",
          "Kichik chuqurlikda Base Case ishlamay qoladi",
          "Kichik chuqurlikda Heap xotirasi o'chadi",
          "Katta chuqurlikda dastur uzoq ishlashi va stek xotirasining yetishmovchiligi (Overflow) yuz berishi mumkin"
        ],
        "answer": 3,
        "exp": "04-mavzu 13-slayd: Katta chuqurlikdagi rekursiyada uzoq vaqt ishlash va stekning to'lib toshib ketishi yuz beradi."
      }
    ]
  },
  {
    "variant": 10,
    "title": "10-Variant: Union/Struct, Counting Sort & Cocktail Sort",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "Tuzilishning murakkabligi darajasi bo'yicha 'har xil turdagi ma'lumotlar to'plamlari' ga nimalar kiradi?",
        "options": [
          "Oddiy konstantalar",
          "Ro'yxatlar, daraxtlar va graflar",
          "Yozuvlar va sinf obyektlari",
          "Bitta va ko'p o'lchovli massivlar"
        ],
        "answer": 2,
        "exp": "01-mavzu 14-slayd: har xil turdagi ma'lumotlar to'plamlari — yozuvlar va sinf obyektlari."
      },
      {
        "topic": "01-Mavzu",
        "q": "Tuzilishning murakkabligi bo'yicha 'ichki aloqalarga ega dinamik tuzilmalar' guruhiga qaysilar kiradi?",
        "options": [
          "Ro'yxatlar, daraxtlar, graflar",
          "Bir va ko'p o'lchovli massivlar",
          "Yozuvlar va sinf obyektlari",
          "Oddiy standart o'zgaruvchilar"
        ],
        "answer": 0,
        "exp": "01-mavzu 14-slayd: ichki aloqalarga ega dinamik tuzilmalar — ro'yxatlar, daraxtlar, graflar."
      },
      {
        "topic": "01-Mavzu",
        "q": "Ma'lumot tuzilmalarida 'Yaratish (Create)' amali dasturlashda qachon bajariladi?",
        "options": [
          "Dastur yopilishi bilan (xotirani bo'shatish)",
          "Tenglashtirish operatori yordamida (o'zgartirish)",
          "O'zgaruvchi ismiga murojaat orqali (o'qish)",
          "O'zgaruvchilarni e'lon qilinganda (xotiradan maydon ajratish)"
        ],
        "answer": 3,
        "exp": "01-mavzu 15-slayd: Yaratish amali — o'zgaruvchilarni e'lon qilinganda xotiradan kerakli maydonlarni ajratish."
      },
      {
        "topic": "02-Mavzu",
        "q": "Obyekt (object) nima?",
        "options": [
          "Xususiyatlar va atributlarga ega hamda ularga qiymat qabul qiluvchi, klassning nusxa o'zgaruvchisi (masalan: talaba)",
          "Faqat bir o'lchovli statik massiv indeksi",
          "Faqat xotiradagi 1 bitlik mantiqiy bayroq",
          "Kompilyatorning ichki xato xabari"
        ],
        "answer": 0,
        "exp": "02-mavzu 11-slayd: Obyekt — xususiyat va atributlarga ega tuzilma, klassning nusxa o'zgaruvchisi."
      },
      {
        "topic": "02-Mavzu",
        "q": "1 o'lchovli massiv elementlari indekslari qanday ko'rinishda bo'ladi?",
        "options": [
          "a[-1], a[0], ..., a[n]",
          "a[1], a[2], ..., a[n+1] (1 dan boshlanadi)",
          "a[0], a[1], ..., a[n-1] (0 dan boshlanadi)",
          "a(0), a(1), ..., a(n)"
        ],
        "answer": 2,
        "exp": "02-mavzu 12-slayd: 1 o'lchovli massiv — a[0], a[1], ..., a[n-1], a[n]."
      },
      {
        "topic": "02-Mavzu",
        "q": "Vektorning oddiy statik massivdan asosiy farqi nimada?",
        "options": [
          "Vektor uzunligi kompilyatsiyada qat'iy belgilanadi",
          "Vektor elementlariga indeks bilan murojaat qilib bo'lmaydi",
          "Vektor uzunligi oldindan berilmaydi va u dastur bajarilishi mobaynida o'zgarib turadi",
          "Vektor bir vaqtning o'zida har xil turdagi (int va string) elementlarni saqlaydi"
        ],
        "answer": 2,
        "exp": "02-mavzu 12-slayd: Vektorning massivdan farqi — vektor uzunligi oldindan berilmaydi va dinamik o'zgaradi."
      },
      {
        "topic": "03-Mavzu",
        "q": "begin() metodi iteratorni qayerga joylashtiradi?",
        "options": [
          "Konteynerning birinchi elementiga",
          "Teskari tartibdagi birinchi elementga",
          "Oxirgi elementdan keyingi o'rniga",
          "Konteynerning oxirgi elementiga"
        ],
        "answer": 0,
        "exp": "03-mavzu 10-slayd: begin() — iteratorni konteynerning birinchi elementiga joylashtirish."
      },
      {
        "topic": "03-Mavzu",
        "q": "end() metodi iteratorni qayerga joylashtiradi?",
        "options": [
          "Konteynerning oxirgi elementidan keyingi o'rniga",
          "Konteynerning aynan oxirgi elementiga",
          "Konteynerning birinchi elementiga",
          "Konteynerning o'rtasiga"
        ],
        "answer": 0,
        "exp": "03-mavzu 10-slayd: end() — konteynerning oxirgi elementidan keyingi o'rniga joylashtirish."
      },
      {
        "topic": "03-Mavzu",
        "q": "rbegin() metodi nima uchun ishlatiladi?",
        "options": [
          "Konteynerni tozalash uchun",
          "Elementlarning teskari tartibida boshidagi elementga (ya'ni oxirgi elementga) murojaat uchun",
          "To'g'ri tartibdagi birinchi elementga murojaat uchun",
          "Elementlar sonini aniqlash uchun"
        ],
        "answer": 1,
        "exp": "03-mavzu 10-slayd: rbegin() — elementlarning teskari tartibida boshidagi elementga murojaat."
      },
      {
        "topic": "04-Mavzu",
        "q": "Funksiya o'zini to'g'ridan-to'g'ri emas, boshqa bir B funksiyasi orqali (A → B → A) chaqirsa, bu qaysi tur?",
        "options": [
          "Bilvosita / O'zaro rekursiya (Indirect / Mutual Recursion)",
          "Chiziqli rekursiya (Linear)",
          "Quyruq rekursiya (Tail)",
          "Bevosita rekursiya (Direct)"
        ],
        "answer": 0,
        "exp": "04-mavzu 3 va 12-slayd: bilvosita / mutual recursion — A B ni, B esa A ni chaqiradi."
      },
      {
        "topic": "04-Mavzu",
        "q": "Funksiya yopilishi (tugashi) bilan uning Stack Frame i bilan nima sodir bo'ladi?",
        "options": [
          "Xotiradan butunlay o'chib ketadi (Pop qilinadi)",
          "Dastur tugaguncha Stack da qoladi",
          "Heap ga ko'chirilib saqlab qo'yiladi",
          "Global o'zgaruvchiga aylanadi"
        ],
        "answer": 0,
        "exp": "04-mavzu 8-slayd: Funksiya yopilishi bilan uning Stack Frame i ham xotiradan butunlay o'chib ketadi."
      },
      {
        "topic": "04-Mavzu",
        "q": "Quyidagi count(n) funksiyasi count(3) chaqirilganda nechta freym ketma-ket chaqiriladi (count(0) ham hisobda)?\n<pre>void count(int n) { if (n==0) return; count(n-1); }</pre>",
        "options": [
          "5 ta",
          "2 ta",
          "4 ta (count(3), count(2), count(1), count(0))",
          "3 ta"
        ],
        "answer": 2,
        "exp": "04-mavzu 3-slayd chizmasi: count(3) -> count(2) -> count(1) -> count(0) — 4 ta chaqiruv."
      },
      {
        "topic": "05-Mavzu",
        "q": "2 ta qator va 3 ta ustunli 2D massivning Shape ko'rinishi qanday?",
        "options": [
          "Shape: (6)",
          "Shape: (2, 3)",
          "Shape: (3, 2)",
          "Shape: (2, 3, 3)"
        ],
        "answer": 1,
        "exp": "05-mavzu 25-slayd: Slayddagi Shape (2, 3) ikki qator va uchta ustun borligini bildiradi."
      },
      {
        "topic": "05-Mavzu",
        "q": "2 ta guruh, har guruhda 3 talaba, har talabada 3 ta fandan baho bo'lsa, 3D massiv Shape i qanday?",
        "options": [
          "Shape: (2, 3, 3)",
          "Shape: (2, 3)",
          "Shape: (3, 2, 3)",
          "Shape: (3, 3, 2)"
        ],
        "answer": 0,
        "exp": "05-mavzu 27-slayd: Shape (2, 3, 3) ikki guruh, uchta talaba, uchta baho borligini bildiradi."
      },
      {
        "topic": "05-Mavzu",
        "q": "baholar = [70, 80, 90, 85, 95] bo'lsa, print(baholar[2]) nimani chiqaradi?",
        "options": [
          "85",
          "90",
          "80",
          "70"
        ],
        "answer": 1,
        "exp": "05-mavzu 23-slayd: 0:70, 1:80, 2:90."
      },
      {
        "topic": "06-Mavzu",
        "q": "Insertion Sort ning C++ kodida element chapdagi qo'shnisidan kichik bo'lmasa nima yoziladi?\n<pre>if (arr[j + 1] &lt; arr[j]) swap(arr[j + 1], arr[j]);\nelse ...</pre>",
        "options": [
          "return 0;",
          "continue;",
          "delete [] arr;",
          "break;"
        ],
        "answer": 3,
        "exp": "06-mavzu slayd: else break; — element o'z joyiga kelgach keyingi elementga o'tiladi."
      },
      {
        "topic": "06-Mavzu",
        "q": "Python dagi Insertion Sort kodida tashqi sikl nechanchi indeksdan boshlanadi (for i in range(..., len(arr)))?",
        "options": [
          "2 dan",
          "0 dan",
          "1 dan (chunki 0-elementning o'zi boshida tartiblangan hisoblanadi)",
          "len(arr) - 1 dan"
        ],
        "answer": 2,
        "exp": "06-mavzu slayd: for i in range(1, len(arr)):."
      },
      {
        "topic": "06-Mavzu",
        "q": "Gibrid saralash algoritmlarida (masalan, Python dagi TimSort da) kichik qismlar uchun qaysi sodda usul ishlatiladi?",
        "options": [
          "Selection Sort",
          "Bubble Sort",
          "Pancake Sort",
          "Insertion Sort"
        ],
        "answer": 3,
        "exp": "06-mavzu infografika: Insertion Sort — Used in hybrid sorts (e.g., TimSort)."
      },
      {
        "topic": "07-Mavzu",
        "q": "Quick Sort da pivotga nisbatan elementlar qanday ajratiladi?",
        "options": [
          "Faqat juft elementlar chap tomonga",
          "Pivot doim o'chirib tashlanadi",
          "Pivotdan katta elementlar chap tomonga, kichiklar o'ng tomonga",
          "Pivotdan kichik elementlar chap tomonga, katta yoki teng elementlar o'ng tomonga"
        ],
        "answer": 3,
        "exp": "07-mavzu slayd: Pivotdan kichik elementlar chapga, katta yoki tenglar o'ngga joylashtiriladi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Quick Sort ning Best Case, Average Case, Worst Case va Space Complexity qiymatlari to'g'ri berilgan qatorni toping:",
        "options": [
          "Best O(n log n), Average O(n²), Worst O(2^n), Space O(n)",
          "Best O(n), Average O(n log n), Worst O(n log n), Space O(1)",
          "Best O(n log n), Average O(n log n), Worst O(n²), Space O(log n)",
          "Best O(n²), Average O(n²), Worst O(n²), Space O(n)"
        ],
        "answer": 2,
        "exp": "07-mavzu slayd: Best O(n log n), Average O(n log n), Worst O(n²), Space O(log n)."
      },
      {
        "topic": "07-Mavzu",
        "q": "Python da massiv[-1] ifodasi Quick Sort kodida qaysi elementni tayanch (pivot) qilib oladi?",
        "options": [
          "Massivning o'rtadagi elementini",
          "Massivning birinchi elementini",
          "Massivdan tashqaridagi elementni",
          "Massivning eng oxirgi elementini"
        ],
        "answer": 3,
        "exp": "07-mavzu slayd: massiv[-1] orqali oxirgi element tayanch sifatida olinadi."
      },
      {
        "topic": "08-Mavzu",
        "q": "Graf uchun Adjacency Matrix (Qo'shnilik matritsasi) ning asosiy afzalligi va kamchiligi nima?",
        "options": [
          "Afzalligi: qirra borligini tekshirish Time O(1); Kamchiligi: Space O(V²) xotira egallaydi",
          "Afzalligi: Time O(V); Kamchiligi: Space O(log V)",
          "Afzalligi: Time O(n!); Kamchiligi: yo'q",
          "Afzalligi: Space O(1); Kamchiligi: Time O(V²)"
        ],
        "answer": 0,
        "exp": "08-mavzu slayd: matrix[a][b] tekshirish Time O(1), lekin V×V jadval Space O(V²)."
      },
      {
        "topic": "08-Mavzu",
        "q": "08-mavzu oxirgi slaydida keltirilgan A, B, C, D, E (5 ta tugun) grafida A dan B ga qirra bormi?",
        "options": [
          "Faqat B dan A ga bor",
          "Ha, matrix[A][B] = 1",
          "Yo'q, matrix[A][B] = 0",
          "Matritsada A satri bo'sh"
        ],
        "answer": 1,
        "exp": "08-mavzu Adjacency Matrix rasmi: A satri [0, 1, 0, 0, 0] -> A dan B ga qirra bor."
      },
      {
        "topic": "08-Mavzu",
        "q": "08-mavzudagi A, B, C, D, E grafida D tugunidan boshqa tugunlarga chiquvchi qirralar bormi?",
        "options": [
          "Ha, barchasiga bor",
          "Ha, D dan C ga bor",
          "Yo'q, D satri to'liq [0, 0, 0, 0, 0]",
          "Ha, D dan E ga bor"
        ],
        "answer": 2,
        "exp": "08-mavzu Adjacency Matrix rasmi: D satri [0, 0, 0, 0, 0]."
      },
      {
        "topic": "05-Mavzu",
        "q": "2D va 3D massivlarni ta'riflovchi oddiy formula 24-slaydda qanday berilgan?",
        "options": [
          "2D = stek + navbat; 3D = graf + daraxt",
          "2D = indeks + qiymat; 3D = xesh + kalit",
          "2D = jadval + qator; 3D = satr + ustun",
          "2D = qator + ustun; 3D = jadval + qator + ustun"
        ],
        "answer": 3,
        "exp": "05-mavzu 24-slayd: 2D = qator + ustun; 3D = jadval + qator + ustun."
      }
    ]
  },
  {
    "variant": 11,
    "title": "11-Variant: Razryadlar, STL Metodlar & Divide-Conquer",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "Ma'lumot tuzilmalarida 'O'chirish (Delete)' amali oddiy statik dasturlashda qachon bajariladi?",
        "options": [
          "O'zgaruvchi e'lon qilinganda",
          "O'zgaruvchi ismiga murojaat qilinganda",
          "Tenglashtirish operatori ishlatilganda",
          "Dastur yopilishi bilan (maydonlarni bo'shatish)"
        ],
        "answer": 3,
        "exp": "01-mavzu 15-slayd: O'chirish amali dasturlashda dastur yopilishi bilan maydonlarni bo'shatishdan iborat."
      },
      {
        "topic": "01-Mavzu",
        "q": "Ma'lumot tuzilmalarida 'Tanlash (Read / ruxsat)' amali qanday amalga oshiriladi?",
        "options": [
          "Dasturni yopish orqali",
          "O'zgaruvchi ismiga murojaat orqali",
          "O'zgaruvchini e'lon qilish orqali",
          "Tenglashtirish operatori (=) yordamida"
        ],
        "answer": 1,
        "exp": "01-mavzu 15-slayd: Tanlash amali o'zgaruvchi ismiga murojaat orqali amalga oshiriladi."
      },
      {
        "topic": "01-Mavzu",
        "q": "Ma'lumot tuzilmalarida 'Yangilash (Update)' amali qaysi operator yordamida bajariladi?",
        "options": [
          "Tenglashtirish (o'zlashtirish) operatori yordamida",
          "Shartli o'tish operatori yordamida",
          "new operatori yordamida",
          "delete operatori yordamida"
        ],
        "answer": 0,
        "exp": "01-mavzu 15-slayd: Yangilash amali maxsus operator (tenglashtirish operatori) yordamida bajariladi."
      },
      {
        "topic": "02-Mavzu",
        "q": "Yozuv (struct) ga berilgan to'g'ri ta'rif qaysi?",
        "options": [
          "Faqat 2D ko'rinishdagi butun sonlar jadvali",
          "Bir xil turdagi ma'lumotlarning tartibsiz takrorlanmas majmuasi",
          "Bitta xotira hududini qoplaydigan elementlar to'plami",
          "Turli turdagi ma'lumotlarning maydonlardan tashkil topgan tartibli ketma-ketligi"
        ],
        "answer": 3,
        "exp": "02-mavzu 13-slayd: Yozuv bu turli turdagi ma'lumotlarning tartibli ketma-ketligidir, maydonlardan tashkil topadi."
      },
      {
        "topic": "02-Mavzu",
        "q": "Yozuv (struct) uchun ajratiladigan xotira hajmi qanday hisoblanadi?",
        "options": [
          "Uning maydonlariga ajratilgan xotira hajmlari yig'indisidan kelib chiqadi",
          "Har doim 4 baytga teng bo'ladi",
          "Maydonlar sonini 2 ga bo'lish orqali",
          "Faqat eng katta maydonining xotira hajmiga teng bo'ladi"
        ],
        "answer": 0,
        "exp": "02-mavzu 13-slayd: Yozuv uchun xotira hajmi maydonlarga ajratilgan xotira hajmlari yig'indisidan kelib chiqadi."
      },
      {
        "topic": "02-Mavzu",
        "q": "Yozuv (struct) ustidagi asosiy 3 ta amalga qaysilar kiradi?",
        "options": [
          "Faqat xotiradan delete [] bilan o'chirish",
          "Faqat flip(), merge(), split()",
          "Maydon ma'lumotlarini o'qish, maydonga ma'lumot kiritish, maydon turiga mos barcha amallar",
          "Faqat push(), pop(), peek()"
        ],
        "answer": 2,
        "exp": "02-mavzu 13-slayd: 1) o'qish, 2) kiritish, 3) turga mos barcha amallar."
      },
      {
        "topic": "03-Mavzu",
        "q": "rend() metodi nimani ko'rsatadi?",
        "options": [
          "Teskari tartibdagi elementlarning oxirgidan keyingi o'rnini (birinchi elementdan oldingi o'rinni)",
          "Oxirgi elementni",
          "Konteyner bo'shligini",
          "Birinchi elementni"
        ],
        "answer": 0,
        "exp": "03-mavzu 10-slayd: rend() — teskari tartibdagi elementlarning oxirgidan keyingi o'ringa murojaat."
      },
      {
        "topic": "03-Mavzu",
        "q": "size() metodi konteynerda nimani aniqlaydi?",
        "options": [
          "Konteyner bo'shligini",
          "Birinchi element qiymatini",
          "Konteyner xotiradagi bayt hajmini",
          "Konteynerdagi elementlar sonini"
        ],
        "answer": 3,
        "exp": "03-mavzu 10-slayd: size() — konteynerdagi elementlar sonini aniqlash."
      },
      {
        "topic": "03-Mavzu",
        "q": "empty() metodi konteynerda nima vazifa bajaradi?",
        "options": [
          "Elementlar sonini chiqaradi",
          "Konteynerni bo'shatadi (tozalaydi)",
          "Yangi element qo'shadi",
          "Konteynerni bo'shlikka tekshiradi"
        ],
        "answer": 3,
        "exp": "03-mavzu 10-slayd: empty() — konteynerlarni bo'shlikka tekshirish (clear() esa tozalaydi!)."
      },
      {
        "topic": "04-Mavzu",
        "q": "Tail Recursion (quyruq rekursiya) ning asosiy belgisi nima?",
        "options": [
          "Rekursiv chaqiruv funksiyaning eng oxirgi amali bo'ladi va qaytishda qo'shimcha hisoblash bajarilmaydi",
          "Base Case umuman bo'lmaydi",
          "Har qadamda massiv nusxasi olinadi",
          "Funksiya ichida 2 ta rekursiv chaqiruv bo'ladi"
        ],
        "answer": 0,
        "exp": "Tail Recursion da rekursiv chaqiruv eng oxirgi amalda bajariladi."
      },
      {
        "topic": "04-Mavzu",
        "q": "fib(0) = 0, fib(1) = 1 bo'lsa, fib(5) ning qiymati nechaga teng?",
        "options": [
          "8",
          "5",
          "3",
          "4"
        ],
        "answer": 1,
        "exp": "fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=3+2=5."
      },
      {
        "topic": "04-Mavzu",
        "q": "fib(0) = 0, fib(1) = 1 bo'lsa, fib(6) ning qiymati nechaga teng?",
        "options": [
          "5",
          "8",
          "6",
          "13"
        ],
        "answer": 1,
        "exp": "fib(4)=3, fib(5)=5, fib(6)=5+3=8."
      },
      {
        "topic": "05-Mavzu",
        "q": "2D massiv baholar = [[70, 80, 90], [85, 95, 75]] da 90 sonini izlaganda i+1 va j+1 nimani bildiradi?",
        "options": [
          "3-talaba, 1-fandan 90 ball olgan",
          "2-talaba, 1-fandan 90 ball olgan",
          "1-talaba, 3-fandan 90 ball olgan",
          "0-talaba, 2-fandan 90 ball olgan"
        ],
        "answer": 2,
        "exp": "05-mavzu 26-slayd: i=0 -> i+1=1 (1-talaba), j=2 -> j+1=3 (3-fan)."
      },
      {
        "topic": "05-Mavzu",
        "q": "05-mavzu 27-slayddagi 3D massivda baholar[1][0][2] qiymati 85 chiqishi nimani anglatadi?",
        "options": [
          "1 birinchi guruhni, 0 ikkinchi talabani, 2 birinchi fanni bildiradi",
          "Indekslar 1 dan boshlanadi",
          "1 birinchi fanni, 0 birinchi guruhni, 2 uchinchi talabani bildiradi",
          "1 ikkinchi guruhni, 0 birinchi talabani, 2 uchinchi fanni bildiradi"
        ],
        "answer": 3,
        "exp": "05-mavzu 27-slayd: 1 ikkinchi guruhni, 0 birinchi talabani, 2 uchinchi fanni bildiradi."
      },
      {
        "topic": "05-Mavzu",
        "q": "05-mavzu 28-29-slayddagi 3D massivda [70, 80, 90] elementi uchun i+1, j+1, k+1 natijasi nima?",
        "options": [
          "1-guruh, 1-talaba, 3-fandan 90 ball olgan",
          "1-guruh, 2-talaba, 1-fandan 90 ball olgan",
          "0-guruh, 0-talaba, 2-fandan 90 ball olgan",
          "2-guruh, 1-talaba, 3-fandan 90 ball olgan"
        ],
        "answer": 0,
        "exp": "i=0 (1-guruh), j=0 (1-talaba), k=2 (3-fan)."
      },
      {
        "topic": "06-Mavzu",
        "q": "Bubble Sort ning 3 ta asosiy kamchiligi 06-mavzu slaydida qanday ko'rsatilgan?",
        "options": [
          "GPU da umuman ishlamaydi, manfiy sonlarni olmaydi, rekursiv",
          "Faqat tartiblangan datada ishlaydi, stabil emas, swap qilmaydi",
          "Katta datasetlarda sekin, yuqori vaqt murakkabligi O(n²), real loyihalar uchun samarasiz",
          "Tushunish juda qiyin, kod yozish murakkab, O(n) xotira oladi"
        ],
        "answer": 2,
        "exp": "06-mavzu infografika: 1) Slow for large datasets, 2) High time complexity, 3) Not efficient for real projects."
      },
      {
        "topic": "06-Mavzu",
        "q": "GPU vs CPU jadvalida CPU ning asosiy ustunligi nimada?",
        "options": [
          "Faqat matritsa va AI o'qitish",
          "Kuchli yadrolar (4–32), ketma-ket qayta ishlash va past kechikish (Low latency)",
          "Minglab kichik yadrolar va High throughput",
          "O(1) da saralash"
        ],
        "answer": 1,
        "exp": "06-mavzu GPU vs CPU jadvali: CPU — Few powerful cores (4-32), sequential processing, Low latency."
      },
      {
        "topic": "06-Mavzu",
        "q": "GPU vs CPU jadvalida GPU nima uchun parallel saralashda juda tez?",
        "options": [
          "Faqat 1 ta juda tez yadroga ega bo'lgani uchun",
          "Xotirasi yo'qligi uchun",
          "Low latency ga ega bo'lgani uchun",
          "Minglab kichik yadrolar (Thousands of smaller cores) va yuqori o'tkazuvchanlik (High throughput)"
        ],
        "answer": 3,
        "exp": "GPU — Thousands of smaller cores, optimized for parallel processing, High throughput."
      },
      {
        "topic": "07-Mavzu",
        "q": "massiv = [51, 42, 88] uchun tayanch = massiv[-1] (88) bo'lsa, kichik va katta ro'yxatlari qanday bo'ladi?",
        "options": [
          "kichik = [], katta = [51, 42]",
          "kichik = [51, 42], katta = []",
          "kichik = [88], katta = [42, 51]",
          "kichik = [42], katta = [51, 88]"
        ],
        "answer": 1,
        "exp": "51 < 88 va 42 < 88 bo'lgani uchun ikkalasi ham kichik ro'yxatiga tushadi, katta bo'sh qoladi."
      },
      {
        "topic": "07-Mavzu",
        "q": "[4, 3, 7, 2, 6, 1, 5, 9] massivida pivot = 6 tanlanganda chap va o'ng ko'rsatkichlar birinchi qaysi ikki elementni o'zaro almashtiradi?",
        "options": [
          "4 va 9 ni",
          "7 (7 > 6!) va 5 (5 < 6!) ni",
          "3 va 1 ni",
          "2 va 6 ni"
        ],
        "answer": 1,
        "exp": "07-mavzu Quick Sort rasmi: chapdan 7>6! va o'ngdan 5<6! topilib o'zaro almashtiriladi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Merge Sort nima uchun qo'shimcha O(n) xotira talab qiladi?",
        "options": [
          "Chunki gap qiymatlarini saqlash uchun",
          "Chunki pivot saqlash uchun",
          "Ikki tartiblangan qismni birlashtirish uchun vaqtinchalik (result) massiv ishlatilgani sababli",
          "Chunki Heap daraxtini yaratish uchun"
        ],
        "answer": 2,
        "exp": "07-mavzu slayd: ikki tartiblangan qismni birlashtirish uchun vaqtinchalik array ishlatiladi."
      },
      {
        "topic": "08-Mavzu",
        "q": "Agar grafda V = 100 ta tugun (Vertex) bo'lsa, Adjacency Matrix nechta katak (xotira birligi) egallaydi?",
        "options": [
          "100 × 100 = 10 000 ta katak — O(V²)",
          "200 ta katak",
          "1 000 ta katak",
          "100 ta katak — O(V)"
        ],
        "answer": 0,
        "exp": "Space Complexity = O(V²) = 100² = 10 000."
      },
      {
        "topic": "08-Mavzu",
        "q": "Big-O da O(n²) qanday nomlanadi va o'sish jadvalida qaysi rang/izoh bilan ko'rsatilgan?",
        "options": [
          "Logarithmic time — 'Very efficient'",
          "Quadratic / Polynomial time — 'Grows quickly'",
          "Constant time — 'Always the best!'",
          "Factorial time — 'Extremely slow!'"
        ],
        "answer": 1,
        "exp": "08-mavzu Complexity Order jadvali: O(n²) — Quadratic time (Grows quickly); O(n!) — Extremely slow!."
      },
      {
        "topic": "08-Mavzu",
        "q": "Linear time — O(n) ning Complexity Order jadvalidagi tavsifi qaysi?",
        "options": [
          "Extremely slow!",
          "Very efficient",
          "Always the best!",
          "Grows proportionally (kirish hajmiga proporsional o'sadi)"
        ],
        "answer": 3,
        "exp": "08-mavzu Complexity Order jadvali: O(n) — Linear time. Grows proportionally."
      },
      {
        "topic": "01-Mavzu",
        "q": "Ketma-ketlik tuzilmasi R munosabati misoli qanday ko'rinishda yoziladi?",
        "options": [
          "R = 0",
          "R = {(A,B), (B,C), (C,D)}",
          "R = {(A,D)}",
          "R = {(A,A), (B,B), (C,C)}"
        ],
        "answer": 1,
        "exp": "01-mavzu 11-slayddagi ketma-ketlik misoli: R={(A,B),(B,C),(C,D)}."
      }
    ]
  },
  {
    "variant": 12,
    "title": "12-Variant: Rekursiya Chuqurligi, 2D/3D Massiv & Merge Sort",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "Ko'rsatkichli toifa klassifikatsiya daraxtida qaysi guruh ostidan chiqadi?",
        "options": [
          "Faqat Chiziqli MT ichidan",
          "sozlanganMT tarkibidan",
          "Hosil qilingan MT tarkibidan",
          "chiziqsizMT tarkibidan"
        ],
        "answer": 1,
        "exp": "01-mavzu 12-slayd diagrammasida Ko'rsatkichli toifa strelkasi to'g'ridan-to'g'ri sozlanganMT dan chiqadi."
      },
      {
        "topic": "01-Mavzu",
        "q": "Stek tuzilmasi klassifikatsiya sxemasida qaysi ikki asosiy amal bilan ko'rsatilgan?",
        "options": [
          "read(), write()",
          "push(), pop()",
          "new(), delete()",
          "begin(), end()"
        ],
        "answer": 1,
        "exp": "01-mavzu 12-slaydda: Stek yonida push(), pop() amallari ko'rsatilgan."
      },
      {
        "topic": "01-Mavzu",
        "q": "Ma'lumotlar tuzilmasidagi elementlar o'rtasidagi munosabatlar nimani bildiradi?",
        "options": [
          "Funksional aloqalar va ma'lumotlar qayerda joylashganligini ko'rsatuvchi belgilarni",
          "Faqat monitor ekranidagi ranglarni",
          "Faqat dasturchi yozgan izohlarni",
          "Faqat ma'lumotlarning baytdagi hajmini"
        ],
        "answer": 0,
        "exp": "01-mavzu 4-slayd: Ma'lumotlar o'rtasidagi munosabatlar — funksional aloqalar va joylashuv belgilari."
      },
      {
        "topic": "02-Mavzu",
        "q": "Jadval (Table) ma'lumotlar tuzilmasining elementi nima hisoblanadi?",
        "options": [
          "Pointer (*)",
          "Set to'plami",
          "Yozuv (struct)",
          "Bit maydoni"
        ],
        "answer": 2,
        "exp": "02-mavzu 13-slayd: Jadval — yozuvning chekli majmuasi; jadval ma'lumotlari elementi yozuv hisoblanadi."
      },
      {
        "topic": "02-Mavzu",
        "q": "Quyidagi C++ kodida for sikli tugagach guruh[2].ID qiymati nechaga teng bo'ladi?\n<pre>struct TALABA { int ID; char fio[30]; };\nTALABA guruh[5];\nfor(int i=0; i&lt;5; i++) guruh[i].ID = i + 1;</pre>",
        "options": [
          "4",
          "3",
          "2",
          "1"
        ],
        "answer": 1,
        "exp": "i=2 bo'lganda guruh[2].ID = 2 + 1 = 3 bo'ladi."
      },
      {
        "topic": "02-Mavzu",
        "q": "To'plam (set) tuzilmasining asosiy xususiyati qaysi?",
        "options": [
          "Turli turdagi elementlarning tartibli ketma-ketligi",
          "Har bir maydoni bir xil xotirani qoplaydigan tuzilma",
          "Bir xil turdagi elementlarning tartibsiz majmuasi bo'lib, elementlar takrorlanmas bo'ladi",
          "Elementlar cheksiz marta takrorlanishi mumkin bo'lgan massiv"
        ],
        "answer": 2,
        "exp": "02-mavzu 14-slayd: To'plam — bir xil turdagi elementlarning tartibsiz majmuasi va elementlar takrorlanmas bo'ladi."
      },
      {
        "topic": "03-Mavzu",
        "q": "clear() metodi qaysi STL konteyneridan tashqari barchasida mavjud?",
        "options": [
          "deque konteyneridan tashqari",
          "array konteyneridan tashqari",
          "vector konteyneridan tashqari",
          "list konteyneridan tashqari"
        ],
        "answer": 1,
        "exp": "03-mavzu 10-slayd: clear() — konteynerni (array konteyneridan tashqari) tozalash."
      },
      {
        "topic": "03-Mavzu",
        "q": "Quyidagi C++ kodining ekranga chiqaradigan natijasi qanday bo'ladi?\n<pre>vector&lt;string&gt; names;\nnames.push_back(\"Peter\");\nnames.push_back(\"Ivan\");\nnames.push_back(\"John\");\nsort(names.begin(), names.end());\nfor (auto x : names) cout &lt;&lt; x &lt;&lt; endl;</pre>",
        "options": [
          "Ivan, John, Peter",
          "John, Ivan, Peter",
          "Peter, John, Ivan",
          "Peter, Ivan, John"
        ],
        "answer": 0,
        "exp": "03-mavzu 11-slayd natijasi: Ivan, John, Peter (alifbo tartibida)."
      },
      {
        "topic": "03-Mavzu",
        "q": "03-mavzu 11-slayddagi sort() funksiyasidan foydalanish uchun qaysi sarlavha fayli (#include) ulangan?",
        "options": [
          "#include <algorithm>",
          "#include <sort>",
          "#include <array>",
          "#include <math.h>"
        ],
        "answer": 0,
        "exp": "03-mavzu 11-slayd 5-qator: #include <algorithm>."
      },
      {
        "topic": "04-Mavzu",
        "q": "Quyidagi rekursiv funksiya sum(4) da nima qaytaradi?\n<pre>int sum(int n) { if (n&lt;=0) return 0; return n + sum(n-1); }</pre>",
        "options": [
          "10",
          "4",
          "6",
          "24"
        ],
        "answer": 0,
        "exp": "4 + 3 + 2 + 1 + 0 = 10."
      },
      {
        "topic": "04-Mavzu",
        "q": "Yuqoridagi sum(n) funksiyasi ko'paytirish (*) o'rniga qo'shish (+) bajarsa, sum(5) natijasi nima?",
        "options": [
          "120",
          "25",
          "10",
          "15"
        ],
        "answer": 3,
        "exp": "5 + 4 + 3 + 2 + 1 + 0 = 15."
      },
      {
        "topic": "04-Mavzu",
        "q": "Call Stack diagrammasida f(1) bajarilib bo'lgach, boshqaruv qayerga qaytadi (main → f(3) → f(2) → f(1))?",
        "options": [
          "Dasturdan chiqib ketadi",
          "To'g'ridan-to'g'ri main() ga",
          "f(2) ga",
          "f(3) ga"
        ],
        "answer": 2,
        "exp": "04-mavzu 8-slayd chizmasi: LIFO tartibida f(1) dan oldin chaqirgan f(2) ga qaytadi."
      },
      {
        "topic": "05-Mavzu",
        "q": "05-mavzu 30-slayd vazifasida baholar = [[70, 85, 90], [80, 75, 95], [85, 90, 70]] da key = 85 uchun nechta natija chiqadi?",
        "options": [
          "3 ta natija",
          "2 ta natija (1-talaba 2-fandan va 3-talaba 1-fandan)",
          "1 ta natija (faqat 1-talaba 2-fandan)",
          "0 ta natija"
        ],
        "answer": 1,
        "exp": "baholar[0][1]=85 (1-talaba 2-fan) va baholar[2][0]=85 (3-talaba 1-fan)."
      },
      {
        "topic": "05-Mavzu",
        "q": "Binary Search da boshlang'ich chegaralar L = 0 va R = N - 1 dan R nima uchun N ga emas N - 1 ga tenglanadi?",
        "options": [
          "Kompilyator N ni qabul qilmagani uchun",
          "Indekslash 0 dan boshlangani uchun oxirgi element indeksi N - 1 bo'ladi",
          "Massivning oxirgi elementini tashlab yuborish uchun",
          "Indekslash 1 dan boshlangani uchun"
        ],
        "answer": 1,
        "exp": "N ta elementli massiv indekslari 0 dan N - 1 gacha bo'ladi."
      },
      {
        "topic": "05-Mavzu",
        "q": "Binary Search da while siklining sharti qaysi?",
        "options": [
          "while L == R:",
          "while L > R:",
          "while L < R - 1:",
          "while L <= R:"
        ],
        "answer": 3,
        "exp": "05-mavzu 12-slayd: while L <= R: (L va R tenglashganda ham oxirgi element tekshiriladi)."
      },
      {
        "topic": "06-Mavzu",
        "q": "06-mavzu grafigida Bubble Sort ni ketma-ket (Sequential) dan Parallel ga o'tkazganda vaqt qanday o'zgargan?",
        "options": [
          "7 377 ms dan 123 322 ms gacha oshgan",
          "15.10 ms dan 1 461 ms gacha",
          "123 322 ms dan 7 377.80 ms gacha (keskin kamaygan)",
          "O'zgarmagan"
        ],
        "answer": 2,
        "exp": "06-mavzu Execution Time grafigi: Bubble Sequential 123322 ms vs Parallel 7377.80 ms."
      },
      {
        "topic": "06-Mavzu",
        "q": "Sun'iy intellekt (AI) zamonaviy saralash tizimlarida qanday rol o'ynaydi?",
        "options": [
          "Bevosita saralashni almashtirmaydi, lekin mos algoritm tanlash va optimallashtirishda yordam beradi",
          "Saralashga umuman aloqasi yo'q",
          "Barcha O(n²) algoritmlarni O(1) ga aylantiradi",
          "Counting Sort o'rnini butunlay egallaydi"
        ],
        "answer": 0,
        "exp": "06-mavzu slayd: Sun'iy intellekt bevosita oddiy saralashni almashtirmaydi, lekin mos algoritm tanlash va optimallashtirishda yordam berishi mumkin."
      },
      {
        "topic": "06-Mavzu",
        "q": "Selection Sort ning one-line summary (bir qatorli xulosasi) slaydda qanday berilgan?",
        "options": [
          "\"Keep selecting the minimum element.\"",
          "\"Keep flipping to put the largest element in place.\"",
          "\"Keep swapping adjacent elements.\"",
          "\"Keep inserting elements into the sorted portion.\""
        ],
        "answer": 0,
        "exp": "06-mavzu Comparison Table: Selection Sort — Keep selecting the minimum element."
      },
      {
        "topic": "07-Mavzu",
        "q": "Quyidagi algoritmlardan qaysi ikkitasi joyida (in-place, Space O(1)) ishlaydi va Worst Case i O(n log n) dan yomon emas yoki yaxshi?",
        "options": [
          "Counting Sort (Space O(n+k))",
          "Merge Sort (Time O(n log n), Space O(n))",
          "Heap Sort (Time O(n log n), Space O(1))",
          "Quick Sort (Worst O(n²), Space O(log n))"
        ],
        "answer": 2,
        "exp": "Heap Sort ham O(n log n) vaqtda ishlaydi, ham O(1) qo'shimcha xotira sarflaydi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Shell Sort da taqqoslashlar va o'rin almashtirishlar haqida 07-mavzu xulosasi nima deydi?",
        "options": [
          "Taqqoslashlar 0 ga tushadi, o'rin almashtirishlar n² ga chiqadi",
          "Ikkalasi ham n! ga teng bo'ladi",
          "Taqqoslashlar soni ortishi mumkin, lekin o'rin almashtirishlar (swap/siljishlar) kamayadi",
          "Hech qanday farq yo'q"
        ],
        "answer": 2,
        "exp": "07-mavzu slayd: Taqqoslashlar soni ortishi mumkin, lekin o'rin almashtirishlar kamayadi."
      },
      {
        "topic": "07-Mavzu",
        "q": "[70, 20, 30, 50, 60, 10, 40] massivida Divide bosqichining birinchi bo'linishi qanday bo'ladi?",
        "options": [
          "[70, 20, 30, 50] va [60, 10, 40]",
          "[10, 20, 30] va [40, 50, 60, 70]",
          "[70, 20] va [30, 50, 60, 10, 40]",
          "[70] va [20, 30, 50, 60, 10, 40]"
        ],
        "answer": 0,
        "exp": "07-mavzu 1-slayd rasmi: [70, 20, 30, 50] va [60, 10, 40]."
      },
      {
        "topic": "08-Mavzu",
        "q": "08-mavzu xulosasiga ko'ra 'har safar yarmiga kamayadi' izohi qaysi Big-O sinfiga tegishli?",
        "options": [
          "O(1)",
          "O(n²)",
          "O(log n)",
          "O(n)"
        ],
        "answer": 2,
        "exp": "08-mavzu oxirgi slayd xulosasi: O(log n) — har safar yarmiga kamayadi."
      },
      {
        "topic": "08-Mavzu",
        "q": "08-mavzu xulosasiga ko'ra 'bitta amal' va 'bitta loop' izohlari qaysi sinflarga tegishli?",
        "options": [
          "O(n) — bitta amal; O(1) — bitta loop",
          "O(1) — bitta amal; O(n) — bitta loop",
          "O(log n) — bitta amal; O(n²) — bitta loop",
          "O(n log n) — bitta amal; O(2^n) — bitta loop"
        ],
        "answer": 1,
        "exp": "08-mavzu oxirgi slayd: O(1) — bitta amal; O(n) — bitta loop."
      },
      {
        "topic": "08-Mavzu",
        "q": "08-mavzu xulosasiga ko'ra 'efficient sorting' va 'loop ichida loop' qaysi sinflarga tegishli?",
        "options": [
          "O(log n) — efficient sorting; O(n) — loop ichida loop",
          "O(n) — efficient sorting; O(2^n) — loop ichida loop",
          "O(n!) — efficient sorting; O(n²) — loop ichida loop",
          "O(n log n) — efficient sorting; O(n²) — loop ichida loop"
        ],
        "answer": 3,
        "exp": "08-mavzu oxirgi slayd: O(n log n) — efficient sorting; O(n²) — loop ichida loop."
      },
      {
        "topic": "02-Mavzu",
        "q": "To'plam (set) ustida bajariladigan 4 ta asosiy amal slaydda qanday ko'rsatilgan?",
        "options": [
          "Mantissa ajratish, Tartib ajratish, Qoshish, Bo'lish",
          "Divide, Conquer, Merge, Partition",
          "Push, Pop, Flip, Swap",
          "Element kiritish, o'chirish, elementlar sonini aniqlash, bo'shlikka tekshirish"
        ],
        "answer": 3,
        "exp": "02-mavzu 14-slayd: element kiritish, o'chirish, elementlar sonini aniqlash, bo'shlikka tekshirish."
      }
    ]
  },
  {
    "variant": 13,
    "title": "13-Variant: Stability, Radix Sort & Logarifmik Tahlil",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "Quyidagilardan qaysi biri 'A + B muammosi' da Fizik (jismoniy) bosqichni tasvirlaydi?",
        "options": [
          "'Kirish: 2 ta son, Chiqish: yig'indi' deb yozilgan texnik shart",
          "Blok-sxemadagi romb va to'rtburchaklar",
          "int a, b; cin >> a >> b; C++ kodi",
          "Xotira katakchalarida 2, 3 va 5 qiymatlarining joylashishi"
        ],
        "answer": 3,
        "exp": "01-mavzu 10-slaydda jadval ko'rinishidagi xotira kataklarida 2, 3 va 5 joylashishi Fizik bosqichga mos."
      },
      {
        "topic": "01-Mavzu",
        "q": "Tuzilishning tartibliligi bo'yicha ko'p bog'langan ro'yxatlar, daraxtlar va grafikalar qaysi turga kiradi?",
        "options": [
          "Chiziqsiz tuzilmalarga",
          "Statik tuzilmalarga",
          "Oddiy turlarga",
          "Chiziqli tuzilmalarga"
        ],
        "answer": 0,
        "exp": "01-mavzu 13-slayd: Chiziqsiz — ko'p bog'langan ro'yxatlar, daraxt tuzilmalari, grafikalar."
      },
      {
        "topic": "01-Mavzu",
        "q": "Tuzilishning tartibliligi bo'yicha vektorlar, massivlar, steklar va yozuvlar qaysi turga kiradi?",
        "options": [
          "Binar daraxtlarga",
          "Chiziqsiz tuzilmalarga",
          "Gipergraflarga",
          "Chiziqli tuzilmalarga"
        ],
        "answer": 3,
        "exp": "01-mavzu 13-slayd: Chiziqli — vektorlar, massivlar, steklar, pastki qavatlar, yozuvlar."
      },
      {
        "topic": "02-Mavzu",
        "q": "C++ da butun sonli to'plam qanday e'lon qilinadi?",
        "options": [
          "union set { int s; };",
          "int set[s];",
          "vector<int> s;",
          "set<int> s;"
        ],
        "answer": 3,
        "exp": "02-mavzu 14-slayd: To'plamni C++ da quyidagicha e'lon qilinadi: set<int> s;"
      },
      {
        "topic": "02-Mavzu",
        "q": "C++ klassini yozishda klass tanasi qaysi belgi bilan tugallanishi shart?",
        "options": [
          "Nuqtali vergul bilan (};)",
          "Hech qanday belgi qo'yilmaydi (})",
          "Vergul bilan (},)",
          "Ikki nuqta bilan (}:)"
        ],
        "answer": 0,
        "exp": "02-mavzu 11-slayd: class klass_nomi { ... }; — oxirida nuqtali vergul bo'lishi shart."
      },
      {
        "topic": "02-Mavzu",
        "q": "int a[2][3]; massivi jami nechta butun son elementini saqlay oladi?",
        "options": [
          "6 ta element (2 qator × 3 ustun)",
          "12 ta element",
          "5 ta element (2 + 3)",
          "3 ta element"
        ],
        "answer": 0,
        "exp": "2 qator × 3 ustun = 6 ta element."
      },
      {
        "topic": "03-Mavzu",
        "q": "string A = \"This is a string\"; uchun to'g'ri iterator e'lon qilish qaysi?",
        "options": [
          "string.iterator it;",
          "char* string::it;",
          "iterator<string> it;",
          "string::iterator it;"
        ],
        "answer": 3,
        "exp": "03-mavzu 10-slayd: string::iterator it;"
      },
      {
        "topic": "03-Mavzu",
        "q": "for (it = A.begin(); it != A.end(); ++it) siklida joriy belgini olish uchun nima yoziladi?",
        "options": [
          "*it",
          "it[]",
          "A[it]",
          "&it"
        ],
        "answer": 0,
        "exp": "03-mavzu 10-slayd: cout << *it << endl; — ko'rsatkich kabi dereference (*it) qilinadi."
      },
      {
        "topic": "03-Mavzu",
        "q": "int **B = new int*[5]; siklda B[i] = new int[5](); qilib yaratilgan 2D massivni xotiradan to'g'ri o'chirish qanday?",
        "options": [
          "Avval siklda har bir delete [] B[i]; so'ng delete [] B;",
          "Avval delete [] B; so'ng siklda delete [] B[i];",
          "delete B;",
          "Faqat delete [] B; yozish kifoya"
        ],
        "answer": 0,
        "exp": "Xotira sizib chiqmasligi uchun avval ichki qatorlar delete[] B[i], so'ng tashqi ko'rsatkichlar massivi delete[] B o'chiriladi."
      },
      {
        "topic": "04-Mavzu",
        "q": "Rekursiv yechim va Iterativ yechim taqqoslanganda qaysi fikr to'g'ri?",
        "options": [
          "Iterativ yechim doim Stack Overflow beradi",
          "Rekursiv kod ixchamroq, lekin Stack Frame tufayli ko'proq xotira (O(n)) sarflaydi; iterativ sikl esa kam xotira (O(1)) oladi",
          "Rekursiv yechim hech qachon qo'shimcha xotira ishlatmaydi",
          "Iterativ yechimda Base Case majburiy"
        ],
        "answer": 1,
        "exp": "Har bir rekursiv chaqiruv stekda freym ochgani uchun Space Complexity oshadi, iterativ sikl esa O(1) xotirada ishlaydi."
      },
      {
        "topic": "04-Mavzu",
        "q": "factorial(4) da '4 × 3 × 2 × factorial(1)' bosqichidan keyin qaysi amal bajariladi?",
        "options": [
          "Stack tozalanmasdan 4 qaytariladi",
          "factorial(0) chaqiriladi",
          "factorial(1) Base Case = 1 qiymatini qaytaradi va ko'paytirishlar yuqoriga qaytadi",
          "factorial(-1) chaqiriladi"
        ],
        "answer": 2,
        "exp": "04-mavzu 4-slayd: if (n <= 1) return 1; sharti factorial(1) da ishlaydi."
      },
      {
        "topic": "04-Mavzu",
        "q": "Agar rekursiv funksiya n o'rniga n + 1 bilan o'zini chaqirsa (Base Case n <= 1), n=3 uchun nima bo'ladi?",
        "options": [
          "Muammo kichiklashmaydi, cheksiz rekursiya va Stack Overflow yuz beradi",
          "1 qadamda to'xtaydi",
          "Darhol 1 qaytaradi",
          "3! = 6 qaytaradi"
        ],
        "answer": 0,
        "exp": "Rekursiya to'xtashi uchun argument Base Case tomon kichrayishi majburiy."
      },
      {
        "topic": "05-Mavzu",
        "q": "1D massivda elementni topish uchun nechta indeks va sikl ishlatiladi?",
        "options": [
          "1 ta indeks, 1 ta for sikli",
          "2 ta indeks, 2 ta for sikli",
          "3 ta indeks, 1 ta for sikli",
          "0 ta indeks, rekursiyasiz"
        ],
        "answer": 0,
        "exp": "05-mavzu 24 va 27-slayd: 1D da bitta indeks va bitta sikl."
      },
      {
        "topic": "05-Mavzu",
        "q": "Tartiblanmagan [50, 10, 90, 20, 70] massivda qaysi qidiruv usuli ishonchli ishlaydi?",
        "options": [
          "Ikkilik qidiruv (Binary Search)",
          "Chiziqli qidiruv (Linear Search)",
          "Binar qidiruv (Binary Search)",
          "Sakrab qidiruv (Jump Search)"
        ],
        "answer": 1,
        "exp": "Binary va Jump Search tartiblangan massiv talab qiladi, Linear Search esa tartiblanmaganda ham ishlaydi."
      },
      {
        "topic": "05-Mavzu",
        "q": "Jump Search da arr[min(tugash, n) - 1] < key sharti nima uchun min(tugash, n) bilan yoziladi?",
        "options": [
          "Indeksni 1 dan boshlash uchun",
          "Massivni teskari aylantirish uchun",
          "tugash massiv uzunligi n dan oshib ketganda IndexError chiqmasligi uchun",
          "Qadamni 2 ga ko'paytirish uchun"
        ],
        "answer": 2,
        "exp": "Oxirgi blok to'liq bo'lmasligi mumkin, shuning uchun min(tugash, n) chegaradan chiqib ketishni oldini oladi."
      },
      {
        "topic": "06-Mavzu",
        "q": "Bubble Sort ning one-line summary (bir qatorli xulosasi) qaysi?",
        "options": [
          "\"Keep swapping adjacent elements.\"",
          "\"Keep selecting the minimum element.\"",
          "\"Keep flipping to put the largest element in place.\"",
          "\"Keep inserting elements into the sorted portion.\""
        ],
        "answer": 0,
        "exp": "06-mavzu Comparison Table: Bubble Sort — Keep swapping adjacent elements."
      },
      {
        "topic": "06-Mavzu",
        "q": "Insertion Sort ning one-line summary (bir qatorli xulosasi) qaysi?",
        "options": [
          "\"Keep flipping to put the largest element in place.\"",
          "\"Keep selecting the minimum element.\"",
          "\"Keep inserting elements into the sorted portion.\"",
          "\"Keep swapping adjacent elements.\""
        ],
        "answer": 2,
        "exp": "06-mavzu Comparison Table: Insertion Sort — Keep inserting elements into the sorted portion."
      },
      {
        "topic": "06-Mavzu",
        "q": "Pancake Sort ning one-line summary (bir qatorli xulosasi) qaysi?",
        "options": [
          "\"Keep selecting the minimum element.\"",
          "\"Keep inserting elements into the sorted portion.\"",
          "\"Keep flipping to put the largest element in place.\"",
          "\"Keep swapping adjacent elements.\""
        ],
        "answer": 2,
        "exp": "06-mavzu Comparison Table: Pancake Sort — Keep flipping to put the largest element in place."
      },
      {
        "topic": "07-Mavzu",
        "q": "Quick Sort da bo'sh yoki 1 ta elementli massiv (len(massiv) <= 1) uchun nima qaytariladi?",
        "options": [
          "Massivning o'zi (saralangan hisoblanadi — bazaviy holat)",
          "Xatolik tashlanadi",
          "Bo'sh ro'yxat [] qaytariladi",
          "-1 qaytariladi"
        ],
        "answer": 0,
        "exp": "07-mavzu slayd: Bo'sh yoki bitta elementli qism saralangan hisoblanadi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Cocktail Sort da swapped o'zgaruvchisining vazifasi nima?",
        "options": [
          "Heap balandligini o'lchash",
          "Massiv uzunligini saqlash",
          "Pivot indeksini belgilash",
          "Hech qanday o'rin almashtirish bo'lmagan o'tishda siklni erta to'xtatish"
        ],
        "answer": 3,
        "exp": "Agar birorta ham swap bo'lmasa (swapped == False), massiv tartiblangan hisoblanib break qilinadi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Merge Sort da 'Bo'lib yechish usuli' va 'Birlashtirib saralash' terminlarining inglizcha nomlari qaysi?",
        "options": [
          "Quick Sort va Heap Sort",
          "Recursive Splitting va Extra Memory",
          "Divide and Conquer va Merge Sort",
          "Cocktail Sort va Shell Sort"
        ],
        "answer": 2,
        "exp": "07-mavzu terminlar jadvali: Divide and Conquer, Merge Sort."
      },
      {
        "topic": "08-Mavzu",
        "q": "08-mavzu xulosasiga ko'ra 'barcha subsetlar' va 'barcha permutationlar' qaysi sinflarga tegishli?",
        "options": [
          "O(n²) — barcha subsetlar; O(2^n) — barcha permutationlar",
          "O(n!) — barcha subsetlar; O(2^n) — barcha permutationlar",
          "O(2^n) — barcha subsetlar; O(n!) — barcha permutationlar",
          "O(n log n) — barcha subsetlar; O(n²) — barcha permutationlar"
        ],
        "answer": 2,
        "exp": "08-mavzu oxirgi slayd: O(2^n) — barcha subsetlar; O(n!) — barcha permutationlar."
      },
      {
        "topic": "08-Mavzu",
        "q": "Quyidagi Python kodining Time Complexity si nima?\n<pre>for i in range(n):\n    print(i)\nfor j in range(n):\n    print(j)</pre>",
        "options": [
          "O(n) (chunki ketma-ket 2n bo'lib, konstanta 2 tashlab yuboriladi)",
          "O(log n)",
          "O(n²) (chunki 2 ta sikl bor)",
          "O(1)"
        ],
        "answer": 0,
        "exp": "Ketma-ket (ichma-ich emas!) sikllar qo'shiladi: O(n + n) = O(2n) = O(n)."
      },
      {
        "topic": "08-Mavzu",
        "q": "Quyidagi C++ kodining Time Complexity si nima?\n<pre>for (int i = 0; i &lt; n; i++)\n    for (int j = 1; j &lt; n; j *= 2)\n        count++;</pre>",
        "options": [
          "O(log n)",
          "O(n²)",
          "O(n log n)",
          "O(n)"
        ],
        "answer": 2,
        "exp": "Tashqi sikl n marta, ichki sikl (j *= 2) log2(n) marta ishlaydi -> n * log n = O(n log n)."
      },
      {
        "topic": "03-Mavzu",
        "q": "STL da algoritmlar (algorithms) nima ustida operatsiyalar bajaradi?",
        "options": [
          "Faqat oddiy int konstantalari ustida",
          "Iteratorlar orqali konteyner ichidagilar ustida",
          "Faqat fayl nomlari ustida",
          "Faqat C++ preprotsessor direktivalari ustida"
        ],
        "answer": 1,
        "exp": "03-mavzu 9-slayd: Algoritmlar konteyner ichidagilar ustidan operatsiyalar bajaradi."
      }
    ]
  },
  {
    "variant": 14,
    "title": "14-Variant: Chegaraviy Holatlar, GPU/CPU & Adjacency Matrix",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "O'zgaruvchilarni e'lon qilish -> o'qish -> o'zgartirish -> xotirani bo'shatish zanjiri qaysi 4 amalga mos?",
        "options": [
          "Divide → Conquer → Merge → Sort",
          "Input → Process → Loop → Break",
          "Push → Top → Pop → Clear",
          "Create → Read → Update → Delete (CRUD)"
        ],
        "answer": 3,
        "exp": "01-mavzu 15-slaydda CRUD ketma-ketligi: C(Create), R(Read), U(Update), D(Delete)."
      },
      {
        "topic": "01-Mavzu",
        "q": "Dastur bajarilganda tarkibi va hajmi to'liq o'zgarishi mumkin bo'lgan tuzilmalar qanday ataladi?",
        "options": [
          "Dinamik tuzilmalar",
          "Statik tuzilmalar",
          "Yarimstatik tuzilmalar",
          "Konstantali tuzilmalar"
        ],
        "answer": 0,
        "exp": "01-mavzu 13-slayd: dinamik tuzilmalar — dastur bajarilganda to'liq o'zgarish yuz beradi."
      },
      {
        "topic": "01-Mavzu",
        "q": "Qaysi so'z ma'lum bir obyekt va jarayonning mazmunini raqamli, matnli, tovushli, mantiqiy shaklda aks ettiradi?",
        "options": [
          "Algoritm",
          "Interfeys",
          "Axborot",
          "Ma'lumot"
        ],
        "answer": 3,
        "exp": "01-mavzu 3-slayd: Ma'lumot — obyekt va jarayonning raqamli, matnli, tovushli, sonli, mantiqiy qiymatini aks ettiradi."
      },
      {
        "topic": "02-Mavzu",
        "q": "int a[2][3]; massivi (agar 1 ta int = 4 bayt bo'lsa) xotirada qancha joy egallaydi?",
        "options": [
          "12 bayt",
          "24 bayt",
          "20 bayt",
          "6 bayt"
        ],
        "answer": 1,
        "exp": "2 × 3 = 6 ta int element × 4 bayt = 24 bayt."
      },
      {
        "topic": "02-Mavzu",
        "q": "Butun sonlar tasvirida ishorali va ishorasiz sonlarning asosiy farqi nimada?",
        "options": [
          "Ishorasiz sonlar xotirada joy egallamaydi",
          "Ishorali sonlar faqat kasr qismga ega bo'ladi",
          "Ishorasiz sonlar faqat manfiy qiymat oladi",
          "Ishorali sonlarda eng yuqori 1 ta razryad ishoraga ajratiladi, ishorasizlarda barcha N bit songa sarflanadi"
        ],
        "answer": 3,
        "exp": "02-mavzu 6-slayd sxemasi: ishorasizda [SON], ishoralida [ishora | SON]."
      },
      {
        "topic": "02-Mavzu",
        "q": "struct TALABA { int ID; char fio[30]; }; da nechta maydon (field) mavjud?",
        "options": [
          "31 ta maydon",
          "2 ta maydon (ID va fio)",
          "30 ta maydon",
          "1 ta maydon"
        ],
        "answer": 1,
        "exp": "Yozuvda 2 ta maydon bor: int ID va char fio[30]."
      },
      {
        "topic": "03-Mavzu",
        "q": "Bitta yo'nalishdagi iteratorlar qaysi nom bilan ataladi?",
        "options": [
          "output_iterator",
          "input_iterator",
          "bidirectional_iterator",
          "forward_iterator"
        ],
        "answer": 3,
        "exp": "03-mavzu 9-slayd: 3. Bitta yo'nalishdagi iteratorlar (forward_iterator)."
      },
      {
        "topic": "03-Mavzu",
        "q": "int a[5] = {1, 2, 3, 4, 5}; va int *a = new int[5]; rasmidagi (1-slayd) asosiy farq qaysi?",
        "options": [
          "Static Array Heap da, Dynamic Array Code segmentida joylashadi",
          "Static Array da indeks 1 dan, Dynamic Array da 0 dan boshlanadi",
          "Dynamic Array ni o'chirish mumkin emas",
          "Static Array to'g'ridan-to'g'ri qiymatlar ketma-ketligi; Dynamic Array da *a ko'rsatkichi dinamik blokga ishora qiladi"
        ],
        "answer": 3,
        "exp": "03-mavzu 1-slayd rasmi: a[5] da 1,2,3,4,5; *a da ko'rsatkich 0..4 katakchalarga strelka bilan ulangan."
      },
      {
        "topic": "03-Mavzu",
        "q": "vector<string> names; da oxiriga yangi element qo'shish uchun qaysi metod ishlatilgan?",
        "options": [
          "insert_top()",
          "append()",
          "push_back()",
          "add_last()"
        ],
        "answer": 2,
        "exp": "03-mavzu 11-slayd: names.push_back(\"Peter\");"
      },
      {
        "topic": "04-Mavzu",
        "q": "Qaysi ma'lumotlar tuzilmasi rekursiyaning texnik asosi sifatida ishlaydi?",
        "options": [
          "Birlashma (Union)",
          "Navbat (Queue)",
          "Xesh jadval (Hash Table)",
          "Stek (Call Stack)"
        ],
        "answer": 3,
        "exp": "Funksiyalar chaqirilishini kompyuter Call Stack (Stek) orqali boshqaradi."
      },
      {
        "topic": "04-Mavzu",
        "q": "fib(4) daraxtida fib(2) funksiyasi necha marta chaqiriladi?",
        "options": [
          "4 marta",
          "1 marta",
          "2 marta",
          "3 marta"
        ],
        "answer": 2,
        "exp": "04-mavzu 10-slayd: f(4) -> f(3) & f(2); f(3) -> f(2) & f(1). Demak f(2) jami 2 marta chaqiriladi."
      },
      {
        "topic": "04-Mavzu",
        "q": "fib(4) daraxtida fib(1) funksiyasi necha marta chaqiriladi?",
        "options": [
          "1 marta",
          "4 marta",
          "2 marta",
          "3 marta"
        ],
        "answer": 3,
        "exp": "f(3) ichidan 1 marta + ikkita f(2) ichidan 1 tadan = jami 3 marta."
      },
      {
        "topic": "05-Mavzu",
        "q": "1, 2, 5, 9, 17, 26, 53, 78, 107 (n=9) massivida key=5 ni Jump Search bilan izlaganda nechta blok tekshiriladi?",
        "options": [
          "9 ta blok sakraladi",
          "Topilmaydi (-1)",
          "3 ta blok sakraladi",
          "1-blokning o'zidayoq (arr[2]=5 >= 5) topiladi"
        ],
        "answer": 3,
        "exp": "05-mavzu 14 va 17-slayd: boshlanish=0, tugash=3. arr[2]=5 < 5 yolg'on, shu 1-blok [1, 2, 5] ichida topiladi!"
      },
      {
        "topic": "05-Mavzu",
        "q": "Hash Search hayotiy misolda nimaga o'xshatilgan?",
        "options": [
          "Lug'atni o'rtasidan ochib varaqlashga",
          "Kitoblarni qavatma-qavat taxlashga",
          "Kutubxonada har bir kitobga maxsus raqam berilib, barcha javonni emas faqat shu raqamli javonni ochib ko'rishga",
          "Barcha kitoblarni 1-javondan oxirigacha birma-bir ko'rishga"
        ],
        "answer": 2,
        "exp": "05-mavzu 18-19-slayd: har bir kitobga maxsus raqam berib, aynan shu raqamli joyini ochib ko'rish."
      },
      {
        "topic": "05-Mavzu",
        "q": "C++ da int search(int arr[], int N, int key) funksiyasi [10, 30, 20, 40, 50] da key=25 uchun nima chop etadi?",
        "options": [
          "-1",
          "25",
          "2",
          "0"
        ],
        "answer": 0,
        "exp": "05-mavzu 10-slayd: 25 massivda yo'q, return -1."
      },
      {
        "topic": "06-Mavzu",
        "q": "Radix Sort [329, 457, 657, 839, 436, 720, 355] ro'yxatini 1-bosqichda (birlik xonasi) saralaganda 1-o'ringa qaysi son keladi?",
        "options": [
          "720 (chunki birlik xonasi 0 — eng kichik)",
          "355",
          "436",
          "329 (eng kichik son)"
        ],
        "answer": 0,
        "exp": "06-mavzu Radix Sort rasmi: birlik xonasi 0, 5, 6, 7, 7, 9, 9 -> 720 birinchi bo'ladi."
      },
      {
        "topic": "06-Mavzu",
        "q": "Counting Sort da outputArray da har bir element o'z joyiga qo'yilayotganda qaysi massiv indeksni ko'rsatadi?",
        "options": [
          "swapArray",
          "inputArray",
          "randomArray",
          "countArray"
        ],
        "answer": 3,
        "exp": "06-mavzu Counting Sort rasmi: inputArray -> countArray -> outputArray."
      },
      {
        "topic": "06-Mavzu",
        "q": "Bubble Sort tushunish osonligi (Ease of Understanding) bo'yicha Comparison Table da nechta yulduz olgan?",
        "options": [
          "1 ta yulduz",
          "2 ta yulduz",
          "5 ta yulduz (eng oson)",
          "3 ta yulduz"
        ],
        "answer": 2,
        "exp": "06-mavzu Comparison Table: Bubble Sort — 5/5 yulduz."
      },
      {
        "topic": "07-Mavzu",
        "q": "Agar Quick Sort da massiv allaqachon teskari tartiblangan bo'lib, doim oxirgi element pivot olinsa, vaqt murakkabligi qancha bo'ladi?",
        "options": [
          "O(log n)",
          "O(n²) (Worst Case)",
          "O(n log n)",
          "O(n)"
        ],
        "answer": 1,
        "exp": "Teskari tartiblangan massivda oxirgi element doim eng kichik bo'ladi, qismlar (0 va n-1) notekis bo'linib O(n²) beradi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Shell Sort samaradorligi birinchi navbatda nimaga bog'liq?",
        "options": [
          "Xesh-funksiya turiga",
          "gap (oraliq) qiymatini to'g'ri tanlash ketma-ketligiga",
          "Massivdagi manfiy sonlar soniga",
          "Pivot tanlashga"
        ],
        "answer": 1,
        "exp": "07-mavzu slayd: Shell Sort samaradorligi gap qiymatini to'g'ri tanlashga bog'liq."
      },
      {
        "topic": "07-Mavzu",
        "q": "arr = [40, 51, 8, 38, 90, 14] da Shell Sort ning 1-bosqichidan (gap = 3) keyin massiv qanday ko'rinish oladi?",
        "options": [
          "[14, 38, 8, 40, 51, 90]",
          "[8, 14, 38, 40, 51, 90]",
          "[40, 51, 8, 38, 90, 14]",
          "[38, 51, 8, 40, 90, 14]"
        ],
        "answer": 3,
        "exp": "40 va 38 almashadi -> [38, 51, 8, 40, 90, 14]; 51<90 va 8<14 o'z o'rnida qoladi."
      },
      {
        "topic": "08-Mavzu",
        "q": "Agar n = 5 bo'lsa, O(2^n) va O(n!) sinflarining qiymatlari qanday taqqoslanadi?",
        "options": [
          "2^5 = 32 va 5! = 120 (O(n!) tezroq kattalashadi)",
          "2^5 = 120 va 5! = 32",
          "2^5 = 64 va 5! = 24",
          "2^5 = 25 va 5! = 25"
        ],
        "answer": 0,
        "exp": "n=5 uchun 2^5 = 32, 5! = 120."
      },
      {
        "topic": "08-Mavzu",
        "q": "n = 1024 bo'lganda Binary Search (O(log n)) ko'pi bilan nechta qadam bajaradi?",
        "options": [
          "32 ta qadam",
          "11 ta qadam",
          "512 ta qadam",
          "10 ta qadam (2^10 = 1024)"
        ],
        "answer": 3,
        "exp": "log2(1024) = 10."
      },
      {
        "topic": "08-Mavzu",
        "q": "n = 64 bo'lganda O(log n) va O(√n) sinflari qanday qiymat beradi?",
        "options": [
          "Ikkalasi ham 8",
          "log2(64) = 16 va √64 = 32",
          "log2(64) = 6 va √64 = 8",
          "log2(64) = 8 va √64 = 6"
        ],
        "answer": 2,
        "exp": "2^6 = 64 => log2(64)=6; √64 = 8."
      },
      {
        "topic": "04-Mavzu",
        "q": "fib(4) daraxtida fib(0) funksiyasi necha marta chaqiriladi?",
        "options": [
          "3 marta",
          "4 marta",
          "2 marta",
          "1 marta"
        ],
        "answer": 2,
        "exp": "Ikkita f(2) ning har biridan bittadan f(0) chiqadi = jami 2 marta."
      }
    ]
  },
  {
    "variant": 15,
    "title": "15-Variant: Yakuniy Kompleks Imtihon (Barcha 8 Mavzu)",
    "questions": [
      {
        "topic": "01-Mavzu",
        "q": "ATD (Abstrakt ma'lumotlar turi) matematik model doirasida nimalarni o'z ichiga oladi?",
        "options": [
          "Faqat fayl tizimi papkalarini",
          "Faqat kompyuterning operativ xotira chipi chizmasini",
          "Matematik model va ushbu model doirasida aniqlangan turli operatorlarni",
          "Faqat foydalanuvchi kiritadigan matnlarni"
        ],
        "answer": 2,
        "exp": "01-mavzu 5-slayd: ATD — matematik model va ushbu model doirasida aniqlangan turli operatorlar."
      },
      {
        "topic": "01-Mavzu",
        "q": "So'z-formulali, Grafik-chizma va Dasturiy ko'rinishlar nima uchun ishlatiladi?",
        "options": [
          "Fayllarni siqish uchun",
          "Sonlarni faqat ikkilik kodga o'tkazish uchun",
          "Algoritmlarni ifodalash uchun",
          "Xotira segmentlarini bo'shatish uchun"
        ],
        "answer": 2,
        "exp": "01-mavzu 8-slayd: Algoritmlarni ifodalashning 3 ta taniqli usuli."
      },
      {
        "topic": "01-Mavzu",
        "q": "Ma'lumotlarni qo'shish, qidirish, o'zgartirish va o'chirish uchun tuzilma nimani taqdim etadi?",
        "options": [
          "Faqat bitta global o'zgaruvchini",
          "Faqat konstanta qiymatlarni",
          "Faqat grafik displey drayverini",
          "Uning interfeysini tashkil etuvchi funksiyalar to'plamini"
        ],
        "answer": 3,
        "exp": "01-mavzu 3-slayd: ma'lumotlar tuzilmasi uning interfeysini tashkil etuvchi funksiyalar to'plamini taqdim etadi."
      },
      {
        "topic": "02-Mavzu",
        "q": "Haqiqiy son ustida qaysi amallarni bajarish mumkinligi 02-mavzuda sanab o'tilgan?",
        "options": [
          "Faqat indekslash va o'chirish",
          "Qo'shish, ayirish, bo'lish, ko'paytirish, trigonometrik, daraja, ildiz, logarifm, min/max",
          "Faqat push va pop",
          "Faqat kon'yunksiya va diz'yunksiya"
        ],
        "answer": 1,
        "exp": "02-mavzu 7-slayd: haqiqiy sonlar ustida arifmetik, trigonometrik, daraja, kvadrat ildiz, logarifmlash, min/max amallari bajariladi."
      },
      {
        "topic": "02-Mavzu",
        "q": "Mantiqiy turdagi o'zgaruvchilarni C++ da e'lon qilish sintaksisi qaysi?",
        "options": [
          "logic <identifier> ;",
          "bool <identifier> ;",
          "boolean <identifier> ;",
          "bit <identifier> ;"
        ],
        "answer": 1,
        "exp": "02-mavzu 8-slayd: bool <identifier> ;"
      },
      {
        "topic": "02-Mavzu",
        "q": "Ko'rsatkichli tur (Pointer) ixtiyoriy nimaga yo'naltirilgan bo'lishi mumkin?",
        "options": [
          "Faqat matnli fayl nomiga",
          "Faqat CPU registrlarining chastotasiga",
          "Boshqa biror ma'lumot yoki ma'lumotlar guruhining xotira manziliga",
          "Faqat bool o'zgaruvchisining 0 qiymatiga"
        ],
        "answer": 2,
        "exp": "02-mavzu 8-slayd: Pointer turi ma'lumoti ixtiyoriy boshqa biror ma'lumot yoki ma'lumotlar guruhiga yo'naltirilgan bo'ladi."
      },
      {
        "topic": "03-Mavzu",
        "q": "Kiritish va Chiqarish iteratorlari STL da qanday nomlanadi?",
        "options": [
          "read_iterator va write_iterator",
          "input_iterator va output_iterator",
          "scan_iterator va print_iterator",
          "in_iterator va out_iterator"
        ],
        "answer": 1,
        "exp": "03-mavzu 9-slayd: 1. input_iterator, 2. output_iterator."
      },
      {
        "topic": "03-Mavzu",
        "q": "int ARRAY[10]; e'lon qilish qaysi usulga kiradi?",
        "options": [
          "Dinamik e'lon qilish",
          "Initsializatsiya qilish orqali e'lon qilish",
          "STL konteyner e'lon qilish",
          "Initsializatsiya qilmasdan e'lon qilish"
        ],
        "answer": 3,
        "exp": "03-mavzu 4-slayd: kvadrat qavs ichida soni ko'rsatilib qiymat berilmasa — initsializatsiya qilmasdan e'lon qilish."
      },
      {
        "topic": "03-Mavzu",
        "q": "C++ da dinamik massivni 'new' bilan yaratgandan keyin 'delete []' qilinmasa nima yuz beradi?",
        "options": [
          "Xotira sizib chiqishi (memory leak — Heap band bo'lib qoladi)",
          "Massiv avtomatik Stack ga ko'chadi",
          "Barcha elementlar 0 ga aylanadi",
          "Kompilyatsiya darhol to'xtaydi"
        ],
        "answer": 0,
        "exp": "Heap da ajratilgan xotira delete [] qilinmaguncha bo'shatilmaydi (memory leak)."
      },
      {
        "topic": "04-Mavzu",
        "q": "Quyidagi Python kodida mystery(3) nimani qaytaradi?\n<pre>def mystery(n):\n    if n == 1: return 2\n    return 2 * mystery(n - 1)</pre>",
        "options": [
          "16",
          "6",
          "8",
          "4"
        ],
        "answer": 2,
        "exp": "mystery(1)=2 → mystery(2)=4 → mystery(3)=8."
      },
      {
        "topic": "04-Mavzu",
        "q": "Agar Call Stack da main(), f(4), f(3), f(2) joylashgan bo'lsa, Stack Pointer qaysi freymni ko'rsatadi?",
        "options": [
          "Eng pastdagi main() freymini",
          "Heap boshini",
          "Eng yuqoridagi f(2) freymini",
          "f(4) freymini"
        ],
        "answer": 2,
        "exp": "04-mavzu 8-slayd chizmasi: Stack Pointer eng yuqoridagi (TOP) f(2) ga ishora qiladi."
      },
      {
        "topic": "04-Mavzu",
        "q": "Quyidagi rekursiv kodda funksiya qayerga kelganda to'xtaydi?\n<pre>int f(int n) { if (n &lt;= 0) return 0; return n + f(n - 2); }</pre>",
        "options": [
          "n == 10 bo'lganda to'xtaydi",
          "n == 1 bo'lganda to'xtaydi",
          "Hech qachon to'xtamaydi",
          "n <= 0 bo'lganda 0 qaytarib to'xtaydi"
        ],
        "answer": 3,
        "exp": "Base Case sharti if (n <= 0) return 0; ga teng."
      },
      {
        "topic": "05-Mavzu",
        "q": "Iterativ qidiruv (Iterative Search) odatda qaysi operatorlar yordamida amalga oshiriladi?",
        "options": [
          "Faqat funksiya o'zini chaqirishi yordamida",
          "for yoki while sikli yordamida",
          "Faqat new/delete yordamida",
          "Faqat switch-case yordamida"
        ],
        "answer": 1,
        "exp": "05-mavzu 22-slayd: Iterativ qidiruv — elementlarni for yoki while sikli yordamida ketma-ket tekshiradi."
      },
      {
        "topic": "05-Mavzu",
        "q": "Rekursiv qidiruv def search(arr, n, x) da if n == 0: return -1 nimani bildiradi?",
        "options": [
          "Element 0-indeksda topildi",
          "Qidirish tugadi (bazaviy holat, element topilmadi)",
          "Massivni o'chirish kerak",
          "Qidirishni boshidan boshlash"
        ],
        "answer": 1,
        "exp": "05-mavzu 21-slayd: if n == 0: # Qidirish tugadi -> return -1."
      },
      {
        "topic": "05-Mavzu",
        "q": "10 000 ta tartiblangan element ichidan Binary Search ko'pi bilan taxminan nechta taqqoslash qiladi?",
        "options": [
          "100 ta",
          "14 ta (2^14 = 16384)",
          "5 000 ta",
          "10 000 ta"
        ],
        "answer": 1,
        "exp": "log2(10000) ≈ 13.28, demak ko'pi bilan 14 ta taqqoslash."
      },
      {
        "topic": "06-Mavzu",
        "q": "Amaliy foydalanish (Practical Usage) darajasi bo'yicha Bubble, Selection va Pancake Sort qanday baholangan?",
        "options": [
          "Pancake Sort — High",
          "Bubble Sort — Very High",
          "Barchasi High (Juda yuqori)",
          "Bubble va Selection — Low, Pancake — Very Low (Insertion esa Medium — small data)"
        ],
        "answer": 3,
        "exp": "06-mavzu Comparison Table: Bubble(Low), Selection(Low), Insertion(Medium), Pancake(Very Low)."
      },
      {
        "topic": "06-Mavzu",
        "q": "[5, 2, 4] uchta sonli ro'yxatda Bubble Sort ning 1-juftlik (5 va 2) taqqoslashidan keyingi holat qanday?",
        "options": [
          "[4, 2, 5]",
          "[5, 2, 4]",
          "[2, 5, 4]",
          "[2, 4, 5]"
        ],
        "answer": 2,
        "exp": "5 > 2 bo'lgani uchun 5 va 2 almashadi -> [2, 5, 4]."
      },
      {
        "topic": "06-Mavzu",
        "q": "Doimiy o'zgarib turadigan ma'lumotlar oqimiga ega tizimlarda qaysi saralash yondashuvi qo'llanadi?",
        "options": [
          "Heap siz Selection Sort",
          "Dinamik saralash yondashuvlari",
          "Statik Pancake Sort",
          "Faqat offline Bubble Sort"
        ],
        "answer": 1,
        "exp": "06-mavzu slayd: Ma'lumotlar doimiy o'zgarib turgan tizimlarda dinamik saralash yondashuvlari qo'llanadi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Heap Sort da 1-qadamdan 5-qadamgacha bo'lgan umumiy sikl qachon tugaydi?",
        "options": [
          "Barcha elementlar saralanib, heap hajmi 1 ga teng bo'lganda",
          "Faqat eng katta 1 ta element topilganda",
          "gap = 0 bo'lganda",
          "Massiv ikkiga bo'linganda"
        ],
        "answer": 0,
        "exp": "07-mavzu slayd: Jarayon barcha elementlar saralanguncha davom etadi."
      },
      {
        "topic": "07-Mavzu",
        "q": "Merge Sort [70, 30, 50, 10] massivini birlashtirganda 2-bosqichda qaysi ikki tartiblangan qism hosil bo'ladi?",
        "options": [
          "[10, 30] va [50, 70]",
          "[30, 50] va [10, 70]",
          "[70, 30] va [50, 10]",
          "[30, 70] va [10, 50]"
        ],
        "answer": 3,
        "exp": "07-mavzu slayd rasmi: [70],[30] -> [30, 70] va [50],[10] -> [10, 50]."
      },
      {
        "topic": "07-Mavzu",
        "q": "Quick Sort da tayanch element massivning boshidan olinsa (tayanch = massiv[0]), qaysi qism siklda tekshiriladi?",
        "options": [
          "massiv[:0]",
          "massiv[:-1]",
          "massiv[1:] (qolgan elementlar)",
          "massiv[2:]"
        ],
        "answer": 2,
        "exp": "07-mavzu oxirgi slayd kodi: tayanch = massiv[0] bo'lsa, for son in massiv[1:]: tekshiriladi."
      },
      {
        "topic": "08-Mavzu",
        "q": "Big-O notatsiyasida f(n) = 10n³ + 500n² + 1000n + 99 ning asimptotik bahosi qanday?",
        "options": [
          "O(n³)",
          "O(n⁶)",
          "O(500n²)",
          "O(10n³)"
        ],
        "answer": 0,
        "exp": "Eng katta o'suvchi had n³ olinadi va koeffitsiyent 10 tashlab yuboriladi -> O(n³)."
      },
      {
        "topic": "08-Mavzu",
        "q": "Agar bir xil muammoni yechuvchi A algoritmi O(n log n), B algoritmi O(n²) bo'lsa, n = 100 000 da qaysi biri keskin tezroq?",
        "options": [
          "Ikkalasining tezligi bir xil",
          "A algoritmi — O(n log n)",
          "n katta bo'lganda O(n²) tezlashadi",
          "B algoritmi — O(n²)"
        ],
        "answer": 1,
        "exp": "n=100 000 da n log n ≈ 1.66 million, n² = 10 milliard — O(n log n) minglab marta tezroq."
      },
      {
        "topic": "08-Mavzu",
        "q": "Asimptotik tahlilda O(1) doim nima uchun eng yaxshi hisoblanadi?",
        "options": [
          "Ma'lumot hajmi milliardga yetsa ham vaqt sarfi o'zgarmas (konstanta) qolgani uchun",
          "Chunki kompyuter xotirasini tozalaydi",
          "Chunki faqat Python da mavjud",
          "Chunki faqat 1 ta elementli massivda ishlaydi"
        ],
        "answer": 0,
        "exp": "O(1) — Constant Time. Always the best! — kirish hajmiga bog'liq emas."
      },
      {
        "topic": "05-Mavzu",
        "q": "10 000 ta tartiblangan element ichidan Jump Search taxminan nechta qadamda topadi?",
        "options": [
          "10 000 qadamda",
          "~100 qadam atrofida (√10000 = 100)",
          "1 qadamda",
          "14 qadamda"
        ],
        "answer": 1,
        "exp": "Jump Search O(√n) bo'lgani uchun √10000 = 100 qadam atrofida."
      }
    ]
  }
];

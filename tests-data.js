// ============================================================================
// CYBER UNIVERSITY — MA'LUMOTLAR TUZILMASI VA ALGORITMLAR
// 15 ta Variantli Test Bazasi (15 x 10 = 150 ta savol) — Barcha 8 mavzu bo'yicha
// ============================================================================

window.TESTS_DATA = [
  // ========================== VARIANT 1 ==========================
  {
    variant: 1,
    title: "1-Variant: Umumiy Fundamental & Algoritmik Tahlil",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Ma'lumot tushunchasining slaydlarda keltirilgan asosiy formulasi qaysi?",
        options: ["Ma'lumot = Axborot + Shakl", "Ma'lumot = Dastur + Xotira", "Ma'lumot = Kod + Kompilyator", "Ma'lumot = Stek + Navbat"],
        answer: 0,
        exp: "01-mavzuga ko'ra, Ma'lumot = Axborot + Shakl; ya'ni axborot muayyan shakl (raqamli, matnli, mantiqiy va b.) orqali ifodalanadi."
      },
      {
        topic: "01-Mavzu",
        q: "S = { D, R } modelida D va R nimalarni anglatadi?",
        options: ["D — dinamika, R — rekursiya", "D — ma'lumotlar (elementlar), R — munosabatlar (Tartib, Amallar)", "D — dastur, R — ro'yxat", "D — daraxt, R — razryad"],
        answer: 1,
        exp: "Ma'lumotlar tuzilmasi S = {D, R} bo'lib, bu yerda D — elementlar to'plami, R = (Tartib, Amallar) — ular orasidagi munosabatlar."
      },
      {
        topic: "02-Mavzu",
        q: "Kompyuter xotirasida dinamik ajratiladigan erkin xotira hududi qaysi?",
        options: ["Program Code", "Global (Static)", "Stack", "Heap"],
        answer: 3,
        exp: "Heap — dastur ishlashi davomida dinamik (new / delete orqali) ajratiladigan erkin xotira sohasi."
      },
      {
        topic: "02-Mavzu",
        q: "C++ tilida double ma'lumot turi xotirada necha bayt joy egallaydi?",
        options: ["1 bayt", "2 bayt", "4 bayt", "8 bayt"],
        answer: 3,
        exp: "02-mavzu jadvaliga ko'ra: char=1, bool=1, float=4, double=8 bayt joy egallaydi."
      },
      {
        topic: "03-Mavzu",
        q: "C++ da dinamik massiv yaratish va uni xotiradan to'g'ri o'chirish qaysi qatorda berilgan?",
        options: ["int a[5]; delete a;", "int *a = new int[5]; delete [] a;", "int a = new int(5); free(a);", "vector a[5]; clear(a);"],
        answer: 1,
        exp: "Dinamik massiv 'new' operatori bilan yaratiladi va xotira sizib chiqmasligi uchun 'delete [] <nom>' bilan o'chiriladi."
      },
      {
        topic: "04-Mavzu",
        q: "Rekursiv funksiyani cheksiz chaqirilishdan saqlaydigan majburiy qism qanday ataladi?",
        options: ["Recursive Step", "Base Case (Bazaviy holat)", "Heap Pointer", "Global Scope"],
        answer: 1,
        exp: "Bazaviy holat (Base Case) rekursiyani to'xtatish shartini belgilaydi; u bo'lmasa Stack Overflow yuz beradi."
      },
      {
        topic: "05-Mavzu",
        q: "Binar qidiruv (Binary Search) ishlashi uchun asosiy shart nima?",
        options: ["Massiv elementlari faqat juft bo'lishi", "Massiv tartiblangan bo'lishi", "Massiv o'lchami 2 ning darajasi bo'lishi", "Massiv 2D bo'lishi"],
        answer: 1,
        exp: "Binary Search faqat tartiblangan ro'yxatlarda ishlaydi; tartiblanmagan massivda o'rta element bilan taqqoslash noto'g'ri natija beradi."
      },
      {
        topic: "06-Mavzu",
        q: "Quyidagi saralash algoritmlaridan qaysi biri taqqoslashga asoslanmagan (Non-comparison)?",
        options: ["Bubble Sort", "Quick Sort", "Counting Sort", "Merge Sort"],
        answer: 2,
        exp: "Counting Sort va Radix Sort elementlarni arr[i] > arr[j] deb solishtirmaydi, balki sanash yoki xonalar bo'yicha saralaydi."
      },
      {
        topic: "07-Mavzu",
        q: "Merge Sort algoritmining vaqt va qo'shimcha xotira murakkabligi qanday?",
        options: ["O(n²) va O(1)", "O(n log n) va O(n)", "O(log n) va O(1)", "O(n) va O(n log n)"],
        answer: 1,
        exp: "Merge Sort massivni log n marta bo'lib, har qadamda n ta elementni birlashtiradi — Time O(n log n), Space O(n)."
      },
      {
        topic: "08-Mavzu",
        q: "Grafning Adjacency Matrix (Qo'shnilik matritsasi) da ikki tugun orasida qirra borligini tekshirish Time Complexity jihatdan nechaga teng?",
        options: ["O(V²)", "O(V)", "O(log V)", "O(1)"],
        answer: 3,
        exp: "matrix[a][b] == 1 tekshiruvi bitta katakka murojaat bo'lgani uchun O(1) vaqt oladi (xotira esa O(V²))."
      }
    ]
  },

  // ========================== VARIANT 2 ==========================
  {
    variant: 2,
    title: "2-Variant: Xotira, Klassifikatsiya & Qidiruv",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Niklaus Wirth / dasturlash nazariyasidagi asosiy formula qaysi?",
        options: ["DASTUR = KOD + KOMPYUTER", "DASTUR = ALGORITM + MA'LUMOTLAR", "DASTUR = STACK + HEAP", "DASTUR = LOOP + IF"],
        answer: 1,
        exp: "01-mavzu 6-slaydda keltirilgan formula: DASTUR = ALGORITM + MA'LUMOTLAR."
      },
      {
        topic: "01-Mavzu",
        q: "Elementlar orasidagi munosabatlar to'plami bo'sh (R = ∅) bo'lgan tuzilma nima deyiladi?",
        options: ["Matritsa", "Ketma-ketlik", "To'plam", "Daraxt"],
        answer: 2,
        exp: "To'plam — munosabatlar to'plami bo'sh (R = 0 / ∅) bo'lgan elementlar majmuasi."
      },
      {
        topic: "02-Mavzu",
        q: "N ta razryadli ishorali butun son (qo'shimcha kodda) qaysi oraliqda qiymat qabul qiladi?",
        options: ["0 .. 2^N - 1", "-2^(N-1) .. 2^(N-1) - 1", "-2^N .. 2^N", "1 .. 2^N"],
        answer: 1,
        exp: "Ishorali sonlar uchun 1 bit ishoraga ajratiladi va oraliq [-2^(N-1); 2^(N-1) - 1] bo'ladi."
      },
      {
        topic: "02-Mavzu",
        q: "Birlashma (union) va struktura (struct) o'rtasidagi asosiy farq nimada?",
        options: ["union faqat matn saqlaydi", "union da barcha maydonlar xotiraning bitta hududini qoplaydi", "struct xotira egallamaydi", "union faqat Python da bor"],
        answer: 1,
        exp: "union da barcha elementlar bir xil xotira hududida joylashadi va bir vaqtda faqat bitta elementga murojaat qilinadi."
      },
      {
        topic: "03-Mavzu",
        q: "STL (Standard Template Library) yadrosi qaysi 3 ta elementdan tashkil topgan?",
        options: ["Klasslar, Obyektlar, Funksiyalar", "Konteynerlar, Algoritmlar, Iteratorlar", "Massivlar, Steklar, Graflar", "Heap, Stack, Code"],
        answer: 1,
        exp: "STL yadrosi 3 qismdan iborat: Konteynerlar, Algoritmlar va Iteratorlar."
      },
      {
        topic: "04-Mavzu",
        q: "Call Stack qaysi tamoyil asosida ishlaydi?",
        options: ["FIFO (First In, First Out)", "LIFO (Last In, First Out)", "Random Access", "Hash Mapping"],
        answer: 1,
        exp: "Call Stack LIFO (oxirgi kirgan funksiya birinchi chiqadi) qoidasiga ko'ra ishlaydi."
      },
      {
        topic: "05-Mavzu",
        q: "Sakrab qidiruv (Jump Search) da n = 9 ta elementli tartiblangan ro'yxat uchun optimal qadam (sakrash hajmi) nechaga teng?",
        options: ["2", "3", "4", "9"],
        answer: 1,
        exp: "qadam = int(sqrt(n)) = int(sqrt(9)) = 3."
      },
      {
        topic: "06-Mavzu",
        q: "Barqaror (Stable) saralash algoritmi nimani anglatadi?",
        options: ["Xotira sarfi O(1) ekanini", "Bir xil qiymatli elementlarning dastlabki nisbiy tartibi saqlanishini", "Faqat manfiy sonlarni saralashini", "Eng tez ishlashini"],
        answer: 1,
        exp: "Stability — bir xil kalit/qiymatga ega elementlar saralangandan keyin ham oldingi tartibini saqlab qolishi."
      },
      {
        topic: "07-Mavzu",
        q: "Sheyker (Cocktail) saralash algoritmi qaysi algoritmning takomillashtirilgan shakli?",
        options: ["Selection Sort", "Bubble Sort", "Merge Sort", "Heap Sort"],
        answer: 1,
        exp: "Cocktail / Shaker Sort — Bubble Sort ning ikki yo'nalishda (oldinga va orqaga) yuradigan takomillashtirilgan shakli."
      },
      {
        topic: "08-Mavzu",
        q: "2048 ta elementdan iborat tartiblangan ro'yxatda Binary Search ko'pi bilan nechta qadamda elementni topadi?",
        options: ["2048", "1024", "11", "20"],
        answer: 2,
        exp: "log2(2048) = 11, chunki 2^11 = 2048."
      }
    ]
  },

  // ========================== VARIANT 3 ==========================
  {
    variant: 3,
    title: "3-Variant: ADT, STL Iteratorlar & Rekursiya",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Ma'lumot tuzilmalari ustida bajariladigan 4 ta asosiy amal (CRUD) qaysilar?",
        options: ["Yaratish, O'chirish, Tanlash (ruxsat), Yangilash", "Kiritish, Ko'paytirish, Bo'lish, Ayirish", "Saralash, Qidirish, Shtrixlash, Saqlash", "Push, Pop, Peek, Swap"],
        answer: 0,
        exp: "CRUD: Create (Yaratish), Read (Tanlash/ruxsat), Update (Yangilash), Delete (O'chirish)."
      },
      {
        topic: "01-Mavzu",
        q: "Iyerarxik tartibdagi bitta munosabatdan tashkil topgan ma'lumotlar tuzilmasi qaysi?",
        options: ["To'plam", "Matritsa", "Daraxt", "Graf"],
        answer: 2,
        exp: "Daraxt (Tree) — R to'plam iyerarxik tartibdagi bitta munosabatdan tashkil topgan tuzilma."
      },
      {
        topic: "02-Mavzu",
        q: "Haqiqiy sonlar EHM xotirasida qaysi formatda saqlanadi?",
        options: ["Qo'zg'almas nuqta", "Qo'zg'aluvchan nuqta (yarimlogarifmik: ±M * q^(±P))", "ASCII kod", "BCD format"],
        answer: 1,
        exp: "Haqiqiy sonlar x = ±M * q^(±P) yarimlogarifmik ko'rinishda (Mantissa va Tartib) saqlanadi."
      },
      {
        topic: "02-Mavzu",
        q: "C++ da tartibsiz va takrorlanmas (noyob) elementlarni saqlovchi to'plam qanday e'lon qilinadi?",
        options: ["vector<int> s;", "set<int> s;", "array<int, 5> s;", "stack<int> s;"],
        answer: 1,
        exp: "set<int> s — elementlari noyob (takrorlanmas) bo'lgan to'plam konteyneri."
      },
      {
        topic: "03-Mavzu",
        q: "STL da qaysi konteyner uchun clear() metodi mavjud EMAS?",
        options: ["vector", "list", "array", "deque"],
        answer: 2,
        exp: "03-mavzu 10-slaydda: clear() — konteynerni (array konteyneridan tashqari) tozalash!"
      },
      {
        topic: "04-Mavzu",
        q: "Stack Frame (Activation Record) ichida nimalar saqlanadi?",
        options: ["Faqat global o'zgaruvchilar", "Parametrlar, lokal o'zgaruvchilar, qaytish manzili va oraliq holat", "Faqat dastur kodi", "Faqat Heap manzillari"],
        answer: 1,
        exp: "Har bir funksiya chaqirilganda yaratiladigan Stack Frame da parametrlar, lokal o'zgaruvchilar, Return Address va oraliq holat saqlanadi."
      },
      {
        topic: "05-Mavzu",
        q: "Xeshlash (Hash Search) da o'rtacha qidiruv vaqti qancha?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        answer: 2,
        exp: "Xesh-funksiya kalit orqali indeksni darhol hisoblab topgani uchun o'rtacha qidiruv vaqti O(1) ga teng."
      },
      {
        topic: "06-Mavzu",
        q: "Quyidagilardan qaysi biri barqaror (Stable) saralash hisoblanadi?",
        options: ["Selection Sort", "Pancake Sort", "Insertion Sort", "Heap Sort"],
        answer: 2,
        exp: "Bubble Sort va Insertion Sort barqaror (Stable); Selection Sort, Pancake Sort va Heap Sort nobarqaror (Unstable)."
      },
      {
        topic: "07-Mavzu",
        q: "Shell Sort 1959-yilda Donald Shell tomonidan qaysi algoritmni tezlashtirish uchun taklif qilingan?",
        options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Radix Sort"],
        answer: 1,
        exp: "Shell Sort — Insertion Sort ning takomillashtirilgan ko'rinishi bo'lib, avval uzoq 'gap' masofadagi elementlarni tartiblaydi."
      },
      {
        topic: "08-Mavzu",
        q: "n = 100 bo'lganda O(n²) murakkablikdagi algoritm taxminan nechta amal bajaradi?",
        options: ["100", "200", "1 000", "10 000"],
        answer: 3,
        exp: "n² = 100 × 100 = 10 000 ta amal."
      }
    ]
  },

  // ========================== VARIANT 4 ==========================
  {
    variant: 4,
    title: "4-Variant: Kod Tahlili & Amaliy Masalalar",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Ma'lumotlarni tasvirlashning 3 bosqichi qaysi tartibda keladi?",
        options: ["Fizik → Mantiqiy → Abstrakt", "Abstrakt → Mantiqiy → Fizik", "Mantiqiy → Fizik → Abstrakt", "Grafik → Dasturiy → Fizik"],
        answer: 1,
        exp: "Avval Abstrakt (matematik model), keyin Mantiqiy (kod/dastur), so'ng Fizik (xotira yacheykalari)."
      },
      {
        topic: "02-Mavzu",
        q: "Ko'rsatkich (pointer) o'zgaruvchisi o'zida nimani saqlaydi?",
        options: ["Butun son qiymatini", "Ma'lumot joylashgan xotira manzilini (adresini)", "Funksiya nomini", "Massiv uzunligini"],
        answer: 1,
        exp: "Ko'rsatkich ma'lumotning o'zini emas, u joylashgan xotira adresini saqlaydi."
      },
      {
        topic: "03-Mavzu",
        q: "Quyidagi C++ kodining natijasi nima bo'ladi?\n<pre>vector&lt;string&gt; names = {\"Peter\", \"Ivan\", \"John\"};\nsort(names.begin(), names.end());\ncout &lt;&lt; names[0];</pre>",
        options: ["Peter", "John", "Ivan", "Xatolik"],
        answer: 2,
        exp: "Alifbo tartibida saralanganda: Ivan, John, Peter bo'ladi. Shuning uchun names[0] = Ivan."
      },
      {
        topic: "04-Mavzu",
        q: "Naive (oddiy) rekursiv Fibonacci fib(n-1) + fib(n-2) funksiyasining Time Complexity si qanday?",
        options: ["O(n)", "O(n log n)", "O(2^n)", "O(1)"],
        answer: 2,
        exp: "Bir xil qiymatlar daraxt shaklida qayta hisoblangani uchun Naive Fibonacci ning vaqt murakkabligi O(2^n)."
      },
      {
        topic: "05-Mavzu",
        q: "Quyidagi Python kodining natijasi nima?\n<pre>arr = [10, 30, 20, 40, 50]\ndef search(arr, key):\n    for i in range(len(arr)):\n        if arr[i] == key: return i\n    return -1\nprint(search(arr, 25))</pre>",
        options: ["0", "2", "5", "-1"],
        answer: 3,
        exp: "25 qiymati massivda mavjud emas, sikl tugagach funksiya -1 qaytaradi."
      },
      {
        topic: "06-Mavzu",
        q: "Radix Sort sonlarni qanday tartibda saralaydi?",
        options: ["O'rtasidan chetiga qarab", "Birlik xonasi → o'nlik xonasi → yuzlik xonasi bo'yicha", "Faqat eng katta xonasi bo'yicha", "Taqqoslab ikkiga bo'lish orqali"],
        answer: 1,
        exp: "Radix Sort LSD usulida birlik → o'nlik → yuzlik xonalari bo'yicha barqaror saralaydi."
      },
      {
        topic: "07-Mavzu",
        q: "Heap Sort algoritmida Max Heap ning ildizida (root) qaysi element turadi?",
        options: ["Eng kichik element", "O'rtacha element", "Eng katta element", "Oxirgi kiritilgan element"],
        answer: 2,
        exp: "Max Heap xossasiga ko'ra har bir ota tugun farzandlaridan katta, eng katta element esa doim root da joylashadi."
      },
      {
        topic: "07-Mavzu",
        q: "Quick Sort algoritmining g'oyasi qaysi muallifga tegishli?",
        options: ["Donald Shell", "C. A. R. (Tony) Hoare", "J. W. J. Williams", "Al-Xorazmiy"],
        answer: 1,
        exp: "Quick Sort algoritmi britaniyalik olim Tony Hoare tomonidan ishlab chiqilgan."
      },
      {
        topic: "08-Mavzu",
        q: "Ikki ta ichma-ich joylashgan N martalik for siklining vaqt murakkabligi qancha?",
        options: ["O(2n)", "O(n log n)", "O(n²)", "O(log n)"],
        answer: 2,
        exp: "Loop ichida loop bo'lganda har bir tashqi qadam uchun ichki sikl n marta ishlaydi: n * n = O(n²)."
      },
      {
        topic: "05-Mavzu",
        q: "3D massiv baholar[i][j][k] da barcha elementlarni ko'rib chiqish uchun nechta for sikli kerak?",
        options: ["1 ta", "2 ta", "3 ta", "4 ta"],
        answer: 2,
        exp: "1D massivda 1 ta, 2D da 2 ta, 3D da (jadval, qator, ustun) 3 ta ichma-ich for sikli kerak."
      }
    ]
  },

  // ========================== VARIANT 5 ==========================
  {
    variant: 5,
    title: "5-Variant: Kompleks Nazariya va Amaliyot",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Ikki yoki undan ortiq turli tartibdagi munosabatlardan tashkil topgan murakkab tuzilma qaysi?",
        options: ["Ketma-ketlik", "Gipergraf", "To'plam", "Vektor"],
        answer: 1,
        exp: "Gipergraf — R to'plami ikki yoki undan ortiq turli tartibdagi munosabatlardan tashkil topgan tuzilma."
      },
      {
        topic: "02-Mavzu",
        q: "C++ da ishorasiz butun son e'lon qilish uchun qaysi kalit so'z ishlatiladi?",
        options: ["signed", "unsigned", "void", "double"],
        answer: 1,
        exp: "Ishorasiz sonlar (0 dan 2^N - 1 gacha) uchun 'unsigned' kalit so'zi ishlatiladi."
      },
      {
        topic: "03-Mavzu",
        q: "STL da qaysi iterator turi eng keng imkoniyatga ega (indeks qo'shish it+k, oldinga/orqaga sakrash)?",
        options: ["input_iterator", "forward_iterator", "bidirectional_iterator", "random_access_iterator"],
        answer: 3,
        exp: "random_access_iterator konteynerning ixtiyoriy elementiga sakrab murojaat qilish imkonini beradi."
      },
      {
        topic: "04-Mavzu",
        q: "factorial(5) funksiyasi chaqirilganda Call Stack da eng ko'pi bilan nechta faol rekursiv freym (taxminan) bo'ladi?",
        options: ["1 ta", "2 ta", "5 ta", "25 ta"],
        answer: 2,
        exp: "Chiziqli rekursiyada factorial(n) uchun maksimal chuqurlik taxminan n ga teng (factorial(5) -> 5 ta)."
      },
      {
        topic: "05-Mavzu",
        q: "Binar qidiruvda L=0, R=9 bo'lsa, birinchi mid indeksi nechaga teng bo'ladi?",
        options: ["5", "4", "9", "0"],
        answer: 1,
        exp: "mid = (L + R) // 2 = (0 + 9) // 2 = 4."
      },
      {
        topic: "06-Mavzu",
        q: "Counting Sort da cumulative count (yig'ib sanash) saqlanadigan massiv nomi slaydda qanday berilgan?",
        options: ["inputArray", "countArray", "hashArray", "pivotArray"],
        answer: 1,
        exp: "Slaydda 3 ta massiv ko'rsatilgan: inputArray, countArray (yig'ib sanash) va outputArray."
      },
      {
        topic: "07-Mavzu",
        q: "8 ta elementli massivni Merge Sort yordamida 1 ta element qolguncha necha bosqichda bo'lish kerak?",
        options: ["8 marta", "4 marta", "3 marta", "2 marta"],
        answer: 2,
        exp: "log2(8) = 3 bosqich (8 -> 4 -> 2 -> 1)."
      },
      {
        topic: "07-Mavzu",
        q: "Quick Sort ning eng yomon holatdagi (Worst Case) vaqt murakkabligi qancha?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        answer: 2,
        exp: "Agar pivot har safar eng kichik yoki eng katta elementga tushsa, Quick Sort O(n²) ga tushadi."
      },
      {
        topic: "08-Mavzu",
        q: "Quyidagi kodning Time Complexity si qancha?\n<pre>n = 16\nwhile n &gt; 1:\n    n = n // 2</pre>",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 1,
        exp: "Har qadamda n ikkiga bo'lingani uchun sikl log2(n) marta aylanadi — O(log n)."
      },
      {
        topic: "08-Mavzu",
        q: "5! (5 faktorial) qiymati nechaga teng?",
        options: ["24", "60", "120", "720"],
        answer: 2,
        exp: "5! = 1 × 2 × 3 × 4 × 5 = 120."
      }
    ]
  },

  // ========================== VARIANT 6 ==========================
  {
    variant: 6,
    title: "6-Variant: Xotira Segmentlari, Konteynerlar & Saralash",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Kompyuter fanida 'Algoritm' atamasi kimning nomi bilan bog'liq?",
        options: ["Abu Rayhon Beruniy", "Muhammad al-Xorazmiy", "Ibn Sino", "Evklid"],
        answer: 1,
        exp: "Al-Xorazmiy ismining lotincha shakli 'Algorithmi' so'zidan kelib chiqqan."
      },
      {
        topic: "01-Mavzu",
        q: "Ma'lumot tuzilmalari tarkibidagi 'atomlar' (oddiy standart turlar) ga qaysilar kiradi?",
        options: ["Massiv va Yozuv", "Bool, Butun, Haqiqiy, Belgili", "Stek va Navbat", "Daraxt va Graf"],
        answer: 1,
        exp: "Sozlangan MT ikkiga bo'linadi: 'atomlar' (bool, int, float, char) va 'molekulalar' (massiv, yozuv, to'plam)."
      },
      {
        topic: "02-Mavzu",
        q: "937,56 sonining normalizatsiyalangan yarimlogarifmik shakli qaysi?",
        options: ["93756 * 10^2", "0,93756 * 10^3", "9,3756 * 10^1", "0,93756 * 10^-3"],
        answer: 1,
        exp: "02-mavzu 7-slaydda keltirilgan misol: 937,56 = 93756 * 10^-2 = 0,93756 * 10^3."
      },
      {
        topic: "02-Mavzu",
        q: "Yozuv (struct) uchun ajratiladigan xotira hajmi qanday aniqlanadi?",
        options: ["Faqat eng katta maydon hajmi", "Barcha maydonlar hajmlarining yig'indisi (kamida)", "Doim 4 bayt", "Doim 1 bayt"],
        answer: 1,
        exp: "Yozuvda maydonlar ketma-ket joylashadi va xotira hajmi maydonlar hajmlari yig'indisidan kelib chiqadi."
      },
      {
        topic: "03-Mavzu",
        q: "STL da 'multiset' va 'set' konteynerlari o'rtasidagi asosiy farq nima?",
        options: ["multiset da elementlar noyob bo'lishi shart emas", "multiset faqat satr saqlaydi", "set da elementlar takrorlanadi", "Farqi yo'q"],
        answer: 0,
        exp: "multiset — har bir elementi noyob bo'lishi shart bo'lmagan to'plam (bir xil qiymat bir necha marta kelishi mumkin)."
      },
      {
        topic: "04-Mavzu",
        q: "Qaysi rekursiya turida funksiya yechim topolmasa orqaga qaytib boshqa yo'lni sinab ko'radi?",
        options: ["Chiziqli rekursiya", "Qaytaruvchi (Backtracking) rekursiya", "Tail rekursiya", "O'zaro rekursiya"],
        answer: 1,
        exp: "Backtracking (qaytaruvchi) rekursiya barcha variantlarni sinab, noto'g'ri shoxdan orqaga qaytadi."
      },
      {
        topic: "05-Mavzu",
        q: "Ikki o'lchovli massiv baholar = [[80, 90, 70], [85, 95, 75]] da baholar[1][1] nimaga teng?",
        options: ["80", "90", "85", "95"],
        answer: 3,
        exp: "1-indeksli qator [85, 95, 75], uning 1-indeksli ustuni 95 ga teng."
      },
      {
        topic: "06-Mavzu",
        q: "Selection Sort ning asosiy afzalligi nimada?",
        options: ["Best Case O(n) bo'lishi", "O'rin almashtirishlar (swap) soni eng kam (ko'pi bilan n-1) bo'lishi", "Barqaror (Stable) ekani", "Katta massivda eng tez ekani"],
        answer: 1,
        exp: "Selection Sort xotiraga yozish / swap amallari qimmat bo'lganda foydali, chunki ko'pi bilan n-1 ta swap qiladi."
      },
      {
        topic: "07-Mavzu",
        q: "arr = [40, 51, 8, 38, 90, 14] (n=6) massivda Shell Sort ning birinchi qadamida gap nechaga teng?",
        options: ["1", "2", "3", "6"],
        answer: 2,
        exp: "gap = n // 2 = 6 // 2 = 3."
      },
      {
        topic: "08-Mavzu",
        q: "Barcha permutatsiyalarni (o'rin almashtirishlarni) tekshiradigan algoritm murakkabligi qanday?",
        options: ["O(2^n)", "O(n²)", "O(n!)", "O(n log n)"],
        answer: 2,
        exp: "n ta elementning barcha o'rin almashtirishlari soni n! ga teng."
      }
    ]
  },

  // ========================== VARIANT 7 ==========================
  {
    variant: 7,
    title: "7-Variant: Massiv, Vektor, STL & Big-O",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Algoritmni inson o'qishi mumkin bo'lgan yarim-dasturiy tasvirlash shakli nima deyiladi?",
        options: ["Blok-sxema", "Psevdokod", "Mashina kodi", "Matritsa"],
        answer: 1,
        exp: "01-mavzu 8-slaydda: Dasturiy ko'rinish — psevdokod (mantig'ini inson o'qishi mumkin bo'lgan) yoki aniq dasturlash tili."
      },
      {
        topic: "01-Mavzu",
        q: "Dastur bajarilguncha o'lchami o'zgarmaydigan tuzilmalar (massiv, yozuv, vektor) o'zgaruvchanligi bo'yicha qanday nomlanadi?",
        options: ["Statik tuzilmalar", "Dinamik tuzilmalar", "Gipergraf", "Chiziqsiz"],
        answer: 0,
        exp: "01-mavzu 13-slaydda: dasturni bajarish oxirigacha o'zgarmaydigan tuzilmalar — statik tuzilmalar."
      },
      {
        topic: "02-Mavzu",
        q: "Massiv va Vector o'rtasidagi asosiy farq nimada?",
        options: ["Vector da har xil turdagi elementlar saqlanadi", "Vector uzunligi oldindan berilmaydi va dastur bajarilishida o'zgaradi", "Massiv faqat 2D bo'ladi", "Vector da indeks yo'q"],
        answer: 1,
        exp: "Vektor — elementlari soni oldindan ma'lum bo'lmagan, dinamik o'zgaruvchi uzunlikdagi bir xil turli ketma-ketlik."
      },
      {
        topic: "03-Mavzu",
        q: "STL da qaysi iterator end() metodi bilan ko'rsatiladi?",
        options: ["Birinchi element", "Oxirgi element", "Oxirgi elementdan keyingi o'rin", "O'rtadagi element"],
        answer: 2,
        exp: "end() — konteynerning oxirgi elementidan keyingi shartli o'ringa ishora qiladi."
      },
      {
        topic: "04-Mavzu",
        q: "factorial(4) ni hisoblashda qaytish (returning) bosqichida factorial(3) qanday qiymat qaytaradi?",
        options: ["2", "6", "12", "24"],
        answer: 1,
        exp: "factorial(1)=1 -> factorial(2)=2*1=2 -> factorial(3)=3*2=6 -> factorial(4)=4*6=24."
      },
      {
        topic: "05-Mavzu",
        q: "Chiziqli qidiruvda chegara holatlarni tekshirishda [] (bo'sh massiv) kiritilsa funksiya nima qaytarishi kerak?",
        options: ["0", "None / -1", "1", "Cheksiz sikl"],
        answer: 1,
        exp: "Bo'sh massivda element topilmagani uchun funksiya maxsus belgi — -1 (yoki None) qaytarishi kerak."
      },
      {
        topic: "06-Mavzu",
        q: "Bubble Sort da birinchi to'liq o'tishdan (Pass 1) keyin qaysi element o'zining oxirgi to'g'ri joyiga boradi?",
        options: ["Eng kichik element boshiga", "Eng katta element oxiriga", "O'rtacha element o'rtasiga", "Hech biri"],
        answer: 1,
        exp: "Bubble Sort da har o'tishda eng katta element pufakcha kabi suzib massiv oxiriga joylashadi."
      },
      {
        topic: "07-Mavzu",
        q: "Heap Sort ning Space Complexity (qo'shimcha xotira sarfi) qancha?",
        options: ["O(n)", "O(n log n)", "O(1)", "O(n²)"],
        answer: 2,
        exp: "Heap Sort massivning o'zida (in-place) bajariladi, shuning uchun qo'shimcha xotirasi O(1)."
      },
      {
        topic: "07-Mavzu",
        q: "Merge Sort da left[i:] va right[j:] ni result.extend() qilish nima uchun kerak?",
        options: ["Vaqt murakkabligini kamaytirish uchun", "Bir ro'yxat tugagandan keyin ikkinchisida qolgan elementlarni qo'shib qo'yish uchun", "Massivni tozalash uchun", "Pivot tanlash uchun"],
        answer: 1,
        exp: "while sikli bir qism tugaganda to'xtaydi; qolgan ortiqcha elementlarni extend() orqali oxiriga qo'shamiz."
      },
      {
        topic: "08-Mavzu",
        q: "Quyidagi murakkabliklardan eng sekin (eng og'ir) o'sadiganini belgilang:",
        options: ["O(n log n)", "O(n²)", "O(2^n)", "O(n!)"],
        answer: 3,
        exp: "O'sish tartibi: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n) < O(n!)."
      }
    ]
  },

  // ========================== VARIANT 8 ==========================
  {
    variant: 8,
    title: "8-Variant: Qidiruv, Saralash & Xotira Tahlili",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Algoritmlar nazariyasining qaysi jihati asimptotik tahlil va cheklangan xotirada oqilona algoritm tanlash bilan shug'ullanadi?",
        options: ["Nazariy jihat", "Amaliy jihat", "Fizik bosqich", "Grafik usul"],
        answer: 1,
        exp: "01-mavzu 7-slaydda: Amaliy jihat asimptotik va amaliy tahlil asosida samarali algoritm tanlashga imkon beradi."
      },
      {
        topic: "02-Mavzu",
        q: "C++ da struct TALABA { int ID; char fio[30]; }; da taxminan minimal xotira hajmi qancha (4 baytli int uchun)?",
        options: ["4 bayt", "30 bayt", "34 bayt (yoki tekislash bilan 36)", "1 bayt"],
        answer: 2,
        exp: "int (4 bayt) + char[30] (30 bayt) = 34 bayt (xotira tekislashiga qarab 36 bayt)."
      },
      {
        topic: "03-Mavzu",
        q: "STL da kalit/qiymat juftliklarini saqlovchi assotsiativ konteyner qaysi?",
        options: ["vector", "stack", "map", "deque"],
        answer: 2,
        exp: "map — har bir kalit bitta qiymat bilan bog'langan assotsiativ konteyner."
      },
      {
        topic: "04-Mavzu",
        q: "Rekursiya chuqurligi nazoratsiz oshib ketsa qanday xatolik yuzaga keladi?",
        options: ["Syntax Error", "Stack Overflow", "Division by Zero", "Null Pointer"],
        answer: 1,
        exp: "Call Stack xotirasi to'lib ketishi natijasida Stack Overflow yuz beradi."
      },
      {
        topic: "05-Mavzu",
        q: "40 000 so'zli lug'atda so'zni eng oxirida topish uchun Linear Search 40 000 qadam qilsa, Binary Search nechta qadam qiladi?",
        options: ["20 000 qadam", "400 qadam", "15-16 qadam", "1 qadam"],
        answer: 2,
        exp: "log2(40000) ≈ 15.28, demak ko'pi bilan 16 ta qadam kifoya."
      },
      {
        topic: "06-Mavzu",
        q: "Pancake Sort algoritmida asosiy amal nima?",
        options: ["Qo'shni elementlarni swap qilish", "Massiv prefiksini teskari ag'darish (flip)", "Minimum elementni tanlash", "Xonalar bo'yicha guruhlash"],
        answer: 1,
        exp: "Pancake Sort eng katta elementni boshiga olib kelish va joyiga qo'yish uchun prefiks flip (ag'darish) qiladi."
      },
      {
        topic: "07-Mavzu",
        q: "Cocktail Sort da Forward Pass tugagach qaysi chegara o'zgaradi?",
        options: ["start += 1", "end -= 1", "mid += 1", "gap //= 2"],
        answer: 1,
        exp: "Forward Pass oxirida eng katta element o'ngga o'rnashadi, shuning uchun o'ng chegara end -= 1 qisqartiriladi."
      },
      {
        topic: "07-Mavzu",
        q: "massiv = [5, 2, 8, 1, 6] da birinchi element tayanch (pivot = 5) qilib olinsa, 'kichik' va 'katta' ro'yxatlar qanday bo'ladi?",
        options: ["kichik=[1], katta=[2,8,6]", "kichik=[2, 1], katta=[8, 6]", "kichik=[2, 1, 5], katta=[8, 6]", "kichik=[8, 6], katta=[2, 1]"],
        answer: 1,
        exp: "5 dan kichik elementlar [2, 1], 5 dan katta/tenglar [8, 6] ga ajratiladi."
      },
      {
        topic: "08-Mavzu",
        q: "numbers = [10, 20, 30, 40, 50]; print(numbers[0]) kodining Time Complexity si nechaga teng?",
        options: ["O(1)", "O(log n)", "O(n)", "O(5)"],
        answer: 0,
        exp: "Massivning birinchi elementiga indeks orqali murojaat o'zgarmas vaqtda bajariladi — O(1)."
      },
      {
        topic: "06-Mavzu",
        q: "Katta hajmli ma'lumotlarni saralashda CPU ga nisbatan qaysi qurilma parallel hisoblash orqali juda tez ishlaydi?",
        options: ["RAM", "GPU", "BIOS", "HDD"],
        answer: 1,
        exp: "06-mavzu slaydiga ko'ra, GPU minglab kichik yadrolari tufayli parallel saralashda CPU dan ancha tez ishlaydi."
      }
    ]
  },

  // ========================== VARIANT 9 ==========================
  {
    variant: 9,
    title: "9-Variant: Ko'rsatkichlar, Rekursiv Qidiruv & Shell Sort",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Barcha elementlar uchun o'zidan oldin va keyin keladigan element mavjud (birinchi va oxirgidan tashqari) tuzilma qaysi?",
        options: ["To'plam", "Ketma-ketlik", "Gipergraf", "Graf"],
        answer: 1,
        exp: "Ketma-ketlik — R={(A,B),(B,C),(C,D)} ko'rinishidagi bitta chiziqli munosabatli tuzilma."
      },
      {
        topic: "02-Mavzu",
        q: "Mantiqiy tur (bool) ustida qaysi amallarni bajarish mumkin?",
        options: ["Kon'yunksiya (VA), Diz'yunksiya (YOKI), Inkor (YO'Q)", "Faqat qo'shish va ayirish", "Logarifmlash", "Integrallash"],
        answer: 0,
        exp: "Mantiqiy tur true(1)/false(0) ustida kon'yunksiya, diz'yunksiya, inkor, implikatsiya va ekvivalentlik bajaradi."
      },
      {
        topic: "03-Mavzu",
        q: "STL da 'deque' konteyneri nimani anglatadi?",
        options: ["Faqat oxiridan qo'shiladigan stek", "Ikki tomonlama navbat (double-ended queue)", "Assotsiativ lug'at", "Dinamik graf"],
        answer: 1,
        exp: "deque — ikki tarafli navbat bo'lib, boshidan ham, oxiridan ham tez element qo'shish/o'chirish mumkin."
      },
      {
        topic: "04-Mavzu",
        q: "Qaysi ikki tushuncha rekursiyaning 'ikki tayanchi' hisoblanadi?",
        options: ["Stack va Heap", "Base Case va Recursive Step", "Input va Output", "For va While"],
        answer: 1,
        exp: "04-mavzu 4-slaydda: 1) Bazaviy holat (Base Case) va 2) Rekursiv qadam (Recursive Step)."
      },
      {
        topic: "05-Mavzu",
        q: "def rec_search(arr, n, x) funksiyasi massivni qaysi tomondan tekshiradi?",
        options: ["Boshidan oxiriga", "Oxiridan boshiga (arr[n-1])", "O'rtasidan", "Tasodifiy"],
        answer: 1,
        exp: "arr[n - 1] == x tekshiriladi va n - 1 bilan qayta chaqiriladi, demak oxiridan boshiga tekshiradi."
      },
      {
        topic: "05-Mavzu",
        q: "3D massiv baholar[1][0][2] da indekslar nimani bildiradi (Guruh → Talaba → Fan)?",
        options: ["1-guruh, 0-talaba, 2-fan", "2-guruh, 1-talaba, 3-fan", "1-talaba, 0-fan, 2-guruh", "Xatolik"],
        answer: 1,
        exp: "0-indekslash tufayli: 1 -> ikkinchi guruh, 0 -> birinchi talaba, 2 -> uchinchi fan."
      },
      {
        topic: "06-Mavzu",
        q: "Deyarli tartiblangan (nearly sorted) kichik massivlar uchun qaysi sodda saralash eng samarali?",
        options: ["Selection Sort", "Insertion Sort", "Pancake Sort", "Barchasi bir xil"],
        answer: 1,
        exp: "Insertion Sort deyarli tartiblangan ma'lumotlarda adaptive bo'lib O(n) ga yaqin vaqtda ishlaydi."
      },
      {
        topic: "07-Mavzu",
        q: "Shell Sort da eng yaxshi holat (Best Case) va qo'shimcha xotira murakkabligi qancha?",
        options: ["O(n log n) va O(1)", "O(n²) va O(n)", "O(1) va O(n)", "O(n!) va O(1)"],
        answer: 0,
        exp: "07-mavzu slaydiga ko'ra: Best Case O(n log n), Qo'shimcha xotira O(1)."
      },
      {
        topic: "08-Mavzu",
        q: "Binary Search da lug'at hajmi 40 000 dan 80 000 ga (2 barobar) oshirilsa, maksimal qadamlar soni nechtaga ortadi?",
        options: ["2 barobar", "40 000 taga", "Atigi 1 qadamga", "10 qadamga"],
        answer: 2,
        exp: "2 barobar ko'payish log2(2N) = log2(N) + 1 bo'lgani uchun faqat 1 ta qadam qo'shadi."
      },
      {
        topic: "08-Mavzu",
        q: "O(2^n) murakkablik qaysi turdagi masalalarda uchraydi?",
        options: ["Massiv indeksini olishda", "Har bir element uchun 'olish yoki olmaslik' (barcha subsetlar) tanlovida", "Binar qidiruvda", "Ikki sonni qo'shishda"],
        answer: 1,
        exp: "n ta elementdan hosil bo'ladigan barcha qism to'plamlar (subsetlar) soni 2^n ga teng."
      }
    ]
  },

  // ========================== VARIANT 10 ==========================
  {
    variant: 10,
    title: "10-Variant: Dasturlash Sintaksisi & Algoritm Qadamlari",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Yarimstatik tuzilmalarga qaysilar misol bo'ladi?",
        options: ["Oddiy int o'zgaruvchisi", "Steklar, pastki qavatlar va navbatlar", "Graf va Gipergraf", "Konstantalar"],
        answer: 1,
        exp: "01-mavzu 13-slayd: yarimstatik tuzilmalar — steklar, pastki qavatlar, navbatlar."
      },
      {
        topic: "02-Mavzu",
        q: "C++ da foydalanuvchi tomonidan aniqlanadigan turlarga (User Defined) qaysilar kiradi?",
        options: ["int, float, char", "enum, struct, union, class", "void, bool", "faqat pointer"],
        answer: 1,
        exp: "enum, struct, union, class/object — foydalanuvchi tomonidan yaratiladigan turlar."
      },
      {
        topic: "03-Mavzu",
        q: "C++ da int **B = new int*[5]; kodi nimani yaratadi?",
        options: ["5 ta oddiy int o'zgaruvchi", "5 ta qatorga ega 2D dinamik massiv uchun ko'rsatkichlar massivini", "Statik massiv", "Set to'plamini"],
        answer: 1,
        exp: "int **B ko'rsatkichlar massivini ajratadi, so'ng siklda har bir B[i] uchun new int[5] ajratiladi."
      },
      {
        topic: "04-Mavzu",
        q: "Call Stack dan funksiya bajarilib bo'lgach o'chirilishi amali nima deyiladi?",
        options: ["Push", "Pop", "Swap", "Flip"],
        answer: 1,
        exp: "Stekdan yuqori elementni olib tashlash (o'chirish) amali Pop deyiladi."
      },
      {
        topic: "05-Mavzu",
        q: "Qidiruv algoritmlarining asosiy 3 maqsadi qaysi?",
        options: ["Yozuvni o'qish, topilmasa jadvalga qo'shish, topilganni o'chirish", "Faqat o'chirish", "Faqat kompilyatsiya", "Xotirani kengaytirish"],
        answer: 0,
        exp: "05-mavzu 3-slayd: topilgan yozuvni o'qish, topilmasa qo'shish, topilgan yozuvni o'chirish."
      },
      {
        topic: "06-Mavzu",
        q: "Insertion Sort ning Best Case vaqt murakkabligi qancha?",
        options: ["O(1)", "O(n)", "O(n log n)", "O(n²)"],
        answer: 1,
        exp: "Massiv allaqachon tartiblangan bo'lsa, ichki while sikli umuman ishlamaydi va Best Case = O(n)."
      },
      {
        topic: "07-Mavzu",
        q: "arr = [5, 1, 4, 2, 0, 2, 8] massivida Cocktail Sort ning birinchi Forward Pass natijasi qanday bo'ladi?",
        options: ["[0, 1, 2, 2, 4, 5, 8]", "[1, 4, 2, 0, 2, 5, 8]", "[8, 5, 4, 2, 2, 1, 0]", "[5, 1, 4, 2, 0, 2, 8]"],
        answer: 1,
        exp: "07-mavzu slaydidagi misol: birinchi Forward Pass dan keyin 8 oxirga o'tib [1, 4, 2, 0, 2, 5, 8] hosil bo'ladi."
      },
      {
        topic: "07-Mavzu",
        q: "Divide and Conquer tamoyilining 3 ta bosqichi qaysilar?",
        options: ["Push → Peek → Pop", "Divide → Conquer → Merge", "Create → Read → Delete", "Input → Hash → Output"],
        answer: 1,
        exp: "Bo'lish (Divide), kichik qismlarni yechish (Conquer) va birlashtirish (Merge)."
      },
      {
        topic: "08-Mavzu",
        q: "n = 8 bo'lganda O(n²) va O(n log n) amallar soni nisbati qanday?",
        options: ["64 va 24", "8 va 8", "16 va 64", "24 va 64"],
        answer: 0,
        exp: "07/08-mavzu slaydida: O(n²) = 8×8 = 64, O(n log n) = 8×log2(8) = 8×3 = 24."
      },
      {
        topic: "08-Mavzu",
        q: "Python dagi tayyor numbers.sort() funksiyasi qaysi murakkablik sinfida ishlaydi?",
        options: ["O(n²)", "O(n log n)", "O(2^n)", "O(n!)"],
        answer: 1,
        exp: "Python sort() (TimSort) samarali saralash bo'lib, o'rtacha va eng yomon holatda O(n log n) da ishlaydi."
      }
    ]
  },

  // ========================== VARIANT 11 ==========================
  {
    variant: 11,
    title: "11-Variant: Chuqurlashtirilgan Algoritmlar",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Matritsa tuzilmasida R munosabatlar to'plami nechta chiziqli munosabatdan iborat?",
        options: ["0 ta", "1 ta", "2 ta (satr va ustun)", "3 ta"],
        answer: 2,
        exp: "Matritsa — ikkita chiziqli munosabatdan (satr va ustun) tashkil topgan tuzilma."
      },
      {
        topic: "02-Mavzu",
        q: "Dasturning mashina buyruqlari xotiraning qaysi qismida saqlanadi?",
        options: ["Heap", "Stack", "Program Code", "Global"],
        answer: 2,
        exp: "02-mavzu 1-slayddagi xotira diagrammasiga ko'ra eng pastki segment Program Code."
      },
      {
        topic: "03-Mavzu",
        q: "Konteyner elementlarini teskari tartibda ko'rib chiqish uchun qaysi iterator metodlari ishlatiladi?",
        options: ["begin() va end()", "rbegin() va rend()", "front() va back()", "push() va pop()"],
        answer: 1,
        exp: "rbegin() — teskari tartibdagi boshlang'ich element, rend() — oxiridan keyingi o'rin."
      },
      {
        topic: "04-Mavzu",
        q: "Agar masalani rekursiyasiz ham oson va kam xotira bilan yechish mumkin bo'lsa, qaysi yondashuv tavsiya etiladi?",
        options: ["Har doim rekursiya", "Iterativ yondashuv (sikl), chunki katta chuqurlikda stek to'lib ketishi mumkin", "Ikkalasi ham ishlamaydi", "Faqat O(n!)"],
        answer: 1,
        exp: "04-mavzu 13-slayd: agar masalani rekursiyasiz yechish mumkin bo'lsa, katta chuqurlikda Stack Overflow bo'lmasligi uchun iterativ usul afzal."
      },
      {
        topic: "05-Mavzu",
        q: "Jump Search algoritmining vaqt murakkabligi qancha?",
        options: ["O(1)", "O(log n)", "O(√n)", "O(n²)"],
        answer: 2,
        exp: "√n qadam sakrash va √n blok ichida chiziqli yurish tufayli Jump Search O(√n) vaqt oladi."
      },
      {
        topic: "06-Mavzu",
        q: "Bubble Sort algoritmi qachon Best Case = O(n) natijani beradi?",
        options: ["Massiv teskari tartiblangan bo'lsa", "Massiv allaqachon tartiblangan bo'lsa va swapped flag ishlatilsa", "Hech qachon", "Faqat 2 ta element bo'lsa"],
        answer: 1,
        exp: "Swapped bayrog'i tekshirilsa, tartiblangan massivda 1 marta o'tib to'xtaydi (O(n)*)."
      },
      {
        topic: "07-Mavzu",
        q: "Heap Sort algoritmini 1964-yilda kim taklif qilgan?",
        options: ["Tony Hoare", "J. W. J. Williams", "Donald Shell", "John von Neumann"],
        answer: 1,
        exp: "07-mavzu slaydi: Heap Sort 1964-yilda J. W. J. Williams tomonidan taklif qilingan."
      },
      {
        topic: "07-Mavzu",
        q: "Cocktail Sort da Backward Pass tugagach chap chegara qanday o'zgartiriladi?",
        options: ["start += 1", "start -= 1", "end += 1", "start = 0"],
        answer: 0,
        exp: "Orqaga yurishda eng kichik element chapga kelib joylashadi, shuning uchun start += 1 qilinadi."
      },
      {
        topic: "08-Mavzu",
        q: "Time Complexity nimani o'lchaydi?",
        options: ["Kompyuter protsessorining GHz chastotasini", "Input hajmi n oshganda amallar soni qanday o'sishini", "Dastur faylining bayt hajmini", "Monitor yangilanish tezligini"],
        answer: 1,
        exp: "Time Complexity real mashina soniyalarini emas, input uzunligi n ga bog'liq o'sish funksiyasini o'lchaydi."
      },
      {
        topic: "08-Mavzu",
        q: "V ta tugunli grafning Adjacency Matrix Space Complexity si qancha?",
        options: ["O(V)", "O(V log V)", "O(V²)", "O(1)"],
        answer: 2,
        exp: "V × V o'lchamli jadval saqlash uchun O(V²) xotira talab qilinadi."
      }
    ]
  },

  // ========================== VARIANT 12 ==========================
  {
    variant: 12,
    title: "12-Variant: Xotira, Python/C++ Kodlar & Complexity",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Chiziqli tuzilmalar qatoriga qaysilar kiradi?",
        options: ["Daraxtlar va Graflar", "Vektorlar, massivlar, steklar, navbatlar, yozuvlar", "Gipergraf va To'plam", "Binar daraxtlar"],
        answer: 1,
        exp: "01-mavzu 13-slayd: Chiziqli tuzilmalar — vektorlar, massivlar, steklar, pastki qavatlar, yozuvlar."
      },
      {
        topic: "02-Mavzu",
        q: "8 razryadli ishorasiz (unsigned) butun son qabul qila oladigan maksimal qiymat nechaga teng?",
        options: ["127", "128", "255", "256"],
        answer: 2,
        exp: "2^N - 1 = 2^8 - 1 = 256 - 1 = 255."
      },
      {
        topic: "03-Mavzu",
        q: "C++ da stack va queue konteynerlari STL ning qaysi guruhiga mansub?",
        options: ["Asosiy konteynerlar", "Xosila konteynerlar (Adapterlar)", "Iteratorlar", "Algoritmlar"],
        answer: 1,
        exp: "03-mavzu 8-slayd: Xosila konteynerlar — stack, queue, priority_queue."
      },
      {
        topic: "04-Mavzu",
        q: "Quyidagi rekursiv kod nima chiqaradi?\n<pre>void count(int n) {\n    if (n == 0) { cout &lt;&lt; 0; return; }\n    cout &lt;&lt; n &lt;&lt; \" \";\n    count(n - 1);\n}\ncount(3);</pre>",
        options: ["0 1 2 3", "3 2 1 0", "3 2 1", "Cheksiz sikl"],
        answer: 1,
        exp: "Avval n chop etiladi, so'ng n-1 chaqiriladi, n==0 da 0 chiqib to'xtaydi: 3 2 1 0."
      },
      {
        topic: "05-Mavzu",
        q: "Binary Search ning asosiy kamchiligi nimada?",
        options: ["Juda sekin ishlaydi", "Faqat tartiblangan massivni talab qiladi", "Xotiradan O(n²) joy oladi", "Faqat 3D massivda ishlaydi"],
        answer: 1,
        exp: "05-mavzu 6-slayd: Binary Search ning asosiy kamchiligi — ma'lumotlarning oldindan tartiblangan bo'lishi shartligi."
      },
      {
        topic: "06-Mavzu",
        q: "Insertion Sort Python kodida j -= 1 satri qanday vazifani bajaradi?",
        options: ["O'ng tomonga yuradi", "Elementni chap tomondagi qo'shnisi bilan taqqoslab orqaga siljitadi", "Siklini to'xtatadi", "Massiv uzunligini kamaytiradi"],
        answer: 1,
        exp: "j -= 1 chapdagi tartiblangan elementlarga qarab siljishni ta'minlaydi."
      },
      {
        topic: "07-Mavzu",
        q: "Shell Sort da dastlabki oraliqlar ketma-ketligi qanday kamayib boradi?",
        options: ["d1 = n/2, di = di-1 / 2, oxiri dk = 1", "d1 = 1, keyin 2, 4, 8", "Doim d = 3", "d = n * 2"],
        answer: 0,
        exp: "Donald Shell taklif qilgan ketma-ketlikda har bosqichda masofa 2 ga bo'linadi va oxirida d = 1 bo'ladi."
      },
      {
        topic: "07-Mavzu",
        q: "Max Heap da [4, 10, 3, 5, 1] dan 10 olinib oxiriga qo'yilgandan keyingi holat qaysi?",
        options: ["[1, 5, 3, 4 | 10]", "[10, 5, 3, 4 | 1]", "[5, 4, 3, 1 | 10]", "[4, 3, 5, 1 | 10]"],
        answer: 0,
        exp: "07-mavzu Heap Sort misoli: 10 oxirgi element 1 bilan almashtiriladi: [1, 5, 3, 4 | 10], keyin heap tiklanadi."
      },
      {
        topic: "08-Mavzu",
        q: "log2(8) qiymati nechaga teng?",
        options: ["2", "3", "4", "8"],
        answer: 1,
        exp: "8 -> 4 -> 2 -> 1 (3 marta 2 ga bo'linadi), demak log2(8) = 3."
      },
      {
        topic: "08-Mavzu",
        q: "10 ta elementli to'plamning barcha qism to'plamlari (subset) soni nechta?",
        options: ["100", "512", "1024", "3628800"],
        answer: 2,
        exp: "2^10 = 1024 ta variant."
      }
    ]
  },

  // ========================== VARIANT 13 ==========================
  {
    variant: 13,
    title: "13-Variant: Nazorat Savollari & Algoritm Taqqoslash",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Abstrakt ma'lumotlar turi (ADT) nimani aniqlaydi?",
        options: ["Ma'lumotlarning faqat RAM dagi fizik adresini", "Amallar to'plami, natijalari va foydalanish qoidalarini belgilovchi mantiqiy modelni", "Faqat CPU chastotasini", "Faqat C++ kompilyatorini"],
        answer: 1,
        exp: "ADT ma'lumotlar xotirada qanday saqlanishini emas, mantiqiy model va amallar interfeysini belgilaydi."
      },
      {
        topic: "02-Mavzu",
        q: "C++ da float turi xotirada necha bayt joy egallaydi?",
        options: ["1 bayt", "2 bayt", "4 bayt", "8 bayt"],
        answer: 2,
        exp: "float = 4 bayt, double = 8 bayt."
      },
      {
        topic: "03-Mavzu",
        q: "STL da empty() metodi nimani qaytaradi?",
        options: ["Konteynerni tozalaydi", "Konteynerdagi elementlar sonini", "Konteyner bo'sh yoki bo'sh emasligini (true/false)", "Birinchi elementni"],
        answer: 2,
        exp: "empty() konteyner bo'shlikka tekshiradi (bo'sh bo'lsa true, aks holda false)."
      },
      {
        topic: "04-Mavzu",
        q: "Matryoshka qo'g'irchoqlari va piyoz qatlamlari qaysi mavzudagi hayotiy misol hisoblanadi?",
        options: ["Xeshlash", "Rekursiv obyektlar", "Binar qidiruv", "Graf"],
        answer: 1,
        exp: "04-mavzu 6-slaydda Matryoshka va piyoz o'z-o'zini takrorlovchi rekursiv obyekt sifatida berilgan."
      },
      {
        topic: "05-Mavzu",
        q: "Python da talabalar = {101: 'Ali', 102: 'Vali'} tuzilmasi qaysi qidiruv usulining amaliy namunasidir?",
        options: ["Bubble Search", "Hash Search (Xeshlash)", "Jump Search", "Binary Search"],
        answer: 1,
        exp: "Python dictionary (dict) ichki tuzilishida Hash Table dan foydalanib O(1) da kalit orqali qidiradi."
      },
      {
        topic: "06-Mavzu",
        q: "Counting Sort da agar inputArray da 0 qiymati 2 marta uchrasa, countArray[0] da qaysi son turadi?",
        options: ["0", "1", "2", "8"],
        answer: 2,
        exp: "Cumulative count da birinchi qiymat (0) nechta marta uchragan bo'lsa, countArray[0] aynan o'sha songa (2 ga) teng bo'ladi."
      },
      {
        topic: "07-Mavzu",
        q: "Quyidagi algoritmlardan qaysi biri eng yomon holatda ham O(n log n) kafolatlaydi?",
        options: ["Quick Sort", "Bubble Sort", "Merge Sort va Heap Sort", "Insertion Sort"],
        answer: 2,
        exp: "Merge Sort va Heap Sort ning Best, Average va Worst holatlari barchasi O(n log n) ga teng."
      },
      {
        topic: "07-Mavzu",
        q: "Quick Sort da tayanch element qanday ataladi?",
        options: ["Root", "Gap", "Pivot", "Frame"],
        answer: 2,
        exp: "Quick Sort da tanlangan tayanch element 'pivot' deb ataladi."
      },
      {
        topic: "08-Mavzu",
        q: "3! (3 faktorial) qiymati nechaga teng?",
        options: ["3", "6", "9", "27"],
        answer: 1,
        exp: "3! = 3 × 2 × 1 = 6."
      },
      {
        topic: "08-Mavzu",
        q: "Big-O da n=1000 bo'lganda O(1) algoritm nechta shartli birlik ish bajaradi?",
        options: ["1000", "10", "1", "1000000"],
        answer: 2,
        exp: "O(1) Constant Time kirish hajmi n ga bog'liq emas!"
      }
    ]
  },

  // ========================== VARIANT 14 ==========================
  {
    variant: 14,
    title: "14-Variant: Aralash Amaliy Topshiriqlar",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Graf va Gipergraf o'rtasidagi farq nimada?",
        options: ["Grafda qirralar binar (2 tugunni bog'laydi), gipergrafda 2+ turli tartibdagi munosabatlar mavjud", "Grafda tugun bo'lmaydi", "Gipergraf chiziqli tuzilma", "Farqi yo'q"],
        answer: 0,
        exp: "01-mavzu 11-slayd: Grafda bitta binar munosabat, Gipergrafda ikki yoki undan ortiq turli tartibdagi munosabatlar."
      },
      {
        topic: "02-Mavzu",
        q: "Lokal o'zgaruvchilar va funksiya parametrlari xotiraning qaysi qismida saqlanadi?",
        options: ["Heap", "Stack", "Program Code", "Disk"],
        answer: 1,
        exp: "Lokal o'zgaruvchilar va funksiyalar Stack segmentida saqlanadi."
      },
      {
        topic: "03-Mavzu",
        q: "C++ da int A[5] = {10, 30, 20, 40, 50}; massivida A[2] qiymati nechaga teng?",
        options: ["10", "30", "20", "40"],
        answer: 2,
        exp: "Indekslash 0 dan boshlanadi: A[0]=10, A[1]=30, A[2]=20."
      },
      {
        topic: "04-Mavzu",
        q: "fib(4) rekursiv daraxtida jami nechta funksiya chaqiruvi (tugun) hosil bo'ladi?",
        options: ["4 ta", "5 ta", "9 ta", "16 ta"],
        answer: 2,
        exp: "04-mavzu 10-slayddagi fib(4) daraxtini sanasak: f(4), f(3), f(2), f(2), f(1), f(1), f(0), f(1), f(0) — jami 9 ta chaqiruv!"
      },
      {
        topic: "05-Mavzu",
        q: "2D massiv baholar = [[70, 85, 90], [80, 75, 95], [85, 90, 70]] da 85 ballni topishda birinchi natija qaysi (1-indeksli talaba va fan)?",
        options: ["1-talaba 1-fandan", "1-talaba 2-fandan", "2-talaba 1-fandan", "3-talaba 3-fandan"],
        answer: 1,
        exp: "05-mavzu 30-slayd vazifasi: i=0 (1-talaba), j=1 (2-fan) da baholar[0][1] = 85."
      },
      {
        topic: "06-Mavzu",
        q: "Bubble Sort da o'zlashtirish/almashtirishlar soni ko'p bo'lishiga qaramay nima uchun o'rgatiladi?",
        options: ["Katta ma'lumotlarda eng tezkor bo'lgani uchun", "Sikl, massiv va swap mantiqini tushunish uchun eng sodda poydevor bo'lgani uchun", "Xotirasi O(n²) bo'lgani uchun", "Faqat GPU da ishlagani uchun"],
        answer: 1,
        exp: "Bubble Sort o'quv maqsadlarida sikllar, massiv va swap mantiqini tushunishda juda qulay."
      },
      {
        topic: "07-Mavzu",
        q: "Heap Sort g'oyasi jihatidan qaysi sodda saralash algoritmiga o'xshaydi?",
        options: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Radix Sort"],
        answer: 2,
        exp: "Har ikkisi ham har qadamda eng katta (yoki eng kichik) elementni tanlab joyiga qo'yadi, lekin Heap Sort Max Heap dan foydalanadi."
      },
      {
        topic: "07-Mavzu",
        q: "Shell Sort da massiv elementlari soni 100 bo'lsa, birinchi gap (d1 = n // 2) nechaga teng?",
        options: ["10", "25", "50", "100"],
        answer: 2,
        exp: "100 // 2 = 50."
      },
      {
        topic: "08-Mavzu",
        q: "Quyidagi algoritmlardan qaysi biri O(1) vaqtda element qo'shish/topish imkoniyatiga eng yaqin?",
        options: ["Linear Search", "Hash Search (Hash Table)", "Bubble Sort", "Selection Sort"],
        answer: 1,
        exp: "Hash Search o'rtacha O(1) vaqtda elementni topadi."
      },
      {
        topic: "08-Mavzu",
        q: "Asimptotik tahlilda f(n) = 5n² + 100n + 50 funksiyaning Big-O bahosi qanday yoziladi?",
        options: ["O(5n²)", "O(100n)", "O(n²)", "O(n³)"],
        answer: 2,
        exp: "Big-O da konstantalar va kichik darajali hadlar tashlab yuboriladi, eng tez o'sadigan had qoladi: O(n²)."
      }
    ]
  },

  // ========================== VARIANT 15 ==========================
  {
    variant: 15,
    title: "15-Variant: Yakuniy Imtihon (Barcha 8 Mavzu Bo'yicha)",
    questions: [
      {
        topic: "01-Mavzu",
        q: "Yangilash (Update) amali dasturlash tilida asosan qaysi operator yordamida amalga oshiriladi?",
        options: ["Tenglashtirish (o'zlashtirish) operatori", "delete operatori", "sizeof operatori", "return operatori"],
        answer: 0,
        exp: "01-mavzu 15-slayd: Yangilash amali maxsus operator (tenglashtirish operatori =) yordamida bajariladi."
      },
      {
        topic: "02-Mavzu",
        q: "union myUnion { int i; float f; char str[20]; } U_1; xotirada kamida necha bayt joy egallaydi?",
        options: ["28 bayt", "20 bayt", "4 bayt", "1 bayt"],
        answer: 1,
        exp: "union xotira hajmi uning eng katta maydoni (char str[20] = 20 bayt) hajmiga teng."
      },
      {
        topic: "03-Mavzu",
        q: "STL da 'priority_queue' qaysi turdagi konteyner hisoblanadi?",
        options: ["Chiziqli asosiy konteyner", "Assotsiativ konteyner", "Xosila konteyner (ustuvor navbat)", "Iterator"],
        answer: 2,
        exp: "03-mavzu 8-slayd: stack, queue, priority_queue — Xosila konteynerlar."
      },
      {
        topic: "04-Mavzu",
        q: "Quyidagilardan qaysi biri Stack Frame (Activation Record) tarkibiga KIRMAYDI?",
        options: ["Funksiya parametrlari", "Lokal o'zgaruvchilar", "Qaytish manzili (Return Address)", "Boshqa dasturlarning Heap xotirasi"],
        answer: 3,
        exp: "Stack Frame da faqat shu funksiyaning parametrlari, lokal o'zgaruvchilari, qaytish manzili va oraliq holati saqlanadi."
      },
      {
        topic: "05-Mavzu",
        q: "100 ta elementli massivda chiziqli qidiruvning eng yomon holati nechta taqqoslash bajaradi?",
        options: ["1 ta", "7 ta", "10 ta", "100 ta"],
        answer: 3,
        exp: "Element oxirida bo'lsa yoki umuman bo'lmasa, Linear Search barcha N = 100 ta elementni tekshiradi."
      },
      {
        topic: "06-Mavzu",
        q: "Bubble Sort, Selection Sort, Insertion Sort va Pancake Sort algoritmlarining barchasi uchun umumiy Space Complexity nechaga teng?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        answer: 2,
        exp: "06-mavzu Comparison Table ga ko'ra ushbu 4 ta algoritmning barchasi joyida saralaydi: Space Complexity = O(1)."
      },
      {
        topic: "07-Mavzu",
        q: "Merge Sort da [27, 38] va [9, 43] ro'yxatlarini birlashtirishda eng birinchi bo'lib result ga qaysi son qo'shiladi?",
        options: ["27", "38", "9", "43"],
        answer: 2,
        exp: "left[0]=27 va right[0]=9 taqqoslanadi: 9 kichik bo'lgani uchun birinchi bo'lib result ga 9 qo'shiladi."
      },
      {
        topic: "07-Mavzu",
        q: "Quick Sort algoritmining o'rtacha Space Complexity (rekursiya steki xotirasi) qancha?",
        options: ["O(1)", "O(log n)", "O(n²)", "O(n!)"],
        answer: 1,
        exp: "07-mavzu slaydida: Quick Sort — Best/Avg Time O(n log n), Space Complexity O(log n)."
      },
      {
        topic: "08-Mavzu",
        q: "Quyidagi o'sish tartiblaridan qaysi biri TO'G'RI (eng tezdan eng sekingacha)?",
        options: [
          "O(1) < O(n) < O(log n) < O(n²) < O(2^n)",
          "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n) < O(n!)",
          "O(log n) < O(1) < O(n log n) < O(n) < O(n!)",
          "O(n!) < O(2^n) < O(n²) < O(n) < O(1)"
        ],
        answer: 1,
        exp: "08-mavzu 'Complexity Order (Best -> Worst)' jadvalidagi aniq tartib: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n) < O(n!)."
      },
      {
        topic: "08-Mavzu",
        q: "n = 1000 bo'lganda O(n) va O(n²) amallar soni qanday farqlanadi?",
        options: ["1 000 va 1 000 000", "100 va 10 000", "1 000 va 2 000", "10 va 100"],
        answer: 0,
        exp: "08-mavzu jadvalidagi aniq qiymatlar: n=1000 da O(1)=1, O(n)=1 000, O(n²)=1 000 000."
      }
    ]
  }
];

export type Language = keyof typeof uiTranslations;

export const languageNames = {
  english: 'English',
  french: 'Français',
  german: 'Deutsch',
  czech: 'Čeština',
  dutch: 'Nederlands',
  indonesian: 'Bahasa Indonesia',
  arabic: 'العربية',
  romanian: 'Română',
  vietnamese: 'Tiếng Việt',
  italian: 'Italiano',
  latin: 'Latina',
  polish: 'Polski',
  portuguese: 'Português',
  spanish: 'Español'
} as const;

export const dayTranslations = {
  english: {
    sunday: 'Sunday',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday'
  },
  latin: {
    sunday: 'Dominica',
    monday: 'Feria II',
    tuesday: 'Feria III',
    wednesday: 'Feria IV',
    thursday: 'Feria V',
    friday: 'Feria VI',
    saturday: 'Sabbato'
  },
  spanish: {
    sunday: 'Domingo',
    monday: 'Lunes',
    tuesday: 'Martes',
    wednesday: 'Miércoles',
    thursday: 'Jueves',
    friday: 'Viernes',
    saturday: 'Sábado'
  },
  portuguese: {
    sunday: 'Domingo',
    monday: 'Segunda-feira',
    tuesday: 'Terça-feira',
    wednesday: 'Quarta-feira',
    thursday: 'Quinta-feira',
    friday: 'Sexta-feira',
    saturday: 'Sábado'
  },
  italian: {
    sunday: 'Domenica',
    monday: 'Lunedì',
    tuesday: 'Martedì',
    wednesday: 'Mercoledì',
    thursday: 'Giovedì',
    friday: 'Venerdì',
    saturday: 'Sabato'
  },
  polish: {
    sunday: 'Niedziela',
    monday: 'Poniedziałek',
    tuesday: 'Wtorek',
    wednesday: 'Środa',
    thursday: 'Czwartek',
    friday: 'Piątek',
    saturday: 'Sobota'
  },
  french: {
    sunday: 'Dimanche',
    monday: 'Lundi',
    tuesday: 'Mardi',
    wednesday: 'Mercredi',
    thursday: 'Jeudi',
    friday: 'Vendredi',
    saturday: 'Samedi'
  },
  german: {
    sunday: 'Sonntag',
    monday: 'Montag',
    tuesday: 'Dienstag',
    wednesday: 'Mittwoch',
    thursday: 'Donnerstag',
    friday: 'Freitag',
    saturday: 'Samstag'
  },
  czech: {
    sunday: 'Neděle',
    monday: 'Pondělí',
    tuesday: 'Úterý',
    wednesday: 'Středa',
    thursday: 'Čtvrtek',
    friday: 'Pátek',
    saturday: 'Sobota'
  },
  dutch: {
    sunday: 'Zondag',
    monday: 'Maandag',
    tuesday: 'Dinsdag',
    wednesday: 'Woensdag',
    thursday: 'Donderdag',
    friday: 'Vrijdag',
    saturday: 'Zaterdag'
  },
  indonesian: {
    sunday: 'Minggu',
    monday: 'Senin',
    tuesday: 'Selasa',
    wednesday: 'Rabu',
    thursday: 'Kamis',
    friday: 'Jumat',
    saturday: 'Sabtu'
  },
  arabic: {
    sunday: 'الأحد',
    monday: 'الإثنين',
    tuesday: 'الثلاثاء',
    wednesday: 'الأربعاء',
    thursday: 'الخميس',
    friday: 'الجمعة',
    saturday: 'السبت'
  },
  romanian: {
    sunday: 'Duminică',
    monday: 'Luni',
    tuesday: 'Marți',
    wednesday: 'Miercuri',
    thursday: 'Joi',
    friday: 'Vineri',
    saturday: 'Sâmbătă'
  },
  vietnamese: {
    sunday: 'Chủ Nhật',
    monday: 'Thứ Hai',
    tuesday: 'Thứ Ba',
    wednesday: 'Thứ Tư',
    thursday: 'Thứ Năm',
    friday: 'Thứ Sáu',
    saturday: 'Thứ Bảy'
  }
} as const;

export const uiTranslations = {
  english: {
    siteTitle: 'Auxilium Christianorum Prayers',
    selectLanguage: 'Select Language',
    dailyPrayers: 'Daily Prayers',
    prayersFor: 'Prayers for',
    conclusion: 'Conclusion',
    loading: 'Loading...',
    error: 'Error loading prayers',
    today: 'Today',
    createdWithDevotion: 'Created with devotion for the members of Auxilium Christianorum',
    notAffiliated: 'Not affiliated with the official Auxilium Christianorum',
    disclaimer: 'Disclaimer',
    disclaimerText: 'This is not an official website of the Auxilium Christianorum. This website is a personal project created to facilitate the daily prayers of the association. For official information, please visit'
  },
  latin: {
    siteTitle: 'Preces Auxilii Christianorum',
    selectLanguage: 'Eligere Linguam',
    dailyPrayers: 'Preces Cotidianæ',
    prayersFor: 'Preces pro',
    conclusion: 'Conclusio',
    loading: 'Exspectare...',
    error: 'Error in precibus onerandis',
    today: 'Hodie',
    createdWithDevotion: 'Cum devotione pro sodalibus Auxilii Christianorum creatum',
    notAffiliated: 'Non consociatum cum officiali Auxilio Christianorum',
    disclaimer: 'Monitum',
    disclaimerText: 'Hic non est situs interretialis officialis Auxilii Christianorum. Hic situs est opus personale creatum ad facilitandas preces cotidianas sodalitatis. Pro informatione officiali, quæso visita'
  },
  spanish: {
    siteTitle: 'Oraciones del Auxilium Christianorum',
    selectLanguage: 'Seleccionar Idioma',
    dailyPrayers: 'Oraciones Diarias',
    prayersFor: 'Oraciones para',
    conclusion: 'Conclusión',
    loading: 'Cargando...',
    error: 'Error al cargar las oraciones',
    today: 'Hoy',
    createdWithDevotion: 'Creado con devoción para los miembros del Auxilium Christianorum',
    notAffiliated: 'No afiliado con el Auxilium Christianorum oficial',
    disclaimer: 'Aviso',
    disclaimerText: 'Este no es un sitio web oficial del Auxilium Christianorum. Este sitio web es un proyecto personal creado para facilitar las oraciones diarias de la asociación. Para información oficial, por favor visite'
  },
  portuguese: {
    siteTitle: 'Orações do Auxilium Christianorum',
    selectLanguage: 'Selecionar Idioma',
    dailyPrayers: 'Orações Diárias',
    prayersFor: 'Orações para',
    conclusion: 'Conclusão',
    loading: 'Carregando...',
    error: 'Erro ao carregar as orações',
    today: 'Hoje',
    createdWithDevotion: 'Criado com devoção para os membros do Auxilium Christianorum',
    notAffiliated: 'Não afiliado ao Auxilium Christianorum oficial',
    disclaimer: 'Aviso',
    disclaimerText: 'Este não é um site oficial do Auxilium Christianorum. Este site é um projeto pessoal criado para facilitar as orações diárias da associação. Para informações oficiais, por favor visite'
  },
  italian: {
    siteTitle: 'Preghiere dell\'Auxilium Christianorum',
    selectLanguage: 'Seleziona Lingua',
    dailyPrayers: 'Preghiere Quotidiane',
    prayersFor: 'Preghiere per',
    conclusion: 'Conclusione',
    loading: 'Caricamento...',
    error: 'Errore nel caricamento delle preghiere',
    today: 'Oggi',
    createdWithDevotion: 'Creato con devozione per i membri dell\'Auxilium Christianorum',
    notAffiliated: 'Non affiliato con l\'Auxilium Christianorum ufficiale',
    disclaimer: 'Avvertenza',
    disclaimerText: 'Questo non è un sito web ufficiale dell\'Auxilium Christianorum. Questo sito web è un progetto personale creato per facilitare le preghiere quotidiane dell\'associazione. Per informazioni ufficiali, si prega di visitare'
  },
  polish: {
    siteTitle: 'Modlitwy Auxilium Christianorum',
    selectLanguage: 'Wybierz Język',
    dailyPrayers: 'Modlitwy Codzienne',
    prayersFor: 'Modlitwy na',
    conclusion: 'Zakończenie',
    loading: 'Ładowanie...',
    error: 'Błąd podczas ładowania modlitw',
    today: 'Dziś',
    createdWithDevotion: 'Stworzone z oddaniem dla członków Auxilium Christianorum',
    notAffiliated: 'Nie jest związane z oficjalnym Auxilium Christianorum',
    disclaimer: 'Zastrzeżenie',
    disclaimerText: 'To nie jest oficjalna strona Auxilium Christianorum. Ta strona jest projektem osobistym stworzonym aby ułatwić codzienne modlitwy stowarzyszenia. Aby uzyskać oficjalne informacje, prosimy odwiedzić'
  },
  french: {
    siteTitle: 'Prières de l\'Auxilium Christianorum',
    selectLanguage: 'Sélectionner la Langue',
    dailyPrayers: 'Prières Quotidiennes',
    prayersFor: 'Prières pour',
    conclusion: 'Conclusion',
    loading: 'Chargement...',
    error: 'Erreur lors du chargement des prières',
    today: "Aujourd'hui",
    createdWithDevotion: 'Créé avec dévotion pour les membres de l\'Auxilium Christianorum',
    notAffiliated: 'Non affilié à l\'Auxilium Christianorum officiel',
    disclaimer: 'Avertissement',
    disclaimerText: 'Ceci n\'est pas un site officiel de l\'Auxilium Christianorum. Ce site est un projet personnel créé pour faciliter les prières quotidiennes de l\'association. Pour des informations officielles, veuillez visiter'
  },
  german: {
    siteTitle: 'Gebete des Auxilium Christianorum',
    selectLanguage: 'Sprache wählen',
    dailyPrayers: 'Tägliche Gebete',
    prayersFor: 'Gebete für',
    conclusion: 'Schlussgebet',
    loading: 'Laden...',
    error: 'Fehler beim Laden der Gebete',
    today: 'Heute',
    createdWithDevotion: 'Mit Hingabe für die Mitglieder des Auxilium Christianorum erstellt',
    notAffiliated: 'Nicht verbunden mit dem offiziellen Auxilium Christianorum',
    disclaimer: 'Haftungsausschluss',
    disclaimerText: 'Dies ist keine offizielle Website des Auxilium Christianorum. Diese Website ist ein persönliches Projekt, das erstellt wurde, um die täglichen Gebete der Gemeinschaft zu erleichtern. Für offizielle Informationen besuchen Sie bitte'
  },
  czech: {
    siteTitle: 'Modlitby Auxilium Christianorum',
    selectLanguage: 'Vybrat jazyk',
    dailyPrayers: 'Denní modlitby',
    prayersFor: 'Modlitby pro',
    conclusion: 'Závěr',
    loading: 'Načítání...',
    error: 'Chyba při načítání modliteb',
    today: 'Dnes',
    createdWithDevotion: 'Vytvořeno s oddaností pro členy Auxilium Christianorum',
    notAffiliated: 'Není spojeno s oficiálním Auxilium Christianorum',
    disclaimer: 'Prohlášení',
    disclaimerText: 'Toto není oficiální webové stránky Auxilium Christianorum. Tyto stránky jsou osobním projektem vytvořeným pro usnadnění každodenních modliteb společenství. Pro oficiální informace navštivte prosím'
  },
  dutch: {
    siteTitle: 'Gebeden van het Auxilium Christianorum',
    selectLanguage: 'Selecteer Taal',
    dailyPrayers: 'Dagelijkse Gebeden',
    prayersFor: 'Gebeden voor',
    conclusion: 'Slotgebed',
    loading: 'Laden...',
    error: 'Fout bij het laden van de gebeden',
    today: 'Vandaag',
    createdWithDevotion: 'Met toewijding gemaakt voor de leden van het Auxilium Christianorum',
    notAffiliated: 'Niet verbonden met het officiële Auxilium Christianorum',
    disclaimer: 'Vrijwaring',
    disclaimerText: 'Dit is geen officiële website van het Auxilium Christianorum. Deze website is een persoonlijk project dat is gemaakt om de dagelijkse gebeden van de gemeenschap te vergemakkelijken. Voor officiële informatie, bezoek alstublieft'
  },
  indonesian: {
    siteTitle: 'Doa-Doa Auxilium Christianorum',
    selectLanguage: 'Pilih Bahasa',
    dailyPrayers: 'Doa Harian',
    prayersFor: 'Doa untuk',
    conclusion: 'Penutup',
    loading: 'Memuat...',
    error: 'Gagal memuat doa-doa',
    today: 'Hari Ini',
    createdWithDevotion: 'Dibuat dengan penuh bakti untuk anggota Auxilium Christianorum',
    notAffiliated: 'Tidak berafiliasi dengan Auxilium Christianorum resmi',
    disclaimer: 'Penyangkalan',
    disclaimerText: 'Ini bukan situs web resmi Auxilium Christianorum. Situs web ini adalah proyek pribadi yang dibuat untuk memudahkan doa harian persekutuan. Untuk informasi resmi, silakan kunjungi'
  },
  arabic: {
    siteTitle: 'صلوات الأوكسيليوم كريستيانوروم',
    selectLanguage: 'اختر اللغة',
    dailyPrayers: 'الصلوات اليومية',
    prayersFor: 'صلوات من أجل',
    conclusion: 'الختام',
    loading: 'جاري التحميل...',
    error: 'حدث خطأ أثناء تحميل الصلوات',
    today: 'اليوم',
    createdWithDevotion: 'تم إنشاؤه بإخلاص لأعضاء الأوكسيليوم كريستيانوروم',
    notAffiliated: 'غير تابع للأوكسيليوم كريستيانوروم الرسمي',
    disclaimer: 'إخلاء مسؤولية',
    disclaimerText: 'هذا ليس الموقع الرسمي للأوكسيليوم كريستيانوروم. هذا الموقع هو مشروع شخصي تم إنشاؤه لتسهيل الصلوات اليومية للجمعية. للحصول على معلومات رسمية، يرجى زيارة'
  },
  romanian: {
    siteTitle: 'Rugăciunile Auxilium Christianorum',
    selectLanguage: 'Selectează Limba',
    dailyPrayers: 'Rugăciuni Zilnice',
    prayersFor: 'Rugăciuni pentru',
    conclusion: 'Încheiere',
    loading: 'Se încarcă...',
    error: 'Eroare la încărcarea rugăciunilor',
    today: 'Astăzi',
    createdWithDevotion: 'Creat cu devoțiune pentru membrii Auxilium Christianorum',
    notAffiliated: 'Nu este afiliat cu Auxilium Christianorum oficial',
    disclaimer: 'Declinare de răspundere',
    disclaimerText: 'Acesta nu este un site oficial al Auxilium Christianorum. Acest site este un proiect personal creat pentru a facilita rugăciunile zilnice ale asociației. Pentru informații oficiale, vă rugăm să vizitați'
  },
  vietnamese: {
    siteTitle: 'Kinh Nguyện Auxilium Christianorum',
    selectLanguage: 'Chọn Ngôn Ngữ',
    dailyPrayers: 'Kinh Nguyện Hằng Ngày',
    prayersFor: 'Kinh Nguyện Cho',
    conclusion: 'Kết Thúc',
    loading: 'Đang tải...',
    error: 'Lỗi khi tải kinh nguyện',
    today: 'Hôm Nay',
    createdWithDevotion: 'Được tạo ra với lòng sùng kính dành cho các thành viên của Auxilium Christianorum',
    notAffiliated: 'Không liên kết với Auxilium Christianorum chính thức',
    disclaimer: 'Tuyên bố miễn trừ trách nhiệm',
    disclaimerText: 'Đây không phải là trang web chính thức của Auxilium Christianorum. Trang web này là một dự án cá nhân được tạo ra để tạo điều kiện thuận lợi cho việc đọc kinh hằng ngày của hội. Để biết thông tin chính thức, vui lòng truy cập'
  }
} as const; 
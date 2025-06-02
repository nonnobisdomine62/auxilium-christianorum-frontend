export type Language = keyof typeof uiTranslations;

export const languageNames = {
  english: 'English',
  french: 'Français',
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
  }
} as const; 
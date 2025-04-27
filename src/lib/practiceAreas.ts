export interface PracticeArea {
  slug: string;
  title: string;
  description: string;
  content: React.ReactNode;
}

export const practiceAreas = [
  {
    slug: 'dreptul-insolventei',
    title: 'Dreptul Insolvenței',
    description: 'Consultanță și reprezentare juridică în proceduri de insolvență și faliment',
    content: [
      'Cerere de deschidere a procedurii insolventei formulată de creditor',
      'Cerere de deschidere a procedurii insolventei formulată de debitor',
      'Acţiune în anularea hotărârii adunării creditorilor',
      'Acţiune în atragerea raspunderii administratorului special',
      'Acţiune în despagubiri(în situaţia în care un contract a fost denunţat de administratorul judiciar/lichidatorul judiciar)',
      'Acţiune privind atragerea răspunderii membrilor organelor de conducere pentru suportarea unei părţi din pasivul debitorului persoană juridică',
      'Cerere de admitere a creanţei la masa credală',
      'Cerere de deschidere a procedurii de faliment pentu neachitarea creanţelor curente(formulată de creditor in perioada de observaţie)',
      'Cerere de deschidere a procedurii de faliment pentru nerealizarea planului de reorganizare',
      'Cerere de înlocuire a membrilor comitetului creditorilor',
      'Cerere de înlocuire judiciară a administratorului judiciar/lichidatorului',
      'Cerere de instituire de măsuri asiguratorii',
      'Cerere de plată(a creantei născute după data deschiderii procedurii, în perioada de observaţie sau de reorganizare)',
      'Cerere de ridicare a dreptului de administrare si pentru intrarea în procedura falimentului',
      'Cerere de ridicare a suspendării acţiunilor judiciare şi extrajudiciare pentru realizarea creanţelor asupra debitorului si valorificarea inediată a bunului supus garanţiei',
      'Cerere de suspendare a operaţiuni de înstrăinare a bunurilor din averea debitorului –  creditor prin ordonanţă preşedinţială',
      'Cerere de suspendare provizorie a executărilor silite',
      'Cerere de suspendare provizorie a urmăririlor silite individuale(formulate de debitorul participant la procedura concordatului preventiv)',
      'Contestaţie împotriva deciziei comitetului creditorilor',
      'Contestaţie împotriva desemnării administratorului judiciar',
      'Contestatie împotriva măsurilor luate de administratorul judiciar/lichidator',
      'Contestaţie împotriva propunerii de valorificare de bunuri',
      'Contestaţie împotriva tabelului preliminar/suplimentar al creanţelor',
      'Contestaţie formulată de debitor  la cererea de deschidere a procedurii insolventei',
      'Obiectiuni împotriva raportului de evaluare',
      'Opoziţie împotriva încheierii de deschidere a procedurii insolventei la cererea debitorului',
      'Cerere de apel(apelul creditorului/creditorilor) impotriva sentintei prin care este respinsa opozitia',
      'Cerere de apel(apelul debitorului)impotriva sentintei prin care se revoca incheierea de deschidere a procedurii insolventei',
    ]
  },
  {
    slug: 'dreptul-contencios-administrativ-si-fiscal',
    title: 'Dreptul Contencios Administrativ și Fiscal',
    description: 'Servicii juridice în dispute cu autoritățile publice și în materie fiscală',
    content: [
      'Anulare/contestare procese verbale de control, rapoarte de inspectie fiscală şi decizii de impunere referitoare la taxe, impozite, accize, TVA',
      'Suspendare executare silită',
      'Anulare acte administrative',
      'Obligare autorităţilor la emiterea unor diferite acte',
      'Consultanţă fiscalitate',
      'Actiuni întemeiate pe liberul acces la informaţiile de interes public',
      'Acţiuni obţinere dobânzi fiscale pentru returnarea cu întârziere a TVA-ului',
      'Contestare procese verbale intocmite de ANAF Antifraudă',
      'Contestaţii poprire cont, sechestru, etc.',
    ]
  },
  {
    slug: 'drept-comercial',
    title: 'Drept Comercial',
    description: 'Consultanță și asistență juridică pentru afaceri și societăți comerciale',
    content: [
      'Asistarea clienţilor la încheierea contractelor comerciale, concilieri, negocieri',
      'Infiintări, dizolvări, lichidari, modificări societăţi comerciale(S.R.L.), Intreprinderi Individuale(I. I.), Intreprinderi Familiale(I.F.), Persoană Fizică Autorizată(P.F.A)',
      'Consultanţă, asistenţă şi reprezentare juridică în faţa instanţelor judecătoreşti, organelor de control, autorităţi publice',
      'Asistenţă juridică permanentă societăţi comerciale',
      'Verificări solvabilitate, actionariat, asociaţi, sediu social societăţi comerciale',
      'Recuperări debite şi creanţe',
      'Redactarea contractelor',
      'Somaţii de plată, ordonanţe de plată, etc.',
    ]
  },
  {
    slug: 'drept-contraventional',
    title: 'Drept Contravențional',
    description: 'Reprezentare în cazuri de plângeri contravenționale și apărare împotriva sancțiunilor',
    content: [
      'Consultanţă, asistenţă şi reprezentare juridică referitor la plângeri contraventionale privind:',
      'Regimul circulaţiei:',
      '- Anulare proces verbal de contravenţie (viteză, neacordare prioritate)',
      '- Inlocuire amendă/puncte de penalizare cu avertisment',
      '- Inlăturare sancţiune masură suspendare permis de conducere',
      '- Restituire permis de conducere',
      '- Contestaţii la executare',
      '- Daune morale în procese având ca obiect accidente de circulaţie',
      '- Obţinere certificate de grefă',
      'Roviniete:',
      '- Plângeri contravenţionale lipsă rovinietă',
      'Plângeri contravenţionale împotriva proceselor verbale întocmite de Garda Naţională de Mediu',
      'Plângeri contravenţionale împotriva proceselor verbale întocmite de Direcţia Generală a Vămilor',
      'Plângeri contravenţionale împotriva proceselor verbale întocmite de Comisariatele Judetene pentru Protecţia Consumatorilor',
      'Plângeri contravenţionale împotriva proceselor verbale întocmite de Inspectoratele Teritoriale de Muncă(ITM)',
      'Plângeri contravenţionale împotriva proceselor verbale întocmite de POLITIE, JANDARMERIE, etc.',
    ]
  },
  {
    slug: 'dreptul-familiei',
    title: 'Dreptul Familiei',
    description: 'Asistență juridică în aspecte legate de familie, divorț, custodie și pensie alimentară',
    content: [
      'Divorţ pentru cetateni romani cu domiciliul in Romania Uniunea Europeana',
      'Divort prin acordul părţilor/vina comuna/exclusivă a unei dintre părţi',
      'Incredinţare si reîncredinţare minori din căsătorie/afara căsătoriei',
      'Stabilire şi modificare cuantum pensie de întreţinere pentru minor',
      'Obtinere pensie de intretinere din strainatate',
      'Plangere penala pentru neplata pensiei de intretinere - abandon de familie',
      'Stabilire, extindere sau restrângere program de vizitare minor',
      'Inapoierea copilului minor de la persoanecare il detin fara nici un drept',
      'Decaderea din drepturile parintesti',
      'Recunoaştere, stabilire şi tagada paternităţii',
      'Partaj bunuri comune din căsătorie',
      'Legalizare hotărâri judecătoresti definitive si irevocabile',
      'Traducere, apostilare şi supralegalizare hotărârii judecătoresti',
      'Obţinere de duplicate după certificatele de căsătorie',
      'Obtinere certificate de nastere, celibat/cutuma, atestare a domiciliului, a cetateniei romane, cazier judiciar',
      'Rectificare acte de stare civila',
      'Inregistrare în România a căsătoriei încheiate în străinătate',
      'Inregistrare în Romania a divorţului încheiat în străinătate',
      'Atacarea/Exercitarea cailor de atac(apel, recurs) impotriva hotărârilor judecătoreşti',
    ]
  },
];

const USERS = [
  {
    id: 1,
    uuid: '83738624-ac2d-39b2-a6e8-a2bea6310334',
    firstname: 'Kris',
    lastname: 'Nolan',
    username: 'tressa21',
    password: "LGf<\\KAuLWe)IS$:'i9N",
    email: 'luciano.franecki@hudson.net',
    ip: '232.180.21.247',
    macAddress: 'C5:5A:10:E4:9C:89',
    website: 'http://kunde.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 2,
    uuid: '7a89b732-2a89-399d-aba8-c2ffe0dea493',
    firstname: 'Precious',
    lastname: 'Feil',
    username: 'stracke.alphonso',
    password: 'o_!>d0M8',
    email: 'qschowalter@hotmail.com',
    ip: '61.167.131.146',
    macAddress: 'AF:C4:0F:2F:A4:0A',
    website: 'http://steuber.info',
    image: 'https://picsum.photos/200',
  },
  {
    id: 3,
    uuid: '4854f982-d992-3c00-9e2b-4f3f82868c53',
    firstname: 'Rick',
    lastname: 'Armstrong',
    username: 'ucronin',
    password: 'WB/#;-bDW`z~b$Z',
    email: 'pacocha.linda@gmail.com',
    ip: '41.39.50.173',
    macAddress: 'DA:33:B7:B6:04:E2',
    website: 'http://okuneva.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 4,
    uuid: '795ab9f3-b935-32d4-b6bc-97ae57f96daf',
    firstname: 'Winifred',
    lastname: 'Schoen',
    username: 'mathew.christiansen',
    password: '+v7uLR&wt>aOt5S',
    email: 'itromp@yahoo.com',
    ip: '127.156.105.198',
    macAddress: 'A2:71:CA:5B:EF:78',
    website: 'http://hickle.org',
    image: 'https://picsum.photos/200',
  },
  {
    id: 5,
    uuid: '8b53cace-b35f-3882-a767-19d7c136972f',
    firstname: 'Alysa',
    lastname: 'Parker',
    username: 'rowe.dereck',
    password: '%L(F)+U0B0#r[[',
    email: 'okeefe.ewald@pfannerstill.com',
    ip: '45.96.25.84',
    macAddress: '1D:96:17:31:69:9F',
    website: 'http://hyatt.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 6,
    uuid: '2a2bf853-3dc5-3ba5-b900-3c8d82bd3fdb',
    firstname: 'Alaina',
    lastname: 'Pagac',
    username: 'dario.veum',
    password: 'OsM)QRB4dFyVlk',
    email: 'littel.donnie@dare.org',
    ip: '22.137.62.230',
    macAddress: '11:46:7A:0E:45:67',
    website: 'http://mosciski.biz',
    image: 'https://picsum.photos/200',
  },
  {
    id: 7,
    uuid: '77783d5a-a5b6-3b1a-94db-12190ac0d819',
    firstname: 'Wellington',
    lastname: 'Kertzmann',
    username: 'ova.witting',
    password: "-\\CQDqWVF-d+#$?'`@#Z",
    email: 'roberts.hubert@jaskolski.com',
    ip: '74.118.180.124',
    macAddress: '61:2A:17:17:4A:8E',
    website: 'http://rolfson.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 8,
    uuid: '2a22ade1-0c82-382f-b15c-7efa182ce1b5',
    firstname: 'Ramona',
    lastname: 'Toy',
    username: 'xhudson',
    password: 'IH`ViR773cBsFUI',
    email: 'sunny45@gmail.com',
    ip: '161.90.98.84',
    macAddress: '77:CB:3E:88:BB:03',
    website: 'http://metz.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 9,
    uuid: '13446017-ad03-3cdb-9ce4-6ed4f6144c0c',
    firstname: 'Sherwood',
    lastname: 'Bauch',
    username: 'crooks.ida',
    password: 'Xo5(2KN\\@>?$?',
    email: 'bennie76@hotmail.com',
    ip: '118.104.176.156',
    macAddress: '53:37:4A:97:85:40',
    website: 'http://jenkins.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 19,
    uuid: 'dfb9c477-09ba-3ae0-a1aa-7107fdfda427',
    firstname: 'Mara',
    lastname: 'Kerluke',
    username: 'beverly.nader',
    password: '$Lq,,];O1&tJKt^e',
    email: 'geovany16@yahoo.com',
    ip: '8.52.118.44',
    macAddress: '13:30:6B:8D:06:BF',
    website: 'http://cassin.net',
    image: 'https://picsum.photos/200',
  },
  {
    id: 20,
    uuid: '780c92ca-4fc7-3610-9d9a-94809bc78ad5',
    firstname: 'Roscoe',
    lastname: 'DuBuque',
    username: 'tillman.liliana',
    password: 'e?r?J<*<6=V>MWmW',
    email: 'mfritsch@hotmail.com',
    ip: '93.199.0.183',
    macAddress: 'EB:AC:85:3C:8E:B7',
    website: 'http://veum.biz',
    image: 'https://picsum.photos/200',
  },
  {
    id: 21,
    uuid: '6cc9319e-5c71-3882-9f7a-c047156a1179',
    firstname: 'Hubert',
    lastname: 'Predovic',
    username: 'nayeli.leffler',
    password: 'P2y@#vE{d"P&oK0y',
    email: 'maurice02@hotmail.com',
    ip: '64.27.115.97',
    macAddress: '3F:31:E9:65:9F:BC',
    website: 'http://heller.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 22,
    uuid: '895eeb9b-02ed-30c3-8f85-aec819fcac0c',
    firstname: 'Jerrold',
    lastname: 'Halvorson',
    username: 'benedict36',
    password: 'f(gKfR`Usq!LA(fmfr@4',
    email: 'vmckenzie@yahoo.com',
    ip: '132.54.91.77',
    macAddress: '3B:3B:3C:8F:71:81',
    website: 'http://corkery.biz',
    image: 'https://picsum.photos/200',
  },
  {
    id: 23,
    uuid: '77bec512-4aa7-304c-8c42-698e4fb84290',
    firstname: 'Frank',
    lastname: 'Greenfelder',
    username: 'chadd57',
    password: 'k57hptLS>Zt[Wjzr6',
    email: 'schimmel.bria@heller.net',
    ip: '66.70.246.176',
    macAddress: 'C5:E2:73:DE:9D:1A',
    website: 'http://jones.biz',
    image: 'https://picsum.photos/200',
  },
  {
    id: 24,
    uuid: '76d7169f-7385-3606-8508-e8f4913cfe45',
    firstname: 'Jazmin',
    lastname: 'Bergstrom',
    username: 'okeefe.june',
    password: 'A`2Xo/QVVZ^Ef$oy9',
    email: 'rchristiansen@gmail.com',
    ip: '76.123.58.176',
    macAddress: 'F6:B5:63:D5:0B:0D',
    website: 'http://rogahn.biz',
    image: 'https://picsum.photos/200',
  },
  {
    id: 25,
    uuid: 'dc4ed6e4-7b79-3991-a565-5cbc4d6dfa9b',
    firstname: 'Zaria',
    lastname: 'Tremblay',
    username: 'keira.dach',
    password: ':1rP~/uVZ2BTcnP',
    email: 'bradford.mills@christiansen.com',
    ip: '178.59.221.34',
    macAddress: '0C:73:CB:79:D4:CB',
    website: 'http://walter.info',
    image: 'https://picsum.photos/200',
  },
  {
    id: 26,
    uuid: '8a680207-6eb2-34de-b5ce-ec0ee9445d7a',
    firstname: 'Daphnee',
    lastname: 'Huel',
    username: 'marvin.diego',
    password: '(,|Y:VN~f\\l(~:',
    email: 'zmccullough@miller.com',
    ip: '175.23.195.197',
    macAddress: '4F:DF:F1:F6:32:98',
    website: 'http://lemke.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 27,
    uuid: '301101e2-0834-306c-91bb-3e393e1e789e',
    firstname: 'Camille',
    lastname: 'Lebsack',
    username: 'delores.daugherty',
    password: "'3Q[F32b&/7Xk\\<=~.",
    email: 'pierce.toy@reichert.com',
    ip: '38.65.0.167',
    macAddress: '8E:83:50:2B:12:90',
    website: 'http://mcdermott.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 28,
    uuid: '929351f3-dd35-3f36-b699-2496aa472e98',
    firstname: 'Estevan',
    lastname: 'Rempel',
    username: 'kunde.crystel',
    password: '92=SpBIRxV9`',
    email: 'amelie.sipes@yahoo.com',
    ip: '206.222.40.114',
    macAddress: '0C:42:4E:91:BF:95',
    website: 'http://marks.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 29,
    uuid: '14dfab8b-4329-3990-b7d1-881f4e7a7586',
    firstname: 'Edmond',
    lastname: 'Bode',
    username: 'minerva92',
    password: 'w>y5r:rq[@[#R"8[M&pMe~Qn',
    email: 'susanna68@reichert.net',
    ip: '79.246.154.188',
    macAddress: '0A:12:DF:09:7F:9E',
    website: 'http://boyer.biz',
    image: 'https://picsum.photos/200',
  },
  {
    id: 33,
    uuid: 'dcf6a72a-b2ce-3485-9adc-dfcc41d65729',
    firstname: 'Ulices',
    lastname: 'Kunze',
    username: 'fullrich',
    password: 'cZjs-]+k>CA4VTO9/2:S',
    email: 'eziemann@yahoo.com',
    ip: '73.15.60.22',
    macAddress: '61:9E:C3:D5:8A:29',
    website: 'http://hahn.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 34,
    uuid: '35268451-f21f-302d-b57b-d0c12e522f46',
    firstname: 'Haskell',
    lastname: 'Shields',
    username: 'stark.will',
    password: '0xf{H?1',
    email: 'oluettgen@hotmail.com',
    ip: '109.241.232.245',
    macAddress: '52:C6:7E:CB:9F:85',
    website: 'http://herzog.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 35,
    uuid: 'b1914110-1d3a-3f49-83fe-ae6760cacef6',
    firstname: 'Bulah',
    lastname: 'Ullrich',
    username: 'adams.maurine',
    password: ',5$ZQ(',
    email: 'boyle.nina@bauch.org',
    ip: '205.234.203.72',
    macAddress: '47:9A:73:82:B9:59',
    website: 'http://emard.org',
    image: 'https://picsum.photos/200',
  },
  {
    id: 37,
    uuid: '7ceb6f4e-185a-38ce-b900-3f2168277f1c',
    firstname: 'Adelia',
    lastname: 'Vandervort',
    username: 'rmohr',
    password: ']#q_|Zq:g?}@rs}',
    email: 'toconnell@hotmail.com',
    ip: '117.211.53.69',
    macAddress: '3C:49:A7:D4:43:0B',
    website: 'http://hill.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 38,
    uuid: '34ed7e0b-6ee7-3f00-9e92-8b7e7cbe9aca',
    firstname: 'Caterina',
    lastname: 'Reinger',
    username: 'nettie.pfeffer',
    password: '-8v!z/C6|rsu',
    email: 'schmitt.wilson@oconner.net',
    ip: '253.13.180.23',
    macAddress: '3F:03:3F:7E:6D:FD',
    website: 'http://olson.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 39,
    uuid: '876b35c1-84e1-3020-af6e-c89f3a085b9d',
    firstname: 'Mable',
    lastname: 'Zemlak',
    username: 'kuhic.alden',
    password: 'hy3JL3xy~[|OiR`',
    email: 'okeefe.arno@boehm.com',
    ip: '203.85.221.74',
    macAddress: 'D7:6E:BC:2F:93:E7',
    website: 'http://schaefer.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 40,
    uuid: '3bf68fa6-cf53-3b77-976a-d6b918538f9d',
    firstname: 'Rowland',
    lastname: 'Durgan',
    username: 'dedrick.hyatt',
    password: "(d('M9e`{NWa.%axMYB",
    email: 'german.king@hotmail.com',
    ip: '133.80.208.51',
    macAddress: '6B:3A:E7:A4:26:CD',
    website: 'http://aufderhar.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 41,
    uuid: '12615a4f-ecda-3d2e-8265-9c59ae632799',
    firstname: 'Melvin',
    lastname: 'Brown',
    username: 'florencio.conroy',
    password: '6$QP+*XbVA',
    email: 'weissnat.lilliana@yahoo.com',
    ip: '76.85.130.158',
    macAddress: '58:53:CC:9B:0C:8D',
    website: 'http://king.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 42,
    uuid: 'fb14ad14-c483-38c8-80dc-ba003f58f0b6',
    firstname: 'Edmond',
    lastname: 'Johns',
    username: 'rhianna03',
    password: 'Yiw9BNy|"hzK\'@_C>v)',
    email: 'kreiger.cyril@wilderman.biz',
    ip: '87.101.247.184',
    macAddress: '4E:A7:2A:9C:BF:A0',
    website: 'http://anderson.info',
    image: 'https://picsum.photos/200',
  },
  {
    id: 43,
    uuid: '051dcf95-9863-36d8-b785-709c6352e5a6',
    firstname: 'Pauline',
    lastname: 'Hayes',
    username: 'gottlieb.henriette',
    password: 'n+-8ba1H72"VmjY',
    email: 'mflatley@hotmail.com',
    ip: '40.175.159.49',
    macAddress: '31:43:FC:06:33:AF',
    website: 'http://mertz.info',
    image: 'https://picsum.photos/200',
  },
  {
    id: 44,
    uuid: '8c286b80-de07-3264-b666-44b361136c19',
    firstname: 'Mattie',
    lastname: 'Kilback',
    username: 'okuneva.chloe',
    password: 'D7+RWtBpws',
    email: 'muriel14@volkman.com',
    ip: '70.172.80.207',
    macAddress: 'D2:C4:D8:D2:4A:AE',
    website: 'http://keebler.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 45,
    uuid: 'd14738de-0518-3b2c-9b1f-0d1d3086b728',
    firstname: 'Marion',
    lastname: 'Schmeler',
    username: 'olangworth',
    password: 'I[FL2Ih}.P-G/rP{E}',
    email: 'jules42@ullrich.com',
    ip: '238.163.212.82',
    macAddress: '48:74:38:CD:92:63',
    website: 'http://skiles.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 46,
    uuid: '1184c8ee-2809-3d10-b73e-ced0e20ddc6f',
    firstname: 'Ansel',
    lastname: 'Hudson',
    username: 'zlabadie',
    password: '`0$qzVx!&$l8KzcTk',
    email: 'schuyler.bartell@luettgen.info',
    ip: '192.249.245.89',
    macAddress: '99:7C:C7:BF:68:5F',
    website: 'http://mclaughlin.info',
    image: 'https://picsum.photos/200',
  },
  {
    id: 47,
    uuid: 'f88ef3c2-de4b-39e0-afd7-7ab13564ead1',
    firstname: 'Letitia',
    lastname: 'Greenholt',
    username: 'lmoen',
    password: 'pC*/X&yV~yGv',
    email: 'dejah71@gmail.com',
    ip: '250.251.176.127',
    macAddress: '19:90:05:D6:FC:38',
    website: 'http://murray.biz',
    image: 'https://picsum.photos/200',
  },
  {
    id: 48,
    uuid: '9fda5129-068c-3daa-9628-1eb0928596f5',
    firstname: 'Esperanza',
    lastname: 'Paucek',
    username: 'mireya.wiegand',
    password: '9z=wP&T',
    email: 'jessica12@beahan.info',
    ip: '79.226.41.29',
    macAddress: '9D:E3:8F:D3:3F:D3',
    website: 'http://runolfsson.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 49,
    uuid: 'fdc2d13f-eb27-3cff-a91a-ce3a137e3706',
    firstname: 'Rocio',
    lastname: 'Dickinson',
    username: 'marianne.grady',
    password: '*}dpMxRx.f>,|p&{',
    email: 'lew.abbott@hotmail.com',
    ip: '9.21.67.224',
    macAddress: '01:0C:92:07:28:34',
    website: 'http://rath.com',
    image: 'https://picsum.photos/200',
  },
  {
    id: 50,
    uuid: '23ddfbae-f820-3972-a5c4-481e8223a27b',
    firstname: 'Johnathan',
    lastname: 'Bartoletti',
    username: 'araceli21',
    password: '7*=]YafanuSD)(u\\s@',
    email: 'anahi33@langworth.com',
    ip: '174.250.108.65',
    macAddress: 'E1:4E:84:73:5E:64',
    website: 'http://turcotte.com',
    image: 'https://picsum.photos/200',
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: 'Et et nihil aut sunt.',
    description:
      'Dolores velit nihil ipsam fuga magni illo. Voluptates ut dolores maiores architecto nemo. Omnis modi ut fugit voluptatem. Aperiam fugit eveniet et est recusandae eum.',
    ean: '8416246808744',
    upc: '763466774386',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Eum at ex vel laborum autem.',
        description:
          'Sint totam doloremque aut aut illum perferendis. Consequatur laboriosam dolore facere. Vel velit facilis tenetur.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Eos tempore labore voluptas.',
        description:
          'Asperiores reiciendis omnis voluptatum aperiam. Illum non officiis similique facilis beatae doloremque ipsum. Velit minima suscipit cumque. Amet consectetur reprehenderit velit incidunt.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Esse eveniet est quia totam.',
        description:
          'Reiciendis blanditiis doloremque recusandae. Exercitationem culpa at et.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 1.5,
    taxes: 22,
    price: 1.83,
    categories: [52, 53, 54, 55, 56, 57],
    tags: [
      'doloremque',
      'inventore',
      'sequi',
      'et',
      'magnam',
      'mollitia',
      'optio',
    ],
  },
  {
    id: 2,
    name: 'Quasi quod et quidem ipsa.',
    description:
      'Omnis quas accusamus sunt quis enim. Et optio nihil dolores ut expedita omnis. A fuga at quos quia. Asperiores repellendus veniam animi.',
    ean: '1669986239751',
    upc: '213572139996',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Est excepturi magni est.',
        description:
          'Assumenda totam rerum quis voluptatem rerum facere consequatur aut. Nam expedita quaerat odio dolor eos quia. Eligendi qui maiores animi.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Rem illum ab omnis.',
        description:
          'Et saepe cumque est modi. Odit voluptatem quisquam ab magnam doloribus sint. Nemo atque vero vero tenetur impedit quia. Dolor adipisci velit consectetur natus iste rerum.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Ut eaque possimus iusto.',
        description:
          'Qui eum quo repellat officiis. Minima adipisci ut iure quos. Quisquam est est blanditiis aut voluptas iste.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 99623.87,
    taxes: 22,
    price: 121541.12,
    categories: [64, 65, 66, 67, 68],
    tags: ['in'],
  },
  {
    id: 3,
    name: 'Minus quia optio dolor.',
    description:
      'Debitis nihil pariatur reprehenderit eligendi. Dolor nisi est magnam debitis non. Et amet inventore expedita ducimus aut asperiores possimus. Quisquam aut tempore voluptatem veritatis.',
    ean: '8476771919834',
    upc: '562939845254',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Aut doloremque nobis soluta.',
        description:
          'Maxime molestiae voluptatum suscipit placeat magni. Sunt quasi nesciunt sit explicabo velit. Quae quis modi id fuga.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Sit laborum laboriosam qui.',
        description:
          'Harum provident facere velit quis iure sit. In velit voluptas occaecati debitis et.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Et iste ab culpa.',
        description:
          'Ullam labore consequuntur sint fugit sunt suscipit provident. Tempore modi vero atque numquam aut magnam eligendi. Quibusdam quia ipsum earum deleniti est libero.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 7013.06,
    taxes: 22,
    price: 8555.93,
    categories: [63, 64, 65, 66],
    tags: ['totam'],
  },
  {
    id: 4,
    name: 'Dolor eos corrupti eos aut.',
    description:
      'Voluptas vel nesciunt laborum minima dolores. Sint ut neque earum quia autem aut. At praesentium est odit aliquam eius ut et. Odit nobis aspernatur doloribus occaecati neque est autem.',
    ean: '3157018815076',
    upc: '115554992525',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Id enim voluptatem vel.',
        description:
          'Explicabo delectus quasi eum minus sed. Non neque qui quisquam molestias est cum nam. Culpa aut eveniet quod. Voluptatem consectetur deserunt earum vel distinctio.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Sit quisquam et est.',
        description:
          'Ut voluptas harum beatae ratione earum labore. Sed voluptatem et nihil magnam soluta tempora. Est aperiam dolorem quam placeat.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Iure ut assumenda possimus.',
        description:
          'Quia error dolores voluptatem sit. Aut adipisci ut voluptate et officiis voluptatem autem sunt. Vel error ea nisi sed molestiae.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 114.22,
    taxes: 22,
    price: 139.35,
    categories: [20, 21, 22, 23],
    tags: ['voluptates', 'aspernatur', 'assumenda', 'sint'],
  },
  {
    id: 5,
    name: 'Ut natus in et aut.',
    description:
      'Sunt inventore sit molestiae vitae quia. Consectetur quidem qui consequuntur quia. Dolorem provident reiciendis rerum quibusdam.',
    ean: '8684307014438',
    upc: '128691033264',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Est nulla odit eveniet aut.',
        description:
          'Consequatur recusandae ex ad cupiditate ullam rem. Iusto rerum velit quis ipsa voluptatem. Rem aliquid numquam possimus enim aut dolorem.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Qui dolorum voluptas id eum.',
        description:
          'Ad nihil in natus. Et sint reiciendis exercitationem tenetur dolorem omnis. Fugiat saepe eaque vitae adipisci nulla.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Est velit velit illo aut.',
        description:
          'Similique voluptatum velit repudiandae aut necessitatibus. Eveniet voluptas laboriosam rerum culpa blanditiis et.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 360.64,
    taxes: 22,
    price: 439.98,
    categories: [27, 28, 29, 30, 31, 32],
    tags: [
      'odio',
      'recusandae',
      'nam',
      'accusamus',
      'necessitatibus',
      'quia',
      'maxime',
      'vitae',
      'dolore',
    ],
  },
  {
    id: 6,
    name: 'Optio ut ut et.',
    description:
      'Qui porro occaecati enim saepe. Consequatur perspiciatis mollitia aut dolor. Saepe cumque rem qui quibusdam ullam est et. Aut vel optio quasi.',
    ean: '8713420247277',
    upc: '253184058083',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Beatae at voluptas quas qui.',
        description:
          'A sit voluptatem dignissimos perspiciatis. Ex praesentium non quo aut omnis.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Id beatae aspernatur placeat.',
        description:
          'Aut nihil voluptas sunt aspernatur modi a quia. Et nobis enim omnis quidem veritatis enim quia aut. Dolor veniam amet dolor non rerum quasi.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Qui sint aut eum.',
        description:
          'Repellendus suscipit saepe vitae distinctio quia. Dolore quia autem non corrupti facere distinctio velit. Neque ea velit consequatur omnis et pariatur a aliquid.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 378.23,
    taxes: 22,
    price: 461.44,
    categories: [74, 75, 76],
    tags: ['et', 'numquam', 'est', 'aut', 'illum'],
  },
  {
    id: 7,
    name: 'Id earum tempora provident.',
    description:
      'Explicabo ullam error assumenda quia. Sed voluptatem ratione aut aut. Et qui magnam nesciunt nam consequatur.',
    ean: '9418323158345',
    upc: '156388230888',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Ut ut placeat dolorem.',
        description:
          'Incidunt aut assumenda unde dicta quo iusto laboriosam nam. Libero repellendus amet deleniti ut veritatis eligendi. Natus qui aut sint corporis. Quo atque voluptas optio eos eum.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Eaque nam odit ut.',
        description:
          'Vitae non ea et quos ipsum. Quasi excepturi quae id saepe id et. Molestiae eum consequatur asperiores possimus ullam. Doloremque ipsa sunt beatae dolores suscipit magnam autem.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Eos adipisci veniam sit.',
        description:
          'Est beatae autem sequi maxime. Eos at dolor nisi. Id omnis aut aut esse quibusdam esse.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 1.15,
    taxes: 22,
    price: 1.4,
    categories: [62, 63],
    tags: ['quidem', 'placeat', 'sunt'],
  },
  {
    id: 8,
    name: 'Impedit doloribus magni eos.',
    description:
      'Dolores voluptate totam natus est. Beatae qui nostrum ut explicabo. Minima aut nihil laboriosam autem laborum nostrum.',
    ean: '1276707724856',
    upc: '800457437682',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Non placeat ut quis soluta.',
        description:
          'Non est ut deleniti consequuntur commodi. Quis asperiores aut vel qui distinctio. Ullam vel dolore nobis quasi dolores provident molestias.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'In est rem rem.',
        description:
          'Velit rerum molestias qui velit voluptatem rerum. Assumenda quae sit quos asperiores vel. Saepe sequi dolor perspiciatis exercitationem aut eveniet. Enim hic consequuntur aperiam molestiae.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Quia possimus officia hic.',
        description:
          'Dolor ducimus sequi suscipit et et rerum. Non veniam iste quae at ut. Fugit ut sapiente omnis culpa similique aut velit. Sit veniam eius accusantium corporis quia ab cum.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 121.02,
    taxes: 22,
    price: 147.64,
    categories: [39, 40, 41, 42],
    tags: ['a'],
  },
  {
    id: 9,
    name: 'Recusandae alias iusto qui.',
    description:
      'At ipsa qui placeat repudiandae illum alias at. Sunt temporibus veniam quaerat sed ut nihil. Natus id facere recusandae voluptates ut maiores voluptatem.',
    ean: '6295653046763',
    upc: '994434026940',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Et qui qui cum aspernatur.',
        description:
          'Magnam laborum facilis repellendus voluptate accusantium consequatur non. Non non expedita nihil consequatur unde ipsa. Dolorem omnis quaerat delectus.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Possimus non et totam ut id.',
        description:
          'Sint libero qui et deserunt. Doloribus velit odit quibusdam magnam.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Id est est sed ipsam iusto.',
        description:
          'Ex omnis fuga occaecati quam adipisci. Dolorem laboriosam reiciendis error dolor optio qui. Et incidunt eius quo.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 80.01,
    taxes: 22,
    price: 97.61,
    categories: [39],
    tags: [
      'quod',
      'neque',
      'numquam',
      'sed',
      'veritatis',
      'architecto',
      'est',
      'vel',
    ],
  },
  {
    id: 10,
    name: 'Dolorem minima et amet vero.',
    description:
      'Corporis nam pariatur maiores. Labore facere quia minus sed perferendis commodi nemo. Dolor iste rerum provident molestiae mollitia id.',
    ean: '8024783543136',
    upc: '397343543344',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Vero fugit laudantium est et.',
        description:
          'Doloribus aut voluptas consequatur qui. Minus consectetur dolorem quisquam velit id debitis.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Quis dolore qui optio dolor.',
        description:
          'Illo rem adipisci id. In corrupti asperiores possimus cupiditate id. Sunt autem ipsum ut odio. Tenetur accusantium repudiandae exercitationem ducimus.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Magni et molestiae ex quos.',
        description:
          'Dolores est reprehenderit aut id. Corrupti voluptas optio ab necessitatibus debitis vel tempora. Nesciunt totam illum est error quibusdam nihil consequuntur. Atque ex optio nostrum debitis sint.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 156476974.64,
    taxes: 22,
    price: 190901909.06,
    categories: [80, 81, 82, 83],
    tags: [
      'architecto',
      'repellendus',
      'voluptatibus',
      'commodi',
      'eligendi',
      'ut',
      'et',
      'repudiandae',
      'magni',
      'facere',
    ],
  },
  {
    id: 11,
    name: 'Accusantium sed iste id.',
    description:
      'Ut nihil sed repellendus voluptas dolorum. Enim amet sed dolores est dolores aliquam. Esse recusandae commodi sed omnis autem blanditiis autem vitae. Corrupti ducimus et repudiandae qui sunt.',
    ean: '8449642849035',
    upc: '050352586974',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Optio autem est saepe aut.',
        description:
          'Corrupti ad fugiat officiis aspernatur. Assumenda aliquam consectetur mollitia ea et vero. Qui illo ut animi sed reiciendis.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Ea vel velit similique.',
        description:
          'Provident beatae molestias iste rerum sit. Assumenda et ducimus rerum aut minus odio. Pariatur qui recusandae repellat ea voluptatem. Quo asperiores et veniam sed et harum.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Labore est est et.',
        description:
          'Laborum quos repudiandae ut sed vero est. Exercitationem natus quasi sunt ipsam. Sit ab ut est labore odio quasi. Laudantium illum architecto eius libero.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 41001954.49,
    taxes: 22,
    price: 50022384.48,
    categories: [55, 56, 57, 58, 59, 60, 61, 62],
    tags: [
      'impedit',
      'voluptas',
      'quod',
      'soluta',
      'reprehenderit',
      'ea',
      'et',
      'minus',
      'voluptatem',
      'voluptatem',
    ],
  },
  {
    id: 12,
    name: 'Amet quia expedita nostrum.',
    description:
      'Nihil quidem qui maiores aspernatur cupiditate aspernatur quis. Velit quaerat veritatis fugit quis doloribus. Qui corrupti corporis praesentium expedita qui non.',
    ean: '1033655349728',
    upc: '391474152209',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Eum ut sint qui aut omnis.',
        description:
          'Aut ipsum perferendis quia enim perspiciatis iure totam. Rerum vitae atque voluptate libero quidem illo quisquam. Ut nostrum dicta corrupti eius. Ipsa in vel maxime accusamus.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Quis delectus odit iste.',
        description:
          'Accusantium sequi facilis et aspernatur et. Laborum et aut eaque in tempore facilis. Qui vitae quam et iste aspernatur ratione.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Qui ipsam ut id fuga ex non.',
        description:
          'Quasi consequatur facilis voluptatem dicta ut minima in. Ut ut ut fugiat cum vitae. Occaecati cupiditate aperiam est non omnis. Laboriosam pariatur velit ad in eveniet.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 18.29,
    taxes: 22,
    price: 22.31,
    categories: [99, 100, 101, 102, 103],
    tags: ['sit', 'eaque'],
  },
  {
    id: 13,
    name: 'Dolorum nisi iusto a veniam.',
    description:
      'Quia ea laborum qui voluptates voluptatem ut sit. Voluptatum natus quia autem sit sed vel praesentium. Quae error rerum nesciunt iure repellat doloremque.',
    ean: '5804870131452',
    upc: '682208418447',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Perspiciatis at quis et ex.',
        description:
          'Fugit corrupti quia aut earum. Sit mollitia nisi ut sit. Qui necessitatibus id dolor aut distinctio fugit assumenda ipsa.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Sit iure tenetur sed.',
        description:
          'Doloribus pariatur asperiores rem sit animi. Molestias blanditiis aut quae inventore quos deleniti aut veniam. Voluptatem culpa est pariatur numquam nihil nostrum.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Qui est nam labore.',
        description:
          'Minus enim fuga praesentium consequatur. Dolor corporis ut vel dolore et est maxime. Rerum rerum beatae delectus veritatis. Nihil est perspiciatis provident quia libero qui recusandae maxime.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 16397103.1,
    taxes: 22,
    price: 20004465.78,
    categories: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
    tags: ['fugiat'],
  },
  {
    id: 14,
    name: 'Tempore quia eum tempora.',
    description:
      'Praesentium error a laudantium ipsa rerum numquam tempora et. Nisi fuga est magnam ut odit et non. Nam voluptate reiciendis quod quo officia.',
    ean: '3536428604027',
    upc: '588681182355',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Quia ullam ipsa eum est.',
        description:
          'Impedit ducimus fugit et. Harum sapiente quia dolor voluptatem. Occaecati dolor illo ab itaque iusto eos minus. Exercitationem aut et pariatur esse quidem.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Non ex est corrupti et est.',
        description:
          'Itaque molestias facilis et veniam sed. Repudiandae itaque laudantium quis maxime rerum voluptatibus eius incidunt. Totam soluta molestiae delectus accusantium qui.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Ratione error nihil mollitia.',
        description:
          'Cum voluptates sunt doloribus voluptatem. Quod magni iure et impedit est repellendus eos. Quas nemo tempore nihil eligendi. Porro et nihil harum repellat saepe quia.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 3443.55,
    taxes: 22,
    price: 4201.13,
    categories: [17],
    tags: [
      'voluptatem',
      'quasi',
      'dolor',
      'ducimus',
      'corrupti',
      'quia',
      'eius',
      'dolores',
      'aut',
    ],
  },
  {
    id: 15,
    name: 'Qui architecto error tempore.',
    description:
      'Magnam tempora in inventore aut beatae et molestias vel. Libero dolor iusto aut animi. Quas libero provident qui corrupti. Sunt vitae dolor itaque nesciunt qui eaque aspernatur.',
    ean: '6298515767509',
    upc: '298568200144',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Sed et voluptates qui.',
        description:
          'Illum accusantium odit perferendis qui aliquid accusamus. Nihil sunt qui unde dolorum. Nostrum ut fuga aut eos tempora animi perferendis molestiae.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Dicta voluptatem enim non.',
        description:
          'Qui ipsa maiores fugit sunt consequatur dicta dolor. Excepturi esse eos autem neque aut. Aut ullam qui nobis possimus. Dolorem non ut autem quis.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Quos aperiam minus eveniet.',
        description:
          'Et exercitationem sit vel dignissimos. Nisi ratione eos non ipsum. Est et temporibus eum excepturi.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 580.14,
    taxes: 22,
    price: 707.77,
    categories: [7, 8, 9, 10, 11, 12, 13, 14],
    tags: ['hic', 'deleniti', 'aut'],
  },
  {
    id: 16,
    name: 'Unde a hic maxime provident.',
    description:
      'Occaecati voluptates dolor sed eius. Doloribus ipsam perferendis animi alias nesciunt voluptatem. Ut vitae non aliquam.',
    ean: '2201425063313',
    upc: '361137638726',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Numquam magni corrupti non.',
        description:
          'Molestias quasi temporibus quos. Temporibus totam quam sint eos est dicta impedit. Voluptatem dolor suscipit tempore qui tenetur debitis. Distinctio numquam provident et dolor ea.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Rerum et at nisi.',
        description:
          'Pariatur harum dignissimos voluptas accusamus ut. Sapiente autem commodi atque quia. Quibusdam laudantium id rerum perferendis.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Ut et distinctio laboriosam.',
        description:
          'Voluptas eligendi dolorem ullam neque ut nihil. Voluptates illum velit sequi est quisquam facere qui excepturi. Qui optio voluptates soluta modi tempora voluptatem architecto.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 3.45,
    taxes: 22,
    price: 4.21,
    categories: [39],
    tags: ['distinctio', 'consequatur', 'occaecati', 'pariatur', 'accusamus'],
  },
  {
    id: 17,
    name: 'Accusamus veniam qui ut.',
    description:
      'Eum ex placeat dolorum. Iste velit itaque tempora ea architecto. Impedit illum placeat nam dolores sit aut voluptas. Labore id eius rem omnis sunt.',
    ean: '1536844785869',
    upc: '690986564519',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Harum ab illo quo et.',
        description:
          'Rerum aut non et ut quis quo ut voluptas. Architecto qui in aliquid modi. Est ut fuga voluptatem adipisci.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Non officia recusandae ipsum.',
        description:
          'Et ea ab voluptatem non est voluptatem. Unde exercitationem cupiditate dolores perferendis. Et earum suscipit exercitationem omnis tenetur rerum. Amet aut consequatur enim modi vero quibusdam.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Deserunt rerum et unde ea.',
        description:
          'Dolorem unde consequatur possimus autem atque et. Quaerat possimus rerum voluptatem et voluptatem aperiam. Sequi corrupti delectus officiis hic consequatur.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 1.87,
    taxes: 22,
    price: 2.28,
    categories: [34, 35, 36, 37, 38, 39, 40],
    tags: [
      'vitae',
      'laudantium',
      'distinctio',
      'sapiente',
      'explicabo',
      'eius',
      'amet',
      'neque',
      'id',
      'assumenda',
    ],
  },
  {
    id: 18,
    name: 'Omnis sed molestiae a magnam.',
    description:
      'Voluptatem molestias quo autem voluptate provident perferendis nobis. Vitae ratione architecto nemo odit ducimus ut quod. Eum qui in soluta sed. Possimus tenetur vero ab alias itaque ut.',
    ean: '5126724118847',
    upc: '100284858944',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Esse aut aut aut expedita.',
        description:
          'Aspernatur voluptas minus accusantium commodi commodi quia. Ut sed magnam quae consequatur et nam. Nemo dicta maiores rerum et veritatis.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Sit at rerum possimus autem.',
        description:
          'Aut optio ad eos quaerat dicta suscipit ab. Ut aperiam nemo et. In dolore quidem dolorem ea laudantium id. Dolore aperiam in at. Repellendus minus eos est. Optio et autem quos dicta recusandae.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Ex qui est at voluptas.',
        description:
          'Quisquam ut aut unde non provident. Incidunt culpa atque eos at aut. Dignissimos voluptas sapiente explicabo repellat odit perspiciatis. Non quis fugiat aut totam dolorum iure.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 1010544.22,
    taxes: 22,
    price: 1232863.95,
    categories: [49, 50, 51, 52, 53, 54, 55],
    tags: ['in', 'dignissimos', 'qui', 'itaque'],
  },
  {
    id: 19,
    name: 'In est voluptatem id.',
    description:
      'Voluptatibus dicta fuga itaque omnis odit magni. Est tenetur aperiam aut vitae recusandae. Nulla esse quis nemo illum aut fuga. Et quia animi veritatis ut eligendi.',
    ean: '7276490746084',
    upc: '877429627941',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Earum quia beatae velit.',
        description:
          'Maiores aliquam laborum sit aut autem ut. Ut molestiae sed quibusdam asperiores voluptas. Eum similique eos laborum quaerat non.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Sunt in voluptatem vero.',
        description:
          'Sequi quas nulla ducimus corporis nesciunt quae. Ut ducimus laudantium nihil ut quo. Aut aliquam tempora eveniet nulla explicabo.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Ut aut deserunt quia ipsam.',
        description:
          'Mollitia laboriosam nisi laboriosam voluptate beatae. Fugit qui odio provident explicabo. Distinctio laboriosam deleniti id. Consectetur nihil consequuntur ut optio repellendus et.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 1923718.18,
    taxes: 22,
    price: 2346936.18,
    categories: [71, 72, 73, 74, 75, 76, 77, 78, 79],
    tags: ['modi', 'voluptatibus', 'ea'],
  },
  {
    id: 20,
    name: 'Nesciunt magnam in id.',
    description:
      'Nihil commodi aut accusamus nesciunt beatae ipsam qui sit. In quae omnis excepturi ratione. Culpa aliquam placeat enim. Minima et delectus ea dolor.',
    ean: '3480146285887',
    upc: '649066839652',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Omnis eius quis culpa.',
        description:
          'Laudantium architecto non fuga asperiores distinctio voluptatibus voluptatem. Aperiam deserunt tempora consequatur aut. Perferendis optio qui dolores velit. Non minima nisi et nobis quod.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Saepe sed ipsa rerum.',
        description:
          'Beatae a rerum aut tempore enim laborum itaque. Nihil tenetur quia in maiores eos omnis commodi. Nam facere et quis rerum atque amet aut.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Nihil vitae nisi sit natus.',
        description:
          'Rem exercitationem aliquam enim id temporibus esse et enim. Dolorem perferendis unde quis molestias impedit.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 609601.02,
    taxes: 22,
    price: 743713.24,
    categories: [20, 21, 22, 23, 24, 25, 26],
    tags: [
      'veniam',
      'et',
      'esse',
      'veritatis',
      'ea',
      'consectetur',
      'sit',
      'molestiae',
    ],
  },
  {
    id: 21,
    name: 'Eum modi et ratione tenetur.',
    description:
      'Omnis impedit excepturi officia deserunt dolor ullam. Atque eos laborum quo. Et ipsum voluptates quia iusto. Modi id nihil similique reiciendis libero.',
    ean: '8568609583932',
    upc: '191073537938',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Error ut nihil est molestias.',
        description:
          'A non sequi sint quisquam. Distinctio et sint alias veritatis vel sit dolore fuga. Quo illum voluptas voluptas molestias ducimus minima.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Tempore tenetur culpa sint.',
        description:
          'Exercitationem velit molestiae et facere est dolorum. Omnis fugit ipsam perspiciatis rem ea nihil. Rerum doloribus sed enim expedita laborum necessitatibus. Fugiat iusto qui quia sit.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Delectus ipsa numquam nam.',
        description:
          'Adipisci placeat laudantium nemo rerum. Enim et amet et qui accusantium quae ut. Quo quia qui aperiam in. Modi voluptas magnam fugit quaerat atque non.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 6217629.42,
    taxes: 22,
    price: 7585507.89,
    categories: [60, 61],
    tags: ['ad', 'omnis', 'et', 'asperiores', 'libero', 'nulla', 'quia'],
  },
  {
    id: 22,
    name: 'Omnis laboriosam et modi.',
    description:
      'Fugiat enim dicta officiis ut dolor. Debitis recusandae minus est mollitia praesentium eaque. Natus pariatur et quia ut velit iure nobis. Ex praesentium aut tenetur et.',
    ean: '2776769044361',
    upc: '656487723587',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Animi ut enim velit facilis.',
        description:
          'Facere exercitationem sit blanditiis eligendi id. Corporis libero debitis molestiae enim. Tempora est alias magni veniam.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Quasi quia et doloribus aut.',
        description:
          'Nobis voluptas ea veniam eaque consequuntur dolore. Maxime aut sit consequatur et. Consequatur suscipit praesentium sed distinctio dolorum cum voluptates.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Qui a aut dolore ab.',
        description:
          'Enim fugit consequatur aut officiis saepe culpa velit. Et officiis laboriosam numquam occaecati aut quos. Saepe atque assumenda neque.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 2.64,
    taxes: 22,
    price: 3.22,
    categories: [9],
    tags: ['dolor'],
  },
  {
    id: 23,
    name: 'Ipsam dolor nam eligendi aut.',
    description:
      'Et maxime incidunt corrupti et. Vel cum non quos nihil. Pariatur quo beatae quia sunt. Iste ut harum possimus maxime et. Ad laboriosam laudantium ratione aut ea quia.',
    ean: '6477046613589',
    upc: '618281934885',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Iste odit nihil aut et.',
        description:
          'Consequuntur culpa rerum rem voluptatem porro iusto sit. Ipsum velit voluptatem quas voluptates quo. Placeat et quas consequatur.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Sunt neque iste est quia ad.',
        description:
          'Nostrum tempore labore repellat velit et ut et. Voluptatum adipisci aliquam vel ut. Ut delectus iusto et optio.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Dolorem minima dolores qui.',
        description:
          'Ipsum aliquam id et omnis debitis. A ullam perferendis nam. Deserunt sunt in velit consectetur ipsum delectus. Expedita quidem quo eum architecto neque minus sit.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 22050.84,
    taxes: 22,
    price: 26902.02,
    categories: [41, 42, 43],
    tags: ['tempora', 'maxime'],
  },
  {
    id: 24,
    name: 'Sed porro nam et eius.',
    description:
      'Adipisci aut veritatis id voluptates officia. Pariatur et sunt voluptatem odit facere. Cumque sed consequuntur quas id repudiandae voluptatem voluptas. Suscipit et et numquam harum dolorem illo nam.',
    ean: '3251653129656',
    upc: '594888805415',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Assumenda non corporis quam.',
        description:
          'Et sunt eveniet ad dicta. Quia earum animi sit quo repellendus delectus ipsa. Quia veritatis quae dolore. Unde odit deserunt deleniti.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Commodi at aut nisi nisi rem.',
        description:
          'At dignissimos mollitia placeat nostrum. Aut quidem modi eaque et. Nisi minima et sequi omnis dolore. Repellendus odit hic nam sit eveniet.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Eius qui numquam fugit.',
        description:
          'Quia ducimus aliquid id itaque. Corrupti soluta ut recusandae eum ad nam est. Vel animi vero sit culpa.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 199571.16,
    taxes: 22,
    price: 243476.82,
    categories: [64, 65, 66, 67, 68, 69, 70, 71],
    tags: ['numquam', 'et', 'dolore', 'fuga', 'nihil', 'inventore', 'omnis'],
  },
  {
    id: 25,
    name: 'At est eum vero voluptas.',
    description:
      'Quos ipsam molestiae in et. Cumque tempora cumque maiores voluptatum et consequuntur adipisci.',
    ean: '0560592059300',
    upc: '620195160493',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Nihil harum velit expedita.',
        description:
          'Possimus blanditiis dolor eaque velit et et. Pariatur qui laborum ipsum beatae repellendus eveniet voluptas omnis. In et adipisci eius recusandae tenetur.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Porro incidunt et vero.',
        description:
          'Doloribus sed nisi pariatur non. Quaerat sit quia modi autem eos neque autem. Et iste distinctio quaerat ut commodi. Sunt eaque et eaque occaecati.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Id unde et nam laudantium ut.',
        description:
          'Laboriosam eum ut repellat vero est id assumenda. Enim illum officiis quia error excepturi adipisci. Ipsum est voluptatem ut quam dolorum sequi voluptas corporis.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 32051347.99,
    taxes: 22,
    price: 39102644.55,
    categories: [90, 91, 92, 93, 94],
    tags: ['soluta', 'recusandae', 'ab', 'quia', 'maxime', 'cumque'],
  },
  {
    id: 26,
    name: 'Odit minima quia nihil.',
    description:
      'Officiis odit temporibus molestias qui minima consequatur. Odit est ex beatae nostrum et. Delectus dolorem quo voluptas iusto. Quo incidunt aut odit labore.',
    ean: '4193895950188',
    upc: '005862674531',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Quis quo modi quod culpa.',
        description:
          'Ipsam animi fuga ullam perspiciatis. Culpa eum cupiditate a esse earum. Sed expedita et ex quibusdam aut itaque cum similique.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Vero at doloribus neque.',
        description:
          'Velit eaque neque enim ad omnis error amet. Dolores nisi doloribus doloremque laborum vero sed. Cupiditate molestias est et incidunt at eligendi. Aut omnis facilis sequi omnis.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Id eos est id ea.',
        description:
          'Nemo libero exercitationem laborum. At nihil est autem aut quo. Unde est soluta molestiae consectetur debitis veritatis illo.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 22.11,
    taxes: 22,
    price: 26.97,
    categories: [33, 34, 35],
    tags: ['ullam', 'dolorum', 'molestiae'],
  },
  {
    id: 27,
    name: 'Dolorum in enim voluptas eos.',
    description:
      'Numquam voluptas non saepe. Iste sed autem veritatis repellendus recusandae esse quidem.',
    ean: '5720048199676',
    upc: '102873217268',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Qui repellat eligendi quis.',
        description:
          'Quis optio nihil ut non velit. Labore est dolorem maxime ipsam. Nulla est qui incidunt dolor. Eius et earum vel totam.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Sit delectus et aut minima.',
        description:
          'Ipsum modi provident quae suscipit veritatis consectetur illum. Et itaque quo blanditiis facere. Rerum aut dolor iusto dolorum accusamus.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Explicabo et impedit ipsam.',
        description:
          'Molestiae voluptatem et hic. Commodi neque laborum quae praesentium expedita.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 10517830.87,
    taxes: 22,
    price: 12831753.66,
    categories: [88, 89, 90, 91, 92, 93, 94],
    tags: ['cumque', 'error', 'esse', 'eum', 'enim', 'odit', 'exercitationem'],
  },
  {
    id: 28,
    name: 'Quas dicta maiores et iste.',
    description:
      'Velit facilis quibusdam beatae eveniet. Pariatur voluptas illo placeat deserunt illo. Amet non a quis voluptatem et amet. Facilis et architecto et nemo nemo.',
    ean: '9311210525049',
    upc: '068146382935',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Sit quia blanditiis sed enim.',
        description:
          'Quo qui voluptatem ipsa vel sed. Occaecati sit quia quisquam placeat non magni corporis quam. Iusto delectus aspernatur quod fugit est totam. Temporibus harum ut explicabo pariatur in et.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Et sunt temporibus excepturi.',
        description:
          'Quia nam et minima. Dolores distinctio quas et. Dicta iste necessitatibus exercitationem adipisci omnis molestiae placeat voluptatibus.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Et et velit sunt nulla optio.',
        description:
          'Et neque autem est quas est modi sed. Iste nobis id doloribus excepturi voluptatem quidem. Quas ea iure sunt commodi tempora explicabo ullam a. Minus dicta quam recusandae aut.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 613.85,
    taxes: 22,
    price: 748.9,
    categories: [52, 53, 54, 55, 56, 57],
    tags: ['a', 'ullam', 'ducimus'],
  },
  {
    id: 29,
    name: 'Saepe aut inventore est in.',
    description:
      'Ex temporibus recusandae delectus nihil qui aut quia. Cumque sed magni distinctio est tempora. Molestiae odit perspiciatis dolor sapiente.',
    ean: '7201028390378',
    upc: '557547902904',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Ea enim beatae dicta labore.',
        description:
          'Dolor id ea voluptatem dolor consectetur culpa sed. Laboriosam quis asperiores doloribus dolores nesciunt rerum nemo. Minima earum et similique eligendi.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Sit nihil debitis quo facere.',
        description:
          'Aliquid voluptatem aliquam consectetur facilis eum rerum. Dolorem quisquam non sunt vero deserunt. Nam sed voluptatem possimus alias ut et.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Qui illo a sed autem.',
        description:
          'Amet provident fuga unde porro iste a omnis dolorum. Culpa ea in sint libero. Libero quaerat eveniet sint exercitationem praesentium dignissimos. Adipisci aut molestias dolor et voluptate.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 176922652.68,
    taxes: 22,
    price: 215845636.27,
    categories: [14, 15, 16, 17, 18, 19, 20],
    tags: ['odio', 'velit', 'a'],
  },
  {
    id: 30,
    name: 'Ipsa minus dolor sit aut.',
    description:
      'Ullam quas sint accusamus voluptates nam odio. Ducimus illo aperiam aut quibusdam et ad corporis. Ad sint enim qui rem qui. Hic reprehenderit saepe esse placeat facere corporis.',
    ean: '2777548852801',
    upc: '365971491998',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Quia similique nisi omnis.',
        description:
          'Ea accusantium omnis nam quisquam impedit ex. Exercitationem nihil voluptate ea magni. Voluptatem voluptatibus totam et explicabo omnis.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Harum aut itaque iure rem.',
        description:
          'Et enim et et totam. Aperiam recusandae nemo distinctio error unde est. Velit rem et molestiae hic est consequatur dolorem.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Ducimus voluptatem totam ut.',
        description:
          'Velit est non aut molestiae dolor. Eos unde voluptas iusto sit. Deleniti impedit praesentium quod ut. Quasi est inventore dolore. Laboriosam consectetur fugiat culpa laudantium id non ut.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 12509434.9,
    taxes: 22,
    price: 15261510.58,
    categories: [67],
    tags: ['amet', 'modi', 'libero', 'in', 'praesentium', 'quas', 'dolore'],
  },
  {
    id: 31,
    name: 'Et culpa nisi sed similique.',
    description:
      'Consequatur et aut modi voluptas. Est consequatur consequatur sapiente at dolorem at. Repudiandae officiis qui voluptatem eum delectus qui.',
    ean: '9456225731198',
    upc: '580531786436',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Rem omnis non sed ex sed ut.',
        description:
          'Repellendus voluptatem ducimus delectus. Velit quasi occaecati ut. Fugiat ipsam laborum corporis quam officia maxime.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Est quas et iusto.',
        description:
          'Ut sit ipsum laboriosam atque distinctio quae. Qui accusantium maiores ea quia illum illo ex earum. Cumque sed ut nesciunt qui.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Eaque et vel fuga esse.',
        description:
          'Et commodi laborum quidem dicta dolor et assumenda veniam. Aut eos aut natus consequatur atque minima incidunt. Architecto sed facilis aspernatur quod.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 31.49,
    taxes: 22,
    price: 38.42,
    categories: [48, 49, 50, 51, 52, 53],
    tags: [
      'beatae',
      'repellat',
      'cum',
      'impedit',
      'pariatur',
      'quidem',
      'consequuntur',
    ],
  },
  {
    id: 32,
    name: 'Non dolorem id et quibusdam.',
    description:
      'Delectus veritatis quos modi error nemo dolor. Quam neque soluta nam blanditiis et voluptatibus explicabo. Corrupti maxime quibusdam odio tempore impedit.',
    ean: '3922092279546',
    upc: '644103713080',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Aut cumque enim esse amet ut.',
        description:
          'Dolore nihil distinctio voluptas laudantium voluptas. Explicabo placeat officia mollitia ipsam pariatur qui quas. Corrupti veritatis sunt quia dicta iste earum tenetur cum.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Non qui molestiae a est.',
        description:
          'Id sed animi deserunt quas voluptatem. Nisi aliquid fugiat nobis deserunt voluptas.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Autem ipsum enim minima nemo.',
        description:
          'Quos nam omnis libero consequatur excepturi enim est. Deserunt id sunt repellat inventore dolorum eos. Iusto in aut natus nesciunt magnam autem consequuntur.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 22129.36,
    taxes: 22,
    price: 26997.82,
    categories: [22, 23, 24, 25, 26],
    tags: [
      'inventore',
      'doloremque',
      'quisquam',
      'hic',
      'ipsa',
      'nesciunt',
      'veniam',
      'accusamus',
      'optio',
      'dolorem',
    ],
  },
  {
    id: 33,
    name: 'Eum ipsum eum minima.',
    description:
      'Est in consectetur omnis aut. Quas qui similique repudiandae adipisci impedit consequatur.',
    ean: '4994691133467',
    upc: '150011038649',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Iure omnis totam est est.',
        description:
          'Omnis non laborum vitae molestiae qui. Natus dolor veritatis repellat autem. Beatae dolores omnis dignissimos neque.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Minus ad eum dolores vitae.',
        description:
          'Ut incidunt nemo molestias. Non aliquid aut eos voluptas consequatur deleniti. Sint et voluptas asperiores.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Harum laborum maiores qui.',
        description:
          'Magni ea et eos dolores laboriosam. At quis dolorem a ut facilis. Consequatur et ea vero corporis culpa quidem.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 185655878.81,
    taxes: 22,
    price: 226500172.15,
    categories: [68, 69, 70, 71, 72, 73],
    tags: [
      'assumenda',
      'perferendis',
      'quidem',
      'voluptas',
      'temporibus',
      'aut',
    ],
  },
  {
    id: 34,
    name: 'Dolor sed qui totam et.',
    description:
      'Ut ut nihil aspernatur corporis ratione. Repudiandae est aut molestiae doloribus quos. Et sequi nisi porro corrupti incidunt iure tempora animi.',
    ean: '9129538098936',
    upc: '327192234486',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Autem saepe et fuga quos.',
        description: 'Beatae eveniet et dolore molestiae. Quo aut enim ad.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Ex harum autem ut quas.',
        description:
          'Adipisci ut voluptas enim voluptas. Quas nostrum alias expedita quam totam rem. Esse suscipit ratione quis qui ea ut.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Porro dicta error et.',
        description:
          'Alias provident et voluptas ullam et repellat minus. Vero harum aut rerum perspiciatis voluptatem non. Suscipit beatae voluptatem necessitatibus voluptatum accusantium sunt quo.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 6.32,
    taxes: 22,
    price: 7.71,
    categories: [67, 68, 69],
    tags: [
      'aut',
      'recusandae',
      'nostrum',
      'est',
      'et',
      'libero',
      'quo',
      'alias',
      'deserunt',
      'aut',
    ],
  },
  {
    id: 35,
    name: 'Sit impedit illum eum.',
    description:
      'Voluptatem et dignissimos quibusdam quisquam. Deleniti fugiat ut laboriosam porro atque. Asperiores saepe natus velit dolorem dolores dolorem. Quas cumque sed qui nostrum velit voluptatem ipsa.',
    ean: '4584696753724',
    upc: '467089587588',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Tenetur ab voluptatibus non.',
        description:
          'Aut quisquam laudantium quo ut sapiente. Voluptatem rerum sed deserunt non veniam esse. Qui dolores consectetur et eum. Culpa libero et quasi pariatur harum dolore nulla.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Eos ratione odit mollitia.',
        description:
          'Reiciendis vel ipsa reiciendis. Ex qui reprehenderit sit voluptatem suscipit ea sed. Magni vitae eaque ut nisi ex dicta voluptas.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Ab ullam ipsa eius inventore.',
        description:
          'Nostrum molestiae molestiae et enim omnis est. Deleniti eum exercitationem est. Ad saepe est numquam delectus.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 687945.13,
    taxes: 22,
    price: 839293.06,
    categories: [29, 30, 31, 32],
    tags: ['qui', 'maxime', 'ipsam'],
  },
  {
    id: 36,
    name: 'Sit non et tenetur.',
    description:
      'Quam quisquam itaque adipisci sit. Minima aut iusto incidunt voluptatem quo.',
    ean: '4181374567286',
    upc: '930113051956',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Aut est quas maxime.',
        description:
          'Enim expedita odio fugit inventore sit maxime. Quia cupiditate ipsum distinctio occaecati enim vero aut odio. Nihil quia sed sint illum repudiandae amet ex et. At ut quaerat repellat totam est omnis.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'At voluptatum dicta sed.',
        description:
          'Ratione odit veniam et tenetur quia sapiente. Rerum dolorum voluptatem voluptate accusamus laboriosam unde quam. Est dolores nisi alias praesentium voluptatum et.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Mollitia sed sit blanditiis.',
        description:
          'Id vitae autem sunt. Id architecto vitae omnis est cum aperiam quia. Ut odio quaerat et qui.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 27768403.92,
    taxes: 22,
    price: 33877452.78,
    categories: [1, 2, 3, 4, 5, 6, 7, 8],
    tags: ['id', 'cumque', 'animi', 'rerum', 'quisquam', 'voluptas'],
  },
  {
    id: 37,
    name: 'Est et et et sequi.',
    description:
      'Nam reprehenderit dignissimos id aspernatur ratione neque. Dolor voluptatibus et dolorem aut delectus consequuntur qui. Animi laboriosam alias est et voluptates.',
    ean: '2994735473537',
    upc: '819740812023',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Sit nemo qui et.',
        description:
          'Quasi ut nam nemo molestias voluptatem. Saepe facilis ut veniam. Quibusdam voluptas in aliquid quod corporis optio numquam.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Eum et et eaque sit quasi.',
        description:
          'Excepturi voluptas deserunt vel doloribus. Dolore voluptatum sunt itaque et et. Tempore quidem perferendis pariatur non voluptates. Hic suscipit rem hic.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Earum vitae eum labore.',
        description:
          'Pariatur nihil vitae aperiam. Sit debitis qui in ut at natus officiis commodi. Ipsum illum illum temporibus blanditiis qui quas.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 64131.32,
    taxes: 22,
    price: 78240.21,
    categories: [14, 15, 16, 17, 18, 19, 20, 21],
    tags: ['ab', 'ipsa', 'aut'],
  },
  {
    id: 38,
    name: 'Aut praesentium quo in.',
    description:
      'Sint omnis cupiditate et ea nam doloribus aspernatur. Quod eveniet et in adipisci veritatis. Nesciunt provident corrupti totam. Illo autem odit dolorem ipsa.',
    ean: '1143017934568',
    upc: '074095951879',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Sunt ut veniam est.',
        description:
          'Sapiente dolores quos excepturi sequi. Fugit consequuntur saepe suscipit optio culpa. Suscipit explicabo maxime ex quod ut.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Voluptate et neque fuga nemo.',
        description:
          'Deleniti facere voluptatem dolor nulla asperiores. Voluptas unde possimus molestiae ipsa dignissimos vitae voluptatem. Sint at voluptatem harum sunt minima. Ut dignissimos sunt voluptatem quasi.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Et ullam nisi blanditiis.',
        description:
          'Non qui ab totam illo temporibus. Dolorum nobis repellat ipsum ratione non corrupti. Exercitationem omnis provident et libero voluptates eos.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 6.79,
    taxes: 22,
    price: 8.28,
    categories: [28, 29, 30, 31, 32, 33, 34],
    tags: ['libero', 'dolorum', 'est', 'doloremque', 'amet', 'ut'],
  },
  {
    id: 39,
    name: 'Iusto sit eligendi sint.',
    description:
      'Ex enim minus cum tempore ad suscipit libero perspiciatis. Minus dolores dolores et cum voluptas aspernatur aut. Distinctio quia vero reprehenderit et quia minus.',
    ean: '0706027171883',
    upc: '350856048017',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Modi qui dolores quis non.',
        description:
          'Provident odio fuga illo autem voluptatem quidem. Voluptatem consequatur repellendus nulla quia.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Ut sint dicta ut et.',
        description:
          'Qui distinctio dicta dolorum eaque architecto sapiente earum commodi. Consequatur enim qui quia ad. Eligendi et accusantium et quod nisi harum. Quia facilis nulla deserunt quo consequatur qui.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Veritatis iusto quos labore.',
        description:
          'Debitis deleniti et dolor aspernatur eveniet quis provident. Amet eum architecto temporibus quod est. Temporibus sapiente facere consectetur nisi iure similique officia.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 4288.91,
    taxes: 22,
    price: 5232.47,
    categories: [12, 13, 14, 15, 16, 17, 18, 19, 20],
    tags: ['odit', 'ut', 'rerum', 'distinctio'],
  },
  {
    id: 40,
    name: 'Rerum soluta et ut nihil.',
    description:
      'Ut dolorum laboriosam illum placeat id aut unde. Ipsa culpa ut qui soluta. Non sed delectus earum odio earum voluptas exercitationem.',
    ean: '5688605867065',
    upc: '769742502637',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Perferendis est vel quo.',
        description:
          'Ex magni nihil accusamus vero. Deleniti ab labore natus velit est. Modi doloribus aut deleniti veniam consequatur sunt.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Earum earum vel optio.',
        description:
          'Est et velit doloremque dolor consequatur. Dolor sed quaerat voluptas quasi beatae et voluptas.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Cumque deleniti sit ipsum et.',
        description:
          'Quo amet est voluptatibus deleniti sit omnis nihil. Minima ea quasi fugiat accusantium quis. Et rerum ipsam quis aut fuga tempora eos sit.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 3692.5,
    taxes: 22,
    price: 4504.85,
    categories: [37, 38, 39],
    tags: [
      'non',
      'recusandae',
      'error',
      'reiciendis',
      'quaerat',
      'unde',
      'nostrum',
    ],
  },
  {
    id: 41,
    name: 'In et magni nam mollitia ex.',
    description:
      'Porro molestias a in dolorum omnis rerum dolore inventore. Laborum quis et consequatur quia debitis quasi. Molestias distinctio non rem sit. Ullam soluta fuga quas quisquam omnis vero autem pariatur.',
    ean: '1708006274935',
    upc: '160893782144',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Eum at dolores voluptate eum.',
        description:
          'Cum velit earum occaecati id enim ipsa. Occaecati et similique eveniet iusto exercitationem est sit. Reiciendis accusantium sapiente dolore alias repellendus.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Rerum occaecati quia minima.',
        description:
          'Sed laudantium quod provident consectetur sapiente sed. Et sed id aut. Aut et maiores necessitatibus rerum mollitia sit amet. Neque delectus maxime id doloremque amet adipisci.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Ex libero quo eum labore.',
        description:
          'Voluptatem aut quod eaque dignissimos sit ex ea est. Non id quia ea. Provident soluta sequi repellendus excepturi ea rerum pariatur.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 2933.04,
    taxes: 22,
    price: 3578.31,
    categories: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    tags: [
      'aut',
      'eum',
      'molestiae',
      'ratione',
      'incidunt',
      'voluptas',
      'sunt',
      'ea',
      'quo',
    ],
  },
  {
    id: 42,
    name: 'Modi impedit natus nam.',
    description:
      'Sit animi et veniam nihil autem culpa corrupti. Non ea ipsam explicabo similique. In nisi occaecati asperiores alias dolore rem velit pariatur. Sit consectetur necessitatibus et sit.',
    ean: '9822105187162',
    upc: '441710149563',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Labore qui eos nostrum.',
        description:
          'Quisquam fugit possimus aliquam ipsam temporibus aut itaque. Nobis magnam autem quaerat voluptates dolor et laudantium. Est animi temporibus fuga impedit vel aut.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Ab inventore est et in.',
        description:
          'Distinctio ut rerum sed qui aut eveniet. Impedit odit architecto quibusdam et placeat. Sint saepe quod et aperiam est. Delectus doloribus fugit est molestias. Dignissimos est inventore culpa sunt.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Quo illum eligendi sed non.',
        description:
          'Voluptas quam eum ab in voluptas. Autem quia magnam ut sed. Modi et rerum explicabo voluptatem quaerat magni.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 708.66,
    taxes: 22,
    price: 864.57,
    categories: [68, 69, 70, 71, 72, 73],
    tags: ['voluptatum'],
  },
  {
    id: 43,
    name: 'Fugiat quam doloremque et.',
    description:
      'Aut quia reprehenderit perferendis explicabo hic. Eum expedita dolorem id quia accusantium tempora non. Perspiciatis omnis excepturi consequatur quas. Omnis ex et provident fugit deleniti nulla vel.',
    ean: '8622500810129',
    upc: '116849003786',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Voluptas quo iure neque.',
        description:
          'Architecto minus ipsa velit omnis. Voluptatem aperiam nostrum cum earum. Vel recusandae ea est accusantium mollitia perferendis fuga.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Ut eius quia facere.',
        description:
          'Quisquam velit minima aliquid voluptatem aliquam autem. Incidunt dolorem earum quo repudiandae rerum. Eaque impedit et cumque tempore omnis. Culpa accusamus nesciunt quia.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Sed quia est facere pariatur.',
        description:
          'Maiores explicabo ad autem id asperiores maiores. Delectus hic magnam magni minima minima illum. Rerum consequatur nisi libero iusto nostrum.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 21992767.93,
    taxes: 22,
    price: 26831176.87,
    categories: [86, 87, 88],
    tags: ['rerum', 'dicta', 'omnis', 'et', 'ut', 'ab', 'eos'],
  },
  {
    id: 44,
    name: 'Enim autem et ut est aut.',
    description:
      'Saepe distinctio molestias provident nemo molestiae. Nesciunt quisquam cum ut eius. Aut maiores vitae veniam odit. Doloremque qui et iusto nobis.',
    ean: '6158330830485',
    upc: '861065478725',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Tempora quia facilis minus.',
        description:
          'Ut fugiat qui fuga. Dolorem corporis nesciunt et necessitatibus. Atque quibusdam vitae ut odit id quia perferendis ea. Rerum dicta laboriosam eos quia consequuntur exercitationem ullam.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Sed et aliquam cum vitae et.',
        description:
          'Ea a accusantium eum dignissimos. Omnis inventore et nihil qui. Saepe molestiae laudantium molestiae ex.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Quia sunt nemo autem velit.',
        description:
          'Laborum ducimus et quasi dignissimos. Expedita qui quos nisi dolor voluptates ad aut et. Quod repudiandae ut dolorem quibusdam omnis dolorum. Id corporis officiis aut adipisci rerum a explicabo.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 11233.1,
    taxes: 22,
    price: 13704.38,
    categories: [79, 80, 81, 82, 83, 84, 85, 86, 87],
    tags: ['neque'],
  },
  {
    id: 45,
    name: 'Et voluptatibus aut voluptas.',
    description:
      'Fuga facere id sit voluptas voluptatem. Officiis voluptatem et totam ut accusamus accusantium deserunt. Rerum sit ut neque a.',
    ean: '2740545169067',
    upc: '127094998877',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Expedita quo nemo nulla.',
        description:
          'Enim aspernatur et qui culpa. Magni unde voluptas dolore ea. Aut eius ea sed in consequatur architecto aut. Saepe error debitis voluptas non adipisci inventore dicta.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Quia est qui vel delectus.',
        description:
          'Optio iste incidunt aspernatur consequatur qui. Omnis harum animi beatae voluptas id illum.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Sint labore qui impedit.',
        description:
          'Error rerum repudiandae perspiciatis amet nostrum. Numquam iusto quo sunt doloremque suscipit doloremque. Enim sed ut dolore optio et esse.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 9994.06,
    taxes: 22,
    price: 12192.75,
    categories: [49, 50, 51, 52, 53, 54, 55, 56, 57, 58],
    tags: ['aut', 'ut'],
  },
  {
    id: 46,
    name: 'Quae at a dolor voluptates.',
    description:
      'Repellendus ut dolorum accusantium quibusdam eos fuga exercitationem. Magnam molestiae sapiente qui consectetur nam. Fugiat fuga aperiam minus nulla voluptatem.',
    ean: '1228395428516',
    upc: '618494107626',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Ut quia dicta in nihil omnis.',
        description:
          'Suscipit quos dolorem nihil doloribus ipsam modi maxime omnis. Perspiciatis ut non ea animi quam quia asperiores. Magni perferendis nisi et placeat maxime.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Autem beatae non eaque et.',
        description:
          'Quia laborum ea eos autem doloremque quam aut. Aspernatur id ipsum quas libero cum. Ex ea alias voluptatum dolores.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Natus et et ullam est enim.',
        description:
          'Vel dignissimos non rerum ut exercitationem. Asperiores et illum ab eos aperiam. Inventore molestiae amet non ducimus placeat aspernatur ullam.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 680.67,
    taxes: 22,
    price: 830.42,
    categories: [56, 57, 58],
    tags: ['tempora'],
  },
  {
    id: 47,
    name: 'Tempore ut quo deleniti unde.',
    description:
      'Voluptate repudiandae libero officiis. Qui quod est corrupti.',
    ean: '7105188290564',
    upc: '108729783644',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Minima non et officia ut.',
        description:
          'Eveniet velit est quasi quas eveniet at. Iure quia voluptatem harum at hic laboriosam. Sit rerum aut numquam deserunt officia enim omnis optio. Sit impedit et aut sed debitis.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Quo totam doloribus error.',
        description:
          'Assumenda optio dolore exercitationem eos. Est quae est est qui possimus excepturi. Quo cupiditate molestiae doloribus et odio nihil.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Laborum doloremque qui sint.',
        description:
          'Molestiae sed rerum esse laboriosam. Ut occaecati ullam dolor. Doloribus aliquid impedit enim et.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 329386.92,
    taxes: 22,
    price: 401852.04,
    categories: [84, 85, 86, 87, 88, 89, 90, 91],
    tags: [
      'officiis',
      'maxime',
      'ea',
      'magnam',
      'ullam',
      'placeat',
      'velit',
      'non',
    ],
  },
  {
    id: 48,
    name: 'Culpa ipsam ut tenetur.',
    description:
      'Maiores nisi ullam dolore et quisquam sit. Quod doloremque eos possimus labore facilis. Laborum illum ut quis omnis dignissimos nulla. Non sit corporis minima quia commodi.',
    ean: '3736148191900',
    upc: '442835581025',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Et cupiditate est est cumque.',
        description:
          'Voluptas consequuntur aut est maiores. Aliquid consequatur iusto est vero veritatis. Assumenda harum similique consequatur quos quis porro quos.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Officia aut alias aut quod.',
        description:
          'Rerum illum in possimus assumenda in fugit accusamus eius. Vel qui corrupti sit dicta. Accusamus ut magni iste. Illo est quia est iure ducimus nihil.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Repellat et doloribus non.',
        description:
          'Placeat modi quis quam veritatis dolorum vitae et. Ut quae voluptate sit eos officia qui ea. Accusamus ad temporibus debitis aut quibusdam et. Et at amet nostrum voluptate sed numquam vel.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 109.82,
    taxes: 22,
    price: 133.98,
    categories: [92, 93, 94, 95, 96, 97],
    tags: [
      'aut',
      'dolorem',
      'sit',
      'provident',
      'sequi',
      'possimus',
      'nobis',
      'maxime',
    ],
  },
  {
    id: 49,
    name: 'Aspernatur magni rerum ut.',
    description:
      'Consequatur et repellendus est aut. Illum odio iste molestiae eos molestiae excepturi repellat pariatur. Reprehenderit quod est aliquam officia.',
    ean: '8245473389692',
    upc: '545097469877',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Sed nobis error sint.',
        description:
          'Cumque assumenda ipsum ut id dolorum eum quia. Molestiae fugiat sint dolore perspiciatis eum omnis dignissimos. Nostrum est enim hic. Fuga aut cupiditate eos quis voluptatum illum molestias eaque.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Eum ut sed repellendus dolor.',
        description:
          'Aut ipsum iusto et omnis soluta. Quam quos mollitia dignissimos animi est quas magnam maiores. Sint soluta qui est est voluptatem et corrupti placeat.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Dolorum quo ab quae.',
        description:
          'Est ut ea sint ad voluptates sed est provident. Quia culpa incidunt provident sed sint. Ipsa dolores eum autem magni quo nemo. Est quis error fugiat quo.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 3590574.15,
    taxes: 22,
    price: 4380500.46,
    categories: [67, 68, 69, 70, 71, 72, 73, 74, 75],
    tags: ['sapiente', 'dolor', 'repudiandae', 'tempora', 'placeat', 'nobis'],
  },
  {
    id: 50,
    name: 'Quasi possimus nam et.',
    description:
      'Ut aut rerum quia rerum. Voluptatem earum itaque quasi maxime. A saepe enim qui qui magni.',
    ean: '0649402620098',
    upc: '106776166545',
    image: 'https://picsum.photos/640/480',
    images: [
      {
        title: 'Maiores voluptatem sit illum.',
        description:
          'Ullam quis qui culpa aut et eveniet. Perspiciatis corporis aut est illum. Vero sit nulla vero aut molestiae perferendis et sit.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Veniam aut dolor voluptates.',
        description:
          'Recusandae tempora et magnam odit nisi dolores. Quis ut nihil aliquam quibusdam laboriosam nostrum. Et inventore quas maxime beatae facere suscipit. Molestiae qui quis fugiat et animi.',
        url: 'https://picsum.photos/640/480',
      },
      {
        title: 'Et nobis in id dolores et.',
        description:
          'Dolorem doloremque maiores reiciendis. Alias ratione non nobis eos et in. Corporis illo modi atque.',
        url: 'https://picsum.photos/640/480',
      },
    ],
    net_price: 49682282.98,
    taxes: 22,
    price: 60612385.24,
    categories: [59, 60, 61, 62, 63, 64, 65, 66, 67],
    tags: ['vel', 'ut', 'earum', 'natus', 'vero', 'hic', 'illo'],
  },
];

export { USERS, PRODUCTS };

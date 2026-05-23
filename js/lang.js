 // GrowthIve Monitor — Language System
// Supports: English (en), Hausa (ha), Yoruba (yo), Igbo (ig)

const TRANSLATIONS = {

  en: {
    // ── NAVBAR & SIDEBAR ──
    brand:          'GrowthIve Monitor',
    dashboard:      'Dashboard',
    daily_sales:    'Daily Sales',
    expenses:       'Expenses',
    debts:          'Debts',
    inventory:      'Inventory',
    purchases:      'Purchases',
    reports:        'Reports',
    health_score:   'Health Score',
    calendar:       'Calendar',
    settings:       'Settings',
    support:        'Support',
    sign_out:       'Sign Out',
    main_menu:      'Main Menu',
    analytics:      'Analytics',
    account:        'Account',

    // ── AUTH ──
    login:          'Login',
    register:       'Register',
    email:          'Email Address',
    password:       'Password',
    full_name:      'Full Name',
    business_name:  'Business Name',
    login_btn:      'Sign In →',
    register_btn:   'Create Account →',
    no_account:     "Don't have an account?",
    have_account:   'Already have an account?',
    forgot_pw:      'Forgot Password?',
    sign_up:        'Sign Up',
    sign_in:        'Sign In',

    // ── DASHBOARD ──
    welcome:        'Welcome back',
    total_sales:    'Total Sales',
    total_expenses: 'Total Expenses',
    net_profit:     'Net Profit',
    total_debts:    'Total Debts',
    low_stock:      'Low Stock Items',
    this_month:     'This Month',
    today:          'Today',
    this_week:      'This Week',

    // ── INVENTORY ──
    inventory_title:    'Inventory / Stock Manager',
    inventory_sub:      'Track stock levels and get alerts when items run low.',
    add_item:           'Add Stock Item',
    item_name:          'Item Name',
    quantity:           'Quantity',
    unit_price:         'Unit Price',
    low_stock_alert:    'Low Stock Alert Threshold',
    add_to_stock:       'Add to Stock List →',
    stock_summary:      'Stock Summary',
    total_items:        'Total Items',
    low_stock_items:    'Low Stock',
    total_stock_value:  'Total Stock Value',
    recently_deleted:   'Recently Deleted',
    stock_list:         'Stock List',
    search_items:       'Search items…',
    edit:               'Edit',
    delete:             'Delete',
    restore:            'Restore',
    purge:              'Purge',
    in_stock:           'In Stock',
    out_of_stock:       'Out of Stock',
    low_stock_badge:    'Low',
    import_stock:       'Import',
    export_csv:         'CSV',
    export_pdf:         'PDF',

    // ── SALES ──
    sales_title:    'Daily Sales',
    sales_sub:      'Record your daily sales and track revenue.',
    add_sale:       'Add Sale',
    amount:         'Amount',
    date:           'Date',
    notes:          'Notes',
    save:           'Save →',
    total:          'Total',

    // ── EXPENSES ──
    expenses_title: 'Expenses',
    expenses_sub:   'Track your business spending.',
    add_expense:    'Add Expense',
    category:       'Category',
    description:    'Description',

    // ── DEBTS ──
    debts_title:    'Debts / Credit',
    debts_sub:      'Track money owed to and by your business.',
    add_debt:       'Add Debt',
    debtor_name:    'Debtor Name',
    due_date:       'Due Date',
    overdue:        'Overdue',
    paid:           'Paid',
    pending:        'Pending',
    mark_paid:      'Mark Paid',

    // ── PURCHASES ──
    purchases_title: 'Purchases / Sales Point',
    purchases_sub:   'Select items and inventory updates automatically.',
    current_order:   'Current Order',
    complete_sale:   'Complete Sale →',
    clear_cart:      'Clear Cart',
    customer_name:   'Customer Name (optional)',
    payment_method:  'Payment Method',
    cash:            'Cash',
    transfer:        'Transfer',
    pos:             'POS',
    todays_stats:    "Today's Stats",
    sales_today:     'Sales Today',
    transactions:    'Transactions',
    recent_txns:     'Recent Transactions',

    // ── SETTINGS ──
    settings_title:  'Settings',
    settings_sub:    'Manage your account, security and preferences.',
    profile:         'Profile',
    security:        'Security',
    preferences:     'Preferences',
    notifications:   'Notifications',
    danger_zone:     'Danger Zone',
    save_profile:    'Save Profile →',
    change_password: 'Change Password',
    new_password:    'New Password',
    confirm_password:'Confirm New Password',
    update_password: 'Update Password →',
    dark_mode:       'Dark Mode',
    currency:        'Currency Symbol',
    language:        'Language',

    // ── REPORTS ──
    reports_title:   'Reports',
    reports_sub:     'View your business performance over time.',
    download:        'Download',
    print:           'Print',
    filter:          'Filter',

    // ── CONTACT ──
    contact_title:   'Contact Support',
    contact_sub:     'Get help from the GrowthIve team.',
    your_name:       'Your Name',
    message:         'Message',
    send:            'Send Message →',

    // ── COMMON ──
    loading:         'Loading…',
    saving:          'Saving…',
    success:         'Success!',
    error:           'Error',
    cancel:          'Cancel',
    confirm:         'Confirm',
    back:            'Back',
    close:           'Close',
    yes:             'Yes',
    no:              'No',
    update:          'Update',
    search:          'Search',
    no_data:         'No data found.',
    actions:         'Actions',
    status:          'Status',
    name:            'Name',
    price:           'Price',
    value:           'Value',
  },

  // ══════════════════════════════════════════
  // HAUSA
  // ══════════════════════════════════════════
  ha: {
    brand:          'GrowthIve Monitor',
    dashboard:      'Allon Kallo',
    daily_sales:    'Tallace Yau',
    expenses:       'Kashe-kudi',
    debts:          'Bashi',
    inventory:      'Kayayyaki',
    purchases:      'Sayayya',
    reports:        'Rahotanni',
    health_score:   'Maki na Kasuwanci',
    calendar:       'Kalandar',
    settings:       'Saituna',
    support:        'Taimako',
    sign_out:       'Fita',
    main_menu:      'Babban Menu',
    analytics:      'Nazari',
    account:        'Asusun',

    login:          'Shiga',
    register:       'Yi Rajista',
    email:          'Adireshin Imel',
    password:       'Kalmar Sirri',
    full_name:      'Cikakken Suna',
    business_name:  'Sunan Kasuwanci',
    login_btn:      'Shiga →',
    register_btn:   'Ƙirƙiri Asusun →',
    no_account:     'Ba ka da asusun?',
    have_account:   'Kana da asusun?',
    forgot_pw:      'Manta Kalmar Sirri?',
    sign_up:        'Yi Rajista',
    sign_in:        'Shiga',

    welcome:        'Barka da dawo',
    total_sales:    'Jimlar Tallace-tallace',
    total_expenses: 'Jimlar Kashe-kudi',
    net_profit:     'Riba ta Gida',
    total_debts:    'Jimlar Bashi',
    low_stock:      'Kayayyaki Kaɗan',
    this_month:     'Wannan Wata',
    today:          'Yau',
    this_week:      'Wannan Mako',

    inventory_title:    'Manajan Kayayyaki',
    inventory_sub:      'Lura da kayayyaki da samun faɗakarwa.',
    add_item:           'Ƙara Kaya',
    item_name:          'Sunan Kaya',
    quantity:           'Adadi',
    unit_price:         'Farashi na Kowane',
    low_stock_alert:    'Iyakar Faɗakarwa',
    add_to_stock:       'Ƙara zuwa Jerin Kaya →',
    stock_summary:      'Taƙaitaccen Kaya',
    total_items:        'Jimlar Kayayyaki',
    low_stock_items:    'Kayayyaki Kaɗan',
    total_stock_value:  'Jimlar Darajar Kaya',
    recently_deleted:   'An Goge Kwanan nan',
    stock_list:         'Jerin Kayayyaki',
    search_items:       'Nemo kaya…',
    edit:               'Gyara',
    delete:             'Share',
    restore:            'Dawo',
    purge:              'Share Har Abada',
    in_stock:           'Akwai Kaya',
    out_of_stock:       'Babu Kaya',
    low_stock_badge:    'Kaɗan',
    import_stock:       'Shigo da Kaya',
    export_csv:         'CSV',
    export_pdf:         'PDF',

    sales_title:    'Tallace Yau',
    sales_sub:      'Yi rikodin tallacenka na yau.',
    add_sale:       'Ƙara Tallace',
    amount:         'Adadin Kudi',
    date:           'Kwanan Wata',
    notes:          'Bayani',
    save:           'Ajiye →',
    total:          'Jimla',

    expenses_title: 'Kashe-kudi',
    expenses_sub:   'Lura da kashe-kudin kasuwancinka.',
    add_expense:    'Ƙara Kashe-kudi',
    category:       'Rukuni',
    description:    'Bayanin',

    debts_title:    'Bashi / Bashin Rance',
    debts_sub:      'Lura da kuɗin da ake bin ka da kake bin wasu.',
    add_debt:       'Ƙara Bashi',
    debtor_name:    'Sunan Mai Bashi',
    due_date:       'Ranar Biyan',
    overdue:        'Ya Wuce Lokaci',
    paid:           'An Biya',
    pending:        'Ana Jira',
    mark_paid:      'Nuna An Biya',

    purchases_title: 'Sayayya / Wurin Sayarwa',
    purchases_sub:   'Zaɓi kaya kuma kayayyaki za su sabunta kansu.',
    current_order:   'Odar Yanzu',
    complete_sale:   'Kammala Tallace →',
    clear_cart:      'Share Kwandon',
    customer_name:   'Sunan Abokin Ciniki (zaɓi)',
    payment_method:  'Hanyar Biyan Kudi',
    cash:            'Tsabar Kudi',
    transfer:        'Canja wurin Kudi',
    pos:             'POS',
    todays_stats:    'Kididdiga ta Yau',
    sales_today:     'Tallace na Yau',
    transactions:    'Ma\'amaloli',
    recent_txns:     'Ma\'amaloli na Kwanan nan',

    settings_title:  'Saituna',
    settings_sub:    'Sarrafa asusunka da amincinsa.',
    profile:         'Bayanan Kai',
    security:        'Tsaro',
    preferences:     'Zaɓuɓɓuka',
    notifications:   'Sanarwa',
    danger_zone:     'Yankin Hadari',
    save_profile:    'Ajiye Bayanan Kai →',
    change_password: 'Canza Kalmar Sirri',
    new_password:    'Sabuwar Kalmar Sirri',
    confirm_password:'Tabbatar da Kalmar Sirri',
    update_password: 'Sabunta Kalmar Sirri →',
    dark_mode:       'Yanayin Duhu',
    currency:        'Alamar Kudi',
    language:        'Harshe',

    reports_title:   'Rahotanni',
    reports_sub:     'Duba aikin kasuwancinka.',
    download:        'Zazzage',
    print:           'Buga',
    filter:          'Tace',

    contact_title:   'Tuntubi Taimako',
    contact_sub:     'Samu taimako daga ƙungiyar GrowthIve.',
    your_name:       'Sunanka',
    message:         'Saƙo',
    send:            'Aika Saƙo →',

    loading:         'Ana lodawa…',
    saving:          'Ana ajiyewa…',
    success:         'An yi nasara!',
    error:           'Kuskure',
    cancel:          'Soke',
    confirm:         'Tabbatar',
    back:            'Koma Baya',
    close:           'Rufe',
    yes:             'Eh',
    no:              'A\'a',
    update:          'Sabunta',
    search:          'Nemo',
    no_data:         'Ba a sami bayani ba.',
    actions:         'Ayyuka',
    status:          'Matsayi',
    name:            'Suna',
    price:           'Farashi',
    value:           'Darajar',
  },

  // ══════════════════════════════════════════
  // YORUBA
  // ══════════════════════════════════════════
  yo: {
    brand:          'GrowthIve Monitor',
    dashboard:      'Dasibodu',
    daily_sales:    'Tita Ojoojumọ',
    expenses:       'Inawo',
    debts:          'Gbèsè',
    inventory:      'Akojọ Ohun Elo',
    purchases:      'Rira Ọja',
    reports:        'Ijabọ',
    health_score:   'Àmì Ilera Iṣowo',
    calendar:       'Kalẹnda',
    settings:       'Ètò',
    support:        'Iranlọwọ',
    sign_out:       'Jade',
    main_menu:      'Akojọ Àkọkọ',
    analytics:      'Itupalẹ',
    account:        'Àkáùntì',

    login:          'Wọle',
    register:       'Forukọsilẹ',
    email:          'Àdírẹ́sì Ìmẹ́lì',
    password:       'Ọrọ Aṣina',
    full_name:      'Orúkọ Ni Kikun',
    business_name:  'Orúkọ Iṣowo',
    login_btn:      'Wọle →',
    register_btn:   'Ṣẹda Àkáùntì →',
    no_account:     'Ṣé o ní àkáùntì?',
    have_account:   'O ti ní àkáùntì tẹlẹ?',
    forgot_pw:      'Gbagbe Ọrọ Aṣina?',
    sign_up:        'Forukọsilẹ',
    sign_in:        'Wọle',

    welcome:        'Ẹ káàbọ̀ padà',
    total_sales:    'Apao Tita',
    total_expenses: 'Apao Inawo',
    net_profit:     'Ere Gidi',
    total_debts:    'Apao Gbèsè',
    low_stock:      'Ohun Elo Tó Fẹrẹ Parí',
    this_month:     'Oṣù Yìí',
    today:          'Òní',
    this_week:      'Ọṣẹ Yìí',

    inventory_title:    'Oluṣakoso Ohun Elo',
    inventory_sub:      'Tọpa awọn ipele ọja rẹ ki o gba awọn itaniji.',
    add_item:           'Fikun Ohun Elo',
    item_name:          'Orúkọ Ohun Elo',
    quantity:           'Iye',
    unit_price:         'Idiyele Fun Ọkan',
    low_stock_alert:    'Iye Itaniji Ọja Kekere',
    add_to_stock:       'Fikun si Àkójọ Ọja →',
    stock_summary:      'Akopọ Ọja',
    total_items:        'Apao Ohun Elo',
    low_stock_items:    'Ọja Tó Fẹrẹ Parí',
    total_stock_value:  'Iye Apao Ọja',
    recently_deleted:   'Tí a Paarẹ Laipẹ',
    stock_list:         'Àkójọ Ọja',
    search_items:       'Wa ohun elo…',
    edit:               'Ṣatunkọ',
    delete:             'Paarẹ',
    restore:            'Mu Padà',
    purge:              'Paarẹ Patapata',
    in_stock:           'Wà Ní Ọja',
    out_of_stock:       'Parí Ní Ọja',
    low_stock_badge:    'Kekere',
    import_stock:       'Gbe Wọle',
    export_csv:         'CSV',
    export_pdf:         'PDF',

    sales_title:    'Tita Ojoojumọ',
    sales_sub:      'Gbasilẹ tita ojoojumọ rẹ.',
    add_sale:       'Fikun Tita',
    amount:         'Iye Owó',
    date:           'Ọjọ',
    notes:          'Àkọsílẹ',
    save:           'Fi Pamọ →',
    total:          'Apao',

    expenses_title: 'Inawo',
    expenses_sub:   'Tọpa inawo iṣowo rẹ.',
    add_expense:    'Fikun Inawo',
    category:       'Ẹka',
    description:    'Apejuwe',

    debts_title:    'Gbèsè / Kirẹditi',
    debts_sub:      'Tọpa owó tí a jẹ ọ àti tí o jẹ.',
    add_debt:       'Fikun Gbèsè',
    debtor_name:    'Orúkọ Adágbèsè',
    due_date:       'Ọjọ Isanpada',
    overdue:        'Ti Koja Akoko',
    paid:           'Ti Sanwo',
    pending:        'Nduro',
    mark_paid:      'Samisi Bi Ti Sanwo',

    purchases_title: 'Rira Ọja / Ibi Tita',
    purchases_sub:   'Yan awọn ohun elo ki ọja rẹ ṣe imudojuiwọn.',
    current_order:   'Aṣẹ Lọwọlọwọ',
    complete_sale:   'Pari Tita →',
    clear_cart:      'Ṣofo Agbọn',
    customer_name:   'Orúkọ Onibara (aṣayan)',
    payment_method:  'Ọna Isanwo',
    cash:            'Owo Ni Ọwọ',
    transfer:        'Gbigbe Owó',
    pos:             'POS',
    todays_stats:    'Iṣiro Òní',
    sales_today:     'Tita Òní',
    transactions:    'Awọn Iṣowo',
    recent_txns:     'Awọn Iṣowo Laipẹ',

    settings_title:  'Ètò',
    settings_sub:    'Ṣakoso àkáùntì rẹ àti aabo rẹ.',
    profile:         'Profaili',
    security:        'Aabo',
    preferences:     'Awọn Aṣayan',
    notifications:   'Awọn Iwifunni',
    danger_zone:     'Agbegbe Ewu',
    save_profile:    'Fi Profaili Pamọ →',
    change_password: 'Ṣatunṣe Ọrọ Aṣina',
    new_password:    'Ọrọ Aṣina Tuntun',
    confirm_password:'Jẹrisi Ọrọ Aṣina',
    update_password: 'Ṣe Imudojuiwọn Ọrọ Aṣina →',
    dark_mode:       'Ipo Okunkun',
    currency:        'Ami Owó',
    language:        'Èdè',

    reports_title:   'Ijabọ',
    reports_sub:     'Wo iṣẹ iṣowo rẹ ni akoko.',
    download:        'Gbe Sile',
    print:           'Tẹ',
    filter:          'Àlẹmọ',

    contact_title:   'Kan si Atilẹyin',
    contact_sub:     'Gba iranlọwọ lati ọdọ ẹgbẹ GrowthIve.',
    your_name:       'Orúkọ Rẹ',
    message:         'Ifiranṣẹ',
    send:            'Fi Ifiranṣẹ Ranṣẹ →',

    loading:         'Ń gbẹ…',
    saving:          'Ń fipamọ…',
    success:         'Aṣeyọri!',
    error:           'Àṣìṣe',
    cancel:          'Fagilé',
    confirm:         'Jẹrisi',
    back:            'Padà',
    close:           'Sunmọ',
    yes:             'Bẹẹni',
    no:              'Bẹẹkọ',
    update:          'Ṣe Imudojuiwọn',
    search:          'Wa',
    no_data:         'Ko si data ti a ri.',
    actions:         'Awọn Iṣe',
    status:          'Ipo',
    name:            'Orúkọ',
    price:           'Idiyele',
    value:           'Iye',
  },

  // ══════════════════════════════════════════
  // IGBO
  // ══════════════════════════════════════════
  ig: {
    brand:          'GrowthIve Monitor',
    dashboard:      'Deshbọọdụ',
    daily_sales:    'Ahịa Kwa Ụbọchị',
    expenses:       'Ego A Na-eji',
    debts:          'Ụgwọ',
    inventory:      'Ngwongwo',
    purchases:      'Ịzụta Ihe',
    reports:        'Akụkọ',
    health_score:   'Àmà Ahụike Azụmaahịa',
    calendar:       'Kalenda',
    settings:       'Ntọala',
    support:        'Enyemaka',
    sign_out:       'Pụọ',
    main_menu:      'Isi Menyu',
    analytics:      'Nyocha',
    account:        'Akaụntụ',

    login:          'Banye',
    register:       'Debanye Aha',
    email:          'Adreesị Ozi-Ele',
    password:       'Okwuntughe',
    full_name:      'Aha Zuru Oke',
    business_name:  'Aha Azụmaahịa',
    login_btn:      'Banye →',
    register_btn:   'Mepụta Akaụntụ →',
    no_account:     'Ị nweghị akaụntụ?',
    have_account:   'Ị nwere akaụntụ?',
    forgot_pw:      'Chefuo Okwuntughe?',
    sign_up:        'Debanye Aha',
    sign_in:        'Banye',

    welcome:        'Nnọọ ọzọ',
    total_sales:    'Ngụkọta Ahịa',
    total_expenses: 'Ngụkọta Ego A Na-eji',
    net_profit:     'Uru N\'ezie',
    total_debts:    'Ngụkọta Ụgwọ',
    low_stock:      'Ngwongwo Fọdụrụ Obere',
    this_month:     'Ọnwa A',
    today:          'Taa',
    this_week:      'Izu A',

    inventory_title:    'Onye Njikwa Ngwongwo',
    inventory_sub:      'Soro ọkwa ihe ị nwere ma nweta ọdịmma mgbe ihe fọdụrụ obere.',
    add_item:           'Tinye Ihe',
    item_name:          'Aha Ihe',
    quantity:           'Ọnụọgụ',
    unit_price:         'Ọnụahịa Otu Ihe',
    low_stock_alert:    'Ọkwa Ọdịmma Ngwongwo Fọdụrụ Obere',
    add_to_stock:       'Tinye na Ndepụta Ihe →',
    stock_summary:      'Nchoputa Ngwongwo',
    total_items:        'Ngụkọta Ihe',
    low_stock_items:    'Ngwongwo Fọdụrụ Obere',
    total_stock_value:  'Ngụkọta Ọnụahịa Ngwongwo',
    recently_deleted:   'Ehichapụrụ N\'oge Nso',
    stock_list:         'Ndepụta Ngwongwo',
    search_items:       'Chọọ ihe…',
    edit:               'Dezie',
    delete:             'Hichapụ',
    restore:            'Weghachite',
    purge:              'Hichapụ Ruo Mgbe Ebighi Ebi',
    in_stock:           'Dị N\'ọnọdụ',
    out_of_stock:       'Agwụla Ihe',
    low_stock_badge:    'Obere',
    import_stock:       'Webata',
    export_csv:         'CSV',
    export_pdf:         'PDF',

    sales_title:    'Ahịa Kwa Ụbọchị',
    sales_sub:      'Debanye ahịa kwa ụbọchị rị.',
    add_sale:       'Tinye Ahịa',
    amount:         'Ọnụọgụ Ego',
    date:           'Ụbọchị',
    notes:          'Ndetu',
    save:           'Chekwa →',
    total:          'Ngụkọta',

    expenses_title: 'Ego A Na-eji',
    expenses_sub:   'Soro ego i na-eji maka azụmaahịa.',
    add_expense:    'Tinye Ego A Na-eji',
    category:       'Udi',
    description:    'Nkọwa',

    debts_title:    'Ụgwọ / Kredit',
    debts_sub:      'Soro ego a na-ákwụ gị na nke i na-áọ ndị ọzọ.',
    add_debt:       'Tinye Ụgwọ',
    debtor_name:    'Aha Onye Na-agbachi Ụgwọ',
    due_date:       'Ụbọchị Nkwụghachi',
    overdue:        'Gachara Oge',
    paid:           'Akwụọla',
    pending:        'Na-echere',
    mark_paid:      'Kọọ Na Akwụọla',

    purchases_title: 'Ịzụta Ihe / Ebe Ire Ahịa',
    purchases_sub:   'Họrọ ihe ka ngwongwo mee ihe n\'ụzọ akpaaka.',
    current_order:   'Iwu Ugbu A',
    complete_sale:   'Mechaa Ahịa →',
    clear_cart:      'Hichapụ Ụgbọ',
    customer_name:   'Aha Onye Ahịa (ọhọrọ)',
    payment_method:  'Ụzọ Ịkwụ Ụgwọ',
    cash:            'Ego Aka',
    transfer:        'Nnyefe Ego',
    pos:             'POS',
    todays_stats:    'Ihe Omume Taa',
    sales_today:     'Ahịa Taa',
    transactions:    'Azụmaahịa',
    recent_txns:     'Azụmaahịa N\'oge Nso',

    settings_title:  'Ntọala',
    settings_sub:    'Jikwaa akaụntụ rị na nchedo ya.',
    profile:         'Profaịlụ',
    security:        'Nchedo',
    preferences:     'Nhọrọ',
    notifications:   'Ọkwa',
    danger_zone:     'Mpaghara Ihe Egwu',
    save_profile:    'Chekwa Profaịlụ →',
    change_password: 'Gbanwee Okwuntughe',
    new_password:    'Okwuntughe Ọhụrụ',
    confirm_password:'Kwenye Okwuntughe',
    update_password: 'Mee Okwuntughe Ọhụrụ →',
    dark_mode:       'Ọnọdụ Oji',
    currency:        'Akara Ego',
    language:        'Asụsụ',

    reports_title:   'Akụkọ',
    reports_sub:     'Lee ọrụ azụmaahịa rị n\'oge.',
    download:        'Budata',
    print:           'Bipụta',
    filter:          'Nyocha',

    contact_title:   'Kpọtụrụ Enyemaka',
    contact_sub:     'Nweta enyemaka site n\'aka ndị GrowthIve.',
    your_name:       'Aha Gị',
    message:         'Ozi',
    send:            'Zipu Ozi →',

    loading:         'Na-ebuga…',
    saving:          'Na-echekwa…',
    success:         'Ọ Siiri Ike!',
    error:           'Njehie',
    cancel:          'Kagbuo',
    confirm:         'Kwenye',
    back:            'Laghachi',
    close:           'Mechie',
    yes:             'Ee',
    no:              'Mba',
    update:          'Mee Ọhụrụ',
    search:          'Chọọ',
    no_data:         'Achọtaghị data ọ bụla.',
    actions:         'Omume',
    status:          'Ọnọdụ',
    name:            'Aha',
    price:           'Ọnụahịa',
    value:           'Uru',
  }
};

/* ══════════════════════════════════════════
   LANGUAGE ENGINE
══════════════════════════════════════════ */

// Get current language from localStorage (default English)
function getLang() {
  return localStorage.getItem('growthive_lang') || 'en';
}

// Set language and reload page to apply
function setLang(code) {
  localStorage.setItem('growthive_lang', code);
  location.reload();
}

// Get a translation string
function t(key) {
  const lang = getLang();
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key])
    || TRANSLATIONS['en'][key]
    || key;
}

// Apply translations to all elements with data-lang attribute
function applyTranslations() {
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.hasAttribute('placeholder')) el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  // Also update placeholders
  document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-lang-placeholder'));
  });
}

// Render the language switcher buttons for the navbar
function renderLangSwitcher() {
  const current = getLang();
  const langs = [
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'ha', label: 'HA', flag: '🇳🇬' },
    { code: 'yo', label: 'YO', flag: '🇳🇬' },
    { code: 'ig', label: 'IG', flag: '🇳🇬' },
  ];
  return `
    <div class="lang-switcher" style="
      display:flex; align-items:center; gap:3px;
      background:var(--dark3); border:1px solid var(--gold-border);
      border-radius:20px; padding:3px 6px;
    ">
      ${langs.map(l => `
        <button onclick="setLang('${l.code}')" title="${l.flag} ${l.label}" style="
          background:${current === l.code ? 'var(--gold)' : 'transparent'};
          color:${current === l.code ? 'var(--dark)' : 'var(--muted)'};
          border:none; border-radius:14px; cursor:pointer;
          font-size:0.72rem; font-weight:${current === l.code ? '700' : '500'};
          padding:3px 8px; transition:all 0.2s;
          font-family:var(--font-body);
        ">${l.label}</button>
      `).join('')}
    </div>
  `;
}


/* ── DEBT EXTRA KEYS (append to each language block via patch) ──
   Add these inside each language in TRANSLATIONS object          */
const DEBT_PATCHES = {
  en: {
    debt_summary: 'Debt Summary', debt_type: 'Type',
    owed_to_me_label: 'Owed To Me', owed_to_me_sub: 'Others owe you',
    i_owe_label: 'I Owe', i_owe_sub: 'You owe others',
    net_position: 'Net Position', net_position_sub: 'After all debts',
    owed_to_me: 'They owe me (Credit)', i_owe: 'I owe them (Debit)',
    owes_me: 'Owes Me', paid_settled: 'Paid / Settled',
    unpaid: 'Unpaid',
  },
  ha: {
    debt_summary: 'Taƙaitaccen Bashi', debt_type: 'Nau\'i',
    owed_to_me_label: 'Ana Mini Bashi', owed_to_me_sub: 'Wasu suna bin ka',
    i_owe_label: 'Ina Bin Wasu', i_owe_sub: 'Kana bin wasu',
    net_position: 'Matsayin Riba', net_position_sub: 'Bayan duk bashi',
    owed_to_me: 'Suna bin ni (Kuɗin Rance)', i_owe: 'Ina bin su (Bashi)',
    owes_me: 'Yana Min Bashi', paid_settled: 'An Biya / An Kawo Karshe',
    unpaid: 'Ba a Biya ba',
  },
  yo: {
    debt_summary: 'Akopọ Gbèsè', debt_type: 'Iru',
    owed_to_me_label: 'Wọn Jẹ Mi', owed_to_me_sub: 'Awọn miran jẹ ọ',
    i_owe_label: 'Mo Jẹ Wọn', i_owe_sub: 'O jẹ awọn miran',
    net_position: 'Ipo Apapọ', net_position_sub: 'Lẹhin gbogbo gbèsè',
    owed_to_me: 'Wọn jẹ mi (Kirẹditi)', i_owe: 'Mo jẹ wọn (Débiti)',
    owes_me: 'Jẹ Mi', paid_settled: 'Ti Sanwo / Ti Parí',
    unpaid: 'Ti A Ko Sanwo',
  },
  ig: {
    debt_summary: 'Nchoputa Ụgwọ', debt_type: 'Ụdị',
    owed_to_me_label: 'Ha Na-agbachi M', owed_to_me_sub: 'Ndị ọzọ na-agbachi gị',
    i_owe_label: 'Agbachiri M', i_owe_sub: 'I na-agbachi ndị ọzọ',
    net_position: 'Ọnọdụ Ngụkọta', net_position_sub: 'Mgbe ụgwọ niile gasịrị',
    owed_to_me: 'Ha na-agbachi m (Kredit)', i_owe: 'Agbachiri m ha (Debit)',
    owes_me: 'Na-agbachi M', paid_settled: 'Akwụọla / Emechala',
    unpaid: 'Akwụghị',
  }
};

// Merge debt patches into main TRANSLATIONS
Object.keys(DEBT_PATCHES).forEach(lang => {
  if (TRANSLATIONS[lang]) {
    Object.assign(TRANSLATIONS[lang], DEBT_PATCHES[lang]);
  }
});

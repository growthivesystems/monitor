 // ═══════════════════════════════════════════════════════════════
// GrowthIve Monitor — Complete Language System
// Supports: English (en), Hausa (ha), Yoruba (yo), Igbo (ig)
// Auto-translates page titles, subtitles and common elements
// without requiring any HTML edits.
// ═══════════════════════════════════════════════════════════════

const TRANSLATIONS = {

  // ════════════════════════════════
  // ENGLISH
  // ════════════════════════════════
  en: {
    // Sidebar & nav
    brand: 'GrowthIve Monitor', dashboard: 'Dashboard',
    daily_sales: 'Daily Sales', expenses: 'Expenses', debts: 'Debts',
    inventory: 'Inventory', purchases: 'Purchases', reports: 'Reports',
    health_score: 'Health Score', calendar: 'Calendar',
    settings: 'Settings', support: 'Support', sign_out: 'Sign Out',
    main_menu: 'Main Menu', analytics: 'Analytics', account: 'Account',

    // Auth
    login: 'Login', register: 'Register', email: 'Email Address',
    password: 'Password', full_name: 'Full Name', business_name: 'Business Name',
    login_btn: 'Sign In →', register_btn: 'Create Account →',
    no_account: "Don't have an account?", have_account: 'Already have an account?',
    forgot_pw: 'Forgot Password?', sign_up: 'Sign Up', sign_in: 'Sign In',

    // Page titles & subtitles
    dashboard_title: 'Dashboard',
    dashboard_sub: 'Your business overview at a glance.',
    sales_title: 'Daily Sales',
    sales_sub: 'Record your daily sales. POS entries from Purchases page auto-sync here.',
    expenses_title: 'Expense Tracker',
    expenses_sub: 'Log all your business expenses to calculate net profit accurately.',
    debts_title: 'Debt Tracker',
    debts_sub: 'Track money owed to you and money you owe others.',
    inventory_title: 'Inventory / Stock Manager',
    inventory_sub: 'Track stock levels, get low-stock alerts, and monitor every change with a full audit trail.',
    purchases_title: 'Purchases / Sales Point',
    purchases_sub: 'Select items from your catalogue. Stock is updated automatically.',
    reports_title: 'Reports & Analytics',
    reports_sub: 'Weekly, monthly and quarterly performance insights.',
    health_score_title: 'Business Health Score',
    health_score_sub: 'An auto-calculated score showing how healthy and profitable your business is this month.',
    calendar_title: 'Business Calendar',
    calendar_sub: 'Schedule payments, restock dates, meetings and important business events.',
    settings_title: 'Settings',
    settings_sub: 'Manage your account, security and preferences.',
    contact_title: 'Contact & Support',
    contact_sub: "We're here to help. Reach out through any channel below.",
    faq_title: 'Frequently Asked Questions',

    // Dashboard KPIs
    todays_sales: "Today's Sales", cash_sales_today: 'Cash Sales Today',
    transfer_sales_today: 'Transfer Sales Today', pos_sales_today: 'POS Sales Today',
    monthly_revenue: 'Monthly Revenue', total_expenses: 'Total Expenses',
    net_profit: 'Net Profit / Loss', outstanding_debts: 'Outstanding Debts',
    todays_transactions: "Today's Transactions", low_stock_alerts: 'Low Stock Alerts',
    upcoming_reminders: 'Upcoming Reminders', business_health: 'Business Health Score',

    // Inventory
    add_stock_item: 'Add Stock Item', item_name: 'Item Name',
    quantity: 'Quantity', unit_price: 'Unit Price',
    low_stock_alert: 'Low Stock Alert Threshold',
    add_to_stock: 'Add to Stock List →', stock_summary: 'Stock Summary',
    total_items: 'Total Items', low_stock_items: 'Low Stock',
    total_stock_value: 'Total Stock Value', recently_deleted: 'Recently Deleted',
    stock_list: 'Stock List', search_items: 'Search items…',
    edit: 'Edit', delete: 'Delete', restore: 'Restore', purge: 'Purge',
    in_stock: 'In Stock', out_of_stock: 'Out of Stock', low_badge: 'Low',
    import_stock: 'Import', export_csv: 'CSV', export_pdf: 'PDF',
    untracked_services: 'Untracked / Services',

    // Sales
    record_sales: 'Record Today\'s Sales',
    simple_record: 'Simple Sales Record', premium_record: '⭐ Premium Sales Record',
    total_sales_amount: 'Total Sales Amount', qty_sold: 'Total Quantity Sold (optional)',
    notes: 'Notes (optional)', save_sale: 'Save Sale Record →',
    sales_by_payment: 'Sales by Payment Source', cash: 'Cash', transfer: 'Transfer',
    pos: 'POS', cash_float: 'Cash Float Tracker',
    opening_balance: 'Opening Balance', cash_paid_out: 'Cash Paid Out',
    closing_balance: 'Closing Cash Balance', monthly_summary: 'This Month Summary',
    sales_history: 'Sales History',

    // Expenses
    add_expense: 'Add Expense', description: 'Description', amount: 'Amount',
    date: 'Date', save_expense: 'Save Expense →',
    monthly_summary_exp: 'Monthly Summary', expense_history: 'Expense History',
    entries: 'Entries', net_profit_loss: 'Net Profit / Loss',

    // Debts
    add_debt: 'Add Debt Record', person_name: 'Person / Business Name',
    debt_type: 'Type', due_date: 'Due Date (optional)',
    owed_to_me: 'They owe me (Credit)', i_owe: 'I owe them (Debit)',
    owed_to_me_label: 'Owed To Me', i_owe_label: 'I Owe',
    net_position: 'Net Position', debt_summary: 'Debt Summary',
    owes_me: 'Owes Me', paid: 'Paid', unpaid: 'Unpaid',
    paid_settled: 'Paid / Settled', mark_paid: 'Mark Paid',
    owed_to_me_sub: 'Others owe you', i_owe_sub: 'You owe others',
    net_position_sub: 'After all debts',

    // Purchases
    item_catalogue: 'Item Catalogue', current_order: 'Current Order',
    complete_sale: 'Complete Sale →', clear_cart: 'Clear Cart',
    customer_name: 'Customer Name (optional)', payment_method: 'Payment Method',
    todays_stats: "Today's Stats", sales_today: 'Sales Today',
    transactions: 'Transactions', recent_txns: 'Recent Transactions',
    manage_stock: 'Manage Stock →', view_daily_sales: 'View Daily Sales',

    // Reports
    monthly: 'Monthly', weekly: 'Weekly', quarterly: 'Quarterly',
    pos_revenue: 'POS Revenue', confirmed_sales: 'Confirmed Sales',
    cash_sales: 'Cash Sales', transfer_sales: 'Transfer Sales',
    pos_card_sales: 'POS Card Sales', outstanding_debt: 'Outstanding Debt',
    export_report: 'Export Report', detailed_breakdown: 'Detailed Breakdown',

    // Calendar
    add_reminder: 'Add Reminder', reminder_title: 'Title',
    reminder_date: 'Date', reminder_type: 'Type',
    reminder_note: 'Note (optional)', save_reminder: 'Save Reminder →',
    upcoming: 'Upcoming Reminders', overdue: 'Overdue',
    payment_due: '💳 Payment Due', restock: '📦 Restock',
    meeting: '🤝 Meeting', general_reminder: '🔔 General Reminder',
    other: '📌 Other',

    // Health Score
    score_breakdown: 'Score Breakdown', business_radar: 'Business Radar',
    recommendations: 'Recommendations', out_of_100: 'out of 100',

    // Settings
    your_profile: 'Your Profile', profile: 'Profile', security: 'Security',
    preferences: 'Preferences', notifications: 'Notifications',
    danger_zone: 'Danger Zone', save_profile: 'Save Profile →',
    change_password: 'Change Password', new_password: 'New Password',
    confirm_password: 'Confirm New Password', update_password: 'Update Password →',
    send_reset_email: '📧 Send Reset Email', active_sessions: 'Active Sessions',
    current_session: 'Current Session', sign_out_all: 'Sign Out All Devices',
    dark_mode: 'Dark Mode', currency: 'Currency Symbol', language: 'Language',
    low_stock_notif: 'Low Stock Alerts', debt_reminders: 'Debt Due Reminders',
    clear_all_data: 'Clear All Data', delete_account: 'Delete Account',
    session: 'Session', sign_out_device: 'Sign Out →',

    // Contact
    email_support: 'Email Support', website: 'Website', documentation: 'Documentation',
    send_message: 'Send a Message', your_name: 'Your Name', subject: 'Subject',
    message: 'Message', send_btn: 'Send Message →',

    // Common
    loading: 'Loading…', saving: 'Saving…', success: 'Success!', error: 'Error',
    cancel: 'Cancel', confirm: 'Confirm', back: 'Back', close: 'Close',
    yes: 'Yes', no: 'No', update: 'Update', search: 'Search',
    no_data: 'No data found.', actions: 'Actions', status: 'Status',
    name: 'Name', price: 'Price', value: 'Value', total: 'Total',
    this_month: 'This Month', today: 'Today', this_week: 'This Week',
  },

  // ════════════════════════════════
  // HAUSA
  // ════════════════════════════════
  ha: {
    brand: 'GrowthIve Monitor', dashboard: 'Allon Kallo',
    daily_sales: 'Tallace Yau', expenses: 'Kashe-kudi', debts: 'Bashi',
    inventory: 'Kayayyaki', purchases: 'Sayayya', reports: 'Rahotanni',
    health_score: 'Maki na Kasuwanci', calendar: 'Kalandar',
    settings: 'Saituna', support: 'Taimako', sign_out: 'Fita',
    main_menu: 'Babban Menu', analytics: 'Nazari', account: 'Asusun',

    login: 'Shiga', register: 'Yi Rajista', email: 'Adireshin Imel',
    password: 'Kalmar Sirri', full_name: 'Cikakken Suna',
    business_name: 'Sunan Kasuwanci', login_btn: 'Shiga →',
    register_btn: 'Ƙirƙiri Asusun →', no_account: 'Ba ka da asusun?',
    have_account: 'Kana da asusun?', forgot_pw: 'Manta Kalmar Sirri?',
    sign_up: 'Yi Rajista', sign_in: 'Shiga',

    dashboard_title: 'Allon Kallo',
    dashboard_sub: 'Duba halin kasuwancinka a taƙaice.',
    sales_title: 'Tallace Yau',
    sales_sub: 'Yi rikodin tallacenka na yau.',
    expenses_title: 'Manajan Kashe-kudi',
    expenses_sub: 'Rubuta duk kuɗin da ka kashewa don sanin ribanku.',
    debts_title: 'Manajan Bashi',
    debts_sub: 'Lura da kuɗin da ake bin ka da kake bin wasu.',
    inventory_title: 'Manajan Kayayyaki',
    inventory_sub: 'Lura da kayayyaki da samun faɗakarwa.',
    purchases_title: 'Sayayya / Wurin Sayarwa',
    purchases_sub: 'Zaɓi kaya kuma kayayyaki za su sabunta kansu.',
    reports_title: 'Rahotanni da Nazari',
    reports_sub: 'Nazarin aikin kasuwanci na mako, wata da kwata.',
    health_score_title: 'Maki na Lafiyar Kasuwanci',
    health_score_sub: 'Maki wanda ke nuna yadda kasuwancinka yake wannan wata.',
    calendar_title: 'Kalandar Kasuwanci',
    calendar_sub: 'Tsara ranakun biyan bashi, sayen kayayyaki da mahimman abubuwa.',
    settings_title: 'Saituna',
    settings_sub: 'Sarrafa asusunka da amincinsa.',
    contact_title: 'Tuntuɓi da Tallafi',
    contact_sub: 'Muna nan don taimaka maka.',
    faq_title: 'Tambayoyi da Ake Yawan Yi',

    dashboard_title: 'Allon Kallo',
    todays_sales: 'Tallace na Yau', cash_sales_today: 'Tallace da Tsabar Kudi Yau',
    transfer_sales_today: 'Tallace ta Canjin Kudi Yau', pos_sales_today: 'Tallace ta POS Yau',
    monthly_revenue: 'Kuɗin Wata', total_expenses: 'Jimlar Kashe-kudi',
    net_profit: 'Riba ko Asara', outstanding_debts: 'Basussuka da Ba a Biya',
    todays_transactions: 'Ma\'amalolin Yau', low_stock_alerts: 'Faɗakarwar Ƙarancin Kaya',
    upcoming_reminders: 'Tunatarwa masu Zuwa', business_health: 'Maki na Lafiyar Kasuwanci',

    add_stock_item: 'Ƙara Kaya', item_name: 'Sunan Kaya',
    quantity: 'Adadi', unit_price: 'Farashi na Kowane',
    low_stock_alert: 'Iyakar Faɗakarwa',
    add_to_stock: 'Ƙara zuwa Jerin Kaya →', stock_summary: 'Taƙaitaccen Kaya',
    total_items: 'Jimlar Kayayyaki', low_stock_items: 'Kayayyaki Kaɗan',
    total_stock_value: 'Jimlar Darajar Kaya', recently_deleted: 'An Goge Kwanan nan',
    stock_list: 'Jerin Kayayyaki', search_items: 'Nemo kaya…',
    edit: 'Gyara', delete: 'Share', restore: 'Dawo', purge: 'Share Har Abada',
    in_stock: 'Akwai Kaya', out_of_stock: 'Babu Kaya', low_badge: 'Kaɗan',
    import_stock: 'Shigo da Kaya', export_csv: 'CSV', export_pdf: 'PDF',
    untracked_services: 'Ba a Bibiyi / Ayyuka',

    record_sales: 'Yi Rikodin Tallacen Yau',
    simple_record: 'Sauƙaƙen Rikodin Tallace', premium_record: '⭐ Cikakken Rikodin Tallace',
    total_sales_amount: 'Jimlar Kuɗin Tallace', qty_sold: 'Adadin da aka Sayar (zaɓi)',
    notes: 'Bayani (zaɓi)', save_sale: 'Ajiye Rikodin Tallace →',
    sales_by_payment: 'Tallace ta Hanyar Biyan Kudi', cash: 'Tsabar Kudi',
    transfer: 'Canja wurin Kudi', pos: 'POS', cash_float: 'Bin Diddigin Tsabar Kudi',
    opening_balance: 'Kuɗin Farawa', cash_paid_out: 'Kuɗin da aka Biya',
    closing_balance: 'Kuɗin Rufe', monthly_summary: 'Taƙaitaccen Wata',
    sales_history: 'Tarihin Tallace',

    add_expense: 'Ƙara Kashe-kudi', description: 'Bayanin',
    amount: 'Adadin Kudi', date: 'Kwanan Wata', save_expense: 'Ajiye Kashe-kudi →',
    monthly_summary_exp: 'Taƙaitaccen Wata', expense_history: 'Tarihin Kashe-kudi',
    entries: 'Rikodan', net_profit_loss: 'Riba ko Asara',

    add_debt: 'Ƙara Bashi', person_name: 'Sunan Mutum ko Kasuwanci',
    debt_type: 'Nau\'i', due_date: 'Ranar Biyan (zaɓi)',
    owed_to_me: 'Suna bin ni (Kuɗin Rance)', i_owe: 'Ina bin su (Bashi)',
    owed_to_me_label: 'Ana Mini Bashi', i_owe_label: 'Ina Bin Wasu',
    net_position: 'Matsayin Riba', debt_summary: 'Taƙaitaccen Bashi',
    owes_me: 'Yana Min Bashi', paid: 'An Biya', unpaid: 'Ba a Biya ba',
    paid_settled: 'An Biya / An Kawo Karshe', mark_paid: 'Nuna An Biya',
    owed_to_me_sub: 'Wasu suna bin ka', i_owe_sub: 'Kana bin wasu',
    net_position_sub: 'Bayan duk bashi',

    item_catalogue: 'Jerin Kayayyaki', current_order: 'Odar Yanzu',
    complete_sale: 'Kammala Tallace →', clear_cart: 'Share Kwandon',
    customer_name: 'Sunan Abokin Ciniki (zaɓi)', payment_method: 'Hanyar Biyan Kudi',
    todays_stats: 'Kididdiga ta Yau', sales_today: 'Tallace na Yau',
    transactions: 'Ma\'amaloli', recent_txns: 'Ma\'amaloli na Kwanan nan',
    manage_stock: 'Sarrafa Kaya →', view_daily_sales: 'Duba Tallace na Yau',

    monthly: 'Na Wata', weekly: 'Na Mako', quarterly: 'Na Kwata',
    pos_revenue: 'Kuɗin POS', confirmed_sales: 'Tallace da aka Tabbatar',
    cash_sales: 'Tallace da Tsabar Kudi', transfer_sales: 'Tallace ta Canjin Kudi',
    pos_card_sales: 'Tallace ta Katin POS', outstanding_debt: 'Bashi da Ba a Biya',
    export_report: 'Fitar da Rahoto', detailed_breakdown: 'Cikakken Rarrabe',

    add_reminder: 'Ƙara Tunatarwa', reminder_title: 'Take',
    reminder_date: 'Kwanan Wata', reminder_type: 'Nau\'i',
    reminder_note: 'Bayani (zaɓi)', save_reminder: 'Ajiye Tunatarwa →',
    upcoming: 'Tunatarwa masu Zuwa', overdue: 'Ya Wuce Lokaci',
    payment_due: '💳 Ranar Biyan Kudi', restock: '📦 Sayen Kayayyaki',
    meeting: '🤝 Taro', general_reminder: '🔔 Tunatarwa ta Gaba ɗaya', other: '📌 Wanin',

    score_breakdown: 'Rarraben Maki', business_radar: 'Radar na Kasuwanci',
    recommendations: 'Shawarwari', out_of_100: 'daga cikin 100',

    your_profile: 'Bayananku', profile: 'Bayanan Kai', security: 'Tsaro',
    preferences: 'Zaɓuɓɓuka', notifications: 'Sanarwa',
    danger_zone: 'Yankin Hadari', save_profile: 'Ajiye Bayanan Kai →',
    change_password: 'Canza Kalmar Sirri', new_password: 'Sabuwar Kalmar Sirri',
    confirm_password: 'Tabbatar da Kalmar Sirri', update_password: 'Sabunta Kalmar Sirri →',
    send_reset_email: '📧 Aika Wasiƙar Sauyawa', active_sessions: 'Zaman da ke Aiki',
    current_session: 'Zaman Yanzu', sign_out_all: 'Fita daga Dukkan Na\'urorin',
    dark_mode: 'Yanayin Duhu', currency: 'Alamar Kudi', language: 'Harshe',
    low_stock_notif: 'Faɗakarwar Ƙarancin Kaya', debt_reminders: 'Tunatarwar Bashi',
    clear_all_data: 'Share Dukkan Bayanan', delete_account: 'Share Asusun',
    session: 'Zaman', sign_out_device: 'Fita →',

    email_support: 'Tallafi ta Imel', website: 'Shafin Yanar Gizo',
    documentation: 'Takardun Taimako', send_message: 'Aika Saƙo',
    your_name: 'Sunanka', subject: 'Batun', message: 'Saƙo',
    send_btn: 'Aika Saƙo →',

    loading: 'Ana lodawa…', saving: 'Ana ajiyewa…', success: 'An yi nasara!',
    error: 'Kuskure', cancel: 'Soke', confirm: 'Tabbatar', back: 'Koma Baya',
    close: 'Rufe', yes: 'Eh', no: 'A\'a', update: 'Sabunta', search: 'Nemo',
    no_data: 'Ba a sami bayani ba.', actions: 'Ayyuka', status: 'Matsayi',
    name: 'Suna', price: 'Farashi', value: 'Darajar', total: 'Jimla',
    this_month: 'Wannan Wata', today: 'Yau', this_week: 'Wannan Mako',
  },

  // ════════════════════════════════
  // YORUBA
  // ════════════════════════════════
  yo: {
    brand: 'GrowthIve Monitor', dashboard: 'Dasibodu',
    daily_sales: 'Tita Ojoojumọ', expenses: 'Inawo', debts: 'Gbèsè',
    inventory: 'Akojọ Ohun Elo', purchases: 'Rira Ọja', reports: 'Ijabọ',
    health_score: 'Àmì Ilera Iṣowo', calendar: 'Kalẹnda',
    settings: 'Ètò', support: 'Iranlọwọ', sign_out: 'Jade',
    main_menu: 'Akojọ Àkọkọ', analytics: 'Itupalẹ', account: 'Àkáùntì',

    login: 'Wọle', register: 'Forukọsilẹ', email: 'Àdírẹ́sì Ìmẹ́lì',
    password: 'Ọrọ Aṣina', full_name: 'Orúkọ Ni Kikun',
    business_name: 'Orúkọ Iṣowo', login_btn: 'Wọle →',
    register_btn: 'Ṣẹda Àkáùntì →', no_account: 'Ṣé o ní àkáùntì?',
    have_account: 'O ti ní àkáùntì tẹlẹ?', forgot_pw: 'Gbagbe Ọrọ Aṣina?',
    sign_up: 'Forukọsilẹ', sign_in: 'Wọle',

    dashboard_title: 'Dasibodu',
    dashboard_sub: 'Ìwòye iṣowo rẹ ni ìpẹkún.',
    sales_title: 'Tita Ojoojumọ',
    sales_sub: 'Gbasilẹ tita ojoojumọ rẹ.',
    expenses_title: 'Atẹle Inawo',
    expenses_sub: 'Kọ gbogbo inawo iṣowo rẹ silẹ.',
    debts_title: 'Atẹle Gbèsè',
    debts_sub: 'Tọpa owó tí a jẹ ọ àti tí o jẹ.',
    inventory_title: 'Oluṣakoso Ohun Elo',
    inventory_sub: 'Tọpa awọn ipele ọja rẹ ki o gba awọn itaniji.',
    purchases_title: 'Rira Ọja / Ibi Tita',
    purchases_sub: 'Yan awọn ohun elo ki ọja rẹ ṣe imudojuiwọn.',
    reports_title: 'Ijabọ àti Itupalẹ',
    reports_sub: 'Awọn oye iṣẹ ọṣẹ, oṣù àti ìdamẹrin.',
    health_score_title: 'Àmì Ilera Iṣowo',
    health_score_sub: 'Àmì tí a ṣe iṣiro fún ọ to fihan bí iṣowo rẹ ṣe nlọ.',
    calendar_title: 'Kalẹnda Iṣowo',
    calendar_sub: 'Ṣeto awọn ọjọ isanwo, atuntura ọja, àti awọn ìṣẹlẹ pataki.',
    settings_title: 'Ètò',
    settings_sub: 'Ṣakoso àkáùntì rẹ àti aabo rẹ.',
    contact_title: 'Kàn sí àti Atilẹyin',
    contact_sub: 'A wà níbí láti ràn ọ lọwọ.',
    faq_title: 'Awọn Ibeere Tí a Máa Ṅ Béèrè',

    todays_sales: 'Tita Òní', cash_sales_today: 'Tita Owo Ni Ọwọ Òní',
    transfer_sales_today: 'Tita Gbigbe Owó Òní', pos_sales_today: 'Tita POS Òní',
    monthly_revenue: 'Owo Oṣù', total_expenses: 'Apao Inawo',
    net_profit: 'Ere Gidi tabi Àdánù', outstanding_debts: 'Gbèsè Ti A Ko Sanwo',
    todays_transactions: 'Awọn Iṣowo Òní', low_stock_alerts: 'Itaniji Ọja Kekere',
    upcoming_reminders: 'Awọn Ìránpàdé Tí Ó Ń bọ̀', business_health: 'Àmì Ilera Iṣowo',

    add_stock_item: 'Fikun Ohun Elo', item_name: 'Orúkọ Ohun Elo',
    quantity: 'Iye', unit_price: 'Idiyele Fun Ọkan',
    low_stock_alert: 'Iye Itaniji Ọja Kekere',
    add_to_stock: 'Fikun si Àkójọ Ọja →', stock_summary: 'Akopọ Ọja',
    total_items: 'Apao Ohun Elo', low_stock_items: 'Ọja Tó Fẹrẹ Parí',
    total_stock_value: 'Iye Apao Ọja', recently_deleted: 'Tí a Paarẹ Laipẹ',
    stock_list: 'Àkójọ Ọja', search_items: 'Wa ohun elo…',
    edit: 'Ṣatunkọ', delete: 'Paarẹ', restore: 'Mu Padà', purge: 'Paarẹ Patapata',
    in_stock: 'Wà Ní Ọja', out_of_stock: 'Parí Ní Ọja', low_badge: 'Kekere',
    import_stock: 'Gbe Wọle', export_csv: 'CSV', export_pdf: 'PDF',
    untracked_services: 'Ti a Ko Tọpa / Awọn Iṣẹ',

    record_sales: 'Gbasilẹ Tita Òní',
    simple_record: 'Igbasilẹ Tita Rọrun', premium_record: '⭐ Igbasilẹ Tita Pipe',
    total_sales_amount: 'Apao Iye Tita', qty_sold: 'Apao Iye Tí a Tà (aṣayan)',
    notes: 'Àkọsílẹ (aṣayan)', save_sale: 'Fi Igbasilẹ Tita Pamọ →',
    sales_by_payment: 'Tita Nipasẹ Ọna Isanwo', cash: 'Owo Ni Ọwọ',
    transfer: 'Gbigbe Owó', pos: 'POS', cash_float: 'Atẹle Owo Ni Ọwọ',
    opening_balance: 'Iye Bẹrẹ', cash_paid_out: 'Owo Tí a San Jade',
    closing_balance: 'Iye Owo Ni Ọwọ Ni Opin', monthly_summary: 'Akopọ Oṣù',
    sales_history: 'Ìtàn Tita',

    add_expense: 'Fikun Inawo', description: 'Apejuwe',
    amount: 'Iye Owó', date: 'Ọjọ', save_expense: 'Fi Inawo Pamọ →',
    monthly_summary_exp: 'Akopọ Oṣù', expense_history: 'Ìtàn Inawo',
    entries: 'Awọn Igbasilẹ', net_profit_loss: 'Ere Gidi tabi Àdánù',

    add_debt: 'Fikun Gbèsè', person_name: 'Orúkọ Eniyan tabi Iṣowo',
    debt_type: 'Iru', due_date: 'Ọjọ Isanpada (aṣayan)',
    owed_to_me: 'Wọn jẹ mi (Kirẹditi)', i_owe: 'Mo jẹ wọn (Débiti)',
    owed_to_me_label: 'Wọn Jẹ Mi', i_owe_label: 'Mo Jẹ Wọn',
    net_position: 'Ipo Apapọ', debt_summary: 'Akopọ Gbèsè',
    owes_me: 'Jẹ Mi', paid: 'Ti Sanwo', unpaid: 'Ti A Ko Sanwo',
    paid_settled: 'Ti Sanwo / Ti Parí', mark_paid: 'Samisi Bi Ti Sanwo',
    owed_to_me_sub: 'Awọn miran jẹ ọ', i_owe_sub: 'O jẹ awọn miran',
    net_position_sub: 'Lẹhin gbogbo gbèsè',

    item_catalogue: 'Katalogi Ohun Elo', current_order: 'Aṣẹ Lọwọlọwọ',
    complete_sale: 'Pari Tita →', clear_cart: 'Ṣofo Agbọn',
    customer_name: 'Orúkọ Onibara (aṣayan)', payment_method: 'Ọna Isanwo',
    todays_stats: 'Iṣiro Òní', sales_today: 'Tita Òní',
    transactions: 'Awọn Iṣowo', recent_txns: 'Awọn Iṣowo Laipẹ',
    manage_stock: 'Ṣakoso Ọja →', view_daily_sales: 'Wo Tita Ojoojumọ',

    monthly: 'Oṣùkooṣù', weekly: 'Ọṣẹkooṣẹ', quarterly: 'Ìdamẹrin',
    pos_revenue: 'Owo POS', confirmed_sales: 'Tita Tí a Jẹrisi',
    cash_sales: 'Tita Owo Ni Ọwọ', transfer_sales: 'Tita Gbigbe Owó',
    pos_card_sales: 'Tita Kaadi POS', outstanding_debt: 'Gbèsè Ti A Ko Sanwo',
    export_report: 'Gbe Ijabọ Jade', detailed_breakdown: 'Ìlọsiwaju Alaye',

    add_reminder: 'Fikun Ìránpàdé', reminder_title: 'Àkọlé',
    reminder_date: 'Ọjọ', reminder_type: 'Iru',
    reminder_note: 'Àkọsílẹ (aṣayan)', save_reminder: 'Fi Ìránpàdé Pamọ →',
    upcoming: 'Awọn Ìránpàdé Tí Ó Ń bọ̀', overdue: 'Ti Koja Akoko',
    payment_due: '💳 Ọjọ Isanwo', restock: '📦 Atuntura Ọja',
    meeting: '🤝 Ìpàdé', general_reminder: '🔔 Ìránpàdé Gbogbogbo', other: '📌 Miran',

    score_breakdown: 'Ìlọsiwaju Àmì', business_radar: 'Rada Iṣowo',
    recommendations: 'Awọn Imọran', out_of_100: 'ninu 100',

    your_profile: 'Profaili Rẹ', profile: 'Profaili', security: 'Aabo',
    preferences: 'Awọn Aṣayan', notifications: 'Awọn Iwifunni',
    danger_zone: 'Agbegbe Ewu', save_profile: 'Fi Profaili Pamọ →',
    change_password: 'Ṣatunṣe Ọrọ Aṣina', new_password: 'Ọrọ Aṣina Tuntun',
    confirm_password: 'Jẹrisi Ọrọ Aṣina', update_password: 'Ṣe Imudojuiwọn Ọrọ Aṣina →',
    send_reset_email: '📧 Fi Ìmẹ́lì Atunṣeto Ranṣẹ', active_sessions: 'Awọn Ìpàdé Tí Ń Ṣiṣẹ',
    current_session: 'Ìpàdé Lọwọlọwọ', sign_out_all: 'Jade kuro Ninu Gbogbo Ẹrọ',
    dark_mode: 'Ipo Okunkun', currency: 'Ami Owó', language: 'Èdè',
    low_stock_notif: 'Itaniji Ọja Kekere', debt_reminders: 'Ìránpàdé Gbèsè',
    clear_all_data: 'Paarẹ Gbogbo Data', delete_account: 'Paarẹ Àkáùntì',
    session: 'Ìpàdé', sign_out_device: 'Jade →',

    email_support: 'Atilẹyin Ìmẹ́lì', website: 'Oju Opo Wẹẹbu',
    documentation: 'Iwe Itọsọna', send_message: 'Fi Ifiranṣẹ Ranṣẹ',
    your_name: 'Orúkọ Rẹ', subject: 'Koko Ọrọ', message: 'Ifiranṣẹ',
    send_btn: 'Fi Ifiranṣẹ Ranṣẹ →',

    loading: 'Ń gbẹ…', saving: 'Ń fipamọ…', success: 'Aṣeyọri!',
    error: 'Àṣìṣe', cancel: 'Fagilé', confirm: 'Jẹrisi', back: 'Padà',
    close: 'Sunmọ', yes: 'Bẹẹni', no: 'Bẹẹkọ', update: 'Ṣe Imudojuiwọn',
    search: 'Wa', no_data: 'Ko si data ti a ri.', actions: 'Awọn Iṣe',
    status: 'Ipo', name: 'Orúkọ', price: 'Idiyele', value: 'Iye',
    total: 'Apao', this_month: 'Oṣù Yìí', today: 'Òní', this_week: 'Ọṣẹ Yìí',
  },

  // ════════════════════════════════
  // IGBO
  // ════════════════════════════════
  ig: {
    brand: 'GrowthIve Monitor', dashboard: 'Deshbọọdụ',
    daily_sales: 'Ahịa Kwa Ụbọchị', expenses: 'Ego A Na-eji', debts: 'Ụgwọ',
    inventory: 'Ngwongwo', purchases: 'Ịzụta Ihe', reports: 'Akụkọ',
    health_score: 'Àmà Ahụike Azụmaahịa', calendar: 'Kalenda',
    settings: 'Ntọala', support: 'Enyemaka', sign_out: 'Pụọ',
    main_menu: 'Isi Menyu', analytics: 'Nyocha', account: 'Akaụntụ',

    login: 'Banye', register: 'Debanye Aha', email: 'Adreesị Ozi-Ele',
    password: 'Okwuntughe', full_name: 'Aha Zuru Oke',
    business_name: 'Aha Azụmaahịa', login_btn: 'Banye →',
    register_btn: 'Mepụta Akaụntụ →', no_account: 'Ị nweghị akaụntụ?',
    have_account: 'Ị nwere akaụntụ?', forgot_pw: 'Chefuo Okwuntughe?',
    sign_up: 'Debanye Aha', sign_in: 'Banye',

    dashboard_title: 'Deshbọọdụ',
    dashboard_sub: 'Nchoputa azụmaahịa gị n\'oge nto.',
    sales_title: 'Ahịa Kwa Ụbọchị',
    sales_sub: 'Debanye ahịa kwa ụbọchị rị.',
    expenses_title: 'Onye Ntọala Ego A Na-eji',
    expenses_sub: 'Dee ego niile i na-eji maka azụmaahịa.',
    debts_title: 'Onye Ntọala Ụgwọ',
    debts_sub: 'Soro ego a na-ákwụ gị na nke i na-áọ ndị ọzọ.',
    inventory_title: 'Onye Njikwa Ngwongwo',
    inventory_sub: 'Soro ọkwa ihe ị nwere ma nweta ọdịmma.',
    purchases_title: 'Ịzụta Ihe / Ebe Ire Ahịa',
    purchases_sub: 'Họrọ ihe ka ngwongwo mee ihe n\'ụzọ akpaaka.',
    reports_title: 'Akụkọ na Nyocha',
    reports_sub: 'Nchoputa ọrụ n\'izu, ọnwa na ọkara.',
    health_score_title: 'Àmà Ahụike Azụmaahịa',
    health_score_sub: 'Àmà a tọrọ ngọzi nke na-egosi otu azụmaahịa gị si dị mma.',
    calendar_title: 'Kalenda Azụmaahịa',
    calendar_sub: 'Hazie ụbọchị ịkwụ ụgwọ, iweta ihe, na ihe mkpa ndị ọzọ.',
    settings_title: 'Ntọala',
    settings_sub: 'Jikwaa akaụntụ rị na nchedo ya.',
    contact_title: 'Kpọtụrụ na Enyemaka',
    contact_sub: 'Anyị dị ebe a iji nyere gị aka.',
    faq_title: 'Ajụjụ A Na-ajụkarị',

    todays_sales: 'Ahịa Taa', cash_sales_today: 'Ahịa Ego Aka Taa',
    transfer_sales_today: 'Ahịa Nnyefe Ego Taa', pos_sales_today: 'Ahịa POS Taa',
    monthly_revenue: 'Ego Ọnwa', total_expenses: 'Ngụkọta Ego A Na-eji',
    net_profit: 'Uru N\'ezie ma ọ bụ Ọnwụ', outstanding_debts: 'Ụgwọ A Akwụghị',
    todays_transactions: 'Azụmaahịa Taa', low_stock_alerts: 'Ọdịmma Ngwongwo Fọdụrụ Obere',
    upcoming_reminders: 'Ndetu Na-abịa', business_health: 'Àmà Ahụike Azụmaahịa',

    add_stock_item: 'Tinye Ihe', item_name: 'Aha Ihe',
    quantity: 'Ọnụọgụ', unit_price: 'Ọnụahịa Otu Ihe',
    low_stock_alert: 'Ọkwa Ọdịmma Ngwongwo Fọdụrụ Obere',
    add_to_stock: 'Tinye na Ndepụta Ihe →', stock_summary: 'Nchoputa Ngwongwo',
    total_items: 'Ngụkọta Ihe', low_stock_items: 'Ngwongwo Fọdụrụ Obere',
    total_stock_value: 'Ngụkọta Ọnụahịa Ngwongwo', recently_deleted: 'Ehichapụrụ N\'oge Nso',
    stock_list: 'Ndepụta Ngwongwo', search_items: 'Chọọ ihe…',
    edit: 'Dezie', delete: 'Hichapụ', restore: 'Weghachite',
    purge: 'Hichapụ Ruo Mgbe Ebighi Ebi',
    in_stock: 'Dị N\'ọnọdụ', out_of_stock: 'Agwụla Ihe', low_badge: 'Obere',
    import_stock: 'Webata', export_csv: 'CSV', export_pdf: 'PDF',
    untracked_services: 'A Ṣọghị / Ọrụ',

    record_sales: 'Debanye Ahịa Taa',
    simple_record: 'Ndekọ Ahịa Dị Mfe', premium_record: '⭐ Ndekọ Ahịa Zuru Oke',
    total_sales_amount: 'Ngụkọta Ọnụọgụ Ahịa', qty_sold: 'Ọnụọgụ Niile Ere (ọhọrọ)',
    notes: 'Ndetu (ọhọrọ)', save_sale: 'Chekwa Ndekọ Ahịa →',
    sales_by_payment: 'Ahịa Site na Ụzọ Ịkwụ Ụgwọ', cash: 'Ego Aka',
    transfer: 'Nnyefe Ego', pos: 'POS', cash_float: 'Soro Ego Aka',
    opening_balance: 'Ego Mmalite', cash_paid_out: 'Ego E Wepụrụ',
    closing_balance: 'Ego Aka Njedebe', monthly_summary: 'Nchoputa Ọnwa',
    sales_history: 'Akụkọ Ahịa',

    add_expense: 'Tinye Ego A Na-eji', description: 'Nkọwa',
    amount: 'Ọnụọgụ Ego', date: 'Ụbọchị', save_expense: 'Chekwa Ego A Na-eji →',
    monthly_summary_exp: 'Nchoputa Ọnwa', expense_history: 'Akụkọ Ego A Na-eji',
    entries: 'Ndekọ', net_profit_loss: 'Uru N\'ezie ma ọ bụ Ọnwụ',

    add_debt: 'Tinye Ụgwọ', person_name: 'Aha Onye ma ọ bụ Azụmaahịa',
    debt_type: 'Ụdị', due_date: 'Ụbọchị Nkwụghachi (ọhọrọ)',
    owed_to_me: 'Ha na-agbachi m (Kredit)', i_owe: 'Agbachiri m ha (Debit)',
    owed_to_me_label: 'Ha Na-agbachi M', i_owe_label: 'Agbachiri M',
    net_position: 'Ọnọdụ Ngụkọta', debt_summary: 'Nchoputa Ụgwọ',
    owes_me: 'Na-agbachi M', paid: 'Akwụọla', unpaid: 'Akwụghị',
    paid_settled: 'Akwụọla / Emechala', mark_paid: 'Kọọ Na Akwụọla',
    owed_to_me_sub: 'Ndị ọzọ na-agbachi gị', i_owe_sub: 'I na-agbachi ndị ọzọ',
    net_position_sub: 'Mgbe ụgwọ niile gasịrị',

    item_catalogue: 'Ndepụta Ihe', current_order: 'Iwu Ugbu A',
    complete_sale: 'Mechaa Ahịa →', clear_cart: 'Hichapụ Ụgbọ',
    customer_name: 'Aha Onye Ahịa (ọhọrọ)', payment_method: 'Ụzọ Ịkwụ Ụgwọ',
    todays_stats: 'Ihe Omume Taa', sales_today: 'Ahịa Taa',
    transactions: 'Azụmaahịa', recent_txns: 'Azụmaahịa N\'oge Nso',
    manage_stock: 'Jikwaa Ngwongwo →', view_daily_sales: 'Lee Ahịa Kwa Ụbọchị',

    monthly: 'Kwa Ọnwa', weekly: 'Kwa Izu', quarterly: 'Kwa Ọkara',
    pos_revenue: 'Ego POS', confirmed_sales: 'Ahịa E Kwenyere',
    cash_sales: 'Ahịa Ego Aka', transfer_sales: 'Ahịa Nnyefe Ego',
    pos_card_sales: 'Ahịa Kaadị POS', outstanding_debt: 'Ụgwọ A Akwụghị',
    export_report: 'Bupụta Akụkọ', detailed_breakdown: 'Nkọwa Zuru Oke',

    add_reminder: 'Tinye Ndetu', reminder_title: 'Aha',
    reminder_date: 'Ụbọchị', reminder_type: 'Ụdị',
    reminder_note: 'Ndetu (ọhọrọ)', save_reminder: 'Chekwa Ndetu →',
    upcoming: 'Ndetu Na-abịa', overdue: 'Gachara Oge',
    payment_due: '💳 Ụbọchị Ịkwụ Ụgwọ', restock: '📦 Iweta Ihe',
    meeting: '🤝 Ọgbakọ', general_reminder: '🔔 Ndetu Izugbe', other: '📌 Nke Ọzọ',

    score_breakdown: 'Nkọwa Àmà', business_radar: 'Radar Azụmaahịa',
    recommendations: 'Ndụmọdụ', out_of_100: 'n\'ime 100',

    your_profile: 'Profaịlụ Gị', profile: 'Profaịlụ', security: 'Nchedo',
    preferences: 'Nhọrọ', notifications: 'Ọkwa',
    danger_zone: 'Mpaghara Ihe Egwu', save_profile: 'Chekwa Profaịlụ →',
    change_password: 'Gbanwee Okwuntughe', new_password: 'Okwuntughe Ọhụrụ',
    confirm_password: 'Kwenye Okwuntughe', update_password: 'Mee Okwuntughe Ọhụrụ →',
    send_reset_email: '📧 Zipu Ozi-Ele Ntọgharị', active_sessions: 'Ọrụ Na-arụ Ugbu A',
    current_session: 'Ọrụ Ugbu A', sign_out_all: 'Pụọ n\'Ngwaọrụ Niile',
    dark_mode: 'Ọnọdụ Oji', currency: 'Akara Ego', language: 'Asụsụ',
    low_stock_notif: 'Ọdịmma Ngwongwo Fọdụrụ Obere', debt_reminders: 'Ndetu Ụgwọ',
    clear_all_data: 'Hichapụ Data Niile', delete_account: 'Hichapụ Akaụntụ',
    session: 'Ọrụ', sign_out_device: 'Pụọ →',

    email_support: 'Enyemaka Ozi-Ele', website: 'Weebụsaịtị',
    documentation: 'Akwụkwọ Nduzi', send_message: 'Zipu Ozi',
    your_name: 'Aha Gị', subject: 'Isi Ihe', message: 'Ozi',
    send_btn: 'Zipu Ozi →',

    loading: 'Na-ebuga…', saving: 'Na-echekwa…', success: 'Ọ Siiri Ike!',
    error: 'Njehie', cancel: 'Kagbuo', confirm: 'Kwenye', back: 'Laghachi',
    close: 'Mechie', yes: 'Ee', no: 'Mba', update: 'Mee Ọhụrụ',
    search: 'Chọọ', no_data: 'Achọtaghị data ọ bụla.', actions: 'Omume',
    status: 'Ọnọdụ', name: 'Aha', price: 'Ọnụahịa', value: 'Uru',
    total: 'Ngụkọta', this_month: 'Ọnwa A', today: 'Taa', this_week: 'Izu A',
  }
};

/* ═══════════════════════════════════════════════════════════════
   LANGUAGE ENGINE
═══════════════════════════════════════════════════════════════ */

function getLang() {
  return localStorage.getItem('growthive_lang') || 'en';
}

function setLang(code) {
  localStorage.setItem('growthive_lang', code);
  location.reload();
}

function t(key) {
  const lang = getLang();
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key])
    || TRANSLATIONS['en'][key]
    || key;
}

// Apply data-lang attributes on any element
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
  document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-lang-placeholder'));
  });
}

/* ═══════════════════════════════════════════════════════════════
   AUTO PAGE TRANSLATOR
   Automatically translates page title, subtitle and common
   elements based on the current page URL — no HTML edits needed.
═══════════════════════════════════════════════════════════════ */
function autoTranslatePage() {
  const lang = getLang();
  if (lang === 'en') return; // English is default — no changes needed

  const page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

  // Map each page to its title and subtitle translation keys
  const pageMeta = {
    dashboard:      { title: 'dashboard_title',     sub: 'dashboard_sub' },
    sales:          { title: 'sales_title',          sub: 'sales_sub' },
    expenses:       { title: 'expenses_title',       sub: 'expenses_sub' },
    debts:          { title: 'debts_title',          sub: 'debts_sub' },
    inventory:      { title: 'inventory_title',      sub: 'inventory_sub' },
    purchases:      { title: 'purchases_title',      sub: 'purchases_sub' },
    reports:        { title: 'reports_title',        sub: 'reports_sub' },
    'health-score': { title: 'health_score_title',   sub: 'health_score_sub' },
    calendar:       { title: 'calendar_title',       sub: 'calendar_sub' },
    settings:       { title: 'settings_title',       sub: 'settings_sub' },
    contact:        { title: 'contact_title',        sub: 'contact_sub' },
    faq:            { title: 'faq_title',            sub: null },
  };

  const meta = pageMeta[page];
  if (meta) {
    // Translate .page-title
    const titleEl = document.querySelector('.page-title');
    if (titleEl && meta.title) {
      const translated = t(meta.title);
      // Keep any emoji prefix
      const emoji = titleEl.textContent.match(/^[\p{Emoji}\s]+/u);
      titleEl.textContent = emoji ? emoji[0] + translated : translated;
    }
    // Translate .page-subtitle
    const subEl = document.querySelector('.page-subtitle');
    if (subEl && meta.sub) subEl.textContent = t(meta.sub);
  }

  // ── Translate common buttons by their English text ──
  const btnMap = {
    'Add to Stock List →': t('add_to_stock'),
    'Save Expense →':      t('save_expense'),
    'Save Sale Record →':  t('save_sale'),
    'Save Reminder →':     t('save_reminder'),
    'Add Debt Record →':   t('add_debt') + ' →',
    'Complete Sale →':     t('complete_sale'),
    'Clear Cart':          t('clear_cart'),
    'Send Message →':      t('send_btn'),
    'Save Profile →':      t('save_profile'),
    'Sign Out →':          t('sign_out_device'),
    'Sign Out All Devices':t('sign_out_all'),
    'Update Password →':   t('update_password'),
    'Manage Stock →':      t('manage_stock'),
  };

  document.querySelectorAll('button, .btn').forEach(btn => {
    const txt = btn.textContent.trim();
    if (btnMap[txt]) btn.textContent = btnMap[txt];
  });

  // ── Translate common labels ──
  document.querySelectorAll('label').forEach(label => {
    const txt = label.textContent.trim();
    const labelMap = {
      'Date': t('date'), 'Amount': t('amount'), 'Amount (₦)': t('amount'),
      'Description': t('description'), 'Notes (optional)': t('notes'),
      'Full Name': t('full_name'), 'Business Name': t('business_name'),
      'Email Address': t('email'), 'Password': t('password'),
      'Type': t('debt_type'), 'Due Date (optional)': t('due_date'),
      'Title': t('reminder_title'), 'Note (optional)': t('reminder_note'),
      'Item Name': t('item_name'), 'Quantity': t('quantity'),
      'Unit Price (₦)': t('unit_price'),
      'Customer Name (optional)': t('customer_name'),
      'Payment Method': t('payment_method'),
    };
    if (labelMap[txt]) label.textContent = labelMap[txt];
  });

  // ── Apply any data-lang attributes ──
  applyTranslations();
}

/* ═══════════════════════════════════════════════════════════════
   LANGUAGE SWITCHER — renders in navbar
═══════════════════════════════════════════════════════════════ */
function renderLangSwitcher() {
  const current = getLang();
  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'ha', label: 'HA' },
    { code: 'yo', label: 'YO' },
    { code: 'ig', label: 'IG' },
  ];
  return `
    <div class="lang-switcher" style="
      display:flex; align-items:center; gap:2px;
      background:var(--dark3); border:1px solid var(--gold-border);
      border-radius:20px; padding:3px 5px; margin-right:4px;
    ">
      ${langs.map(l => `
        <button onclick="setLang('${l.code}')" style="
          background:${current === l.code ? 'var(--gold)' : 'transparent'};
          color:${current === l.code ? 'var(--dark)' : 'var(--muted)'};
          border:none; border-radius:14px; cursor:pointer;
          font-size:0.7rem; font-weight:${current === l.code ? '700' : '500'};
          padding:3px 8px; transition:all 0.2s;
          font-family:var(--font-body); line-height:1;
        ">${l.label}</button>
      `).join('')}
    </div>
  `;
}
 

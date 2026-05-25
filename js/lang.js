 // ═══════════════════════════════════════════════════════════════
// GrowthIve Monitor — Complete Language System v3
// Supports: English (en), Hausa (ha), Yoruba (yo), Igbo (ig)
// Full page translation — no HTML edits needed.
// ═══════════════════════════════════════════════════════════════

const TRANSLATIONS = {
  en: {
    // Sidebar & nav
    brand:'GrowthIve Monitor',dashboard:'Dashboard',daily_sales:'Daily Sales',
    expenses:'Expenses',debts:'Debts',inventory:'Inventory',purchases:'Purchases',
    reports:'Reports',health_score:'Health Score',calendar:'Calendar',
    settings:'Settings',support:'Support',sign_out:'Sign Out',
    main_menu:'Main Menu',analytics:'Analytics',account:'Account',

    // Auth
    login:'Login',register:'Register',email:'Email Address',password:'Password',
    full_name:'Full Name',business_name:'Business Name',login_btn:'Sign In →',
    register_btn:'Create Account →',no_account:"Don't have an account?",
    have_account:'Already have an account?',forgot_pw:'Forgot Password?',
    sign_up:'Sign Up',sign_in:'Sign In',

    // Page titles
    dashboard_title:'Dashboard',dashboard_sub:'Your business overview at a glance.',
    sales_title:'Daily Sales',sales_sub:'Record your daily sales. POS entries from Purchases page auto-sync here.',
    expenses_title:'Expense Tracker',expenses_sub:'Log all your business expenses to calculate net profit accurately.',
    debts_title:'Debt Tracker',debts_sub:'Track money owed to you and money you owe others.',
    inventory_title:'Inventory / Stock Manager',inventory_sub:'Track stock levels, get low-stock alerts, and monitor every change with a full audit trail.',
    purchases_title:'Purchases / Sales Point',purchases_sub:'Select items from your catalogue. Stock is updated automatically.',
    reports_title:'Reports & Analytics',reports_sub:'Weekly, monthly and quarterly performance insights.',
    health_score_title:'Business Health Score',health_score_sub:'An auto-calculated score showing how healthy and profitable your business is this month.',
    calendar_title:'Business Calendar',calendar_sub:'Schedule payments, restock dates, meetings and important business events.',
    settings_title:'Settings',settings_sub:'Manage your account, security and preferences.',
    contact_title:'Contact & Support',contact_sub:"We're here to help. Reach out through any channel below.",
    faq_title:'Frequently Asked Questions',

    // Dashboard
    todays_sales:"Today's Sales",cash_sales_today:'Cash Sales Today',
    transfer_sales_today:'Transfer Sales Today',pos_sales_today:'POS Sales Today',
    monthly_revenue:'Monthly Revenue',total_expenses:'Total Expenses',
    net_profit:'Net Profit / Loss',outstanding_debts:'Outstanding Debts',
    todays_transactions:"Today's Transactions",low_stock_alerts:'Low Stock Alerts',
    upcoming_reminders:'Upcoming Reminders',business_health:'Business Health Score',
    live_pos_transactions:'Live POS transactions',payment_cash:'Payment: Cash',
    payment_transfer:'Payment: Transfer',payment_pos:'Payment: POS',
    daily_sales_pos:'Daily sales + POS this month',this_month:'This Month',
    revenue_expenses:'Revenue − expenses this month',unpaid_balances:'Unpaid balances',
    view_pos:'View POS →',manage:'Manage',full_report:'Full Report',
    calculating:'Calculating…',healthy_business:'🟢 Healthy Business',
    needs_attention:'🟡 Needs Attention',critical:'🔴 Critical — Review Now',

    // Inventory
    add_stock_item:'Add Stock Item',item_name:'Item Name',quantity:'Quantity',
    unit_price:'Unit Price',low_stock_alert:'Low Stock Alert Threshold',
    add_to_stock:'Add to Stock List →',stock_summary:'Stock Summary',
    total_items:'Total Items',low_stock_items:'Low Stock',
    total_stock_value:'Total Stock Value',recently_deleted:'Recently Deleted',
    untracked_services:'Untracked / Services',stock_list:'Stock List',
    search_items:'Search items…',edit:'Edit',delete:'Delete',
    restore:'Restore',purge:'Purge',in_stock:'In Stock',
    out_of_stock:'Out of Stock',low_badge:'Low',import_stock:'Import',
    export_csv:'CSV',export_pdf:'PDF',activity_log:'Inventory Activity Log',
    click_expand:'Click to expand',all_actions:'All Actions',
    added:'Added',edited:'Edited',deleted_log:'Deleted',
    restored:'Restored',purged:'Purged',imported:'Imported',sold:'Sold',
    refresh:'🔄 Refresh',goods_services:'(goods or services)',
    leave_blank:'leave blank or 0 for services / untracked goods',
    only_tracked:'— only applies when qty > 0',
    full_audit:'🔒 Full Audit Trail Active',
    audit_desc:'Every addition, edit, deletion and restoration is permanently logged. Deleted items are recoverable for 30 days.',
    type_delete:'Type DELETE to confirm:',
    type_delete_ph:'Type DELETE here…',
    yes_delete:'🗑️ Yes, Delete Item',
    secure_verify:'🔒 Secure Verification Required',
    send_verify:'📧 Send Verification Link',
    identity_verified:'✅ Identity verified. You may now edit this item.',
    update_stock:'Update Stock →',
    import_title:'📥 Import Stock from File',
    click_browse:'Click to browse',drag_drop:'or drag and drop your file here',
    download_template:'📄 Download CSV Template',
    import_btn:'✅ Import Items →',diff_file:'← Different File',

    // Sales
    record_sales:"Record Today's Sales",simple_record:'Simple Sales Record',
    premium_record:'⭐ Premium Sales Record',total_sales_amount:'Total Sales Amount (₦)',
    qty_sold:'Total Quantity Sold (optional)',notes:'Notes (optional)',
    save_sale:'Save Sale Record →',sales_by_payment:'Sales by Payment Source',
    cash:'Cash',transfer:'Transfer',pos:'POS',
    cash_float:'Cash Float Tracker',opening_balance:'Opening Balance (₦)',
    cash_paid_out:'Cash Paid Out (₦)',closing_balance:'Closing Cash Balance',
    monthly_summary:'This Month Summary',sales_history:'Sales History',
    total_sales:'Total Sales',cash_sales:'Cash Sales',
    transfer_sales:'Transfer Sales',pos_sales:'POS Sales',entries:'Entries',
    save_sale_btn:'Save Sale Record →',update_record:'A record exists for this date — saving will update it.',

    // Expenses
    add_expense:'Add Expense',description:'Description',amount:'Amount (₦)',
    date:'Date',save_expense:'Save Expense →',monthly_summary_exp:'Monthly Summary',
    expense_history:'Expense History',net_profit_loss:'Net Profit / Loss',
    sales_minus_expenses:'Sales minus Expenses',no_expenses:'No expenses recorded for this period.',

    // Debts
    add_debt:'Add Debt Record',person_name:'Person / Business Name',
    debt_type:'Type',due_date:'Due Date (optional)',
    owed_to_me:'They owe me (Credit)',i_owe:'I owe them (Debit)',
    owed_to_me_label:'Owed To Me',i_owe_label:'I Owe',
    net_position:'Net Position',debt_summary:'Debt Summary',
    owes_me:'Owes Me',paid:'Paid',unpaid:'Unpaid',
    paid_settled:'Paid / Settled',mark_paid:'✓ Paid',
    owed_to_me_sub:'Others owe you',i_owe_sub:'You owe others',
    net_position_sub:'After all debts',person_ph:'e.g. Ade Bakery, Musa Supplier…',

    // Purchases / POS
    item_catalogue:'Item Catalogue',current_order:'Current Order',
    complete_sale:'✅ Complete Sale →',clear_cart:'🗑️ Clear Cart',
    customer_name:'Customer Name (optional)',payment_method:'Payment Method',
    todays_stats:"Today's Stats",sales_today:'Sales Today',
    transactions:'Transactions',recent_txns:'Recent Transactions',
    manage_stock:'Manage Stock →',view_daily_sales:'📋 View Daily Sales',
    no_items_yet:'No items added yet.',tap_to_add:'Tap any item to add it.',
    walk_in:'Walk-in customer…',add_notes:'Additional notes…',
    tracked_stock:'Tracked stock',service_untracked:'Service / Untracked',
    out_stock_tracked:'Out of stock (tracked)',last_20:'Last 20 POS sales',

    // Reports
    monthly:'Monthly',weekly:'Weekly',quarterly:'Quarterly',
    pos_revenue:'POS Revenue',confirmed_sales:'Confirmed Sales',
    pos_card_sales:'POS Card Sales',outstanding_debt:'Outstanding Debt',
    export_report:'Export Report',detailed_breakdown:'Detailed Breakdown',
    from_purchase:'From purchase transactions',manual_daily:'Manual daily records',
    logged_expenses:'Logged expenses',confirmed_minus:'Confirmed sales − expenses',
    pos_cash_payments:'POS: cash payments',pos_transfer:'POS: transfer payments',
    pos_card_payments:'POS: card payments',unpaid_balances_r:'Unpaid balances',
    export_csv_btn:'📊 Export CSV',print_pdf:'🖨️ Print / Save PDF',
    shows_pos:'Shows POS transactions, confirmed daily records, and expenses combined.',

    // Calendar
    add_reminder:'➕ Add Reminder',reminder_title:'Title',reminder_date:'Date',
    reminder_type:'Type',reminder_note:'Note (optional)',
    save_reminder:'Save Reminder →',upcoming:'🔔 Upcoming Reminders',
    overdue:'⚠️ Overdue',payment_due:'💳 Payment Due',restock:'📦 Restock',
    meeting:'🤝 Meeting',general_reminder:'🔔 General Reminder',other:'📌 Other',
    no_upcoming:'No upcoming reminders.',events_on:'Events on',
    add_one:'+ Add one',title_ph:'e.g. Pay supplier, Restock sugar…',
    note_ph:'Extra details…',

    // Health Score
    score_breakdown:'📊 Score Breakdown',business_radar:'🕸️ Business Radar',
    recommendations:'💡 Recommendations',out_of_100:'out of 100',
    how_each:'How each area contributes to your total score.',
    score_based:'Score is calculated based on your current month\'s data.',
    keep_recording:'Keep recording sales and expenses regularly for an accurate score.',
    record_pos:'🛒 Record POS Sales',add_daily:'➕ Add Daily Record',
    add_expenses:'➕ Add Expenses',update_stock_btn:'📦 Update Stock',
    manage_debts:'🤝 Manage Debts',

    // Settings
    your_profile:'Your Profile',profile:'👤 Profile',security:'🔒 Security',
    preferences:'⚙️ Preferences',notifications:'🔔 Notifications',
    danger_zone:'⚠️ Danger Zone',save_profile:'Save Profile →',
    change_password:'Change Password',new_password:'New Password',
    confirm_password:'Confirm New Password',update_password:'Update Password →',
    send_reset_email:'📧 Send Reset Email',active_sessions:'Active Sessions',
    current_session:'Current Session',sign_out_all:'Sign Out All Devices',
    dark_mode:'Dark Mode',currency:'Currency Symbol',language:'Language',
    low_stock_notif:'Low Stock Alerts',debt_reminders:'Debt Due Reminders',
    clear_all_data:'🗑️ Clear All Data',delete_account:'💀 Delete Account',
    session:'Session',sign_out_device:'Sign Out →',
    min_6:'Min. 6 characters',repeat_pw:'Repeat new password',
    prefer_email:'Prefer to reset via email? We\'ll send a secure link to your inbox.',
    display:'Display',toggle_theme:'Toggle between dark and light theme',
    currency_desc:'Choose how amounts are displayed throughout the app',
    threshold_desc:'Alert when inventory items fall below this quantity',
    low_stock_desc:'Show warnings when inventory items fall below threshold',
    debt_desc:'Highlight overdue debt records on dashboard',
    clear_desc:'Permanently delete all your sales, expenses, debts, inventory and reminders. Your account and profile will remain.',
    delete_desc:'Permanently delete your account and all associated data. This cannot be recovered.',
    sign_out_desc:'Log out of your account on this device',
    email_cannot:'Email changes are managed via Supabase authentication.',
    profile_tab:'Your Profile',
    send_reset_link:'Send Reset Link',

    // Contact
    email_support:'Email Support',website:'Website',documentation:'Documentation',
    send_message:'Send a Message',your_name:'Your Name',subject:'Subject',
    message:'Message',send_btn:'Send Message →',
    for_account:'For account or billing issues',visit_main:'Visit our main site for all services',
    how_to_guides:'How-to guides and FAQs',view_docs:'View Docs →',
    fill_form:'Fill in the form and we\'ll get back to you within 24 hours.',
    select_topic:'Select a topic…',account_issue:'Account Issue',
    billing_q:'Billing Question',feature_req:'Feature Request',
    bug_report:'Bug Report',general_enquiry:'General Enquiry',
    describe:'Describe your issue or question…',
    back_home:'← Back to Home',

    // Common
    loading:'Loading…',saving:'Saving…',success:'Success!',error:'Error',
    cancel:'Cancel',confirm:'Confirm',back:'Back',close:'Close',
    yes:'Yes',no:'No',update:'Update',search:'Search',
    no_data:'No data found.',actions:'Actions',status:'Status',
    name:'Name',price:'Price',value:'Value',total:'Total',
    today:'Today',this_week:'This Week',
    person:'Person',date_col:'Date',amount_col:'Amount',type_col:'Type',
    due_date_col:'Due Date',status_col:'Status',
  },

  ha: {
    brand:'GrowthIve Monitor',dashboard:'Allon Kallo',daily_sales:'Tallace Yau',
    expenses:'Kashe-kudi',debts:'Bashi',inventory:'Kayayyaki',purchases:'Sayayya',
    reports:'Rahotanni',health_score:'Maki na Kasuwanci',calendar:'Kalandar',
    settings:'Saituna',support:'Taimako',sign_out:'Fita',
    main_menu:'Babban Menu',analytics:'Nazari',account:'Asusun',

    login:'Shiga',register:'Yi Rajista',email:'Adireshin Imel',
    password:'Kalmar Sirri',full_name:'Cikakken Suna',
    business_name:'Sunan Kasuwanci',login_btn:'Shiga →',
    register_btn:'Ƙirƙiri Asusun →',no_account:'Ba ka da asusun?',
    have_account:'Kana da asusun?',forgot_pw:'Manta Kalmar Sirri?',
    sign_up:'Yi Rajista',sign_in:'Shiga',

    dashboard_title:'Allon Kallo',dashboard_sub:'Duba halin kasuwancinka a taƙaice.',
    sales_title:'Tallace Yau',sales_sub:'Yi rikodin tallacenka na yau.',
    expenses_title:'Manajan Kashe-kudi',expenses_sub:'Rubuta duk kuɗin da ka kashewa.',
    debts_title:'Manajan Bashi',debts_sub:'Lura da kuɗin da ake bin ka da kake bin wasu.',
    inventory_title:'Manajan Kayayyaki',inventory_sub:'Lura da kayayyaki da samun faɗakarwa.',
    purchases_title:'Sayayya / Wurin Sayarwa',purchases_sub:'Zaɓi kaya kuma kayayyaki za su sabunta kansu.',
    reports_title:'Rahotanni da Nazari',reports_sub:'Nazarin aikin kasuwanci na mako, wata da kwata.',
    health_score_title:'Maki na Lafiyar Kasuwanci',health_score_sub:'Maki wanda ke nuna yadda kasuwancinka yake.',
    calendar_title:'Kalandar Kasuwanci',calendar_sub:'Tsara ranakun biyan bashi, sayen kayayyaki da mahimman abubuwa.',
    settings_title:'Saituna',settings_sub:'Sarrafa asusunka da amincinsa.',
    contact_title:'Tuntuɓi da Tallafi',contact_sub:'Muna nan don taimaka maka.',
    faq_title:'Tambayoyi da Ake Yawan Yi',

    todays_sales:'Tallace na Yau',cash_sales_today:'Tallace da Tsabar Kudi Yau',
    transfer_sales_today:'Tallace ta Canjin Kudi Yau',pos_sales_today:'Tallace ta POS Yau',
    monthly_revenue:'Kuɗin Wata',total_expenses:'Jimlar Kashe-kudi',
    net_profit:'Riba ko Asara',outstanding_debts:'Basussuka da Ba a Biya',
    todays_transactions:'Ma\'amalolin Yau',low_stock_alerts:'Faɗakarwar Ƙarancin Kaya',
    upcoming_reminders:'Tunatarwa masu Zuwa',business_health:'Maki na Lafiyar Kasuwanci',
    live_pos_transactions:'Ma\'amalolin POS na Yanzu',payment_cash:'Biyan Kudi: Tsabar Kudi',
    payment_transfer:'Biyan Kudi: Canjin Kudi',payment_pos:'Biyan Kudi: POS',
    daily_sales_pos:'Tallace na yau da POS wannan wata',this_month:'Wannan Wata',
    revenue_expenses:'Kuɗin shiga − kashe-kudi wannan wata',unpaid_balances:'Basussuka da ba a biya',
    view_pos:'Duba POS →',manage:'Sarrafa',full_report:'Cikakken Rahoto',
    calculating:'Ana ƙididdiga…',healthy_business:'🟢 Kasuwanci Mai Lafiya',
    needs_attention:'🟡 Yana Buƙatar Kulawa',critical:'🔴 Muhimmi — Duba Yanzu',

    add_stock_item:'Ƙara Kaya',item_name:'Sunan Kaya',quantity:'Adadi',
    unit_price:'Farashi na Kowane',low_stock_alert:'Iyakar Faɗakarwa',
    add_to_stock:'Ƙara zuwa Jerin Kaya →',stock_summary:'Taƙaitaccen Kaya',
    total_items:'Jimlar Kayayyaki',low_stock_items:'Kayayyaki Kaɗan',
    total_stock_value:'Jimlar Darajar Kaya',recently_deleted:'An Goge Kwanan nan',
    untracked_services:'Ba a Bibiyi / Ayyuka',stock_list:'Jerin Kayayyaki',
    search_items:'Nemo kaya…',edit:'Gyara',delete:'Share',
    restore:'Dawo',purge:'Share Har Abada',in_stock:'Akwai Kaya',
    out_of_stock:'Babu Kaya',low_badge:'Kaɗan',import_stock:'Shigo da Kaya',
    export_csv:'CSV',export_pdf:'PDF',activity_log:'Tarihin Ayyukan Kaya',
    click_expand:'Danna don faɗaɗa',all_actions:'Dukkan Ayyuka',
    added:'An Ƙara',edited:'An Gyara',deleted_log:'An Share',
    restored:'An Dawo',purged:'An Tsabtace',imported:'An Shigo',sold:'An Sayar',
    refresh:'🔄 Sabunta',goods_services:'(kayayyaki ko ayyuka)',
    leave_blank:'bar fanko ko 0 don ayyuka / kaya da ba a bibiyi',
    only_tracked:'— yana aiki ne kawai lokacin da adadi > 0',
    full_audit:'🔒 Cikakken Tarihin Ayyuka na Aiki',
    audit_desc:'Kowane ƙari, gyara, goge da dawowa an rubuta su daga baya.',
    type_delete:'Rubuta DELETE don tabbatarwa:',
    type_delete_ph:'Rubuta DELETE a nan…',
    yes_delete:'🗑️ Eh, Share Kaya',
    secure_verify:'🔒 Bukatar Tabbatarwa Mai Aminci',
    send_verify:'📧 Aika Haɗin Tabbatarwa',
    identity_verified:'✅ An tabbatar da asalinku. Yanzu zaku iya gyarawa.',
    update_stock:'Sabunta Kaya →',
    import_title:'📥 Shigo da Kaya daga Fayil',
    click_browse:'Danna don bincika',drag_drop:'ko ja da saka fayilin ku anan',
    download_template:'📄 Zazzage Samfurin CSV',
    import_btn:'✅ Shigo da Kayayyaki →',diff_file:'← Wani Fayil',

    record_sales:'Yi Rikodin Tallacen Yau',simple_record:'Sauƙaƙen Rikodin Tallace',
    premium_record:'⭐ Cikakken Rikodin Tallace',total_sales_amount:'Jimlar Kuɗin Tallace (₦)',
    qty_sold:'Adadin da aka Sayar (zaɓi)',notes:'Bayani (zaɓi)',
    save_sale:'Ajiye Rikodin Tallace →',sales_by_payment:'Tallace ta Hanyar Biyan Kudi',
    cash:'Tsabar Kudi',transfer:'Canja wurin Kudi',pos:'POS',
    cash_float:'Bin Diddigin Tsabar Kudi',opening_balance:'Kuɗin Farawa (₦)',
    cash_paid_out:'Kuɗin da aka Biya (₦)',closing_balance:'Kuɗin Rufe',
    monthly_summary:'Taƙaitaccen Wannan Wata',sales_history:'Tarihin Tallace',
    total_sales:'Jimlar Tallace',cash_sales:'Tallace da Tsabar Kudi',
    transfer_sales:'Tallace ta Canjin Kudi',pos_sales:'Tallace ta POS',
    entries:'Rikodan',save_sale_btn:'Ajiye Rikodin Tallace →',
    update_record:'Akwai rikodin wannan rana — ajiyewa zai sabunta shi.',

    add_expense:'Ƙara Kashe-kudi',description:'Bayanin',amount:'Adadin Kudi (₦)',
    date:'Kwanan Wata',save_expense:'Ajiye Kashe-kudi →',
    monthly_summary_exp:'Taƙaitaccen Wata',expense_history:'Tarihin Kashe-kudi',
    net_profit_loss:'Riba ko Asara',sales_minus_expenses:'Tallace minus Kashe-kudi',
    no_expenses:'Babu kashe-kudi da aka rubuta a wannan lokaci.',

    add_debt:'Ƙara Bashi',person_name:'Sunan Mutum ko Kasuwanci',
    debt_type:'Nau\'i',due_date:'Ranar Biyan (zaɓi)',
    owed_to_me:'Suna bin ni (Kuɗin Rance)',i_owe:'Ina bin su (Bashi)',
    owed_to_me_label:'Ana Mini Bashi',i_owe_label:'Ina Bin Wasu',
    net_position:'Matsayin Riba',debt_summary:'Taƙaitaccen Bashi',
    owes_me:'Yana Min Bashi',paid:'An Biya',unpaid:'Ba a Biya ba',
    paid_settled:'An Biya / An Kawo Karshe',mark_paid:'✓ An Biya',
    owed_to_me_sub:'Wasu suna bin ka',i_owe_sub:'Kana bin wasu',
    net_position_sub:'Bayan duk bashi',person_ph:'misali Ade Bakery, Musa Mai Kaya…',

    item_catalogue:'Jerin Kayayyaki',current_order:'Odar Yanzu',
    complete_sale:'✅ Kammala Tallace →',clear_cart:'🗑️ Share Kwandon',
    customer_name:'Sunan Abokin Ciniki (zaɓi)',payment_method:'Hanyar Biyan Kudi',
    todays_stats:'Kididdiga ta Yau',sales_today:'Tallace na Yau',
    transactions:'Ma\'amaloli',recent_txns:'Ma\'amaloli na Kwanan nan',
    manage_stock:'Sarrafa Kaya →',view_daily_sales:'📋 Duba Tallace na Yau',
    no_items_yet:'Ba a ƙara kayan ba tukuna.',tap_to_add:'Taɓa kowane kaya don ƙarawa.',
    walk_in:'Abokin ciniki mai ziyara…',add_notes:'Ƙarin bayani…',
    tracked_stock:'Kaya da aka bibiyi',service_untracked:'Aiki / Ba a Bibiyi',
    out_stock_tracked:'Babu Kaya (an bibiyi)',last_20:'Ƙarshen ma\'amaloli 20 na POS',

    monthly:'Na Wata',weekly:'Na Mako',quarterly:'Na Kwata',
    pos_revenue:'Kuɗin POS',confirmed_sales:'Tallace da aka Tabbatar',
    pos_card_sales:'Tallace ta Katin POS',outstanding_debt:'Bashi da Ba a Biya',
    export_report:'Fitar da Rahoto',detailed_breakdown:'Cikakken Rarrabe',
    from_purchase:'Daga ma\'amalolin siye',manual_daily:'Rikodan yau da kullum na hannu',
    logged_expenses:'Kashe-kudi da aka rubuta',confirmed_minus:'Tallace da aka tabbatar − kashe-kudi',
    pos_cash_payments:'POS: biyan tsabar kudi',pos_transfer:'POS: biyan canjin kudi',
    pos_card_payments:'POS: biyan katin',unpaid_balances_r:'Basussuka da ba a biya',
    export_csv_btn:'📊 Fitar CSV',print_pdf:'🖨️ Buga / Ajiye PDF',
    shows_pos:'Yana nuna ma\'amalolin POS, rikodan yau da kullum, da kashe-kudi tare.',

    add_reminder:'➕ Ƙara Tunatarwa',reminder_title:'Take',reminder_date:'Kwanan Wata',
    reminder_type:'Nau\'i',reminder_note:'Bayani (zaɓi)',
    save_reminder:'Ajiye Tunatarwa →',upcoming:'🔔 Tunatarwa masu Zuwa',
    overdue:'⚠️ Ya Wuce Lokaci',payment_due:'💳 Ranar Biyan Kudi',
    restock:'📦 Sayen Kayayyaki',meeting:'🤝 Taro',
    general_reminder:'🔔 Tunatarwa ta Gaba ɗaya',other:'📌 Wanin',
    no_upcoming:'Babu tunatarwa masu zuwa.',events_on:'Abubuwan da suka faru a',
    add_one:'+ Ƙara ɗaya',title_ph:'misali Biya mai kaya, Sayi sukari…',
    note_ph:'Ƙarin bayani…',

    score_breakdown:'📊 Rarraben Maki',business_radar:'🕸️ Radar na Kasuwanci',
    recommendations:'💡 Shawarwari',out_of_100:'daga cikin 100',
    how_each:'Yadda kowane yanki ke ba da gudummawa ga jimlar makin ka.',
    score_based:'Ana ƙididdiga maki bisa bayanan wannan wata.',
    keep_recording:'Ci gaba da rubuta tallace da kashe-kudi don samun maki madaidaici.',
    record_pos:'🛒 Yi Rikodin Tallacen POS',add_daily:'➕ Ƙara Rikodin Yau',
    add_expenses:'➕ Ƙara Kashe-kudi',update_stock_btn:'📦 Sabunta Kaya',
    manage_debts:'🤝 Sarrafa Bashi',

    your_profile:'Bayananku',profile:'👤 Bayanan Kai',security:'🔒 Tsaro',
    preferences:'⚙️ Zaɓuɓɓuka',notifications:'🔔 Sanarwa',
    danger_zone:'⚠️ Yankin Hadari',save_profile:'Ajiye Bayanan Kai →',
    change_password:'Canza Kalmar Sirri',new_password:'Sabuwar Kalmar Sirri',
    confirm_password:'Tabbatar da Kalmar Sirri',update_password:'Sabunta Kalmar Sirri →',
    send_reset_email:'📧 Aika Wasiƙar Sauyawa',active_sessions:'Zaman da ke Aiki',
    current_session:'Zaman Yanzu',sign_out_all:'Fita daga Dukkan Na\'urorin',
    dark_mode:'Yanayin Duhu',currency:'Alamar Kudi',language:'Harshe',
    low_stock_notif:'Faɗakarwar Ƙarancin Kaya',debt_reminders:'Tunatarwar Bashi',
    clear_all_data:'🗑️ Share Dukkan Bayanan',delete_account:'💀 Share Asusun',
    session:'Zaman',sign_out_device:'Fita →',
    min_6:'Mafi ƙaranci haruffa 6',repeat_pw:'Maimaita sabuwar kalmar sirri',
    prefer_email:'Kuna son sake saita ta imel? Za mu aika haɗi mai aminci zuwa akwatin saƙonku.',
    display:'Nuni',toggle_theme:'Canza tsakanin yanayin duhu da haske',
    currency_desc:'Zaɓi yadda adadin ke bayyana a cikin manhaja',
    threshold_desc:'Faɗakarwa lokacin da kayayyaki suka faɗi ƙasa da wannan adadi',
    low_stock_desc:'Nuna gargaɗi lokacin da kayan suka yi kaɗan',
    debt_desc:'Haskaka rikodan bashi da suka wuce lokaci a allon kallo',
    clear_desc:'Share duk tallace, kashe-kudi, bashi, kayayyaki da tunatarwa. Asusunka da bayananku za su kasance.',
    delete_desc:'Share asusunka da duk bayanan da suka danganci sa. Ba za a iya dawo da su ba.',
    sign_out_desc:'Fita daga asusunka a wannan na\'ura',
    email_cannot:'Canjin imel ana sarrafa shi ta hanyar tabbatarwar Supabase.',
    profile_tab:'Bayananku',send_reset_link:'Aika Haɗin Sake Saita',

    email_support:'Tallafi ta Imel',website:'Shafin Yanar Gizo',documentation:'Takardun Taimako',
    send_message:'Aika Saƙo',your_name:'Sunanka',subject:'Batun',message:'Saƙo',
    send_btn:'Aika Saƙo →',for_account:'Don matsalolin asusun ko biyan kudi',
    visit_main:'Ziyarci shafin mu na farko don dukkan ayyukanmu',
    how_to_guides:'Jagororin amfani da FAQ',view_docs:'Duba Takardun →',
    fill_form:'Cika fom ɗin kuma za mu amsa cikin awanni 24.',
    select_topic:'Zaɓi taken…',account_issue:'Matsalar Asusun',
    billing_q:'Tambayar Biyan Kudi',feature_req:'Buƙatar Aiki',
    bug_report:'Rahoto kan Kuskure',general_enquiry:'Tambaya ta Gaba ɗaya',
    describe:'Bayyana matsalarku ko tambayarku…',back_home:'← Koma Gida',

    loading:'Ana lodawa…',saving:'Ana ajiyewa…',success:'An yi nasara!',
    error:'Kuskure',cancel:'Soke',confirm:'Tabbatar',back:'Koma Baya',
    close:'Rufe',yes:'Eh',no:'A\'a',update:'Sabunta',search:'Nemo',
    no_data:'Ba a sami bayani ba.',actions:'Ayyuka',status:'Matsayi',
    name:'Suna',price:'Farashi',value:'Darajar',total:'Jimla',
    today:'Yau',this_week:'Wannan Mako',
    person:'Mutum',date_col:'Kwanan Wata',amount_col:'Adadin Kudi',
    type_col:'Nau\'i',due_date_col:'Ranar Biyan',status_col:'Matsayi',
  },

  yo: {
    brand:'GrowthIve Monitor',dashboard:'Dasibodu',daily_sales:'Tita Ojoojumọ',
    expenses:'Inawo',debts:'Gbèsè',inventory:'Akojọ Ohun Elo',purchases:'Rira Ọja',
    reports:'Ijabọ',health_score:'Àmì Ilera Iṣowo',calendar:'Kalẹnda',
    settings:'Ètò',support:'Iranlọwọ',sign_out:'Jade',
    main_menu:'Akojọ Àkọkọ',analytics:'Itupalẹ',account:'Àkáùntì',

    login:'Wọle',register:'Forukọsilẹ',email:'Àdírẹ́sì Ìmẹ́lì',
    password:'Ọrọ Aṣina',full_name:'Orúkọ Ni Kikun',
    business_name:'Orúkọ Iṣowo',login_btn:'Wọle →',
    register_btn:'Ṣẹda Àkáùntì →',no_account:'Ṣé o ní àkáùntì?',
    have_account:'O ti ní àkáùntì tẹlẹ?',forgot_pw:'Gbagbe Ọrọ Aṣina?',
    sign_up:'Forukọsilẹ',sign_in:'Wọle',

    dashboard_title:'Dasibodu',dashboard_sub:'Ìwòye iṣowo rẹ ni ìpẹkún.',
    sales_title:'Tita Ojoojumọ',sales_sub:'Gbasilẹ tita ojoojumọ rẹ.',
    expenses_title:'Atẹle Inawo',expenses_sub:'Kọ gbogbo inawo iṣowo rẹ silẹ.',
    debts_title:'Atẹle Gbèsè',debts_sub:'Tọpa owó tí a jẹ ọ àti tí o jẹ.',
    inventory_title:'Oluṣakoso Ohun Elo',inventory_sub:'Tọpa awọn ipele ọja rẹ ki o gba awọn itaniji.',
    purchases_title:'Rira Ọja / Ibi Tita',purchases_sub:'Yan awọn ohun elo ki ọja rẹ ṣe imudojuiwọn.',
    reports_title:'Ijabọ àti Itupalẹ',reports_sub:'Awọn oye iṣẹ ọṣẹ, oṣù àti ìdamẹrin.',
    health_score_title:'Àmì Ilera Iṣowo',health_score_sub:'Àmì tí a ṣe iṣiro fún ọ to fihan bí iṣowo rẹ ṣe nlọ.',
    calendar_title:'Kalẹnda Iṣowo',calendar_sub:'Ṣeto awọn ọjọ isanwo, atuntura ọja, àti awọn ìṣẹlẹ pataki.',
    settings_title:'Ètò',settings_sub:'Ṣakoso àkáùntì rẹ àti aabo rẹ.',
    contact_title:'Kàn sí àti Atilẹyin',contact_sub:'A wà níbí láti ràn ọ lọwọ.',
    faq_title:'Awọn Ibeere Tí a Máa Ṅ Béèrè',

    todays_sales:'Tita Òní',cash_sales_today:'Tita Owo Ni Ọwọ Òní',
    transfer_sales_today:'Tita Gbigbe Owó Òní',pos_sales_today:'Tita POS Òní',
    monthly_revenue:'Owo Oṣù',total_expenses:'Apao Inawo',
    net_profit:'Ere Gidi tabi Àdánù',outstanding_debts:'Gbèsè Ti A Ko Sanwo',
    todays_transactions:'Awọn Iṣowo Òní',low_stock_alerts:'Itaniji Ọja Kekere',
    upcoming_reminders:'Awọn Ìránpàdé Tí Ó Ń bọ̀',business_health:'Àmì Ilera Iṣowo',
    live_pos_transactions:'Awọn Iṣowo POS Laaye',payment_cash:'Isanwo: Owo Ni Ọwọ',
    payment_transfer:'Isanwo: Gbigbe Owó',payment_pos:'Isanwo: POS',
    daily_sales_pos:'Tita ojoojumọ + POS oṣù yìí',this_month:'Oṣù Yìí',
    revenue_expenses:'Owo − inawo oṣù yìí',unpaid_balances:'Awọn iye tí a ko sanwo',
    view_pos:'Wo POS →',manage:'Ṣakoso',full_report:'Ijabọ Kikun',
    calculating:'Ń ṣiṣiro…',healthy_business:'🟢 Iṣowo Ilera',
    needs_attention:'🟡 Nilo Akiyesi',critical:'🔴 Pàtàkì — Ṣayẹwo Bayi',

    add_stock_item:'Fikun Ohun Elo',item_name:'Orúkọ Ohun Elo',quantity:'Iye',
    unit_price:'Idiyele Fun Ọkan',low_stock_alert:'Iye Itaniji Ọja Kekere',
    add_to_stock:'Fikun si Àkójọ Ọja →',stock_summary:'Akopọ Ọja',
    total_items:'Apao Ohun Elo',low_stock_items:'Ọja Tó Fẹrẹ Parí',
    total_stock_value:'Iye Apao Ọja',recently_deleted:'Tí a Paarẹ Laipẹ',
    untracked_services:'Ti a Ko Tọpa / Awọn Iṣẹ',stock_list:'Àkójọ Ọja',
    search_items:'Wa ohun elo…',edit:'Ṣatunkọ',delete:'Paarẹ',
    restore:'Mu Padà',purge:'Paarẹ Patapata',in_stock:'Wà Ní Ọja',
    out_of_stock:'Parí Ní Ọja',low_badge:'Kekere',import_stock:'Gbe Wọle',
    export_csv:'CSV',export_pdf:'PDF',activity_log:'Ìtàn Àwọn Ìṣe Ọja',
    click_expand:'Tẹ lati faagun',all_actions:'Gbogbo Awọn Iṣe',
    added:'Fi Kun',edited:'Ṣatunkọ',deleted_log:'Paarẹ',
    restored:'Mu Padà',purged:'Mọ Patapata',imported:'Gbe Wọle',sold:'Ta',
    refresh:'🔄 Ṣe Imudojuiwọn',goods_services:'(ọja tabi awọn iṣẹ)',
    leave_blank:'fi silẹ tabi 0 fun awọn iṣẹ / ọja tí a ko tọpa',
    only_tracked:'— kan wulo nigba ti iye > 0',
    full_audit:'🔒 Ìtàn Àwọn Ìṣe Ni Kikun Ń Ṣiṣẹ',
    audit_desc:'Gbogbo ìfikún, ìṣatunkọ, píparẹ àti ìmúpadàbọ̀ ni a ṣe àkọsílẹ̀ rẹ.',
    type_delete:'Tẹ DELETE lati jẹrisi:',type_delete_ph:'Tẹ DELETE níbí…',
    yes_delete:'🗑️ Bẹẹni, Paarẹ Ohun Elo',
    secure_verify:'🔒 Ìmọ̀ Tí A Nilo',send_verify:'📧 Fi Ìjẹ́rìísí Ranṣẹ',
    identity_verified:'✅ A ti jẹrisi ẹni rẹ. O le ṣatunkọ bayi.',
    update_stock:'Ṣe Imudojuiwọn Ọja →',
    import_title:'📥 Gbe Ọja Wọle Lati Faili',
    click_browse:'Tẹ lati wa',drag_drop:'tabi fa faili rẹ wá síbí',
    download_template:'📄 Gbe Awoṣe CSV Sile',
    import_btn:'✅ Gbe Awọn Ohun Elo Wọle →',diff_file:'← Faili Miran',

    record_sales:'Gbasilẹ Tita Òní',simple_record:'Igbasilẹ Tita Rọrun',
    premium_record:'⭐ Igbasilẹ Tita Pipe',total_sales_amount:'Apao Iye Tita (₦)',
    qty_sold:'Apao Iye Tí a Tà (aṣayan)',notes:'Àkọsílẹ (aṣayan)',
    save_sale:'Fi Igbasilẹ Tita Pamọ →',sales_by_payment:'Tita Nipasẹ Ọna Isanwo',
    cash:'Owo Ni Ọwọ',transfer:'Gbigbe Owó',pos:'POS',
    cash_float:'Atẹle Owo Ni Ọwọ',opening_balance:'Iye Bẹrẹ (₦)',
    cash_paid_out:'Owo Tí a San Jade (₦)',closing_balance:'Iye Owo Ni Ọwọ Ni Opin',
    monthly_summary:'Akopọ Oṣù Yìí',sales_history:'Ìtàn Tita',
    total_sales:'Apao Tita',cash_sales:'Tita Owo Ni Ọwọ',
    transfer_sales:'Tita Gbigbe Owó',pos_sales:'Tita POS',
    entries:'Awọn Igbasilẹ',save_sale_btn:'Fi Igbasilẹ Tita Pamọ →',
    update_record:'Igbasilẹ wà fún ọjọ yìí — fipamọ yoo ṣe imudojuiwọn rẹ.',

    add_expense:'Fikun Inawo',description:'Apejuwe',amount:'Iye Owó (₦)',
    date:'Ọjọ',save_expense:'Fi Inawo Pamọ →',
    monthly_summary_exp:'Akopọ Oṣù',expense_history:'Ìtàn Inawo',
    net_profit_loss:'Ere Gidi tabi Àdánù',sales_minus_expenses:'Tita kúrò nínú Inawo',
    no_expenses:'Ko si inawo tí a gbasilẹ fún àkókò yìí.',

    add_debt:'Fikun Gbèsè',person_name:'Orúkọ Eniyan tabi Iṣowo',
    debt_type:'Iru',due_date:'Ọjọ Isanpada (aṣayan)',
    owed_to_me:'Wọn jẹ mi (Kirẹditi)',i_owe:'Mo jẹ wọn (Débiti)',
    owed_to_me_label:'Wọn Jẹ Mi',i_owe_label:'Mo Jẹ Wọn',
    net_position:'Ipo Apapọ',debt_summary:'Akopọ Gbèsè',
    owes_me:'Jẹ Mi',paid:'Ti Sanwo',unpaid:'Ti A Ko Sanwo',
    paid_settled:'Ti Sanwo / Ti Parí',mark_paid:'✓ Sanwo',
    owed_to_me_sub:'Awọn miran jẹ ọ',i_owe_sub:'O jẹ awọn miran',
    net_position_sub:'Lẹhin gbogbo gbèsè',person_ph:'fun apẹẹrẹ Ade Bakery, Musa…',

    item_catalogue:'Katalogi Ohun Elo',current_order:'Aṣẹ Lọwọlọwọ',
    complete_sale:'✅ Pari Tita →',clear_cart:'🗑️ Ṣofo Agbọn',
    customer_name:'Orúkọ Onibara (aṣayan)',payment_method:'Ọna Isanwo',
    todays_stats:'Iṣiro Òní',sales_today:'Tita Òní',
    transactions:'Awọn Iṣowo',recent_txns:'Awọn Iṣowo Laipẹ',
    manage_stock:'Ṣakoso Ọja →',view_daily_sales:'📋 Wo Tita Ojoojumọ',
    no_items_yet:'Ko si ohun elo tí a fi kun tẹlẹ.',tap_to_add:'Tẹ ohun elo èyíkéyìí lati fi kun.',
    walk_in:'Onibara tó wọlé…',add_notes:'Àlàyé àfikún…',
    tracked_stock:'Ọja Tí A Tọpa',service_untracked:'Iṣẹ / Ti A Ko Tọpa',
    out_stock_tracked:'Parí Ní Ọja (tí a tọpa)',last_20:'Ìkẹyìn Iṣowo POS 20',

    monthly:'Oṣùkooṣù',weekly:'Ọṣẹkooṣẹ',quarterly:'Ìdamẹrin',
    pos_revenue:'Owo POS',confirmed_sales:'Tita Tí a Jẹrisi',
    pos_card_sales:'Tita Kaadi POS',outstanding_debt:'Gbèsè Ti A Ko Sanwo',
    export_report:'Gbe Ijabọ Jade',detailed_breakdown:'Ìlọsiwaju Alaye',
    from_purchase:'Lati awọn iṣowo rira',manual_daily:'Awọn igbasilẹ ojoojumọ ti ọwọ',
    logged_expenses:'Inawo tí a gbasilẹ',confirmed_minus:'Tita tí a jẹrisi − inawo',
    pos_cash_payments:'POS: isanwo owo ni ọwọ',pos_transfer:'POS: isanwo gbigbe owó',
    pos_card_payments:'POS: isanwo kaadi',unpaid_balances_r:'Awọn iye tí a ko sanwo',
    export_csv_btn:'📊 Gbe CSV Jade',print_pdf:'🖨️ Tẹ / Fi Pamọ PDF',
    shows_pos:'Ń fihàn àwọn iṣowo POS, igbasilẹ ojoojumọ, àti inawo papọ̀.',

    add_reminder:'➕ Fikun Ìránpàdé',reminder_title:'Àkọlé',reminder_date:'Ọjọ',
    reminder_type:'Iru',reminder_note:'Àkọsílẹ (aṣayan)',
    save_reminder:'Fi Ìránpàdé Pamọ →',upcoming:'🔔 Awọn Ìránpàdé Tí Ó Ń bọ̀',
    overdue:'⚠️ Ti Koja Akoko',payment_due:'💳 Ọjọ Isanwo',
    restock:'📦 Atuntura Ọja',meeting:'🤝 Ìpàdé',
    general_reminder:'🔔 Ìránpàdé Gbogbogbo',other:'📌 Miran',
    no_upcoming:'Ko si àwọn ìránpàdé tí ó ń bọ̀.',events_on:'Awọn ìṣẹlẹ lọjọ',
    add_one:'+ Fi ọkan kun',title_ph:'fun apẹẹrẹ San olupese, Ra suga…',note_ph:'Àlàyé àfikún…',

    score_breakdown:'📊 Ìlọsiwaju Àmì',business_radar:'🕸️ Rada Iṣowo',
    recommendations:'💡 Awọn Imọran',out_of_100:'ninu 100',
    how_each:'Bí ẹ̀ka kọ̀ọ̀kan ṣe ń ṣe àfikún sí àmì àpapọ̀ rẹ.',
    score_based:'Àmì náà jẹ ìṣiro lórí àwọn data oṣù yìí.',
    keep_recording:'Máa ṣe igbasilẹ tita àti inawo déédéé fún àmì gẹ́gẹ́.',
    record_pos:'🛒 Gbasilẹ Tita POS',add_daily:'➕ Fi Igbasilẹ Ojoojumọ Kun',
    add_expenses:'➕ Fi Inawo Kun',update_stock_btn:'📦 Ṣe Imudojuiwọn Ọja',
    manage_debts:'🤝 Ṣakoso Gbèsè',

    your_profile:'Profaili Rẹ',profile:'👤 Profaili',security:'🔒 Aabo',
    preferences:'⚙️ Awọn Aṣayan',notifications:'🔔 Awọn Iwifunni',
    danger_zone:'⚠️ Agbegbe Ewu',save_profile:'Fi Profaili Pamọ →',
    change_password:'Ṣatunṣe Ọrọ Aṣina',new_password:'Ọrọ Aṣina Tuntun',
    confirm_password:'Jẹrisi Ọrọ Aṣina',update_password:'Ṣe Imudojuiwọn Ọrọ Aṣina →',
    send_reset_email:'📧 Fi Ìmẹ́lì Atunṣeto Ranṣẹ',active_sessions:'Awọn Ìpàdé Tí Ń Ṣiṣẹ',
    current_session:'Ìpàdé Lọwọlọwọ',sign_out_all:'Jade kuro Ninu Gbogbo Ẹrọ',
    dark_mode:'Ipo Okunkun',currency:'Ami Owó',language:'Èdè',
    low_stock_notif:'Itaniji Ọja Kekere',debt_reminders:'Ìránpàdé Gbèsè',
    clear_all_data:'🗑️ Paarẹ Gbogbo Data',delete_account:'💀 Paarẹ Àkáùntì',
    session:'Ìpàdé',sign_out_device:'Jade →',
    min_6:'Lọ kere ju ohun kikọ 6',repeat_pw:'Tun Ọrọ Aṣina tuntun ṣe',
    prefer_email:'Fẹ tún ṣe nipasẹ ìmẹ́lì? A óò fi ìjápọ̀ aabo kan ránṣẹ́ sí apoti ìmẹ́lì rẹ.',
    display:'Ìfihàn',toggle_theme:'Yipada laarin ipo okunkun àti ìmọlẹ',
    currency_desc:'Yan bí a ṣe ń fihàn awọn iye ní gbogbo àpọ̀n náà',
    threshold_desc:'Itaniji nigba tí àwọn ohun elo ọja bà ní ìsàlẹ̀ iye yìí',
    low_stock_desc:'Ṣafihàn awọn ikilọ nigba tí àwọn ohun elo ọja bà kéré',
    debt_desc:'Ṣe àmì àwọn igbasilẹ gbèsè tí ó ti pẹ́ lórí dasibodu',
    clear_desc:'Paarẹ gbogbo tita, inawo, gbèsè, ọja àti ìránpàdé. Àkáùntì àti profaili rẹ yóò wà.',
    delete_desc:'Paarẹ àkáùntì rẹ àti gbogbo data tí ó ní í ṣe pẹ̀lú rẹ̀. A kò lè mu padà.',
    sign_out_desc:'Jáde kúrò nínú àkáùntì rẹ ní ẹrọ yìí',
    email_cannot:'Àwọn ìyípadà ìmẹ́lì ni a ṣakoso nipasẹ àwọn ìjẹ́rìísí Supabase.',
    profile_tab:'Profaili Rẹ',send_reset_link:'Fi Ìjápọ̀ Atunṣeto Ranṣẹ',

    email_support:'Atilẹyin Ìmẹ́lì',website:'Oju Opo Wẹẹbu',documentation:'Iwe Itọsọna',
    send_message:'Fi Ifiranṣẹ Ranṣẹ',your_name:'Orúkọ Rẹ',subject:'Koko Ọrọ',
    message:'Ifiranṣẹ',send_btn:'Fi Ifiranṣẹ Ranṣẹ →',
    for_account:'Fún àwọn ìṣòro àkáùntì tabi isanwo',
    visit_main:'Ṣabẹwò oju opo wẹẹbu wa akọkọ fun gbogbo awọn iṣẹ',
    how_to_guides:'Awọn itọsọna bi-o-ṣe-ṣe àti FAQ',view_docs:'Wo Awọn Iwe →',
    fill_form:'Kún fọọmu náà a ó dáhùn rẹ láàárọ̀ 24.',
    select_topic:'Yan akọle kan…',account_issue:'Ìṣòro Àkáùntì',
    billing_q:'Ìbéèrè Isanwo',feature_req:'Ìbéèrè Ẹyẹ',
    bug_report:'Ijabọ Àṣìṣe',general_enquiry:'Ìbéèrè Gbogbogbo',
    describe:'Ṣapejuwe ìṣòro tabi ìbéèrè rẹ…',back_home:'← Padà si Ilé',

    loading:'Ń gbẹ…',saving:'Ń fipamọ…',success:'Aṣeyọri!',
    error:'Àṣìṣe',cancel:'Fagilé',confirm:'Jẹrisi',back:'Padà',
    close:'Sunmọ',yes:'Bẹẹni',no:'Bẹẹkọ',update:'Ṣe Imudojuiwọn',search:'Wa',
    no_data:'Ko si data ti a ri.',actions:'Awọn Iṣe',status:'Ipo',
    name:'Orúkọ',price:'Idiyele',value:'Iye',total:'Apao',
    today:'Òní',this_week:'Ọṣẹ Yìí',
    person:'Eniyan',date_col:'Ọjọ',amount_col:'Iye Owó',
    type_col:'Iru',due_date_col:'Ọjọ Isanpada',status_col:'Ipo',
  },

  ig: {
    brand:'GrowthIve Monitor',dashboard:'Deshbọọdụ',daily_sales:'Ahịa Kwa Ụbọchị',
    expenses:'Ego A Na-eji',debts:'Ụgwọ',inventory:'Ngwongwo',purchases:'Ịzụta Ihe',
    reports:'Akụkọ',health_score:'Àmà Ahụike Azụmaahịa',calendar:'Kalenda',
    settings:'Ntọala',support:'Enyemaka',sign_out:'Pụọ',
    main_menu:'Isi Menyu',analytics:'Nyocha',account:'Akaụntụ',

    login:'Banye',register:'Debanye Aha',email:'Adreesị Ozi-Ele',
    password:'Okwuntughe',full_name:'Aha Zuru Oke',
    business_name:'Aha Azụmaahịa',login_btn:'Banye →',
    register_btn:'Mepụta Akaụntụ →',no_account:'Ị nweghị akaụntụ?',
    have_account:'Ị nwere akaụntụ?',forgot_pw:'Chefuo Okwuntughe?',
    sign_up:'Debanye Aha',sign_in:'Banye',

    dashboard_title:'Deshbọọdụ',dashboard_sub:'Nchoputa azụmaahịa gị n\'oge nto.',
    sales_title:'Ahịa Kwa Ụbọchị',sales_sub:'Debanye ahịa kwa ụbọchị rị.',
    expenses_title:'Onye Ntọala Ego A Na-eji',expenses_sub:'Dee ego niile i na-eji maka azụmaahịa.',
    debts_title:'Onye Ntọala Ụgwọ',debts_sub:'Soro ego a na-ákwụ gị na nke i na-áọ ndị ọzọ.',
    inventory_title:'Onye Njikwa Ngwongwo',inventory_sub:'Soro ọkwa ihe ị nwere ma nweta ọdịmma.',
    purchases_title:'Ịzụta Ihe / Ebe Ire Ahịa',purchases_sub:'Họrọ ihe ka ngwongwo mee ihe n\'ụzọ akpaaka.',
    reports_title:'Akụkọ na Nyocha',reports_sub:'Nchoputa ọrụ n\'izu, ọnwa na ọkara.',
    health_score_title:'Àmà Ahụike Azụmaahịa',health_score_sub:'Àmà a tọrọ ngọzi nke na-egosi otu azụmaahịa gị si dị mma.',
    calendar_title:'Kalenda Azụmaahịa',calendar_sub:'Hazie ụbọchị ịkwụ ụgwọ, iweta ihe, na ihe mkpa ndị ọzọ.',
    settings_title:'Ntọala',settings_sub:'Jikwaa akaụntụ rị na nchedo ya.',
    contact_title:'Kpọtụrụ na Enyemaka',contact_sub:'Anyị dị ebe a iji nyere gị aka.',
    faq_title:'Ajụjụ A Na-ajụkarị',

    todays_sales:'Ahịa Taa',cash_sales_today:'Ahịa Ego Aka Taa',
    transfer_sales_today:'Ahịa Nnyefe Ego Taa',pos_sales_today:'Ahịa POS Taa',
    monthly_revenue:'Ego Ọnwa',total_expenses:'Ngụkọta Ego A Na-eji',
    net_profit:'Uru N\'ezie ma ọ bụ Ọnwụ',outstanding_debts:'Ụgwọ A Akwụghị',
    todays_transactions:'Azụmaahịa Taa',low_stock_alerts:'Ọdịmma Ngwongwo Fọdụrụ Obere',
    upcoming_reminders:'Ndetu Na-abịa',business_health:'Àmà Ahụike Azụmaahịa',
    live_pos_transactions:'Azụmaahịa POS Na-arụ Ọrụ',payment_cash:'Ịkwụ Ụgwọ: Ego Aka',
    payment_transfer:'Ịkwụ Ụgwọ: Nnyefe Ego',payment_pos:'Ịkwụ Ụgwọ: POS',
    daily_sales_pos:'Ahịa kwa ụbọchị + POS ọnwa a',this_month:'Ọnwa A',
    revenue_expenses:'Ego − ego a na-eji ọnwa a',unpaid_balances:'Ego a akwụghị',
    view_pos:'Lee POS →',manage:'Jikwaa',full_report:'Akụkọ Zuru Oke',
    calculating:'Na-ato ngọzi…',healthy_business:'🟢 Azụmaahịa Dị Mma',
    needs_attention:'🟡 Chọọ Nlelee',critical:'🔴 Nke Dị Oke Mkpa — Lelee Ugbu A',

    add_stock_item:'Tinye Ihe',item_name:'Aha Ihe',quantity:'Ọnụọgụ',
    unit_price:'Ọnụahịa Otu Ihe',low_stock_alert:'Ọkwa Ọdịmma Ngwongwo Fọdụrụ Obere',
    add_to_stock:'Tinye na Ndepụta Ihe →',stock_summary:'Nchoputa Ngwongwo',
    total_items:'Ngụkọta Ihe',low_stock_items:'Ngwongwo Fọdụrụ Obere',
    total_stock_value:'Ngụkọta Ọnụahịa Ngwongwo',recently_deleted:'Ehichapụrụ N\'oge Nso',
    untracked_services:'A Ṣọghị / Ọrụ',stock_list:'Ndepụta Ngwongwo',
    search_items:'Chọọ ihe…',edit:'Dezie',delete:'Hichapụ',
    restore:'Weghachite',purge:'Hichapụ Ruo Mgbe Ebighi Ebi',
    in_stock:'Dị N\'ọnọdụ',out_of_stock:'Agwụla Ihe',low_badge:'Obere',
    import_stock:'Webata',export_csv:'CSV',export_pdf:'PDF',
    activity_log:'Akụkọ Ihe Omume Ngwongwo',click_expand:'Pịa iji gbasaa',
    all_actions:'Omume Niile',added:'Etinyere',edited:'Edeziri',deleted_log:'Ehichapụrụ',
    restored:'Weghachitere',purged:'Hichapụrụ Kpamkpam',imported:'Webatara',sold:'Ere',
    refresh:'🔄 Mee Ọhụrụ',goods_services:'(ngwongwo ma ọ bụ ọrụ)',
    leave_blank:'hapụ ohere ma ọ bụ 0 maka ọrụ / ngwongwo a ṣọghị',
    only_tracked:'— na-arụ ọrụ naanị mgbe ọnụọgụ > 0',
    full_audit:'🔒 Akụkọ Ihe Omume Zuru Oke Na-arụ Ọrụ',
    audit_desc:'A na-edekọ mgbakwunye, nchezi, nhichapụ na nweghachi niile ruo n\'ogologo oge.',
    type_delete:'Dee DELETE iji kwenye:',type_delete_ph:'Dee DELETE ebe a…',
    yes_delete:'🗑️ Ee, Hichapụ Ihe',
    secure_verify:'🔒 Achọrọ Nkwenye Nchedo',send_verify:'📧 Zipu Njikọ Nkwenye',
    identity_verified:'✅ Achọpụtara onwe gị. Ị nwere ike ịdezie ugbu a.',
    update_stock:'Mee Ngwongwo Ọhụrụ →',
    import_title:'📥 Webata Ngwongwo Site n\'Faịlụ',
    click_browse:'Pịa iji chọọ',drag_drop:'ma ọ bụ dọọ faịlụ gị bịa ebe a',
    download_template:'📄 Budata Ụdị CSV',
    import_btn:'✅ Webata Ihe →',diff_file:'← Faịlụ Ọzọ',

    record_sales:'Debanye Ahịa Taa',simple_record:'Ndekọ Ahịa Dị Mfe',
    premium_record:'⭐ Ndekọ Ahịa Zuru Oke',total_sales_amount:'Ngụkọta Ọnụọgụ Ahịa (₦)',
    qty_sold:'Ọnụọgụ Niile Ere (ọhọrọ)',notes:'Ndetu (ọhọrọ)',
    save_sale:'Chekwa Ndekọ Ahịa →',sales_by_payment:'Ahịa Site na Ụzọ Ịkwụ Ụgwọ',
    cash:'Ego Aka',transfer:'Nnyefe Ego',pos:'POS',
    cash_float:'Soro Ego Aka',opening_balance:'Ego Mmalite (₦)',
    cash_paid_out:'Ego E Wepụrụ (₦)',closing_balance:'Ego Aka Njedebe',
    monthly_summary:'Nchoputa Ọnwa A',sales_history:'Akụkọ Ahịa',
    total_sales:'Ngụkọta Ahịa',cash_sales:'Ahịa Ego Aka',
    transfer_sales:'Ahịa Nnyefe Ego',pos_sales:'Ahịa POS',
    entries:'Ndekọ',save_sale_btn:'Chekwa Ndekọ Ahịa →',
    update_record:'Ndekọ dị maka ụbọchị a — ichekwa ga-eme ka ọ dị ọhụrụ.',

    add_expense:'Tinye Ego A Na-eji',description:'Nkọwa',amount:'Ọnụọgụ Ego (₦)',
    date:'Ụbọchị',save_expense:'Chekwa Ego A Na-eji →',
    monthly_summary_exp:'Nchoputa Ọnwa',expense_history:'Akụkọ Ego A Na-eji',
    net_profit_loss:'Uru N\'ezie ma ọ bụ Ọnwụ',sales_minus_expenses:'Ahịa wepụ Ego A Na-eji',
    no_expenses:'Achọtaghị ego a na-eji maka oge a.',

    add_debt:'Tinye Ụgwọ',person_name:'Aha Onye ma ọ bụ Azụmaahịa',
    debt_type:'Ụdị',due_date:'Ụbọchị Nkwụghachi (ọhọrọ)',
    owed_to_me:'Ha na-agbachi m (Kredit)',i_owe:'Agbachiri m ha (Debit)',
    owed_to_me_label:'Ha Na-agbachi M',i_owe_label:'Agbachiri M',
    net_position:'Ọnọdụ Ngụkọta',debt_summary:'Nchoputa Ụgwọ',
    owes_me:'Na-agbachi M',paid:'Akwụọla',unpaid:'Akwụghị',
    paid_settled:'Akwụọla / Emechala',mark_paid:'✓ Akwụọla',
    owed_to_me_sub:'Ndị ọzọ na-agbachi gị',i_owe_sub:'I na-agbachi ndị ọzọ',
    net_position_sub:'Mgbe ụgwọ niile gasịrị',person_ph:'dị ka Ade Bakery, Musa…',

    item_catalogue:'Ndepụta Ihe',current_order:'Iwu Ugbu A',
    complete_sale:'✅ Mechaa Ahịa →',clear_cart:'🗑️ Hichapụ Ụgbọ',
    customer_name:'Aha Onye Ahịa (ọhọrọ)',payment_method:'Ụzọ Ịkwụ Ụgwọ',
    todays_stats:'Ihe Omume Taa',sales_today:'Ahịa Taa',
    transactions:'Azụmaahịa',recent_txns:'Azụmaahịa N\'oge Nso',
    manage_stock:'Jikwaa Ngwongwo →',view_daily_sales:'📋 Lee Ahịa Kwa Ụbọchị',
    no_items_yet:'Enyeghị ihe ọ bụla ka ugbu a.',tap_to_add:'Pịa ihe ọ bụla iji tinye ya.',
    walk_in:'Onye ahịa na-abịa…',add_notes:'Nkọwa ndị ọzọ…',
    tracked_stock:'Ngwongwo A Sọrọ',service_untracked:'Ọrụ / A Ṣọghị',
    out_stock_tracked:'Agwụla Ihe (a sọrọ)',last_20:'Ọnụọgụ 20 Azụmaahịa POS Ikpeazụ',

    monthly:'Kwa Ọnwa',weekly:'Kwa Izu',quarterly:'Kwa Ọkara',
    pos_revenue:'Ego POS',confirmed_sales:'Ahịa E Kwenyere',
    pos_card_sales:'Ahịa Kaadị POS',outstanding_debt:'Ụgwọ A Akwụghị',
    export_report:'Bupụta Akụkọ',detailed_breakdown:'Nkọwa Zuru Oke',
    from_purchase:'Site n\'azụmaahịa ịzụta',manual_daily:'Ndekọ kwa ụbọchị nke aka',
    logged_expenses:'Ego a na-eji edekọrọ',confirmed_minus:'Ahịa e kwenyere − ego a na-eji',
    pos_cash_payments:'POS: ịkwụ ụgwọ ego aka',pos_transfer:'POS: ịkwụ ụgwọ nnyefe',
    pos_card_payments:'POS: ịkwụ ụgwọ kaadị',unpaid_balances_r:'Ego a akwụghị',
    export_csv_btn:'📊 Bupụta CSV',print_pdf:'🖨️ Bipụta / Chekwa PDF',
    shows_pos:'Na-egosi azụmaahịa POS, ndekọ kwa ụbọchị, na ego a na-eji ọnụ.',

    add_reminder:'➕ Tinye Ndetu',reminder_title:'Aha',reminder_date:'Ụbọchị',
    reminder_type:'Ụdị',reminder_note:'Ndetu (ọhọrọ)',
    save_reminder:'Chekwa Ndetu →',upcoming:'🔔 Ndetu Na-abịa',
    overdue:'⚠️ Gachara Oge',payment_due:'💳 Ụbọchị Ịkwụ Ụgwọ',
    restock:'📦 Iweta Ihe',meeting:'🤝 Ọgbakọ',
    general_reminder:'🔔 Ndetu Izugbe',other:'📌 Nke Ọzọ',
    no_upcoming:'Enweghị ndetu na-abịa.',events_on:'Ihe omume n\'ụbọchị',
    add_one:'+ Tinye otu',title_ph:'dị ka Kwụọ ụgwọ onye nrite, Weeta ihe…',note_ph:'Nkọwa ndị ọzọ…',

    score_breakdown:'📊 Nkọwa Àmà',business_radar:'🕸️ Radar Azụmaahịa',
    recommendations:'💡 Ndụmọdụ',out_of_100:'n\'ime 100',
    how_each:'Otu ọ bụla mpaghara si enye aka na ngụkọta àmà gị.',
    score_based:'A na-ato ngọzi àmà dabere na data ọnwa a.',
    keep_recording:'Cọntinue idekọ ahịa na ego a na-eji maka àmà ziri ezi.',
    record_pos:'🛒 Debanye Ahịa POS',add_daily:'➕ Tinye Ndekọ Kwa Ụbọchị',
    add_expenses:'➕ Tinye Ego A Na-eji',update_stock_btn:'📦 Mee Ngwongwo Ọhụrụ',
    manage_debts:'🤝 Jikwaa Ụgwọ',

    your_profile:'Profaịlụ Gị',profile:'👤 Profaịlụ',security:'🔒 Nchedo',
    preferences:'⚙️ Nhọrọ',notifications:'🔔 Ọkwa',
    danger_zone:'⚠️ Mpaghara Ihe Egwu',save_profile:'Chekwa Profaịlụ →',
    change_password:'Gbanwee Okwuntughe',new_password:'Okwuntughe Ọhụrụ',
    confirm_password:'Kwenye Okwuntughe',update_password:'Mee Okwuntughe Ọhụrụ →',
    send_reset_email:'📧 Zipu Ozi-Ele Ntọgharị',active_sessions:'Ọrụ Na-arụ Ugbu A',
    current_session:'Ọrụ Ugbu A',sign_out_all:'Pụọ n\'Ngwaọrụ Niile',
    dark_mode:'Ọnọdụ Oji',currency:'Akara Ego',language:'Asụsụ',
    low_stock_notif:'Ọdịmma Ngwongwo Fọdụrụ Obere',debt_reminders:'Ndetu Ụgwọ',
    clear_all_data:'🗑️ Hichapụ Data Niile',delete_account:'💀 Hichapụ Akaụntụ',
    session:'Ọrụ',sign_out_device:'Pụọ →',
    min_6:'Obere ihe 6 agwa',repeat_pw:'Tinyekwaa Okwuntughe Ọhụrụ',
    prefer_email:'Họrọ ka atọgharịa site na ozi-ele? Anyị ga-ezite njikọ nchedo gị.',
    display:'Ngosipụta',toggle_theme:'Gbanwee n\'etiti ọnọdụ oji na ọcha',
    currency_desc:'Họrọ otu esi egosi ọnụọgụ n\'ime ngwa',
    threshold_desc:'Ọdịmma mgbe ngwongwo daba n\'okpuru ọnụọgụ a',
    low_stock_notif:'Ngosipụta ọdịmma mgbe ngwongwo dara obere',
    debt_desc:'Mee ka ndekọ ụgwọ gachara oge pụta ìhè na deshbọọdụ',
    clear_desc:'Hichapụ ahịa, ego a na-eji, ụgwọ, ngwongwo na ndetu niile. Akaụntụ na profaịlụ gị ga-anọgide.',
    delete_desc:'Hichapụ akaụntụ gị na data niile jikọrọ ya. A nweghị ike ịweghachi ya.',
    sign_out_desc:'Pụọ n\'akaụntụ gị n\'ngwaọrụ a',
    email_cannot:'A na-ejikwa njikwa Supabase iji na-ahazi mgbanwe adreesị ozi-ele.',
    profile_tab:'Profaịlụ Gị',send_reset_link:'Zipu Njikọ Ntọgharị',

    email_support:'Enyemaka Ozi-Ele',website:'Weebụsaịtị',documentation:'Akwụkwọ Nduzi',
    send_message:'Zipu Ozi',your_name:'Aha Gị',subject:'Isi Ihe',message:'Ozi',
    send_btn:'Zipu Ozi →',for_account:'Maka nsogbu akaụntụ ma ọ bụ ịkwụ ụgwọ',
    visit_main:'Bịa weebụsaịtị anyị bụ nke isi maka ọrụ niile',
    how_to_guides:'Nduzi ka-esi-eme na FAQ',view_docs:'Lee Akwụkwọ →',
    fill_form:'Jupụta fọọmụ a anyị ga-azaghachi gị n\'ime awa 24.',
    select_topic:'Họrọ isiokwu…',account_issue:'Nsogbu Akaụntụ',
    billing_q:'Ajụjụ Ịkwụ Ụgwọ',feature_req:'Arịọ Ọrụ',
    bug_report:'Akụkọ Njehie',general_enquiry:'Ajụjụ Izugbe',
    describe:'Kọọ nsogbu ma ọ bụ ajụjụ gị…',back_home:'← Laghachi Ulo',

    loading:'Na-ebuga…',saving:'Na-echekwa…',success:'Ọ Siiri Ike!',
    error:'Njehie',cancel:'Kagbuo',confirm:'Kwenye',back:'Laghachi',
    close:'Mechie',yes:'Ee',no:'Mba',update:'Mee Ọhụrụ',search:'Chọọ',
    no_data:'Achọtaghị data ọ bụla.',actions:'Omume',status:'Ọnọdụ',
    name:'Aha',price:'Ọnụahịa',value:'Uru',total:'Ngụkọta',
    today:'Taa',this_week:'Izu A',
    person:'Onye',date_col:'Ụbọchị',amount_col:'Ọnụọgụ Ego',
    type_col:'Ụdị',due_date_col:'Ụbọchị Nkwụghachi',status_col:'Ọnọdụ',
  }
};

/* ═══════════════════════════════════════════════════════════════
   LANGUAGE ENGINE
═══════════════════════════════════════════════════════════════ */
function getLang() { return localStorage.getItem('growthive_lang') || 'en'; }

function t(key) {
  const lang = getLang();
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS['en'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-lang]').forEach(el => {
    const val = t(el.getAttribute('data-lang'));
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.hasAttribute('placeholder')) el.placeholder = val;
    } else { el.textContent = val; }
  });
  document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-lang-placeholder'));
  });
}

/* ═══════════════════════════════════════════════════════════════
   FULL PAGE AUTO-TRANSLATOR
   Walks every visible text node and translates it using a
   comprehensive English→target map built from TRANSLATIONS.
═══════════════════════════════════════════════════════════════ */
function autoTranslatePage() {
  const lang = getLang();
  if (lang === 'en') { applyTranslations(); return; }

  // Build reverse map: English text → translation key
  const en = TRANSLATIONS['en'];
  const target = TRANSLATIONS[lang] || {};
  const textMap = {};
  for (const key of Object.keys(en)) {
    if (en[key] && target[key] && en[key] !== target[key]) {
      textMap[en[key].trim()] = target[key];
    }
  }

  // Translate page title & subtitle
  const page = window.location.pathname.split('/').pop().replace('.html','') || 'index';
  const pageMeta = {
    dashboard:{'title':'dashboard_title','sub':'dashboard_sub'},
    sales:{'title':'sales_title','sub':'sales_sub'},
    expenses:{'title':'expenses_title','sub':'expenses_sub'},
    debts:{'title':'debts_title','sub':'debts_sub'},
    inventory:{'title':'inventory_title','sub':'inventory_sub'},
    purchases:{'title':'purchases_title','sub':'purchases_sub'},
    reports:{'title':'reports_title','sub':'reports_sub'},
    'health-score':{'title':'health_score_title','sub':'health_score_sub'},
    calendar:{'title':'calendar_title','sub':'calendar_sub'},
    settings:{'title':'settings_title','sub':'settings_sub'},
    contact:{'title':'contact_title','sub':'contact_sub'},
    faq:{'title':'faq_title','sub':null},
  };
  const meta = pageMeta[page];
  if (meta) {
    const titleEl = document.querySelector('.page-title');
    if (titleEl && meta.title) {
      const emoji = titleEl.textContent.match(/^[\p{Emoji}\s📅🛒⚙️📈📋📦💰🤝🏆💬]+/u);
      titleEl.textContent = (emoji ? emoji[0] : '') + t(meta.title);
    }
    const subEl = document.querySelector('.page-subtitle');
    if (subEl && meta.sub) subEl.textContent = t(meta.sub);
  }

  // Walk and translate all text nodes
  translateNode(document.body, textMap);

  // Apply data-lang attributes
  applyTranslations();
}

function translateNode(node, textMap) {
  if (!node) return;
  // Skip these tags entirely
  const skip = new Set(['SCRIPT','STYLE','NOSCRIPT','CODE','PRE','INPUT','TEXTAREA','SELECT']);
  if (skip.has(node.nodeName)) return;

  if (node.nodeType === Node.TEXT_NODE) {
    const original = node.textContent.trim();
    if (original && textMap[original]) {
      node.textContent = node.textContent.replace(original, textMap[original]);
    }
    return;
  }

  // Don't translate these attribute-specific elements
  if (node.nodeType === Node.ELEMENT_NODE) {
    // Translate placeholders
    if ((node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') && node.placeholder) {
      const ph = node.placeholder.trim();
      if (textMap[ph]) node.placeholder = textMap[ph];
    }
    // Translate option text
    if (node.tagName === 'OPTION') {
      const val = node.textContent.trim();
      if (textMap[val]) { node.textContent = textMap[val]; return; }
    }
  }

  // Recurse into children
  for (const child of node.childNodes) {
    translateNode(child, textMap);
  }
}

/* ═══════════════════════════════════════════════════════════════
   LANGUAGE SWITCHER
═══════════════════════════════════════════════════════════════ */
function renderLangSwitcher() {
  const current = getLang();
  const langs = [{code:'en',label:'EN'},{code:'ha',label:'HA'},{code:'yo',label:'YO'},{code:'ig',label:'IG'}];
  return `<div class="lang-switcher" style="display:flex;align-items:center;gap:2px;background:var(--dark3);border:1px solid var(--gold-border);border-radius:20px;padding:3px 5px;margin-right:4px;">
    ${langs.map(l=>`<button onclick="setLang('${l.code}')" style="background:${current===l.code?'var(--gold)':'transparent'};color:${current===l.code?'var(--dark)':'var(--muted)'};border:none;border-radius:14px;cursor:pointer;font-size:0.7rem;font-weight:${current===l.code?'700':'500'};padding:3px 8px;transition:all 0.2s;font-family:var(--font-body);line-height:1;">${l.label}</button>`).join('')}
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════
   setLang — saves to localStorage AND Supabase
═══════════════════════════════════════════════════════════════ */
async function setLang(code) {
  localStorage.setItem('growthive_lang', code);
  try {
    if (typeof _supabase !== 'undefined') {
      const { data: { user } } = await _supabase.auth.getUser();
      if (user) {
        await _supabase.from('profiles').update({ preferred_language: code }).eq('id', user.id);
      }
    }
  } catch(e) { console.warn('Could not save language to Supabase:', e); }
  location.reload();
}

/* ═══════════════════════════════════════════════════════════════
   MUTATION OBSERVER — Re-translates whenever new content
   is added to the page by JavaScript (Supabase data loads,
   dynamic rendering etc). Works on every page automatically.
═══════════════════════════════════════════════════════════════ */
(function startObserver() {
  if (getLang() === 'en') return; // English needs no translation

  let debounceTimer;
  let isTranslating = false;

  const observer = new MutationObserver((mutations) => {
    // Only react to actual content changes
    const hasNewContent = mutations.some(m =>
      m.addedNodes.length > 0 &&
      Array.from(m.addedNodes).some(n =>
        n.nodeType === 1 || // Element node
        (n.nodeType === 3 && n.textContent.trim()) // Text node with content
      )
    );

    if (!hasNewContent || isTranslating) return;

    // Debounce — wait for all rapid changes to finish before translating
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      isTranslating = true;
      autoTranslatePage();
      isTranslating = false;
      // Also run Gemini for any words the dictionary missed
      setTimeout(() => geminiTranslatePage(), 600);
    }, 400);
  });

  // Start watching the whole page for new content
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    // If body not ready yet, wait for it
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }
})();

/* ═══════════════════════════════════════════════════════════════
   GEMINI AUTO-TRANSLATION FALLBACK
   For any word/phrase not in the dictionary, this calls the
   Supabase Edge Function which uses Gemini to translate it.
   Results are cached in localStorage forever — API called once only.
═══════════════════════════════════════════════════════════════ */

const EDGE_FN_URL = 'https://ejuhpwiyzevuhzcdsjmi.supabase.co/functions/v1/translate';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdWhwd2l5emV2dWh6Y2Rzam1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MDA3NzcsImV4cCI6MjA5NDA3Njc3N30.YVIC1qcywVycAEOIQeg0WfDyFzFnqfRPP-WMbcM2QC4';

// Words/phrases that must NEVER be translated
const PROTECTED_PHRASES = [
  'GrowthIve Monitor', 'GrowthIve', 'Monitor',
  'Supabase', 'GitHub', 'POS', 'CSV', 'PDF', 'FAQ',
  '₦', 'EN', 'HA', 'YO', 'IG'
];

// Cache key prefix in localStorage
const CACHE_PREFIX = 'growthive_tx_';

// Get cached translation
function getCachedTranslation(text, lang) {
  try {
    const key = CACHE_PREFIX + lang + '_' + btoa(unescape(encodeURIComponent(text))).substring(0, 40);
    const cached = localStorage.getItem(key);
    return cached || null;
  } catch(e) { return null; }
}

// Save translation to cache
function setCachedTranslation(text, lang, translated) {
  try {
    const key = CACHE_PREFIX + lang + '_' + btoa(unescape(encodeURIComponent(text))).substring(0, 40);
    localStorage.setItem(key, translated);
  } catch(e) {}
}

// Check if text should be protected from translation
function isProtected(text) {
  if (!text || text.trim().length < 2) return true;
  if (/^[\d\s₦.,\-+%:\/]+$/.test(text)) return true; // numbers/symbols only
  if (/^[A-Z]{2,4}$/.test(text.trim())) return true; // short caps like POS, CSV
  for (const phrase of PROTECTED_PHRASES) {
    if (text.includes(phrase)) return true;
  }
  return false;
}

// Translate a single text via Gemini Edge Function
async function geminiTranslate(text, lang) {
  if (!text || !text.trim() || isProtected(text)) return null;
  if (lang === 'en') return text;

  // Check cache first
  const cached = getCachedTranslation(text, lang);
  if (cached) return cached;

  try {
    const response = await fetch(EDGE_FN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify({ text: text.trim() })
    });

    if (!response.ok) return null;

    const data = await response.json();
    const translated = data[lang];

    if (translated && translated !== text) {
      // Cache for all three languages at once
      if (data.ha) setCachedTranslation(text, 'ha', data.ha);
      if (data.yo) setCachedTranslation(text, 'yo', data.yo);
      if (data.ig) setCachedTranslation(text, 'ig', data.ig);
      return translated;
    }
    return null;
  } catch(e) {
    console.warn('Gemini translation failed:', e);
    return null;
  }
}

// Scan page for untranslated English text and translate via Gemini
async function geminiTranslatePage() {
  const lang = getLang();
  if (lang === 'en') return;

  // Collect all visible text nodes not yet translated
  const textNodesToTranslate = [];
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName;
        // Skip scripts, styles, inputs
        if (['SCRIPT','STYLE','NOSCRIPT','INPUT','TEXTAREA'].includes(tag)) {
          return NodeFilter.FILTER_REJECT;
        }
        const text = node.textContent.trim();
        // Only process non-empty English-looking text
        if (!text || text.length < 2) return NodeFilter.FILTER_REJECT;
        if (isProtected(text)) return NodeFilter.FILTER_REJECT;
        // Only translate if it looks like English (has common English letters)
        if (!/^[a-zA-Z\s\-\/&'".,:!?→←₦()0-9%+]+$/.test(text)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  while (walker.nextNode()) {
    textNodesToTranslate.push(walker.currentNode);
  }

  // Translate each node (check cache first, API if not cached)
  for (const node of textNodesToTranslate) {
    const original = node.textContent.trim();
    const translated = await geminiTranslate(original, lang);
    if (translated && translated !== original) {
      node.textContent = node.textContent.replace(original, translated);
    }
  }

  // Also translate placeholder attributes
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(async el => {
    const ph = el.placeholder.trim();
    if (!ph || isProtected(ph)) return;
    if (!/^[a-zA-Z\s\-\/&'".,:!?→]+$/.test(ph)) return;
    const translated = await geminiTranslate(ph, lang);
    if (translated) el.placeholder = translated;
  });
}

// Gemini runs automatically after dictionary translation via MutationObserver
// and is also triggered by initPage() in app.js

// Internationalization (i18n) Configuration for VPS Smart Procurement System

const i18nConfig = {
    // Default language
    defaultLanguage: 'en',
    
    // Current language
    currentLanguage: 'en',
    
    // Language configurations
    languages: {
        en: {
            name: 'English',
            flag: '🇺🇸',
            rtl: false
        },
        zh: {
            name: '中文',
            flag: '🇨🇳',
            rtl: false
        },
        ja: {
            name: '日本語',
            flag: '🇯🇵',
            rtl: false
        },
        ko: {
            name: '한국어',
            flag: '🇰🇷',
            rtl: false
        },
        fr: {
            name: 'Français',
            flag: '🇫🇷',
            rtl: false
        },
        de: {
            name: 'Deutsch',
            flag: '🇩🇪',
            rtl: false
        },
        es: {
            name: 'Español',
            flag: '🇪🇸',
            rtl: false
        },
        ar: {
            name: 'العربية',
            flag: '🇸🇦',
            rtl: true
        }
    },
    
    // Translation texts
    translations: {
        // Header and Navigation
        'app.title': {
            en: 'VPS Smart Procurement System',
            zh: 'VPS智慧采购系统',
            ja: 'VPSスマート調達システム',
            ko: 'VPS 스마트 조달 시스템',
            fr: 'Système d\'Approvisionnement Intelligent VPS',
            de: 'VPS Smart Beschaffungssystem',
            es: 'Sistema de Adquisiciones Inteligentes VPS',
            ar: 'نظام الشراء الذكي VPS'
        },
        'nav.dashboard': {
            en: 'Dashboard',
            zh: '仪表板',
            ja: 'ダッシュボード',
            ko: '대시보드',
            fr: 'Tableau de Bord',
            de: 'Dashboard',
            es: 'Panel de Control',
            ar: 'لوحة التحكم'
        },
        'nav.research': {
            en: 'Research',
            zh: '研究',
            ja: '研究',
            ko: '연구',
            fr: 'Recherche',
            de: 'Forschung',
            es: 'Investigación',
            ar: 'البحث'
        },
        'nav.procurement': {
            en: 'Procurement',
            zh: '采购',
            ja: '調達',
            ko: '조달',
            fr: 'Approvisionnement',
            de: 'Beschaffung',
            es: 'Adquisiciones',
            ar: 'الشراء'
        },
        'nav.planning': {
            en: 'Planning',
            zh: '规划',
            ja: '計画',
            ko: '계획',
            fr: 'Planification',
            de: 'Planung',
            es: 'Planificación',
            ar: 'التخطيط'
        },
        'nav.logistics': {
            en: 'Logistics',
            zh: '物流',
            ja: '物流',
            ko: '물류',
            fr: 'Logistique',
            de: 'Logistik',
            es: 'Logística',
            ar: 'اللوجستيات'
        },
        'nav.finance': {
            en: 'Finance',
            zh: '财务',
            ja: '財務',
            ko: '재무',
            fr: 'Finance',
            de: 'Finanzen',
            es: 'Finanzas',
            ar: 'المالية'
        },
        
        // Welcome Banner
        'welcome.title': {
            en: 'Welcome to VPS Smart Procurement',
            zh: '欢迎使用VPS智慧采购',
            ja: 'VPSスマート調達へようこそ',
            ko: 'VPS 스마트 조달에 오신 것을 환영합니다',
            fr: 'Bienvenue dans VPS Smart Procurement',
            de: 'Willkommen bei VPS Smart Procurement',
            es: 'Bienvenido a VPS Smart Procurement',
            ar: 'مرحباً بك في VPS Smart Procurement'
        },
        'welcome.subtitle': {
            en: 'Your AI-powered procurement expert',
            zh: '您的AI驱动采购专家',
            ja: 'AIを活用した調達エキスパート',
            ko: 'AI 기반 조달 전문가',
            fr: 'Votre expert en approvisionnement alimenté par l\'IA',
            de: 'Ihr KI-gestützter Beschaffungsexperte',
            es: 'Su experto en adquisiciones impulsado por IA',
            ar: 'خبير الشراء المدعوم بالذكاء الاصطناعي'
        },
        
        // Dashboard Stats
        'stats.active_vps': {
            en: 'Active VPS Instances',
            zh: '活跃VPS实例',
            ja: 'アクティブVPSインスタンス',
            ko: '활성 VPS 인스턴스',
            fr: 'Instances VPS Actives',
            de: 'Aktive VPS-Instanzen',
            es: 'Instancias VPS Activas',
            ar: 'مثيلات VPS النشطة'
        },
        'stats.cloud_providers': {
            en: 'Cloud Service Providers',
            zh: '云服务提供商',
            ja: 'クラウドサービスプロバイダー',
            ko: '클라우드 서비스 제공업체',
            fr: 'Fournisseurs de Services Cloud',
            de: 'Cloud-Service-Anbieter',
            es: 'Proveedores de Servicios en la Nube',
            ar: 'مقدمو الخدمات السحابية'
        },
        'stats.monthly_spend': {
            en: 'Monthly Spend',
            zh: '月度支出',
            ja: '月間支出',
            ko: '월간 지출',
            fr: 'Dépenses Mensuelles',
            de: 'Monatliche Ausgaben',
            es: 'Gasto Mensual',
            ar: 'الإنفاق الشهري'
        },
        'stats.cost_savings': {
            en: 'Cost Savings',
            zh: '成本节约',
            ja: 'コスト削減',
            ko: '비용 절약',
            fr: 'Économies de Coûts',
            de: 'Kosteneinsparungen',
            es: 'Ahorros de Costos',
            ar: 'توفير التكاليف'
        },
        'stats.vs_last_month': {
            en: 'vs last month',
            zh: '较上月',
            ja: '前月比',
            ko: '지난 달 대비',
            fr: 'par rapport au mois dernier',
            de: 'gegenüber dem Vormonat',
            es: 'vs mes anterior',
            ar: 'مقارنة بالشهر الماضي'
        },
        'stats.new_this_month': {
            en: 'new this month',
            zh: '新增本月',
            ja: '今月新規',
            ko: '이번 달 신규',
            fr: 'nouveau ce mois',
            de: 'neu in diesem Monat',
            es: 'nuevo este mes',
            ar: 'جديد هذا الشهر'
        },
        
        // AI Assistant
        'ai.assistant': {
            en: 'AI Assistant',
            zh: 'AI助手',
            ja: 'AIアシスタント',
            ko: 'AI 어시스턴트',
            fr: 'Assistant IA',
            de: 'KI-Assistent',
            es: 'Asistente IA',
            ar: 'مساعد الذكاء الاصطناعي'
        },
        'ai.greeting': {
            en: 'Hello! I\'m your AI procurement assistant. How can I help you today?',
            zh: '您好！我是您的AI采购助手。今天我能为您做些什么？',
            ja: 'こんにちは！私はあなたのAI調達アシスタントです。今日はどのようにお手伝いできますか？',
            ko: '안녕하세요! 저는 AI 조달 어시스턴트입니다. 오늘 어떻게 도와드릴까요?',
            fr: 'Bonjour ! Je suis votre assistant IA d\'approvisionnement. Comment puis-je vous aider aujourd\'hui ?',
            de: 'Hallo! Ich bin Ihr KI-Beschaffungsassistent. Wie kann ich Ihnen heute helfen?',
            es: '¡Hola! Soy su asistente de adquisiciones con IA. ¿Cómo puedo ayudarle hoy?',
            ar: 'مرحباً! أنا مساعد الشراء بالذكاء الاصطناعي. كيف يمكنني مساعدتك اليوم؟'
        },
        'ai.input_placeholder': {
            en: 'Type your request here...',
            zh: '在此输入您的请求...',
            ja: 'ここにリクエストを入力してください...',
            ko: '여기에 요청사항을 입력하세요...',
            fr: 'Tapez votre demande ici...',
            de: 'Geben Sie hier Ihre Anfrage ein...',
            es: 'Escriba su solicitud aquí...',
            ar: 'اكتب طلبك هنا...'
        },
        
        // Module Cards
        'module.team_collaboration': {
            en: 'Team Collaboration',
            zh: '团队协作',
            ja: 'チーム協力',
            ko: '팀 협업',
            fr: 'Collaboration d\'Équipe',
            de: 'Teamzusammenarbeit',
            es: 'Colaboración en Equipo',
            ar: 'التعاون الجماعي'
        },
        'module.production_management': {
            en: 'Production Management',
            zh: '生产管理',
            ja: '生産管理',
            ko: '생산 관리',
            fr: 'Gestion de Production',
            de: 'Produktionsmanagement',
            es: 'Gestión de Producción',
            ar: 'إدارة الإنتاج'
        },
        'module.project_tasks': {
            en: 'Project Tasks',
            zh: '项目任务',
            ja: 'プロジェクトタスク',
            ko: '프로젝트 작업',
            fr: 'Tâches de Projet',
            de: 'Projektaufgaben',
            es: 'Tareas del Proyecto',
            ar: 'مهام المشروع'
        },
        'module.vps_products': {
            en: 'VPS Product Showcase',
            zh: 'VPS产品展示',
            ja: 'VPS製品ショーケース',
            ko: 'VPS 제품 쇼케이스',
            fr: 'Vitrine de Produits VPS',
            de: 'VPS-Produktschaufenster',
            es: 'Escaparate de Productos VPS',
            ar: 'عرض منتجات VPS'
        },
        'module.supplier_management': {
            en: 'Supplier Management',
            zh: '供应商管理',
            ja: 'サプライヤー管理',
            ko: '공급업체 관리',
            fr: 'Gestion des Fournisseurs',
            de: 'Lieferantenmanagement',
            es: 'Gestión de Proveedores',
            ar: 'إدارة الموردين'
        },
        
        // Language Switcher
        'language.switch': {
            en: 'Language',
            zh: '语言',
            ja: '言語',
            ko: '언어',
            fr: 'Langue',
            de: 'Sprache',
            es: 'Idioma',
            ar: 'اللغة'
        },
        
        // Common Actions
        'action.view_analysis': {
            en: 'View Analysis',
            zh: '查看分析',
            ja: '分析を表示',
            ko: '분석 보기',
            fr: 'Voir l\'Analyse',
            de: 'Analyse anzeigen',
            es: 'Ver Análisis',
            ar: 'عرض التحليل'
        },
        'action.create_order': {
            en: 'Create Order',
            zh: '创建订单',
            ja: '注文作成',
            ko: '주문 생성',
            fr: 'Créer une Commande',
            de: 'Bestellung erstellen',
            es: 'Crear Pedido',
            ar: 'إنشاء طلب'
        },
        'action.review_contracts': {
            en: 'Review Contracts',
            zh: '审查合同',
            ja: '契約レビュー',
            ko: '계약 검토',
            fr: 'Examiner les Contrats',
            de: 'Verträge überprüfen',
            es: 'Revisar Contratos',
            ar: 'مراجعة العقود'
        },
        
        // Chart Titles
        'chart.spend_analysis': {
            en: 'Spend Category Analysis',
            zh: '支出分类分析',
            ja: '支出カテゴリ分析',
            ko: '지출 카테고리 분석',
            fr: 'Analyse des Catégories de Dépenses',
            de: 'Ausgabenkategorien-Analyse',
            es: 'Análisis de Categorías de Gasto',
            ar: 'تحليل فئات الإنفاق'
        },
        'chart.order_status': {
            en: 'Order Status Statistics',
            zh: '订单状态统计',
            ja: '注文ステータス統計',
            ko: '주문 상태 통계',
            fr: 'Statistiques du Statut des Commandes',
            de: 'Bestellstatus-Statistiken',
            es: 'Estadísticas del Estado de Pedidos',
            ar: 'إحصائيات حالة الطلبات'
        },
        'chart.procurement_trend': {
            en: 'Monthly Procurement Trend',
            zh: '月度采购趋势',
            ja: '月次調達トレンド',
            ko: '월간 조달 동향',
            fr: 'Tendance d\'Approvisionnement Mensuel',
            de: 'Monatlicher Beschaffungstrend',
            es: 'Tendencia de Adquisiciones Mensuales',
            ar: 'اتجاه الشراء الشهري'
        },
        
        // AI Insights
        'ai.insights': {
            en: 'AI Insights',
            zh: 'AI洞察',
            ja: 'AI洞察',
            ko: 'AI 인사이트',
            fr: 'Aperçus IA',
            de: 'KI-Einblicke',
            es: 'Perspectivas de IA',
            ar: 'رؤى الذكاء الاصطناعي'
        },
        'insight.cost_saving': {
            en: 'Cost Saving Opportunity',
            zh: '成本节约机会',
            ja: 'コスト削減の機会',
            ko: '비용 절약 기회',
            fr: 'Opportunité d\'Économie de Coûts',
            de: 'Kosteneinsparungsmöglichkeit',
            es: 'Oportunidad de Ahorro de Costos',
            ar: 'فرصة توفير التكاليف'
        },
        'insight.cost_saving_desc': {
            en: 'Based on historical data, switching to supplier XYZ for office supplies could save 15% on costs.',
            zh: '根据历史数据，将办公用品供应商切换到XYZ可节省15%的成本。',
            ja: '履歴データに基づくと、オフィス用品をサプライヤーXYZに切り替えることで15%のコスト削減が可能です。',
            ko: '과거 데이터를 기반으로 사무용품 공급업체를 XYZ로 변경하면 비용을 15% 절약할 수 있습니다.',
            fr: 'Basé sur les données historiques, passer au fournisseur XYZ pour les fournitures de bureau pourrait économiser 15% sur les coûts.',
            de: 'Basierend auf historischen Daten könnte der Wechsel zu Lieferant XYZ für Büromaterial 15% der Kosten einsparen.',
            es: 'Basado en datos históricos, cambiar al proveedor XYZ para suministros de oficina podría ahorrar 15% en costos.',
            ar: 'بناءً على البيانات التاريخية، يمكن أن يوفر التبديل إلى المورد XYZ لمستلزمات المكتب 15% من التكاليف.'
        },
        'insight.inventory_alert': {
            en: 'Inventory Alert',
            zh: '库存警报',
            ja: '在庫アラート',
            ko: '재고 알림',
            fr: 'Alerte d\'Inventaire',
            de: 'Bestandswarnung',
            es: 'Alerta de Inventario',
            ar: 'تنبيه المخزون'
        },
        'insight.inventory_alert_desc': {
            en: 'Raw material ABC is projected to run out in 2 weeks. Consider placing an order now to avoid production delays.',
            zh: '原材料ABC预计将在2周内用完。建议现在下订单以避免生产延误。',
            ja: '原材料ABCは2週間で不足する予定です。生産遅延を避けるため、今すぐ注文することを検討してください。',
            ko: '원자재 ABC가 2주 내에 소진될 것으로 예상됩니다. 생산 지연을 피하기 위해 지금 주문하는 것을 고려하세요.',
            fr: 'La matière première ABC devrait s\'épuiser dans 2 semaines. Envisagez de passer une commande maintenant pour éviter les retards de production.',
            de: 'Rohstoff ABC wird voraussichtlich in 2 Wochen aufgebraucht sein. Erwägen Sie jetzt eine Bestellung, um Produktionsverzögerungen zu vermeiden.',
            es: 'Se proyecta que la materia prima ABC se agote en 2 semanas. Considere realizar un pedido ahora para evitar retrasos en la producción.',
            ar: 'من المتوقع أن تنفد المادة الخام ABC خلال أسبوعين. فكر في تقديم طلب الآن لتجنب تأخير الإنتاج.'
        },
        'insight.contract_renewal': {
            en: 'Contract Renewal',
            zh: '合同续签',
            ja: '契約更新',
            ko: '계약 갱신',
            fr: 'Renouvellement de Contrat',
            de: 'Vertragsverlängerung',
            es: 'Renovación de Contrato',
            ar: 'تجديد العقد'
        },
        'insight.contract_renewal_desc': {
            en: '5 supplier contracts are due for renewal in the next 30 days. AI analysis suggests renegotiation could yield better terms.',
            zh: '5个供应商合同将在未来30天内到期续签。AI分析建议重新谈判可能获得更好的条款。',
            ja: '5つのサプライヤー契約が今後30日以内に更新期限を迎えます。AI分析では、再交渉により良い条件が得られる可能性があることを示唆しています。',
            ko: '5개의 공급업체 계약이 향후 30일 내에 갱신 예정입니다. AI 분석에 따르면 재협상을 통해 더 나은 조건을 얻을 수 있습니다.',
            fr: '5 contrats de fournisseurs doivent être renouvelés dans les 30 prochains jours. L\'analyse IA suggère qu\'une renégociation pourrait donner de meilleures conditions.',
            de: '5 Lieferantenverträge müssen in den nächsten 30 Tagen verlängert werden. Die KI-Analyse deutet darauf hin, dass eine Neuverhandlung bessere Bedingungen ergeben könnte.',
            es: '5 contratos de proveedores deben renovarse en los próximos 30 días. El análisis de IA sugiere que la renegociación podría generar mejores términos.',
            ar: '5 عقود موردين مستحقة للتجديد خلال الـ 30 يومًا القادمة. يشير تحليل الذكاء الاصطناعي إلى أن إعادة التفاوض قد تحقق شروطًا أفضل.'
        },
        
        // AI Assistant Capabilities
        'ai.capabilities': {
            en: 'You can ask me to:',
            zh: '您可以要求我：',
            ja: '以下のことをお手伝いできます：',
            ko: '다음과 같은 도움을 드릴 수 있습니다:',
            fr: 'Vous pouvez me demander de :',
            de: 'Sie können mich bitten:',
            es: 'Puedes pedirme que:',
            ar: 'يمكنك أن تطلب مني:'
        },
        'ai.capability.requisition': {
            en: 'Create a purchase requisition',
            zh: '创建采购申请',
            ja: '購買要求を作成する',
            ko: '구매 요청서 작성',
            fr: 'Créer une demande d\'achat',
            de: 'Eine Kaufanforderung erstellen',
            es: 'Crear una requisición de compra',
            ar: 'إنشاء طلب شراء'
        },
        'ai.capability.inventory': {
            en: 'Check inventory for specific materials',
            zh: '检查特定材料的库存',
            ja: '特定の材料の在庫を確認する',
            ko: '특정 자재의 재고 확인',
            fr: 'Vérifier l\'inventaire pour des matériaux spécifiques',
            de: 'Bestand für spezifische Materialien prüfen',
            es: 'Verificar inventario para materiales específicos',
            ar: 'فحص المخزون للمواد المحددة'
        },
        'ai.capability.cost': {
            en: 'Look up cost information for materials',
            zh: '查找材料的成本信息',
            ja: '材料のコスト情報を調べる',
            ko: '자재 비용 정보 조회',
            fr: 'Rechercher des informations de coût pour les matériaux',
            de: 'Kosteninformationen für Materialien nachschlagen',
            es: 'Buscar información de costos para materiales',
            ar: 'البحث عن معلومات التكلفة للمواد'
        },
        'ai.capability.supplier': {
            en: 'Find supplier information',
            zh: '查找供应商信息',
            ja: 'サプライヤー情報を見つける',
            ko: '공급업체 정보 찾기',
            fr: 'Trouver des informations sur les fournisseurs',
            de: 'Lieferanteninformationen finden',
            es: 'Encontrar información de proveedores',
            ar: 'العثور على معلومات المورد'
        },
        'ai.capability.tracking': {
            en: 'Track order status',
            zh: '跟踪订单状态',
            ja: '注文状況を追跡する',
            ko: '주문 상태 추적',
            fr: 'Suivre le statut des commandes',
            de: 'Bestellstatus verfolgen',
            es: 'Rastrear estado de pedidos',
            ar: 'تتبع حالة الطلب'
        },
        
        // Module Descriptions
        'module.team_collaboration_desc': {
            en: 'Collaborate with your team on research projects',
            zh: '与您的团队在研究项目上协作',
            ja: '研究プロジェクトでチームと協力する',
            ko: '연구 프로젝트에서 팀과 협업',
            fr: 'Collaborez avec votre équipe sur des projets de recherche',
            de: 'Arbeiten Sie mit Ihrem Team an Forschungsprojekten zusammen',
            es: 'Colabora con tu equipo en proyectos de investigación',
            ar: 'تعاون مع فريقك في مشاريع البحث'
        },
        'module.production_management_desc': {
            en: 'Manage and track production processes',
            zh: '管理和跟踪生产流程',
            ja: '生産プロセスを管理・追跡する',
            ko: '생산 프로세스 관리 및 추적',
            fr: 'Gérer et suivre les processus de production',
            de: 'Produktionsprozesse verwalten und verfolgen',
            es: 'Gestionar y rastrear procesos de producción',
            ar: 'إدارة وتتبع عمليات الإنتاج'
        },
        'module.project_tasks_desc': {
            en: 'Assign and monitor project tasks',
            zh: '分配和监控项目任务',
            ja: 'プロジェクトタスクを割り当て・監視する',
            ko: '프로젝트 작업 할당 및 모니터링',
            fr: 'Assigner et surveiller les tâches de projet',
            de: 'Projektaufgaben zuweisen und überwachen',
            es: 'Asignar y monitorear tareas del proyecto',
            ar: 'تعيين ومراقبة مهام المشروع'
        },
        'module.vps_products_desc': {
            en: 'Browse and compare VPS products from major cloud providers',
            zh: '浏览和比较各大云服务商的VPS产品',
            ja: '主要クラウドプロバイダーのVPS製品を閲覧・比較する',
            ko: '주요 클라우드 제공업체의 VPS 제품 탐색 및 비교',
            fr: 'Parcourir et comparer les produits VPS des principaux fournisseurs cloud',
            de: 'VPS-Produkte von großen Cloud-Anbietern durchsuchen und vergleichen',
            es: 'Explorar y comparar productos VPS de los principales proveedores de nube',
            ar: 'تصفح ومقارنة منتجات VPS من مقدمي الخدمات السحابية الرئيسيين'
        },
        'module.supplier_management_desc': {
            en: 'Manage supplier relationships and performance',
            zh: '管理供应商关系和绩效',
            ja: 'サプライヤーとの関係とパフォーマンスを管理する',
            ko: '공급업체 관계 및 성과 관리',
            fr: 'Gérer les relations et les performances des fournisseurs',
            de: 'Lieferantenbeziehungen und -leistung verwalten',
            es: 'Gestionar relaciones y rendimiento de proveedores',
            ar: 'إدارة علاقات وأداء الموردين'
        },
        'module.performance_evaluation_desc': {
            en: 'Evaluate supplier and procurement performance',
            zh: '评估供应商和采购绩效',
            ja: 'サプライヤーと調達のパフォーマンスを評価する',
            ko: '공급업체 및 조달 성과 평가',
            fr: 'Évaluer les performances des fournisseurs et des achats',
            de: 'Lieferanten- und Beschaffungsleistung bewerten',
            es: 'Evaluar el rendimiento de proveedores y adquisiciones',
            ar: 'تقييم أداء الموردين والمشتريات'
        },
        'module.contract_management_desc': {
            en: 'Manage procurement contracts and terms',
            zh: '管理采购合同和条款',
            ja: '調達契約と条件を管理する',
            ko: '조달 계약 및 조건 관리',
            fr: 'Gérer les contrats et conditions d\'approvisionnement',
            de: 'Beschaffungsverträge und -bedingungen verwalten',
            es: 'Gestionar contratos y términos de adquisiciones',
            ar: 'إدارة عقود وشروط المشتريات'
        },
        'module.order_processing_desc': {
            en: 'Process and track purchase orders',
            zh: '处理和跟踪采购订单',
            ja: '発注書を処理・追跡する',
            ko: '구매 주문 처리 및 추적',
            fr: 'Traiter et suivre les bons de commande',
            de: 'Bestellungen bearbeiten und verfolgen',
            es: 'Procesar y rastrear órdenes de compra',
            ar: 'معالجة وتتبع أوامر الشراء'
        }
    }
};

// I18n utility functions
class I18n {
    constructor() {
        this.config = i18nConfig;
        this.currentLanguage = this.config.defaultLanguage;
        this.loadLanguageFromStorage();
    }
    
    // Load language preference from localStorage
    loadLanguageFromStorage() {
        const savedLanguage = localStorage.getItem('vps-language');
        if (savedLanguage && this.config.languages[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        }
    }
    
    // Save language preference to localStorage
    saveLanguageToStorage() {
        localStorage.setItem('vps-language', this.currentLanguage);
    }
    
    // Get translation for a key
    t(key, language = null) {
        const lang = language || this.currentLanguage;
        const translation = this.config.translations[key];
        
        if (!translation) {
            console.warn(`Translation key '${key}' not found`);
            return key;
        }
        
        return translation[lang] || translation[this.config.defaultLanguage] || key;
    }
    
    // Set current language
    setLanguage(language) {
        if (this.config.languages[language]) {
            this.currentLanguage = language;
            this.saveLanguageToStorage();
            this.updatePageLanguage();
            return true;
        }
        return false;
    }
    
    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    // Get available languages
    getAvailableLanguages() {
        return this.config.languages;
    }
    
    // Check if language is RTL
    isRTL(language = null) {
        const lang = language || this.currentLanguage;
        return this.config.languages[lang]?.rtl || false;
    }
    
    // Update page language
    updatePageLanguage() {
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage;
        
        // Update RTL direction
        if (this.isRTL()) {
            document.documentElement.dir = 'rtl';
            document.body.classList.add('rtl');
        } else {
            document.documentElement.dir = 'ltr';
            document.body.classList.remove('rtl');
        }
        
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update page title
        document.title = this.t('app.title');
        
        // Trigger custom event for other components to listen
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        }));
    }
}

// Global i18n instance
window.i18n = new I18n();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { I18n, i18nConfig };
}
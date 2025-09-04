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
        'nav.home': {
            en: 'Home',
            zh: '首页',
            ja: 'ホーム',
            ko: '홈',
            fr: 'Accueil',
            de: 'Startseite',
            es: 'Inicio',
            ar: 'الرئيسية'
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
        'nav.blog': {
            en: 'Blog',
            zh: '博客',
            ja: 'ブログ',
            ko: '블로그',
            fr: 'Blog',
            de: 'Blog',
            es: 'Blog',
            ar: 'المدونة'
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
        'ai.enhanced': {
            en: 'AI Enhanced',
            zh: 'AI增强',
            ja: 'AI強化',
            ko: 'AI 강화',
            fr: 'Amélioré par IA',
            de: 'KI-Erweitert',
            es: 'Mejorado por IA',
            ar: 'معزز بالذكاء الاصطناعي'
        },
        'ai.powered': {
            en: 'AI Powered',
            zh: 'AI驱动',
            ja: 'AI駆動',
            ko: 'AI 구동',
            fr: 'Alimenté par IA',
            de: 'KI-angetrieben',
            es: 'Impulsado por IA',
            ar: 'مدعوم بالذكاء الاصطناعي'
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
        'chart.supplier_performance': {
            en: 'Supplier Performance Score',
            zh: '供应商绩效评分',
            ja: 'サプライヤーパフォーマンススコア',
            ko: '공급업체 성과 점수',
            fr: 'Score de Performance des Fournisseurs',
            de: 'Lieferantenleistungsbewertung',
            es: 'Puntuación de Rendimiento del Proveedor',
            ar: 'درجة أداء المورد'
        },
        'chart.inventory_overview': {
            en: 'Inventory Status Overview',
            zh: '库存状态概览',
            ja: '在庫状況概要',
            ko: '재고 상태 개요',
            fr: 'Aperçu du Statut des Stocks',
            de: 'Bestandsstatus-Übersicht',
            es: 'Resumen del Estado del Inventario',
            ar: 'نظرة عامة على حالة المخزون'
        },
        'chart.cost_savings_analysis': {
            en: 'Cost Savings Analysis',
            zh: '成本节约分析',
            ja: 'コスト削減分析',
            ko: '비용 절약 분석',
            fr: 'Analyse des Économies de Coûts',
            de: 'Kosteneinsparungsanalyse',
            es: 'Análisis de Ahorro de Costos',
            ar: 'تحليل توفير التكاليف'
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
        'module.performance_evaluation': {
            en: 'Performance Evaluation',
            zh: '绩效评估',
            ja: 'パフォーマンス評価',
            ko: '성과 평가',
            fr: 'Évaluation des Performances',
            de: 'Leistungsbewertung',
            es: 'Evaluación de Rendimiento',
            ar: 'تقييم الأداء'
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
        'module.contract_management': {
            en: 'Contract Management',
            zh: '合同管理',
            ja: '契約管理',
            ko: '계약 관리',
            fr: 'Gestion des Contrats',
            de: 'Vertragsmanagement',
            es: 'Gestión de Contratos',
            ar: 'إدارة العقود'
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
        'module.order_processing': {
            en: 'Order Processing',
            zh: '订单处理',
            ja: '注文処理',
            ko: '주문 처리',
            fr: 'Traitement des Commandes',
            de: 'Auftragsbearbeitung',
            es: 'Procesamiento de Órdenes',
            ar: 'معالجة الطلبات'
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
        },
        
        // Planning Module
        'module.procurement_planning': {
            en: 'Procurement Planning',
            zh: '采购规划',
            ja: '調達計画',
            ko: '조달 계획',
            fr: 'Planification d\'Approvisionnement',
            de: 'Beschaffungsplanung',
            es: 'Planificación de Adquisiciones',
            ar: 'تخطيط المشتريات'
        },
        'module.procurement_planning_desc': {
            en: 'Plan and schedule procurement activities',
            zh: '规划和安排采购活动',
            ja: '調達活動を計画・スケジュールする',
            ko: '조달 활동 계획 및 일정 조정',
            fr: 'Planifier et programmer les activités d\'approvisionnement',
            de: 'Beschaffungsaktivitäten planen und terminieren',
            es: 'Planificar y programar actividades de adquisiciones',
            ar: 'تخطيط وجدولة أنشطة المشتريات'
        },
        'module.supplier_catalog': {
            en: 'Supplier Catalog',
            zh: '供应商目录',
            ja: 'サプライヤーカタログ',
            ko: '공급업체 카탈로그',
            fr: 'Catalogue des Fournisseurs',
            de: 'Lieferantenkatalog',
            es: 'Catálogo de Proveedores',
            ar: 'كتالوج الموردين'
        },
        'module.supplier_catalog_desc': {
            en: 'Browse and manage supplier catalogs',
            zh: '浏览和管理供应商目录',
            ja: 'サプライヤーカタログを閲覧・管理する',
            ko: '공급업체 카탈로그 탐색 및 관리',
            fr: 'Parcourir et gérer les catalogues des fournisseurs',
            de: 'Lieferantenkataloge durchsuchen und verwalten',
            es: 'Explorar y gestionar catálogos de proveedores',
            ar: 'تصفح وإدارة كتالوجات الموردين'
        },
        'module.arrival_planning': {
            en: 'Arrival Planning',
            zh: '到货规划',
            ja: '到着計画',
            ko: '도착 계획',
            fr: 'Planification d\'Arrivée',
            de: 'Ankunftsplanung',
            es: 'Planificación de Llegada',
            ar: 'تخطيط الوصول'
        },
        'module.arrival_planning_desc': {
            en: 'Plan and schedule incoming deliveries',
            zh: '规划和安排到货交付',
            ja: '入荷配送を計画・スケジュールする',
            ko: '입고 배송 계획 및 일정 조정',
            fr: 'Planifier et programmer les livraisons entrantes',
            de: 'Eingehende Lieferungen planen und terminieren',
            es: 'Planificar y programar entregas entrantes',
            ar: 'تخطيط وجدولة عمليات التسليم الواردة'
        },
        'module.inventory_forecast': {
            en: 'Inventory Forecast',
            zh: '库存预测',
            ja: '在庫予測',
            ko: '재고 예측',
            fr: 'Prévision des Stocks',
            de: 'Bestandsprognose',
            es: 'Pronóstico de Inventario',
            ar: 'توقعات المخزون'
        },
        'module.inventory_forecast_desc': {
            en: 'Forecast inventory levels and needs',
            zh: '预测库存水平和需求',
            ja: '在庫レベルとニーズを予測する',
            ko: '재고 수준 및 수요 예측',
            fr: 'Prévoir les niveaux et besoins en stock',
            de: 'Bestandsniveaus und -bedarf prognostizieren',
            es: 'Pronosticar niveles y necesidades de inventario',
            ar: 'توقع مستويات واحتياجات المخزون'
        },
        
        // Logistics Module
        'module.logistics_procurement': {
            en: 'Logistics Procurement',
            zh: '物流采购',
            ja: '物流調達',
            ko: '물류 조달',
            fr: 'Approvisionnement Logistique',
            de: 'Logistikbeschaffung',
            es: 'Adquisiciones Logísticas',
            ar: 'شراء الخدمات اللوجستية'
        },
        'module.logistics_procurement_desc': {
            en: 'Procure logistics services and solutions',
            zh: '采购物流服务和解决方案',
            ja: '物流サービスとソリューションを調達する',
            ko: '물류 서비스 및 솔루션 조달',
            fr: 'Se procurer des services et solutions logistiques',
            de: 'Logistikdienstleistungen und -lösungen beschaffen',
            es: 'Adquirir servicios y soluciones logísticas',
            ar: 'شراء الخدمات والحلول اللوجستية'
        },
        'module.logistics_tracking': {
            en: 'Logistics Tracking',
            zh: '物流跟踪',
            ja: '物流追跡',
            ko: '물류 추적',
            fr: 'Suivi Logistique',
            de: 'Logistikverfolgung',
            es: 'Seguimiento Logístico',
            ar: 'تتبع الخدمات اللوجستية'
        },
        'module.logistics_tracking_desc': {
            en: 'Track shipments and deliveries in real-time',
            zh: '实时跟踪货物和交付',
            ja: '貨物と配送をリアルタイムで追跡する',
            ko: '실시간으로 화물 및 배송 추적',
            fr: 'Suivre les expéditions et livraisons en temps réel',
            de: 'Sendungen und Lieferungen in Echtzeit verfolgen',
            es: 'Rastrear envíos y entregas en tiempo real',
            ar: 'تتبع الشحنات والتسليم في الوقت الفعلي'
        },
        'module.payment_processing': {
            en: 'Payment Processing',
            zh: '支付处理',
            ja: '支払い処理',
            ko: '결제 처리',
            fr: 'Traitement des Paiements',
            de: 'Zahlungsabwicklung',
            es: 'Procesamiento de Pagos',
            ar: 'معالجة المدفوعات'
        },
        'module.payment_processing_desc': {
            en: 'Process and manage logistics payments',
            zh: '处理和管理物流支付',
            ja: '物流支払いを処理・管理する',
            ko: '물류 결제 처리 및 관리',
            fr: 'Traiter et gérer les paiements logistiques',
            de: 'Logistikzahlungen bearbeiten und verwalten',
            es: 'Procesar y gestionar pagos logísticos',
            ar: 'معالجة وإدارة مدفوعات الخدمات اللوجستية'
        },
        
        // Finance Module
        'module.reconciliation': {
            en: 'Reconciliation',
            zh: '对账',
            ja: '調整',
            ko: '조정',
            fr: 'Réconciliation',
            de: 'Abstimmung',
            es: 'Reconciliación',
            ar: 'التوفيق'
        },
        'module.reconciliation_desc': {
            en: 'Reconcile financial transactions and records',
            zh: '对账财务交易和记录',
            ja: '財務取引と記録を調整する',
            ko: '재무 거래 및 기록 조정',
            fr: 'Réconcilier les transactions et registres financiers',
            de: 'Finanztransaktionen und -aufzeichnungen abstimmen',
            es: 'Conciliar transacciones y registros financieros',
            ar: 'توفيق المعاملات والسجلات المالية'
        },
        'module.invoicing': {
            en: 'Invoicing',
            zh: '开票',
            ja: '請求書発行',
            ko: '송장 발행',
            fr: 'Facturation',
            de: 'Rechnungsstellung',
            es: 'Facturación',
            ar: 'إصدار الفواتير'
        },
        'module.invoicing_desc': {
            en: 'Generate and manage invoices',
            zh: '生成和管理发票',
            ja: '請求書を生成・管理する',
            ko: '송장 생성 및 관리',
            fr: 'Générer et gérer les factures',
            de: 'Rechnungen erstellen und verwalten',
            es: 'Generar y gestionar facturas',
            ar: 'إنشاء وإدارة الفواتير'
        },
        'module.capital_planning': {
            en: 'Capital Planning',
            zh: '资本规划',
            ja: '資本計画',
            ko: '자본 계획',
            fr: 'Planification du Capital',
            de: 'Kapitalplanung',
            es: 'Planificación de Capital',
            ar: 'تخطيط رأس المال'
        },
        'module.capital_planning_desc': {
            en: 'Plan and manage capital expenditures',
            zh: '规划和管理资本支出',
            ja: '資本支出を計画・管理する',
            ko: '자본 지출 계획 및 관리',
            fr: 'Planifier et gérer les dépenses en capital',
            de: 'Kapitalausgaben planen und verwalten',
            es: 'Planificar y gestionar gastos de capital',
            ar: 'تخطيط وإدارة النفقات الرأسمالية'
        },
        'module.payment_processing_finance': {
            en: 'Payment Processing',
            zh: '支付处理',
            ja: '支払い処理',
            ko: '결제 처리',
            fr: 'Traitement des Paiements',
            de: 'Zahlungsabwicklung',
            es: 'Procesamiento de Pagos',
            ar: 'معالجة المدفوعات'
        },
        'module.payment_processing_finance_desc': {
            en: 'Process and manage financial payments',
            zh: '处理和管理财务支付',
            ja: '財務支払いを処理・管理する',
            ko: '재무 결제 처리 및 관리',
            fr: 'Traiter et gérer les paiements financiers',
            de: 'Finanzzahlungen bearbeiten und verwalten',
            es: 'Procesar y gestionar pagos financieros',
            ar: 'معالجة وإدارة المدفوعات المالية'
        },
        'module.news': {
            en: 'News',
            zh: '新闻',
            ja: 'ニュース',
            ko: '뉴스',
            fr: 'Actualités',
            de: 'Nachrichten',
            es: 'Noticias',
            ar: 'الأخبار'
        },
        'module.news_desc': {
            en: 'Latest industry news and updates',
            zh: '最新行业新闻和更新',
            ja: '最新の業界ニュースとアップデート',
            ko: '최신 업계 뉴스 및 업데이트',
            fr: 'Dernières nouvelles et mises à jour de l\'industrie',
            de: 'Neueste Branchennachrichten und Updates',
            es: 'Últimas noticias y actualizaciones de la industria',
            ar: 'آخر أخبار الصناعة والتحديثات'
        },
        'module.lifestyle': {
            en: 'Lifestyle',
            zh: '生活方式',
            ja: 'ライフスタイル',
            ko: '라이프스타일',
            fr: 'Style de Vie',
            de: 'Lebensstil',
            es: 'Estilo de Vida',
            ar: 'نمط الحياة'
        },
        'module.lifestyle_desc': {
            en: 'Lifestyle tips and work-life balance',
            zh: '生活方式建议和工作生活平衡',
            ja: 'ライフスタイルのヒントとワークライフバランス',
            ko: '라이프스타일 팁과 일과 삶의 균형',
            fr: 'Conseils de style de vie et équilibre travail-vie',
            de: 'Lifestyle-Tipps und Work-Life-Balance',
            es: 'Consejos de estilo de vida y equilibrio trabajo-vida',
            ar: 'نصائح نمط الحياة وتوازن العمل والحياة'
        },
        'module.ai_tools': {
            en: 'AI Tools',
            zh: 'AI工具',
            ja: 'AIツール',
            ko: 'AI 도구',
            fr: 'Outils IA',
            de: 'KI-Tools',
            es: 'Herramientas IA',
            ar: 'أدوات الذكاء الاصطناعي'
        },
        'module.ai_tools_desc': {
            en: 'Explore AI tools and technologies',
            zh: '探索AI工具和技术',
            ja: 'AIツールとテクノロジーを探索',
            ko: 'AI 도구 및 기술 탐색',
            fr: 'Explorer les outils et technologies IA',
            de: 'KI-Tools und -Technologien erkunden',
            es: 'Explorar herramientas y tecnologías de IA',
            ar: 'استكشاف أدوات وتقنيات الذكاء الاصطناعي'
        },
        'module.guides': {
            en: 'Guides',
            zh: '指南',
            ja: 'ガイド',
            ko: '가이드',
            fr: 'Guides',
            de: 'Anleitungen',
            es: 'Guías',
            ar: 'الأدلة'
        },
        'module.guides_desc': {
            en: 'Step-by-step guides and tutorials',
            zh: '分步指南和教程',
            ja: 'ステップバイステップガイドとチュートリアル',
            ko: '단계별 가이드 및 튜토리얼',
            fr: 'Guides étape par étape et tutoriels',
            de: 'Schritt-für-Schritt-Anleitungen und Tutorials',
            es: 'Guías paso a paso y tutoriales',
            ar: 'أدلة خطوة بخطوة ودروس تعليمية'
        },
        
        'blog.title': {
            en: 'Knowledge Hub',
            zh: '知识中心',
            ja: 'ナレッジハブ',
            ko: '지식 허브',
            fr: 'Centre de Connaissances',
            de: 'Wissenszentrum',
            es: 'Centro de Conocimiento',
            ar: 'مركز المعرفة'
        },
        'blog.subtitle': {
            en: 'Discover insights, trends, and innovations in procurement and technology',
            zh: '探索采购和技术领域的洞察、趋势和创新',
            ja: '調達とテクノロジーの洞察、トレンド、イノベーションを発見',
            ko: '조달 및 기술 분야의 통찰력, 트렌드, 혁신을 발견하세요',
            fr: 'Découvrez les insights, tendances et innovations en approvisionnement et technologie',
            de: 'Entdecken Sie Einblicke, Trends und Innovationen in Beschaffung und Technologie',
            es: 'Descubre insights, tendencias e innovaciones en adquisiciones y tecnología',
            ar: 'اكتشف الرؤى والاتجاهات والابتكارات في المشتريات والتكنولوجيا'
        },
        'blog.search_placeholder': {
            en: 'Search articles...',
            zh: '搜索文章...',
            ja: '記事を検索...',
            ko: '기사 검색...',
            fr: 'Rechercher des articles...',
            de: 'Artikel suchen...',
            es: 'Buscar artículos...',
            ar: 'البحث في المقالات...'
        },
        'blog.sharing.title': {
            en: 'Share Knowledge',
            zh: '分享知识',
            ja: '知識を共有',
            ko: '지식 공유',
            fr: 'Partager les Connaissances',
            de: 'Wissen Teilen',
            es: 'Compartir Conocimiento',
            ar: 'مشاركة المعرفة'
        },
        'blog.sharing.subtitle': {
            en: 'Connect with the procurement community and share insights',
            zh: '与采购社区联系并分享见解',
            ja: '調達コミュニティとつながり、洞察を共有',
            ko: '조달 커뮤니티와 연결하고 통찰력을 공유하세요',
            fr: 'Connectez-vous avec la communauté d\'approvisionnement et partagez des insights',
            de: 'Verbinden Sie sich mit der Beschaffungsgemeinschaft und teilen Sie Einblicke',
            es: 'Conéctate con la comunidad de adquisiciones y comparte insights',
            ar: 'تواصل مع مجتمع المشتريات وشارك الرؤى'
        },
        'blog.sharing.dingtalk': {
            zh: '钉钉',
            en: 'DingTalk',
            ja: 'DingTalk',
            ko: '딩톡',
            fr: 'DingTalk',
            de: 'DingTalk',
            es: 'DingTalk',
            ar: 'DingTalk'
        },
        'blog.sharing.twitter': {
            zh: 'Twitter',
            en: 'Twitter', 
            ja: 'Twitter',
            ko: '트위터',
            fr: 'Twitter',
            de: 'Twitter',
            es: 'Twitter',
            ar: 'تويتر'
        },
        'blog.sharing.youtube': {
            zh: 'YouTube',
            en: 'YouTube',
            ja: 'YouTube', 
            ko: '유튜브',
            fr: 'YouTube',
            de: 'YouTube',
            es: 'YouTube',
            ar: 'يوتيوب'
        },
        'blog.sharing.instagram': {
            zh: 'Instagram',
            en: 'Instagram',
            ja: 'Instagram',
            ko: '인스타그램', 
            fr: 'Instagram',
            de: 'Instagram',
            es: 'Instagram',
            ar: 'إنستغرام'
        },
        'blog.sharing.facebook': {
            zh: 'Facebook',
            en: 'Facebook',
            ja: 'Facebook',
            ko: '페이스북',
            fr: 'Facebook', 
            de: 'Facebook',
            es: 'Facebook',
            ar: 'فيسبوك'
        },
        
        // 博客分类翻译
        'blog.category.all': {
            en: 'All',
            zh: '全部',
            ja: 'すべて',
            ko: '전체',
            fr: 'Tout',
            de: 'Alle',
            es: 'Todo',
            ar: 'الكل'
        },
        'blog.category.news': {
            en: 'News',
            zh: '新闻',
            ja: 'ニュース',
            ko: '뉴스',
            fr: 'Actualités',
            de: 'Nachrichten',
            es: 'Noticias',
            ar: 'الأخبار'
        },
        'blog.category.lifestyle': {
            en: 'Lifestyle',
            zh: '生活方式',
            ja: 'ライフスタイル',
            ko: '라이프스타일',
            fr: 'Style de Vie',
            de: 'Lebensstil',
            es: 'Estilo de Vida',
            ar: 'نمط الحياة'
        },
        'blog.category.ai_tools': {
            en: 'AI Tools',
            zh: 'AI工具',
            ja: 'AIツール',
            ko: 'AI 도구',
            fr: 'Outils IA',
            de: 'KI-Tools',
            es: 'Herramientas IA',
            ar: 'أدوات الذكاء الاصطناعي'
        },
        'blog.category.guides': {
            en: 'Guides',
            zh: '指南',
            ja: 'ガイド',
            ko: '가이드',
            fr: 'Guides',
            de: 'Anleitungen',
            es: 'Guías',
            ar: 'الأدلة'
        },
        
        // 博客文章翻译
        'blog.article.supply_chain.title': {
            en: 'Supply Chain Innovation',
            zh: '供应链创新',
            ja: 'サプライチェーンイノベーション',
            ko: '공급망 혁신',
            fr: 'Innovation de la Chaîne d\'Approvisionnement',
            de: 'Lieferketten-Innovation',
            es: 'Innovación en la Cadena de Suministro',
            ar: 'ابتكار سلسلة التوريد'
        },
        'blog.article.supply_chain.desc': {
            en: 'Latest innovations in supply chain management and their impact on procurement efficiency.',
            zh: '供应链管理的最新创新及其对采购效率的影响。',
            ja: 'サプライチェーン管理の最新イノベーションと調達効率への影響。',
            ko: '공급망 관리의 최신 혁신과 조달 효율성에 미치는 영향.',
            fr: 'Les dernières innovations en gestion de la chaîne d\'approvisionnement et leur impact sur l\'efficacité des achats.',
            de: 'Neueste Innovationen im Lieferkettenmanagement und ihre Auswirkungen auf die Beschaffungseffizienz.',
            es: 'Últimas innovaciones en gestión de la cadena de suministro y su impacto en la eficiencia de adquisiciones.',
            ar: 'أحدث الابتكارات في إدارة سلسلة التوريد وتأثيرها على كفاءة المشتريات.'
        },
        'blog.article.work_life.title': {
            en: 'Work-Life Balance in Procurement',
            zh: '采购工作中的工作生活平衡',
            ja: '調達における仕事と生活のバランス',
            ko: '조달 업무의 일과 삶의 균형',
            fr: 'Équilibre Travail-Vie dans les Achats',
            de: 'Work-Life-Balance in der Beschaffung',
            es: 'Equilibrio Trabajo-Vida en Adquisiciones',
            ar: 'التوازن بين العمل والحياة في المشتريات'
        },
        'blog.article.work_life.desc': {
            en: 'Tips and strategies for maintaining healthy work-life balance in demanding procurement roles.',
            zh: '在要求严格的采购岗位中保持健康工作生活平衡的技巧和策略。',
            ja: '要求の厳しい調達職において健康的なワークライフバランスを維持するためのヒントと戦略。',
            ko: '까다로운 조달 역할에서 건강한 일과 삶의 균형을 유지하기 위한 팁과 전략.',
            fr: 'Conseils et stratégies pour maintenir un équilibre travail-vie sain dans les rôles d\'achat exigeants.',
            de: 'Tipps und Strategien zur Aufrechterhaltung einer gesunden Work-Life-Balance in anspruchsvollen Beschaffungsrollen.',
            es: 'Consejos y estrategias para mantener un equilibrio trabajo-vida saludable en roles de adquisiciones exigentes.',
            ar: 'نصائح واستراتيجيات للحفاظ على توازن صحي بين العمل والحياة في أدوار المشتريات المتطلبة.'
        },
        'blog.article.ai_analytics.title': {
            en: 'Advanced AI Analytics Dashboard',
            zh: '高级AI分析仪表板',
            ja: '高度なAI分析ダッシュボード',
            ko: '고급 AI 분석 대시보드',
            fr: 'Tableau de Bord d\'Analyse IA Avancé',
            de: 'Erweiterte KI-Analyse-Dashboard',
            es: 'Panel de Análisis de IA Avanzado',
            ar: 'لوحة تحليلات الذكاء الاصطناعي المتقدمة'
        },
        'blog.article.ai_analytics.desc': {
            en: 'Explore our new AI-powered analytics dashboard for real-time procurement insights and predictive analysis.',
            zh: '探索我们新的AI驱动分析仪表板，获取实时采购洞察和预测分析。',
            ja: 'リアルタイムの調達インサイトと予測分析のための新しいAI駆動分析ダッシュボードをご覧ください。',
            ko: '실시간 조달 통찰력과 예측 분석을 위한 새로운 AI 기반 분석 대시보드를 탐색하세요.',
            fr: 'Explorez notre nouveau tableau de bord d\'analyse alimenté par l\'IA pour des insights d\'approvisionnement en temps réel et une analyse prédictive.',
            de: 'Erkunden Sie unser neues KI-gestütztes Analyse-Dashboard für Echtzeit-Beschaffungseinblicke und prädiktive Analysen.',
            es: 'Explore nuestro nuevo panel de análisis impulsado por IA para insights de adquisiciones en tiempo real y análisis predictivo.',
            ar: 'استكشف لوحة التحليلات الجديدة المدعومة بالذكاء الاصطناعي للحصول على رؤى المشتريات في الوقت الفعلي والتحليل التنبؤي.'
        },
        'blog.article.procurement_guide.title': {
            en: 'Complete Procurement Setup Guide',
            zh: '完整采购设置指南',
            ja: '完全な調達セットアップガイド',
            ko: '완전한 조달 설정 가이드',
            fr: 'Guide Complet de Configuration des Achats',
            de: 'Vollständiger Beschaffungs-Setup-Leitfaden',
            es: 'Guía Completa de Configuración de Adquisiciones',
            ar: 'دليل إعداد المشتريات الكامل'
        },
        'blog.article.procurement_guide.desc': {
            en: 'Step-by-step guide to setting up an efficient procurement system for your organization.',
            zh: '为您的组织建立高效采购系统的分步指南。',
            ja: '組織のための効率的な調達システムの設定に関するステップバイステップガイド。',
            ko: '조직을 위한 효율적인 조달 시스템 설정에 대한 단계별 가이드.',
            fr: 'Guide étape par étape pour mettre en place un système d\'approvisionnement efficace pour votre organisation.',
            de: 'Schritt-für-Schritt-Anleitung zur Einrichtung eines effizienten Beschaffungssystems für Ihre Organisation.',
            es: 'Guía paso a paso para configurar un sistema de adquisiciones eficiente para su organización.',
            ar: 'دليل خطوة بخطوة لإعداد نظام مشتريات فعال لمؤسستك.'
        },
        
        // 文章操作按钮翻译
        'blog.action.share': {
            en: 'Share',
            zh: '分享',
            ja: '共有',
            ko: '공유',
            fr: 'Partager',
            de: 'Teilen',
            es: 'Compartir',
            ar: 'مشاركة'
        },
        'blog.action.bookmark': {
            en: 'Bookmark',
            zh: '收藏',
            ja: 'ブックマーク',
            ko: '북마크',
            fr: 'Marquer',
            de: 'Lesezeichen',
            es: 'Marcar',
            ar: 'إشارة مرجعية'
        },
        'blog.action.read_more': {
            en: 'Read More',
            zh: '阅读更多',
            ja: '続きを読む',
            ko: '더 읽기',
            fr: 'Lire Plus',
            de: 'Mehr Lesen',
            es: 'Leer Más',
            ar: 'اقرأ المزيد'
        },
        'blog.meta.read_time': {
            en: 'min read',
            zh: '分钟阅读',
            ja: '分で読める',
            ko: '분 읽기',
            fr: 'min de lecture',
            de: 'Min. Lesezeit',
            es: 'min de lectura',
            ar: 'دقيقة قراءة'
        },
        
        // 博客发布功能翻译
        'blog.publish.button': {
            en: 'Publish Article',
            zh: '发布文章',
            ja: '記事を投稿',
            ko: '기사 게시',
            fr: 'Publier un Article',
            de: 'Artikel Veröffentlichen',
            es: 'Publicar Artículo',
            ar: 'نشر مقال'
        },
        'blog.publish.title': {
            en: 'Publish New Article',
            zh: '发布新文章',
            ja: '新しい記事を投稿',
            ko: '새 기사 게시',
            fr: 'Publier un Nouvel Article',
            de: 'Neuen Artikel Veröffentlichen',
            es: 'Publicar Nuevo Artículo',
            ar: 'نشر مقال جديد'
        },
        'blog.publish.article_title': {
            en: 'Article Title',
            zh: '文章标题',
            ja: '記事のタイトル',
            ko: '기사 제목',
            fr: 'Titre de l\'Article',
            de: 'Artikel Titel',
            es: 'Título del Artículo',
            ar: 'عنوان المقال'
        },
        'blog.publish.category': {
            en: 'Category',
            zh: '分类',
            ja: 'カテゴリー',
            ko: '카테고리',
            fr: 'Catégorie',
            de: 'Kategorie',
            es: 'Categoría',
            ar: 'الفئة'
        },
        'blog.publish.select_category': {
            en: 'Select Category',
            zh: '选择分类',
            ja: 'カテゴリーを選択',
            ko: '카테고리 선택',
            fr: 'Sélectionner une Catégorie',
            de: 'Kategorie Auswählen',
            es: 'Seleccionar Categoría',
            ar: 'اختر الفئة'
        },
        'blog.publish.tags': {
            en: 'Tags',
            zh: '标签',
            ja: 'タグ',
            ko: '태그',
            fr: 'Étiquettes',
            de: 'Tags',
            es: 'Etiquetas',
            ar: 'العلامات'
        },
        'blog.publish.summary': {
            en: 'Article Summary',
            zh: '文章摘要',
            ja: '記事の要約',
            ko: '기사 요약',
            fr: 'Résumé de l\'Article',
            de: 'Artikel Zusammenfassung',
            es: 'Resumen del Artículo',
            ar: 'ملخص المقال'
        },
        'blog.publish.content': {
            en: 'Article Content',
            zh: '文章内容',
            ja: '記事の内容',
            ko: '기사 내용',
            fr: 'Contenu de l\'Article',
            de: 'Artikel Inhalt',
            es: 'Contenido del Artículo',
            ar: 'محتوى المقال'
        },
        'blog.publish.save_draft': {
            en: 'Save Draft',
            zh: '保存草稿',
            ja: '下書きを保存',
            ko: '초안 저장',
            fr: 'Sauvegarder le Brouillon',
            de: 'Entwurf Speichern',
            es: 'Guardar Borrador',
            ar: 'حفظ المسودة'
        },
        'blog.publish.preview': {
            en: 'Preview',
            zh: '预览',
            ja: 'プレビュー',
            ko: '미리보기',
            fr: 'Aperçu',
            de: 'Vorschau',
            es: 'Vista Previa',
            ar: 'معاينة'
        },
        'blog.publish.publish': {
            en: 'Publish Article',
            zh: '发布文章',
            ja: '記事を投稿',
            ko: '기사 게시',
            fr: 'Publier l\'Article',
            de: 'Artikel Veröffentlichen',
            es: 'Publicar Artículo',
            ar: 'نشر المقال'
        },
        'blog.publish.share_to': {
            en: 'Share to:',
            zh: '同时分享到：',
            ja: '共有先：',
            ko: '공유 대상：',
            fr: 'Partager sur：',
            de: 'Teilen auf：',
            es: 'Compartir en：',
            ar: 'مشاركة على：'
        },
        'blog.preview.title': {
            en: 'Article Preview',
            zh: '文章预览',
            ja: '記事のプレビュー',
            ko: '기사 미리보기',
            fr: 'Aperçu de l\'Article',
            de: 'Artikel Vorschau',
            es: 'Vista Previa del Artículo',
            ar: 'معاينة المقال'
        },
        
        // 特色文章翻译
        'blog.featured.title': {
            en: 'Featured Articles',
            zh: '精选文章',
            ja: '注目記事',
            ko: '주요 기사',
            fr: 'Articles en Vedette',
            de: 'Empfohlene Artikel',
            es: 'Artículos Destacados',
            ar: 'المقالات المميزة'
        },
        'blog.featured.ai_procurement.title': {
            en: 'AI-Powered Procurement Analytics',
            zh: 'AI驱动的采购分析',
            ja: 'AI駆動調達分析',
            ko: 'AI 기반 조달 분석',
            fr: 'Analyse d\'Approvisionnement Alimentée par IA',
            de: 'KI-gestützte Beschaffungsanalyse',
            es: 'Análisis de Adquisiciones con IA',
            ar: 'تحليل المشتريات بالذكاء الاصطناعي'
        },
        'blog.featured.ai_procurement.desc': {
            en: 'Discover how artificial intelligence is revolutionizing procurement decisions with real-time market analysis and predictive insights.',
            zh: '探索人工智能如何通过实时市场分析和预测洞察革命性地改变采购决策。',
            ja: '人工知能がリアルタイム市場分析と予測洞察で調達決定を革命的に変える方法を発見してください。',
            ko: '인공지능이 실시간 시장 분석과 예측 통찰력으로 조달 결정을 혁신하는 방법을 알아보세요.',
            fr: 'Découvrez comment l\'intelligence artificielle révolutionne les décisions d\'approvisionnement avec l\'analyse de marché en temps réel et les insights prédictifs.',
            de: 'Entdecken Sie, wie künstliche Intelligenz Beschaffungsentscheidungen mit Echtzeit-Marktanalyse und prädiktiven Einblicken revolutioniert.',
            es: 'Descubre cómo la inteligencia artificial está revolucionando las decisiones de adquisiciones con análisis de mercado en tiempo real e insights predictivos.',
            ar: 'اكتشف كيف يحدث الذكاء الاصطناعي ثورة في قرارات المشتريات من خلال تحليل السوق في الوقت الفعلي والرؤى التنبؤية.'
        },
        'blog.featured.market_trends.title': {
            en: 'Global Market Trends 2024',
            zh: '2024年全球市场趋势',
            ja: '2024年グローバル市場トレンド',
            ko: '2024년 글로벌 시장 동향',
            fr: 'Tendances du Marché Mondial 2024',
            de: 'Globale Markttrends 2024',
            es: 'Tendencias del Mercado Global 2024',
            ar: 'اتجاهات السوق العالمية 2024'
        },
        'blog.featured.market_trends.desc': {
            en: 'Comprehensive analysis of emerging market trends and their impact on procurement strategies worldwide.',
            zh: '对新兴市场趋势及其对全球采购策略影响的全面分析。',
            ja: '新興市場トレンドと世界的な調達戦略への影響の包括的分析。',
            ko: '신흥 시장 동향과 전 세계 조달 전략에 미치는 영향에 대한 종합적 분석.',
            fr: 'Analyse complète des tendances émergentes du marché et de leur impact sur les stratégies d\'approvisionnement mondiales.',
            de: 'Umfassende Analyse aufkommender Markttrends und ihrer Auswirkungen auf weltweite Beschaffungsstrategien.',
            es: 'Análisis integral de las tendencias emergentes del mercado y su impacto en las estrategias de adquisiciones a nivel mundial.',
            ar: 'تحليل شامل لاتجاهات السوق الناشئة وتأثيرها على استراتيجيات المشتريات في جميع أنحاء العالم.'
        },
        
        // Common
        'module.details': {
            en: 'Module Details',
            zh: '模块详情',
            ja: 'モジュール詳細',
            ko: '모듈 세부사항',
            fr: 'Détails du Module',
            de: 'Modul-Details',
            es: 'Detalles del Módulo',
            ar: 'تفاصيل الوحدة'
        },
        'common.no_data': {
            en: 'No Data Available',
            zh: '暂无数据',
            ja: 'データがありません',
            ko: '데이터가 없습니다',
            fr: 'Aucune Donnée Disponible',
            de: 'Keine Daten Verfügbar',
            es: 'No Hay Datos Disponibles',
            ar: 'لا توجد بيانات متاحة'
        },
        
        // Actions
        'action.back': {
            en: 'Back',
            zh: '返回',
            ja: '戻る',
            ko: '뒤로',
            fr: 'Retour',
            de: 'Zurück',
            es: 'Atrás',
            ar: 'رجوع'
        },
        'action.view_details': {
            en: 'View Details',
            zh: '查看详情',
            ja: '詳細を見る',
            ko: '상세 보기',
            fr: 'Voir les Détails',
            de: 'Details Anzeigen',
            es: 'Ver Detalles',
            ar: 'عرض التفاصيل'
        },
        'action.track': {
            en: 'Track',
            zh: '跟踪',
            ja: '追跡',
            ko: '추적',
            fr: 'Suivre',
            de: 'Verfolgen',
            es: 'Rastrear',
            ar: 'تتبع'
        },
        'action.view_contract': {
            en: 'View Contract',
            zh: '查看合同',
            ja: '契約を見る',
            ko: '계약 보기',
            fr: 'Voir le Contrat',
            de: 'Vertrag Anzeigen',
            es: 'Ver Contrato',
            ar: 'عرض العقد'
        },
        'action.detailed_tracking': {
            en: 'Detailed Tracking',
            zh: '详细跟踪',
            ja: '詳細追跡',
            ko: '상세 추적',
            fr: 'Suivi Détaillé',
            de: 'Detaillierte Verfolgung',
            es: 'Seguimiento Detallado',
            ar: 'تتبع مفصل'
        },
        'action.process': {
            en: 'Process',
            zh: '处理',
            ja: '処理',
            ko: '처리',
            fr: 'Traiter',
            de: 'Verarbeiten',
            es: 'Procesar',
            ar: 'معالجة'
        },
        
        // Status
        'status.active': {
            en: 'Active',
            zh: '活跃',
            ja: 'アクティブ',
            ko: '활성',
            fr: 'Actif',
            de: 'Aktiv',
            es: 'Activo',
            ar: 'نشط'
        },
        
        // Chart Labels
        'chart.spend.vps': {
            en: 'VPS Cloud Servers',
            zh: '云服务器VPS',
            ja: 'VPSクラウドサーバー',
            ko: 'VPS 클라우드 서버',
            fr: 'Serveurs Cloud VPS',
            de: 'VPS-Cloud-Server',
            es: 'Servidores Cloud VPS',
            ar: 'خوادم VPS السحابية'
        },
        'chart.spend.gpu': {
            en: 'GPU Computing Instances',
            zh: 'GPU计算实例',
            ja: 'GPUコンピューティングインスタンス',
            ko: 'GPU 컴퓨팅 인스턴스',
            fr: 'Instances de Calcul GPU',
            de: 'GPU-Computing-Instanzen',
            es: 'Instancias de Computación GPU',
            ar: 'مثيلات الحوسبة GPU'
        },
        'chart.spend.storage': {
            en: 'Storage Services',
            zh: '存储服务',
            ja: 'ストレージサービス',
            ko: '스토리지 서비스',
            fr: 'Services de Stockage',
            de: 'Speicherdienste',
            es: 'Servicios de Almacenamiento',
            ar: 'خدمات التخزين'
        },
        'chart.spend.network': {
            en: 'Network Bandwidth',
            zh: '网络带宽',
            ja: 'ネットワーク帯域幅',
            ko: '네트워크 대역폭',
            fr: 'Bande Passante Réseau',
            de: 'Netzwerk-Bandbreite',
            es: 'Ancho de Banda de Red',
            ar: 'عرض النطاق الترددي للشبكة'
        },
        'chart.spend.security': {
            en: 'Security Protection',
            zh: '安全防护',
            ja: 'セキュリティ保護',
            ko: '보안 보호',
            fr: 'Protection de Sécurité',
            de: 'Sicherheitsschutz',
            es: 'Protección de Seguridad',
            ar: 'الحماية الأمنية'
        },
        'chart.spend.monitoring': {
            en: 'Monitoring & Operations',
            zh: '监控运维',
            ja: '監視・運用',
            ko: '모니터링 및 운영',
            fr: 'Surveillance et Opérations',
            de: 'Überwachung und Betrieb',
            es: 'Monitoreo y Operaciones',
            ar: 'المراقبة والعمليات'
        },
        
        // Chart Status
        'chart.status.configuring': {
            en: 'Configuring',
            zh: '配置中',
            ja: '設定中',
            ko: '구성 중',
            fr: 'Configuration',
            de: 'Konfiguration',
            es: 'Configurando',
            ar: 'تكوين'
        },
        'chart.status.deploying': {
            en: 'Deploying',
            zh: '部署中',
            ja: '展開中',
            ko: '배포 중',
            fr: 'Déploiement',
            de: 'Bereitstellung',
            es: 'Desplegando',
            ar: 'نشر'
        },
        'chart.status.running': {
            en: 'Running',
            zh: '运行中',
            ja: '実行中',
            ko: '실행 중',
            fr: 'En Cours',
            de: 'Läuft',
            es: 'Ejecutando',
            ar: 'تشغيل'
        },
        'chart.status.delivered': {
            en: 'Delivered',
            zh: '已交付',
            ja: '配達済み',
            ko: '배송됨',
            fr: 'Livré',
            de: 'Geliefert',
            es: 'Entregado',
            ar: 'تم التسليم'
        },
        'chart.status.paused': {
            en: 'Paused',
            zh: '已暂停',
            ja: '一時停止',
            ko: '일시정지',
            fr: 'En Pause',
            de: 'Pausiert',
            es: 'Pausado',
            ar: 'متوقف مؤقتاً'
        },
        'chart.status.vps_instances': {
            en: 'VPS Instances',
            zh: 'VPS实例数量',
            ja: 'VPSインスタンス数',
            ko: 'VPS 인스턴스',
            fr: 'Instances VPS',
            de: 'VPS-Instanzen',
            es: 'Instancias VPS',
            ar: 'مثيلات VPS'
        },
        'chart.status.instances': {
            en: 'instances',
            zh: '个实例',
            ja: 'インスタンス',
            ko: '인스턴스',
            fr: 'instances',
            de: 'Instanzen',
            es: 'instancias',
            ar: 'مثيلات'
        },
        
        // Chart Months
        'chart.month.jan': {
            en: 'Jan',
            zh: '1月',
            ja: '1月',
            ko: '1월',
            fr: 'Jan',
            de: 'Jan',
            es: 'Ene',
            ar: 'ينا'
        },
        'chart.month.feb': {
            en: 'Feb',
            zh: '2月',
            ja: '2月',
            ko: '2월',
            fr: 'Fév',
            de: 'Feb',
            es: 'Feb',
            ar: 'فبر'
        },
        'chart.month.mar': {
            en: 'Mar',
            zh: '3月',
            ja: '3月',
            ko: '3월',
            fr: 'Mar',
            de: 'Mär',
            es: 'Mar',
            ar: 'مار'
        },
        'chart.month.apr': {
            en: 'Apr',
            zh: '4月',
            ja: '4月',
            ko: '4월',
            fr: 'Avr',
            de: 'Apr',
            es: 'Abr',
            ar: 'أبر'
        },
        'chart.month.may': {
            en: 'May',
            zh: '5月',
            ja: '5月',
            ko: '5월',
            fr: 'Mai',
            de: 'Mai',
            es: 'May',
            ar: 'ماي'
        },
        'chart.month.jun': {
            en: 'Jun',
            zh: '6月',
            ja: '6月',
            ko: '6월',
            fr: 'Juin',
            de: 'Jun',
            es: 'Jun',
            ar: 'يون'
        },
        'chart.month.jul': {
            en: 'Jul',
            zh: '7月',
            ja: '7月',
            ko: '7월',
            fr: 'Juil',
            de: 'Jul',
            es: 'Jul',
            ar: 'يول'
        },
        'chart.month.aug': {
            en: 'Aug',
            zh: '8月',
            ja: '8月',
            ko: '8월',
            fr: 'Août',
            de: 'Aug',
            es: 'Ago',
            ar: 'أغس'
        },
        
        // Chart Trend
        'chart.trend.vps_expenditure': {
            en: 'VPS Smart Procurement System Expenditure (10K)',
            zh: 'VPS采购支出 (万元)',
            ja: 'VPS調達支出 (万元)',
            ko: 'VPS 조달 지출 (만원)',
            fr: 'Dépenses d\'Approvisionnement VPS (10K)',
            de: 'VPS-Beschaffungsausgaben (10K)',
            es: 'Gasto de Adquisiciones VPS (10K)',
            ar: 'مصاريف شراء VPS (10K)'
        },
        'chart.trend.cost_savings': {
            en: 'Cost Savings (10K)',
            zh: '成本节约 (万元)',
            ja: 'コスト削減 (万元)',
            ko: '비용 절약 (만원)',
            fr: 'Économies de Coûts (10K)',
            de: 'Kosteneinsparungen (10K)',
            es: 'Ahorros de Costos (10K)',
            ar: 'توفير التكاليف (10K)'
        },
        
        // Chart Units
        'chart.unit.ten_thousand': {
            en: 'K',
            zh: '万',
            ja: '万',
            ko: '만',
            fr: 'K',
            de: 'K',
            es: 'K',
            ar: 'K'
        },
        'chart.unit.ten_thousand_yuan': {
            en: 'K Yuan',
            zh: '万元',
            ja: '万元',
            ko: '만원',
            fr: 'K Yuan',
            de: 'K Yuan',
            es: 'K Yuan',
            ar: 'K يوان'
        },
        
        // Chart Performance
        'chart.performance.delivery': {
            en: 'Delivery Timeliness',
            zh: '交付及时性',
            ja: '納期遵守',
            ko: '배송 적시성',
            fr: 'Ponctualité de Livraison',
            de: 'Lieferpünktlichkeit',
            es: 'Puntualidad de Entrega',
            ar: 'الالتزام بمواعيد التسليم'
        },
        'chart.performance.quality': {
            en: 'Product Quality',
            zh: '产品质量',
            ja: '製品品質',
            ko: '제품 품질',
            fr: 'Qualité du Produit',
            de: 'Produktqualität',
            es: 'Calidad del Producto',
            ar: 'جودة المنتج'
        },
        'chart.performance.price': {
            en: 'Price Competitiveness',
            zh: '价格竞争力',
            ja: '価格競争力',
            ko: '가격 경쟁력',
            fr: 'Compétitivité des Prix',
            de: 'Preiswettbewerbsfähigkeit',
            es: 'Competitividad de Precios',
            ar: 'القدرة التنافسية للسعر'
        },
        'chart.performance.service': {
            en: 'Service Response',
            zh: '服务响应',
            ja: 'サービス対応',
            ko: '서비스 응답',
            fr: 'Réponse au Service',
            de: 'Serviceantwort',
            es: 'Respuesta del Servicio',
            ar: 'استجابة الخدمة'
        },
        'chart.performance.compliance': {
            en: 'Compliance',
            zh: '合规性',
            ja: 'コンプライアンス',
            ko: '준수',
            fr: 'Conformité',
            de: 'Compliance',
            es: 'Cumplimiento',
            ar: 'الامتثال'
        },
        'chart.performance.innovation': {
            en: 'Innovation',
            zh: '创新能力',
            ja: 'イノベーション',
            ko: '혁신',
            fr: 'Innovation',
            de: 'Innovation',
            es: 'Innovación',
            ar: 'الابتكار'
        },
        'chart.performance.excellent_supplier': {
            en: 'Excellent Supplier',
            zh: '优秀供应商',
            ja: '優秀サプライヤー',
            ko: '우수 공급업체',
            fr: 'Fournisseur Excellent',
            de: 'Hervorragender Lieferant',
            es: 'Proveedor Excelente',
            ar: 'مورد ممتاز'
        },
        'chart.performance.average_level': {
            en: 'Average Level',
            zh: '平均水平',
            ja: '平均レベル',
            ko: '평균 수준',
            fr: 'Niveau Moyen',
            de: 'Durchschnittsniveau',
            es: 'Nivel Promedio',
            ar: 'المستوى المتوسط'
        },
        
        // Chart Inventory
        'chart.inventory.normal': {
            en: 'Normal Operation',
            zh: '运行正常',
            ja: '正常稼働',
            ko: '정상 운영',
            fr: 'Fonctionnement Normal',
            de: 'Normaler Betrieb',
            es: 'Operación Normal',
            ar: 'تشغيل طبيعي'
        },
        'chart.inventory.warning': {
            en: 'Resource Warning',
            zh: '资源预警',
            ja: 'リソース警告',
            ko: '리소스 경고',
            fr: 'Avertissement de Ressources',
            de: 'Ressourcenwarnung',
            es: 'Advertencia de Recursos',
            ar: 'تحذير الموارد'
        },
        'chart.inventory.alert': {
            en: 'Performance Alert',
            zh: '性能告警',
            ja: 'パフォーマンスアラート',
            ko: '성능 알림',
            fr: 'Alerte de Performance',
            de: 'Leistungsalarm',
            es: 'Alerta de Rendimiento',
            ar: 'تنبيه الأداء'
        },
        'chart.inventory.maintenance': {
            en: 'Under Maintenance',
            zh: '维护中',
            ja: 'メンテナンス中',
            ko: '유지보수 중',
            fr: 'En Maintenance',
            de: 'In Wartung',
            es: 'En Mantenimiento',
            ar: 'قيد الصيانة'
        },
        'chart.inventory.pending': {
            en: 'Pending Deployment',
            zh: '待部署',
            ja: '展開待ち',
            ko: '배포 대기',
            fr: 'En Attente de Déploiement',
            de: 'Bereitstellung Ausstehend',
            es: 'Pendiente de Despliegue',
            ar: 'في انتظار النشر'
        },
        
        // Chart Savings
        'chart.savings.target': {
            en: 'Target Savings',
            zh: '目标节约',
            ja: '目標削減',
            ko: '목표 절약',
            fr: 'Économies Cibles',
            de: 'Zieleinsparungen',
            es: 'Ahorros Objetivo',
            ar: 'التوفير المستهدف'
        },
        'chart.savings.actual': {
            en: 'Actual Savings',
            zh: '实际节约',
            ja: '実際削減',
            ko: '실제 절약',
            fr: 'Économies Réelles',
            de: 'Tatsächliche Einsparungen',
            es: 'Ahorros Reales',
            ar: 'التوفير الفعلي'
        },
        
        // Homepage Translations
        'homepage.title': {
            en: 'VPS Smart Procurement System',
            zh: 'VPS智慧采购系统',
            ja: 'VPSスマート調達システム',
            ko: 'VPS 스마트 조달 시스템',
            fr: 'Système d\'Approvisionnement Intelligent VPS',
            de: 'VPS Smart Beschaffungssystem',
            es: 'Sistema de Adquisiciones Inteligentes VPS',
            ar: 'نظام الشراء الذكي VPS'
        },
        'homepage.hero.title1': {
            en: 'More Than a Process,',
            zh: '不仅仅是流程，',
            ja: 'プロセス以上の価値、',
            ko: '단순한 프로세스가 아닌,',
            fr: 'Plus qu\'un processus,',
            de: 'Mehr als ein Prozess,',
            es: 'Más que un proceso,',
            ar: 'أكثر من مجرد عملية،'
        },
        'homepage.hero.title2': {
            en: 'Your Strategic AI Co-pilot',
            zh: '您的战略AI副驾驶',
            ja: 'あなたの戦略的AIコパイロット',
            ko: '당신의 전략적 AI 코파일럿',
            fr: 'Votre Co-pilote IA Stratégique',
            de: 'Ihr strategischer KI-Copilot',
            es: 'Su Copiloto de IA Estratégico',
            ar: 'مساعدك الاستراتيجي بالذكاء الاصطناعي'
        },
        'homepage.hero.subtitle': {
            en: 'We elevate procurement from an operational function to a strategic value-creation engine, powered by a full-stack AI platform and end-to-end digitalization.',
            zh: '我们将采购从运营功能提升为战略价值创造引擎，由全栈AI平台和端到端数字化驱动。',
            ja: '私たちは調達を運用機能から戦略的価値創造エンジンに昇格させ、フルスタックAIプラットフォームとエンドツーエンドのデジタル化によって支えられています。',
            ko: '우리는 풀스택 AI 플랫폼과 엔드투엔드 디지털화로 구동되는 조달을 운영 기능에서 전략적 가치 창출 엔진으로 승격시킵니다.',
            fr: 'Nous élevons l\'approvisionnement d\'une fonction opérationnelle à un moteur de création de valeur stratégique, alimenté par une plateforme IA complète et une digitalisation de bout en bout.',
            de: 'Wir heben die Beschaffung von einer operativen Funktion zu einer strategischen Wertschöpfungsmaschine an, angetrieben von einer Full-Stack-KI-Plattform und End-to-End-Digitalisierung.',
            es: 'Elevamos las adquisiciones de una función operativa a un motor de creación de valor estratégico, impulsado por una plataforma de IA completa y digitalización de extremo a extremo.',
            ar: 'نرفع الشراء من وظيفة تشغيلية إلى محرك إنشاء قيمة استراتيجية، مدعوم بمنصة ذكاء اصطناعي شاملة ورقمنة شاملة.'
        },
        'homepage.cta.explore': {
            en: 'Explore Core Advantages',
            zh: '探索核心优势',
            ja: 'コアアドバンテージを探る',
            ko: '핵심 장점 탐색',
            fr: 'Explorer les Avantages Principaux',
            de: 'Kernvorteile Erkunden',
            es: 'Explorar Ventajas Principales',
            ar: 'استكشاف المزايا الأساسية'
        },
        'homepage.cta.demo': {
            en: 'Request a Demo',
            zh: '申请演示',
            ja: 'デモをリクエスト',
            ko: '데모 요청',
            fr: 'Demander une Démo',
            de: 'Demo Anfordern',
            es: 'Solicitar una Demo',
            ar: 'طلب عرض توضيحي'
        },
        'homepage.features.title': {
            en: 'Why Choose Us?',
            zh: '为什么选择我们？',
            ja: 'なぜ私たちを選ぶのか？',
            ko: '왜 우리를 선택해야 할까요?',
            fr: 'Pourquoi Nous Choisir ?',
            de: 'Warum Uns Wählen?',
            es: '¿Por Qué Elegirnos?',
            ar: 'لماذا تختارنا؟'
        },
        'homepage.features.subtitle': {
            en: 'We don\'t just build a system; we build an intelligent supply chain brain for your future. As you scroll, discover the five pillars of our platform.',
            zh: '我们不仅仅构建系统；我们为您的未来构建智能供应链大脑。滚动页面，发现我们平台的五大支柱。',
            ja: '私たちは単にシステムを構築するのではなく、あなたの未来のためのインテリジェントなサプライチェーンの頭脳を構築します。スクロールして、私たちのプラットフォームの5つの柱を発見してください。',
            ko: '우리는 단순히 시스템을 구축하는 것이 아니라 미래를 위한 지능형 공급망 두뇌를 구축합니다. 스크롤하여 플랫폼의 다섯 가지 기둥을 발견하세요.',
            fr: 'Nous ne construisons pas seulement un système ; nous construisons un cerveau de chaîne d\'approvisionnement intelligent pour votre avenir. En faisant défiler, découvrez les cinq piliers de notre plateforme.',
            de: 'Wir bauen nicht nur ein System; wir bauen ein intelligentes Lieferketten-Gehirn für Ihre Zukunft. Beim Scrollen entdecken Sie die fünf Säulen unserer Plattform.',
            es: 'No solo construimos un sistema; construimos un cerebro inteligente de cadena de suministro para su futuro. Al desplazarse, descubra los cinco pilares de nuestra plataforma.',
            ar: 'نحن لا نبني نظاماً فحسب؛ بل نبني دماغ سلسلة توريد ذكية لمستقبلك. أثناء التمرير، اكتشف الأعمدة الخمسة لمنصتنا.'
        },
        'homepage.feature1.title': {
            en: '1. Intelligent Command Center',
            zh: '1. 智能指挥中心',
            ja: '1. インテリジェント・コマンドセンター',
            ko: '1. 지능형 명령 센터',
            fr: '1. Centre de Commande Intelligent',
            de: '1. Intelligentes Kommandozentrum',
            es: '1. Centro de Comando Inteligente',
            ar: '1. مركز القيادة الذكي'
        },
        'homepage.feature1.desc': {
            en: 'Not a static dashboard, but a dynamic decision navigation system. It synthesizes all AI insights into clear, actionable recommendations, ensuring every procurement decision is strategically sound.',
            zh: '不是静态仪表板，而是动态决策导航系统。它将所有AI洞察综合为清晰、可操作的建议，确保每个采购决策都具有战略意义。',
            ja: '静的なダッシュボードではなく、動的な意思決定ナビゲーションシステムです。すべてのAIインサイトを明確で実行可能な推奨事項に統合し、すべての調達決定が戦略的に健全であることを保証します。',
            ko: '정적 대시보드가 아닌 동적 의사결정 내비게이션 시스템입니다. 모든 AI 인사이트를 명확하고 실행 가능한 권장사항으로 종합하여 모든 조달 결정이 전략적으로 건전하도록 보장합니다.',
            fr: 'Pas un tableau de bord statique, mais un système de navigation de décision dynamique. Il synthétise toutes les informations IA en recommandations claires et exploitables, garantissant que chaque décision d\'approvisionnement est stratégiquement solide.',
            de: 'Kein statisches Dashboard, sondern ein dynamisches Entscheidungsnavigationssystem. Es synthetisiert alle KI-Erkenntnisse zu klaren, umsetzbaren Empfehlungen und stellt sicher, dass jede Beschaffungsentscheidung strategisch fundiert ist.',
            es: 'No es un panel estático, sino un sistema dinámico de navegación de decisiones. Sintetiza todas las perspectivas de IA en recomendaciones claras y accionables, asegurando que cada decisión de adquisición sea estratégicamente sólida.',
            ar: 'ليس لوحة معلومات ثابتة، بل نظام ملاحة قرارات ديناميكي. يجمع جميع رؤى الذكاء الاصطناعي في توصيات واضحة وقابلة للتنفيذ، مما يضمن أن كل قرار شراء سليم استراتيجياً.'
        },
        'homepage.feature2.title': {
            en: '2. Predictive Intelligence Engine',
            zh: '2. 预测智能引擎',
            ja: '2. 予測インテリジェンスエンジン',
            ko: '2. 예측 지능 엔진',
            fr: '2. Moteur d\'Intelligence Prédictive',
            de: '2. Prädiktive Intelligenz-Engine',
            es: '2. Motor de Inteligencia Predictiva',
            ar: '2. محرك الذكاء التنبؤي'
        },
        'homepage.feature2.desc': {
            en: 'Beyond forecasting demand, we predict market shifts, supplier risks, and cost fluctuations. Our AI doesn\'t just react to change—it anticipates it, giving you a competitive edge.',
            zh: '超越需求预测，我们预测市场变化、供应商风险和成本波动。我们的AI不仅仅对变化做出反应——它预测变化，为您提供竞争优势。',
            ja: '需要予測を超えて、市場の変化、サプライヤーのリスク、コストの変動を予測します。私たちのAIは変化に反応するだけでなく、それを予測し、競争優位性を提供します。',
            ko: '수요 예측을 넘어 시장 변화, 공급업체 위험, 비용 변동을 예측합니다. 우리의 AI는 변화에 반응하는 것이 아니라 예측하여 경쟁 우위를 제공합니다.',
            fr: 'Au-delà de la prévision de la demande, nous prédisons les changements du marché, les risques fournisseurs et les fluctuations de coûts. Notre IA ne fait pas que réagir au changement—elle l\'anticipe, vous donnant un avantage concurrentiel.',
            de: 'Über die Nachfrageprognose hinaus prognostizieren wir Marktveränderungen, Lieferantenrisiken und Kostenschwankungen. Unsere KI reagiert nicht nur auf Veränderungen—sie antizipiert sie und verschafft Ihnen einen Wettbewerbsvorteil.',
            es: 'Más allá de pronosticar la demanda, predecimos cambios del mercado, riesgos de proveedores y fluctuaciones de costos. Nuestra IA no solo reacciona al cambio—lo anticipa, dándole una ventaja competitiva.',
            ar: 'ما وراء توقع الطلب، نتنبأ بتغيرات السوق ومخاطر الموردين وتقلبات التكاليف. ذكاؤنا الاصطناعي لا يتفاعل مع التغيير فحسب—بل يتوقعه، مما يمنحك ميزة تنافسية.'
        },
        'homepage.feature3.title': {
            en: '3. Autonomous Optimization Network',
            zh: '3. 自主优化网络',
            ja: '3. 自律最適化ネットワーク',
            ko: '3. 자율 최적화 네트워크',
            fr: '3. Réseau d\'Optimisation Autonome',
            de: '3. Autonomes Optimierungsnetzwerk',
            es: '3. Red de Optimización Autónoma',
            ar: '3. شبكة التحسين المستقلة'
        },
        'homepage.feature3.desc': {
            en: 'Self-learning algorithms continuously optimize your supply chain. From route planning to inventory levels, the system evolves and improves without manual intervention.',
            zh: '自学习算法持续优化您的供应链。从路线规划到库存水平，系统在无需人工干预的情况下不断演进和改进。',
            ja: '自己学習アルゴリズムがサプライチェーンを継続的に最適化します。ルート計画から在庫レベルまで、システムは手動介入なしに進化し改善します。',
            ko: '자기 학습 알고리즘이 공급망을 지속적으로 최적화합니다. 경로 계획부터 재고 수준까지 시스템은 수동 개입 없이 진화하고 개선됩니다.',
            fr: 'Les algorithmes d\'auto-apprentissage optimisent continuellement votre chaîne d\'approvisionnement. De la planification des itinéraires aux niveaux de stock, le système évolue et s\'améliore sans intervention manuelle.',
            de: 'Selbstlernende Algorithmen optimieren kontinuierlich Ihre Lieferkette. Von der Routenplanung bis zu den Lagerbeständen entwickelt und verbessert sich das System ohne manuelle Eingriffe.',
            es: 'Los algoritmos de autoaprendizaje optimizan continuamente su cadena de suministro. Desde la planificación de rutas hasta los niveles de inventario, el sistema evoluciona y mejora sin intervención manual.',
            ar: 'خوارزميات التعلم الذاتي تحسن سلسلة التوريد باستمرار. من تخطيط المسارات إلى مستويات المخزون، يتطور النظام ويتحسن دون تدخل يدوي.'
        },
        'homepage.feature4.title': {
            en: '4. Collaborative Ecosystem Platform',
            zh: '4. 协作生态系统平台',
            ja: '4. 協働エコシステムプラットフォーム',
            ko: '4. 협업 생태계 플랫폼',
            fr: '4. Plateforme d\'Écosystème Collaboratif',
            de: '4. Kollaborative Ökosystem-Plattform',
            es: '4. Plataforma de Ecosistema Colaborativo',
            ar: '4. منصة النظام البيئي التعاوني'
        },
        'homepage.feature4.desc': {
            en: 'Connect seamlessly with suppliers, partners, and stakeholders. Real-time collaboration tools ensure everyone is aligned, from initial planning to final delivery.',
            zh: '与供应商、合作伙伴和利益相关者无缝连接。实时协作工具确保从初始规划到最终交付的每个人都保持一致。',
            ja: 'サプライヤー、パートナー、ステークホルダーとシームレスに接続します。リアルタイムコラボレーションツールにより、初期計画から最終配送まで全員が連携します。',
            ko: '공급업체, 파트너, 이해관계자와 원활하게 연결됩니다. 실시간 협업 도구는 초기 계획부터 최종 배송까지 모든 사람이 일치하도록 보장합니다.',
            fr: 'Connectez-vous de manière transparente avec les fournisseurs, partenaires et parties prenantes. Les outils de collaboration en temps réel garantissent que tout le monde est aligné, de la planification initiale à la livraison finale.',
            de: 'Nahtlose Verbindung mit Lieferanten, Partnern und Stakeholdern. Echtzeit-Kollaborationstools stellen sicher, dass alle von der ersten Planung bis zur finalen Lieferung aufeinander abgestimmt sind.',
            es: 'Conéctese sin problemas con proveedores, socios y partes interesadas. Las herramientas de colaboración en tiempo real aseguran que todos estén alineados, desde la planificación inicial hasta la entrega final.',
            ar: 'اتصل بسلاسة مع الموردين والشركاء وأصحاب المصلحة. أدوات التعاون في الوقت الفعلي تضمن توافق الجميع، من التخطيط الأولي إلى التسليم النهائي.'
        },
        'homepage.feature5.title': {
            en: '5. Strategic Value Amplifier',
            zh: '5. 战略价值放大器',
            ja: '5. 戦略的価値増幅器',
            ko: '5. 전략적 가치 증폭기',
            fr: '5. Amplificateur de Valeur Stratégique',
            de: '5. Strategischer Wertverstärker',
            es: '5. Amplificador de Valor Estratégico',
            ar: '5. مضخم القيمة الاستراتيجية'
        },
        'homepage.feature5.desc': {
            en: 'Transform procurement from a cost center to a profit driver. Our platform identifies value creation opportunities, negotiates better terms, and drives innovation through strategic partnerships.',
            zh: '将采购从成本中心转变为利润驱动器。我们的平台识别价值创造机会，谈判更好的条款，并通过战略合作伙伴关系推动创新。',
            ja: '調達をコストセンターから利益ドライバーに変革します。私たちのプラットフォームは価値創造の機会を特定し、より良い条件を交渉し、戦略的パートナーシップを通じてイノベーションを推進します。',
            ko: '조달을 비용 센터에서 수익 동력으로 전환합니다. 우리 플랫폼은 가치 창출 기회를 식별하고, 더 나은 조건을 협상하며, 전략적 파트너십을 통해 혁신을 추진합니다.',
            fr: 'Transformez l\'approvisionnement d\'un centre de coûts en moteur de profit. Notre plateforme identifie les opportunités de création de valeur, négocie de meilleures conditions et stimule l\'innovation grâce à des partenariats stratégiques.',
            de: 'Verwandeln Sie die Beschaffung von einem Kostenzentrum in einen Gewinnmotor. Unsere Plattform identifiziert Wertschöpfungsmöglichkeiten, verhandelt bessere Bedingungen und treibt Innovation durch strategische Partnerschaften voran.',
            es: 'Transforme las adquisiciones de un centro de costos a un impulsor de ganancias. Nuestra plataforma identifica oportunidades de creación de valor, negocia mejores términos e impulsa la innovación a través de asociaciones estratégicas.',
            ar: 'حول الشراء من مركز تكلفة إلى محرك ربح. منصتنا تحدد فرص خلق القيمة، وتتفاوض على شروط أفضل، وتدفع الابتكار من خلال الشراكات الاستراتيجية.'
        },
        'homepage.stats.title': {
            en: 'Proven Results',
            zh: '验证结果',
            ja: '実証された結果',
            ko: '입증된 결과',
            fr: 'Résultats Prouvés',
            de: 'Bewährte Ergebnisse',
            es: 'Resultados Comprobados',
            ar: 'نتائج مثبتة'
        },
        'homepage.stats.cost_reduction': {
            en: 'Average Cost Reduction',
            zh: '平均成本降低',
            ja: '平均コスト削減',
            ko: '평균 비용 절감',
            fr: 'Réduction Moyenne des Coûts',
            de: 'Durchschnittliche Kostensenkung',
            es: 'Reducción Promedio de Costos',
            ar: 'متوسط تقليل التكاليف'
        },
        'homepage.stats.efficiency_gain': {
            en: 'Process Efficiency Gain',
            zh: '流程效率提升',
            ja: 'プロセス効率向上',
            ko: '프로세스 효율성 향상',
            fr: 'Gain d\'Efficacité des Processus',
            de: 'Prozesseffizienzsteigerung',
            es: 'Ganancia de Eficiencia de Procesos',
            ar: 'مكاسب كفاءة العمليات'
        },
        'homepage.stats.decision_speed': {
            en: 'Faster Decision Making',
            zh: '决策速度提升',
            ja: '意思決定の高速化',
            ko: '의사결정 속도 향상',
            fr: 'Prise de Décision Plus Rapide',
            de: 'Schnellere Entscheidungsfindung',
            es: 'Toma de Decisiones Más Rápida',
            ar: 'اتخاذ قرارات أسرع'
        },
        'homepage.stats.satisfaction': {
            en: 'Client Satisfaction Rate',
            zh: '客户满意度',
            ja: '顧客満足度',
            ko: '고객 만족도',
            fr: 'Taux de Satisfaction Client',
            de: 'Kundenzufriedenheitsrate',
            es: 'Tasa de Satisfacción del Cliente',
            ar: 'معدل رضا العملاء'
        },
        'homepage.cta.title': {
            en: 'Ready to Transform Your Procurement?',
            zh: '准备好转变您的采购了吗？',
            ja: '調達を変革する準備はできていますか？',
            ko: '조달을 혁신할 준비가 되셨나요?',
            fr: 'Prêt à Transformer Votre Approvisionnement ?',
            de: 'Bereit, Ihre Beschaffung zu Transformieren?',
            es: '¿Listo para Transformar sus Adquisiciones?',
            ar: 'هل أنت مستعد لتحويل مشترياتك؟'
        },
        'homepage.cta.subtitle': {
            en: 'Join leading companies who have already revolutionized their supply chain with our AI-powered platform.',
            zh: '加入已经通过我们的AI驱动平台革命性改变供应链的领先公司。',
            ja: '私たちのAI駆動プラットフォームでサプライチェーンを既に革命的に変革した主要企業に参加してください。',
            ko: 'AI 기반 플랫폼으로 이미 공급망을 혁신한 선도 기업들과 함께하세요.',
            fr: 'Rejoignez les entreprises leaders qui ont déjà révolutionné leur chaîne d\'approvisionnement avec notre plateforme alimentée par l\'IA.',
            de: 'Schließen Sie sich führenden Unternehmen an, die ihre Lieferkette bereits mit unserer KI-gestützten Plattform revolutioniert haben.',
            es: 'Únase a las empresas líderes que ya han revolucionado su cadena de suministro con nuestra plataforma impulsada por IA.',
            ar: 'انضم إلى الشركات الرائدة التي ثورت بالفعل سلسلة التوريد الخاصة بها باستخدام منصتنا المدعومة بالذكاء الاصطناعي.'
        },
        'homepage.footer.company': {
            en: 'Company',
            zh: '公司',
            ja: '会社',
            ko: '회사',
            fr: 'Entreprise',
            de: 'Unternehmen',
            es: 'Empresa',
            ar: 'الشركة'
        },
        'homepage.footer.about': {
            en: 'About Us',
            zh: '关于我们',
            ja: '私たちについて',
            ko: '회사 소개',
            fr: 'À Propos',
            de: 'Über Uns',
            es: 'Acerca de Nosotros',
            ar: 'معلومات عنا'
        },
        'homepage.footer.careers': {
            en: 'Careers',
            zh: '职业机会',
            ja: 'キャリア',
            ko: '채용',
            fr: 'Carrières',
            de: 'Karriere',
            es: 'Carreras',
            ar: 'الوظائف'
        },
        'homepage.footer.contact': {
            en: 'Contact',
            zh: '联系我们',
            ja: 'お問い合わせ',
            ko: '연락처',
            fr: 'Contact',
            de: 'Kontakt',
            es: 'Contacto',
            ar: 'اتصل بنا'
        },
        'homepage.footer.solutions': {
            en: 'Solutions',
            zh: '解决方案',
            ja: 'ソリューション',
            ko: '솔루션',
            fr: 'Solutions',
            de: 'Lösungen',
            es: 'Soluciones',
            ar: 'الحلول'
        },
        'homepage.footer.platform': {
            en: 'Platform',
            zh: '平台',
            ja: 'プラットフォーム',
            ko: '플랫폼',
            fr: 'Plateforme',
            de: 'Plattform',
            es: 'Plataforma',
            ar: 'المنصة'
        },
        'homepage.footer.integrations': {
            en: 'Integrations',
            zh: '集成',
            ja: '統合',
            ko: '통합',
            fr: 'Intégrations',
            de: 'Integrationen',
            es: 'Integraciones',
            ar: 'التكامل'
        },
        'homepage.footer.api': {
            en: 'API',
            zh: 'API',
            ja: 'API',
            ko: 'API',
            fr: 'API',
            de: 'API',
            es: 'API',
            ar: 'API'
        },
        'homepage.footer.resources': {
            en: 'Resources',
            zh: '资源',
            ja: 'リソース',
            ko: '리소스',
            fr: 'Ressources',
            de: 'Ressourcen',
            es: 'Recursos',
            ar: 'الموارد'
        },
        'homepage.footer.documentation': {
            en: 'Documentation',
            zh: '文档',
            ja: 'ドキュメント',
            ko: '문서',
            fr: 'Documentation',
            de: 'Dokumentation',
            es: 'Documentación',
            ar: 'التوثيق'
        },
        'homepage.footer.blog': {
            en: 'Blog',
            zh: '博客',
            ja: 'ブログ',
            ko: '블로그',
            fr: 'Blog',
            de: 'Blog',
            es: 'Blog',
            ar: 'المدونة'
        },
        'homepage.footer.support': {
            en: 'Support',
            zh: '支持',
            ja: 'サポート',
            ko: '지원',
            fr: 'Support',
            de: 'Support',
            es: 'Soporte',
            ar: 'الدعم'
        },
        'homepage.footer.copyright': {
            en: '© 2024 VPS Smart Procurement. All rights reserved.',
            zh: '© 2024 VPS智慧采购。保留所有权利。',
            ja: '© 2024 VPSスマート調達。全著作権所有。',
            ko: '© 2024 VPS 스마트 조달. 모든 권리 보유.',
            fr: '© 2024 VPS Smart Procurement. Tous droits réservés.',
            de: '© 2024 VPS Smart Beschaffung. Alle Rechte vorbehalten.',
            es: '© 2024 VPS Smart Procurement. Todos los derechos reservados.',
            ar: '© 2024 VPS Smart Procurement. جميع الحقوق محفوظة.'
        },
        
        // Table Headers
        'table.action': {
            en: 'Action',
            zh: '操作',
            ja: '操作',
            ko: '작업',
            fr: 'Action',
            de: 'Aktion',
            es: 'Acción',
            ar: 'إجراء'
        },
        'table.supplier.id': {
            en: 'Supplier ID',
            zh: '供应商ID',
            ja: 'サプライヤーID',
            ko: '공급업체 ID',
            fr: 'ID Fournisseur',
            de: 'Lieferanten-ID',
            es: 'ID Proveedor',
            ar: 'معرف المورد'
        },
        'table.supplier.name': {
            en: 'Supplier Name',
            zh: '供应商名称',
            ja: 'サプライヤー名',
            ko: '공급업체명',
            fr: 'Nom du Fournisseur',
            de: 'Lieferantenname',
            es: 'Nombre del Proveedor',
            ar: 'اسم المورد'
        },
        'table.supplier.category': {
            en: 'Category',
            zh: '类别',
            ja: 'カテゴリ',
            ko: '카테고리',
            fr: 'Catégorie',
            de: 'Kategorie',
            es: 'Categoría',
            ar: 'الفئة'
        },
        'table.supplier.rating': {
            en: 'Rating',
            zh: '评级',
            ja: '評価',
            ko: '평가',
            fr: 'Évaluation',
            de: 'Bewertung',
            es: 'Calificación',
            ar: 'التقييم'
        },
        'table.supplier.status': {
            en: 'Status',
            zh: '状态',
            ja: 'ステータス',
            ko: '상태',
            fr: 'Statut',
            de: 'Status',
            es: 'Estado',
            ar: 'الحالة'
        },
        'table.supplier.contact': {
            en: 'Contact',
            zh: '联系人',
            ja: '連絡先',
            ko: '연락처',
            fr: 'Contact',
            de: 'Kontakt',
            es: 'Contacto',
            ar: 'جهة الاتصال'
        },
        'table.supplier.phone': {
            en: 'Phone',
            zh: '电话',
            ja: '電話',
            ko: '전화',
            fr: 'Téléphone',
            de: 'Telefon',
            es: 'Teléfono',
            ar: 'الهاتف'
        },
        'table.supplier.email': {
            en: 'Email',
            zh: '邮箱',
            ja: 'メール',
            ko: '이메일',
            fr: 'Email',
            de: 'E-Mail',
            es: 'Correo',
            ar: 'البريد الإلكتروني'
        },
        'table.supplier.orders': {
            en: 'Orders',
            zh: '订单数',
            ja: '注文数',
            ko: '주문 수',
            fr: 'Commandes',
            de: 'Bestellungen',
            es: 'Pedidos',
            ar: 'الطلبات'
        },
        'table.supplier.amount': {
            en: 'Amount',
            zh: '交易金额',
            ja: '取引金額',
            ko: '거래 금액',
            fr: 'Montant',
            de: 'Betrag',
            es: 'Monto',
            ar: 'المبلغ'
        },
        'table.order.id': {
            en: 'Order ID',
            zh: '订单号',
            ja: '注文ID',
            ko: '주문 ID',
            fr: 'ID Commande',
            de: 'Bestell-ID',
            es: 'ID Pedido',
            ar: 'معرف الطلب'
        },
        'table.order.supplier': {
            en: 'Supplier',
            zh: '供应商',
            ja: 'サプライヤー',
            ko: '공급업체',
            fr: 'Fournisseur',
            de: 'Lieferant',
            es: 'Proveedor',
            ar: 'المورد'
        },
        'table.order.items': {
            en: 'Items',
            zh: '商品',
            ja: '商品',
            ko: '상품',
            fr: 'Articles',
            de: 'Artikel',
            es: 'Artículos',
            ar: 'المنتجات'
        },
        'table.order.quantity': {
            en: 'Quantity',
            zh: '数量',
            ja: '数量',
            ko: '수량',
            fr: 'Quantité',
            de: 'Menge',
            es: 'Cantidad',
            ar: 'الكمية'
        },
        'table.order.unit_price': {
            en: 'Unit Price',
            zh: '单价',
            ja: '単価',
            ko: '단가',
            fr: 'Prix Unitaire',
            de: 'Stückpreis',
            es: 'Precio Unitario',
            ar: 'سعر الوحدة'
        },
        'table.order.total_amount': {
            en: 'Total Amount',
            zh: '总金额',
            ja: '総額',
            ko: '총액',
            fr: 'Montant Total',
            de: 'Gesamtbetrag',
            es: 'Monto Total',
            ar: 'المبلغ الإجمالي'
        },
        'table.order.status': {
            en: 'Status',
            zh: '状态',
            ja: 'ステータス',
            ko: '상태',
            fr: 'Statut',
            de: 'Status',
            es: 'Estado',
            ar: 'الحالة'
        },
        'table.order.order_date': {
            en: 'Order Date',
            zh: '下单日期',
            ja: '注文日',
            ko: '주문일',
            fr: 'Date de Commande',
            de: 'Bestelldatum',
            es: 'Fecha de Pedido',
            ar: 'تاريخ الطلب'
        },
        'table.order.delivery_date': {
            en: 'Delivery Date',
            zh: '交付日期',
            ja: '納期',
            ko: '배송일',
            fr: 'Date de Livraison',
            de: 'Lieferdatum',
            es: 'Fecha de Entrega',
            ar: 'تاريخ التسليم'
        },
        'table.order.progress': {
            en: 'Progress',
            zh: '进度',
            ja: '進捗',
            ko: '진행률',
            fr: 'Progression',
            de: 'Fortschritt',
            es: 'Progreso',
            ar: 'التقدم'
        },
        'table.inventory.item': {
            en: 'Item Name',
            zh: '物料名称',
            ja: '品目名',
            ko: '품목명',
            fr: 'Nom de l\'Article',
            de: 'Artikelname',
            es: 'Nombre del Artículo',
            ar: 'اسم العنصر'
        },
        'table.inventory.current_stock': {
            en: 'Current Stock',
            zh: '当前库存',
            ja: '現在庫',
            ko: '현재 재고',
            fr: 'Stock Actuel',
            de: 'Aktueller Bestand',
            es: 'Stock Actual',
            ar: 'المخزون الحالي'
        },
        'table.inventory.safety_stock': {
            en: 'Safety Stock',
            zh: '安全库存',
            ja: '安全在庫',
            ko: '안전 재고',
            fr: 'Stock de Sécurité',
            de: 'Sicherheitsbestand',
            es: 'Stock de Seguridad',
            ar: 'المخزون الآمن'
        },
        'table.inventory.forecast_demand': {
            en: 'Forecast Demand',
            zh: '预测需求',
            ja: '予測需要',
            ko: '예측 수요',
            fr: 'Demande Prévisionnelle',
            de: 'Prognostizierte Nachfrage',
            es: 'Demanda Pronosticada',
            ar: 'الطلب المتوقع'
        },
        'table.inventory.reorder_point': {
            en: 'Reorder Point',
            zh: '补货点',
            ja: '発注点',
            ko: '재주문점',
            fr: 'Point de Réapprovisionnement',
            de: 'Bestellpunkt',
            es: 'Punto de Reorden',
            ar: 'نقطة إعادة الطلب'
        },
        'table.inventory.status': {
            en: 'Status',
            zh: '状态',
            ja: 'ステータス',
            ko: '상태',
            fr: 'Statut',
            de: 'Status',
            es: 'Estado',
            ar: 'الحالة'
        },
        'table.inventory.trend': {
            en: 'Trend',
            zh: '趋势',
            ja: 'トレンド',
            ko: '트렌드',
            fr: 'Tendance',
            de: 'Trend',
            es: 'Tendencia',
            ar: 'الاتجاه'
        },
        'table.inventory.next_order_date': {
            en: 'Next Order Date',
            zh: '建议订货日期',
            ja: '次回発注日',
            ko: '다음 주문일',
            fr: 'Date de Prochaine Commande',
            de: 'Nächstes Bestelldatum',
            es: 'Fecha de Próximo Pedido',
            ar: 'تاريخ الطلب التالي'
        },
        'table.inventory.suggested_quantity': {
            en: 'Suggested Quantity',
            zh: '建议数量',
            ja: '推奨数量',
            ko: '권장 수량',
            fr: 'Quantité Suggérée',
            de: 'Vorgeschlagene Menge',
            es: 'Cantidad Sugerida',
            ar: 'الكمية المقترحة'
        },
        'table.contract.id': {
            en: 'Contract ID',
            zh: '合同号',
            ja: '契約ID',
            ko: '계약 ID',
            fr: 'ID Contrat',
            de: 'Vertrags-ID',
            es: 'ID Contrato',
            ar: 'معرف العقد'
        },
        'table.contract.supplier': {
            en: 'Supplier',
            zh: '供应商',
            ja: 'サプライヤー',
            ko: '공급업체',
            fr: 'Fournisseur',
            de: 'Lieferant',
            es: 'Proveedor',
            ar: 'المورد'
        },
        'table.contract.title': {
            en: 'Contract Title',
            zh: '合同标题',
            ja: '契約タイトル',
            ko: '계약 제목',
            fr: 'Titre du Contrat',
            de: 'Vertragstitel',
            es: 'Título del Contrato',
            ar: 'عنوان العقد'
        },
        'table.contract.value': {
            en: 'Contract Value',
            zh: '合同金额',
            ja: '契約金額',
            ko: '계약 금액',
            fr: 'Valeur du Contrat',
            de: 'Vertragswert',
            es: 'Valor del Contrato',
            ar: 'قيمة العقد'
        },
        'table.contract.start_date': {
            en: 'Start Date',
            zh: '开始日期',
            ja: '開始日',
            ko: '시작일',
            fr: 'Date de Début',
            de: 'Startdatum',
            es: 'Fecha de Inicio',
            ar: 'تاريخ البدء'
        },
        'table.contract.end_date': {
            en: 'End Date',
            zh: '结束日期',
            ja: '終了日',
            ko: '종료일',
            fr: 'Date de Fin',
            de: 'Enddatum',
            es: 'Fecha de Fin',
            ar: 'تاريخ الانتهاء'
        },
        'table.contract.status': {
            en: 'Status',
            zh: '状态',
            ja: 'ステータス',
            ko: '상태',
            fr: 'Statut',
            de: 'Status',
            es: 'Estado',
            ar: 'الحالة'
        },
        'table.contract.renewal_date': {
            en: 'Renewal Date',
            zh: '续约提醒',
            ja: '更新日',
            ko: '갱신일',
            fr: 'Date de Renouvellement',
            de: 'Verlängerungsdatum',
            es: 'Fecha de Renovación',
            ar: 'تاريخ التجديد'
        },
        'table.contract.terms': {
            en: 'Contract Terms',
            zh: '合同条款',
            ja: '契約条件',
            ko: '계약 조건',
            fr: 'Conditions du Contrat',
            de: 'Vertragsbedingungen',
            es: 'Términos del Contrato',
            ar: 'شروط العقد'
        },
        'table.logistics.tracking_no': {
            en: 'Tracking No.',
            zh: '运单号',
            ja: '追跡番号',
            ko: '추적 번호',
            fr: 'N° de Suivi',
            de: 'Verfolgungsnummer',
            es: 'N° de Seguimiento',
            ar: 'رقم التتبع'
        },
        'table.logistics.supplier': {
            en: 'Supplier',
            zh: '供应商',
            ja: 'サプライヤー',
            ko: '공급업체',
            fr: 'Fournisseur',
            de: 'Lieferant',
            es: 'Proveedor',
            ar: 'المورد'
        },
        'table.logistics.items': {
            en: 'Items',
            zh: '货物',
            ja: '商品',
            ko: '화물',
            fr: 'Articles',
            de: 'Artikel',
            es: 'Artículos',
            ar: 'البضائع'
        },
        'table.logistics.status': {
            en: 'Status',
            zh: '状态',
            ja: 'ステータス',
            ko: '상태',
            fr: 'Statut',
            de: 'Status',
            es: 'Estado',
            ar: 'الحالة'
        },
        'table.logistics.current_location': {
            en: 'Current Location',
            zh: '当前位置',
            ja: '現在地',
            ko: '현재 위치',
            fr: 'Emplacement Actuel',
            de: 'Aktueller Standort',
            es: 'Ubicación Actual',
            ar: 'الموقع الحالي'
        },
        'table.logistics.estimated_delivery': {
            en: 'Estimated Delivery',
            zh: '预计送达',
            ja: '予定配達',
            ko: '예상 배송',
            fr: 'Livraison Estimée',
            de: 'Geschätzte Lieferung',
            es: 'Entrega Estimada',
            ar: 'التسليم المتوقع'
        },
        'table.logistics.progress': {
            en: 'Progress',
            zh: '进度',
            ja: '進捗',
            ko: '진행률',
            fr: 'Progression',
            de: 'Fortschritt',
            es: 'Progreso',
            ar: 'التقدم'
        },
        'table.logistics.route': {
            en: 'Route',
            zh: '路线',
            ja: 'ルート',
            ko: '경로',
            fr: 'Itinéraire',
            de: 'Route',
            es: 'Ruta',
            ar: 'المسار'
        },
        'table.reconciliation.period': {
            en: 'Period',
            zh: '对账期间',
            ja: '期間',
            ko: '기간',
            fr: 'Période',
            de: 'Zeitraum',
            es: 'Período',
            ar: 'الفترة'
        },
        'table.reconciliation.supplier': {
            en: 'Supplier',
            zh: '供应商',
            ja: 'サプライヤー',
            ko: '공급업체',
            fr: 'Fournisseur',
            de: 'Lieferant',
            es: 'Proveedor',
            ar: 'المورد'
        },
        'table.reconciliation.invoice_amount': {
            en: 'Invoice Amount',
            zh: '发票金额',
            ja: '請求書金額',
            ko: '송장 금액',
            fr: 'Montant de la Facture',
            de: 'Rechnungsbetrag',
            es: 'Monto de Factura',
            ar: 'مبلغ الفاتورة'
        },
        'table.reconciliation.paid_amount': {
            en: 'Paid Amount',
            zh: '已付金额',
            ja: '支払済み金額',
            ko: '지불 금액',
            fr: 'Montant Payé',
            de: 'Gezahlter Betrag',
            es: 'Monto Pagado',
            ar: 'المبلغ المدفوع'
        },
        'table.reconciliation.difference': {
            en: 'Difference',
            zh: '差异',
            ja: '差異',
            ko: '차이',
            fr: 'Différence',
            de: 'Differenz',
            es: 'Diferencia',
            ar: 'الفرق'
        },
        'table.reconciliation.status': {
            en: 'Status',
            zh: '状态',
            ja: 'ステータス',
            ko: '상태',
            fr: 'Statut',
            de: 'Status',
            es: 'Estado',
            ar: 'الحالة'
        },
        'table.reconciliation.reconcile_date': {
            en: 'Reconcile Date',
            zh: '对账日期',
            ja: '調整日',
            ko: '조정일',
            fr: 'Date de Réconciliation',
            de: 'Abstimmungsdatum',
            es: 'Fecha de Conciliación',
            ar: 'تاريخ التوفيق'
        },
        'table.reconciliation.notes': {
            en: 'Notes',
            zh: '备注',
            ja: '備考',
            ko: '비고',
            fr: 'Notes',
            de: 'Notizen',
            es: 'Notas',
            ar: 'ملاحظات'
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
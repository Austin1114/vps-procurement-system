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
            en: 'VPS Procurement Expenditure (10K)',
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
// Main JavaScript for VPS Smart Procurement System

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
    
    // Setup navigation
    setupNavigation();
    
    // Initialize charts
    initCharts();
    
    // Setup AI Assistant
    setupAIAssistant();
});

/**
 * Initialize the application
 */
function initApp() {
    console.log('VPS Smart Procurement System initialized');
    
    // Setup module cards click events
    setupModuleCards();
    
    // Setup AI insight actions
    setupInsightActions();
}

/**
 * Setup navigation between main sections
 */
function setupNavigation() {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section-container');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(mi => mi.classList.remove('active'));
            
            // Add active class to clicked menu item
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => section.classList.add('hidden'));
            
            // Show the selected section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.remove('hidden');
        });
    });
}

/**
 * Setup module cards click events
 */
function setupModuleCards() {
    const moduleCards = document.querySelectorAll('.module-card');
    
    moduleCards.forEach(card => {
        card.addEventListener('click', function() {
            const moduleId = this.id;
            showModuleDetails(moduleId);
        });
    });
}

/**
 * Show module details with test data
 * @param {string} moduleId - The ID of the module
 */
function showModuleDetails(moduleId) {
    console.log(`Showing details for module: ${moduleId}`);
    
    // Create and show detailed module page
    createModuleDetailPage(moduleId);
}

/**
 * Create detailed module page with test data
 * @param {string} moduleId - The ID of the module
 */
function createModuleDetailPage(moduleId) {
    const content = document.querySelector('.content');
    
    // Hide all existing sections
    const sections = document.querySelectorAll('.section-container');
    sections.forEach(section => section.classList.add('hidden'));
    
    // Remove any existing detail page
    const existingDetail = document.getElementById('module-detail');
    if (existingDetail) {
        existingDetail.remove();
    }
    
    // Create new detail page
    const detailPage = document.createElement('div');
    detailPage.id = 'module-detail';
    detailPage.className = 'section-container';
    
    // Get module data and create content using the new function
    const moduleData = getModuleData(moduleId);
    detailPage.innerHTML = createModuleContent(moduleData);
    
    content.appendChild(detailPage);
    
    // Setup back button
    setupBackButton();
    
    // Setup module-specific functionality
    setupModuleInteractions(moduleId);
}

/**
 * Setup AI insight action buttons
 */
function setupInsightActions() {
    const actionButtons = document.querySelectorAll('.btn-action');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering parent card click
            const action = this.textContent;
            handleInsightAction(action);
        });
    });
}

/**
 * Get test data for specific module
 * @param {string} moduleId - The ID of the module
 * @returns {Object} Module data object
 */
function getModuleData(moduleId) {
    const moduleDataMap = {
        // Research 模块
        'team-collaboration': {
            title: '团队协作',
            icon: 'fas fa-users',
            data: [
                { id: 'TEAM001', projectName: '智能采购系统升级', teamLead: '张工程师', members: 8, status: '进行中', progress: 75, startDate: '2024-01-10', deadline: '2024-03-15', priority: '高', tasks: 24, completed: 18 },
                { id: 'TEAM002', projectName: '供应商评估体系', teamLead: '李主管', members: 5, status: '计划中', progress: 15, startDate: '2024-02-01', deadline: '2024-04-30', priority: '中', tasks: 12, completed: 2 },
                { id: 'TEAM003', projectName: '库存优化项目', teamLead: '王经理', members: 6, status: '进行中', progress: 60, startDate: '2023-12-15', deadline: '2024-02-28', priority: '高', tasks: 20, completed: 12 },
                { id: 'TEAM004', projectName: '成本分析系统', teamLead: '赵分析师', members: 4, status: '已完成', progress: 100, startDate: '2023-11-01', deadline: '2024-01-15', priority: '中', tasks: 15, completed: 15 },
                { id: 'TEAM005', projectName: '物流跟踪优化', teamLead: '陈总监', members: 7, status: '进行中', progress: 40, startDate: '2024-01-20', deadline: '2024-05-10', priority: '中', tasks: 18, completed: 7 }
            ]
        },
        'production-management': {
            title: '生产管理',
            icon: 'fas fa-industry',
            data: [
                { id: 'PROD001', productLine: '电子产品组装线', manager: '刘车间主任', capacity: '500台/日', currentOutput: '420台/日', efficiency: '84%', status: '正常运行', shift: '三班制', workers: 45, target: '500台/日' },
                { id: 'PROD002', productLine: '机械零件加工线', manager: '周技术员', capacity: '200件/日', currentOutput: '180件/日', efficiency: '90%', status: '正常运行', shift: '两班制', workers: 32, target: '200件/日' },
                { id: 'PROD003', productLine: '包装生产线', manager: '吴主管', capacity: '1000件/日', currentOutput: '750件/日', efficiency: '75%', status: '维护中', shift: '单班制', workers: 28, target: '1000件/日' },
                { id: 'PROD004', productLine: '质检测试线', manager: '郑质检员', capacity: '300件/日', currentOutput: '280件/日', efficiency: '93%', status: '正常运行', shift: '两班制', workers: 18, target: '300件/日' },
                { id: 'PROD005', productLine: '原料预处理线', manager: '孙工程师', capacity: '800kg/日', currentOutput: '720kg/日', efficiency: '90%', status: '正常运行', shift: '三班制', workers: 24, target: '800kg/日' }
            ]
        },
        'project-tasks': {
            title: '项目任务',
            icon: 'fas fa-clipboard-list',
            data: [
                { id: 'TASK001', taskName: '供应商资质审核', project: '智能采购系统升级', assignee: '张审核员', priority: '高', status: '进行中', progress: 70, startDate: '2024-01-15', dueDate: '2024-01-30', estimatedHours: 40, actualHours: 28 },
                { id: 'TASK002', taskName: '系统接口开发', project: '智能采购系统升级', assignee: '李开发工程师', priority: '高', status: '进行中', progress: 85, startDate: '2024-01-10', dueDate: '2024-02-05', estimatedHours: 80, actualHours: 68 },
                { id: 'TASK003', taskName: '数据库设计', project: '供应商评估体系', assignee: '王数据库管理员', priority: '中', status: '待开始', progress: 0, startDate: '2024-02-01', dueDate: '2024-02-20', estimatedHours: 60, actualHours: 0 },
                { id: 'TASK004', taskName: '用户培训材料', project: '库存优化项目', assignee: '赵培训师', priority: '中', status: '已完成', progress: 100, startDate: '2024-01-05', dueDate: '2024-01-25', estimatedHours: 30, actualHours: 32 },
                { id: 'TASK005', taskName: '性能测试', project: '成本分析系统', assignee: '陈测试工程师', priority: '高', status: '已完成', progress: 100, startDate: '2024-01-08', dueDate: '2024-01-18', estimatedHours: 50, actualHours: 48 }
            ]
        },
        // Procurement 模块
        'supplier-management': {
            title: '供应商管理',
            icon: 'fas fa-handshake',
            data: [
                { id: 'SUP001', name: '华为技术有限公司', category: 'IT设备', rating: 4.8, status: '活跃', contact: '张经理', phone: '138-0013-8888', email: 'zhang@huawei.com', orders: 45, amount: '¥2,580,000' },
                { id: 'SUP002', name: '联想集团', category: 'IT设备', rating: 4.6, status: '活跃', contact: '李总监', phone: '139-0014-9999', email: 'li@lenovo.com', orders: 32, amount: '¥1,890,000' },
                { id: 'SUP003', name: '中石化润滑油', category: '工业用品', rating: 4.9, status: '活跃', contact: '王部长', phone: '137-0015-7777', email: 'wang@sinopec.com', orders: 28, amount: '¥980,000' },
                { id: 'SUP004', name: '三一重工', category: '机械设备', rating: 4.7, status: '暂停', contact: '赵工程师', phone: '136-0016-6666', email: 'zhao@sany.com', orders: 15, amount: '¥3,200,000' },
                { id: 'SUP005', name: '美的集团', category: '办公设备', rating: 4.5, status: '活跃', contact: '陈主管', phone: '135-0017-5555', email: 'chen@midea.com', orders: 22, amount: '¥650,000' }
            ]
        },
        'performance-evaluation': {
            title: '绩效评估',
            icon: 'fas fa-chart-line',
            data: [
                { supplier: '华为技术有限公司', period: '2024年1月', deliveryScore: 95, qualityScore: 98, priceScore: 85, serviceScore: 92, overallScore: 92.5, rank: 1, improvement: '+2.3%', issues: 0 },
                { supplier: '联想集团', period: '2024年1月', deliveryScore: 88, qualityScore: 94, priceScore: 90, serviceScore: 89, overallScore: 90.3, rank: 2, improvement: '+1.8%', issues: 1 },
                { supplier: '中石化润滑油', period: '2024年1月', deliveryScore: 92, qualityScore: 96, priceScore: 88, serviceScore: 85, overallScore: 90.3, rank: 3, improvement: '-0.5%', issues: 0 },
                { supplier: '美的集团', period: '2024年1月', deliveryScore: 85, qualityScore: 90, priceScore: 92, serviceScore: 88, overallScore: 88.8, rank: 4, improvement: '+3.2%', issues: 2 },
                { supplier: '三一重工', period: '2024年1月', deliveryScore: 78, qualityScore: 85, priceScore: 80, serviceScore: 82, overallScore: 81.3, rank: 5, improvement: '-5.1%', issues: 3 }
            ]
        },
        'contract-management': {
            title: '合同管理',
            icon: 'fas fa-file-contract',
            data: [
                { id: 'CT2024001', supplier: '华为技术有限公司', title: 'IT设备年度采购合同', value: '¥5,200,000', startDate: '2024-01-01', endDate: '2024-12-31', status: '执行中', renewalDate: '2024-11-01', terms: '年度框架协议，分批交付' },
                { id: 'CT2024002', supplier: '中石化润滑油', title: '工业润滑油供应合同', value: '¥1,800,000', startDate: '2024-02-01', endDate: '2025-01-31', status: '执行中', renewalDate: '2024-12-01', terms: '月度供应，质量保证' },
                { id: 'CT2023015', supplier: '三一重工', title: '机械设备维护合同', value: '¥3,600,000', startDate: '2023-06-01', endDate: '2024-05-31', status: '即将到期', renewalDate: '2024-03-01', terms: '设备维护及配件供应' },
                { id: 'CT2024003', supplier: '美的集团', title: '办公设备采购合同', value: '¥980,000', startDate: '2024-01-15', endDate: '2024-06-15', status: '执行中', renewalDate: '2024-05-01', terms: '办公空调及小家电供应' },
                { id: 'CT2023020', supplier: '联想集团', title: 'IT设备租赁合同', value: '¥2,400,000', startDate: '2023-09-01', endDate: '2024-08-31', status: '执行中', renewalDate: '2024-06-01', terms: '电脑设备租赁服务' }
            ]
        },
        'order-processing': {
            title: '订单处理',
            icon: 'fas fa-shopping-basket',
            data: [
                { id: 'PO2024001', supplier: '华为技术有限公司', items: 'ThinkPad X1 Carbon 笔记本电脑', quantity: 50, unitPrice: '¥8,500', totalAmount: '¥425,000', status: '已确认', orderDate: '2024-01-15', deliveryDate: '2024-01-25', progress: 75 },
                { id: 'PO2024002', supplier: '中石化润滑油', items: '工业润滑油 5L装', quantity: 200, unitPrice: '¥180', totalAmount: '¥36,000', status: '处理中', orderDate: '2024-01-18', deliveryDate: '2024-01-28', progress: 45 },
                { id: 'PO2024003', supplier: '三一重工', items: '挖掘机配件套装', quantity: 5, unitPrice: '¥25,000', totalAmount: '¥125,000', status: '待审批', orderDate: '2024-01-20', deliveryDate: '2024-02-05', progress: 20 },
                { id: 'PO2024004', supplier: '美的集团', items: '办公空调 3匹立式', quantity: 15, unitPrice: '¥4,200', totalAmount: '¥63,000', status: '已发货', orderDate: '2024-01-12', deliveryDate: '2024-01-22', progress: 90 },
                { id: 'PO2024005', supplier: '联想集团', items: 'ThinkCentre 台式机', quantity: 30, unitPrice: '¥5,800', totalAmount: '¥174,000', status: '已完成', orderDate: '2024-01-08', deliveryDate: '2024-01-18', progress: 100 }
            ]
        },
        // Planning 模块
        'procurement-planning': {
            title: '采购计划',
            icon: 'fas fa-calendar-alt',
            data: [
                { id: 'PLAN001', planName: '2024年Q1 IT设备采购计划', category: 'IT设备', budget: '¥3,500,000', allocated: '¥2,800,000', remaining: '¥700,000', status: '执行中', startDate: '2024-01-01', endDate: '2024-03-31', progress: 80, items: 15 },
                { id: 'PLAN002', planName: '办公用品年度采购计划', category: '办公用品', budget: '¥800,000', allocated: '¥320,000', remaining: '¥480,000', status: '计划中', startDate: '2024-02-01', endDate: '2024-12-31', progress: 40, items: 25 },
                { id: 'PLAN003', planName: '工业原料季度采购计划', category: '工业原料', budget: '¥2,200,000', allocated: '¥1,650,000', remaining: '¥550,000', status: '执行中', startDate: '2024-01-15', endDate: '2024-04-15', progress: 75, items: 12 },
                { id: 'PLAN004', planName: '设备维护采购计划', category: '维护服务', budget: '¥1,500,000', allocated: '¥900,000', remaining: '¥600,000', status: '执行中', startDate: '2023-12-01', endDate: '2024-06-01', progress: 60, items: 8 },
                { id: 'PLAN005', planName: '安全防护用品采购计划', category: '安全用品', budget: '¥600,000', allocated: '¥150,000', remaining: '¥450,000', status: '待审批', startDate: '2024-03-01', endDate: '2024-08-31', progress: 25, items: 20 }
            ]
        },
        'supplier-catalog': {
            title: '供应商目录',
            icon: 'fas fa-book',
            data: [
                { catalogId: 'CAT001', supplier: '华为技术有限公司', category: 'IT设备', itemCount: 156, lastUpdate: '2024-01-20', priceValidity: '2024-06-30', discount: '5-15%', certification: 'ISO9001', status: '有效' },
                { catalogId: 'CAT002', supplier: '联想集团', category: 'IT设备', itemCount: 89, lastUpdate: '2024-01-18', priceValidity: '2024-05-31', discount: '8-12%', certification: 'ISO9001', status: '有效' },
                { catalogId: 'CAT003', supplier: '中石化润滑油', category: '工业用品', itemCount: 45, lastUpdate: '2024-01-15', priceValidity: '2024-07-15', discount: '3-8%', certification: 'ISO14001', status: '有效' },
                { catalogId: 'CAT004', supplier: '三一重工', category: '机械设备', itemCount: 78, lastUpdate: '2023-12-20', priceValidity: '2024-03-20', discount: '10-20%', certification: 'CE认证', status: '即将过期' },
                { catalogId: 'CAT005', supplier: '美的集团', category: '办公设备', itemCount: 34, lastUpdate: '2024-01-22', priceValidity: '2024-08-22', discount: '6-10%', certification: '3C认证', status: '有效' }
            ]
        },
        'arrival-planning': {
            title: '到货计划',
            icon: 'fas fa-truck-loading',
            data: [
                { id: 'ARR001', orderNo: 'PO2024001', supplier: '华为技术有限公司', items: 'ThinkPad笔记本电脑 x50', scheduledDate: '2024-01-25', actualDate: '2024-01-25', status: '已到货', warehouse: 'A区-01', inspector: '张检验员', documents: '齐全' },
                { id: 'ARR002', orderNo: 'PO2024002', supplier: '中石化润滑油', items: '工业润滑油 x200桶', scheduledDate: '2024-01-28', actualDate: '-', status: '运输中', warehouse: 'B区-03', inspector: '李检验员', documents: '待确认' },
                { id: 'ARR003', orderNo: 'PO2024004', supplier: '美的集团', items: '办公空调 x15台', scheduledDate: '2024-01-22', actualDate: '2024-01-22', status: '已到货', warehouse: 'C区-05', inspector: '王检验员', documents: '齐全' },
                { id: 'ARR004', orderNo: 'PO2024003', supplier: '三一重工', items: '挖掘机配件套装 x5', scheduledDate: '2024-02-05', actualDate: '-', status: '待发货', warehouse: 'D区-02', inspector: '赵检验员', documents: '准备中' },
                { id: 'ARR005', orderNo: 'PO2024005', supplier: '联想集团', items: 'ThinkCentre台式机 x30', scheduledDate: '2024-01-18', actualDate: '2024-01-18', status: '已到货', warehouse: 'A区-02', inspector: '陈检验员', documents: '齐全' }
            ]
        },
        'inventory-forecast': {
            title: '库存预测',
            icon: 'fas fa-warehouse',
            data: [
                { item: '办公用纸 A4', currentStock: 2500, safetyStock: 1000, forecastDemand: 800, reorderPoint: 1200, status: '正常', trend: '稳定', nextOrderDate: '2024-02-15', suggestedQuantity: 3000 },
                { item: '打印机墨盒 HP', currentStock: 45, safetyStock: 50, forecastDemand: 25, reorderPoint: 75, status: '低库存', trend: '下降', nextOrderDate: '2024-01-25', suggestedQuantity: 100 },
                { item: '工业润滑油', currentStock: 180, safetyStock: 100, forecastDemand: 60, reorderPoint: 160, status: '正常', trend: '上升', nextOrderDate: '2024-02-10', suggestedQuantity: 200 },
                { item: '安全帽', currentStock: 25, safetyStock: 30, forecastDemand: 15, reorderPoint: 45, status: '紧急', trend: '稳定', nextOrderDate: '2024-01-22', suggestedQuantity: 80 },
                { item: '电脑配件', currentStock: 120, safetyStock: 80, forecastDemand: 40, reorderPoint: 120, status: '正常', trend: '稳定', nextOrderDate: '2024-02-20', suggestedQuantity: 150 }
            ]
        },
        // Logistics 模块
        'logistics-procurement': {
            title: '物流采购',
            icon: 'fas fa-shipping-fast',
            data: [
                { id: 'LOG001', serviceProvider: '顺丰速运', serviceType: '快递服务', route: '北京-上海', price: '¥25/kg', contract: 'CT-LOG-001', volume: '500件/月', rating: 4.8, status: '活跃', lastUsed: '2024-01-23' },
                { id: 'LOG002', serviceProvider: '德邦物流', serviceType: '零担运输', route: '广州-武汉', price: '¥180/吨', contract: 'CT-LOG-002', volume: '200吨/月', rating: 4.6, status: '活跃', lastUsed: '2024-01-22' },
                { id: 'LOG003', serviceProvider: '中通快递', serviceType: '快递服务', route: '深圳-北京', price: '¥22/kg', contract: 'CT-LOG-003', volume: '800件/月', rating: 4.5, status: '活跃', lastUsed: '2024-01-24' },
                { id: 'LOG004', serviceProvider: '安能物流', serviceType: '整车运输', route: '上海-成都', price: '¥3500/车', contract: 'CT-LOG-004', volume: '50车/月', rating: 4.4, status: '暂停', lastUsed: '2024-01-15' },
                { id: 'LOG005', serviceProvider: '京东物流', serviceType: '仓储配送', route: '全国配送', price: '¥8/件', contract: 'CT-LOG-005', volume: '1200件/月', rating: 4.7, status: '活跃', lastUsed: '2024-01-24' }
            ]
        },
        'logistics-tracking': {
            title: '物流跟踪',
            icon: 'fas fa-map-marker-alt',
            data: [
                { trackingNo: 'SF1234567890', supplier: '华为技术有限公司', items: 'ThinkPad笔记本电脑 x50', status: '运输中', currentLocation: '北京分拨中心', estimatedDelivery: '2024-01-25 14:00', progress: 65, route: ['深圳发货', '广州中转', '武汉中转', '北京分拨中心', '目的地'] },
                { trackingNo: 'YT9876543210', supplier: '中石化润滑油', items: '工业润滑油 x200桶', status: '已发货', currentLocation: '上海仓库', estimatedDelivery: '2024-01-28 10:00', progress: 25, route: ['上海仓库', '南京中转', '合肥中转', '目的地'] },
                { trackingNo: 'ZTO5555666677', supplier: '美的集团', items: '办公空调 x15台', status: '已送达', currentLocation: '已签收', estimatedDelivery: '2024-01-22 16:30', progress: 100, route: ['佛山发货', '广州中转', '长沙中转', '武汉中转', '已送达'] },
                { trackingNo: 'EMS1111222233', supplier: '三一重工', items: '挖掘机配件', status: '待发货', currentLocation: '长沙仓库', estimatedDelivery: '2024-02-05 09:00', progress: 10, route: ['长沙仓库', '待发货'] },
                { trackingNo: 'JD8888999900', supplier: '联想集团', items: 'ThinkCentre台式机 x30', status: '配送中', currentLocation: '本地配送站', estimatedDelivery: '今日 18:00', progress: 85, route: ['北京仓库', '本地分拣', '配送站', '配送中'] }
            ]
        },
        'payment-processing': {
            title: '支付处理',
            icon: 'fas fa-credit-card',
            data: [
                { id: 'PAY001', orderNo: 'PO2024001', supplier: '华为技术有限公司', amount: '¥425,000', paymentMethod: '银行转账', status: '已支付', requestDate: '2024-01-20', approvalDate: '2024-01-22', paymentDate: '2024-01-23', approver: '财务经理' },
                { id: 'PAY002', orderNo: 'PO2024002', supplier: '中石化润滑油', amount: '¥36,000', paymentMethod: '银行转账', status: '待审批', requestDate: '2024-01-24', approvalDate: '-', paymentDate: '-', approver: '待分配' },
                { id: 'PAY003', orderNo: 'PO2024004', supplier: '美的集团', amount: '¥63,000', paymentMethod: '银行转账', status: '已支付', requestDate: '2024-01-18', approvalDate: '2024-01-19', paymentDate: '2024-01-20', approver: '财务经理' },
                { id: 'PAY004', orderNo: 'PO2024003', supplier: '三一重工', amount: '¥125,000', paymentMethod: '银行转账', status: '审批中', requestDate: '2024-01-23', approvalDate: '-', paymentDate: '-', approver: '财务总监' },
                { id: 'PAY005', orderNo: 'PO2024005', supplier: '联想集团', amount: '¥174,000', paymentMethod: '银行转账', status: '已支付', requestDate: '2024-01-15', approvalDate: '2024-01-16', paymentDate: '2024-01-17', approver: '财务经理' }
            ]
        },
        // Finance 模块
        'reconciliation': {
            title: '财务对账',
            icon: 'fas fa-balance-scale',
            data: [
                { period: '2024年1月', supplier: '华为技术有限公司', invoiceAmount: '¥425,000', paidAmount: '¥425,000', difference: '¥0', status: '已对账', reconcileDate: '2024-01-30', notes: '金额一致，无差异' },
                { period: '2024年1月', supplier: '中石化润滑油', invoiceAmount: '¥36,000', paidAmount: '¥35,800', difference: '¥200', status: '有差异', reconcileDate: '待处理', notes: '运费差异，需确认' },
                { period: '2024年1月', supplier: '美的集团', invoiceAmount: '¥63,000', paidAmount: '¥63,000', difference: '¥0', status: '已对账', reconcileDate: '2024-01-28', notes: '对账完成' },
                { period: '2023年12月', supplier: '三一重工', invoiceAmount: '¥125,000', paidAmount: '¥120,000', difference: '¥5,000', status: '处理中', reconcileDate: '2024-01-15', notes: '质量扣款，协商中' },
                { period: '2024年1月', supplier: '联想集团', invoiceAmount: '¥174,000', paidAmount: '¥174,000', difference: '¥0', status: '已对账', reconcileDate: '2024-01-25', notes: '按期对账完成' }
            ]
        },
        'invoicing': {
            title: '发票管理',
            icon: 'fas fa-file-invoice-dollar',
            data: [
                { invoiceNo: 'INV2024001', supplier: '华为技术有限公司', orderNo: 'PO2024001', amount: '¥425,000', taxAmount: '¥55,250', totalAmount: '¥480,250', issueDate: '2024-01-20', dueDate: '2024-02-19', status: '已收票', type: '增值税专用发票' },
                { invoiceNo: 'INV2024002', supplier: '中石化润滑油', orderNo: 'PO2024002', amount: '¥36,000', taxAmount: '¥4,680', totalAmount: '¥40,680', issueDate: '2024-01-22', dueDate: '2024-02-21', status: '待收票', type: '增值税专用发票' },
                { invoiceNo: 'INV2024003', supplier: '美的集团', orderNo: 'PO2024004', amount: '¥63,000', taxAmount: '¥8,190', totalAmount: '¥71,190', issueDate: '2024-01-18', dueDate: '2024-02-17', status: '已收票', type: '增值税专用发票' },
                { invoiceNo: 'INV2024004', supplier: '三一重工', orderNo: 'PO2024003', amount: '¥125,000', taxAmount: '¥16,250', totalAmount: '¥141,250', issueDate: '2024-01-25', dueDate: '2024-02-24', status: '待开票', type: '增值税专用发票' },
                { invoiceNo: 'INV2024005', supplier: '联想集团', orderNo: 'PO2024005', amount: '¥174,000', taxAmount: '¥22,620', totalAmount: '¥196,620', issueDate: '2024-01-16', dueDate: '2024-02-15', status: '已收票', type: '增值税专用发票' }
            ]
        },
        'capital-planning': {
            title: '资本规划',
            icon: 'fas fa-chart-pie',
            data: [
                { id: 'CAP001', projectName: '智能制造设备升级', category: '设备投资', budgetYear: '2024', totalBudget: '¥15,000,000', allocatedBudget: '¥8,500,000', usedBudget: '¥3,200,000', remainingBudget: '¥11,800,000', status: '执行中', roi: '18.5%', paybackPeriod: '3.2年' },
                { id: 'CAP002', projectName: 'IT基础设施建设', category: 'IT投资', budgetYear: '2024', totalBudget: '¥8,000,000', allocatedBudget: '¥6,000,000', usedBudget: '¥2,800,000', remainingBudget: '¥5,200,000', status: '执行中', roi: '22.3%', paybackPeriod: '2.8年' },
                { id: 'CAP003', projectName: '仓储物流中心扩建', category: '基建投资', budgetYear: '2024', totalBudget: '¥25,000,000', allocatedBudget: '¥12,000,000', usedBudget: '¥4,500,000', remainingBudget: '¥20,500,000', status: '计划中', roi: '15.2%', paybackPeriod: '4.1年' },
                { id: 'CAP004', projectName: '研发实验室建设', category: '研发投资', budgetYear: '2024', totalBudget: '¥12,000,000', allocatedBudget: '¥8,000,000', usedBudget: '¥3,500,000', remainingBudget: '¥8,500,000', status: '执行中', roi: '25.8%', paybackPeriod: '2.5年' },
                { id: 'CAP005', projectName: '环保设施改造', category: '环保投资', budgetYear: '2024', totalBudget: '¥6,000,000', allocatedBudget: '¥4,500,000', usedBudget: '¥1,800,000', remainingBudget: '¥4,200,000', status: '执行中', roi: '12.5%', paybackPeriod: '5.2年' }
            ]
        },
        'payment-processing-finance': {
            title: '财务支付处理',
            icon: 'fas fa-money-bill-wave',
            data: [
                { id: 'FPAY001', paymentType: '供应商付款', recipient: '华为技术有限公司', amount: '¥425,000', currency: 'CNY', method: '银行转账', status: '已完成', initiatedBy: '采购部', approvedBy: '财务经理', processedDate: '2024-01-23', reference: 'PO2024001' },
                { id: 'FPAY002', paymentType: '员工报销', recipient: '张工程师', amount: '¥3,500', currency: 'CNY', method: '银行转账', status: '待审批', initiatedBy: '人事部', approvedBy: '待分配', processedDate: '-', reference: 'EXP2024001' },
                { id: 'FPAY003', paymentType: '税费缴纳', recipient: '国家税务局', amount: '¥85,000', currency: 'CNY', method: '网银支付', status: '已完成', initiatedBy: '财务部', approvedBy: '财务总监', processedDate: '2024-01-20', reference: 'TAX2024001' },
                { id: 'FPAY004', paymentType: '服务费支付', recipient: '德勤咨询', amount: '¥120,000', currency: 'CNY', method: '银行转账', status: '审批中', initiatedBy: '战略部', approvedBy: '总经理', processedDate: '-', reference: 'SRV2024001' },
                { id: 'FPAY005', paymentType: '供应商付款', recipient: '美的集团', amount: '¥63,000', currency: 'CNY', method: '银行转账', status: '已完成', initiatedBy: '采购部', approvedBy: '财务经理', processedDate: '2024-01-20', reference: 'PO2024004' }
            ]
        }
    };
    
    return moduleDataMap[moduleId] || { title: '模块详情', icon: 'fas fa-info-circle', data: [] };
}

/**
 * Create module content HTML
 * @param {Object} moduleData - Module data object
 * @returns {string} HTML content
 */
function createModuleContent(moduleData) {
    const { title, icon, data } = moduleData;
    
    let contentHTML = `
        <div class="module-detail-header">
            <button class="back-btn" id="back-btn">
                <i class="fas fa-arrow-left"></i> 返回
            </button>
            <div class="module-detail-title">
                <i class="${icon}"></i>
                <h2>${title}</h2>
            </div>
        </div>
        <div class="module-detail-content">
    `;
    
    if (data.length === 0) {
        contentHTML += '<p class="no-data">暂无数据</p>';
    } else {
        // Create table based on data type
        contentHTML += createDataTable(data, title);
    }
    
    contentHTML += '</div>';
    return contentHTML;
}

/**
 * Create data table based on data structure
 * @param {Array} data - Array of data objects
 * @param {string} title - Module title
 * @returns {string} Table HTML
 */
function createDataTable(data, title) {
    if (data.length === 0) return '<p class="no-data">暂无数据</p>';
    
    const firstItem = data[0];
    const headers = Object.keys(firstItem);
    
    let tableHTML = '<div class="data-table-container"><table class="data-table"><thead><tr>';
    
    // Create headers based on data type
    if (title === '供应商管理') {
        tableHTML += '<th>供应商ID</th><th>供应商名称</th><th>类别</th><th>评级</th><th>状态</th><th>联系人</th><th>电话</th><th>邮箱</th><th>订单数</th><th>交易金额</th><th>操作</th>';
    } else if (title === '订单处理') {
        tableHTML += '<th>订单号</th><th>供应商</th><th>商品</th><th>数量</th><th>单价</th><th>总金额</th><th>状态</th><th>下单日期</th><th>交付日期</th><th>进度</th><th>操作</th>';
    } else if (title === '库存预测') {
        tableHTML += '<th>物料名称</th><th>当前库存</th><th>安全库存</th><th>预测需求</th><th>补货点</th><th>状态</th><th>趋势</th><th>建议订货日期</th><th>建议数量</th><th>操作</th>';
    } else if (title === '合同管理') {
        tableHTML += '<th>合同号</th><th>供应商</th><th>合同标题</th><th>合同金额</th><th>开始日期</th><th>结束日期</th><th>状态</th><th>续约提醒</th><th>合同条款</th><th>操作</th>';
    } else if (title === '物流跟踪') {
        tableHTML += '<th>运单号</th><th>供应商</th><th>货物</th><th>状态</th><th>当前位置</th><th>预计送达</th><th>进度</th><th>路线</th><th>操作</th>';
    } else if (title === '财务对账') {
        tableHTML += '<th>对账期间</th><th>供应商</th><th>发票金额</th><th>已付金额</th><th>差异</th><th>状态</th><th>对账日期</th><th>备注</th><th>操作</th>';
    }
    
    tableHTML += '</tr></thead><tbody>';
    
    // Create table rows
    data.forEach(item => {
        tableHTML += '<tr>';
        
        if (title === '供应商管理') {
            const statusClass = item.status === '活跃' ? 'status-active' : 'status-inactive';
            tableHTML += `
                <td>${item.id}</td>
                <td><strong>${item.name}</strong></td>
                <td>${item.category}</td>
                <td><span class="rating">⭐ ${item.rating}</span></td>
                <td><span class="status ${statusClass}">${item.status}</span></td>
                <td>${item.contact}</td>
                <td>${item.phone}</td>
                <td>${item.email}</td>
                <td>${item.orders}</td>
                <td><strong>${item.amount}</strong></td>
                <td><button class="btn-small btn-primary">查看详情</button></td>
            `;
        } else if (title === '订单处理') {
            const statusClass = getOrderStatusClass(item.status);
            tableHTML += `
                <td><strong>${item.id}</strong></td>
                <td>${item.supplier}</td>
                <td>${item.items}</td>
                <td>${item.quantity}</td>
                <td>${item.unitPrice}</td>
                <td><strong>${item.totalAmount}</strong></td>
                <td><span class="status ${statusClass}">${item.status}</span></td>
                <td>${item.orderDate}</td>
                <td>${item.deliveryDate}</td>
                <td><div class="progress-bar"><div class="progress-fill" style="width: ${item.progress}%"></div><span>${item.progress}%</span></div></td>
                <td><button class="btn-small btn-primary">跟踪</button></td>
            `;
        } else if (title === '库存预测') {
            const statusClass = getInventoryStatusClass(item.status);
            tableHTML += `
                <td><strong>${item.item}</strong></td>
                <td>${item.currentStock}</td>
                <td>${item.safetyStock}</td>
                <td>${item.forecastDemand}</td>
                <td>${item.reorderPoint}</td>
                <td><span class="status ${statusClass}">${item.status}</span></td>
                <td><span class="trend">${item.trend}</span></td>
                <td>${item.nextOrderDate}</td>
                <td>${item.suggestedQuantity}</td>
                <td><button class="btn-small btn-success">创建订单</button></td>
            `;
        } else if (title === '合同管理') {
            const statusClass = getContractStatusClass(item.status);
            tableHTML += `
                <td><strong>${item.id}</strong></td>
                <td>${item.supplier}</td>
                <td>${item.title}</td>
                <td><strong>${item.value}</strong></td>
                <td>${item.startDate}</td>
                <td>${item.endDate}</td>
                <td><span class="status ${statusClass}">${item.status}</span></td>
                <td>${item.renewalDate}</td>
                <td class="contract-terms">${item.terms}</td>
                <td><button class="btn-small btn-primary">查看合同</button></td>
            `;
        } else if (title === '物流跟踪') {
            const statusClass = getLogisticsStatusClass(item.status);
            const routeStr = item.route.join(' → ');
            tableHTML += `
                <td><strong>${item.trackingNo}</strong></td>
                <td>${item.supplier}</td>
                <td>${item.items}</td>
                <td><span class="status ${statusClass}">${item.status}</span></td>
                <td>${item.currentLocation}</td>
                <td>${item.estimatedDelivery}</td>
                <td><div class="progress-bar"><div class="progress-fill" style="width: ${item.progress}%"></div><span>${item.progress}%</span></div></td>
                <td class="route-info">${routeStr}</td>
                <td><button class="btn-small btn-info">详细跟踪</button></td>
            `;
        } else if (title === '财务对账') {
            const statusClass = getReconciliationStatusClass(item.status);
            tableHTML += `
                <td>${item.period}</td>
                <td>${item.supplier}</td>
                <td><strong>${item.invoiceAmount}</strong></td>
                <td><strong>${item.paidAmount}</strong></td>
                <td class="difference ${item.difference === '¥0' ? 'no-diff' : 'has-diff'}">${item.difference}</td>
                <td><span class="status ${statusClass}">${item.status}</span></td>
                <td>${item.reconcileDate}</td>
                <td class="notes">${item.notes}</td>
                <td><button class="btn-small btn-warning">处理</button></td>
            `;
        }
        
        tableHTML += '</tr>';
    });
    
    tableHTML += '</tbody></table></div>';
    return tableHTML;
}

/**
 * Get CSS class for order status
 */
function getOrderStatusClass(status) {
    const statusMap = {
        '已确认': 'status-confirmed',
        '处理中': 'status-processing',
        '待审批': 'status-pending',
        '已发货': 'status-shipped',
        '已完成': 'status-completed'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for inventory status
 */
function getInventoryStatusClass(status) {
    const statusMap = {
        '正常': 'status-normal',
        '低库存': 'status-low',
        '紧急': 'status-urgent'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for contract status
 */
function getContractStatusClass(status) {
    const statusMap = {
        '执行中': 'status-active',
        '即将到期': 'status-expiring'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for logistics status
 */
function getLogisticsStatusClass(status) {
    const statusMap = {
        '运输中': 'status-shipping',
        '已发货': 'status-shipped',
        '已送达': 'status-delivered',
        '待发货': 'status-pending',
        '配送中': 'status-delivering'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for reconciliation status
 */
function getReconciliationStatusClass(status) {
    const statusMap = {
        '已对账': 'status-reconciled',
        '有差异': 'status-difference',
        '处理中': 'status-processing'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for project status
 */
function getProjectStatusClass(status) {
    const statusMap = {
        '已完成': 'status-completed',
        '进行中': 'status-active',
        '计划中': 'status-pending',
        '暂停': 'status-inactive'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for production status
 */
function getProductionStatusClass(status) {
    const statusMap = {
        '正常运行': 'status-active',
        '维护中': 'status-warning',
        '停机': 'status-inactive'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for task status
 */
function getTaskStatusClass(status) {
    const statusMap = {
        '已完成': 'status-completed',
        '进行中': 'status-active',
        '待开始': 'status-pending',
        '已延期': 'status-warning'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for priority
 */
function getPriorityClass(priority) {
    const priorityMap = {
        '高': 'priority-high',
        '中': 'priority-medium',
        '低': 'priority-low'
    };
    return priorityMap[priority] || 'priority-default';
}

/**
 * Get CSS class for plan status
 */
function getPlanStatusClass(status) {
    const statusMap = {
        '执行中': 'status-active',
        '计划中': 'status-pending',
        '已完成': 'status-completed',
        '待审批': 'status-warning'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for catalog status
 */
function getCatalogStatusClass(status) {
    const statusMap = {
        '有效': 'status-active',
        '即将过期': 'status-warning',
        '已过期': 'status-inactive'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for arrival status
 */
function getArrivalStatusClass(status) {
    const statusMap = {
        '已到货': 'status-completed',
        '运输中': 'status-active',
        '待发货': 'status-pending',
        '延期': 'status-warning'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for payment status
 */
function getPaymentStatusClass(status) {
    const statusMap = {
        '已支付': 'status-completed',
        '审批中': 'status-processing',
        '待审批': 'status-pending',
        '已拒绝': 'status-inactive'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for invoice status
 */
function getInvoiceStatusClass(status) {
    const statusMap = {
        '已收票': 'status-completed',
        '待收票': 'status-pending',
        '待开票': 'status-warning',
        '已作废': 'status-inactive'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for capital status
 */
function getCapitalStatusClass(status) {
    const statusMap = {
        '执行中': 'status-active',
        '计划中': 'status-pending',
        '已完成': 'status-completed',
        '暂停': 'status-inactive'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Get CSS class for finance payment status
 */
function getFinancePaymentStatusClass(status) {
    const statusMap = {
        '已完成': 'status-completed',
        '审批中': 'status-processing',
        '待审批': 'status-pending',
        '已拒绝': 'status-inactive'
    };
    return statusMap[status] || 'status-default';
}

/**
 * Setup back button functionality
 */
function setupBackButton() {
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // Remove detail page
            const detailPage = document.getElementById('module-detail');
            if (detailPage) {
                detailPage.remove();
            }
            
            // Show the appropriate section based on current active menu
            const activeMenuItem = document.querySelector('.menu-item.active');
            if (activeMenuItem) {
                const sectionId = activeMenuItem.getAttribute('data-section');
                const section = document.getElementById(sectionId);
                if (section) {
                    section.classList.remove('hidden');
                }
            }
        });
    }
}

/**
 * Setup module-specific interactions
 * @param {string} moduleId - The module ID
 */
function setupModuleInteractions(moduleId) {
    // Add event listeners for action buttons in the table
    const actionButtons = document.querySelectorAll('.btn-small');
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.textContent;
            alert(`执行操作: ${action}\n模块: ${moduleId}\n\n这里可以实现具体的业务逻辑。`);
        });
    });
}

/**
 * Handle AI insight action button clicks
 * @param {string} action - The action text
 */
function handleInsightAction(action) {
    console.log(`Handling action: ${action}`);
    
    // Simulate different actions
    switch(action) {
        case 'View Analysis':
            showCostSavingAnalysis();
            break;
        case 'Create Order':
            createInventoryOrder();
            break;
        case 'Review Contracts':
            reviewContracts();
            break;
        default:
            alert(`Action '${action}' would be implemented in the full system.`);
    }
}

/**
 * Show cost saving analysis (simulated)
 */
function showCostSavingAnalysis() {
    // Sample data for cost saving analysis
    const analysisData = {
        currentSupplier: 'ABC Office Supplies',
        currentCost: '$12,500 per quarter',
        suggestedSupplier: 'XYZ Office Solutions',
        projectedCost: '$10,625 per quarter',
        savings: '$1,875 per quarter (15%)',
        qualityRating: '4.8/5.0 (based on 42 reviews)',
        deliveryTime: 'Average 2.3 days (0.5 days faster than current)',
        recommendation: 'Switch to XYZ Office Solutions for office supplies to realize 15% cost savings with comparable quality and improved delivery times.'
    };
    
    // In a real application, this would display in a modal or dedicated view
    // For demo purposes, we'll show an alert with some of the data
    alert(`Cost Saving Analysis:\n\nRecommendation: ${analysisData.recommendation}\n\nCurrent: ${analysisData.currentCost} with ${analysisData.currentSupplier}\nProjected: ${analysisData.projectedCost} with ${analysisData.suggestedSupplier}\nSavings: ${analysisData.savings}`);
}

/**
 * Create inventory order (simulated)
 */
function createInventoryOrder() {
    // Sample data for inventory order
    const orderData = {
        material: 'Raw Material ABC',
        quantity: '500 units',
        supplier: 'Preferred Supplier Inc.',
        unitPrice: '$45.00',
        totalCost: '$22,500.00',
        deliveryDate: '2 weeks from today',
        paymentTerms: 'Net 30',
        status: 'Draft'
    };
    
    // In a real application, this would open an order form pre-filled with this data
    // For demo purposes, we'll show an alert with some of the data
    alert(`Inventory Order Created:\n\nMaterial: ${orderData.material}\nQuantity: ${orderData.quantity}\nSupplier: ${orderData.supplier}\nTotal Cost: ${orderData.totalCost}\nExpected Delivery: ${orderData.deliveryDate}\n\nOrder status: ${orderData.status}`);
}

/**
 * Review contracts (simulated)
 */
function reviewContracts() {
    // Sample data for contracts due for renewal
    const contracts = [
        { supplier: 'Global Logistics Co.', expires: '15 days', value: '$125,000', aiSuggestion: 'Negotiate for 5% volume discount based on increased shipping needs' },
        { supplier: 'Tech Solutions Inc.', expires: '22 days', value: '$85,000', aiSuggestion: 'Request extended support hours at current rate' },
        { supplier: 'Office Supplies Ltd.', expires: '24 days', value: '$32,000', aiSuggestion: 'Consolidate with other stationery orders for better pricing' },
        { supplier: 'Cleaning Services Pro', expires: '28 days', value: '$48,000', aiSuggestion: 'Market research shows rates have decreased by 8% on average' },
        { supplier: 'Security Systems Corp', expires: '30 days', value: '$65,000', aiSuggestion: 'Add new monitoring service at promotional bundled rate' }
    ];
    
    // In a real application, this would display in a dedicated view with actions
    // For demo purposes, we'll show an alert with some of the data
    let message = 'Contracts Due for Renewal:\n\n';
    contracts.forEach(contract => {
        message += `${contract.supplier} - Expires in ${contract.expires}\nValue: ${contract.value}\nAI Suggestion: ${contract.aiSuggestion}\n\n`;
    });
    
    alert(message);
}

/**
 * Initialize charts
 */
function initCharts() {
    console.log('Initializing dashboard charts...');
    initSpendChart();
    initStatusChart();
    initTrendChart();
    initPerformanceChart();
    initInventoryChart();
    initSavingsChart();
}

/**
 * Initialize spend by category chart
 */
function initSpendChart() {
    const ctx = document.getElementById('spend-chart');
    
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['原材料', '设备采购', '服务外包', '办公用品', '物流运输'],
            datasets: [{
                data: [45, 20, 15, 10, 10],
                backgroundColor: [
                    '#3498db',
                    '#2ecc71',
                    '#f1c40f',
                    '#e74c3c',
                    '#9b59b6'
                ],
                borderWidth: 2,
                hoverBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                duration: 1000
            }
        }
    });
}

/**
 * Initialize order status chart
 */
function initStatusChart() {
    const ctx = document.getElementById('status-chart');
    
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['待审批', '处理中', '已发货', '已完成', '已取消'],
            datasets: [{
                label: '订单数量',
                data: [25, 40, 30, 50, 5],
                backgroundColor: [
                    '#f39c12',
                    '#3498db',
                    '#2ecc71',
                    '#27ae60',
                    '#e74c3c'
                ],
                borderColor: [
                    '#e67e22',
                    '#2980b9',
                    '#27ae60',
                    '#229954',
                    '#c0392b'
                ],
                borderWidth: 2,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y + ' 个订单';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e9ecef'
                    },
                    ticks: {
                        color: '#6c757d'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6c757d'
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

/**
 * Initialize monthly trend chart
 */
function initTrendChart() {
    const ctx = document.getElementById('trend-chart');
    
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
            datasets: [{
                label: '采购金额 (万元)',
                data: [120, 135, 128, 145, 152, 148, 165, 158],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#3498db',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }, {
                label: '节约金额 (万元)',
                data: [8, 12, 10, 15, 18, 14, 22, 20],
                borderColor: '#2ecc71',
                backgroundColor: 'rgba(46, 204, 113, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#2ecc71',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e9ecef'
                    },
                    ticks: {
                        color: '#6c757d',
                        callback: function(value) {
                            return value + '万';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6c757d'
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            }
        }
    });
}

/**
 * Initialize supplier performance chart
 */
function initPerformanceChart() {
    const ctx = document.getElementById('performance-chart');
    
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['交付及时性', '产品质量', '价格竞争力', '服务响应', '合规性', '创新能力'],
            datasets: [{
                label: '优秀供应商',
                data: [90, 85, 78, 92, 88, 82],
                borderColor: '#2ecc71',
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderWidth: 2,
                pointBackgroundColor: '#2ecc71',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            }, {
                label: '平均水平',
                data: [75, 70, 85, 68, 72, 65],
                borderColor: '#f39c12',
                backgroundColor: 'rgba(243, 156, 18, 0.2)',
                borderWidth: 2,
                pointBackgroundColor: '#f39c12',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: '#e9ecef'
                    },
                    angleLines: {
                        color: '#e9ecef'
                    },
                    pointLabels: {
                        color: '#6c757d',
                        font: {
                            size: 12
                        }
                    },
                    ticks: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 1200,
                easing: 'easeInOutQuart'
            }
        }
    });
}

/**
 * Initialize inventory status chart
 */
function initInventoryChart() {
    const ctx = document.getElementById('inventory-chart');
    
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['正常库存', '低库存预警', '紧急补货', '过量库存', '待入库'],
            datasets: [{
                data: [45, 25, 15, 10, 5],
                backgroundColor: [
                    'rgba(46, 204, 113, 0.8)',
                    'rgba(243, 156, 18, 0.8)',
                    'rgba(231, 76, 60, 0.8)',
                    'rgba(155, 89, 182, 0.8)',
                    'rgba(52, 152, 219, 0.8)'
                ],
                borderColor: [
                    '#27ae60',
                    '#e67e22',
                    '#c0392b',
                    '#8e44ad',
                    '#2980b9'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    grid: {
                        color: '#e9ecef'
                    },
                    angleLines: {
                        color: '#e9ecef'
                    },
                    ticks: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

/**
 * Initialize cost savings chart
 */
function initSavingsChart() {
    const ctx = document.getElementById('savings-chart');
    
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: '目标节约',
                data: [50, 60, 55, 65],
                backgroundColor: 'rgba(52, 152, 219, 0.6)',
                borderColor: '#3498db',
                borderWidth: 2
            }, {
                label: '实际节约',
                data: [45, 58, 62, 70],
                backgroundColor: 'rgba(46, 204, 113, 0.6)',
                borderColor: '#2ecc71',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y + '万元';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#e9ecef'
                    },
                    ticks: {
                        color: '#6c757d',
                        callback: function(value) {
                            return value + '万';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6c757d'
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

/**
 * Setup AI Assistant functionality
 */
function setupAIAssistant() {
    const aiAssistantBtn = document.getElementById('ai-assistant-btn');
    const aiAssistantDialog = document.getElementById('ai-assistant-dialog');
    const aiAssistantClose = document.getElementById('ai-assistant-close');
    const aiAssistantInput = document.getElementById('ai-assistant-input');
    const aiAssistantSend = document.getElementById('ai-assistant-send');
    const aiAssistantMessages = document.getElementById('ai-assistant-messages');
    
    // Toggle AI Assistant dialog
    aiAssistantBtn.addEventListener('click', function() {
        aiAssistantDialog.classList.toggle('hidden');
        if (!aiAssistantDialog.classList.contains('hidden')) {
            aiAssistantInput.focus();
        }
    });
    
    // Close AI Assistant dialog
    aiAssistantClose.addEventListener('click', function() {
        aiAssistantDialog.classList.add('hidden');
    });
    
    // Send message on button click
    aiAssistantSend.addEventListener('click', function() {
        sendMessage();
    });
    
    // Send message on Enter key
    aiAssistantInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    /**
     * Send user message and get AI response
     */
    function sendMessage() {
        const message = aiAssistantInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addUserMessage(message);
        
        // Clear input
        aiAssistantInput.value = '';
        
        // Process message and get AI response
        setTimeout(() => {
            processUserMessage(message);
        }, 500);
    }
    
    /**
     * Add user message to chat
     * @param {string} message - User message
     */
    function addUserMessage(message) {
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'user-message';
        userMessageElement.innerHTML = `
            <div class="user-message-content">
                <p>${message}</p>
            </div>
        `;
        
        aiAssistantMessages.appendChild(userMessageElement);
        scrollToBottom();
    }
    
    /**
     * Add AI message to chat
     * @param {string} message - AI message
     */
    function addAIMessage(message) {
        const aiMessageElement = document.createElement('div');
        aiMessageElement.className = 'ai-message';
        aiMessageElement.innerHTML = `
            <div class="ai-message-content">
                ${message}
            </div>
        `;
        
        aiAssistantMessages.appendChild(aiMessageElement);
        scrollToBottom();
    }
    
    /**
     * Scroll chat to bottom
     */
    function scrollToBottom() {
        aiAssistantMessages.scrollTop = aiAssistantMessages.scrollHeight;
    }
    
    /**
     * Process user message and generate AI response
     * @param {string} message - User message
     */
    function processUserMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for purchase requisition request
        if (lowerMessage.includes('purchase') && (lowerMessage.includes('requisition') || lowerMessage.includes('request') || lowerMessage.includes('order'))) {
            handlePurchaseRequisition(message);
        }
        // Check for inventory query
        else if (lowerMessage.includes('inventory') || lowerMessage.includes('stock') || lowerMessage.includes('warehouse')) {
            handleInventoryQuery(message);
        }
        // Check for cost information query
        else if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('pricing')) {
            handleCostQuery(message);
        }
        // Check for supplier information query
        else if (lowerMessage.includes('supplier') || lowerMessage.includes('vendor')) {
            handleSupplierQuery(message);
        }
        // Default response
        else {
            addAIMessage(`<p>I'm not sure how to help with that specific request. Could you try rephrasing or choose from one of these options?</p>
                <ul>
                    <li>Create a purchase requisition for [material]</li>
                    <li>Check inventory for [material]</li>
                    <li>Look up cost information for [material]</li>
                    <li>Find information about supplier [name]</li>
                </ul>`);
        }
    }
    
    /**
     * Handle purchase requisition request
     * @param {string} message - User message
     */
    function handlePurchaseRequisition(message) {
        // Extract material name from message if possible
        let material = 'requested items';
        const materialMatch = message.match(/for\s+([\w\s]+)/i);
        if (materialMatch && materialMatch[1]) {
            material = materialMatch[1].trim();
        }
        
        // Generate random requisition number
        const requisitionNumber = 'REQ-' + Math.floor(100000 + Math.random() * 900000);
        
        addAIMessage(`<p>I've created a purchase requisition for <strong>${material}</strong>.</p>
            <p>Requisition details:</p>
            <ul>
                <li><strong>Requisition Number:</strong> ${requisitionNumber}</li>
                <li><strong>Material:</strong> ${material}</li>
                <li><strong>Status:</strong> Draft</li>
                <li><strong>Created By:</strong> John Doe</li>
                <li><strong>Created Date:</strong> ${new Date().toLocaleDateString()}</li>
            </ul>
            <p>Would you like to specify the quantity or add any additional details to this requisition?</p>`);
    }
    
    /**
     * Handle inventory query
     * @param {string} message - User message
     */
    function handleInventoryQuery(message) {
        // Extract material name from message if possible
        let material = 'all materials';
        const materialMatch = message.match(/for\s+([\w\s]+)|of\s+([\w\s]+)|about\s+([\w\s]+)/i);
        if (materialMatch) {
            const match = materialMatch[1] || materialMatch[2] || materialMatch[3];
            if (match) {
                material = match.trim();
            }
        }
        
        // Generate random inventory data
        const quantity = Math.floor(100 + Math.random() * 900);
        const location = ['Warehouse A', 'Warehouse B', 'Warehouse C'][Math.floor(Math.random() * 3)];
        const status = ['In Stock', 'Low Stock', 'Critical Stock'][Math.floor(Math.random() * 3)];
        const reorderPoint = Math.floor(50 + Math.random() * 100);
        
        addAIMessage(`<p>Here's the current inventory information for <strong>${material}</strong>:</p>
            <ul>
                <li><strong>Current Quantity:</strong> ${quantity} units</li>
                <li><strong>Location:</strong> ${location}</li>
                <li><strong>Status:</strong> ${status}</li>
                <li><strong>Reorder Point:</strong> ${reorderPoint} units</li>
                <li><strong>Last Updated:</strong> ${new Date().toLocaleDateString()}</li>
            </ul>
            <p>Would you like to create a purchase requisition for this material?</p>`);
    }
    
    /**
     * Handle cost query
     * @param {string} message - User message
     */
    function handleCostQuery(message) {
        // Extract material name from message if possible
        let material = 'requested material';
        const materialMatch = message.match(/for\s+([\w\s]+)|of\s+([\w\s]+)|about\s+([\w\s]+)/i);
        if (materialMatch) {
            const match = materialMatch[1] || materialMatch[2] || materialMatch[3];
            if (match) {
                material = match.trim();
            }
        }
        
        // Generate random cost data
        const unitCost = (10 + Math.random() * 90).toFixed(2);
        const lastPurchaseDate = new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString();
        const priceChange = (Math.random() * 10 - 5).toFixed(2);
        const priceChangeDirection = priceChange >= 0 ? 'increase' : 'decrease';
        
        addAIMessage(`<p>Here's the cost information for <strong>${material}</strong>:</p>
            <ul>
                <li><strong>Current Unit Cost:</strong> $${unitCost}</li>
                <li><strong>Last Purchase Date:</strong> ${lastPurchaseDate}</li>
                <li><strong>Price Trend:</strong> ${Math.abs(priceChange)}% ${priceChangeDirection} in the last 3 months</li>
                <li><strong>Preferred Supplier:</strong> ${['ABC Suppliers', 'XYZ Corporation', 'Global Materials Inc.'][Math.floor(Math.random() * 3)]}</li>
            </ul>
            <p>Would you like to see historical pricing data or create a purchase requisition?</p>`);
    }
    
    /**
     * Handle supplier query
     * @param {string} message - User message
     */
    function handleSupplierQuery(message) {
        // Extract supplier name from message if possible
        let supplier = 'requested supplier';
        const supplierMatch = message.match(/about\s+([\w\s]+)|for\s+([\w\s]+)|named\s+([\w\s]+)/i);
        if (supplierMatch) {
            const match = supplierMatch[1] || supplierMatch[2] || supplierMatch[3];
            if (match) {
                supplier = match.trim();
            }
        }
        
        // Generate random supplier data
        const rating = (3 + Math.random() * 2).toFixed(1);
        const deliveryTime = Math.floor(2 + Math.random() * 10);
        const activeContracts = Math.floor(1 + Math.random() * 5);
        
        addAIMessage(`<p>Here's the information about supplier <strong>${supplier}</strong>:</p>
            <ul>
                <li><strong>Supplier Rating:</strong> ${rating}/5.0</li>
                <li><strong>Average Delivery Time:</strong> ${deliveryTime} days</li>
                <li><strong>Active Contracts:</strong> ${activeContracts}</li>
                <li><strong>Contact:</strong> ${['John Smith', 'Sarah Johnson', 'Michael Brown'][Math.floor(Math.random() * 3)]}</li>
                <li><strong>Email:</strong> contact@${supplier.toLowerCase().replace(/\s+/g, '')}.com</li>
            </ul>
            <p>Would you like to see the catalog from this supplier or check their performance history?</p>`);
    }
}
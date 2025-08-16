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
    console.log('Charts initialization skipped due to Chart.js loading issues');
    // Skip chart initialization to avoid errors
    // initSpendChart();
    // initStatusChart();
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
            labels: ['Raw Materials', 'Equipment', 'Services', 'Office Supplies', 'Logistics'],
            datasets: [{
                data: [45, 20, 15, 10, 10],
                backgroundColor: [
                    '#3498db',
                    '#2ecc71',
                    '#f1c40f',
                    '#e74c3c',
                    '#9b59b6'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                }
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
            labels: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
            datasets: [{
                label: 'Number of Orders',
                data: [25, 40, 30, 50, 5],
                backgroundColor: '#3498db',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
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
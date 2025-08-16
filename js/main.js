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
 * Show module details (simulated)
 * @param {string} moduleId - The ID of the module
 */
function showModuleDetails(moduleId) {
    console.log(`Showing details for module: ${moduleId}`);
    
    // In a real application, this would load the module's content
    // For demo purposes, we'll show an alert
    alert(`Module ${moduleId} selected. In a full implementation, this would load the module's interface.`);
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
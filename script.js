// 登录表单提交处理
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    // 定义有效的账号密码组合
    const validCredentials = [
        { username: 'admin', password: 'admin123' },
        { username: 'zephyr', password: 'zephyr802' },
        { username: 'swufe', password: 'economics' },
        { username: 'student', password: 'study802' }
    ];
    
    // 验证凭据的函数
    function validateCredentials(username, password) {
        return validCredentials.some(cred => 
            cred.username === username && cred.password === password
        );
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // 验证凭据
            if (validateCredentials(username, password)) {
                // 登录成功，跳转到主页面
                window.location.href = 'main.html';
            } else {
                // 登录失败，显示自定义错误弹窗
                showCustomAlert('账号和密码输入错误！请联系管理员解决');
            }
        });
    }
    
    // 模拟头像点击更换功能
    const avatar = document.getElementById('avatar');
    const headerAvatar = document.getElementById('headerAvatar');
    
    if (avatar) {
        avatar.addEventListener('click', function() {
            // 在实际应用中，这里可以打开文件选择器让用户上传新头像
            alert('点击头像可更换图片\n(此功能在实际应用中会打开文件选择器)');
        });
    }
    
    if (headerAvatar) {
        headerAvatar.addEventListener('click', function() {
            alert('点击头像可更换图片\n(此功能在实际应用中会打开文件选择器)');
        });
    }
    
    // 导航栏点击效果
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems.length > 0) {
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // 如果是资料汇总页面的选项卡导航项，不处理
                if (this.closest('.materials-nav')) {
                    return;
                }
                
                // 移除所有项的active类
                navItems.forEach(navItem => navItem.classList.remove('active'));
                
                // 为当前点击项添加active类
                this.classList.add('active');
                
                // 允许已实现的页面链接正常跳转
                const implementedPages = ['首页', '考情分析', '考录分析', '资料汇总', '考点分析', '招生简章', '专业目录', '参考用书', '费用明细', '初试指南', '复试指南', '复试线', '公共课', '刷题中心', '网站使用说明'];
                
                if (implementedPages.includes(this.textContent)) {
                    // 已实现的页面，允许默认跳转行为
                    return;
                }
                
                // 未实现的页面，阻止默认跳转行为并提示
                e.preventDefault();
                
                // 在实际应用中，这里会根据点击的导航项加载相应内容
                alert(`您点击了"${this.textContent}"，该功能正在开发中`);
            });
        });
    }
    
    // 自定义弹窗功能
    function showCustomAlert(message) {
        const alert = document.getElementById('customAlert');
        const messageElement = document.getElementById('alertMessage');
        const closeButton = document.getElementById('alertClose');
        
        if (alert && messageElement) {
            messageElement.textContent = message;
            alert.style.display = 'block';
            
            // 点击关闭按钮
            if (closeButton) {
                closeButton.onclick = function() {
                    alert.style.display = 'none';
                };
            }
            
            // 点击弹窗外部关闭
            window.onclick = function(event) {
                if (event.target == alert) {
                    alert.style.display = 'none';
                }
            };
            
            // 按Enter键关闭
            alert.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    alert.style.display = 'none';
                }
            });
            
            // 设置焦点到关闭按钮
            if (closeButton) {
                closeButton.focus();
            }
        }
    }
});
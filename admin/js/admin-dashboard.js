(function () {
    var STORAGE_KEY = 'droppoint_admin_sidebar_collapsed';
    var shell = document.querySelector('.dashboard_shell');
    var sidebar = document.getElementById('sidebar');
    var toggle = document.getElementById('sidebar_toggle');

    if (!shell || !sidebar || !toggle) return;

    function applyCollapsed(collapsed) {
        shell.classList.toggle('dashboard_shell--sidebar_collapsed', collapsed);
        toggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
        var expand = collapsed ? 'Expand sidebar' : 'Collapse sidebar';
        toggle.setAttribute('title', expand);
        toggle.setAttribute('aria-label', expand);
        try {
            localStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0');
        } catch (e) {
            /* ignore */
        }
    }

    try {
        if (localStorage.getItem(STORAGE_KEY) === '1') {
            applyCollapsed(true);
        }
    } catch (e) {
        /* ignore */
    }

    toggle.addEventListener('click', function () {
        applyCollapsed(!shell.classList.contains('dashboard_shell--sidebar_collapsed'));
    });
})();

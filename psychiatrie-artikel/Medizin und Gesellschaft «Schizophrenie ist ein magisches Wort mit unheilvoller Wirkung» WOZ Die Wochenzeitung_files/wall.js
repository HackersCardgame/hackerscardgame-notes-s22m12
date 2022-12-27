(function (Drupal, once) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Drupal__default = /*#__PURE__*/_interopDefaultLegacy(Drupal);
    var once__default = /*#__PURE__*/_interopDefaultLegacy(once);

    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    function storageAvailable(type) {
        var storage;

        try {
            storage = window[type];
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max)); // The maximum is exclusive
    };

    function setupSupportWall(elem, options) {
        let title;
        let message;
        let overlay;
        const actionAttribute = "data-wozwall-action";
        function init(options) {
            const bottom_message = document.createElement("span");
            bottom_message.className = "wozwall__bottom_message";
            bottom_message.innerText = options.bottombar.message;

            const show_link = document.createElement("a");
            show_link.className = "wozwall_overlaylink";
            show_link.setAttribute(actionAttribute, "expand");
            show_link.addEventListener("click", function (event) {
                event.stopPropagation();
                event.preventDefault();
                showWall();
            });
            show_link.appendChild(bottom_message);

            overlay = document.createElement('aside');
            overlay.className = "wozwall__overlay";


            const container_collapsed = document.createElement("div");
            container_collapsed.setAttribute("hidden", "true");
            container_collapsed.className = "wozwall__collapsed";
            container_collapsed.appendChild(show_link);
            overlay.appendChild(container_collapsed);

            title = document.createElement("h1");
            message = document.createElement("div");
            message.className = 'wozwall__message';

            function onHideClick(event) {
                event.stopPropagation();
                event.preventDefault();
                hideWall();
            }

            const actions = document.createElement("p");
            actions.className = "wozwall__actions";
            options.actions.forEach(function (item) {
                if (item.href) {
                    var link = document.createElement('a');
                    link.href = item.href;
                    // Prevent event bubbling up to overlay if this is an actual
                    // hyperlink (i.e., if it links to another page). Otherwise fall
                    // through to the overlay (dismiss button).
                    link.addEventListener('click', function (event) {
                        event.stopPropagation();
                        var _paq = window._paq || [];
                        _paq.push(['trackEvent', 'Wall', 'button-' + item.action]);
                    });
                } else {
                    link = document.createElement("button");
                    link.addEventListener("click", onHideClick);
                }
                link.setAttribute(actionAttribute, item.action);
                link.appendChild(document.createTextNode(item.text));
                actions.appendChild(link);
            });

            const container_expanded = document.createElement("div");
            container_expanded.setAttribute("hidden", "true");
            container_expanded.className = "wozwall__expanded";
            container_expanded.appendChild(title);
            container_expanded.appendChild(message);
            container_expanded.appendChild(actions);
            container_expanded.addEventListener('click', hideWall);
            overlay.appendChild(container_expanded);

            // Hide wall with escape key.
            container_expanded.addEventListener('keydown', function (event) {
                event.stopPropagation();
                // https://www.fxsitecompat.dev/en-CA/docs/2018/keydown-and-keyup-events-are-now-fired-during-ime-composition/
                if (event.isComposing || event.keyCode === 229) {
                    return;
                }

                if (event.keyCode === 27) {
                    hideWall();
                }
            });

            elem.appendChild(overlay);
        }


        function showBottombar() {
            overlay.dataset.wozwallExpanded = "false";
        }

        function hideWall() {
            var _paq = window._paq || [];
            _paq.push(['trackEvent', 'Wall', 'overlay-dismiss']);
            showBottombar();
            const main = document.getElementById('main-content');
            if (main) main.focus();
        }


        function showRandomCreative() {
            var idx = getRandomInt(options.creatives.length);
            var creative = options.creatives[idx];
            title.innerHTML = creative.title;
            message.innerHTML = creative.message;
        }

        function showWall() {
            if (!overlay) return;
            showRandomCreative();
            var _paq = window._paq || [];
            _paq.push(['trackEvent', 'Wall', 'overlay-display']);
            overlay.dataset.wozwallExpanded = "true";
            document.querySelector('[data-wozwall-action="subscribe"]').focus();
        }

        init(options);

        // Only show wall on browsers with big enough viewport and where local
        // storage is available.
        if (storageAvailable('localStorage') && options.creatives.length) {
            var limit = parseInt(options.ratelimit);
            var current = parseInt(localStorage.getItem("wozwall.limit"), 10) || limit;
            if (current >= limit) {
                showWall();
            }
            else {
                showBottombar();
            }
            localStorage.setItem("wozwall.limit", String(current - 1));
        }
    }

    Drupal__default["default"].behaviors.wozwall = {
        attach: function (context, settings) {
            if (settings.wozwall) {
                once__default["default"]('wall', 'body', context).forEach(function (element) {
                    setupSupportWall(element, settings.wozwall);
                });
            }
        }
    };

})(Drupal, once);
//# sourceMappingURL=wall.js.map

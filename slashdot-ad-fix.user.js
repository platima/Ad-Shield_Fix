// ==UserScript==
// @name     Slashdot Ad-Shield Fix for Chrome (TamperMonkey)
// @description Use with TamperMonkey in Chrome to prevent the intrusive ad-enfocement that recently appeared on Slashdot
// @version  2025-01-11
// @author   Platima. (Original Daniel Perelman - perelman@aweirdimagination.net)
// @license  MIT
// @icon     https://www.google.com/s2/favicons?sz=64&domain=slashdot.org
// @grant    unsafeWindow
// @run-at   document-start
// @match    *://*.slashdot.org/*
// @match    https://slashdot.org/*
// ==/UserScript==

(function() {
    'use strict';

    const script = document.createElement('script');
    script.textContent = `
        (function() {
            // Store original methods
            const _alert = window.alert;
            const _querySelectorAll = document.querySelectorAll;
            const _createElement = document.createElement;

            // Function to check if an iframe is a full-screen overlay
            function isOverlayIframe(element) {
                if (element.tagName !== 'IFRAME') return false;
                const style = window.getComputedStyle(element);
                return style.position === 'fixed' &&
                       style.width === '100vw' &&
                       style.height === '100vh' &&
                       style.zIndex === '2147483647';
            }

            // Override createElement to block problematic iframes
            document.createElement = new Proxy(_createElement, {
                apply: function(target, thisArg, args) {
                    const element = _createElement.apply(thisArg, args);
                    if (args[0].toLowerCase() === 'iframe') {
                        // Block setting overlay-style attributes
                        const originalSetAttribute = element.setAttribute;
                        element.setAttribute = function(name, value) {
                            if (name === 'style' && value.includes('100vw') && value.includes('fixed')) {
                                return;
                            }
                            return originalSetAttribute.call(this, name, value);
                        };

                        Object.defineProperty(element, 'src', {
                            set: function(value) {
                                if (value && value.includes('error-report.com')) {
                                    return;
                                }
                                return value;
                            },
                            get: function() {
                                return element.getAttribute('src');
                            }
                        });
                    }
                    return element;
                }
            });

            // Override alert globally
            Object.defineProperty(window, 'alert', {
                value: function() { return undefined; },
                writable: false,
                configurable: false
            });

            // Override confirm to always return false for Ad-Shield messages
            const _confirm = window.confirm;
            Object.defineProperty(window, 'confirm', {
                value: function(message) {
                    if (message && message.includes('adblockers')) {
                        return false;
                    }
                    return _confirm.apply(this, arguments);
                },
                writable: false,
                configurable: false
            });

            // Override querySelectorAll
            document.querySelectorAll = new Proxy(_querySelectorAll, {
                apply: function(target, thisArg, args) {
                    if (args[0] === "link,style") {
                        return _querySelectorAll.call(document, "invalid");
                    }
                    return _querySelectorAll.apply(thisArg, args);
                }
            });

            // Block the setInterval that removes styles
            const _setInterval = window.setInterval;
            window.setInterval = new Proxy(_setInterval, {
                apply: function(target, thisArg, args) {
                    const [fn, delay] = args;
                    if (delay === 100 && fn.toString().includes('querySelectorAll')) {
                        return 0;
                    }
                    return _setInterval.apply(thisArg, args);
                }
            });

            // Remove ads and overlay iframes
            function cleanupPage() {
                // Remove ad containers
                const adElements = document.getElementsByClassName('adwrap');
                for (let i = adElements.length - 1; i >= 0; i--) {
                    adElements[i].style.display = 'none';
                    adElements[i].innerHTML = '';
                }

                // Remove overlay iframes and empty iframes
                const iframes = document.getElementsByTagName('iframe');
                for (let i = iframes.length - 1; i >= 0; i--) {
                    const iframe = iframes[i];
                    if (isOverlayIframe(iframe) ||
                        !iframe.src ||
                        iframe.src === '' ||
                        !iframe.getAttribute('src')) {
                        iframe.remove();
                    }
                }
            }

            // Add CSS to ensure iframes can't take up space
            const style = document.createElement('style');
            style.textContent = 'iframe:empty, iframe:not([src]) { display: none !important; height: 0 !important; }';
            document.head.appendChild(style);

            // Run immediately and periodically
            cleanupPage();
            setInterval(cleanupPage, 500);

            // Also run when DOM changes
            const observer = new MutationObserver(() => {
                cleanupPage();
            });
            observer.observe(document.documentElement || document, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['style']
            });
        })();
    `;

    // Insert the script as early as possible
    const insert = () => {
        const parent = document.head || document.documentElement;
        if (parent) {
            parent.insertBefore(script, parent.firstChild);
            script.remove();
        }
    };

    insert();

    // Also try on DOMContentLoaded if needed
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insert);
    }
})();

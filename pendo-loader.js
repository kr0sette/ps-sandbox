export function injectPendoSnippet (env = 'dev') {
    const configs = {
        dev: {
            domain: 'https://cdn.pendo-dev.pendo-dev.com',
            appKey: '73ef7380-0428-4547-5519-3d5ccd84c363'
        },
        prod: {
            domain: 'https://cdn.pendo.io',
            appKey: '350fbc0a-1c51-461a-68f0-6ccaaa3dedf3'
        }
    };
    const chosenAppKey = configs[env].appKey;
    const chosenDomain = configs[env].domain;

    console.log('Pendo Agent Env: ', env);

    return (function (apiKey, domain) {
        (function (p, e, n, d, o) {
            var v, w, x, y, z; o = p[d] = p[d] || {}; o._q = o._q || [];
            v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track']; for (w = 0, x = v.length; w < x; ++w) {
                (function (m) {
                    o[m] = o[m] || function () { o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0))); };
                })(v[w]);
            }
            y = e.createElement(n); y.async = !0; y.src = `${domain}/agent/static/${apiKey}/pendo.js`;
            z = e.getElementsByTagName(n)[0]; z.parentNode.insertBefore(y, z);
        })(window, document, 'script', 'pendo');
    })(chosenAppKey, chosenDomain);
};

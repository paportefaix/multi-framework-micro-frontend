export const registry = {
    angular1: () => import('angular1/web-components'),
    angular2: () => import('angular2/web-components'),
    angular3: () => import('angular3/web-components'),
    react1: () => import('react1/web-components')
};

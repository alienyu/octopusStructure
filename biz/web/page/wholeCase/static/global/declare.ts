declare global {
    interface Window {
        deployConf: any
    }
    const common: any;
    const intl: any;
    const Constants: any;
    const mockGen: any;
    const ajax: any;
    const Loadable: any;
}

const loadGlobalVar = () => {
    window.deployConf = {};
}

export default loadGlobalVar;
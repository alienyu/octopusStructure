declare global {
    interface Window {
        deployConf: any
    }
    const common: any;
    const intl: any;
    const constants: any;
    const mockGen: any;
    const ajax: any;
    const Loadable: any;
}

const loadGlobalVar = () => {
    window.deployConf = {};
}

export default loadGlobalVar;
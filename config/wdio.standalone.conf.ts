import { join } from 'node:path';

export const config: WebdriverIO.Config = {
    // 1. Configurações de Conexão Limpas
    runner: 'local',
    protocol: 'http',
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    
    // 2. Aponta direto para o teste de login a partir da raiz do projeto
    specs: [
        join(process.cwd(), './tests/specs/app.login.spec.ts')
    ],

    // 3. Sem serviços que atrapalhem o Appium manual
    services: [],

    // 4. Capabilities (Seu Emulador)
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android_Carrefour',
        'appium:platformVersion': '15.0',
        'appium:automationName': 'UiAutomator2',
        'appium:orientation': 'PORTRAIT',
        'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp.apk'),
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'wdio:enforceWebDriverClassic': true
    }],

    // 5. Configurações básicas de execução do Mocha (Obrigatórias)
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
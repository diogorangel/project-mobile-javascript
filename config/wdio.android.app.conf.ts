import { join } from "node:path";
import { config as baseConfig } from "./wdio.shared.local.appium.conf.js";

export const config: WebdriverIO.Config = {
    ...baseConfig,
    
    services: [],
    
    // ============
    // Connection (Bypass do parser de Fetch do Windows)
    // ============
    protocol: 'http',
    hostname: '127.0.0.1', // IP explícito sem mapeamento de nome
    port: 4723,
    path: '/',
    
    // 🔥 FORÇA O WEBDRIVERIO A NÃO ENVIAR CABEÇALHOS DUPLEX (Evita UND_ERR_INVALID_ARG no Windows)
    queryParams: {},

    specs: ["../tests/specs/**/app*.spec.ts"],

    capabilities: [
        {
            platformName: "Android",
            "wdio:maxInstances": 1,
            // Alterado para o nome real detectado pelo seu emulador nos logs:
            "appium:deviceName": "Android_Carrefour", 
            "appium:platformVersion": "15.0",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "UiAutomator2",
            "appium:app": join(process.cwd(), './apps/Android-NativeDemoApp.apk'),
            "appium:newCommandTimeout": 240,
            "appium:appWaitActivity": "com.wdiodemoapp.MainActivity",
            
            "wdio:enforceWebDriverClassic": true
        },
    ],
};
import { join } from "node:path";
import { config as baseConfig } from "./wdio.shared.local.appium.conf.js";

export const config: WebdriverIO.Config = {
    ...baseConfig,
    
    
    services: ['appium'],

   
    protocol: 'http',
    hostname: '127.0.0.1', 
    port: 4723,
    path: '/',

    // ====================
    // Framework (Cucumber)
    // ====================
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./tests/step-definitions/**/*.ts'],
        timeout: 60000
    },

    specs: ['../tests/features/**/*.feature'],

    capabilities: [
        {
            platformName: "Android",
            "wdio:maxInstances": 1,
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
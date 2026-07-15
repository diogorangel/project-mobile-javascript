import { join } from "node:path";
import { config as baseConfig } from "./wdio.shared.local.appium.conf.js";

const isGhActions = process.env.GITHUB_ACTION;

export const config: WebdriverIO.Config = {
    ...baseConfig,
    services: ['appium'],
    // ====================
    // Framework (Cucumber)
    // ====================
    // Sobrescreve o Mocha do arquivo base para entender a sintaxe do Gherkin (.feature)
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./tests/step-definitions/**/*.ts'], // Caminho onde ficam as lógicas dos seus testes (mude para .js se não usar TypeScript nos steps)
        timeout: 60000
    },

    // ============
    // Specs
    // ============
    specs: [['../tests/features/**/*.feature']],

    // ============
    // Capabilities
    // ============
    capabilities: [
        {
            platformName: "iOS",
            "wdio:maxInstances": 1,
            "appium:deviceName": "iPhone 16 Pro",
            
            // Versão comentada/removida: o GitHub escolherá a mais atual disponível!
            // "appium:platformVersion": "18.5",
            
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "XCUITest",
            "appium:app": join(
                process.cwd(),
                "apps",
                "ios.simulator.wdio.native.app.v2.0.0.zip"
            ),
            "appium:newCommandTimeout": 240,
            "appium:webviewConnectTimeout": 20 * 1000,
            "appium:additionalWebviewBundleIds": ["*"],
            "appium:maxTypingFrequency": 30,
        },
    ],
};
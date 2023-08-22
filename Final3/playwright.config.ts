import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
    use: {
        viewport: { width: 1280, height: 1024},
        actionTimeout: 10 * 10000,
        navigationTimeout: 15 * 10000
    },
    timeout: 30 * 1000,
    expect: {
        timeout: 30 * 1000,
    },
    workers: 1,
    projects: [
    {
        name: "chrome",
        use: { ...devices["Desktop Chrome"]}
    // },
    // {
    //     name: "firefox",
    //     use: { ...devices["Desktop Firefox"]}
    // },
    // {
    //     name: "Mobile",
    //     use: { ...devices["iPhone 11"]}
    // }
    }
    ]
}
export default config;
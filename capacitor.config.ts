import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.equiptest.app",
  appName: "equip-test",
  webDir: "out",
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;

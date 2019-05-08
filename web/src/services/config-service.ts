import globalAxios from 'axios';

export class ConfigService {
  public static async getConfig(): Promise<any> {
    if (!this.pdawConfig) {
      globalAxios
        .get(ConfigService.configFileName)
        .then(response => (this.pdawConfig = response))
        .catch(error => {
          if (error.response && error.response.status === 404) {
            ConfigService.pdawConfig = ConfigService.defaultConfig;
          }
        });
    }
    while (!ConfigService.pdawConfig) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    return ConfigService.pdawConfig;
  }
  private static configFileName = 'pdaw-config.json';
  private static defaultConfig = { apiBasePath: '' };
  private static pdawConfig: any;
}

import { DefaultApi, Configuration } from './pdaw';
import { ConfigService } from './config-service';

export class ServiceFactory {
  public static getDefaultApi(callback: (api: DefaultApi) => void) {
    ConfigService.getConfig().then(config => {
      const configuration: Configuration = {
        basePath: config.basePath,
      };
      callback(new DefaultApi(configuration));
    });
  }
}

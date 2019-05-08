import { DefaultApi, Configuration } from './pdaw';

export class ServiceFactory {
  static getDefaultApi() {
    const configuration: Configuration = {
      basePath: '',
    };
    return new DefaultApi(configuration);
  }
}

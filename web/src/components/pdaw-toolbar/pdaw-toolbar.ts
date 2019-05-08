import { Component, Vue } from 'vue-property-decorator';
import { ServiceFactory } from '@/services/service-factory';
@Component
export default class PdawToolbar extends Vue {
  public metadata: {
    [key: string]: string;
  } = {};
  constructor() {
    super();
  }
  public mounted() {
    ServiceFactory.getDefaultApi(api => {
      api.getGlobalMetadata().then(it => (this.metadata = it.data));
    });
  }
}

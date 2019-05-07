import { Component, Vue } from 'vue-property-decorator';
import { DefaultApi } from '../../services/pdaw';
@Component
export default class PdawToolbar extends Vue {
  public metadata: {
    [key: string]: string;
  } = {};
  constructor() {
    super();
  }
  public mounted() {
    new DefaultApi().getGlobalMetadata().then(it => {
      this.metadata = it.data;
    });
  }
}

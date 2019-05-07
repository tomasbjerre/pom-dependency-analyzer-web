import { Component, Vue, Prop } from 'vue-property-decorator';
import { DefaultApi } from './services/pdaw';

@Component
export default class App extends Vue {
  metadata: { [key: string]: string } = {};

  constructor() {
    super();
  }

  mounted() {
    new DefaultApi().getGlobalMetadata().then(it => {
      this.metadata = it.data;
    });
  }
}

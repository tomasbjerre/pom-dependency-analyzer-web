import { Component, Vue, Watch } from 'vue-property-decorator';
import { Artifact, Dependency } from '@/services/pdaw';
@Component
export default class PdawGav extends Vue {
  private parsed!: string;

  public constructor() {
    super();
  }
  public getParsed() {
    if (this.parsed) {
      return this.parsed;
    }
    return '';
  }

  //TODO: Make it work!
  @Watch('gavselected', { deep: true })
  public onChildChanged(val: string, oldVal: string) {
    this.parsed = val;
  }
}

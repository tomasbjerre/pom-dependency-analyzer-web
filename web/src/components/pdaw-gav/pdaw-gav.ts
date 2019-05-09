import { Component, Vue, Watch } from 'vue-property-decorator';
@Component
export default class PdawGav extends Vue {
  private parsed!: string;

  public getParsed() {
    if (this.parsed) {
      return this.parsed;
    }
    return '';
  }
}

import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class PdawGav extends Vue {
  @Prop()
  public groupId!: string;

  @Prop()
  public artifactId!: string;

  @Prop()
  public version!: string;
}

import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { ServiceFactory } from '@/services/service-factory';
import { Metadata, Dependency } from '@/services/pdaw';
@Component
export default class PdawGav extends Vue {
  @Prop()
  public groupId!: string;

  @Prop()
  public artifactId!: string;

  @Prop()
  public version!: string;

  public metadata: Metadata[] = [];

  public parsed!: Dependency;

  public dependencies: Dependency[] = [];

  public dependents: Dependency[] = [];

  @Watch('version')
  public versionChanged(newVal: string) {
    ServiceFactory.getDefaultApi(a => {
      a.getMetadata(this.groupId, this.artifactId, this.version).then(
        it => (this.metadata = it.data),
      );
      a.getParsed(this.groupId, this.artifactId, this.version).then(
        it => (this.parsed = it.data),
      );
      a.getDependencies(this.groupId, this.artifactId, this.version).then(
        it => (this.dependencies = it.data),
      );
      a.getDependents(this.groupId, this.artifactId, this.version).then(
        it => (this.dependents = it.data),
      );
    });
  }
}

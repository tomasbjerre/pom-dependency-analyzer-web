import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { ServiceFactory } from '@/services/service-factory';
import { Metadata, Dependency } from '@/services/pdaw';
import TreeView from './tree-view';
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

  public selected(item: any) {
    this.groupId = item.groupId;
    this.artifactId = item.artifactId;
    this.version = item.version;
    this.$router.push(
      '/groupId/' +
        this.groupId +
        '/artifactId/' +
        this.artifactId +
        '/version/' +
        this.version,
    );
  }

  public getDependentsTree(): any[] {
    return new TreeView(this.dependents).getItems();
  }

  public getDependenciesTree(): any[] {
    return new TreeView(this.dependencies).getItems();
  }
}

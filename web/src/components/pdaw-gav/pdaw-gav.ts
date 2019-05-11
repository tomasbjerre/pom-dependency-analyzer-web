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
  public parsedValid = false;

  public dependencies: Dependency[] = [];
  public dependenciesValid = false;

  public dependents: Dependency[] = [];

  @Watch('version')
  public versionChanged(newVal: string) {
    this.parsedValid = false;
    this.dependenciesValid = false;
    ServiceFactory.getDefaultApi(a => {
      a.getMetadata(this.groupId, this.artifactId, this.version).then(
        it => (this.metadata = it.data),
      );
      a.getParsed(this.groupId, this.artifactId, this.version).then(it => {
        this.parsed = it.data;
        this.parsedValid = true;
      });
      a.getDependencies(this.groupId, this.artifactId, this.version).then(
        it => {
          this.dependencies = it.data;
          this.dependenciesValid = true;
        },
      );
      a.getDependents(this.groupId, this.artifactId, this.version).then(
        it => (this.dependents = it.data),
      );
    });
  }

  public selected(item: any) {
    this.$router.push(
      '/groupId/' +
        item.groupId +
        '/artifactId/' +
        item.artifactId +
        '/version/' +
        item.version,
    );
    window.location.reload();
  }

  public getDependentsTree(): any[] {
    return new TreeView(this.dependents).getItems();
  }

  public getDependenciesTree(): any[] {
    return new TreeView(this.dependencies).getItems();
  }
}

import { Component, Vue } from 'vue-property-decorator';
import { ServiceFactory } from '../../services/service-factory';
import PdawGav from '../pdaw-gav/pdaw-gav';
@Component({
  components: {
    PdawGav,
  },
})
export default class PdawSelectGav extends Vue {
  public groupIds: Array<{ text: string }> = [];
  public artifacts: Array<{ text: string }> = [];
  public versions: Array<{ text: string }> = [];
  public selectedGroup: string = '';
  public selectedArtifact: string = '';
  public selectedVersion: string = '';

  public mounted() {
    ServiceFactory.getDefaultApi(api => {
      api.getGroupIds().then(groupResponse => {
        this.groupIds = groupResponse.data.map(group => {
          return {
            text: group.groupId,
          };
        });
        this.selectedGroup = this.$route.params.groupId;
        if (this.selectedGroup) {
          this.onChangeGroup(() => {
            this.selectedArtifact = this.$route.params.artifactId;
            if (this.selectedArtifact) {
              this.onChangeArtifact(() => {
                this.selectedVersion = this.$route.params.version;
              });
            }
          });
        }
      });
    });
  }

  public groupIdSelected() {
    this.$router.push('/groupId/' + this.selectedGroup);
    this.onChangeGroup();
  }

  public artifactIdSelected() {
    this.$router.push(
      '/groupId/' + this.selectedGroup + '/artifactId/' + this.selectedArtifact,
    );
    this.onChangeArtifact();
  }

  public versionSelected() {
    this.$router.push(
      '/groupId/' +
        this.selectedGroup +
        '/artifactId/' +
        this.selectedArtifact +
        '/version/' +
        this.selectedVersion,
    );
  }

  private onChangeGroup(
    callback = () => {
      /** */
    },
  ) {
    this.artifacts = [];
    this.selectedArtifact = '';
    this.versions = [];
    this.selectedVersion = '';
    ServiceFactory.getDefaultApi(api => {
      api.getArtifacts(this.selectedGroup).then(artifactsResponse => {
        this.artifacts = artifactsResponse.data.map(artifact => {
          return {
            text: artifact.artifactId,
          };
        });
        callback();
      });
    });
  }

  private onChangeArtifact(
    callback = () => {
      /** */
    },
  ) {
    this.versions = [];
    this.selectedVersion = '';
    ServiceFactory.getDefaultApi(api => {
      api
        .getVersions(this.selectedGroup, this.selectedArtifact)
        .then(versionsResponse => {
          this.versions = versionsResponse.data.map(version => {
            return {
              text: version.version,
            };
          });
          callback();
        });
    });
  }
}

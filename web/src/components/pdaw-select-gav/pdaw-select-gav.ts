import { Component, Vue, Prop } from 'vue-property-decorator';
import { ServiceFactory } from '../../services/service-factory';
import { Artifact } from '@/services/pdaw';
@Component
export default class PdawSelectGav extends Vue {
  public groupIds: Array<{ text: string }> = [];
  public artifacts: Array<{ text: string }> = [];
  public versions: Array<{ text: string }> = [];
  public selectedGroup: string = '';
  public selectedArtifact: string = '';
  public selectedVersion: string = '';
  constructor() {
    super();
  }
  public onChangeGroup() {
    this.artifacts = [];
    this.versions = [];
    ServiceFactory.getDefaultApi(api => {
      api.getArtifacts(this.selectedGroup).then(artifactsResponse => {
        this.artifacts = artifactsResponse.data.map(artifact => {
          return {
            text: artifact.artifactId,
          };
        });
      });
    });
  }
  public onChangeArtifact() {
    this.versions = [];
    ServiceFactory.getDefaultApi(api => {
      api
        .getVersions(this.selectedGroup, this.selectedArtifact)
        .then(versionsResponse => {
          this.versions = versionsResponse.data.map(version => {
            return {
              text: version.version,
            };
          });
        });
    });
  }
  public onChangeVersion() {
    ServiceFactory.getDefaultApi(api => {
      api
        .getParsed(
          this.selectedGroup,
          this.selectedArtifact,
          this.selectedVersion,
        )
        .then(response => {
          //TODO: Make it work!
          this.$emit('gavselected', response.data.artifactId);
        });
    });
  }
  public mounted() {
    this.selectedGroup = this.$route.params.groupId;

    ServiceFactory.getDefaultApi(api => {
      api.getGroupIds().then(groupResponse => {
        this.groupIds = groupResponse.data.map(group => {
          return {
            text: group.groupId,
          };
        });
      });
    });
  }
}

import { Component, Vue } from 'vue-property-decorator';
import { DefaultApi } from '../../services/pdaw';
@Component
export default class PdawSelectGav extends Vue {
  public groupIds: Array<{ text: string }> = [];
  constructor() {
    super();
  }
  public mounted() {
    new DefaultApi().getGroupIds().then(groupResponse => {
      this.groupIds = groupResponse.data.map(group => {
        return {
          text: group.groupId,
        };
      });
    });
  }
}

import { Component, Vue } from 'vue-property-decorator';
import { ServiceFactory } from '../../services/service-factory';
@Component
export default class PdawSelectGav extends Vue {
  public groupIds: Array<{ text: string }> = [];
  constructor() {
    super();
  }
  public mounted() {
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

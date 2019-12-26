import { withTranslation } from '../src/helpers/i18n';
import ItemViewContainer from '../src/container-components/item-view';
import { fetchItemData } from '../src/store/actions/item';

const Items = props => {
  const { t } = props;
  return <ItemViewContainer />;
};

Items.getInitialProps = async function(context) {
  const { id } = context.query;
  const namespacesRequired = ['common'];
  await context.store.dispatch(fetchItemData(id));
  return { namespacesRequired };
};

export default withTranslation()(Items);

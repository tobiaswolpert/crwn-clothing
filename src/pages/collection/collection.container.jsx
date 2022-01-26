import { connect } from "react-redux";
import withSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import CollectionPage from "./collection.component"

const mapStateToProps = (state) => ({
    isLoading: !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = connect(mapStateToProps)(withSpinner(CollectionPage));

export default CollectionPageContainer
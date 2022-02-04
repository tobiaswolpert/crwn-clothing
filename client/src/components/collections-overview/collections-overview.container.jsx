import { connect } from "react-redux";
import withSpinner from "../with-spinner/with-spinner.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = state => ({
    isLoading: selectIsCollectionFetching(state)
})



const CollectionsOverviewContainer = connect(mapStateToProps)(withSpinner(CollectionsOverview))

export default CollectionsOverviewContainer
import React from 'react';
import { Query } from 'react-apollo';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

// GraphQL Operations
import { GET_COLLECTIONS } from '../../graphql/queries';

const CollectionsOverviewContainer = () => {
  return (
    <Query query={GET_COLLECTIONS}>
      {({ data, loading, error }) => {
        if (loading) return <Spinner />;
        if (error) return <h2>Error: {error.message}</h2>;

        return (
          data &&
          data.collections && (
            <CollectionsOverview collections={data.collections} />
          )
        );
      }}
    </Query>
  );
};

export default CollectionsOverviewContainer;

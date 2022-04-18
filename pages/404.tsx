import { ErrorView } from '@components';
import { Fragment } from 'react';

const NotFoundPage = () => {
  return (
    <Fragment>
      <ErrorView
        title='Sorry !'
        subtitle=" We couldn't load the data for this page"
      />
      ;
    </Fragment>
  );
};

export default NotFoundPage;

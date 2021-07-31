import React from 'react';
import { connect } from 'react-redux';
import { selectDoctorsContent } from '../redux/doctorData/data.selector';
import DoctorsContent from "../components/doctorsContent"
import { withRouter } from 'react-router-dom';

const PortfolioContentPage = ({items}) => {
  return (
    <div className='collection-page max-w-screen-2xl mx-auto'>
      <DoctorsContent {...items} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  items: selectDoctorsContent(ownProps.match.params.itemId)(state)
});

export default withRouter(connect(mapStateToProps, null)(PortfolioContentPage));
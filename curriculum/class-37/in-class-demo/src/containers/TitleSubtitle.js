import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Display from '../components/Display';
import Controls from '../components/Controls';
import { getTitle, getSubtitle } from '../selectors/titleSubtitleSelectors';
import { updateTitle, updateSubtitle } from '../actions/titleSubtitleActions';

const TitleSubtitle = ({ title, subtitle, handleChange }) => (
  <>
    <Controls title={title} subtitle={subtitle} handleChange={handleChange} />
    <Display title={title} subtitle={subtitle} />
  </>
);

TitleSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

const inputFactoryMethod = {
  title: updateTitle,
  subtitle: updateSubtitle
};

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(inputFactoryMethod[target.name](target.value));
    // if(target.name === 'title')
    //   dispatch(updateTitle(target.value));

    // if(target.name === 'subtitle')
    //   dispatch(updateSubtitle(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleSubtitle);

/**
 * @format
 * @flow
 */

import { navigate, goBack } from '@navigation/RootNavigation';
import images from '@res/icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setCity, setProject } from '../search/searchHomeSlice';

function ProjectItem(props) {
  const { item, setProject, project } = props;

  const selectProject = () => {
    setProject(item)
    console.log("selectProject -> item", item)
    goBack()
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={selectProject}
    >
      <Text style={styles.titleProject}>{item.description}</Text>
      {project?.id === item.id && <Image source={images.ic_done} />}
    </TouchableOpacity>
  );
}

const mapStateToProps = (state, ownProps) => {
  return ({
    project: state.search.project
  })
}

const mapDispatch = {
  setProject,
  setCity
}

export default connect(
  mapStateToProps,
  mapDispatch
)(ProjectItem);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#E5E5E5',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  titleProject: {
    fontSize: 17,
    flex: 1
  }
});

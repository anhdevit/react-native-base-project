import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Loading from './Loading';
import PropTypes from 'prop-types';

const defaultPage = {
  PAGESIZE: 5,
  START: 0,
  isFull: false
};

export default class FlatlistCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isRefresh: false
    };

    this.pageSize = defaultPage.PAGESIZE;
    this.start = defaultPage.START;
    this.isFull = defaultPage.isFull;
    this.isLoadMore = false;
  }

  componentDidMount() {
    this.onInitPage();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.forceRefresh) {
      this.onRefresh();
    }
  }

  onRefresh = async () => {
    try {
      const { isRefresh } = this.state;
      const { onCallbackInitPage } = this.props;
      if (!this.isloadMore && !isRefresh) {
        this.pageSize = defaultPage.PAGESIZE;
        this.start = defaultPage.START;
        this.isFull = defaultPage.isFull;
        this.setState({ isRefresh: true });
        const result = this.getData();
        if (result.length < this.pageSize) {
          this.isFull = true;
        }
        onCallbackInitPage(result);
        this.setState({
          isRefresh: false
        });
      }
    } catch (error) {
      this.setState({
        isRefresh: false
      });
    }
  };

  onInitPage = async () => {
    try {
      const { onCallbackInitPage } = this.props;
      this.pageSize = defaultPage.PAGESIZE;
      this.start = defaultPage.START;
      this.isFull = defaultPage.isFull;
      this.setState({ isLoading: true });
      const result = await this.getData();
      if (result.length < this.pageSize) {
        this.isFull = true;
      }
      onCallbackInitPage(result);
      this.setState({
        isLoading: false
      });
    } catch (error) {
      this.setState({
        isLoading: false
      });
    }
  };

  getData = async () => {
    const { getListDataApi } = this.props;
    const response = await getListDataApi(this.start, this.pageSize);
    console.log("FlatlistCustom -> getData -> response", response)
    return response;
  }

  loadMore = async () => {
    try {
      const { isRefresh } = this.state;
      const { callbackLoadMore } = this.props;
      if (!this.isloadMore && !this.isFull && !isRefresh) {
        if (this.start === 0) {
          this.start += this.pageSize + 1;
        } else {
          this.start += this.pageSize;
        }
        this.isloadMore = true;
        const result = await this.getData();

        this.isloadMore = false;
        if (result.response.data.total < this.pageSize) {
          this.isFull = true;
        }
        callbackLoadMore(result);
      }
    } catch (error) {
      this.setState({ isLoading: false });
    }
  };

  renderEmplyListOrError = () => {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <Text style={styles.empty}>Không có kết quả</Text>
      )
    }
    return null
  }

  render() {
    const { isRefresh, isLoading } = this.state;
    const { renderItem, keyExtractor, data } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={data}
          extraData={data.length}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          refreshing={isRefresh}
          onRefresh={this.onRefresh}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={this.renderEmplyListOrError}
        />
        <Loading insideInItem isLoading={isLoading} />
      </View>
    );
  }
}

// FlatlistCustom.propTypes = {
//   onCallbackInitPage: PropTypes.func,
//   getListDataApi: PropTypes.func,
//   callbackLoadMore: PropTypes.func,
//   keyExtractor: PropTypes.func.isRequired,
//   data: PropTypes.array,
//   renderItem: PropTypes,
// };

FlatlistCustom.defaultProps = {
  onCallbackInitPage: () => { },
  getListDataApi: () => { },
  callbackLoadMore: () => { },
  keyExtractor: () => { },
  renderItem: () => { },
  data: [],
};


const styles = StyleSheet.create({
  empty: {
    alignSelf: 'center',
    color: 'gray',
    marginTop: 16,
  }
})

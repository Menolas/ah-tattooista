import React from 'react';
import { connect } from 'react-redux/es/exports';
import { setMyClients, setCurrentPage, setMyClientsTotalCount, setIsFetching } from '../../redux/myClients-reducer';
import MyClients from './MyClients';
import axios from 'axios';
import Preloader from './../common/Preloader';

class MyClientsAPIComponent extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    axios.get(`https://mockend.com/Menolas/ah-tattooista/clients?limit=${this.props.pageSize}&offset=${this.props.currentPage}`)
      .then(response => {
        this.props.setMyClients(response.data);
        axios.get("https://mockend.com/Menolas/ah-tattooista/clients")
          .then(response => {
            this.props.setMyClientsTotalCount(response.data.length);
          });
        this.props.setIsFetching(false);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(currentPage);
    axios.get(`https://mockend.com/Menolas/ah-tattooista/clients?limit=${this.props.pageSize}&offset=${this.props.currentPage}`)
      .then(response => {
        this.props.setMyClients(response.data);
        this.props.setIsFetching(false);
      });
  }
  
  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <MyClients
          myClients={this.props.myClients}
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  };
};
  
let mapStateToProps = (state) => {
  return {
    myClients: state.myClients.myClients,
    totalCount: state.myClients.totalCount,
    pageSize: state.myClients.pageSize,
    currentPage: state.myClients.currentPage,
    isFetching: state.myClients.isFetching,
  };
};

const MyClientsContainer = connect(mapStateToProps,
  {
    setMyClients,
    setCurrentPage,
    setMyClientsTotalCount,
    setIsFetching,
  }
)(MyClientsAPIComponent);

export default MyClientsContainer;

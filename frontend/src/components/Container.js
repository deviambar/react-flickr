import React, {Component} from 'react';
import ImgList from './ImgList';
import axios from 'axios';

class Container extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      apiKey: "be62b8fd6260c4f8f8b4f845623d0257",
      loading: true,
      imgs: [],
      query: this.props.query
    }
  }

  performSearch = (query='Indonesia') => {
    console.log(`http://0.0.0.0:5000/?text=${query}`);
    axios.get(`http://127.0.0.1:5000/?text=${query}`)
      .then(response => {
        console.log(response);
        this.setState({loading:true});
        setTimeout(() => {
          this.setState({
            query: query,
            imgs: response.data.rs.photos.photo,
            loading: false
          })
        }, 150);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    // fetch(`http://0.0.0.0:5000/?text=${query}`, {
    //   method: 'GET',
    //   headers:{'content-type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'}
    // })
    // .then((response) => {
    //   console.log(response);
    //   this.setState({loading:true});
    //     setTimeout(() => {
    //       this.setState({
    //         query: query,
    //         imgs: response,
    //         loading: false
    //       })
    //     }, 150);
    // }   
    // )
    // .catch((error) => {
    //   console.log('Error fetching and parsing data', error);
    // });
  }

  componentWillReceiveProps(props){
    (props.query)
      ? this.performSearch(props.query)
      : this.performSearch(props.match.params.query)
  }
  
  componentWillMount(){
    this.performSearch()
  }

  render() {
    return(
      <div className="photo-container">  
        <h2>{this.state.query}</h2>
        {(this.state.loading) ? <p>Loading...</p> : 
        <ImgList data={this.state.imgs} /> }
      </div>
    )
  } 
}


export default Container;
import React, { Component, Fragment } from 'react'
import Promo from './content/Promo'
import Order from './content/Order'
import Modal from './content/Modal'
import Category from './content/Category'
import Food from './content/Food'

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          category: '0',
          popular: [],
          base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
          item: null,
          order: {},
        }
      }
    
      popularOnChange = (e) => {
        return fetch(`${this.state.base_url}populer?category_id=${e}`,
          {
            method: 'POST',
          })
          .then(response => response.json())
          .then(responseJson => {
            this.setState({
              popular: responseJson.data
            })
          })
          .catch(error => 'error')
      }
    
      handlerModal = (item) => {
        this.setState({
          item: item,
        })
      }
    
      onOrderHandler = data => {
        this.setState({
          order: data
        });
        console.log();
      }



    render() {
    return (
        <Fragment>
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <form className="d-flex">
                            <a href="" className="navbar-brand font-weight-bold">
                                <i class="fas fa-bars"></i>
                                <span className="ml-4">MyKantin</span>
                            </a>
                            <div className="input-group input-group-sm ml-5 mt-1">
                                <span className="input-group-text bg-search"><i className="fas fa-search" aria-hidden="true"></i></span>
                                <input type="text" placeholder="Cari makan bang?" className="form-control bg-search" />
                            </div>
                        </form>
                        <form className="d-flex justify-content-center">
                        <span className><i className="fas fa-heart mr-4 jarak"></i></span>
                        <h6><span className="badge bg-notif mr-4 jarak">3</span></h6>
                            <a href="">
                                <img src="https://image.flaticon.com/icons/png/128/3135/3135715.png" 
                                height="30" 
                                className="rounded-circle" alt=""/>
                            </a>
                        </form>
                    </div>
                </nav>
                <div className="container-fluid mt-4 mb-5">
                    <div className="row">
                        <div className="col-8">
                            <Promo />
                            <Category popular={this.popularOnChange}/>
                            <Food popular={this.state.popular} onShowModal={this.handlerModal}/>
                        </div>
                        <div className="col-4">
                            <Order />
                        </div>
                    </div>
                </div>
                <Modal item={this.state.item} onOrderHandler={this.onOrderHandler}/>
            </div>
        </Fragment>
    );
    }
}
export default Home
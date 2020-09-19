import React, { Component, Fragment } from 'react'
import Modal from './Modal'

class Popular extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
          popular: '',
          item: '',
        };
      }
    
      getAllPopular() {
        return fetch(`${this.state.base_url}populer/all`)
          .then(response => response.json())
          .then(responseJson => {
            this.setState({ popular: responseJson.data });
          })
          .catch(error => 'error')
      }
    
      onClickHandler = e => {
        this.props.onShowModal(e);
      }
    
    
      componentDidMount() {
        this.getAllPopular();
      }
    
      componentDidUpdate(props) {
        if (props.popular !== this.props.popular) {
          this.setState({ popular: this.props.popular });
        }
      }

    render() {
        return (
            <Fragment>
                <div>
                    {/* POPULER */}
                    <div className="judul mt-4 mb-1">
                        <h3 className="font-weight-bold">Populer</h3>
                    </div>
                        <div className="row">
                        {
                          this.state.popular ? this.state.popular.map((item, i) =>
                          <div className="col-sm-4 mt-3">
                              <a href="" className="a-popular" data-toggle="modal" data-target="#pesanModal" onClick={_ => this.onClickHandler(item)}>
                                  <div className="isimakan">
                                      <img src={item.image} class="hoverimg d-block" style={{ width: '100%' }} />
                                      <div className="bottom-left">{item.waktu}</div>
                                  </div>
                              </a>
                              <h6 className="ukuranjudul mt-3">{item.name}</h6>
                              <span className="ukurantext mt-1"><i class="far fa-star"></i> 4.7</span>
                              <span className="ukurantext ml-4">Rp. {item.harga}</span>
                          </div>
                          ) : ''
                          }
                        </div>
                    {/* AKHIR POPULER */}
                    <Modal />
                </div>
            </Fragment>
        );
    }
}
export default Popular
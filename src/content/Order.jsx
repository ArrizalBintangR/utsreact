import React, { Component, Fragment } from 'react'
import Car from './img/car.png'

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
          list: [],
          total: 0,
        };
      }
    
      componentDidUpdate(prevProps) {
        if (prevProps.item !== this.props.item) {
          console.log(this.props.item.pesan);
          console.log(this.props.item.harga);
    
          const total = this.props.item.pesan * this.props.item.harga;
    
          this.setState({
            list: [...this.state.list, this.props.item],
            total: this.state.total + total
          });
          console.log(this.state.total);
        }
      }


    render() {
        return (
            <Fragment>
                <div>
                    <div className="card order">
                        <div className="card-header order"><h3 className="p-0">Pesanan Saya</h3></div>
                        <div className="card-body">
                            {/* KARTU ATM */}
                            <div className="container kartuatm mb-3">
                                <p className="">Arrizal Bintang R</p>
                                <h3 className="mb-4">Rp. 1.000.000,-</h3>
                                <p className="nomorkartu">3 7 5 8 * * * * * * * * 8 9</p>
                            </div>
                            {/* PESANAN */}
                            <table className="font-weight-bold ukurantable">
                                <tbody>
                                    {
                                        this.state.list ? this.state.list.map((item, i) =>
                                        <div key={i} className="items d-flex justify-content-between align-items-center mb-3">
                                            <img src={item.image} width="80" />
                                            <p className="mb-0">{item.pesan}</p>
                                            <p className="mb-0">x</p>
                                            <p className="mb-0">Rp. {item.harga * item.pesan}</p>
                                        </div>
                                        ) : ''
                                    }
                                    <tr>
                                        <th><img src={Car} className="edgeimage mt-2 mb-2 ml-2" height="50" alt="" /></th>
                                        <td colSpan="3"><span className="ml-3 mr-3">Jl. inAjaDulu No. 13, Bekasi</span></td>
                                        <td><span className="text-muted ml-2 mt-2">Gratis</span></td>
                                    </tr>
                                    <tr>
                                        <th><div className="container totaljarak"></div></th>
                                    </tr>
                                    <tr>
                                        <th><span className="mb-2 ml-2">Total :</span></th>
                                        <td colSpan="4"><h3 className="font-weight-bold text-right">Rp. {this.state.total}</h3></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="5">
                                            <button className="btn btn-warning bg-notif btn-block mt-3 pt-3 pb-3">
                                                <span className="sizepesan">Pesan<i class="fas fa-chevron-right ml-5"></i></span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Order
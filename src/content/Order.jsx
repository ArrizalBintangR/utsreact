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
                                    <tr>
                                        <th><img src="https://scootersjungle.com/placentia/wp-content/uploads/sites/4/2018/08/Papa-Johns-Cheese-Pizza-589x414-2.jpg" className="edgeimage mt-4" height="50" alt="" /></th>
                                        <td><span className="ml-3 mr-3 mt-2">3</span></td>
                                        <td><span className="mr-3 mt-2">x</span></td>
                                        <td><span className="mt-2">Cheese Pizza</span></td>
                                        <td><span className="text-muted ml-2 mt-2">Rp 120k</span></td>
                                    </tr>
                                    {/* <tr>
                                        <th><img src="https://s0.bukalapak.com/uploads/content_attachment/0bfe2ac083a1f0bed65e87b5/w-744/foto_ending_jus_mangga.jpg" className="edgeimage mt-4" height="50" alt="" /></th>
                                        <td><span className="ml-3 mr-3 mt-2">2</span></td>
                                        <td><span className="mr-3 mt-2">x</span></td>
                                        <td><span className="mt-2">Jus Mangga</span></td>
                                        <td><span className="text-muted ml-2 mt-2">Rp 14k</span></td>
                                    </tr>
                                    <tr>
                                        <th><img src="https://img-global.cpcdn.com/recipes/7369e12b717fc0e6/751x532cq70/salad-sayur-foto-resep-utama.jpg" className="edgeimage mt-4" height="50" alt="" /></th>
                                        <td><span className="ml-3 mr-3 mt-2">1</span></td>
                                        <td><span className="mr-3 mt-2">x</span></td>
                                        <td><span className="mt-2">Salad Sayur</span></td>
                                        <td><span className="text-muted ml-2 mt-2">Rp 13k</span></td>
                                    </tr> */}
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
                                        <td colSpan="4"><h3 className="font-weight-bold text-right">Rp 147.000</h3></td>
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
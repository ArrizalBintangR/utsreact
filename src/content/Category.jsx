import React, { Component, Fragment } from 'react';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
      categories: '',
    };
  }

  getAllCategories() {
    return fetch(`${this.state.base_url}category/all`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ categories: responseJson.data });
      })
      .catch(error => 'error')
  }


  componentDidMount() {
    this.getAllCategories();
    console.log(this.state.categories);
  }

  onClickHandler = (e) => {
    this.props.popular(e);
  }

  render(){
      return(
          <Fragment>
        <div className="judul mt-4 mb-4">
            <h3 className="font-weight-bold">Kategori</h3>
        </div>
            <div className="kategori pilihan">
            <div className="atas d-flex">
                {
                    this.state.categories ? this.state.categories.map(category =>
                <div className="container p-0 ml-5" key={category.id} onClick={_ => this.onClickHandler(category.id)}>
                    <a href={this.onClickHandler}>
                        <div className="isi">
                            <img src={category.img} class="hoverimg d-block" style={{ width: '100%', filter: 'brightness(50%)' }} alt="..." />
                            <div className="centered">{category.name}</div>
                        </div>
                    </a>
                </div>
                ) : <p></p>
            }
            </div>
        </div>
</Fragment>
      )
    }
}

export default Category
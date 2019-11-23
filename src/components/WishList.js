import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class WishList extends Component {
    
    state = {
        wishLists: []
    }

    async getWishlist(){
        const res = await axios.get('http://localhost:4000/api/wishlist');
        // console.log(res);
        this.setState({wishLists: res.data});
    }

    async componentDidMount(){
        this.getWishlist();
    }

    deleteWishlist = async (id) => {
        // console.log(id);
        await axios.delete('http://localhost:4000/api/wishlist/' + id);
        this.getWishlist();
    }

    render() {
        return (
            
            <div className="row">
                {
                    this.state.wishLists.map(wishlist => (
                        <div className="col-md-4 p-2" key={wishlist._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{wishlist.title}</h5>
                                    <button type="button" className="close" aria-label="Close" onClick={() => this.deleteWishlist(wishlist._id)}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="card-body">
                                    <p className="line-break">{wishlist.list}</p>
                                    <div className="blockquote-footer">
                                        <small className="text-muted"> {wishlist.author}</small>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    <Link className="btn btn-info btn-sm" to={"/edit/" + wishlist._id}>
                                        Editar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

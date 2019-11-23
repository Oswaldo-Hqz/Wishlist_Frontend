import React, { Component } from 'react'
import axios from 'axios';

export default class CreateWishlist extends Component {

    state = {
        users: [],
        userSelected: '',
        title: '',
        list: '',
        editing: false,
        _id: ''
    }

    getUsers = async () => { 
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data.map(user => user.username),
            userSelected: res.data[0].username
        });
    }

    async componentDidMount() {
        this.getUsers();
        // console.log(res.data);
        
        if (this.props.match.params.id) {
            const res = await axios.get("http://localhost:4000/api/wishlist/" + this.props.match.params.id)
            // console.log(res.data);
            
            this.setState({
                title: res.data.title,
                list: res.data.list,
                userSelected: res.data.author,
                editing: true,
                _id: this.props.match.params.id
            })
        }
    }

    onSubmit = async (e) => {
        // console.log(this.state.userSelected, this.state.title, this.state.list);
        e.preventDefault();
        
        const newList ={
            title: this.state.title,
            list: this.state.list,
            author: this.state.userSelected
        }
        
        if (this.state.editing) {
            await axios.put("http://localhost:4000/api/wishlist/" + this.state._id, newList);
        }else{
            await axios.post("http://localhost:4000/api/wishlist", newList);
        }
        // console.log(res);

        window.location.href = "/";
    }

    onInputChange = e => {
        // console.log(e.target.name,e.target.value );
        
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(e.target.value);
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear una Wishlist</h4>

                    {/** Listado de ususario */}
                    <div className="form-group">
                        <select className="form-control" name="userSelected" onChange={this.onInputChange} value={this.state.userSelected}>
                            {
                                this.state.users.map(user => 
                                    <option key={user} value={user} >
                                        {user}
                                    </option> 
                                )
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Titulo" name="title" onChange={this.onInputChange} value={this.state.title} required />
                    </div>

                    <div className="form-group">
                        <textarea name="list" className="form-control" placeholder="Lista de deseos" rows="6" onChange={this.onInputChange} value={this.state.list} required></textarea>
                    </div>

                    <form onSubmit={this.onSubmit}>

                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

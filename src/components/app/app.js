import React, {Component} from 'react';
import './app.css';

import Loader from "../loader";
import Photo from "../photo";
import {photoService} from "../../services";
import ModalWindow from "../modal-window";

class App extends Component{
    state = {
        loading: true,
        photoList: [],
        openedPhoto: null
    };

    componentDidMount() {
        photoService.getAll()
            .then(({data: photoList}) => {
                this.setState({
                    loading: false,
                    photoList
                });
            });
    }

    openPhoto = id => {
        photoService.getPhoto(id)
            .then(({data: openedPhoto}) => {
                this.setState({
                    openedPhoto
                });
            });
    };

    closePhoto = () => {
        this.setState({
            openedPhoto: null
        });
    };

    render(){
        const {loading, photoList, openedPhoto} = this.state;
        return (
            <React.Fragment>
                <header className="header">
                    Фотоальбом
                </header>
                <main className="gallery">
                    {
                        loading
                        ? <Loader/>
                        : photoList.map(({id, url}) => {
                            return <Photo key={id} id={id} url={url} openPhoto={this.openPhoto}/>;
                        })
                    }
                </main>
                <footer className="footer">
                    &copy; 2020
                </footer>
                {
                    openedPhoto
                        ? <ModalWindow photo={openedPhoto}
                                       closeModal={this.closePhoto}
                                       updateComments={this.openPhoto}/>
                        : null
                }
            </React.Fragment>
        );
    }
}

export default App;

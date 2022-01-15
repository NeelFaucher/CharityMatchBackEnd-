import { useState } from 'react';
import axios from 'axios';
import './styles.css';

const Body = () => {

    const [file, setfile] = useState();
    const [fileUploaded, setFileUploaded] = useState(false);

    const [category, setCategory] = useState('');

    const uploadFile = (e) => {
        const data = new FormData();
        data.append('File', file);
        axios.post('googleService/url', {
            body: data
        })
    }

    return (<>
        <div className="header">
            <h1>WELCOME TO CHARITY-FINDER</h1>
        </div>

        <div className="instructionswrapper">
            <div className="tutorial">
                <h2>How does it work?</h2>
                <h4>You have two options, you can either upload an image of your belongings that you wish to donate, or search a category which you want to donate!</h4>
            </div>
        </div>

        <div className="wrapper">
            <div className="searchbar">

                <div className="searchtitle">
                    <h2>SEARCHBAR</h2>
                </div>

                <form className="example">
                    <input type="text" placeholder="Search.." name="search" onChange={(e) => setCategory(e.target.value)} />
                    <button type="submit"><i className="fa fa-search">Search</i></button>
                </form>

            </div>
            <div className="upload">

                <div className="uploadtitle">
                    <h2>UPLOAD</h2>
                </div>

                <form className="upload-submit" onSubmit={uploadFile}>
                    <input className="browsebtn" type="file" id="myFile" name="filename" onChange={(e) => {
                        setfile(e.target.files[0]);
                        setFileUploaded(true);
                        console.log(fileUploaded);
                    }} />
                    <label htmlFor="myFile">Select file</label>
                    <button type="submit" >Upload File</button>
                </form>


            </div>
        </div>
    </>
    )
}

export default Body;
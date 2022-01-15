import './styles.css';

const Body = () => {
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

                <form className="example" action="">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><i className="fa fa-search">Search</i></button>
                </form>

            </div>
            <div className="upload">

                <div className="uploadtitle">
                    <h2>UPLOAD</h2>
                </div>

                <form className="upload-submit" action="">
                    <input className="browsebtn" type="file" id="myFile" name="filename" />
                    <label htmlFor="myFile">Select file</label>
                    <input className="submitbtn" id="submitQuery" type="submit" />
                    <label htmlFor="submitQuery">Upload File</label>
                </form>


            </div>
        </div>
    </>
    )
}

export default Body;
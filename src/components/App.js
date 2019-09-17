import React from 'react';
import axios from "axios";
import './App.css';
import NavBar from './NavBar/NavBar';
import EmployeesList from './EmployeesList/EmployeesList';
import EditModal from './modals/EditModal';
import AddModal from './modals/AddModal';
import ModalContextProvider from '../contexts/ModalContext';

class App extends React.Component {

  state = {
    data: null
  };

  fetchData = () => {
    axios
      .get("https://ciccc-mern-stack-app.herokuapp.com/api/employees")
      .then(response => {
        console.log("response", response);
        this.setState({
          data: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchData();

    axios
      .get("https://ciccc-mern-stack-app.herokuapp.com/api/employees")
      .then(response => {
        console.log("response componentDidMount", response);
      });
  }

  postData = newPost => {
    console.log('postnew', newPost);
    axios
      .post("https://ciccc-mern-stack-app.herokuapp.com/api/employees", {
        body: newPost
      })
      .then(response => {
        this.fetchData();
      })
      .catch(err => {
        console.log(err);
      });

    fetch("https://ciccc-mern-stack-app.herokuapp.com/api/employees", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        let currentData = this.state.data;
        currentData.push(json);
        this.setState({
          data: currentData
        });
        this.fetchList();
      });
  };

  deleteData = (checked) => {
    fetch("https://ciccc-mern-stack-app.herokuapp.com/api/employees", {
      method: "delete",
      body: JSON.stringify({
        checked: checked
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        let currentData = this.state.data;
        currentData.push(json);
        this.setState({
          data: currentData
        });
        this.fetchList();
      })
      .then(json => console.log("deletedData", json));
  };

  updateData = (checked, name, email, address, phone) => {
    fetch("https://ciccc-mern-stack-app.herokuapp.com/api/employees", {
      method: "PUT",
      body: JSON.stringify({
        checked: checked,
        name: name,
        email: email,
        address: address,
        phone: phone
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        let currentData = this.state.data;
        currentData.push(json);
        this.setState({
          data: currentData
        });
        this.fetchList();
      })
      .then(json => console.log("updatedData", json));
  };

  render() {
   
    const { data } = this.state;
    if (!data) return <div>Loading......</div>; 

    return (
      <div className="app-area">
        <ModalContextProvider>
          <NavBar />
          <EmployeesList data={data} />
          <EditModal />
          <AddModal postData={this.postData}/>
        </ModalContextProvider>
      </div>
    );
  }
}

export default App;

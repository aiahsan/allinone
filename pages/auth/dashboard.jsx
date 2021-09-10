import React from "react";
import { db } from "../../util/firebase";
import { collection, addDoc } from "firebase/firestore";
import { query, getDocs } from "firebase/firestore";

import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import DataTable from "../../components/datatale";
import { getAuth, signOut } from "firebase/auth";
import { Navbar, Nav } from "react-bootstrap";
export default function dashboard() {
  const [users, setusers] = React.useState([]);
  const [subscribers, setsubscribers] = React.useState([]);
  const [experiencerequests, setexperiencerequests] = React.useState([]);
  const auth = getAuth();

  React.useEffect(() => {
    const getuser = localStorage.getItem("user");

    if (getuser == null) {
      location.replace("/auth");
    } else {
      (async () => {
        const q = query(collection(db, "users"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          users.push(doc.data());
        });
        querySnapshot.docs.length > 0 ? setusers([...users]) : null;
      })();
      (async () => {
        const q = query(collection(db, "emails"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          subscribers.push(doc.data());
        });
        querySnapshot.docs.length > 0 ? setsubscribers([...subscribers]) : null;
      })();

      (async () => {
        const q = query(collection(db, "firstclass"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          experiencerequests.push(doc.data());
        });
        querySnapshot.docs.length > 0
          ? setexperiencerequests([...experiencerequests])
          : null;
      })();
    }
  }, []);

  const columns = [
    {
      name: "Email",
      selector: (row) => row.email,
    },
  ];
  const columns1 = [
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
  ];
  const columns2 = [
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Interested",
      selector: (row) => row.interested,
    },
    {
      name: "Message",
      selector: (row) => row.message,
    },
    {
      name: "Budget",
      selector: (row) => row.budget,
    },
  ];
  const handleLogOut = () => {
    localStorage.removeItem("user");

    signOut(auth);
    location.replace("/auth");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          {" "}
          <img src="/img/logom1.png" className="mr19 logo-nav" alt="" />
          <img src="/img/font1.png" className=" logo-nav1" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto"></Nav>
          <Nav className="m-auto"></Nav>
          <Nav className="">
            <button
              onClick={handleLogOut}
              className="btn btn-sign-up fw500 fs18 lh27"
            >
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <h1 className="fw600 fs32 lh75 mt-4"> Admin Dashboard</h1>

        <div className="mt-5">
          <div className="row m-0">
            <div class="col-md-4 mt-5">
              <div className="fearture-box mr-no-0 m-auto">
                <div className="svg-p bg-svg-2 ">
                  <FaUsers size={45} color="white" />
                </div>
                <h3 className="fs16 lh24 mt-2">Total Users</h3>
                <h2 className="fw600 fs30 lh45">{users.length}</h2>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div className="fearture-box mr-no-0 m-auto">
                <div className="svg-p bg-svg-1 ">
                  <HiUsers color="white" size={45} />
                </div>
                <h3 className="fs16 lh24 mt-2">Total Subscribers</h3>

                <h2 className="fw600 fs30 lh45">{subscribers.length}</h2>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div className="fearture-box mr-no-0 m-auto">
                <div className="svg-p bg-svg-3 ">
                  <BsFillChatSquareQuoteFill color="white" size={45} />
                </div>
                <h3 className="fs16 lh24 mt-2">Total Requests</h3>

                <h2 className="fw600 fs30 lh45">{experiencerequests.length}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row m-0">
            <div className="col-md-6">
              <DataTable
                columns={columns}
                data={subscribers}
                title="Subscribers"
              />
            </div>
            <div className="col-md-6">
              <DataTable columns={columns1} data={users} title="Users" />
            </div>
          </div>
        </div>
        <div className="row m-0 mt-5">
          <div className="col-md-12">
            <DataTable
              columns={columns2}
              data={experiencerequests}
              title="Experience Requests"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

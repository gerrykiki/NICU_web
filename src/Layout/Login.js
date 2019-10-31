import React, { Component } from 'react';
import { Button } from 'antd';
import { Redirect } from 'react-router-dom'
import { Input ,Icon} from 'antd'


class Loginview extends Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        const account = document.getElementById("account").value;
        const password = document.getElementById("password").value;
        const data = {
            "account": account,
            "password": password
        }
        var token = null;
        if (data.account === "gerrykiki" && data.password === "210599") {
            token = 123456787654345676543;
            sessionStorage.setItem('Logindata', token);
        }

        // setter
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        const login = sessionStorage.getItem('Logindata');
        console.log(login)
        if (login !== null) {
            return <Redirect from={"/login"} to={"/nicu"} />
        }
        // else if (login !== null) {
        //     return <Redirect from={"/login"} to={"/nicu"} />
        // }
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", background: 'linear-gradient(to bottom, rgba(195, 239, 255, 1), rgba(46, 100, 164, 1))' }}>
                {this.renderRedirect()}
                <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                    <div style={{ color: "white", fontSize: "26px", textAlign: "center", width: "100%" }}>台北榮民總醫院 NICU智慧醫療系統</div>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ width: "350px", height: "250px", borderRadius: "4px", backgroundColor: "white", textAlign: "center", padding: '25px', position: "relative" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ height: "32px", width: "32px", borderRadius: "2px", backgroundColor: "rgba(46,100,164,1)", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>L</div>
                                <Input id="account" style={{ marginLeft: "20px" }} placeholder="請輸入帳號"></Input>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "25px" }}>
                                <div style={{ height: "32px", width: "32px", borderRadius: "2px", backgroundColor: "rgba(46,100,164,1)", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>P</div>
                                <Input type="password" id="password" style={{ marginLeft: "20px" }} placeholder="請輸入密碼"></Input>
                            </div>
                            <Button style={{ width: "280px", backgroundColor: "rgba(46, 100, 164, 1)", color: "white", marginTop: "70px" }} onClick={this.setRedirect}>登入</Button>
                        </div>
                        <Icon type="up-circle" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Loginview
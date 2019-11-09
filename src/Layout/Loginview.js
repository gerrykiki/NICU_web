import React, { Component } from 'react';
import { Button } from 'antd';
import { Redirect } from 'react-router-dom'
import { Input } from 'antd'
import { dev_path } from '../API/Apidata'

class Loginview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            permission: true,
            statusstring: null
        }
        this.setRedirect = this.setRedirect.bind(this);   //把元件中的this繫結到handleClick方法中，這樣就會保持this一致          
    };
    setRedirect = () => {
        const account = document.getElementById("account").value;
        const password = document.getElementById("password").value;
        const data = { username: account, password: password }
        console.log(JSON.stringify(data))
        // fetch(dev_path + "/authenticate", {
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     mode: 'cors',
        //     headers: new Headers({
        //         'Content-Type': 'application/json',
        //     })
        // }).then(res => {
        //     if (res.ok) {
        //         sessionStorage.setItem('Logindata', data.token);
        //         this.setState({
        //             redirect: true
        //         })
        //     }
        //     else {
        //         this.setState({
        //             permission: false
        //         })
        //     }
        // }).catch(error => {
        //     this.setState({
        //         permission: false
        //     })
        // })
        const fetchRequest = (url, params = {}, timeout = 10000) => {
            let isTimeout = false;
            return new Promise(function (resolve, reject) {
                const TO = setTimeout(function () {
                    isTimeout = true;
                    reject(new Error('Fetch timeout'));
                }, timeout);

                fetch(url, params)
                    .then(res => {
                        clearTimeout(TO)
                        if (!isTimeout) {
                            resolve(res)
                        }
                    }).catch(e => {
                        if (isTimeout) {
                            return
                        }
                        reject(e)
                    })
            })
        }

        fetchRequest(dev_path + "/authenticate", null, 10000)
            .then(res => {
                if (res.ok) {
                    sessionStorage.setItem('Logindata', data.token);
                    this.setState({
                        redirect: true
                    })
                }
                else {
                    this.setState({
                        permission: false,
                        statusstring: "帳號密碼錯誤"
                    })
                }
            }).catch(e => {
                console.log(e)
                this.setState({
                    permission: false,
                    statusstring: "網路異常"
                })
            })

    }
    renderRedirect = () => {
        const login = sessionStorage.getItem('Logindata');
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
                            <div style={{ display: this.state.permission ? "none" : "block", color: "red", fontSize: "1rem" }}>{this.state.statusstring}</div>
                        </div>
                    </div>
                    <div style={{ width: "100%", justifyContent: "center", alignItems: "center", display: "flex" }}>191102.001-T</div>
                </div>
            </div>
        );
    }
}

export default Loginview
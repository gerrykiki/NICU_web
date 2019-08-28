import React, { Component } from 'react'

class Table extends Component {
    TableStyle(gridstate) {
        const gas = (
            <div style={{ marginTop: "10px" }}>
                <div style={{ backgroundColor: "rgba(255, 249, 237, 1)", display: 'grid', gridTemplateColumns: "1fr 5fr", height: '50px' }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>時間</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Gas</div>
                </div>
                <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
                    <div style={{ display: 'grid', gridTemplateColumns: "1fr 5fr", height: '80px' }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                            <div>
                                <div>06/24</div>
                                <div>16:00</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>123</div>
                    </div>
                </div>
            </div>
        )
        const xRay = (
            <div style={{ marginTop: "10px" }}>
                <div style={{ backgroundColor: "rgba(255, 249, 237, 1)", display: 'grid', gridTemplateColumns: "1fr 2fr", height: '50px' }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>時間</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>X-ray Image</div>
                </div>
                <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
                    <div style={{ display: 'grid', gridTemplateColumns: "1fr 2fr", height: '80px' }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                            <div>
                                <div>06/24</div>
                                <div>16:00</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>123</div>
                    </div>
                </div>
            </div>
        )
        const Breath = (
            <div style={{ marginTop: "10px" }}>
                <div style={{ backgroundColor: "rgba(255, 249, 237, 1)", display: 'grid', gridTemplateColumns: "1fr 3fr 6fr", height: '50px' }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>時間</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Mode</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Setting</div>
                </div>
                <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
                    <div style={{ display: 'grid', gridTemplateColumns: "1fr 9fr", height: '80px' }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                            <div>
                                <div>06/24</div>
                                <div>16:00</div>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateRows: '1fr 1fr' }}>
                            <div style={{ display: "grid", gridTemplateColumns: '3fr 6fr' }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>123</div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>123</div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", width: "100%",paddingLeft:"10px" }}>123</div>
                        </div>
                    </div>
                </div>
            </div>
        )
        switch (gridstate) {
            case "Gas":
                return gas
            case "Breath":
                return Breath
            case "xRay":
                return xRay
            default:
                return null
        }
    }
    render() {
        const { gridcount } = this.props
        const table = this.TableStyle(gridcount)
        return table
    }
}

export default Table;
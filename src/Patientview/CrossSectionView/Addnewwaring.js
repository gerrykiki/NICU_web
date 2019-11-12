import React, { Component } from 'react';
import {Input,Button,DatePicker} from 'antd'

class Addwarningsetting extends Component {
    render() {
        return (
            <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "10px" }}>
                    <div style={{ display: "grid", gridTemplateRows: "100px 150px 150px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr", border: "1px rgba(238,238,238,1) solid" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "1px rgba(238,238,238,1) solid" }}>HR</div>
                            <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
                                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Button type="primary">預設值</Button>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr", border: "1px rgba(238,238,238,1) solid" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "1px rgba(238,238,238,1) solid" }}>ABP</div>
                            <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
                                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>SBP圖表範圍:</div>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>DBP圖表範圍:</div>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Button type="primary">預設值</Button>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr", border: "1px rgba(238,238,238,1) solid" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "1px rgba(238,238,238,1) solid" }}>NBP</div>
                            <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
                                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Button type="primary">預設值</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateRows: "100px 150px 150px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr", border: "1px rgba(238,238,238,1) solid" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "1px rgba(238,238,238,1) solid" }}>SPO2</div>
                            <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
                                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Button type="primary">預設值</Button>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr", border: "1px rgba(238,238,238,1) solid" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "1px rgba(238,238,238,1) solid" }}>BT</div>
                            <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
                                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Button type="primary">預設值</Button>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr", border: "1px rgba(238,238,238,1) solid" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "1px rgba(238,238,238,1) solid" }}>RR</div>
                            <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
                                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Button type="primary">預設值</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr", marginTop: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>設定生效時間:</div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <DatePicker style={{ width: "97%" }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Addwarningsetting
import React, { Component } from 'react';
import { Button, Form, FormControl, Tabs, Tab, Container } from 'react-bootstrap';

const HP_W = 5.08;
const U_H = 44.45;

class Convertor extends Component {
    state = { 
        hp: 0,
        hp_mm: 0,
        hp_in: 0,
        u: 3,
        u_mm: 133.35,
        u_in: 5.25,
     }

     handleOnHpChange = (evt) =>{
        this.setState({hp: evt.target.value});
        const hp_mm = (evt.target.value * HP_W).toFixed(2);
        const hp_in = (evt.target.value * HP_W / 25.4).toFixed(2);
        this.setState({hp_mm});
        this.setState({hp_in});
    }

    handleOnHpMmChange = (evt) =>{
        this.setState({hp_mm: evt.target.value});
        const hp = Math.ceil(evt.target.value / HP_W);
        const hp_in = (evt.target.value / 25.4).toFixed(2);
        this.setState({hp});
        this.setState({hp_in});
    }

    handleOnHpInChange = (evt) =>{
        this.setState({hp_in: evt.target.value});
        const hp = Math.ceil(evt.target.value / HP_W);
        const hp_mm = (evt.target.value * 25.4).toFixed(2);
        this.setState({hp});
        this.setState({hp_mm});
    }

    handleOnUChange = (evt) =>{
        this.setState({u: evt.target.value});
        const u_mm = (evt.target.value * U_H).toFixed(2);
        const u_in = (evt.target.value * U_H / 25.4).toFixed(2);
        this.setState({u_mm});
        this.setState({u_in});
    }

    handleOnUMmChange = (evt) =>{
        this.setState({u_mm: evt.target.value});
        const u = Math.ceil(evt.target.value / U_H);
        const u_in = (evt.target.value / 25.4).toFixed(2);
        this.setState({u});
        this.setState({u_in});
    }

    handleOnUInChange = (evt) =>{
        this.setState({hp_in: evt.target.value});
        const u = Math.ceil(evt.target.value / U_H);
        const u_mm = (evt.target.value * 25.4).toFixed(2);
        this.setState({u});
        this.setState({u_mm});
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="bg-dark text-light p-3 mb-4">
                    <h1>Eurorack Unit/HP Convertor</h1>
                </div>
                <Container>
                <Tabs defaultActiveKey="HP" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="HP" title="HP">
                        <Form>
                            <Form.Group className="mb-3" controlId="formHp">
                                <Form.Label>Horizontal Pitch</Form.Label>
                                <Form.Control type="number" placeholder="" min="0" value={this.state.hp} onChange={e => this.handleOnHpChange(e)}/>
                                <Form.Text className="text-muted">
                                    The number of Horizontal Pitch Units
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formHpMm">
                                <Form.Label>Millimeters</Form.Label>
                                <Form.Control type="number" min="0" placeholder="" value={this.state.hp_mm} onChange={e => this.handleOnHpMmChange(e)}/>
                                <Form.Text className="text-muted">
                                    Width in Millimeters
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formHpIn">
                                <Form.Label>Inches</Form.Label>
                                <Form.Control type="number" min="0" placeholder="" value={this.state.hp_in} onChange={e => this.handleOnHpInChange(e)}/>
                                <Form.Text className="text-muted">
                                    Width in Inches
                                </Form.Text>
                            </Form.Group>
                        </Form>

                    </Tab>
                    <Tab eventKey="Units" title="Units">
                        <Form>
                            <Form.Group className="mb-3" controlId="formU">
                                <Form.Label>Eurorack Units</Form.Label>
                                <Form.Control type="number" placeholder="" min="0" value={this.state.u} onChange={e => this.handleOnUChange(e)}/>
                                <Form.Text className="text-muted">
                                    The number of Horizontal Pitch Units
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formUMm">
                                <Form.Label>Millimeters</Form.Label>
                                <Form.Control type="number" min="0" placeholder="" value={this.state.u_mm} onChange={e => this.handleOnUMmChange(e)}/>
                                <Form.Text className="text-muted">
                                    Width in Millimeters
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formUIn">
                                <Form.Label>Inches</Form.Label>
                                <Form.Control type="number" min="0" placeholder="" value={this.state.u_in} onChange={e => this.handleOnUInChange(e)}/>
                                <Form.Text className="text-muted">
                                    Width in Inches
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Tab>
                </Tabs>
                </Container>
            </React.Fragment>
         );
    }
}
 
export default Convertor;
import React, { Component } from "react";
import { Form, Tabs, Tab, Container, Row, Col, Alert } from "react-bootstrap";

const HP_W = 5.08;
const U_H = 44.45;
const HP_OFFSET = 0.34;

class Convertor extends Component {
  state = {
    hp: 0,
    hp_mm: 0,
    hp_in: 0,
    hp_mm_avg: 0,
    hp_in_avg: 0,
    u: 3,
    u_mm: 133.35,
    u_in: 5.25,
    showInches: false,
  };

  setHpMeasurements = (hp, mm) => {
    const hp_mm = mm;
    const hp_in = (mm / 25.4).toFixed(2);
    var newHp = Number((hp * HP_W - HP_OFFSET).toFixed(1));
    const hp_mm_avg = newHp;
    const hp_in_avg = (newHp / 25.4).toFixed(2);
    this.setState({ hp });
    this.setState({ hp_mm });
    this.setState({ hp_in });
    this.setState({ hp_mm_avg });
    this.setState({ hp_in_avg });
  };

  getHPMinus3Measurement = () => {
    const mm = Number(((this.state.hp - 3) * HP_W).toFixed(2));
    return this.state.showInches ? Number((mm / 25.4).toFixed(2)) : mm;
  };

  handleOnShowInchesChanged = () => {
    this.setState({ showInches: !this.state.showInches });
  };

  handleOnHpChange = (evt) => {
    const hp = evt.target.value;
    const mm = (evt.target.value * HP_W).toFixed(2);
    this.setHpMeasurements(hp, mm);
  };

  handleOnHpMmChange = (evt) => {
    const mm = Number(evt.target.value);
    const hp = Math.ceil((mm + HP_OFFSET) / HP_W);
    this.setHpMeasurements(hp, mm);
  };

  handleOnHpInChange = (evt) => {
    const inch = evt.target.value;
    const mm = Number((inch * 25.4).toFixed(2));
    const hp = Math.ceil((mm + HP_OFFSET) / HP_W);
    console.log(inch, hp, mm);
    this.setHpMeasurements(hp, mm);
  };

  handleOnUChange = (evt) => {
    this.setState({ u: evt.target.value });
    const u_mm = (evt.target.value * U_H).toFixed(2);
    const u_in = ((evt.target.value * U_H) / 25.4).toFixed(2);
    this.setState({ u_mm });
    this.setState({ u_in });
  };

  handleOnUMmChange = (evt) => {
    this.setState({ u_mm: evt.target.value });
    const u = Math.ceil(evt.target.value / U_H);
    const u_in = (evt.target.value / 25.4).toFixed(2);
    this.setState({ u });
    this.setState({ u_in });
  };

  handleOnUInChange = (evt) => {
    this.setState({ u_in: evt.target.value });
    const u = Math.ceil((evt.target.value * 25.4) / U_H);
    const u_mm = (evt.target.value * 25.4).toFixed(2);
    this.setState({ u });
    this.setState({ u_mm });
  };

  render() {
    return (
      <React.Fragment>
        <div className="bg-dark text-light p-3 mb-4">
          <div className="row">
            <div className="col-8">
              <h1>Eurorack Unit/HP Convertor</h1>
            </div>
            <div className="col-4">
              <div className="social">
                <ul>
                  <li>
                    <a
                      title="GitHub"
                      className="social-icon"
                      href="https://github.com/gcoulby"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="svg-inline--fa fa-github fa-w-16"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="github"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      title="Website"
                      className="social-icon"
                      href="https://grahamcoulby.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="globe"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        className="svg-inline--fa fa-globe fa-w-16 fa-3x"
                      >
                        <path
                          fill="currentColor"
                          d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                          className=""
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Container>
          <Alert variant="secondary">
            The mechanical specifications are derived from the Eurorack{" "}
            <a href="http://www.doepfer.de/a100_man/a100m_e.htm" target="_blank" rel="noopener noreferrer">
              mechanical specifications set by Doepfer.
            </a>
          </Alert>
          <Tabs defaultActiveKey="HP" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="HP" title="HP">
              <div className="mt-4 mb-2" style={{ width: "270px" }}>
                <label class="switch">
                  <input
                    id="inch-toggle"
                    type="checkbox"
                    checked={this.state.showInches}
                    onChange={(e) => this.handleOnShowInchesChanged(e)}
                  />
                  <span class="slider round"></span>
                </label>
                <label for="inch-toggle">&nbsp;Show Measurements in Inches</label>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formHp">
                  <Form.Label>Horizontal Pitch</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder=""
                    min="0"
                    value={this.state.hp}
                    onChange={(e) => this.handleOnHpChange(e)}
                  />
                  <Form.Text className="text-muted">The number of Horizontal Pitch Units</Form.Text>
                </Form.Group>
                {this.state.showInches ? (
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formHpIn">
                        <Form.Label>Inches</Form.Label>
                        <Form.Control
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder=""
                          value={this.state.hp_in}
                          onChange={(e) => this.handleOnHpInChange(e)}
                        />
                        <Form.Text className="text-muted">Width in Inches</Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formUIn">
                        <Form.Label>Panel Size (in)</Form.Label>
                        <Form.Control
                          type="number"
                          min="0"
                          placeholder=""
                          value={this.state.hp_in_avg}
                          disabled={true}
                        />
                        <Form.Text className="text-muted">
                          Average Panel Size = (HP * 0.2) - 0.01338583 (to 1 decimal place)
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formHpMm">
                        <Form.Label>Millimeters</Form.Label>
                        <Form.Control
                          type="number"
                          min="0"
                          step="0.1"
                          placeholder=""
                          value={this.state.hp_mm}
                          onChange={(e) => this.handleOnHpMmChange(e)}
                        />
                        <Form.Text className="text-muted">Width in Millimeters</Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formUIn">
                        <Form.Label>Panel Size (mm)</Form.Label>
                        <Form.Control
                          type="number"
                          min="0"
                          placeholder=""
                          value={this.state.hp_mm_avg}
                          disabled={true}
                        />
                        <Form.Text className="text-muted">
                          Average Panel Size = (HP * 5.08) - 0.34 (to 1 decimal place)
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                )}
              </Form>

              <div id="panel">
                {this.state.hp < 10 ? (
                  <React.Fragment></React.Fragment>
                ) : (
                  <React.Fragment>
                    <div id="panel-measure-line-2" className="panel-measure-line panel-measure-line-vert"></div>
                    <div id="panel-hole-tr" className="panel-hole"></div>
                    <div id="panel-hole-br" className="panel-hole"></div>
                    <p id="hole-spacing" className="panel-text text-center">
                      &emsp;<span className="arrow">←</span>&emsp;&emsp; {this.getHPMinus3Measurement()} &emsp;&emsp;
                      <span className="arrow">→</span>
                    </p>
                  </React.Fragment>
                )}
                <div id="panel-border"></div>
                <div id="panel-measure-line-0" className="panel-measure-line panel-measure-line-vert"></div>
                <div id="panel-measure-line-1" className="panel-measure-line panel-measure-line-vert"></div>
                <div id="panel-measure-line-3" className="panel-measure-line panel-measure-line-hor"></div>
                <div id="panel-measure-line-4" className="panel-measure-line panel-measure-line-hor"></div>
                <div id="panel-measure-line-5" className="panel-measure-line panel-measure-line-hor"></div>
                <div id="panel-measure-line-6" className="panel-measure-line panel-measure-line-hor"></div>
                <div id="panel-hole-tl" className="panel-hole"></div>
                <div id="panel-hole-bl" className="panel-hole"></div>

                <p id="top-measurement" className="panel-text">
                  <span className="arrow">↓</span> {this.state.showInches ? "5.059" : "128.5"}{" "}
                  <span className="arrow">↓</span>
                </p>
                <p id="top-measurement-2" className="panel-text">
                  <span className="arrow">↑</span> {this.state.showInches ? "4.940" : "125.5"}{" "}
                  <span className="arrow">↑</span>
                </p>
                <p id="top-hole-measurement" className="panel-text">
                  {this.state.showInches ? "0.118" : "3.0"} <span className="arrow">↕</span>
                </p>
                <p id="bottom-hole-measurement-v" className="panel-text">
                  {this.state.showInches ? "0.118" : "3.0"} <span className="arrow">↕</span>
                </p>
                <p id="bottom-hole-measurement-h" className="panel-text">
                  {this.state.showInches ? "0.295" : "7.5"} <span className="arrow">↔</span>
                </p>
                <p id="hole-diameter" className="panel-text">
                  d = {this.state.showInches ? "0.125" : "3.2"}
                </p>
                <p id="bottom-measurement" className="panel-text">
                  <span className="arrow">↑</span> {this.state.showInches ? "5.059" : "128.5"}{" "}
                  <span className="arrow">↑</span>
                </p>
                <p id="panel-width" className="panel-text">
                  MODULE WIDTH: {this.state.showInches ? this.state.hp_in_avg : this.state.hp_mm_avg}{" "}
                </p>
              </div>
              <br />

              <br />
              <br />
            </Tab>
            <Tab eventKey="Units" title="Units">
              <div className="mt-4 mb-2" style={{ width: "270px" }}>
                <label class="switch">
                  <input
                    id="inch-toggle"
                    type="checkbox"
                    checked={this.state.showInches}
                    onChange={(e) => this.handleOnShowInchesChanged(e)}
                  />
                  <span class="slider round"></span>
                </label>
                <label for="inch-toggle">&nbsp;Show Measurements in Inches</label>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formU">
                  <Form.Label>Eurorack Units</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder=""
                    min="0"
                    value={this.state.u}
                    onChange={(e) => this.handleOnUChange(e)}
                  />
                  <Form.Text className="text-muted">The number of Horizontal Pitch Units</Form.Text>
                </Form.Group>
                {this.state.showInches ? (
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formUIn">
                        <Form.Label>Inches</Form.Label>
                        <Form.Control
                          type="number"
                          min="0"
                          placeholder=""
                          value={this.state.u_in}
                          onChange={(e) => this.handleOnUInChange(e)}
                        />
                        <Form.Text className="text-muted">Width in Inches</Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formUIn">
                        <Form.Label>Inches</Form.Label>
                        <Form.Control
                          type="number"
                          min="0"
                          placeholder=""
                          value={(this.state.u_in - 0.1909449).toFixed(2)}
                          disabled={true}
                        />
                        <Form.Text className="text-muted">Width in Inches</Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formUMm">
                        <Form.Label>Millimeters</Form.Label>
                        <Form.Control
                          type="number"
                          min="0"
                          placeholder=""
                          value={this.state.u_mm}
                          onChange={(e) => this.handleOnUMmChange(e)}
                        />
                        <Form.Text className="text-muted">Width in Millimeters</Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formUMm">
                        <Form.Label>Millimeters</Form.Label>
                        <Form.Control
                          type="number"
                          min="0"
                          placeholder=""
                          value={(this.state.u_mm - 4.85).toFixed(2)}
                          disabled={true}
                        />
                        <Form.Text className="text-muted">Width in Millimeters</Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                )}
              </Form>
            </Tab>
          </Tabs>
        </Container>
      </React.Fragment>
    );
  }
}

export default Convertor;

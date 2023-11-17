import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { baseURL } from "../utils/constant";
import { useTranslation } from "react-i18next";
import PlaceHolder from "../components/spinner/placeholder";
import { startOfWeek } from '../FunctionsGlobal/StartDateFn';
import ReactToPrint from 'react-to-print';
import ListTotalLedger from "./ListTotalLedger";
function TotalLedger(){
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const[ledger,setLedger]=useState([]);
    const { t, i18n } = useTranslation();
    const startDateRef = useRef(startOfWeek());
    const endDateRef = useRef(startOfWeek());
    const componentRef = useRef();
    const notrunningDateRef=useRef(startOfWeek());
    const processList = () => {
        
        setIsLoading(true);

        return (
            axios.get(`${baseURL}/city/totalledger`, { params: {fromdate: startDateRef.current.value, todate: endDateRef.current.value,notrundate:notrunningDateRef.current.value } }).then((res) => {
                setLedger(res.data)
                console.log(res.data)
                setIsLoading(false);
            })
                .catch(error => {
                    console.log("error=", error);
                    setErrorMessage(t('erroressagelinechecking'));
                    setIsLoading(false);
                })
        )
    }
    const handlePrint = () => {
        window.print()
    }
    const renderTotalLedgerList=(
        <Row ref={componentRef}>
            <ListTotalLedger totalledger={ledger} datefrom={startDateRef.current.value} dateto={endDateRef.current.value} notrunningdate={notrunningDateRef.current.value} />
        </Row>
    )
    return (
        <Container>
            <Row>
                <Form>
                    <Row >
                        <Col md={3} className="rounder bg-white">
                            <Form.Group>
                                <Form.Label>{t('startdate')}</Form.Label>
                                <Form.Control type="date" ref={startDateRef}  defaultValue={startOfWeek()} />
                            </Form.Group>
                        </Col>
                        <Col md={3} className="rounder bg-white">
                            <Form.Group>
                                <Form.Label>{t('enddate')}</Form.Label>
                                <Form.Control type="date" ref={endDateRef}  defaultValue={startOfWeek()} />
                            </Form.Group>
                        </Col>
                        <Col md={3} className="rounder bg-white">
                            <Form.Group>
                                <Form.Label>{t('notrunningdate')}</Form.Label>
                                <Form.Control type="date" ref={notrunningDateRef}  defaultValue={startOfWeek()} />
                            </Form.Group>
                        </Col>
                        <Col md={3} className="rounder bg-white">
                        </Col>
                    </Row>
                    <Row className="rounded bg-white text-center">
                        <div className="col-md-6 mb-4 " >
                            <Button variant="primary" size="lg" type="button" className="text-center" onClick={processList} >
                                {t('processbuttonlabel')}
                            </Button>{' '}
                        </div>
                        <div className="col-md-6 mb-4 ">
                            <ReactToPrint trigger={() => (
                                <Button variant="primary" size="lg" type="button" className="text-center" >
                                    {t('printbutton')}
                                </Button>

                            )}
                                content={() => componentRef.current} />
                        </div>
                    </Row>
                    {isLoading ? <PlaceHolder /> : renderTotalLedgerList}
                    {errorMessage && <div className="error">{errorMessage}</div>}



                </Form>
            </Row>
        </Container>
    )
}
export default TotalLedger;
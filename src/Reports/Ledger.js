import React, { Fragment } from 'react'
import { Container, Row, Col, Form, Table } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import { dateFormatdd } from '../FunctionsGlobal/StartDateFn'
var first = [];
var arr1 = Array.from(Array(12).keys());
var arr2 = Array.from({ length: 13 }, (_, i) => i + 12)
function Ledger({ loanno, ledger, company, date }) {
    let totalamount = 0;
    const { t, i18n } = useTranslation();

    var serialno = 0;
    var records = ledger

    function TablesRows(no, date, income, weekno) {

        return (
            <tr>
                <td style={{fontSize:"11px"}}>{date !== "" ? dateFormatdd(date) : ""}</td>
                <td style={{fontSize:"11px"}}>{no == 1 && weekno == "" ? income : no}</td>
                <td style={{fontSize:"11px"}}>{no == 1 && weekno == "" ? "" : income}</td>
                <td style={{fontSize:"11px"}}>{no == 1 && weekno != "" ? income : ""}</td>
                <td style={{fontSize:"11px"}}>{no == 1 && weekno != "" || date == "" ? "" : totalamount}</td>
                <td style={{fontSize:"11px"}}>{weekno}</td>
            </tr>
        )
    }

    if (loanno !== "") {

        first = records.length > 0 ? ledger[0] : "";

        totalamount = first.totalamount;
        if (first.weekcount === 12) {
            arr1 = Array.from(Array(12).keys());
            arr2 = [];
        }
        else if (first.weekcount === 32) {
            arr1 = Array.from(Array(16).keys());
            arr2 = Array.from({ length: 16 }, (_, i) => i + 16)
        }
        else if (first.weekcount === 42) {
            arr1 = Array.from(Array(21).keys());
            arr2 = Array.from({ length: 21 }, (_, i) => i + 21)
        }
        else if (first.weekcount === 43) {
            arr1 = Array.from(Array(21).keys());
            arr2 = Array.from({ length: 22 }, (_, i) => i + 21)
        }
        else if (first.weekcount === 25) {
            arr1 = Array.from(Array(12).keys());
            arr2 = Array.from({ length: 13 }, (_, i) => i + 12)

        }
        else if (first.weekcount === 24) {
            arr1 = Array.from(Array(12).keys());
            arr2 = Array.from({ length: 12 }, (_, i) => i + 12)

        }
        else if (first.weekcount === 20) {
            arr1 = Array.from(Array(10).keys());
            arr2 = Array.from({ length: 10 }, (_, i) => i + 12)

        }
        else if (first.weekcount === 11) {
            arr1 = Array.from(Array(11).keys());
            arr2 = Array.from({ length: 0 }, (_, i) => i + 12)

        }

    }

    return (

        
                <Container className="rounded bg-white">
                    <Row className="justify-content-sm-center">
                        <Form>
                            
                            <Row className='mt-5'>
                                <Col className="rounded bg-white col-sm-3 fixed fw-bold">
                                    {t('ledger')}
                                </Col>
                                <Col className="rounded bg-white col-sm-5 fixed fw-bold">
                                    {company}
                                </Col>
                                <Col className="rounded bg-white col-sm-4 fixed fw-bold">
                                    {t('date') + ':' + dateFormatdd(date)}
                                </Col>
                            </Row>
                            <Row>
                                <hr style={{
                                    color: '#000000',
                                    backgroundColor: '#000000',
                                    height: .5,
                                    borderColor: '#000000'
                                }} />
                            </Row>
                            <Row className='p-3'>
                                <Col className='col-sm-3 fixed' style={{ outline: '1px solid orange', borderRadius: ' 30px 30px 30px 30px' }}>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('customer')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.customer : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('fathername')}&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.fathername : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('address')}&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.address : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('city')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.referencecity : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('work')}&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.work : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('phoneno')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.mobileno : ""}</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col className='col-sm-3 fixed' style={{ outline: '1px solid orange', borderRadius: ' 30px 30px 30px 30px' }}>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('week')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.weekcount : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('line')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.lineno : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('weekno')}&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.weekno : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('bookno')}&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.bookno : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('document')}&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.document : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('cheque')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.cheque : ""}</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col className='col-sm-3 fixed' style={{ outline: '1px solid orange', borderRadius: ' 30px 30px 30px 30px' }}>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('loanno')}&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;<h5>{ledger.length > 0 ? first.loannumber : ""}</h5></Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('startdate')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? dateFormatdd(first.startdate) : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('givendate')}&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? dateFormatdd(first.givendate) : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('enddate')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? dateFormatdd(first.finisheddate) : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('lineman')}&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.linemanname : ""}</Form.Label>
                                    </Form.Group>

                                </Col>
                                <Col className='col-sm-3 fixed' style={{ outline: '1px solid orange', borderRadius: ' 30px 30px 30px 30px' }}>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('givenamount')}&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.givenamount : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('documentcharge')}&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.documentamount : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('interest')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.interestamount : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('total')}&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.totalamount : ""}</Form.Label>
                                    </Form.Group>
                                    <Form.Group border="primary" >
                                        <Form.Label>{t('due')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Form.Label>
                                        <Form.Label>&nbsp;{ledger.length > 0 ? first.dueamount : ""}</Form.Label>
                                    </Form.Group>

                                </Col>
                            </Row>
                        </Form>
                    </Row>
                    <Row>
                        <hr className='m-3' style={{
                            color: '#000000',
                            backgroundColor: '#000000',
                            height: .5,
                            borderColor: '#000000'
                        }} />
                    </Row>

                    <Row style={{paddingLeft:"5px"}}>
                        <Container className='col-sm-6 col-md-6'>
                                    <Table className="table text-center table-bordered border-dark  " >
                                        <thead>
                                            <tr >
                                                <th className="col-sm-3 col-md-3">
                                                    {t('date')}
                                                </th>
                                                <th className="col-sm-2 col-md-2">
                                                    {t('dueno')}
                                                </th>
                                                <th className="col-sm-3 col-md-3">
                                                    {t('credit')}
                                                </th>
                                                <th className="col-sm-3 col-md-3">
                                                    {t('balance')}
                                                </th>
                                                <th className="col-sm-3 col-md-3 text-end">{t('loanamount')}</th>
                                                <th className="col-sm-2 col-md-2 text-end">{t('weekno')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                ledger && ledger.length > 0
                                                    ?
                                                    (ledger.slice(0, arr1.length).map((ledgerr) => {
                                                        serialno = serialno + 1;
                                                        totalamount = totalamount - parseInt(ledgerr["joined"].collectedamount);
                                                        //totalamount=ledgerr.collectedamount;

                                                        return (

                                                            <Fragment>
                                                                {TablesRows(serialno, ledgerr.receiptdate, ledgerr["joined"].collectedamount, ledgerr["joined"].weekno)}
                                                                {serialno == 1 ? TablesRows(serialno, first.startdate, "", "") : ""}
                                                            </Fragment>
                                                        )
                                                    })
                                                    )

                                                    :
                                                    t('nodatas')
                                            }
                                            {


                                                arr1.slice(ledger.length, (arr1.length)).map((i) => {
                                                    serialno = serialno + 1;
                                                    return (
                                                        TablesRows(serialno, "", "", "")
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                        </Container>

                        <Container className='col-sm-6 col-md-6 p-0'>
                                    <Table className="table  text-center table-bordered border-dark  " >
                                        <thead>
                                            <tr >
                                                <th className="col-sm-3 col-md-3">
                                                    {t('date')}
                                                </th>
                                                <th className="col-sm-2 col-md-2">
                                                    {t('dueno')}
                                                </th>
                                                <th className="col-sm-3 col-md-3">
                                                    {t('credit')}
                                                </th>
                                                <th className="col-sm-3 col-md-3">
                                                    {t('balance')}
                                                </th>
                                                <th className="col-sm-3 col-md-3 text-end">{t('loanamount')}</th>
                                                <th className="col-sm-2 col-md-2 text-end">{t('weekno')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                ledger.length > (arr1.length) ?
                                                    ledger.slice(arr1.length, ledger.length).map((ledg) => {
                                                        serialno = serialno + 1;
                                                        totalamount = totalamount - parseInt(ledg["joined"].collectedamount);
                                                        return (
                                                            TablesRows(serialno, ledg.receiptdate, ledg["joined"].collectedamount, ledg["joined"].weekno)
                                                        )
                                                    })
                                                    :
                                                    arr2.slice(0, (arr1.length + 1)).map((i) => {
                                                        serialno = serialno + 1;
                                                        return (
                                                            TablesRows(serialno, "", "", "")
                                                        )
                                                    })

                                            }
                                            {(ledger.length > arr1.length) ?
                                                //arr2.slice(ledger.length - arr2.length - 1, (arr1.length+1)-(ledger.length - arr2.length)).map((i) => {
                                                arr2.slice(ledger.length - (arr2.length - 1), arr2.length).map((i) => {
                                                    serialno = serialno + 1;
                                                    return (
                                                        TablesRows(serialno, "", "", "")
                                                    )
                                                })
                                                : ""}
                                        </tbody>
                                    </Table>
                                </Container>
                            
                    </Row>
                </Container>
                
            

        
    )

}
export default Ledger;
import React, { useState, useEffect } from 'react';
import {
    Container, Col, Form, Row, InputGroup,
    Input, InputGroupAddon, Button
} from 'reactstrap';
import { API } from '../managers/api/ApiManager';
import { FormatPointsSupensive, funRenderSpinner } from '../managers/helpers/HelperManager';
import { useGlobal } from '../managers/store/Context';


const SearchHeaderComponent = () => {

    const [state, dispatch] = useGlobal();
    const [getSearch, setSearch] = useState([]);
    const [getLoading, setLoading] = useState(false);
    const [getChangeInput, setChangeInput] = useState("");



    useEffect(() => {
        setSearch(state.searchProducts);
    }, [state.searchProducts]);


    const funSearch = async e => {
        e.preventDefault();
        setLoading(true)
        if (getChangeInput !== "") {
            const resSearch = await API.GET.RetrieveProductFromSearch(localStorage.getItem("city"), getChangeInput);
            console.log(resSearch);
            if (resSearch) {
                dispatch({ type: "SEARCH_PRODUCT", searchProducts: resSearch.message.referencias });
                setSearch(resSearch.message.referencias);
            }
        }
        setLoading(false)
    }


    return (
        <>
            <Container >
                <Row className="mt-4 mb-1" >
                    <Col md={2} xs={12}>
                        <a href="/">
                            <img alt="la economia" src="/assets/logo_economia.png" className="logo-header" />
                        </a>
                    </Col>
                    <Col md={10} xs={12}>
                        <Form  onSubmit={e => funSearch(e)}>
                            <Row>
                                <Col md={11} xs={10}>
                                    <InputGroup>
                                        <Input
                                            placeholder={'¿Qué está buscando?'}
                                            className={`header-input${getChangeInput === "" ? '-border' : ''}`}
                                            onChange={e => setChangeInput(e.target.value)}
                                        />
                                        {getChangeInput !== "" &&
                                            <div className="content-search" >
                                                {/* <hr /> */}
                                                <Container>
                                                    <Row className="content-row-collapsible mt-3">
                                                        <Col md={4} className="content-search-border-rigth collapsible-col">
                                                            {getLoading && funRenderSpinner("sm")}
                                                            {!getLoading > 0 && getSearch.map((item, i) => {
                                                                return (
                                                                    <div className="mt-3" key={i}>

                                                                        <div className="panel-group " id={"accordion" + i}>
                                                                            <div className="panel panel-default">
                                                                                <div className="panel-heading ">
                                                                                    <h4 className="panel-title ">
                                                                                        <a href={`/droguery/${btoa(item.codigo)}`}>
                                                                                            {FormatPointsSupensive(item.descripcion)}
                                                                                        </a>
                                                                                        {/* <a title={item.descripcion} data-toggle="collapse" data-parent={"#accordion" + i} href={"#collapse" + i} className="collapsible-search">
                                                                                            {FormatPointsSupensive(item.descripcion)}
                                                                                        </a> */}
                                                                                    </h4>
                                                                                </div>
                                                                                <div id={"collapse" + i} className="panel-collapse collapse in">
                                                                                    <ul className="list_category">
                                                                                        <li ><a href="/" >en Drogueria</a></li>
                                                                                        <li ><a href="/" >en Cuidado de la piel</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </Col>
                                                        <Col md={4} className="content-search-border-rigth collapsible-col">
                                                            <p className="mb-2">MARCAS RELACIONADAS</p>
                                                            <ul style={{ padding: 0 }}>
                                                                <li>
                                                                    <a href="/">
                                                                        Aspirina
                                                                </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        Aspirina
                                                                </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        Aspirina
                                                                </a>
                                                                </li>

                                                            </ul>
                                                        </Col>
                                                        <Col md={4} className="collapsible-col">
                                                            <p className="mb2">CATEGORÍAS RELACIONADAS</p>
                                                            <ul style={{ padding: 0 }}>
                                                                <li>
                                                                    <a href="/">
                                                                        Lo más buscado
                                                                </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        Promociones del mes
                                                                </a>
                                                                </li>
                                                            </ul>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        }
                                    </InputGroup>
                                </Col>
                                <Col md={1} xs={2}>
                                    <InputGroupAddon addonType="append">
                                        <Button
                                            className="btn-search-header">
                                            <i className="fas fa-search"></i>
                                        </Button>
                                    </InputGroupAddon>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const SearchMedicineComponent = () => {
    return (
        <>
            <Container>
                <Row className="text-center mt-5">
                    <Col md={12}>
                        <h5>INGRESA EL NOMBRE DEL MEDICAMENTO</h5>
                        <InputGroup>
                            <Input
                                maxLength={100}
                                placeholder={'Buscar...'}
                                className="medicine-input" />
                            <InputGroupAddon addonType="append">
                                <i className="fas fa-search ico-search-medicine"></i>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col md={12}>
                        <div className="text-justify mt-4">

                            <h2>DOLEX</h2>
                            <a href="/">
                                <h5 style={{ color: '#1b42cb' }}>
                                    GLAXOSMITHKLINE
                            </h5>
                            </a>

                            <h6>
                                Tabletas-Tabletas recubiertas
                        </h6>

                            <p>
                                <em>Analgésico. Antipirético.</em>
                            </p>

                            <br />
                            <h6>
                                Composición.
                        </h6>
                            <p>
                                Cada tableta y cada tableta recubierta contiene acetaminofén 500 mg. Excipientes: Tabletas: Almidón de maíz, almidón pregelatinizado, povidona, sorbato de potasio, talco, ácido esteárico. Tabletas recubiertas: Almidón de maíz, almidón pregelatinizado, povidona, sorbato de potasio, talco, ácido esteárico, hypromelosa, triacetina, agua purificada.
                        </p>
                            <br />
                            <h6> Farmacología.</h6>
                            <p>
                                DOLEX es un analgésico-antipirético de reconocida eficacia terapéutica; actúa por inhibición de la síntesis de prostaglandinas a nivel del sistema nervioso central, y a diferencia de los AINEs tiene un bajo efecto inhibitorio de la síntesis periférica de éstas.
                        </p>
                            <br />
                            <h6>
                                Farmacocinética.
                        </h6>
                            <p>
                                Luego de una dosis oral DOLEX se absorbe completamente por difusión pasiva alcanzando concentraciones terapéuticas entre los primeros 30-60 minutos. Su unión a proteínas es escasa a concentraciones terapéuticas, el volumen de distribución está comprendido en un rango entre los 0,8 y 1,4 L/kg de peso. Tiene un tiempo de vida media de 1-4 horas el cual no se afecta por lesión renal. Más del 90% de la dosis terapéutica se metaboliza por conjugación hepática y los metabolitos son eliminados por vía renal.
                        </p>
                            <br />
                            <h6>
                                Indicaciones.
                        </h6>
                            <p>
                                Control del dolor leve a moderado y tratamiento del estado febril. Cefalea. Odinofagia. Dolor dental. Dolor muscular. Dolor postraumático. Otalgia. Dolor neurálgico. Dolor postquirúrgico. Dolores y fiebre asociados al resfriado común. Otros estados febriles o dolorosos.
                        </p>
                            <br />
                            <h6>
                                Dosificación.
                        </h6>
                            <p>
                                Adultos: 1-2 tabletas cada 4-6 horas. Dosis máxima diaria: Es de 8 tabletas (4000 mg) cada 24 horas. El intervalo mínimo de administración es de 4 horas. Cuando sea necesario repetir la dosis cada 4 horas, debe administrarse únicamente 1 tableta. No exceda la dosis máxima recomendada. Niños 6-11 años: ½ - 1 tableta cada 4-6 horas. Dosis máxima diaria: 60 mg/kg de peso por día (24 horas) divididas en dosis de 10-15 mg/kg. No administrar por más de 3 días sin indicación médica. Niños menores de 6 años: No se recomienda. No debe administrarse simultáneamente con otros productos que contengan acetaminofén. No ingerir si el papel del sobre está roto.
                        </p>
                            <br />
                            <h6>
                                Contraindicaciones.
                        </h6>
                            <p>
                                Hipersensibilidad al acetaminofén o a los excipientes.
                        </p>
                            <br />
                            <h6>
                                Embarazo y lactancia.
                        </h6>
                            <p>
                                Los datos disponibles no indican ninguna contraindicación para el uso de DOLEX en embarazo y lactancia. Los estudios con acetaminofén en humanos y animales no han identificado riesgo para el embarazo, la lactancia o el desarrollo embrio-fetal. El acetaminofén cruza la barrera placentaria y se excreta en la leche materna pero no en cantidades clínicamente significativas.
                        </p>
                            <br />
                            <h6>
                                Efectos secundarios.
                        </h6>
                            <p>
                                Muy raros. en todos los casos  1/10.000:Trombocitopenia, anafilaxis, reacciones de hipersensibilidad cutánea incluyendo rash en piel, angioedema y síndrome de Stevens-Johnson. Broncoespasmo en pacientes sensibles al ácido acetil-salicílico y otros AINEs. Disfunción hepática.
                        </p>
                            <br />
                            <h6>
                                Precauciones.
                        </h6>
                            <p>
                                El uso crónico de alcohol incrementa el riesgo de lesión hepática. No tome este producto por más de 10 días para el dolor o por más de tres días para la fiebre a menos que sea indicado por un médico. Si el dolor o la fiebre persisten o empeoran, o si se presentan nuevos síntomas como edema o enrojecimiento consulte a su médico. En pacientes con diagnóstico previo de enfermedad hepática o renal, debe existir una evaluación médica antes de iniciar el tratamiento. El uso regular diario y prolongado de acetaminofén puede potencializar el efecto anticoagulante de la warfarina y otras cumarinas, incrementando el riesgo de sangrado. Dosis ocasionales no tienen efectos significativos. Manténgase el producto fuera del alcance de los niños.
                        </p>
                            <br />
                            <h6>
                                Conservación.
                        </h6>
                            <p>
                                Tiempo de vida útil: Tabletas: 36 meses. Consérvese a temperatura no superior a 30°C. Tabletas recubiertas: 24 meses. Consérvese a temperatura no superior a 30°C.
                        </p>
                            <br />
                            <h6>
                                Sobredosificación.
                        </h6>
                            <p>
                                La sobredosificación con acetaminofén puede causar falla hepática. Cualquier tipo de sobredosis debe ser manejada médicamente en forma inmediata, así no se encuentren presentes en el momento, signos o síntomas de sobredosificación. Antídoto: N-acetilcisteína. Metionina.
                        </p>
                            <br />
                            <h6>
                                Presentación.
                        </h6>
                            <p>
                                DOLEX Tabletas, caja por 100 tabletas, caja por 200 tabletas (Reg. San. INVIMA 2008M-010776R1). DOLEX Tabletas recubiertas, caja por 10 tabletas; frasco por 24 tabletas (Reg. San INVIMA 2009M-13851R1).
                        </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export {
    SearchHeaderComponent,
    SearchMedicineComponent
}


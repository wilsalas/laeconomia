import React from 'react';
import {
    Col, Row
} from 'reactstrap';

const AboutComponent = () => {
    return (
        <>
            <Col md={12} xs={12}>
                <h5 >
                    ¿QUIENES SOMOS?
               </h5>
                <p className="mt-2">
                    Somos una cadena de droguerías líder en el suministro de medicamentos, productos de higiene personal, cuidado del bebé y cosméticos entre otros, que tiene como compromiso principal la salud y el bienestar de nuestros clientes.
                </p>
            </Col>

            <Col className="mt-4" md={12} xs={12}>
                <h5 > Nuestro compromiso es apoyar la economía de nuestros clientes para poder brindarles:  </h5>
                <ul className="ul-style mt-2">
                    <li>
                        <p>
                            Precios competitivos
                        </p>
                    </li>
                    <li>
                        <p>
                            Oportuna y amable atención
                        </p>
                    </li>
                    <li>
                        <p>
                            Surtido extenso de productos
                        </p>
                    </li>
                    <li>
                        <p>
                            Prácticas confiables
                        </p>
                    </li>
                    <li>
                        <p>
                            Un gran número de sucursales
                        </p>
                    </li>
                </ul>
            </Col>
        </>
    )
}



const HistoryComponent = () => {
    return (
        <>
            <Col md={12} xs={12} >
                <h5 className="text-center">
                    HISTORIA
               </h5>
                <p className="mt-2">
                    Somos una cadena de droguerías líder en el suministro de medicamentos, productos de higiene personal, cuidado del bebé y cosméticos entre otros, que tiene como compromiso principal la salud y el bienestar de nuestros clientes.
                    <br />  <br />
                    <b>1.979 El inicio</b>
                    <br />  <br />
                    Fundada en Febrero de 1.979 en Valledupar como distribuidora mayorista en el sur de la Guajira y el Cesar.
                    <br />  <br />
                    <b>1.984 El crecimiento</b>
                    <br />  <br />
                    Se inaugura la primera sucursal de Droguería La Economía en Santa Marta iniciándose así nuestra cadena de droguerías con cubrimiento en toda la costa norte de Colombia distinguiéndose por su excelencia operacional, procesos innovadores, un extenso surtido y calida atención.
                    <br />  <br />
                    <b>1.990 La expansión</b>
                    <br />  <br />
                    Con el propósito de mejorar los procesos de distribución y atención de nuestros clientes, se inició operaciones desde el nuevo centro de distribución en Barranquilla el 2 de Diciembre de 1.990, en Sincelejo el primero de de Diciembre de 2.000, en Bogotá el 26 de septiembre de 2006 y en Cali el 23 de Abril de 2008 Actualmente Droguerías La Economía es la mejor opción en atención farmacéutica y es símbolo de innovación y confianza. Contamos con más de 260 sucursales en el país y más de 1.700 empleados comprometidos con la satisfacción total de nuestros clientes.
                </p>
            </Col>

            <Col className="mt-4" md={12} xs={12}>
                <Row>
                    <Col md={6} xs={12}>
                        <h5 className="text-center">
                            MISIÓN
                        </h5>
                        <p className="mt-2 mb-3">
                            Estamos dedicados a proteger la salud a través de la comercialización de productos farmacéuticos, productos para el cuidado del bebé, cosméticos y de higiene personal con cubrimiento nacional ofreciendo calidad, seguridad y economía para toda la comunidad con un equipo humano comprometido en el mejoramiento continuo para el bienestar de los usuarios, empleados y accionistas.
                        </p>
                    </Col>
                    <Col md={6} xs={12}>
                        <h5 className="text-center">
                            VISIÓN
                        </h5>
                        <p className="mt-2 mb-3">
                            Seremos innovadores, liderando el sistema de comercialización y distribución de productos que proporcionan bienestar a la comunidad, excediendo las expectativas de clientes y proveedores, contando con un recurso humano idóneo y comprometido, que garantice la excelencia operacional con responsabilidad social y brindando un adecuado retorno a los socios.
                        </p>
                    </Col>
                </Row>
            </Col>
        </>
    )
}


const PrivacyComponent = () => {
    return (
        <>
            <Col md={12} xs={12}>
                <h5 >
                    AVISO DE PRIVACIDAD A SER USADO EN LOS PROCESOS DE RECOLECCIÓN DE INFORMACIÓN PERSONAL
               </h5>
                <p className="mt-3">
                    <b>Aviso de privacidad:</b> ETICOS SERRANO GÓMEZ LTDA., en adelante ETICOS comunica que el suministro de datos personales a través de este portal web implica la autorización del titular para que estos sean tratados de manera segura, confidencial y responsable para fines de establecer contacto e informar sobre nuestros productos, servicios, actividades, ofertas, promociones, alianzas, entre otras actividades empresariales; datos personales que serán tratados en el marco de las relaciones precontractuales, contractuales y post contractuales, aplicando lo dispuesto en el régimen de la ley 1581 de 2012 y/o ley 1266 de 2008, según sea el caso. Esta información será gestionada en una infraestructura informática segura por parte ETICOS y/o de sus encargados; quienes podrán estar ubicados en territorio colombiano o en países como Estados Unidos, Canadá o ubicados en el territorio de la Unión Europea.
                    <br /><br />
                    El tratamiento se realizará en cumplimiento de lo dispuesto en la política de privacidad la cual puede consultar a través del siguiente enlace:
                    <a className="text-information-blue" href="/information/hebeasdata"> www.droguerialaeconomia.com</a>
                    <br />  <br />
                    Si usted no está de acuerdo con el tratamiento antes informado o las condiciones expuestas, por favor no diligencie este formato.
                    <br />  <br />
                    Para el ejercicio del Habeas Data, el titular del dato personal o quien demuestre un legítimo interés conforme lo señalado en la normatividad vigente, podrá hacerlo a través del siguiente correo electrónico  <a className="text-information-blue" href="mailto:habeasdata@eticos.com">habeasdata@eticos.com</a>  o a través de la línea telefónica (57) (5) 3605274 ext.1000 Barranquilla. Quien ejerza el habeas data deberá suministrar con precisión los datos de contacto solicitados para efecto de tramitar, atender y responder su solicitud y desplegar las cargas para el ejercicio de sus derechos. Recibida la solicitud de ejercicio de Habeas Data, ETICOS dará respuesta en los términos de ley.
                </p>
            </Col>
        </>
    )
}


const TermsConditionsComponent = () => {
    return (
        <>
            <Col md={12} xs={12}>
                <h5 >
                    POLÍTICAS Y TÉRMINOS DE USO
               </h5>
                <p className="mt-3">
                    <b>1. TERMINOS Y CONDICIONES</b> El Usuario debe leer, entender y aceptar todas las condiciones establecidas en los Términos y Condiciones Generales y en las Políticas de Privacidad de la Droguería Virtual de Droguería La Economía, así como en los demás documentos incorporados a los mismos por referencia, previo a su registro como Usuario de la Droguería Virtual de Droguería La Economía y/o a la adquisición de productos y/o entrega de cualquier dato con cualquier fin. Si el usuario hiciera uso del Sitio de la Droguería Virtual de Droguería La Economía, ello implicará la aceptación plena de las condiciones establecidas en los Términos y Condiciones Generales y en las Políticas de la Droguería Virtual de Droguería La Economía. Por dicha utilización del sitio y/o sus servicios, el Usuario se obligará a cumplir expresamente con las mismas, no pudiendo alegar el desconocimiento de tales Términos y Condiciones Generales y de la Política de Privacidad. El Contrato entre el cliente y Eticos Ltda., propietaria de los establecimientos de Droguería La Economía, se perfeccionará cuando una Oferta de Compra en el Sitio realizada por el cliente, sea aceptada por Eticos Ltda. El contrato estará regido por los términos definidos en el presente texto, los cuales rigen la venta de los productos y/o servicios que se realice mediante la utilización de este sitio por parte de Eticos Ltda., o cualesquiera de sus filiales, subsidiarias o asociadas de negocios que aparezcan en la factura correspondiente (en lo sucesivo indistintamente \" Eticos Ltda.,\").
                    <br /><br />
                    <b>1.1 Capacidad Legal</b>  Nuestros servicios están disponibles sólo para aquellos individuos que tengan capacidad legal para contratar, según lo dispuesto por la legislación colombiana vigente. Si el cliente no tiene capacidad legal para contratar o es menor de edad, le solicitamos que no utilice nuestros servicios. El cliente, contractualmente deberá ser una persona capaz y los menores e incapaces por cualquier razón, se entienden habilitados por sus representantes en caso que ellos decidan formular oferta de compra. Eticos Ltda en ningún caso estará obligado a aceptar una Oferta de Compra.
                    <br /><br />
                    <b>1.2 Independencia de Disposiciones.</b> En caso de que una o más de las disposiciones contenidas en este documento sean consideradas nulas, ilegales o ineficaces en cualquier aspecto, la validez, legalidad y exigibilidad o eficacia del resto de las disposiciones del presente documento, no se verán afectadas o anuladas por dicha circunstancia.
                    <br /><br />
                    <b>1.3 Presentación de Oferta.</b> Eticos Ltda., a través de la Droguería Virtual de Droguería La Economía, presenta las ofertas de diferentes productos y servicios que se enuncian y/o describen en este Sitio Web (\"Sitio\"). Para efectos de que exista una oferta de compra válida por parte del cliente, se requiere del diligenciamiento por parte de éste de una forma electrónica disponible en la página, en la cual se hará constar los datos personales del cliente, la selección de los productos y/o servicios deseados, la forma en que procederá a su pago, los datos que dependiendo de la forma de pago sean necesarios para efectuar el mismo, así como los demás datos que Eticos Ltda., considere necesarios para que se pueda proceder a realizar una compra. Una vez se diligencia dicha forma electrónica, y la misma haya sido recibida por Eticos Ltda., la Oferta del cliente se entenderá perfecta y será obligatoria para el cliente. Eticos Ltda., procederá a verificarla y decidir si acepta la misma. Ninguna Oferta obliga a Eticos Ltda., sino hasta la aceptación de la misma, la cual se perfecciona, para efectos contractuales, con la facturación y entrega. Toda cotización dada por Eticos Ltda., será válida sólo para el momento en que se liquida el valor final de la Oferta de compra, por lo que Eticos Ltda., se reserva el derecho de modificar los precios de los productos en cualquier momento previo a la aceptación de la Oferta, sin necesidad de avisar dicho cambio de ninguna manera.
                    <br /><br />
                    <b>1.4 Perfeccionamiento y Transferencia de Propiedad.</b> El perfeccionamiento del contrato se presenta cuando Eticos Ltda., acepta la Oferta de compra presentada por el cliente, lo cual se entiende hecho cuando Eticos Ltda., procede al despacho de los respectivos productos y/o servicios seleccionados. Eticos Ltda., podrá aceptar parcialmente ofertas de compra, en cuyo caso el contrato se perfeccionará sólo para los productos y/o servicios aceptados por Eticos Ltda., en los eventos de pago contra entrega, la propiedad sobre los productos y/o servicios se transmitirá al cliente desde el momento en que los mismos sean cancelados por éste en el lugar de entrega. En el evento que el precio de los productos y/o servicios objeto de una oferta de compra no sea pagado, se entenderá que existe incumplimiento del contrato, lo cual es causal para darlo por terminado por parte de Eticos Ltda., asumiendo el cliente el valor de la devolución de dichos productos y/o servicios al respectivo depósito, así como el monto de los perjuicios derivados de dicho incumplimiento. En los eventos de pago por los demás medios posibles, de acuerdo a lo establecido en este Sitio, la propiedad sobre los productos y/o servicios se transmitirá al cliente desde el mismo momento del perfeccionamiento del contrato, es decir, desde que los mismos se embarquen desde los depósitos y/o Puntos de ventas autorizados de Eticos Ltda., en la República de Colombia.
                    <br /><br />
                    <b>1.5 Entrega de los Productos.</b> Eticos Ltda., se compromete a realizar entregas exclusivamente dentro del territorio colombiano, en las zonas y lugares a los que tenga acceso de acuerdo a su red de distribución, y por consiguiente podrá negarse a la aceptación de una oferta de compra cuando el domicilio registrado por el cliente para realizar la entrega, no se encuentre dentro de las zonas geográficas habilitadas por Eticos Ltda., para tal efecto. Por red de distribución, se entienden las localidades donde Eticos tiene puntos de venta y presta su servicio a domicilio. Los productos objeto de la compraventa serán entregados en el domicilio que el cliente haga constar al realizar su oferta de compra. Se entiende que cualquier persona que se encuentre en el domicilio donde debe realizarse la entrega, se encuentra debidamente autorizado por el cliente para recibir su pedido, y por tanto Eticos Ltda., queda exonerado de cualquier responsabilidad por la entrega que realizare, siempre que la misma se haga en el domicilio registrado en nuestro Sitio, dado que el domicilio indicado para la entrega corresponde al destinatario del envío y por tanto autorizado para recibir. Para productos y/o servicios de uso restringido, incluyendo pero sin limitarse a tabaco, licores y productos de farmacia, deberá existir una persona habilitada para recibirlos, pues de lo contrario se entenderá que nadie recibió el pedido. Si nadie recibe el pedido en el domicilio señalado, Eticos Ltda procederá a la devolución de los productos y/o servicios al respectivo punto de venta, y el cliente estará en la obligación de contactarnos en un término máximo de cinco (5) días calendario para que procedamos a su reenvío, en cuyo caso, los gastos generados por el mismo, correrán por el cliente, y hasta tanto los mismos no sean cancelados, Eticos Ltda., no estará en obligación de hacer nuevamente el despacho. Si el cliente no procede a solicitar el reenvío en el término indicado, o no cancela el valor adicional por el reenvío, Eticos Ltda., podrá desistir del negocio, y estará obligado sólo a restituir el monto pagado por los productos y/o servicios, descontando el valor de los gastos incurridos por transporte.
                    <br /><br />
                    <b>1.6 Productos y/o servicios.</b> Es política de Eticos Ltda., la actualización y revisión constante de los productos y/o servicios que se exhiben en este Sitio. Eticos Ltda., puede modificar y descontinuar productos y/o servicios en cualquier momento. En lo referente a productos carnes frías, lácteos y demás productos perecederos, al aceptar una oferta de compra, Eticos Ltda., se obliga a despachar productos o servicios de las mismas características de calidad que normalmente se exhiben en sus puntos de venta.
                    <br /><br />
                    <b>1.7 Devoluciones y Cambios.</b> Eticos Ltda., procederá a realizar los cambios y a aceptar las devoluciones de los productos y/o servicios, de acuerdo a los parámetros de las garantías conferidas por el respectivo productor, o de acuerdo con los términos de ley. Para los productos y/o servicios que no cuenten con garantía, Eticos Ltda., podrá, a su arbitrio, proceder a su cambio o aceptar su devolución. Eticos Ltda., sólo estará obligado a aceptar cambios o devoluciones de productos y/o servicios sin garantía, cuando al momento de la entrega del respectivo producto y/o servicio se determine que el mismo no corresponde con las características con que se exhibe en este Sitio, o se encuentra averiado o ha superado su fecha de vencimiento. La solicitud de cambio o devolución la deberá hacer el cliente a través de este Sitio, por el lugar habilitado para contactarnos (\"contáctanos\"), o directamente en nuestros Puntos de Venta. Siempre que la solicitud de cambio o devolución se presente por causas no atribuibles a Eticos Ltda., el crédito que se otorgará por el respectivo cambio o devolución ascenderá al valor neto del producto y/o servicio, sin incluir el valor del transporte, el cual es asumido por el cliente, quien además deberá asumir los cargos de transporte que se generen como consecuencia de la recolección del producto y/o servicio, así como del nuevo envío. Eticos Ltda., no acepta devolución de medicamentos.
                    <br /><br />
                    <b>1.8 Política de Devolución y Cambios por Derecho de Retracto</b> El derecho de retracto es la posibilidad que se le brinda al cliente de solicitar la devolución de la totalidad del dinero pagado como también realizar la devolución del producto recibido, dentro de un término de cinco días hábiles siguientes a la entrega del producto. Cualquier solicitud para devolución o cambio de productos deberá cumplir con las disposiciones sanitarias y garantías para los clientes, cuando los productos a que se refiere sean objeto de inconveniencia sanitaria o restricción legal o reglamentaria. La reversión se puede presentar por cinco causales:
                   </p>
                <ul className="ul-style mt-2">
                    <li>
                        <p>
                            Consumidor sea objeto de fraude
                        </p>
                    </li>
                    <li>
                        <p>
                            Operación no solicitada
                        </p>
                    </li>
                    <li>
                        <p>
                            Producto adquirido no sea recibido
                        </p>
                    </li>
                    <li>
                        <p>
                            Producto entregado no sea el solicitado
                        </p>
                    </li>
                    <li>
                        <p>
                            Producto sea defectuoso El derecho de retracto deberá ser solicitado por medio de la página Web www.droguerialaeconomia.com/economia/site/contacto
                        </p>
                    </li>
                </ul>
                <p>
                    1.8.1 Condiciones Generales Para Un Retracto
                </p>
                <ul className="ul-style mt-2">
                    <li>
                        <p>
                            El producto no debe estar averiado o deteriorado por acciones correspondientes a los clientes.
                        </p>
                    </li>
                    <li>
                        <p>
                            El producto debe tener etiquetas, factura de venta, accesorios y empaques originales (incluyendo manuales,guías de uso, certificados de garantía, etc.).
                        </p>
                    </li>
                    <li>
                        <p>
                            El producto no debe mostrar señales de uso, suciedad o desgaste.
                        </p>
                    </li>
                    <li>
                        <p>
                            El producto no debe tener más de CINCO (5) días hábiles de entregado.
                        </p>
                    </li>
                    <li>
                        <p>
                            El producto adquirido no debe ser perecedero, de uso personal o íntimo.
                        </p>
                    </li>
                    <li>
                        <p>
                            No se aceptan devolución de medicamentos
                        </p>
                    </li>
                </ul>
                <p>
                    1.8.2 Condiciones De Logística Del Retracto
                </p>
                <ul className="ul-style mt-2">
                    <li>
                        <p>
                            Si el producto ya fue entregado al cliente y el domiciliario aún está presente al momento de la solicitud de retracto, el cliente deberá entregar al domiciliario el producto para devolución.
                        </p>
                    </li>
                    <li>
                        <p>
                            Si el producto ya fue entregado al cliente y el domiciliario ya no se encuentra presente al momento de la solicitud de retracto, se asignara por parte de Eticos Ltda un domiciliario para recoger la mercancía a devolver, una vez radicada la solitud de retracto por el Cliente.
                        </p>
                    </li>
                    <li>
                        <p>
                            El personal encargado de la recolección del producto no se encuentra facultado para desarmar ni manipular el producto, su única función será la de recogerlo.
                        </p>
                    </li>
                    <li>
                        <p>
                            Si el producto no se encuentra empacado en su empaque original, no se procederá con la devolución.
                        </p>
                    </li>
                </ul>
                <p>
                    <b>1.9 Servicios Adicionales.</b> Eticos Ltda., no asume la obligación de proporcionar servicio adicional o asistencia técnica posterior a la entrega para ninguno de los productos y/o servicios que se exhiben en este sitio. Por tanto, tales servicios adicionales estarán limitados a los que directamente ofrezca el proveedor o productor del correspondiente producto y/o servicio, pero los mismos no estarán disponibles sino hasta que Eticos Ltda., haya recibido el pago íntegro del producto y/o servicio.
                    <br /><br />
                    <b>1.10 Exoneración y Garantías.</b> Los productos y/o servicios exhibidos son suministrados en el estado en que normalmente se encontrarían en cualquiera de los puntos de venta de Eticos Ltda., propietaria de los establecimientos de Droguería La Economía., sin haber de por medio garantías de cualquier tipo, ya sea expresas o implícitas. Eticos Ltda., no garantiza que las imágenes de los productos y/o servicios en la droguería Virtual de Droguería La Economía correspondan exactamente a las características de los mismos. Salvo lo previsto en la Legislación colombiana como obligaciones del comercializador. Las garantías sobre los productos y/o servicios exhibidos en este sitio se limitarán a las ofrecidas por el productor del respectivo producto y/o servicio, y estarán vigentes únicamente a partir de que se verifique la recepción por parte de Eticos Ltda., del pago íntegro del precio del respectivo producto y/o servicio. Los proveedores de Eticos Ltda., que exhiben sus productos y/o servicios en este sitio, se reservan el derecho de modificar la garantía sobre los mismos en cualquier tiempo, y a partir de la fecha de modificación, todas las operaciones que se celebren entre Eticos Ltda., y el cliente se regirán por la garantía modificada otorgada por el proveedor.
                    <br /><br />
                    <b>1.11 Responsabilidad Limitada.</b> Sin perjuicio de lo establecido en las normas imperativas de la Legislación colombiana, la responsabilidad de Eticos Ltda., por incumplimiento del contrato, responsabilidad civil, objetiva o de cualquier naturaleza, en ningún caso podrá exceder el monto total pagado por el cliente como precio total del(os) producto(s) y/o servicio(s) objeto de la reclamación, independientemente del fundamento de la acción respectiva. Eticos Ltda., no asume ninguna responsabilidad por los perjuicios derivados de la utilización de los productos y/o servicios exhibidos en esta página, y por tanto la misma corresponderá al respectivo productor o proveedor del mismo, según los términos consagrados en la Legislación colombiana.
                    <br /><br />
                    <b>1.12 Revisión de los Términos.</b> Eticos Ltda., puede en cualquier momento revisar estos Términos del contrato aquí incluidos, por medio de la actualización de este anuncio. Al usar este sitio, el cliente conviene en darse por obligado por cualquiera de tales revisiones, debiendo entonces visitar periódicamente esta página para determinar los términos vigentes en ese momento a los cuales el cliente estará obligado en el evento que decida realizar una Oferta de compra.
                    <br /><br />
                    <b>1.13 Otros Documentos.</b> Estos términos no pueden ser alterados, complementados o enmendados por medio del uso de ningún otro documento. Todo intento de alterar, complementar o enmendar este documento o de presentar una Oferta de compra de producto(s) y/o servicio(s) que está sujeta a términos y condiciones adicionales o distintos, será nulo y de ningún efecto, salvo que se haya acordado de manera distinta mediante convenio por escrito firmado por el cliente y Eticos Ltda.
                    <br /><br />
                    <b>1.14 Legislación Aplicable y Jurisdicción.</b> Estos términos y condiciones de venta se regirán e interpretarán de acuerdo con las leyes de la República de Colombia. Cualquier controversia que derive de este documento se someterá a los tribunales del Municipio de Barranquilla (Colombia).
                    <br /><br />
                    <b>1.15 Cookies.</b> Para entender de una mejor manera las necesidades de los usuarios y entregar un mejor servicio, este sitio utiliza identificadores anónimos (\"cookies\") para recoger información anónima de preferencias e intereses de sus usuarios. Una cookie es cualquier cadena de texto que pide autorización para alojarse en el disco duro de la computadora. Si el usuario acepta, entonces el explorador agrega el texto en un archivo pequeño con la finalidad de notificarnos cuando el usuario visita nuestro Sitio. La información recogida por este medio se proporciona a compañas asociadas y es utilizada por estas para crear perfiles anónimos para cualquier propósito, incluyendo, más no limitado a, desarrollar, fabricar y comercializar productos, y puede ser comercializada, diseminada o usada por Eticos Ltda., o sus afiliados. La información proporcionada a tales compañas no incluye y nunca se combina con datos de carácter personal que permitan identificar a una persona determinada (tal como nombre, domicilio o dirección de correo electrónico) o cualquier información que pueda ser considerada sensible o que pueda comprometer la privacidad de los usuarios.
                    <br /><br />
                    <b>1.16 Registro.</b> Para realizar una oferta de compra, es necesario que el usuario se registre como cliente, suministrado un nombre de usuario y una clave. Tales datos de registro deberán ser conservados por el usuario, asumiendo toda la responsabilidad por el uso de los mismos. Cuando el usuario olvide sus datos de registro, Eticos Ltda., le permitirá recordarlos, de acuerdo a los procedimientos contenidos en nuestro Sitio.
                    <br /><br />
                    <b>1.17 Cancelación del Registro.</b> Eticos Ltda., se reserva el derecho de cancelar la cuenta asignada al respectivo usuario, sin necesidad de dar ningún tipo de aviso, y sin que de ello se derive responsabilidad. El registro podrá ser cancelado de manera discrecional, es decir que Eticos no está o queda obligado a informar las razones de la cancelación del registro o su negativa a realizarlo, en el entendido que lo que se celebra con los clientes son contratos en los cuales concurra la voluntad contractual y el mutuo consentimiento, sin que la ausencia de éste en cabeza de cualquiera de las partes pueda ser interpretado como acto discriminatorio.
                    <br /><br />
                    <b>1.18 Responsabilidad del Usuario.</b> Al ingresar a nuestro Sitio, el usuario adquiere el compromiso de suministrar información personal correcta y verdadera, así como proceder a la actualización de sus datos cada vez que se requiera. Se le prohíbe al usuario poner en, o transmitir a, o desde este sitio cualquier material ilegal, amenazador, calumniador, difamatorio, obsceno, escandaloso, pornográfico o profano, o cualquier otro material que pudiera dar lugar a cualquier responsabilidad civil o penal en los términos de la ley.
                    <br /><br />
                    <b>1.19 Medios de Pago</b> La única alternativa que se contemplan en este Sitio para la cancelación de los productos y/o servicios seleccionados por el usuario, es el medio de pago Contra Entrega los cuales deben ser aceptados y avalados por Eticos Ltda.
                    <br /><br />
                    <b>1.20 Exoneración de Responsabilidad.</b> Siempre que no se haya notificado oportunamente por parte del usuario la existencia de la violación de su información personal, o cuando se realice un uso indebido de sus datos de Registro, Eticos Ltda., no asume ninguna responsabilidad por tales acciones. Así mismo ETICOS LTDA es responsable del funcionamiento de la página web exceptuando los casos de fuerza mayor o caso fortuito
                    <br /><br />
                    <b>1.21 Revisión de los Términos.</b> Debido al permanente cambio y actualización en las tecnologías y desarrollos en seguridad, Eticos Ltda., puede en cualquier momento revisar la política de términos y condiciones comerciales del sitio, por medio de la actualización de este anuncio. Al usar este Sitio, el usuario conviene en darse por obligado por cualquiera de tales revisiones, debiendo entonces visitar periódicamente esta página para determinar la Política vigente en ese momento a la cual el usuario estará sometido en el evento que decida utilizar este Sitio.
                    <br /><br />
                    <b>2. POLITICA DE CAMPAÑAS.</b> Las campañas que adopte Eticos Ltda., para sus puntos de venta no necesariamente aplicarán para la Droguería virtual www.droguerialaeconomia.com. Eticos Ltda se reserva la inclusión de este canal de ventas en las actividades comerciales, y de carácter promocional, como: rifas, juegos y descuentos derivados de campañas, de igual manera toda actividad comercial, concurso, promoción, o descuento son exclusivo de la droguería virtual por lo tanto no necesariamente aplican en el punto de venta. Toda campaña realizada por Eticos Ltda., presentará al público políticas en las cuales se establecerá la participación de la droguería virtual y las formas de comercialización integrados en la actividad, todas las políticas de campañas serán presentadas en los puntos de venta y en www.droguerialaeconomía.com.
                    <br /><br />
                    <b>3. TERMINOS DE USO.</b>
                    <br /><br />
                    <b>3.1 Aceptación de Términos.</b> Al acceder y/o usar este sitio, el usuario admite haber leído y entendido estos Términos de Uso y está de acuerdo en sujetarse a los mismos y cumplir con todas las leyes y reglamentos aplicables que hagan parte de la Legislación Colombiana. Además, cuando el usuario utilice cualquier servicio suministrado en este Sitio, estará sujeto a las reglas, guías, políticas, términos y condiciones aplicables a dicho servicio. En caso de que el usuario no está de acuerdo con estos términos, favor abstenerse de usar este Sitio. Este Sitio es controlado y operado por Eticos Ltda., propietario de los establecimientos de Droguería La Economía desde sus oficinas ubicadas en Colombia. Eticos Ltda., no se responsabiliza de que el material en este Sitio sea apropiado o está disponible para su uso en otros lugares, estando prohibido su acceso desde territorios donde su contenido sea ilegal. Aquellos que decidan acceder a este sitio desde otros lugares lo harán bajo su propia iniciativa y es su responsabilidad el sujetarse a las leyes locales que sean aplicables. Cualquier reclamo con relación a, y al uso de, este Sitio y el material en el contenido está regulado por las leyes de Colombia. Estos términos y condiciones están sujetos a cambios sin previo aviso en cualquier momento, bajo la sola voluntad de Eticos Ltda., y a partir de la fecha de modificación de estos términos y condiciones, todas las operaciones que se celebren entre Eticos Ltda., propietaria de los establecimientos de Droguería La Economía y el usuario se regirán por el documento modificado.
                    <br /><br />
                    <b>3.2 Encabezados.</b> Los encabezados de las cláusulas de estos Términos y Condiciones son únicamente para facilitar la consulta y no forman parte de los mismos, y de ellos no se podrán inferir o derivar ningún significado o interpretación.
                    <br /><br />
                    <b>3.3 Independencia de Disposiciones.</b> En caso de que una o más de las disposiciones contenidas en estos Términos y Condiciones sean consideradas nulas, ilegales o ineficaces en cualquier aspecto por la legislación colombiana la validez, legalidad, exigibilidad o eficacia del resto de las disposiciones aquí contenidas no se verán afectadas o anuladas por dicha circunstancia.
                    <br /><br />
                    <b>3.4 Derechos de Autor.</b> Todo el material informático, gráfico, publicitario, fotográfico, de multimedia, audiovisual y/o de diseño, así como todos los contenidos, textos y bases de datos puestos a su disposición en este Sitio son de propiedad exclusiva de Eticos Ltda., o en algunos casos, de terceros que han autorizado a Eticos Ltda., su uso y/o explotación (en adelante los Contenidos). Igualmente, el uso en la Droguería Virtual de Droguería La Economía de algunos Contenidos de propiedad de terceros se encuentra expresamente autorizado por la ley. Todos los Contenidos en www.droguerialaeconomia.com están protegidos por las normas sobre Derechos de Autor y por todas las normas nacionales e internacionales que le sean aplicables. Exceptuando lo expresamente estipulado en estos Términos y Condiciones, queda prohibido todo acto de copia, reproducción, modificación, creación de trabajos derivados, venta o distribución, exhibición de los Contenidos, de ninguna manera o por ningún medio, incluyendo, más no limitado a, medios electrónicos, mecánicos, de fotocopiado, de grabación o de cualquier otra índole, sin el permiso previo por escrito de Eticos Ltda., o del titular de los derechos de autor. En ningún caso estos Términos y Condiciones confieren derechos, licencias y/o autorizaciones para realizar los actos anteriormente descritos. Cualquier uso no autorizado de los Contenidos constituye una violación a los presentes Términos y Condiciones y a las normas vigentes sobre derechos de autor. Eticos Ltda., otorga al usuario una licencia y derecho personal, intransferible y no exclusivo para desplegar la Droguería Virtual de Droguería La Economía en pantalla de un computador ordenador o dispositivo movil bajo su control, y para copiar los Contenidos de propiedad de Eticos Ltda., únicamente para uso personal no comercial intransferible, con la condición de que el usuario no modifique de ninguna forma los Contenidos y que conserve todas las leyendas de derechos de autor y de otro tipo de propiedad contenidas en los mismos. Esta licencia no se extiende a la Propiedad Industrial de Eticos Ltda., propietaria de los establecimientos de Droguería La Economía o de terceros, y termina automáticamente ante el incumplimiento del usuario de cualquiera de las previsiones de estos Términos y Condiciones. Eticos Ltda., otorga al usuario una licencia y derecho personal intransferible y no exclusivo para utilizar el código objeto (no el código fuente) del software de la Droguería Virtual de Droguería La Economía en un solo computador pantalla, ordenador o dispositivo movil, siempre que no copie, modifique, cree, distribuya, reproduzca o exhiba un trabajo derivado de ello, invierta el proceso, invierta el montaje o de algún modo intente descubrir algún código de acceso, vender, ceder, sub-licenciar, prestar garantía o transferir cualquier derecho en el software de la Droguería Virtual de Droguería La Economía. El usuario se obliga por los presentes Términos y Condiciones a no modificar el software del Sitio de ninguna manera.
                    <br /><br />
                    <b>3.5 Propiedad Industrial.</b> Todas las marcas, enseñas, logos, nombres y cualesquiera otros signos distintivos, así como los modelos de utilidad y/o diseños industriales y demás elementos de propiedad industrial o intelectual insertados, usados y/o desplegados en este Sitio son Propiedad exclusiva de Eticos Ltda., propietaria de los establecimientos de Droguería La Economía y en algunos casos son de propiedad de terceros que han autorizado expresamente a Eticos Ltda., para su uso y/o explotación. Igualmente, en algunos casos el uso de propiedad Industrial de terceros ha sido autorizado por la ley de manera general, y en consecuencia su uso no requiere de autorización previa y expresa de su titular. Nada en la Droguería Virtual de Droguería La Economía podrá ser interpretado como concesión u otorgamiento a cualquier título de autorizaciones, licencias o cualquier otro derecho para usar o disponer de cualquier forma de la Propiedad Industrial, sin el permiso por escrito de Eticos Ltda., o del titular de los derechos de la misma. Cualquier uso no autorizado constituirá una violación a los presentes Términos y Condiciones y a las normas vigentes nacionales e internacionales sobre Propiedad Industrial.
                    <br /><br />
                    <b>3.6 Licking, Deeplinking y Framing Eticos Ltda.</b> prohíbe el uso de los nombre y/o logotipos, marcas y cualesquiera otros signos distintivos de su propiedad como enlaces hiper-textuales o de cualquier otra forma (\"links”/) direccionados a sitios en Internet cuyo URL sea diferente de http://www.droguerialaeconomia.com, a menos que el establecimiento de un enlace de tal naturaleza sea aprobado por Eticos Ltda., por escrito, en cuyo caso deberá atenerse a los criterios y manuales de diseño y publicidad establecidos por Eticos Ltda. Eticos Ltda., Se reserva el derecho de solicitar el retiro de enlaces que hayan sido establecidos en sitios web sin su expresa y previa autorización. El establecimiento en páginas no controladas por Eticos Ltda., de enlaces a subdirectorios dentro del URL http://www.droguerialaeconomia.com (Deeplinking) queda prohibido. El despliegue, uso, exhibición, copia o cualquier otra forma de reproducción del Sitio http://www.droguerialaeconomia.com o de cualquiera de sus subdirectorios y/o páginas, en sitios no controlados por Eticos Ltda., (Framing) queda expresamente prohibido. La inobservancia de estas prohibiciones será una violación a los derechos de propiedad intelectual sobre los Contenidos y a los derechos sobre la Propiedad Industrial.
                    <br /><br />
                    <b>3.7 Consultas.</b> Cualquier pregunta relacionada con el uso de marcas, enseñas, logos, signos distintivos y en general de cualquier elemento de Propiedad Industrial del Sitio, así como las relacionadas con el uso de los Contenidos o con el establecimiento de Links hacia el URL http://www.droguerialaeconomia.com/economia/site/contacto podrá ser hecha a Eticos Ltda., en Colombia al teléfono 01 8000 915 356 Su uso, en contravención de lo aquí dispuesto, dará lugar a las acciones civiles y penales correspondientes.
                    <br /><br />
                    <b>3.8 Exoneración y Garantías.</b> De conformidad con la Ley de la República de Colombia, el material contenido en este Sitio, incluyendo sin limitación, textos, gráficos y vínculos (links), son suministrados sobre la base de \"tal como es\" (\"as is\"), sin haber de por medio garantías de cualquier tipo, ya sea expresas o implícitas, incluyendo, mas no limitado a, garantías de comerciabilidad, adecuación para un propósito particular, no contravención u otra violación de derechos. Eticos Ltda., no garantiza el uso, validez, precisión o confiabilidad de, o los resultados del uso de, o cualquier otra situación con respecto a, el material en este Sitio o cualquier sitio web enlazado con este Sitio.
                    <br /><br />
                    <b>4.9 Responsabilidad Limitada.</b> Sin perjuicio de lo determinado en las normas imperativas de la Legislación Colombiana aplicable, Eticos Ltda., no asume responsabilidad alguna, incluyendo cualquier responsabilidad por cualquier daño o perjuicio, incluyendo mas no limitado a, pérdida de información o utilidades, existencia de virus, resultados del uso o la incapacidad para usar el material en este Sitio, oportunidades de negocios perdidas, o cualquier otro daño, aun cuando el usuario nos haya avisado acerca de la posibilidad de tales daños, o por cualquier reclamo de terceros, salvo lo que expresamente aquí se estipula. Bajo los términos aquí señalados, Eticos Ltda., no asume ninguna responsabilidad por la información que se suministra en la página, incluyendo pero sin limitarse a la referente a productos y/o servicios, notas de interés, opiniones, consejos prácticos y solución de inquietudes. Eticos Ltda no asume responsabilidad alguna por la imposibilidad de, o por problemas en, la utilización del Sitio o de alguna de las páginas que lo conforman, incluyendo pero sin limitarse a eventos tales como problemas en el servidor o en la conexión, interrupciones en su comunicación, problemas técnicos. En caso de que el uso del material de este Sitio de como resultado la necesidad de dar servicio a, reparar o corregir equipo o información, el usuario asume cualquier costo derivado de ello.
                    <br /><br />
                    <b>4.10 Publicidad y vínculos.</b> Las organizaciones, productos y/o servicios a los cuales se les haga publicidad en la Droguería Virtual de Droguería La Economía, así como los vínculos (links) presentados en Droguería Virtual de Droguería La Economía no son afiliados o tienen relación alguna con Eticos Ltda., y por tanto Eticos Ltda no necesariamente apoya o promueve los productos y/o servicios, o las organizaciones descritas en Droguería Virtual de Droguería La Economía. Eticos Ltda., no cumple ninguna función en la producción de esos productos y/o la prestación de servicios y no hace ninguna garantía, expresa o implícita de su contenido o de su adecuación para un propósito particular. Así por ejemplo, cuando se sugiera la utilización de algún producto y/o servicio, es de exclusiva autónoma del usuario decidir su utilización, y por tanto, Eticos Ltda., no asume ninguna responsabilidad por los perjuicios directos o indirectos, ciertos o eventuales, pasados, presentes o futuros, que se llegaren a derivar de dicha utilización. Así como que Eticos no se hace responsable por la información colocada en cuanto a prescripciones de los productos pues estos se ciñen a la información colocada en los productos, así como a información del vademécum. Así las cosas, los tratos que el usuario realice con el productor o proveedor de los productos y/o servicios contenidos en la publicidad de este Sitio, así como las visitas que realice a sus sitios web a través de los vínculos (links) de este sitio, serán por su exclusiva cuenta y riesgo, sin que de manera alguna comprometan la responsabilidad de Eticos Ltda.
                </p>
            </Col>
        </>
    )
}


const HebeasDataComponent = () => {
    return (
        <>
            <Col md={12} xs={12}>
                <h5 >
                    POLITICA DE PRIVACIDAD – HABEAS DATA
               </h5>
                <p className="mt-3">
                    ETICOS SERRANO GÓMEZ LTDA, en adelante ETICOS, comunica a sus grupos de interés la Política de Privacidad que ha sido adoptada en cumplimiento del régimen legal vigente contenido en la Ley Estatutaria 1581 de 2012 y 1266 de 2008 en lo pertinente.
                    <br /><br />
                    ETICOS trata datos personales de sus grupos de interés en ejecución de su objeto mercantil, esto es, el distribución y suministro de medicamentos, productos intrahospitalarios y productos de consumo masivo, a través de sus establecimientos de comercio denominados DROGUERÍA LA ECONOMIA, bien sea a través de canales físicos y/o electrónicos. Para tal efecto distribuye y comercializa tales productos a través de sus propias marcas como LA ECONOMIA DROGUERIA, DROGUERIA HOSPITALARIA y a través de marcas en concesión como OLIMPICA, todas ellas registradas actualmente y/o establecimientos de comercio en varias ciudades del país, sin perjuicio de las que llegare a ser titular.
                    <br /><br />
                    Los datos personales en custodia de ETICOS, en su condición de Responsable y/o Encargado según el caso, serán tratados cumpliendo los principios y regulaciones previstas en las leyes colombianas y las buenas prácticas aplicables al régimen de protección de datos personales. En consecuencia serán tratados conforme las siguientes finalidades de carácter general:
                </p>
                <ul className="ul-style mt-2">
                    <li>
                        <p>
                            <b>
                                Para cumplir con las obligaciones derivadas de los contratos comerciales y demás negocios jurídicos que celebra ETICOS en desarrollo de su actividad principal.
                            </b>
                        </p>
                    </li>
                    <li className="mt-1">
                        <p>
                            <b>
                                Para el cumplimiento de las obligaciones y/o compromisos derivados de las relaciones, contractuales o no, existentes con sus grupos de interés, tales como contratos de compra-venta, suministro de bienes y servicios entre otros.
                            </b>
                        </p>
                    </li>
                    <li className="mt-1">
                        <p>
                            <b>
                                Para el cumplimiento de las obligaciones legales que involucren datos personales de sus grupos de interés, tales como contratos de trabajo, de prestación de servicios entre otros.
                            </b>
                        </p>
                    </li>
                    <li className="mt-1">
                        <p>
                            <b>
                                Para la gestión comercial y relacionamiento con sus grupos de interés.
                            </b>
                        </p>
                    </li>
                    <li className="mt-1">
                        <p>
                            <b>
                                Para comunicar a sus grupos de interés información sobre sus bienes, servicios, publicaciones, eventos de capacitación, actividades comerciales y publicidad asociada a su actividad empresarial, sea que se realice de manera directa o no.
                            </b>
                        </p>
                    </li>
                    <li className="mt-1">
                        <p>
                            <b>
                                Para desplegar hacia sus grupos de interés actividades de responsabilidad social empresarial.
                            </b>
                        </p>
                    </li>
                    <li className="mt-1">
                        <p>
                            <b>
                                Para gestionar la seguridad de las personas, bienes y activos de información en custodia de la organización.
                            </b>
                        </p>
                    </li>
                </ul>
                <p>
                    En cada proceso empresarial, y acorde con los datos personales recolectados y tratamiento a realizar, en el respectivo aviso de privacidad se informarán de forma previa las finalidades particulares; nombre o razón social y datos de contacto del Responsable  o Encargado del tratamiento, si el tratamiento se efectuará por un encargado, tal encargado estará bajo la dirección de ETICOS; los derechos que le asisten al titular y los mecanismos dispuestos por ETICOS para dar a conocer las Políticas de Privacidad, serán implementadas acorde con el desarrollo del programa de Responsabilidad Demostrada al interior de la organización.
                    <br /><br />
                    Cualquier persona que haga parte de uno de los grupos de interés, en su condición de titular o legítimamente autorizado, en relación con tratamiento de sus datos personales tiene derecho a:
                </p>
                <ul className="ul-style mt-2">
                    <li>
                        <p>
                            <b>
                                Ejercer su derecho de Habeas Data consistente en conocer, actualizar, rectificar su información de carácter personal. También podrá oponerse y cancelar sus datos e información personal en aquellos casos en que proceda.
                            </b>
                        </p>
                    </li>
                    <li className="mt-1">
                        <p>
                            <b>
                                Evidenciar la existencia del consentimiento otorgado, salvo que exista autorización legal para el tratamiento o el mismo se realice en el marco de un contrato.
                            </b>
                        </p>
                    </li>
                    <li className="mt-1">
                        <p>
                            <b>
                                Ejercer las acciones que la ley reconoce en materia de protección de datos personales y habeas data.
                            </b>
                        </p>
                    </li>
                </ul>
                <p>
                    Para el ejercicio del Habeas Data, el titular del dato personal o quien demuestre un legítimo interés conforme lo señalado en la normatividad vigente, podrá hacerlo a través del siguiente correo electrónico <a className="text-information-blue" href="mailto:habeasdata@eticos.com">habeasdata@eticos.com</a>  o a través de la línea telefónica (57) (5) 3605274 ext.1000 Barranquilla. Quien ejerza el habeas data deberá suministrar con precisión los datos de contacto solicitados para efecto de tramitar, atender y responder su solicitud y desplegar las cargas para el ejercicio de sus derechos. Recibida la solicitud de ejercicio de Habeas Data, ETICOS dará respuesta en los términos de ley acorde con lo dispuesto en sus normas.
                    <br /><br />
                    Esta política ha sido aprobada por la Gerencia General, como Representante Legal de ETICOS, el día 30 de Julio de 2013, será objeto de desarrollo a través de las normas y procedimientos que se requieran para implementar la privacidad y protección de datos en la operación de la compañía, y se publicita frente a terceros a través del portal web, intranet y demás medios electrónicos.
                </p>
            </Col>
        </>
    )
}


export {
    AboutComponent,
    HistoryComponent,
    PrivacyComponent,
    TermsConditionsComponent,
    HebeasDataComponent
}


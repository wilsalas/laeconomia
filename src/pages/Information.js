import React from 'react';
import {
    AboutComponent,
    HistoryComponent,
    HebeasDataComponent,
    PrivacyComponent,
    TermsConditionsComponent
} from '../components/ContentInformation';
import {
    Container, Row
} from 'reactstrap';

export default function Information(props) {

    const funRenderInformation = () => {
        let render;
        switch (props.match.params.page) {
            case "about":
                render = <AboutComponent />
                break;
            case "history":
                render = <HistoryComponent />
                break;
            case "privacy":
                render = <PrivacyComponent />
                break;
            case "terms":
                render = <TermsConditionsComponent />
                break;
            case "hebeasdata":
                render = <HebeasDataComponent />
                break;
            default:
                render = <AboutComponent />
                break;
        }
        return render;
    }

    return (
        <>
            <Container>
                <Row className="mt-3 mb-3">
                    {funRenderInformation()}
                </Row>
            </Container>
        </>
    );
}

import React from "react";
import PropTypes from "prop-types";

export default function FormContainer({container: Container, form: Form,}) {
    return (
        <Container>
            <Form />
        </Container>
    );
}

FormContainer.propTypes = {
    container: PropTypes.elementType.isRequired,
    form: PropTypes.elementType.isRequired,
};
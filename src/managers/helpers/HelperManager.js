import React from 'react';
import numeral from 'numeral';
import swal from 'sweetalert';
import { Spinner } from 'reactstrap';



export const AlertSwal = (message, textValue = "") => {
    let title = "", text = "", icon = "";
    if (message === "Usuario o contraseña invalida.") {
        text = "El correo electrónico o la contraseña son incorrectos.";
        icon = "warning";
    } else if (message === "El E-mail ya existe en el sistema; de ser necesario ingrese a la opcion recuperar cuenta.") {
        text = "No se pudo completar el registro, esto puede ser debido a que el correo eletrónico ya existe.";
        icon = "warning";
    } else if (message === "El password y la confirmacion no coinciden, verifiquelo e intentelo nuevamente.") {
        text = "La contraseña y la confirmacion no coinciden, verifiquelo e intentelo nuevamente.";
        icon = "warning";
    } else if (message === "EMPTY_FIELDS_LOGIN") {
        text = "El correo electrónico y la contraseña no pueden estar vacíos.";
        icon = "info";
    } else if (message === "EMPTY_FIELDS_REGISTER") {
        text = " Uno o más campos son inválidos.";
        icon = "info";
    } else if (message === "TERMS") {
        text = "Para continuar con el registro debes aceptar los términos y condiciones.";
        icon = "info";
    } else if (message === "REGISTER_SUCCESS") {
        text = "Se ha completado el proceso de registro.";
        icon = "success";
    } else if (message === "UPDATE_SUCCESS") {
        text = "Perfil de usuario actualizado con éxito.";
        icon = "success";
    } else if (message === "PASSWORD_NOT_MATCH") {
        text = "La contraseña y la confirmacion no coinciden, verifiquelo e intentelo nuevamente.";
        icon = "warning";
    } else if (message === "ERROR_SERVER") {
        title = "Ups!"
        text = "Ha ocurrido un error inesperado en la aplicación. por favor intente nuevamente";
        icon = "error";
    }


    swal({ title, text, icon, button: "Entendido" })
};


export const ValidateInputFormEmpty = fields => {
    for (let key of Object.keys(fields)) {
        if (fields[key] === "") {
            return true
        }
    }
    return false
}


/** Este funcion formatea un numero a COP devuelve por ejemplo: $10.000 */
export const FormatCOPNumber = (number, commas = false) => {
    try {
        //algunos inputs de la aplicacion envian textos con "$" para formatearlos, 
        //pero estos no se les puede hacer parse int. Por eso lo quitamos si no funciona. 
        if (number.toString().includes("$")) {
            number = number.toString().replace(/\D/g, "");
        }
        //si number esta vacio en este momento devolvemos "$0"
        if (!number) return "$0";
        //esta linea mira si debemos agregar un signo negativo al numero cuando es menor a 0
        let prefix = parseInt(number) >= 0 ? "$" : "-$";
        if (!commas) return prefix + numeral(number.toString().replace(/\D/g, "")).format('0,0').replace(/,/g, '.');
        else return prefix + numeral(number).format('0,0');

    }
    catch (error) {
        return "";
    }
}

export const FormatPointsSupensive = element => element.substring(0, 27) + "...";

export const funRenderSpinner = (type = "md") => <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner size={type} color="primary" /> </div>

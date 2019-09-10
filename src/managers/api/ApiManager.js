const HTTP_STATUS_CODE = {
    OK: 200,
    CORRECT: 201,
    BAD_REQUEST: 400,
    FORBIDDEN: 401,
    NOT_FOUND: 404,
    ERROR_SERVER: 500,
    BAD_GATEWAY: 502,
}

const HTTP_REQUEST_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
}


export const ROUTES =
{
    MAIN: "principal",
    DICTIONARY: "diccionario",
    BABY: "cuidadobebe",
}


export const ORDER_BY =
{
    PERCENT: "PJ",
    DESCRIPTION: "DS",
    GREATER: "MY", // From greater value to lower
    LOWER: "MN", // From lower value to greater
}

export const SEARCH_BY =
{
    CODE: 'code',
    BAR_CODE: 'bar_code',
    TEXT: 'text',
}

export const IN_OFFER =
{
    YES: "S",
    NO: "N",
}

// Request errors
export const REST = {
    TOKEN: {
        ERROR: 'TOKEN_ERROR', 
    }
}

export const URL = {
    HOST: 'https://www.droguerialaeconomia.com',
}

const fetchAsync = async (url, method, { body = {}, headers = {} } = {}) => {
    const form = (method === HTTP_REQUEST_METHOD.GET) ? { method, headers } : { method, headers, body };
    let response = {
        error: true,
        message: '',
    }

    try {
        const fetchResponse = await fetch(url, form);

        response.error = (fetchResponse.status !== HTTP_STATUS_CODE.OK);
        response.message = await fetchResponse.json();

    } catch (error) {
        response.message = error;
    }

    return response;
}


export const API = {
    GET: {

        async RetrieveStores() {
            return await fetchAsync(`${URL.HOST}/economia/api/Ciudades/`, HTTP_REQUEST_METHOD.GET)
        },

        /**
         * 
         * @param {String} location The location of the store I.E: "08001"
         */
        async RetrieveCategories(location) {
            return await fetchAsync(`${URL.HOST}/economia/api/Categorias/${location}/`, HTTP_REQUEST_METHOD.GET)
        },

        async RetrieveTopOffers(location, itemsPerPage = 12) {
            return await fetchAsync(`${URL.HOST}/economia/api/top/${location}/${itemsPerPage}`, HTTP_REQUEST_METHOD.GET)
        },

        async RetrieveOffers(location) {
            return await fetchAsync(`${URL.HOST}/economia/api/ofertas/${location}/`, HTTP_REQUEST_METHOD.GET)
        },

        async RetrieveAdsBanner(route) {
            return await fetchAsync(`${URL.HOST}/economia/api/anuncios/${route}/`, HTTP_REQUEST_METHOD.GET)
        },

        async RetrieveProductFromCode(location, productCode) {
            return await fetchAsync(`${URL.HOST}/economia/api/referencias/${location}/${productCode}/`, HTTP_REQUEST_METHOD.GET)
        },

        async RetrieveProductFromBarCode(location, barCode) {
            return await fetchAsync(`${URL.HOST}/economia/api/referencias/${location}/${barCode}/`, HTTP_REQUEST_METHOD.GET)
        },

        async RetrieveProductFromSearch(location, search, { page = 0, itemsPerPage = 12, orderBy = ORDER_BY.DESCRIPTION, offer = IN_OFFER.NO } = {}) {
            // return await fetchAsync(`${URL.HOST}/economia/api/referencias/${location}/${search}/${page}/${itemsPerPage}/${orderBy}/${offer}/`, HTTP_REQUEST_METHOD.GET)
            return await fetchAsync(`${URL.HOST}/economia/api/busqProductos/${location}?q=${search}`, HTTP_REQUEST_METHOD.GET)
        },

        async RetrieveProductsFromSubcategory(location, subcategory, { page = 1, itemsPerPage = 12, orderBy = ORDER_BY.DESCRIPTION } = {}) {
            return await fetchAsync(`${URL.HOST}/economia/api/RefSubCat/${location}/${subcategory}/${page}/${itemsPerPage}/${orderBy}/`, HTTP_REQUEST_METHOD.GET)
        },
        async RetrieveHomeServiceValue(location) {
            return await fetchAsync(`${URL.HOST} / economia / api / VlrDomicilio / ${location}`, HTTP_REQUEST_METHOD.GET)
        },
        async RetrieveWhetherCouponIsValidOrNot (coupon, document, name, email, token) {
            return await fetchAsync(`${URL.HOST}/economia/api/cupon/${coupon}?user[nit]=${document}&user[email]=${email}&user[nombres]=${name}&user[auth_token]=${token}`, HTTP_REQUEST_METHOD.GET)
        },

    },
    POST: {
        async PerformSignIn(email, password) {
            let response = await fetchAsync(`${URL.HOST}/economia/site/users/login/`, HTTP_REQUEST_METHOD.POST, { body: FormUrlEncoded({ email, password }), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
            if (!response.message.success) {
                response.error = true;
            }
            return response;
        },
        async PerformSignUp(fields) {
            let response = await fetchAsync(`${URL.HOST}/economia/site/users/signup/`, HTTP_REQUEST_METHOD.POST, { body: FormUrlEncoded(fields), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
            if (!response.message.success) {
                response.error = true;
            }
            return response;
        },
        async ValidateToken(document, name, email, token) {
            const _fields = {
                nit: document,
                email,
                nombres: name,
                auth_token: token,
            }
            let response = await fetchAsync(`${URL.HOST}/economia/site/users/validateToken/`, HTTP_REQUEST_METHOD.POST, { body: FormUrlEncoded(_fields), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
            if (!response.message.success) {
                response.error = true;
            }
            return response;
        },
        async PerformRetrieveAddressList (document, name, email, token)
       {
           let response = {
               error: false,
               message: '',
           }
           const validateToken = await this.ValidateToken(document, name, email, token)
           if(validateToken.error)
           {
               response.error = true;
               response.message = REST.TOKEN.ERROR;
           }
           else
           {
               const _fields = {
                   nit: document,
                   email,
                   nombres: name,
                   auth_token: token,
               }
               const body = FormUrlEncoded(_fields);
               response = await fetchAsync(`${URL.HOST}/economia/site/users/getMyDirecciones/`, HTTP_REQUEST_METHOD.POST, { body, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
               if(!response.message.success)
               {
                   response.error = true;
               }
           }
           return response;
       },

        async PerformRetrieveProfileInformation(document, name, email, token) {
            let response = {
                error: false,
                message: '',
            }
            const validateToken = await this.ValidateToken(document, name, email, token)
            if (validateToken.error) {
                response.error = true;
                response.message = REST.TOKEN.ERROR;
            }
            else {
                const _fields = {
                    nit: document,
                    email,
                    nombres: name,
                    auth_token: token,
                }
                const body = FormUrlEncoded(_fields);
                response = await fetchAsync(`${URL.HOST}/economia/site/users/userProfile`, HTTP_REQUEST_METHOD.POST, { body, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
                if (!response.message.success) {
                    response.error = true;
                }
            }
            return response;
        },
        async PerformEditProfile(document, name, email, token, { password = '', newName, newDocument, dateOfBirth, phone, cellphone }) {
            let response = {
                error: false,
                message: '',
            }
            const _fields = {
                userInfo: {
                    nit: document,
                    email,
                    nombres: name,
                    auth_token: token,
                },
                user: {
                    email,
                    password,
                    confirm_password: password,
                    nombres: newName,
                    nit: newDocument,
                    fecha_nacimiento: dateOfBirth,
                    celular: cellphone,
                    telefono: phone,
                }
            }
            response = await fetchAsync(`${URL.HOST}/economia/site/users/updateUserProfile`, HTTP_REQUEST_METHOD.POST, { body: TwoLevelFormUrlEncoded(_fields), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
            if (!response.message.success) {
                response.error = true;
            }
            return response;
        },
        async PerformSaveAddress(address, alias, document, name, email, token) {
            let response = {
                error: false,
                message: '',
            }
            const validateToken = await this.ValidateToken(document, name, email, token)
            if (validateToken.error) {
                response.error = true;
                response.message = REST.TOKEN.ERROR;
            }
            else {
                const _fields = {
                    userInfo: {
                        nit: document,
                        email,
                        nombres: name,
                        auth_token: token,
                    },
                    MyDireccion: {
                        nombre_direccion: alias,
                        direccion: address,
                    }
                }
                response = await fetchAsync(`${URL.HOST}/economia/site/users/saveMyDirecciones/`, HTTP_REQUEST_METHOD.POST, { body: TwoLevelFormUrlEncoded(_fields), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
                if (!response.message.success) {
                    response.error = true;
                }
            }
            return response;
        },
    },
    PUT: {

    },
    DELETE: {

    },
}

const FormUrlEncoded = (params) => {
    return Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
}

// Esta funcion es independiente de las demas
const TwoLevelFormUrlEncoded = (params) => {
    let urlEncoded = '';
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            for (const childkey in params[key]) {
                if (params[key].hasOwnProperty(childkey)) {
                    urlEncoded += encodeURIComponent(key + '[' + childkey + ']') + '=' + encodeURIComponent(params[key][childkey]) + '&';
                }
            }
        }
    }
    return urlEncoded;
}

// Esta funcion es para formatear la data de cupon
export const FormatCoupon = (coupon) =>
{
   return {
       type: coupon.Condicion,
       description: coupon.Descripcion,
       startDate: coupon.Desde,
       endDate: coupon.Hasta,
       strType: coupon.TipoCupon, // <= Type of coupon as string
       value: coupon.ValorCupon, // <= Amount of coupon
       minAmount: coupon.VlrMinimo, // <= Min. amount of the purchase/order to apply this coupon
   }
}
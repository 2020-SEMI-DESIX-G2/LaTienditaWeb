import React from 'react';
import ReactDOM from 'react-dom'
import paypal from 'paypal-checkout'

const PayPalCheckoutButton = ({ order }) => {
    const paypalConf = {
        currency: 'USD',
        env: 'sandbox',
        client: {
            sandbox: 'AZlG1tugtdv7LeOVQmsvPIwBnxB11w-XRz1ZCco7zp2Cus85uclLkuRj45f-PYK0IZUAVTKHQ9cR-cpF',
            production: '----id---'
        },
        style: {
            label: 'pay',
            size: 'medium',
            shape: 'rect',
            color: 'gold'
        }
    };

    const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

    const payment = (data, actions) => {
        const payment = {
            transactions: [
                {
                    amount: {
                        total: order.total,
                        currency: paypalConf.currency
                    },
                    description: 'compra en dreams organic',
                    custom: order.customer || '',
                    item_list: {
                        items: order.items
                    }
                }
            ],
            note_to_payer: 'Contactanos para cualquier aclaracion'
        };
        return actions.payment.create({ payment });
    }

    const onAuthorize = (data, actions) => {
        return actions.payment.execute()
            .then(response => {
                console.log(response);
                alert(`el pago fue procesado correctamente, ID: ${response.id}`);
            })
            .catch(err => {
                console.log(err);
                alert('ha ocurrido un error procesando el pago con Paypal');
            });
    };

    const onError = (err) => {
        console.log(err);
        alert('El pago no fue realizado, vuelva a intentarlo');
    };

    const onCancel = (data, actions) =>{
        alert('pago no realizado, el usuario ha cancelado el proceso');
    };

    return(
        <PayPalButton
        env = {paypalConf.env}
        client = {paypalConf.client}
        payment={(data,actions) => payment(data,actions) }
        onAuthorize={(data,actions) => onAuthorize(data,actions)}
        onCancel={(data,actions) => onCancel(data,actions)}
        onError={(data,actions) => onError(data,actions)}
        style={paypalConf.style}
        commit
        locale="es_ES"
        />
    );

}

export default PayPalCheckoutButton;
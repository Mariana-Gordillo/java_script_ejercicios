import { Cliente } from "./Clientes.js";

export class CuentaCorriente{
    #cliente;
    numero;
    agencia;
    #saldo;
    static cantidadCuentas = 0;

    //static queire decir que el atributo es común para todas las cuentas
    
    set cliente (valor){
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente (){
        return this.#cliente;
    }

    constructor(cliente, numero, agencia){
        this.cliente = cliente
        this.numero = " ";
        this.agencia = " ";
        this.#saldo = 0;
        CuentaCorriente.cantidadCuentas++;       

    }

    depositoEnCuenta (valor){
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta (valor){
        //this.saldo = this.saldo -valor;

        if (valor <= this.#saldo )

            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}
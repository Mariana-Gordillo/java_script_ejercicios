import { Cliente } from './Clientes.js';
import{CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente('Mariana', '12345679', '89076'  );
const cliente2 = new Cliente('July', '12344579', '89456'  );

const cuentaDeJuly = new CuentaCorriente(cliente,'2', '002', );
const cuentaDeMariana = new CuentaCorriente(cliente, '1', '001');

let saldo = cuentaDeMariana.verSaldo();
saldo = cuentaDeMariana.depositoEnCuenta(150);
console.log("El saldo actual en Cuenta Mariana es  " + saldo);

//se quitan estos parametros por que ya estan declaradoas en el parentisis de arriba, cuando se creo el molde del cosntructor en cliente
//cliente.nombreCliente ='Mariana';
//cliente.dnidCliente = '12345679';
//cliente.rutCliente = '89076';

//cuentaDeMariana.numero = '1';
//cuentaDeMariana.agencia = '001';
//cuentaDeMariana.cliente = cliente;

//saldo = cuentaDeMariana.retirarDeCuenta(30);
//console.log("El saldo actual es " + saldo);
//saldo = cuentaDeMariana.depositoEnCuenta(-10)
//console.log("El saldo actual es " + saldo);

//console.log(cliente2)
//const cliente2 = new Cliente();
//cliente2.nombreCliente ='July';
//cliente2.dnidCliente = '12344579';
//cliente2.rutCliente = '89456';


//cuentaDeJuly.numero = '2';
//cuentaDeJuly.agencia = '002';
//cuentaDeJuly.cliente = cliente2;


/*
const saldoJuly = cuentaDeJuly.verSaldo();
console.log("El saldo actual en Cuenta July es  " + saldoJuly);

const saldoMariana = cuentaDeMariana.verSaldo();
console.log("El saldo actual en Cuenta Mariana es  " + saldoMariana);

*/
console.log (CuentaCorriente.cantidadCuentas);






import storage from './storage'
import atendente from './atendente';
import cliente from './cliente';
import reservas from './reservas';
import servicos from './servicos';
import horario from './horarios';
import login from './login'
import utils from './utils'

function main() {
    utils.openDropDownMenuAccount()
    utils.exibeNomeUserMenu()
    utils.menuMobile()
    utils.gerarPdfReservas()
    login.login()    
    

    atendente().listaAtendentes()
    atendente().createAtendente()
    atendente().alterarAtendente()
    atendente().deleteAtendente()
    atendente().listaClientes()

    servicos().createServico()
    servicos().alterarServico()
    servicos().deletarServico()

    reservas().createReserva()
    reservas().createReservaCliente()    
    reservas().listaReservas()
    reservas().loadReservasCliente()
    reservas().loadReservasAtendente()
    // reservas().alterarReserva()    
    reservas().modalAlterarAtendimentoAtendente()
    reservas().deleteReserva()
    reservas().cardIndicativosAtendimento()
    reservas().filtrarReservas()

    cliente().createCliente()
    cliente().deleteCliente()
    cliente().alterarClientes()
    cliente().listarCliente();
    cliente().alterarCliente();
    cliente().excluirContarCliente();

    horario().createHorario()
    horario().deleteHorario()
    horario().alterarHorario()
}
// utils.loadEvent()
window.addEventListener('load', e => {
    main()
})

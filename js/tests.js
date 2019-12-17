var expect = chai.expect;

describe('testHorarios', ()=>{
    beforeEach(function() {
        var restaurant = listado.restaurantes[0];
        var horarios = restaurant.horarios;
    });

    it('Si esta disponible el horario se elimina', function(){
        //["13:00", "15:30", "18:00"]
        var horarioReservar = horarios[1];
        restaurant.reservarHorario(horarioReservar);
        expect(horarios).that.does.not.include(horarioReservar);
    })

    it('Cuando se reserva un horario no disponible, el array se mantiene igual', function(){
        var nuevoHorario = "20:30";
        restaurant.reservarHorario(nuevoHorario);
        expect([]).
    })
});
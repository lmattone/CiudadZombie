/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
    /* el sprite contiene la ruta de la imagen
    */
    sprite: 'imagenes/auto_rojo_abajo.png',
    x: 130,
    y: 160,
    ancho: 15,
    alto: 30,
    velocidad: 10,
    vidas: 5,

    mover: function (x, y, tecla) {
        this.x = this.x + x;
        this.y = this.y + y;
    
        if (tecla == 'izq') {
            movX = -this.velocidad;
            this.sprite = 'imagenes/auto_rojo_izquierda.png';
            this.ancho = 30;
            this.alto = 15;
        } else if (tecla == 'arriba') {
            movY =-this.velocidad;
            this.sprite = 'imagenes/auto_rojo_arriba.png';
            this.ancho = 15;
            this.alto = 30;
        } else if (tecla == 'der') {
            movX = this.velocidad;
            this.sprite = 'imagenes/auto_rojo_derecha.png';
            this.ancho = 30;
            this.alto = 15;
        } else if (tecla == 'abajo') {
            movY = this.velocidad;
            this.sprite = 'imagenes/auto_rojo_abajo.png';
            this.ancho = 15;
            this.alto = 30;
        }

    },

    
   
    perderVidas: function (cantVidas) {
        this.vidas -= cantVidas;
    }

    
    // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
    // y todo lo que haga falta para que cumpla con sus responsabilidades
  
}





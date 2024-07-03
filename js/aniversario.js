function actualizarAniversario() {
    const fechaFundacion = new Date(1997, 6, 11); // 11 de julio de 1997 (mes es 0-indexed)
    const fechaActual = new Date();
    
    // Calculamos la diferencia en años
    let aniosTranscurridos = fechaActual.getFullYear() - fechaFundacion.getFullYear();
    
    // Ajustamos si aún no hemos llegado al día del aniversario este año
    if (fechaActual.getMonth() < fechaFundacion.getMonth() || 
        (fechaActual.getMonth() === fechaFundacion.getMonth() && fechaActual.getDate() < fechaFundacion.getDate())) {
      aniosTranscurridos--;
    }
    
    const elementoAniversario = document.querySelector('.display-1[data-toggle="counter-up"]');
    
    if (elementoAniversario) {
      elementoAniversario.textContent = aniosTranscurridos;
    }
  }
  
  // Ejecutar la función cuando se carga la página
  document.addEventListener('DOMContentLoaded', actualizarAniversario);
  
  // Configurar para que se ejecute cada día a medianoche
  setInterval(() => {
    const ahora = new Date();
    if (ahora.getHours() === 0 && ahora.getMinutes() === 0) {
      actualizarAniversario();
    }
  }, 60000); // Revisar cada minuto

const Swal = require('sweetalert2');

export function ConfMsgPopUp(msg, title, confMsg) {
    return Swal.fire({
        title: title || '¿Está seguro?',
        text: msg || "Se sobreescribirá la información",
        icon: 'warning',
        showCancelButton: true,
        // confirmButtonColor: '#3085d6',
        // cancelButtonColor: '#d33',
        confirmButtonText: confMsg || 'Aceptar'
      })
}
export function MsgPopUp(msg, title, type) {
    Swal.fire({
        icon: type || 'error',
        title: title || '',
        text: msg ||'Ha ocurrido un error',
      })
}

export function toastMsgPopUp(msg, title, type, time) {
    Swal.fire({
        
        // background: '#2AE300',
        // color: 'white',
        icon: type || 'error',
        // iconColor: 'white',
        position: 'top-end',
        showConfirmButton: false,
        title: title || 'Ha ocurrido un error',
        text: msg ||'',
        timer: time || 3000,
        timerProgressBar: true,
        toast: true,didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
      })
}
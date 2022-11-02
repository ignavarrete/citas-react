import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const fechaObj = new Date(fecha);
  const mes = fechaObj.getMonth();
  const dia = fechaObj.getDate() + 2;
  const year = fechaObj.getFullYear();

  const fechaUTC = new Date (Date.UTC(year,mes, dia));
  const fechaFormateada = fechaUTC.toLocaleDateString('es-ES');


  const handleEliminar = () => {
    Swal.fire({
      title: 'Estás seguro de eliminar?',
      text: "No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {
          eliminarPaciente(id);
          Swal.fire(
          'Eliminado!',
          'El paciente se ha eliminado con exito.',
          'success'
          )
      }
  })
  }


  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl">

        <h2 className="font-bold mb-3 text-indigo-600 text-center uppercase text-xl">Registro médico</h2>

        <h3 className="font-bold mb-3 text-gray-700 uppercase">Datos del propietario </h3>
        <div className="flex justify-between mx-2 flex-wrap">
          <p className="font-bold mb-3 text-gray-500 uppercase">Propietario: <span className="font-normal normal-case">{propietario}</span></p>
          <p className="font-bold mb-3 text-gray-500 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>
        </div>

        <h3 className="font-bold mb-3 text-gray-700 uppercase mt-2">Datos de la mascota </h3>
        <div className="flex justify-between mx-2 flex-wrap">
          <p className="font-bold mb-3 text-gray-500 uppercase">Nombre: <span className="font-normal normal-case">{nombre}</span></p>
          <p className="font-bold mb-3 text-gray-500 uppercase">Fecha alta: <span className="font-normal normal-case">{fechaFormateada}</span></p>
          <p className="font-bold mb-3 text-gray-500 uppercase overflow-y-auto">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>
        </div>

        <hr className="mt-10" />
      <div className="flex justify-between mt-4 border-gray-200 md:flex-wrap">
        <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg md:w-full lg:w-auto h-10" 
        onClick={ () => setPaciente(paciente)}>Editar</button>

        <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg md:w-full md:mt-6 lg:w-auto lg:mt-0"
        onClick={ handleEliminar}>Eliminar</button>
      </div>
    </div>
  )
}
export default Paciente
const Paciente = ({ paciente, setModPaciente, eliminarPaciente }) => {
  console.log(setModPaciente);

  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const hadleEliminar = ()=>{
    const respuesat = confirm("Deseas eliminar este paciente");

    if(respuesat){
      eliminarPaciente(id);
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-grau-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-grau-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-grau-700 uppercase">
        E-amil: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-grau-700 uppercase">
        Fecha-Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-grau-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        {/* Pasamos "setModPaciente" a traves dee varios componentes, con el fin de traerlo al componente donde llegar la informacion del paciente y modificar el estate con esa informacion */}
        <button
          type="button"
          onClick={() => setModPaciente(paciente)}
          className="py-2 px-10 bg-indigo-600 text-white font-bold uppercase rounded-lg hover:bg-indigo-700"
        >
          Editar
        </button>
        <button
          type="button"
          onClick={hadleEliminar}
          className="py-2 px-10 bg-red-600 text-white font-bold uppercase rounded-lg hover:bg-red-700"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;

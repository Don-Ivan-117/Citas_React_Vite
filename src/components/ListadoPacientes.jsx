import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setModPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {/* Renderizado condicional  */}

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className=" text-indigo-600 font-bold">
              Pacientes y Citas
            </span>
          </p>

          {/* Iteracion sobre el arreglo de pacientes. La iteracion mas usada en React es con .map() */}
          {/* Notisima: Cuando usas llaves {}, se espera que haya una declaración explícita de retorno (return con HTML dentro). Si no tienes la palabra clave return explícita, 
          la función de map no devolverá nada, y por lo tanto, no pasará nada al componente Paciente por lo tanto se usa () en la funcion de flecha en lugar de {} . */}

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setModPaciente={setModPaciente}
              eliminarPaciente = {eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agreagando pacientes {""}
            <span className=" text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;

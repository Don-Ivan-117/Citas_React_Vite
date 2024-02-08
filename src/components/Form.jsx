import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ setPacientes, pacientes, paciente, setModPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);

    const fecha = Date.now().toString(36);

    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos del form
    // Pasamos los valores dentro de un arreglo para poder usar "includes". Este metodo comprueba si algun elemento dentro del arreglo es igual a un string vacio
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Todos los campos son obligatorios");

      // Error en el form
      setError(true);
      return;
    }
    // Todoso los campos rellenados = verdadero
    setError(false);

    // Objeto de paciente que hace uso de redundancia
    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      objPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((paceinteState) =>
        paceinteState.id === paciente.id ? objPaciente : paceinteState
      );

      setPacientes(pacientesActualizados);
      setModPaciente({});
    } else {
      //Nuevo registro
      // Pasada las validaciones, setPacientes recibe la información del Form y modifica el valor de "pacientes" existente en el componente de App.jsx
      // Para poder usar mas citas, se crea un copia del arreglo actual y se le agrega la nueva informacion
      objPaciente.id = generarId();
      setPacientes([...pacientes, objPaciente]);
    }

    // Reiniciar el Form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {/* RENDERIZADO CONDICIONAL */}
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota
          </label>
          <input
            value={nombre}
            // Evento que recibe lo que se escribe en el input, se le asigna al modificador de nombre y a traves de la variable a la cual modifica es que se refleja en tiempo real en el input
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre propietario
          </label>
          <input
            value={propietario}
            onChange={(e) => {
              setPropietario(e.target.value);
            }}
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            E-mail
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            type="email"
            placeholder="E-mail del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            value={fecha}
            onChange={(e) => {
              setFecha(e.target.value);
            }}
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
            id="sintomas"
            type="date"
            placeholder="Describe los sintomas de la cosa..."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all hover:cursor-pointer "
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Form;

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  // Declaramos nuestro modificador aqui (setpacientes), lo pasamos a Form.jsx como props, y desde ese componente podemos cambiar el modificador de App.jsx con los valores en Form.jsx
  const [pacientes, setPacientes] = useState([]);

  // Editar paciente
  const [modPaciente, setModPaciente] = useState({});

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [] ;
      setPacientes(pacientesLS)
    };
    obtenerLocalStorage();
  }, []);

  useEffect(() => {
    // Local Storage
    localStorage.setItem("paciente", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesNuevos = pacientes.filter((paciente) => paciente.id !== id); // nuevo arreglo donde no esta el objeto que eliminamos
    setPacientes(pacientesNuevos);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex ">
        {/* App, recibe la informacion de form */}
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={modPaciente}
          setModPaciente={setModPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setModPaciente={setModPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;

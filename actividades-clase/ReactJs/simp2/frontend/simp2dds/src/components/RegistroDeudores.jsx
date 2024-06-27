import React from "react";
import { useForm } from "react-hook-form";
import serviciosDeudores from "../services/deudoresService";

function RegistroDeudores() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const deudor = {
        ApellidoYNombre: data.apellidoYNombre,
        FechaDeuda: data.fechaDeuda,
        ImporteAdeudado: data.importeAdeudado,
      };
      await serviciosDeudores.postDeudor(deudor);
      alert("Deudor registrado exitosamente");
    } catch (error) {
      console.log(error);
      alert("Hubo un error al registrar el deudor");
    }
  };

return (
    <div className="container">
        <h1 className="h1">Registro de Deudores</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="apellidoYNombre">Apellido y Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="apellidoYNombre"
                    name="apellidoYNombre"
                    {...register("apellidoYNombre", { required: true })}
                />
                {errors.apellidoYNombre && <span>Este campo es requerido</span>}
            </div>
            <div className="form-group">
                <label htmlFor="fechaDeuda">Fecha de Deuda</label>
                <input
                    type="date"
                    className="form-control"
                    id="fechaDeuda"
                    name="fechaDeuda"
                    {...register("fechaDeuda", { required: true })}
                />
                {errors.fechaDeuda && <span>Este campo es requerido</span>}
            </div>
            <div className="form-group">
                <label htmlFor="importeAdeudado">Importe Adeudado</label>
                <input
                    type="number"
                    className="form-control"
                    id="importeAdeudado"
                    name="importeAdeudado"
                    {...register("importeAdeudado", { required: true })}
                />
                {errors.importeAdeudado && <span>Este campo es requerido</span>}
            </div>
            <div className="button-group">
                <button type="submit" className="btn btn-primary">
                    Registrar
                </button>
                <button className="btn btn-secondary" type="reset">Volver</button>
            </div>
        </form>
    </div>
);
}

export default RegistroDeudores;

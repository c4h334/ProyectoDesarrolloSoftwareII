// Propiedades que recibe el modal de confirmación
type ConfirmModalProps = {
  message: string;// Mensaje que se mostrará dentro del modal
  onConfirm: () => void;// Función que se ejecuta al confirmar
  onCancel: () => void;// Función que se ejecuta al cancelar
};
// Modal reutilizable para confirmar acciones del usuario
// Se utiliza, por ejemplo, antes de guardar cambios importantes
export function ConfirmModal({ message, onConfirm, onCancel }: ConfirmModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h3 className="text-lg font-semibold mb-4">Confirmar cambios</h3>
        <p className="text-sm text-gray-600 mb-6">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}


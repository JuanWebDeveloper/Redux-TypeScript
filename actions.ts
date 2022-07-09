// Interfaz para las acciones.
interface Action {
  type: string;
  payload?: any;
}

const incrementAction: Action = {
  type: 'INCREMENT',
};

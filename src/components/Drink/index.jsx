import './style.css';
import { Layer } from '../Layer/layer';

export const Drink = () => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src="/cups/espresso.png" />
        </div>
        <div className="drink__info">
          <h3>Espresso</h3>
          <Layer />
        </div>
      </div>
      <div className="drink__controls">
        <button className="order-btn">Objednat</button>
      </div>
    </div>
  );
};

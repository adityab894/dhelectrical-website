import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductMegaMenu({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="mega-backdrop" onClick={onClose}>
      <div className="mega-menu" onMouseLeave={onClose} onClick={(e) => e.stopPropagation()}>
        <div className="mega-col">
          <h4 className="mega-head">Band Heaters</h4>
          <ul>
            <li><NavLink to="/products">Ceramic Band Heaters</NavLink></li>
            <li><NavLink to="/products">Energy Saving Band Heaters</NavLink></li>
            <li><NavLink to="/products">Ceramic Die Heaters</NavLink></li>
            <li><NavLink to="/products">Air Cooled Ceramic Band Heaters</NavLink></li>
            <li><NavLink to="/products">Energy Saving Insulation Jackets for Band Heaters</NavLink></li>
            <li><NavLink to="/products">Alumimium Cast Band Heater</NavLink></li>
            <li><NavLink to="/products">Mica Band Heater</NavLink></li>
          </ul>

          <h4 className="mega-head">Nozzle Heaters</h4>
          <ul>
            <li><NavLink to="/products">Coil Type Nozzle Heaters</NavLink></li>
            <li><NavLink to="/products">Sealed Mica Nozzle Heaters</NavLink></li>
          </ul>
        </div>

        <div className="mega-col">
          <h4 className="mega-head">Cartridge Heaters</h4>
          <ul>
            <li><NavLink to="/products">High Density Cartridge Heaters</NavLink></li>
            <li><NavLink to="/products">Low &amp; Medium Density Cartridge Heaters</NavLink></li>
          </ul>

          <h4 className="mega-head">Infrared Heaters</h4>
          <ul>
            <li><NavLink to="/products">Shortwave Infrared Heaters</NavLink></li>
            <li><NavLink to="/products">Medium Wave Quartz Infrared Heaters</NavLink></li>
            <li><NavLink to="/products">Ceramic Infrared Heaters</NavLink></li>
          </ul>

          <h4 className="mega-head">Strip Heaters</h4>
          <ul>
            <li><NavLink to="/products">Mica Strip Heaters</NavLink></li>
            <li><NavLink to="/products">Ceramic Strip Heaters</NavLink></li>
            <li><NavLink to="/products">Finned Strip Heaters</NavLink></li>
          </ul>
        </div>

        <div className="mega-col">
          <h4 className="mega-head">Coil Heaters</h4>
          <ul>
            <li><NavLink to="/products">Micro Tubular Coil Heaters</NavLink></li>
            <li><NavLink to="/products">Mini Coil Heaters</NavLink></li>
            <li><NavLink to="/products">Pressed in Brass Coil Heater</NavLink></li>
            <li><NavLink to="/products">Micro Coil Heaters</NavLink></li>
            <li><NavLink to="/products">Coil Heaters with Stainless Steel &amp; Brass Casted Covers</NavLink></li>
          </ul>

          <h4 className="mega-head">Manifold Heaters</h4>
          <ul>
            <li><NavLink to="/products">Flexible Tubular Heaters</NavLink></li>
            <li><NavLink to="/products">Manifold Tubular Heaters</NavLink></li>
          </ul>
        </div>

        <div className="mega-col">
          <h4 className="mega-head">Tubular Heating Elements</h4>
          <ul>
            <li><NavLink to="/products">Tubular Heaters</NavLink></li>
            <li><NavLink to="/products">Finned Tubular Heaters</NavLink></li>
            <li><NavLink to="/products">Immersion Heaters</NavLink></li>
          </ul>

          <h4 className="mega-head">Temperature Controllers, Timers &amp; Counters</h4>
          <ul>
            <li><NavLink to="/products">PID Controllers</NavLink></li>
            <li><NavLink to="/products">Digital Temperature Controller</NavLink></li>
            <li><NavLink to="/products">Analog Temperature Controller</NavLink></li>
            <li><NavLink to="/products">Presettable Counters</NavLink></li>
            <li><NavLink to="/products">Presettable Timers</NavLink></li>
          </ul>

          <h4 className="mega-head">Thermocouples</h4>
          <ul>
            <li><NavLink to="/products">Thermocouples</NavLink></li>
          </ul>

          <h4 className="mega-head">Porcelain Heaters</h4>
          <ul>
            <li><NavLink to="/products">Porcelain Heaters</NavLink></li>
          </ul>

          <h4 className="mega-head">Accessories</h4>
          <ul>
            <li><NavLink to="/products">Single Inlet Blower</NavLink></li>
            <li><NavLink to="/products">Double Inlet Blower</NavLink></li>
            <li><NavLink to="/products">Plugs</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}



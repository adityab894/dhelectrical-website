import ceramicBandHeaterImg from '../assets/Ceramic-Band-Heater/ceramic-band-heater.png';
import brassNozzleHeaterImg from '../assets/Brass-Nozzle-Heater/brass-nozzle-heater.png';
import ceramicJacketedHeaterImg from '../assets/Ceramic-Jacketed-Heater/ceramic-jacketed-heater.jpg';
import micaBandHeaterImg from '../assets/MIca-Band-Heater/mica-band-heater.webp';
import quotePdf from '../assets/quote.pdf';

const fallbackRemote = (path) =>
  `https://images.unsplash.com/${path}?auto=format&fit=crop&w=960&q=80`;

export const productCatalog = [
  {
    name: 'Band Heaters',
    slug: 'band-heaters',
    heroImage: micaBandHeaterImg,
    headline:
      'Precision band heaters engineered for uniform barrel temperatures and energy efficiency.',
    description:
      'Our band heaters are designed to deliver uniform heat transfer, lower maintenance, and consistent production performance across a variety of plastic and packaging machinery.',
    products: [
      {
        name: 'Ceramic Band Heaters',
        slug: 'ceramic-band-heaters',
        cardDescription:
          'High-efficiency heaters with thermal insulation for reduced heat loss and improved productivity.',
        image: ceramicBandHeaterImg,
        detail: {
          heroImage: ceramicBandHeaterImg,
          gallery: [
            ceramicBandHeaterImg,
            fallbackRemote('photo-1618005198919-d3d4b5a92eee'),
            fallbackRemote('photo-1581774569948-0babd8507c36'),
          ],
          downloadUrl: quotePdf,
          description:
            'Ceramic band heaters combine robust alumina insulators with nichrome coils to deliver outstanding thermal efficiency. The external insulation minimizes heat losses while maintaining a cool-to-touch outer surface, protecting operators and equipment.',
          specs: [
            { label: 'Heating Element', value: 'Nichrome 80/20, Kanthal A1' },
            { label: 'Sheath Material', value: 'Stainless Steel / Aluminised Steel' },
            { label: 'Max Temperature', value: '870°C continuous' },
            { label: 'Insulation', value: 'Ceramic interlocking tiles with mica barrier' },
          ],
          features: [
            'Segmented ceramic construction for uniform radial heat',
            'Integrated insulation jacket to reduce energy consumption by up to 30%',
            'Custom clamping styles including barrel nuts, latches, or quick release',
            'Optional thermocouple slots and cut-outs for instrumentation ports',
          ],
          applications: [
            'Injection and blow moulding machines',
            'Extrusion barrels and dies',
            'Plastic recycling extruders',
            'Food processing barrels requiring precise heat',
          ],
        },
      },
      {
        name: 'Energy Saving Band Heaters',
        slug: 'energy-saving-band-heaters',
        cardDescription:
          'Insulated band heaters designed to keep heat within the process and reduce energy spend.',
        image: micaBandHeaterImg,
        detail: {
          heroImage: micaBandHeaterImg,
          description:
            'Energy saving band heaters incorporate high-temperature insulation jackets and optimised winding patterns to reduce losses to ambient, speeding up heat-up times and stabilising barrel temperature profiles.',
          specs: [
            { label: 'Energy Savings', value: 'Up to 35% lower heat loss vs. standard band heater' },
            { label: 'Sheath', value: 'Stainless steel or aluminised steel' },
            { label: 'Insulation', value: 'High-density ceramic fibre blanket' },
          ],
          features: [
            'Pre-fitted removable insulation blanket',
            'Reduced external surface temperatures for improved safety',
            'Rapid heat-up and responsive control',
            'Available with integral thermocouple pocket',
          ],
          applications: [
            'High-output extrusion lines',
            'Blow moulding machines',
            'PET processing equipment',
          ],
        },
      },
      {
        name: 'Ceramic Die Heaters',
        slug: 'ceramic-die-heaters',
        cardDescription:
          'Robust preformed ceramic heaters for circular and flat dies operating at elevated temperatures.',
        image: ceramicBandHeaterImg,
        detail: {
          heroImage: ceramicBandHeaterImg,
          description:
            'Die heaters are custom formed to match the geometry of extrusion and sheet dies. Interlocking ceramic segments ensure uniform surface loading while providing mechanical rigidity and excellent electrical insulation.',
          specs: [
            { label: 'Max Temperature', value: '950°C peak' },
            { label: 'Voltage Range', value: 'Up to 480 VAC' },
          ],
          features: [
            'Custom tooling for precise die coverage',
            'Optional split design for simplified maintenance',
            'Uniform watt density to eliminate hot spots',
          ],
          applications: ['Sheet & film dies', 'Wire coating dies', 'Profile extrusion tooling'],
        },
      },
      {
        name: 'Air Cooled Ceramic Band Heaters',
        slug: 'air-cooled-ceramic-band-heaters',
        cardDescription:
          'Hybrid heater assemblies with integrated blowers for rapid cooling cycles on high-speed lines.',
        image: ceramicBandHeaterImg,
        detail: {
          heroImage: ceramicBandHeaterImg,
          description:
            'Air cooled ceramic band heaters integrate high-performance ceramic heating segments with forced-air cooling jackets. This provides rapid heat removal without stopping production, ideal for high-precision processing.',
          features: [
            'Integrated stainless cooling channels with blower ports',
            'Independent heating and cooling circuits for closed-loop control',
            'Available with hinged designs for quick changeovers',
          ],
          applications: [
            'PET preform production',
            'Extrusion lines requiring rapid barrel temperature adjustments',
          ],
        },
      },
      {
        name: 'Energy Saving Insulation Jackets',
        slug: 'energy-saving-insulation-jackets',
        cardDescription:
          'Retro-fit insulation jackets for existing band heaters to reduce heat loss and improve operator comfort.',
        image: micaBandHeaterImg,
        detail: {
          heroImage: micaBandHeaterImg,
          description:
            'Insulation jackets are fabricated from high-temperature textiles with reflective layers to retain radiant heat. They are removable, washable, and sized to suit virtually any band heater or barrel surface.',
          features: [
            'Multi-layer insulation with hook-and-loop fastening',
            'Reduces outer surface temperature by up to 60%',
            'Custom cut-outs for cabling, thermocouples, and ports',
          ],
          applications: ['Retrofit on existing machines', 'Energy efficiency upgrade projects'],
        },
      },
      {
        name: 'Aluminium Cast Band Heater',
        slug: 'aluminium-cast-band-heater',
        cardDescription:
          'Cast aluminium heater bodies delivering excellent heat transfer and structural rigidity.',
        image: ceramicBandHeaterImg,
        detail: {
          heroImage: ceramicBandHeaterImg,
          description:
            'Cast heaters utilise nichrome coils encapsulated in aluminium alloy for superior heat transfer and durability. They are ideal for high-pressure zones and harsh operating environments.',
          features: [
            'Single or dual voltage options',
            'Machined to match barrel geometry',
            'Optional cooling coils and temperature sensors',
          ],
          applications: ['Blown film extruders', 'Rubber processing equipment'],
        },
      },
      {
        name: 'Mica Band Heater',
        slug: 'mica-band-heater',
        cardDescription:
          'Cost-effective band heater built on mica insulation for uniform heating up to 480°C.',
        image: micaBandHeaterImg,
        detail: {
          heroImage: micaBandHeaterImg,
          description:
            'Mica band heaters provide economical heating for moderate temperature processes. Wound nichrome resistance wire is insulated with high-grade mica sheets and encased in stainless steel.',
          specs: [
            { label: 'Max Temperature', value: '480°C' },
            { label: 'Thickness', value: '3.2 mm nominal' },
          ],
          features: [
            'Low profile design for tight clearances',
            'Available with built-in thermocouples',
            'Various clamping methods including straps and spring loaded latches',
          ],
          applications: ['Injection moulding barrels', 'Extruder feed zones', 'Packaging sealing bars'],
        },
      },
    ],
  },
  {
    name: 'Nozzle Heaters',
    slug: 'nozzle-heaters',
    heroImage: brassNozzleHeaterImg,
    headline: 'Compact heaters designed for precise nozzle temperature control.',
    description:
      'Nozzle heaters deliver consistent heat to critical tooling and runners. Our range provides rugged construction with easy-to-install designs for demanding hot runner applications.',
    products: [
      {
        name: 'Coil Type Nozzle Heaters',
        slug: 'coil-type-nozzle-heaters',
        cardDescription:
          'High watt density coil heaters with stainless steel sheath for excellent heat transfer.',
        image: brassNozzleHeaterImg,
        detail: {
          heroImage: brassNozzleHeaterImg,
          description:
            'Micro tubular coil heaters are swaged for exceptional watt density and uniform heat distribution. The compact profile makes them ideal for hot-runner and nozzle applications requiring tight tolerances.',
          features: [
            'Precision wound resistance wire for uniform temperature',
            'Integral thermocouple options',
            'Available with right-angle or straight cold end exits',
          ],
          applications: ['Hot runner systems', 'Sprue bushings', 'Sealing bars'],
        },
      },
      {
        name: 'Sealed Mica Nozzle Heaters',
        slug: 'sealed-mica-nozzle-heaters',
        cardDescription:
          'Mica insulated nozzle heaters with brass or stainless encapsulation for moisture protection.',
        image: brassNozzleHeaterImg,
        detail: {
          heroImage: brassNozzleHeaterImg,
          description:
            'Sealed mica nozzle heaters use high-temperature mica insulation with a protective sheath to prevent plastic ingress. Custom formed bands ensure intimate contact with nozzle surfaces.',
          features: [
            'Moisture-resistant design with sealed edges',
            'Integrated clamping hardware',
            'Wide voltage and wattage options',
          ],
          applications: ['Injection moulding nozzles', 'Hot sprue bushings'],
        },
      },
    ],
  },
  {
    name: 'Cartridge Heaters',
    slug: 'cartridge-heaters',
    heroImage: fallbackRemote('photo-1618005198919-d3d4b5a92eee'),
    headline: 'High watt density cartridge heaters for maximum uptime and uniform heating.',
    description:
      'Cartridge heaters are manufactured with swaged magnesium oxide insulation to provide uniform temperatures, long life, and excellent dielectric strength.',
    products: [
      {
        name: 'High Density Cartridge Heaters',
        slug: 'high-density-cartridge-heaters',
        cardDescription:
          'Superior heat transfer with swaged construction for operating temperatures up to 760°C.',
        image: fallbackRemote('photo-1618005198919-d3d4b5a92eee'),
        detail: {
          heroImage: fallbackRemote('photo-1618005198919-d3d4b5a92eee'),
          description:
            'High density cartridge heaters are swaged to maximize dielectric strength and thermal conductivity. They deliver precise heat in tooling applications with minimal temperature gradients.',
          features: [
            'Incoloy or stainless sheath options',
            'Distributed wattage and cold zones available',
            'Leads, pins, or threaded terminals',
          ],
          applications: ['Plastic injection mould tools', 'Packaging sealing jaws', 'Medical equipment'],
        },
      },
      {
        name: 'Low & Medium Density Cartridge Heaters',
        slug: 'low-medium-density-cartridge-heaters',
        cardDescription:
          'Economical cartridge heaters for moderate temperature tooling and dies.',
        image: fallbackRemote('photo-1602529712680-0ebf1b40ebf9'),
        detail: {
          heroImage: fallbackRemote('photo-1602529712680-0ebf1b40ebf9'),
          description:
            'Low and medium density heaters provide cost-effective solutions for dies and fixtures operating at lower temperatures. Magnesium oxide insulation is compacted to provide reliable performance.',
          features: [
            'Custom diameters from 6 mm upward',
            'Leads protected with flexible braid or stainless steel hose',
            'Optional threaded bushings for simplified installation',
          ],
          applications: ['Food processing tooling', 'Hot plates', 'Lab equipment'],
        },
      },
    ],
  },
  {
    name: 'Coil Heaters',
    slug: 'coil-heaters',
    heroImage: fallbackRemote('photo-1581774569948-0babd8507c36'),
    headline: 'Flexible micro-coil heaters for complex runner geometry and channel heating.',
    description:
      'Coil heaters are designed around compact tubular elements that can be wound into different shapes and profiles for moulds, hot runners, and sealing equipment.',
    products: [
      {
        name: 'Micro Tubular Coil Heaters',
        slug: 'micro-tubular-coil-heaters',
        cardDescription: 'Ultra-small profile coil heaters with even heat distribution.',
        image: fallbackRemote('photo-1581774569948-0babd8507c36'),
        detail: {
          heroImage: fallbackRemote('photo-1581774569948-0babd8507c36'),
          description:
            'Micro tubular heaters are formed from compacted magnesium oxide insulated coils that can be precision wound to match runner diameters down to a few millimeters.',
        },
      },
      {
        name: 'Mini Coil Heaters',
        slug: 'mini-coil-heaters',
        cardDescription: 'Low-profile heaters for tight-fit nozzle applications.',
        image: fallbackRemote('photo-1581774569948-0babd8507c36'),
        detail: {
          heroImage: fallbackRemote('photo-1581774569948-0babd8507c36'),
          description:
            'Mini coil heaters provide compact heating for miniature cavities and nozzles, supporting precise temperature control in micro-moulding.',
        },
      },
      {
        name: 'Pressed in Brass Coil Heater',
        slug: 'pressed-in-brass-coil-heater',
        cardDescription: 'Brass encapsulated heaters for improved conduction.',
        image: brassNozzleHeaterImg,
        detail: {
          heroImage: brassNozzleHeaterImg,
          description:
            'Pressed-in brass coil heaters integrate the coil in a machined brass body for excellent heat transfer and mechanical protection.',
        },
      },
      {
        name: 'Micro Coil Heaters',
        slug: 'micro-coil-heaters',
        cardDescription: 'High watt density micro heaters for precise hot runner control.',
        image: brassNozzleHeaterImg,
        detail: {
          heroImage: brassNozzleHeaterImg,
          description:
            'Micro coil heaters deliver tight temperature tolerances along extended runner lengths with uniform heating.',
        },
      },
      {
        name: 'Coil Heaters with Stainless & Brass Casted Covers',
        slug: 'coil-heaters-stainless-brass-covers',
        cardDescription: 'Protective cast covers for rugged environments.',
        image: brassNozzleHeaterImg,
        detail: {
          heroImage: brassNozzleHeaterImg,
          description:
            'Cast covers shield coil heaters from mechanical damage and contaminants, extending service life in harsh environments.',
        },
      },
    ],
  },
  {
    name: 'Strip Heaters',
    slug: 'strip-heaters',
    heroImage: fallbackRemote('photo-1509395176047-4a66953fd231'),
    headline: 'Surface heaters providing uniform heat transfer to plates and tooling.',
    description:
      'Strip heaters are versatile surface heaters assembled with mica or ceramic insulation for ovens, dies, and forming equipment.',
    products: [
      {
        name: 'Mica Strip Heaters',
        slug: 'mica-strip-heaters',
        cardDescription:
          'Low profile strip heaters using mica insulation for temperatures up to 480°C.',
        image: fallbackRemote('photo-1509395176047-4a66953fd231'),
        detail: {
          heroImage: fallbackRemote('photo-1509395176047-4a66953fd231'),
          description:
            'Mica strip heaters provide smooth surface heating for packaging and sealing machinery. Stainless steel sheathing ensures durability and rapid heat transfer.',
        },
      },
      {
        name: 'Ceramic Strip Heaters',
        slug: 'ceramic-strip-heaters',
        cardDescription:
          'High temperature strip heaters with ceramic insulation for heavy duty applications.',
        image: fallbackRemote('photo-1509395176047-4a66953fd231'),
        detail: {
          heroImage: fallbackRemote('photo-1509395176047-4a66953fd231'),
          description:
            'Ceramic strip heaters are capable of operating up to 650°C and feature superior thermal insulation to maximize efficiency.',
        },
      },
      {
        name: 'Finned Strip Heaters',
        slug: 'finned-strip-heaters',
        cardDescription:
          'Strip heaters with aluminium fins to increase surface area for air heating.',
        image: fallbackRemote('photo-1509395176047-4a66953fd231'),
        detail: {
          heroImage: fallbackRemote('photo-1509395176047-4a66953fd231'),
          description:
            'Finned strip heaters channel heat into air streams and ducts for drying, curing, and comfort heating applications.',
        },
      },
    ],
  },
  {
    name: 'Infrared Heaters',
    slug: 'infrared-heaters',
    heroImage: fallbackRemote('photo-1618005198937-9a518f84f7f5'),
    headline: 'Instant radiant heating solutions covering short to medium wave requirements.',
    description:
      'Infrared heaters deliver targeted radiant heat for drying, curing, and thermoforming processes.',
    products: [
      {
        name: 'Shortwave Infrared Heaters',
        slug: 'shortwave-infrared-heaters',
        cardDescription: 'Halogen infrared emitters for rapid heat-up and high intensity output.',
        image: fallbackRemote('photo-1618005198937-9a518f84f7f5'),
        detail: {
          heroImage: fallbackRemote('photo-1618005198937-9a518f84f7f5'),
          description:
            'Shortwave infrared heaters reach operating temperature within seconds, providing high intensity energy for demanding processes.',
        },
      },
      {
        name: 'Medium Wave Quartz Infrared Heaters',
        slug: 'medium-wave-quartz-infrared-heaters',
        cardDescription:
          'Quartz tube emitters delivering controllable radiant energy for plastics processing.',
        image: fallbackRemote('photo-1618005198937-9a518f84f7f5'),
        detail: {
          heroImage: fallbackRemote('photo-1618005198937-9a518f84f7f5'),
          description:
            'Medium wave heaters provide deeper heat penetration for drying coatings and heating thermoplastics prior to forming.',
        },
      },
      {
        name: 'Ceramic Infrared Heaters',
        slug: 'ceramic-infrared-heaters',
        cardDescription:
          'Ceramic emitters with long wave output for gentle, uniform heating of surfaces.',
        image: fallbackRemote('photo-1618005198937-9a518f84f7f5'),
        detail: {
          heroImage: fallbackRemote('photo-1618005198937-9a518f84f7f5'),
          description:
            'Ceramic infrared heaters offer consistent long-wave radiation for applications such as thermoforming and drying.',
        },
      },
    ],
  },
  {
    name: 'Manifold Heaters',
    slug: 'manifold-heaters',
    heroImage: fallbackRemote('photo-1517430816045-df4b7de11d1d'),
    headline: 'Flexible tubular heaters for manifolds and hot runner systems.',
    description:
      'Manifold heaters are formed and brazed to match complex runner layouts, providing uniform heat distribution and reliable performance.',
    products: [
      {
        name: 'Flexible Tubular Heaters',
        slug: 'flexible-tubular-heaters',
        cardDescription:
          'Formable tubular heaters that can be bent on-site for manifold integration.',
        image: fallbackRemote('photo-1517430816045-df4b7de11d1d'),
        detail: {
          heroImage: fallbackRemote('photo-1517430816045-df4b7de11d1d'),
          description:
            'Flexible tubular heaters are annealed to allow precise forming around manifolds while maintaining dielectric integrity.',
        },
      },
      {
        name: 'Manifold Tubular Heaters',
        slug: 'manifold-tubular-heaters',
        cardDescription:
          'Prefabricated tubular sets designed for specific manifold layouts.',
        image: fallbackRemote('photo-1517430816045-df4b7de11d1d'),
        detail: {
          heroImage: fallbackRemote('photo-1517430816045-df4b7de11d1d'),
          description:
            'Manifold tubular heaters are brazed to copper or stainless manifolds to provide uniform temperature profiles across hot runner systems.',
        },
      },
    ],
  },
  {
    name: 'Tubular Heating Elements',
    slug: 'tubular-heating-elements',
    heroImage: fallbackRemote('photo-1617104055230-c54784dc795e'),
    headline: 'Custom formed tubular elements built for immersion, duct, and radiant heating.',
    description:
      'Tubular heating elements are the workhorse of industrial heating. We provide straight, formed, and finned options for immersion, air, or radiant applications.',
    products: [
      {
        name: 'Tubular Heaters',
        slug: 'tubular-heaters',
        cardDescription:
          'Standard tubular elements with magnesium oxide insulation and stainless sheath.',
        image: fallbackRemote('photo-1617104055230-c54784dc795e'),
        detail: {
          heroImage: fallbackRemote('photo-1617104055230-c54784dc795e'),
          description:
            'Straight or formed tubular heaters for ovens, dies, and industrial equipment. Available in a wide range of diameters, watt densities, and termination styles.',
        },
      },
      {
        name: 'Finned Tubular Heaters',
        slug: 'finned-tubular-heaters',
        cardDescription: 'Aluminium finned tubular heaters for forced air heating.',
        image: fallbackRemote('photo-1617104055230-c54784dc795e'),
        detail: {
          heroImage: fallbackRemote('photo-1617104055230-c54784dc795e'),
          description:
            'Finned tubular heaters increase surface area for efficient heat transfer to air or gases in ducts and ovens.',
        },
      },
      {
        name: 'Immersion Heaters',
        slug: 'immersion-heaters',
        cardDescription:
          'Tubular elements brazed or welded into flanges for liquid heating.',
        image: fallbackRemote('photo-1617104055230-c54784dc795e'),
        detail: {
          heroImage: fallbackRemote('photo-1617104055230-c54784dc795e'),
          description:
            'Immersion heaters are built with welded flanges or threaded fittings to deliver heat directly into tanks, baths, and reservoirs.',
        },
      },
    ],
  },
  {
    name: 'Porcelain Heaters',
    slug: 'porcelain-heaters',
    heroImage: ceramicJacketedHeaterImg,
    headline:
      'High-temperature porcelain heaters built with steatite segments for demanding furnace applications.',
    description:
      'Porcelain heaters deliver radiant or convection heat inside furnaces, ovens, and plating tanks, offering excellent dielectric strength and corrosion resistance.',
    products: [
      {
        name: 'Porcelain Heaters',
        slug: 'porcelain-heaters',
        cardDescription: 'Segmented porcelain heaters for radiant furnace heating.',
        image: ceramicJacketedHeaterImg,
        detail: {
          heroImage: ceramicJacketedHeaterImg,
          description:
            'Porcelain heaters consist of resistant wire wound through steatite segments and protected within ceramic tubes. They are ideal for high-temperature furnaces and industrial ovens.',
        },
      },
    ],
  },
  {
    name: 'Thermocouples',
    slug: 'thermocouples',
    heroImage: fallbackRemote('photo-1618005198905-2f4bf64d8408'),
    headline: 'Temperature sensing solutions to complement our heating systems.',
    description:
      'We provide a comprehensive range of thermocouples, RTDs, and temperature sensors built to withstand industrial environments.',
    products: [
      {
        name: 'Thermocouples',
        slug: 'thermocouples',
        cardDescription:
          'Custom thermocouple assemblies for process monitoring and closed-loop control.',
        image: fallbackRemote('photo-1618005198905-2f4bf64d8408'),
        detail: {
          heroImage: fallbackRemote('photo-1618005198905-2f4bf64d8408'),
          description:
            'Thermocouples are available in J, K, T, and N types with flexible leads, mineral insulated cables, and protective sheaths to suit every industrial application.',
        },
      },
    ],
  },
  {
    name: 'Temperature Controllers, Timers & Counters',
    slug: 'temperature-controllers',
    heroImage: fallbackRemote('photo-1579546928687-0f9be64b995a'),
    headline:
      'Control systems designed to integrate with heaters for precise temperature management.',
    description:
      'Digital and analog controllers, timers, and counters provide accurate process control and monitoring when paired with our heating solutions.',
    products: [
      {
        name: 'PID Controllers',
        slug: 'pid-controllers',
        cardDescription:
          'Advanced PID temperature controllers with autotuning and alarm outputs.',
        image: fallbackRemote('photo-1579546928687-0f9be64b995a'),
        detail: {
          heroImage: fallbackRemote('photo-1579546928687-0f9be64b995a'),
          description:
            'PID controllers deliver precise closed-loop temperature regulation with user-friendly interfaces and communication capabilities.',
        },
      },
      {
        name: 'Digital Temperature Controller',
        slug: 'digital-temperature-controller',
        cardDescription: 'Panel-mounted digital controllers with SSR or relay outputs.',
        image: fallbackRemote('photo-1579546928687-0f9be64b995a'),
        detail: {
          heroImage: fallbackRemote('photo-1579546928687-0f9be64b995a'),
          description:
            'Digital controllers feature bright displays, programmable setpoints, and alarm configurations for flexible process control.',
        },
      },
      {
        name: 'Analog Temperature Controller',
        slug: 'analog-temperature-controller',
        cardDescription:
          'Simple dial-based controllers for manual setpoint adjustment.',
        image: fallbackRemote('photo-1579546928687-0f9be64b995a'),
        detail: {
          heroImage: fallbackRemote('photo-1579546928687-0f9be64b995a'),
          description:
            'Analog controllers provide rugged and intuitive operation for basic heating applications.',
        },
      },
      {
        name: 'Presettable Counters',
        slug: 'presettable-counters',
        cardDescription: 'Electronic counters for production monitoring.',
        image: fallbackRemote('photo-1579546928687-0f9be64b995a'),
        detail: {
          heroImage: fallbackRemote('photo-1579546928687-0f9be64b995a'),
          description:
            'Counters track cycles and events to improve process traceability and maintenance planning.',
        },
      },
      {
        name: 'Presettable Timers',
        slug: 'presettable-timers',
        cardDescription: 'Timers to sequence heaters, blowers, and ancillary equipment.',
        image: fallbackRemote('photo-1579546928687-0f9be64b995a'),
        detail: {
          heroImage: fallbackRemote('photo-1579546928687-0f9be64b995a'),
          description:
            'Timers provide accurate control over heating cycles, ensuring repeatable process results.',
        },
      },
    ],
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    heroImage: fallbackRemote('photo-1520607162513-77705c0f0d4a'),
    headline: 'Complementary hardware to complete your heating installation.',
    description:
      'Accessories such as blowers, plugs, and mounting hardware ensure your heating projects run smoothly from installation to operation.',
    products: [
      {
        name: 'Single Inlet Blower',
        slug: 'single-inlet-blower',
        cardDescription:
          'Compact blowers designed to partner with air-cooled band heaters.',
        image: fallbackRemote('photo-1520607162513-77705c0f0d4a'),
        detail: {
          heroImage: fallbackRemote('photo-1520607162513-77705c0f0d4a'),
          description:
            'Single inlet blowers deliver targeted airflow to maintain stable barrel temperatures in high-speed applications.',
        },
      },
      {
        name: 'Double Inlet Blower',
        slug: 'double-inlet-blower',
        cardDescription:
          'Dual-inlet blowers for higher volume air cooling applications.',
        image: fallbackRemote('photo-1520607162513-77705c0f0d4a'),
        detail: {
          heroImage: fallbackRemote('photo-1520607162513-77705c0f0d4a'),
          description:
            'Double inlet blowers provide balanced airflow to multiple heater zones.',
        },
      },
      {
        name: 'Plugs',
        slug: 'plugs',
        cardDescription:
          'High-temperature connectors and plugs compatible with heater assemblies.',
        image: fallbackRemote('photo-1520607162513-77705c0f0d4a'),
        detail: {
          heroImage: fallbackRemote('photo-1520607162513-77705c0f0d4a'),
          description:
            'Industrial-grade plugs and connectors handle elevated temperatures and currents while maintaining safety.',
        },
      },
    ],
  },
];

export const categoryMap = productCatalog.reduce((acc, category) => {
  acc[category.slug] = category;
  return acc;
}, {});

export const productMap = productCatalog.reduce((acc, category) => {
  category.products.forEach((product) => {
    acc[`${category.slug}/${product.slug}`] = {
      category,
      product,
    };
  });
  return acc;
}, {});


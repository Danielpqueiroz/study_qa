import GetUsuarios from "../individual/usuarios/GetAll/carga.js";
import { group, sleep } from 'k6';

export default function() {
    group('GETUSUARIOS - Controller Usuarios', () => {
        GetUsuarios();
    });
    sleep(1);

    
}
// import { group, sleep } from 'k6';
// import { carga } from '../individual/usuarios/GetAll/carga.js';

// export default function() {
//     group('CREATE AND GET USER - Flow', () => {
//         carga(); // Chama a função principal do arquivo carga.js
//     });
//     sleep(1);
// }


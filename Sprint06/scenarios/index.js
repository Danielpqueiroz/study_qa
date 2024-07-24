import GetUsuarios from "./individual/Get-Customer.js";
import GetAllUsuarios from "./individual/Get-AllCustomers.js";
import { group, sleep } from 'k6';

export default function() {
    group('GETCUSTOMER - Controller Customer', () => {
        GetCustomer();
    });
    sleep(1);

    group('GETALLCUSTOMER - Controller Customer', () => {
        GetAllCustomers();
    });

    sleep(1);
}

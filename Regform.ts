// #### Task 1 💻
// - Класс регистрационная форма. Описать каждое поле формы методом, входными и выходными значениями.
// - Создать тестовый фреймворк для юнит тестов по описанной регистрационной форме:
// - реализовать минимум 15 положительных кейсов
// - реализовать минимум 15 негативных кейсов
// - тестовый фреймворк брать на свое усмотрение: Mocha или Jest

import { names } from "./names";
import { passwords } from "./passwords";
import { surnames } from "./surnames";
//Регистрационная форма создана для регистрации пользователей из существующего готового списка.
//Имена, фамилии и пароли у пользователей уже есть
//Форма их регистрирует, а мы тестируем метод формы 
export default class RegistrationForm {
    constructor(public name: any, public surname: any, public password: any) {
        this.name = name;
        this.surname = surname;
        this.password = password;
    }
    registerUsername() {
        for (var i = 0; i < names.length; i++) {
           if (names[i] === this.name && typeof(names[i]) == "string" && names[i].length < 10) {
                    return true;
                }
            }
            return false;
        }
    registerUsersurename() {
            for (var i = 0; i < surnames.length; i++) {
               if (surnames[i] === this.surname && typeof(surnames[i]) == "string" && surnames[i].length < 10) {
                    return true;
                    }
                }
                return false;
            }
    registerUserpassword() {
            for (var i = 0; i < passwords.length; i++) {
                if (passwords[i] === this.password && typeof(passwords[i]) == "number") {
                         return true;
                    }
                }
                    return false;
            }
}
let form = new RegistrationForm("Tom", "Brown", 'tom@gmail.com')
form.registerUsername()
